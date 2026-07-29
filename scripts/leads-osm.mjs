#!/usr/bin/env node
/**
 * Lead-Liste: Handwerksbetriebe in Köln und Umgebung OHNE Website.
 * Quelle: OpenStreetMap über die Overpass-API — kostenlos, kein Schlüssel nötig.
 *
 * Ersatz für die DataForSEO-Variante (leads.mjs), solange dort kein Guthaben ist.
 * Nachteil gegenüber DataForSEO: keine Google-Bewertungen, lückenhaftere Telefonnummern.
 * Vorteil: kostenlos und sofort.
 */
import { writeFileSync, readFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

/** Bounding Box: Köln plus Leverkusen, Bergisch Gladbach, Hürth, Frechen, Pulheim, Brühl, Wesseling */
const BBOX = '50.83,6.77,51.09,7.16';
const KOELN = { lat: 50.9375, lon: 6.9603 };

const QUERY = `
[out:json][timeout:120];
(
  nwr["craft"](${BBOX});
  nwr["shop"="electrical"](${BBOX});
  nwr["shop"="doityourself"]["name"](${BBOX});
  nwr["office"="construction_company"](${BBOX});
);
out center tags;
`;

/** Gewerk-Bezeichnungen auf Deutsch, mit Priorität für bauhandwerkliche Betriebe. */
const TRADES = {
  plumber:            ['Sanitär / Klempner', 1],
  electrician:        ['Elektro', 1],
  hvac:               ['Heizung / Klima', 1],
  carpenter:          ['Tischler / Schreiner', 1],
  roofer:             ['Dachdecker', 1],
  painter:            ['Maler', 1],
  tiler:              ['Fliesenleger', 1],
  plasterer:          ['Stuckateur / Putz', 1],
  metal_construction: ['Metallbau', 1],
  stonemason:         ['Steinmetz', 1],
  glaziery:           ['Glaser', 1],
  scaffolder:         ['Gerüstbau', 1],
  floorer:            ['Bodenleger', 1],
  window_construction:['Fenster & Türen', 1],
  gardener:           ['Garten & Landschaft', 2],
  locksmith:          ['Schlüssel / Schließtechnik', 2],
  key_cutter:         ['Schlüsseldienst', 2],
  chimney_sweeper:    ['Schornsteinfeger', 2],
  electronics_repair: ['Elektronik-Reparatur', 2],
  joiner:             ['Bautischler', 1],
  insulation:         ['Dämmung', 1],
  sawmill:            ['Sägewerk', 3],
  tailor:             ['Schneiderei', 3],
  shoemaker:          ['Schuhmacher', 3],
  photographer:       ['Fotograf', 3],
  goldsmith:          ['Goldschmied', 3],
  upholsterer:        ['Polsterer', 2],
  blacksmith:         ['Schmied', 2],
  brewery:            ['Brauerei', 3],
  caterer:            ['Catering', 3],
  optician:           ['Optiker', 3],
  jeweller:           ['Juwelier', 3],
  bakery:             ['Bäckerei', 3],
};

const dist = (lat, lon) => {
  const R = 6371, toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(lat - KOELN.lat), dLon = toRad(lon - KOELN.lon);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(KOELN.lat)) * Math.cos(toRad(lat)) * Math.sin(dLon / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(a)) * 10) / 10;
};

const pick = (t, keys) => { for (const k of keys) if (t[k]) return t[k]; return ''; };

/* Overpass lehnt fetch() ohne User-Agent mit HTTP 406 ab — deshalb über curl. */
const TMP = '.overpass-raw.json';
execFileSync('curl', [
  '-s', '-m', '150', '-X', 'POST',
  'https://overpass-api.de/api/interpreter',
  '--data-urlencode', `data=${QUERY}`,
  '-o', TMP,
], { stdio: ['ignore', 'ignore', 'inherit'] });

const data = JSON.parse(readFileSync(TMP, 'utf8'));
unlinkSync(TMP);
console.error(`Overpass: ${data.elements.length} Objekte`);

const leads = [];
for (const el of data.elements) {
  const t = el.tags ?? {};
  const name = t.name;
  if (!name) continue;

  const website = pick(t, ['website', 'contact:website', 'url', 'contact:url']);
  if (website) continue;                                   // hat schon eine Website

  const craft = t.craft ?? t.shop ?? t.office ?? 'yes';
  const [trade, rank] = TRADES[craft] ?? [craft.replace(/_/g, ' '), 2];

  const phone = pick(t, ['phone', 'contact:phone', 'contact:mobile', 'mobile']);
  const street = [t['addr:street'], t['addr:housenumber']].filter(Boolean).join(' ');
  const lat = el.lat ?? el.center?.lat;
  const lon = el.lon ?? el.center?.lon;

  leads.push({
    name,
    trade,
    rank,
    street,
    zip: t['addr:postcode'] ?? '',
    city: t['addr:city'] ?? '',
    phone,
    email: pick(t, ['email', 'contact:email']),
    facebook: pick(t, ['contact:facebook']),
    km: (lat && lon) ? dist(lat, lon) : null,
    osm: `https://www.openstreetmap.org/${el.type}/${el.id}`,
    maps: (lat && lon) ? `https://www.google.com/maps/search/${encodeURIComponent(name + ' ' + (t['addr:city'] ?? 'Köln'))}` : '',
  });
}

/**
 * Priorität:
 *   A = Telefon vorhanden + bauhandwerkliches Gewerk + Adresse bekannt
 *   B = Telefon vorhanden, sonst gemischt
 *   C = kein Telefon, aber Name und Adresse → Nummer recherchierbar
 */
const score = (l) => {
  let s = 0;
  if (l.phone) s += 4;
  if (l.rank === 1) s += 2; else if (l.rank === 2) s += 1;
  if (l.street) s += 1;
  if (l.km !== null && l.km <= 12) s += 1;
  return s;
};
const tier = (s) => (s >= 7 ? 'A' : s >= 5 ? 'B' : 'C');

const ranked = leads
  .map((l) => ({ ...l, score: score(l) }))
  .sort((a, b) => b.score - a.score || a.trade.localeCompare(b.trade) || (a.km ?? 99) - (b.km ?? 99));

if (!ranked.length) { console.error('✗ Keine Treffer — nichts geschrieben.'); process.exit(1); }

const counts = { A: 0, B: 0, C: 0 };
ranked.forEach((l) => counts[tier(l.score)]++);
console.error(`Ohne Website: ${ranked.length}  (A ${counts.A} · B ${counts.B} · C ${counts.C})`);
console.error(`Mit Telefonnummer: ${ranked.filter((l) => l.phone).length}`);

const csv = [
  'Prio;Betrieb;Gewerk;Strasse;PLZ;Ort;Telefon;E-Mail;km ab Köln;OSM;Google-Suche',
  ...ranked.map((l) => [
    tier(l.score), l.name, l.trade, l.street, l.zip, l.city,
    l.phone, l.email, l.km ?? '', l.osm, l.maps,
  ].map((v) => String(v).replace(/;/g, ',')).join(';')),
].join('\n');

writeFileSync('leads-handwerk-koeln.csv', csv);
writeFileSync('leads-handwerk-koeln.json', JSON.stringify(ranked.map((l) => ({ ...l, tier: tier(l.score) })), null, 2));
console.error('→ leads-handwerk-koeln.csv / .json geschrieben');
