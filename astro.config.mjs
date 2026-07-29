// @ts-check
import { execFileSync } from 'node:child_process';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

/**
 * Letztes Änderungsdatum je Seite für <lastmod> in der Sitemap.
 *
 * Ohne lastmod fehlt Google das Signal, dass eine Seite sich geändert hat —
 * ein neuer Crawl wird dann nicht priorisiert.
 *
 * Datum = jüngster Commit aus: Seitendatei + geteilte Bausteine (Layout,
 * Komponenten, Tokens). Eine Änderung am Design-System ändert faktisch jede
 * Seite, also zählt sie mit.
 *
 * Fällt auf die Build-Zeit zurück, falls kein Git verfügbar ist (Vercel klont
 * flach) — die Sitemap bleibt so unter allen Umständen gültig.
 */
const gitDate = (paths) => {
  try {
    const out = execFileSync(
      'git',
      ['log', '-1', '--format=%cI', '--', ...paths],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).trim();
    return out ? new Date(out) : null;
  } catch {
    return null;
  }
};

// Nur was tatsächlich in die Seiten hineinrendert — Build-Config gehört nicht dazu,
// sonst behauptet jede Konfigurationsänderung eine inhaltliche Änderung.
const SHARED = ['src/layouts', 'src/components', 'src/styles'];
const sharedDate = gitDate(SHARED);
const buildDate = new Date();

/** URL-Pfad → Quelldatei */
const PAGE_SOURCES = {
  '/': 'src/pages/index.astro',
  '/leistungen/': 'src/pages/leistungen.astro',
  '/leistungen/webdesign-handwerker/': 'src/pages/leistungen/webdesign-handwerker.astro',
  '/leistungen/it-service-koeln/': 'src/pages/leistungen/it-service-koeln.astro',
  '/leistungen/wordpress-agentur-koeln/': 'src/pages/leistungen/wordpress-agentur-koeln.astro',
  '/webdesign-kosten/': 'src/pages/webdesign-kosten.astro',
  '/portfolio/': 'src/pages/portfolio.astro',
  '/ueber-mich/': 'src/pages/ueber-mich.astro',
  '/kontakt/': 'src/pages/kontakt.astro',
  '/impressum/': 'src/pages/impressum.astro',
  '/datenschutz/': 'src/pages/datenschutz.astro',
};

const lastmodFor = (url) => {
  const path = new URL(url).pathname;
  const source = PAGE_SOURCES[path];
  const dates = [source && gitDate([source]), sharedDate].filter(Boolean);
  if (!dates.length) return buildDate;
  return new Date(Math.max(...dates.map((d) => d.getTime())));
};

export default defineConfig({
  site: 'https://www.mb-solutions.biz',
  adapter: vercel(),

  /**
   * Dateien, die es früher gab und die Google noch kennt.
   * Ohne Weiterleitung melden sie 404 in der Search Console — und falls die
   * alte Logo-URL irgendwo extern eingebunden ist, bleibt sie so nutzbar.
   */
  redirects: {
    '/favicon.svg': '/mb-icon-32-favicon.png',
    '/logos/mb-solutions-horizontal.svg': '/logos/mb-logo-horizontal-violett.png',
    '/logos/mb-solutions-horizontal.png': '/logos/mb-logo-horizontal-violett.png',
  },

  integrations: [
    sitemap({
      serialize(item) {
        item.lastmod = lastmodFor(item.url).toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
