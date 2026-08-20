# SEO-Strategie MB-Solutions

Stand: 20.08.2026 · Datenbasis: DataForSEO API (Deutschland/de) +
Search-Console-Export 12 Monate (`searchconsole/`, Stand 18.08.2026)
Visueller Report: siehe Artifact „SEO-Strategie — MB-Solutions Köln"

## Kernbefund

**Der Local Pack schlägt in diesem Markt die organische Suche — das Profil ist vorhanden,
aber ohne Bewertungen wirkungslos.**

Live-SERP „webdesign köln": 6 der ersten 11 Plätze sind Local-Pack-Einträge, das erste
organische Ergebnis steht auf absoluter Position 5.

Belege, dass Autorität hier weniger zählt als Bewertungen:

| Domain | Verweisdomains | Bewertungen | Organisch (ETV) | Local Pack (ETV) |
|---|---:|---:|---:|---:|
| go-webstudio.de | 16 | 21 | 4,8 | **66,8** |
| webdesign-agentur-koeln.com | 38 | 37 | 4,8 | **95,6** |
| mb-solutions.biz | 34 | **0** | 1,3 | **0** |

go-webstudio.de hat **weniger** Verweisdomains als wir und holt 67 Besucher/Monat aus dem
Local Pack. Bei webdesign-agentur-koeln.com kommen 95 % des Traffics aus dem Local Pack.

### Erfolgsmessung nach 12 Monaten (Search Console, 19.08.2025–18.08.2026)

Die erste Messung mit echten Google-Daten statt Schätzwerten. Sie bestätigt den
Kernbefund und widerlegt eine Annahme dieses Dokuments.

| Kennzahl | Wert |
|---|---:|
| Klicks, 12 Monate | **25** |
| Impressionen | 2.273 |
| CTR | 1,1 % |
| Klicks aus ausgewiesenen Nicht-Brand-Suchen | **0** (bei 619 Impressionen) |

Von den 17 Klicks, die Google nach Suchanfrage ausweist, sind **alle 17 Brand-Suchen**.
Die restlichen 8 der insgesamt 25 Klicks liegen in Anfragen, die Google als zu selten
nicht ausweist — über deren Art ist keine Aussage möglich.

**Widerlegte Annahme: niedrige Keyword-Difficulty ≠ erreichbares Ranking.**
`wordpress agentur köln` war mit KD 2 als leichtes Ziel eingeplant. Tatsächliches
Ergebnis nach drei Wochen live:

| | Wert |
|---|---:|
| `/leistungen/wordpress-agentur-koeln/` | 528 Impressionen, **0 Klicks**, Position **48,8** |
| WordPress-Cluster gesamt (25 Suchanfragen) | 547 Impressionen, 0 Klicks, gewichtete Position **50,3** |
| Anteil an allen Nicht-Brand-Impressionen | 88 % |

Der Impressionssprung ab 30.07. (5,0 → 31,3 Impressionen/Tag) sieht nach Fortschritt aus,
brachte in 20 Tagen aber **2 Klicks** und verschlechterte die Durchschnittsposition von
12,4 auf 31,8. Position 50 ist Seite 5. KD misst die Konkurrenz, nicht die eigene
Autorität — mit einer echten Verweisdomain rankt auch ein leichtes Keyword auf Seite 5.

**Die Brand-Suche ist nicht gewonnen.** `mb solutions`: 608 Impressionen, Position **9,25**,
13 Klicks. Beim eigenen Namen. Die Suchanfragenliste zeigt die Ursache — Namensvettern:
`mb solutions gmbh`, `mba solutions`, `mb solutions a/s`, `mb digital solutions`,
`mb solutions eschwege`. 982 Brand-Impressionen ergaben 17 Klicks. Das ist ein
Entity-Problem, kein Ranking-Problem, und über Profil + konsistente Citations lösbar.

**Kern-Geldkeywords sind nicht platziert, sondern abwesend:**
`webdesign köln` Position 132,5 · `webdesigner köln` 111,0 · `seo agentur köln` 165,2 ·
`corporate design köln` 62,0.

Weitere Befunde: Mobil 1,95 % CTR bei Position 11,3 gegen Desktop 0,67 % bei Position 25,9
(die Desktop-Impressionen sind fast alle die tief rankende WordPress-Seite) · 326 der 2.273
Impressionen (14 %) kommen aus Ländern außerhalb DACH auf Position ~48, generische
WordPress-Anfragen — Rauschen.

Geprüft und unbedenklich: `mb-solutions.biz` → `www` leitet per 308 weiter; `/leistungen`
und `/leistungen/` liefern beide 200, zeigen aber konsistent dasselbe Canonical. Die
www/non-www-Aufteilung im Export ist historisch (die Domain-Property aggregiert beides).
Offen und bewusst so gelassen: `/marketing-agentur-koeln/content-marketing-koeln` (22
Impressionen) und `.../seo-agentur-koeln` (18) geben 404 zurück. Ein Redirect auf
`/leistungen/` wäre eine Themenlüge — beide Leistungen werden nicht angeboten.

**Konsequenz für die Roadmap:** Phase 2 wird ausgesetzt. Weitere Landingpages erzeugen
weitere Seiten auf Position 50. Was Position 50 auf Position 10 hebt, ist Autorität —
Bewertungen und echte Verweisdomains. Beides beginnt beim ersten Kunden.

### Status Google-Unternehmensprofil

Profil **existiert**: „MB-Solutions – Webdesign, IT-Services & Marketing", Kategorie
„Webdesigner", Service-Area-Business für „Köln und Umgebung", cid 18193281538995383101,
Telefon und Öffnungszeiten gesetzt. Nachgewiesen über den Knowledge-Graph-Eintrag in der
SERP zur Markensuche.

**Fehlend: Bewertungen.** Der `google_reviews`-Block der SERP kam ohne Sterne und ohne
Stimmenzahl zurück; bei allen Local-Pack-Wettbewerbern liegen dort 21–133 Stimmen.

> Hinweis zur Methode: `business_data_business_listings_search` findet dieses Profil **nicht**
> (0 Treffer bei Radius 25 km und 50 km, auch mit exaktem Profilnamen), weil der Endpoint über
> Koordinaten sucht und ein Service-Area-Business keine öffentliche Adresse hinterlegt hat.
> Eine erste Fassung dieses Dokuments schloss daraus fälschlich, es gebe kein Profil.
> Für SAB-Profile ist die Markensuche-SERP die verlässliche Quelle, nicht die Listings-API.

### Offene Punkte am Profil

- Profilname enthält „Marketing" (nicht im Leistungsangebot der Website), „Branding" fehlt
- Sekundäre Kategorien „IT-Dienstleister" und „Grafikdesigner" prüfen/ergänzen
- Gelbe Seiten ist bereits als Verzeichniseintrag vorhanden
  (`gelbeseiten.de` → „MB-Solutions in 51107 Köln-Rath/Heumar")

## Ausgangswerte (gemessen)

- 2 Ranking-Keywords (beide Verwechslung mit „MBA Solutions GmbH")
- 1,3 Besucher/Monat organisch, 0 aus dem Local Pack
- 0 Google-Bewertungen (Local-Pack-Schwelle: ~21)
- 34 Verweisdomains, davon **1 echte** im Backlink-Index (cylex.de); Rest Scraper-Spam
- Lighthouse: Performance 100, SEO 100, Best Practices 100, Barrierefreiheit 93
- 7 indexierte Seiten

## Architektur-Blueprint (abgeleitet von webdesign.koeln)

webdesign.koeln erreicht 493 Besucher/Monat mit nur 48 Verweisdomains. Drei Seitentypen:

1. **Money-Seite** (Startseite) → „webdesign köln" Pos. 1 = 267 ETV = 54 % des Gesamt-Traffics
2. **Referenz-Seiten** `/portfolio/{kundenname}/` → ranken für **Kundennamen**
   (decksteiner mühle: 5.400 Suchen/Mon., galanti: 1.000, kuttenkeuler: 880)
3. **Branchen-Seiten** `/branchen/{branche}/` → „webdesign + Branche"
4. Ergänzend: Themen-Seiten (z. B. `/barrierefreies-webdesign/`, KD 21)

**Wichtigste Übertragung:** Jedes echte Kundenprojekt bekommt eine eigene URL mit dem
Kundennamen. Diese Suchanfragen existieren unabhängig von Webdesign-Interesse und haben
fast keinen Wettbewerb. Konzeptprojekte leisten das nicht.

## Ziel-Architektur

```
/
├── index                              → webdesign köln (Phase 4)
├── leistungen                         → Übersicht, bleibt
│   ├── webdesign-handwerker      NEU  → 720 Suchen · KD 11
│   ├── wordpress-agentur-koeln   NEU  → 140 Suchen · KD 2
│   ├── it-service-koeln          NEU  → 140 + 50 Suchen · KD 10 / 2
│   └── branding-corporate-design NEU  → 90 + 50 Suchen
├── webdesign-kosten              NEU  → 210 Suchen · KD 9 · CPC 14,68 €
├── branchen/                     NEU  (Phase 2)
│   ├── handwerk
│   ├── gastronomie
│   └── praxen-und-kanzleien
├── regionen/                     NEU  (Phase 2, max. 5 Seiten!)
│   ├── webdesign-leverkusen           → 90 Suchen · KD 3
│   └── webdesign-bergisch-gladbach    → 70 Suchen · KD 28
├── portfolio
│   └── {kundenname}              NEU  → rankt für Kundennamen
├── ueber-mich · kontakt
└── impressum · datenschutz
```

## Keyword-Prioritäten

### Sofort (Phase 1) — zusammen 1.260 Suchen/Monat
| Keyword | Vol. | KD | CPC |
|---|---:|---:|---:|
| webdesign für handwerker | 720 | 11 | 5,90 € |
| homepage erstellen lassen kosten | 210 | 9 | 14,68 € |
| wordpress agentur köln | 140 | **2** | 13,21 € |
| it service köln | 140 | 10 | 17,89 € |
| systemhaus köln | 50 | **2** | 19,94 € |

### Phase 2
webentwickler köln (110, KD 8) · webdesign beratung (140, KD 7) ·
webdesign leverkusen (90, KD 3) · wordpress köln (90, KD 20) ·
corporate design erstellen lassen (90) · webdesign bergisch gladbach (70, KD 28) ·
it dienstleister köln (170, KD 26) · branding agentur köln (50, KD 10) ·
logo erstellen lassen kosten (30, KD 5)

### Phase 3
barrierefreies webdesign (320, KD 21) · internetagentur köln (140, KD 19) ·
website erstellen lassen köln (260, KD 33) · it support köln (70) · webdesign hürth (20, KD 16)

### Phase 4
webdesign köln (880, KD 33) · webdesign agentur köln (260, KD 38)

### Nicht ansteuern
- **website für handwerker** (880) — KD 63; der Zwilling „webdesign für handwerker" liefert
  fast dasselbe Volumen bei KD 11
- **webseite erstellen lassen** (880) — KD 59
- **webdesign firma** (320) — KD 91
- **website köln** (40) — KD 100

> Achtung: Google-Ads-„Competition" ≠ organische Difficulty. „website für handwerker" hat
> Ads-Konkurrenz 47 (mittel), aber KD 63.

## Roadmap

### Phase 0
- [ ] **Bewertungen einsammeln** — der Engpass, und weiterhin offen: es gibt noch keine
      Kunden. Auflösung siehe „Akquise" unten. Ziel kurzfristig 5, mittelfristig 21
- [x] Profilname korrigiert: „Marketing" → „Branding" (Konsistenz zur Website)
- [x] Öffnungszeiten vereinheitlicht: **Mo–Fr 08:00–18:00** überall
      (Website-Schema von 09:00 angepasst, Commit e3c6e5a)
- [x] Verzeichnisse, 7 von 16: Gelbe Seiten, Cylex, wlw, Das Örtliche,
      Das Telefonbuch, Kölner Branchen, Bing Places
- [ ] Offen: Apple Business Connect, OpenStreetMap, 11880, meinestadt, golocal,
      IHK Köln, koeln.de, Sortlist — flacherer Ertrag, keine Eile
- [x] NAP-Block + Beschreibungstexte + Bildassets vorbereitet (`brand-assets/`)

**Stand:** Alle Verzeichnisse aus Googles eigenem Ortsblock sind erledigt.
Verweisdomains: 1 bestätigt, 4–6 erwartet sobald die neuen Einträge freigegeben sind.

### Akquise — Ersatz für den Bewertungs-Engpass
Der Local Pack hat ein Henne-Ei-Problem: keine Kunden → keine Bewertungen → keine
Sichtbarkeit. Die ersten Kunden müssen aus aktiver Ansprache kommen.
- [x] Lead-Liste: **63 anrufbare Betriebe** ohne Website, alle mit Telefonnummer
      (39 Prio A + 24 Prio B in `leads-handwerk-koeln.csv`; 250 weitere Prio C ohne
      Nummer). Eine frühere Fassung nannte hier 32 — diese Zahl lässt sich aus keinem
      Filter der Datei reproduzieren und war falsch.
      (`leads-handwerk-koeln.csv`, Script `scripts/leads-osm.mjs`)
- [ ] Erste Anrufe — Gesprächsleitfaden liegt im Artifact
- [ ] Erste 2–3 Aufträge: reduzierter Preis gegen Bewertung + öffentliche Referenz

### Phase 1 — Woche 2–6
- [x] `/leistungen/webdesign-handwerker` — 720 Suchen, KD 11 (Commit f78dab6)
- [x] `/webdesign-kosten` — 210 Suchen, KD 9 (Commit f78dab6)
- [x] `/leistungen/it-service-koeln` — 140 + 50 Suchen, KD 10 / 2 (Commit 5ca4d14)
- [x] `/leistungen/wordpress-agentur-koeln` — 140 + 90 Suchen, KD 2 / 20
      (WordPress ist bestätigt im Angebot)
- [x] Interne Verlinkung von Startseite, /leistungen und Footer

**Ziel:** 15–25 Ranking-Keywords
**Status:** ✅ abgeschlossen — 4 von 4 Seiten live, Sitemap bei 11 URLs (vorher 7).
Adressiertes Suchvolumen: 1.350/Monat bei KD 2–20.

### Phase 2 — AUSGESETZT (siehe Erfolgsmessung)

Begründung: Seiten ranken, aber auf Position ~50. Erst Autorität, dann mehr Seiten.
- [x] `/leistungen/branding-corporate-design` — 90 + 50 + 30 Suchen, KD 5–10
      (Commit 4ee236e). Damit hat jede der drei Säulen eine eigene Landingpage.
- [ ] `/regionen/webdesign-leverkusen` — 90 Suchen, **KD 3**
- [ ] `/branchen/gastronomie`
- [ ] `/branchen/praxen-und-kanzleien`
- [ ] `/regionen/webdesign-bergisch-gladbach` — 70 Suchen, KD 28

**Sitemap:** 12 URLs (Start: 7). Adressiertes Suchvolumen: ~1.520/Monat bei KD 2–20.

### Phase 2 — Monat 2–4
- [ ] Branchen-Seiten: handwerk, gastronomie, praxen-und-kanzleien
- [ ] Regionen-Seiten: leverkusen, bergisch-gladbach (max. 5 insgesamt)
- [ ] Branding-Seite (corporate design + branding agentur köln)
- [ ] Erstes echtes Kundenprojekt als eigene Portfolio-URL

**Ziel:** 40–60 Ranking-Keywords

### Phase 3 — Monat 5–8
- [ ] Themen-Seite Barrierefreiheit (320 Suchen, KD 21 — eigene Seite hat 93/100)
- [ ] Themen-Seite Website-Geschwindigkeit (eigene Seite: 434 ms, Performance 100)
- [ ] Verweisdomains auf 25–40 (Kunden-Websites, lokale Vereine, Gastbeiträge)
- [ ] Bewertungen auf 20+

### Phase 4 — Monat 9–12
- [ ] Startseite auf „webdesign köln" schärfen (Ort in die H1, nicht nur Title)
- [ ] Local Pack fürs Hauptkeyword (Bewertungen + Profil-Vollständigkeit)
- [ ] „webdesign agentur köln" als zweites Ziel

## Ziele (Prognosen, keine Zusage)

| Kennzahl | Heute | 3 Mon. | 6 Mon. | 12 Mon. | Referenz |
|---|---:|---:|---:|---:|---|
| Ranking-Keywords | 2 | 15–25 | 40–60 | 70–100 | webdesign.koeln: 78 |
| Besucher/Mon. organisch | 1,3 | 20–40 | 60–120 | 150–250 | maigut-media: 51 |
| Besucher/Mon. Local Pack | 0 | 10–30 | 30–60 | 60–100 | go-webstudio: 67 |
| Echte Verweisdomains | 1 | 10–15 | 20–30 | 35–50 | webdesign.koeln: 48 |
| Google-Bewertungen | 0 | 5–10 | 12–20 | 20–35 | Local-Pack-Schwelle: 21 |
| Indexierte Seiten | 7 | 12 | 18 | 22–25 | Qualität vor Menge |

## Risiken

1. **Keine Bewertungen** → kein Local Pack → halber Plan fällt weg. Größtes Einzelrisiko,
   hängt an der Kundenkommunikation, nicht an der Website.
2. **Dünne Seiten in die Breite** → Regionen-Seiten mit ausgetauschten Städtenamen sind
   Doorway-Pages. Harte Grenze: 5 Seiten, jede mit echtem eigenen Inhalt.
3. **Keine echten Referenzen** → der Referenz-Seiten-Mechanismus (stärkster Hebel) setzt
   echte Kundenprojekte voraus.
4. **Zu früh aufs Hauptkeyword** → „webdesign köln" in Monat 2 verbrennt Zeit, die in
   Phase 1 fünffach wirkt.

## Erledigt

- [x] Sitemap mit `<lastmod>` aus Git-Historie (Commit 30cb0f0)
- [x] IndexNow für Bing/Copilot (`npm run indexnow`)
- [x] Sitemap in GSC neu eingereicht, 3 Seiten zur Indexierung angemeldet
- [x] JSON-LD-Bug behoben (Commit b64d597)
