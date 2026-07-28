# SEO-Strategie MB-Solutions

Stand: 28.07.2026 · Datenbasis: DataForSEO API (Deutschland/de)
Visueller Report: siehe Artifact „SEO-Strategie — MB-Solutions Köln"

## Kernbefund

**Der Local Pack schlägt in diesem Markt die organische Suche — und es existiert kein
Google-Unternehmensprofil.**

Live-SERP „webdesign köln": 6 der ersten 11 Plätze sind Local-Pack-Einträge, das erste
organische Ergebnis steht auf absoluter Position 5.

Belege, dass Autorität hier weniger zählt als ein Profil:

| Domain | Verweisdomains | Organisch (ETV) | Local Pack (ETV) |
|---|---:|---:|---:|
| go-webstudio.de | 16 | 4,8 | **66,8** |
| webdesign-agentur-koeln.com | 38 | 4,8 | **95,6** |
| mb-solutions.biz | 34 | 1,3 | **0** |

go-webstudio.de hat **weniger** Verweisdomains als wir und holt 67 Besucher/Monat aus dem
Local Pack. Bei webdesign-agentur-koeln.com kommen 95 % des Traffics aus dem Local Pack.

Prüfung Unternehmensprofil: `business_data_business_listings_search`, Titel „MB-Solutions",
Radius 25 km um Köln → 0 Treffer. Gegenprobe für andere Kölner Anbieter → Treffer.
Zusätzlich: keine Local-Pack-Metrik in der Traffic-Schätzung.

## Ausgangswerte (gemessen)

- 2 Ranking-Keywords (beide Verwechslung mit „MBA Solutions GmbH")
- 1,3 Besucher/Monat organisch, 0 aus dem Local Pack
- 34 Verweisdomains, davon **1 echte** (cylex.de); Rest Scraper-Spam
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

### Phase 0 — Diese/nächste Woche · HÖCHSTE PRIORITÄT
- [ ] Google-Unternehmensprofil anlegen + verifizieren
      (Kategorien: Webdesigner primär, IT-Dienstleister + Grafikdesigner sekundär)
- [ ] Erste Bewertungen einsammeln (Local-Pack-Schwelle: ~21)
- [ ] Verzeichnisse aus der SERP: Gelbe Seiten, Das Örtliche, Das Telefonbuch,
      Kölner Branchen, wlw, Sortlist — identische NAP-Schreibweise überall
- [ ] IHK-/Handwerkskammer-Eintrag prüfen

**Ziel:** Profil live, 5+ Bewertungen, 8–12 echte Verweisdomains

### Phase 1 — Woche 2–6
- [ ] `/leistungen/webdesign-handwerker`
- [ ] `/webdesign-kosten` (nutzt den Festpreis-Vorteil)
- [ ] `/leistungen/wordpress-agentur-koeln` (nur wenn WordPress wirklich angeboten wird)
- [ ] `/leistungen/it-service-koeln`
- [ ] Interne Verlinkung von Startseite + /leistungen (nicht nur Navigation)

**Ziel:** 15–25 Ranking-Keywords

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
