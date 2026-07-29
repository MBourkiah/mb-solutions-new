#!/usr/bin/env node
/**
 * Lead-Liste: Kölner Handwerksbetriebe OHNE hinterlegte Website.
 * Quelle: öffentliche Google-Brancheneinträge über die DataForSEO Business-Data-API.
 *
 * Filter: url = null  → kein Website-Eintrag im Google-Profil
 */
import { execFileSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';

const SCRIPT = new URL('./dfs.mjs', import.meta.url).pathname;

const CATEGORIES = [
  ['plumber',              'Sanitär / Klempner'],
  ['electrician',          'Elektro'],
  ['painter',              'Maler'],
  ['roofing_contractor',   'Dachdecker'],
  ['carpenter',            'Tischler / Schreiner'],
  ['hvac_contractor',      'Heizung / Klima'],
  ['general_contractor',   'Bau / Ausbau'],
  ['landscaper',           'Garten & Landschaft'],
  ['flooring_contractor',  'Bodenleger'],
  ['locksmith',            'Schlüssel / Schließtechnik'],
  ['tile_contractor',      'Fliesenleger'],
  ['masonry_contractor',   'Maurer'],
  ['chimney_sweep',        'Schornsteinfeger'],
  ['glazier',              'Glaser'],
];

/** API liefert max. 10 Treffer je Aufruf → paginieren. */
const PAGES = 3;

const KOELN = { lat: 50.9375, lon: 6.9603 };
const RADIUS = 18;

const dist = (lat, lon) => {
  const R = 6371, toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat - KOELN.lat), dLon = toRad(lon - KOELN.lon);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(KOELN.lat)) * Math.cos(toRad(lat)) * Math.sin(dLon / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(a)) * 10) / 10;
};

const all = new Map();

for (const [id, label] of CATEGORIES) {
  const items = [];
  for (let page = 0; page < PAGES; page++) {
    const args = JSON.stringify({
      categories: [id],
      location_coordinate: `${KOELN.lat},${KOELN.lon},${RADIUS}`,
      limit: 10,
      offset: page * 10,
      filters: [['url', '=', null]],
      order_by: ['rating.votes_count,desc'],
    });
    let batch = [];
    try {
      const out = execFileSync('node', [SCRIPT, 'call', 'business_data_business_listings_search', args],
        { encoding: 'utf8', maxBuffer: 60 * 1024 * 1024 });
      batch = JSON.parse(out).items ?? [];
    } catch (e) {
      console.error(`  ! ${label} (Seite ${page + 1}): ${String(e.message).slice(0, 90)}`);
      break;
    }
    items.push(...batch);
    if (batch.length < 10) break;             // letzte Seite erreicht
  }
  console.error(`  ${label.padEnd(28)} ${items.length}`);

  for (const b of items) {
    if (!b.cid || all.has(b.cid)) continue;
    if (b.url) continue;                       // Sicherheitsnetz
    if (b.address_info?.country_code !== 'DE') continue;
    all.set(b.cid, {
      name: b.title,
      trade: label,
      address: b.address ?? '',
      city: b.address_info?.city ?? b.address_info?.borough ?? '',
      zip: b.address_info?.zip ?? '',
      phone: b.phone ?? '',
      rating: b.rating?.value ?? null,
      votes: b.rating?.votes_count ?? 0,
      claimed: b.is_claimed === true,
      km: (b.latitude && b.longitude) ? dist(b.latitude, b.longitude) : null,
      maps: b.cid ? `https://www.google.com/maps?cid=${b.cid}` : '',
    });
  }
}

const leads = [...all.values()]
  // Ohne Telefonnummer ist kein Anruf möglich
  .filter((l) => l.phone)
  .map((l) => {
    // Priorität: bewiesene Nachfrage (Bewertungen) + gepflegtes Profil + Nähe
    let score = 0;
    if (l.votes >= 20) score += 3; else if (l.votes >= 5) score += 2; else if (l.votes >= 1) score += 1;
    if (l.claimed) score += 2;
    if (l.km !== null && l.km <= 10) score += 1;
    if (l.rating !== null && l.rating >= 4.5) score += 1;
    return { ...l, score };
  })
  .sort((a, b) => b.score - a.score || b.votes - a.votes);

const tier = (s) => (s >= 6 ? 'A' : s >= 4 ? 'B' : 'C');

console.error(`\nGesamt: ${leads.length} Betriebe ohne Website (mit Telefonnummer)`);
console.error(`A: ${leads.filter(l => tier(l.score) === 'A').length}  ` +
              `B: ${leads.filter(l => tier(l.score) === 'B').length}  ` +
              `C: ${leads.filter(l => tier(l.score) === 'C').length}`);

// CSV für Tabellenkalkulation
// Niemals ein gutes Ergebnis mit einem leeren überschreiben.
if (!leads.length) {
  console.error('\n✗ Keine Treffer — Dateien bleiben unverändert.');
  process.exit(1);
}

const csv = [
  'Prio;Betrieb;Gewerk;Adresse;PLZ;Ort;Telefon;Bewertung;Anzahl;Profil gepflegt;km;Maps',
  ...leads.map(l => [
    tier(l.score), l.name, l.trade, l.address, l.zip, l.city, l.phone,
    l.rating ?? '', l.votes, l.claimed ? 'ja' : 'nein', l.km ?? '', l.maps,
  ].map(v => String(v).replace(/;/g, ',')).join(';')),
].join('\n');

writeFileSync('leads-handwerk-koeln.csv', csv);
writeFileSync('leads-handwerk-koeln.json', JSON.stringify(leads, null, 2));
console.error('\n→ leads-handwerk-koeln.csv / .json geschrieben');
