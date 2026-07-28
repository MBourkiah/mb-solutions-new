#!/usr/bin/env node
/**
 * Meldet alle URLs der Sitemap per IndexNow zur Neuindexierung an.
 *
 * Wichtig: IndexNow bedienen Bing, Yandex, Seznam und Naver — NICHT Google.
 * Google hat das Protokoll ausdrücklich nicht übernommen. Für Google bleiben
 * die Sitemap mit <lastmod> und die manuelle URL-Prüfung in der Search Console.
 * Relevanz trotzdem hoch: Microsoft Copilot zitiert aus dem Bing-Index.
 *
 * Aufruf:  npm run indexnow
 */
const KEY = '135f4167a50c4a69bc4488b21d314937';
const HOST = 'www.mb-solutions.biz';
const SITEMAP = `https://${HOST}/sitemap-0.xml`;

const die = (msg) => { console.error(`✗ ${msg}`); process.exit(1); };

const sitemapRes = await fetch(SITEMAP).catch(() => null);
if (!sitemapRes?.ok) die(`Sitemap nicht erreichbar: ${SITEMAP}`);

const xml = await sitemapRes.text();
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urls.length) die('Keine URLs in der Sitemap gefunden.');

console.log(`${urls.length} URLs aus der Sitemap gelesen:`);
urls.forEach((u) => console.log(`  ${u}`));

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

// IndexNow: 200 = angenommen, 202 = angenommen, Key wird noch geprüft
if (res.status === 200 || res.status === 202) {
  console.log(`\n✓ IndexNow hat die Meldung angenommen (HTTP ${res.status}).`);
  console.log('  Wirkt für Bing, Yandex, Seznam, Naver — nicht für Google.');
} else {
  const body = await res.text().catch(() => '');
  die(`IndexNow antwortete HTTP ${res.status}. ${body.slice(0, 300)}`);
}
