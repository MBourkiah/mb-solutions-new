---
name: MB-Solutions
description: Webdesign, IT und Branding aus Köln — Tiefviolett auf Papier, gedruckt statt gerendert.
colors:
  papier: "#FAF8F4"
  papier-alt: "#F2EFE8"
  blatt: "#FFFFFF"
  tinte: "#1E1B2E"
  tinte-2: "#524E66"
  tinte-3: "#767093"
  tiefviolett: "#2A2260"
  tiefviolett-2: "#221B52"
  auf-tiefviolett: "#F5F3FC"
  signatur: "#5B4FD1"
  signatur-kraeftig: "#4A3EC2"
  signatur-hell: "#A99EF5"
  signatur-lasur: "#ECE9FB"
typography:
  display:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8.5vw, 6.75rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque Variable, Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 2.6vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Instrument Sans Variable, Instrument Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Spline Sans Mono Variable, Spline Sans Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "14px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "44px"
components:
  button-primary:
    backgroundColor: "{colors.signatur}"
    textColor: "#FFFFFF"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "15px 28px"
  button-primary-hover:
    backgroundColor: "{colors.signatur-kraeftig}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "15px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.tinte}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-light:
    backgroundColor: "{colors.auf-tiefviolett}"
    textColor: "{colors.tiefviolett}"
    rounded: "{rounded.md}"
    padding: "15px 28px"
  card:
    backgroundColor: "{colors.blatt}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.lg}"
    padding: "clamp(1.75rem, 3vw, 2.25rem)"
  input:
    backgroundColor: "{colors.papier}"
    textColor: "{colors.tinte}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
---

# Design System: MB-Solutions

## Overview

**Creative North Star: „Das Angebot auf Papier"**

Das Dokument, das ein Handwerksbetrieb ernst nimmt: gesetzt, präzise, unterschrieben.
Kein Bildschirm, der so tut, als wäre er ein Bildschirm — eine Fläche, die so tut, als
läge sie auf dem Tresen. Papier trägt, Tinte schreibt, und genau eine Farbe unterschreibt.
Das ist keine Stilübung: Die Positionierung des Produkts ist „Festpreis vor Projektstart,
eine Person, kein Agentursprech". Ein gedrucktes Angebot ist die physische Form
derselben Aussage.

Die Dichte ist ruhig, aber nicht leer. Text führt, Linien gliedern, Flächen wechseln
nur dort, wo ein Abschnitt wirklich einen anderen Charakter hat. Die dunklen
Tiefviolett-Sections sind keine Dekoration, sondern Taktwechsel — sie markieren Prozess,
Handlungsaufforderung und Fuß. Bewegung hängt an der Scroll-Position statt an Timern:
Eine Linie zeichnet sich, während ein Band in den Blick kommt, und eine Vergleichstabelle
baut sich Zeile für Zeile auf, weil sie sich wie ein Argument liest.

Bewusst abgelehnt: die generische Agentur-Vorlage. Konkret bedeutet das — keine
Eyebrow-Labels über jeder Überschrift, keine 01/02/03-Nummern als Zierrat (nur dort, wo
eine echte Reihenfolge existiert), keine Häkchen-Badge-Reihen, keine schwebenden
Deko-Formen, keine Stock-Fotos von Personen, Büros oder Teams. Diese Elemente wurden
aus dem System entfernt, nicht vergessen.

**Key Characteristics:**
- Papier als Grund, nicht Weiß — `#FAF8F4` mit kaum wahrnehmbarem Korn (Opazität 0,035)
- Genau ein Akzent, sparsam wie ein Stempel
- Dünne Linien statt Karten, wo immer eine Liste ausreicht
- Enge Radien (4/8/14px) — nichts wirkt weich oder verspielt
- Selbst gehostete Schriften, kein CDN — Ladezeit ist Teil der Arbeitsprobe

## Colors

Eine Papierwelt mit genau einer Signaturfarbe: warme, entsättigte Grundtöne, ein dunkler
Violett-Grund für Taktwechsel, und ein einziger gesättigter Akzent, der dadurch wirkt,
dass er selten ist.

### Primary
- **Signatur-Violett** (`#5B4FD1`): Der einzige Akzent im System. Primärbuttons, Links mit
  Pfeil, Häkchen in Vorteilslisten, Fokusringe, die aktive Navigationsunterstreichung,
  die Spaltenüberschrift „Mit mir" im Vergleich. Nie als Fläche über mehr als einen
  Button hinaus.
- **Signatur kräftig** (`#4A3EC2`): Ausschließlich Hover- und Aktiv-Zustand des
  Primärbuttons sowie Fließtext-Links auf hellem Grund.
- **Signatur hell** (`#A99EF5`): Dieselbe Stimme auf dunklem Grund — aktive Links im
  Mobilmenü, Akzente innerhalb der Tiefviolett-Sections. Nie auf Papier.
- **Signatur-Lasur** (`#ECE9FB`): Flächige Einfärbung für Hervorhebungen und
  Textmarkierung. Der einzige Weg, den Akzent großflächig einzusetzen.

### Secondary
- **Tiefviolett** (`#2A2260`): Grund der Kontrast-Sections — Prozess, Handlungsaufforderung,
  Fuß. Markiert einen Taktwechsel im Seitenfluss, keine Hierarchie.
- **Tiefviolett-2** (`#221B52`): Abstufung innerhalb dunkler Sections, etwa für abgesetzte
  Blöcke.
- **Auf Tiefviolett** (`#F5F3FC`): Textfarbe auf dunklem Grund, plus Fläche des hellen
  Buttons dort.

### Neutral
- **Papier** (`#FAF8F4`): Seitengrund. Nie durch reines Weiß ersetzen.
- **Papier-Alt** (`#F2EFE8`): Der zweite Ton für Sections, die sich absetzen sollen, ohne
  dunkel zu werden (aktuell: Über-mich).
- **Blatt** (`#FFFFFF`): Reserviert für aufliegende Elemente — Karten, Hinweiskästen,
  Formularflächen. Weiß ist im System ein *Objekt*, kein Hintergrund.
- **Tinte** (`#1E1B2E`): Überschriften und primärer Text.
- **Tinte-2** (`#524E66`): Fließtext und Beschreibungen. Trägt den größten Teil der Lesemenge.
- **Tinte-3** (`#767093`): Beschriftungen, Platzhalter, bewusst zurückgenommene
  Vergleichswerte.
- Linien: `rgba(30,27,46,0.12)` für feine Trennung, `rgba(30,27,46,0.22)` für strukturelle
  Bänder.

### Named Rules

**Die Stempel-Regel.** Der Akzent erscheint auf höchstens 10 % einer Ansicht. Ein
Primärbutton pro Blickfeld, sonst nur Linien, Häkchen und Pfeile. Wird er häufiger
eingesetzt, verliert er genau die Funktion, für die er da ist.

**Die Papier-Regel.** `#FFFFFF` ist kein Hintergrund. Wo Weiß erscheint, liegt etwas
auf dem Papier — und was aufliegt, wirft Schatten (siehe Elevation & Depth).

**Die Ein-Stimme-Regel.** Es gibt keine zweite Akzentfarbe. Semantische Zustände (Erfolg,
Fehler) dürfen eigene Farben haben, aber keine dekorative Zweitfarbe tritt hinzu.

## Typography

**Display Font:** Bricolage Grotesque Variable (Fallback: system-ui, sans-serif)
**Body Font:** Instrument Sans Variable (Fallback: system-ui, sans-serif)
**Label/Mono Font:** Spline Sans Mono Variable (Fallback: ui-monospace, monospace)

**Character:** Bricolage Grotesque ist eine Grotesk mit leichten Unregelmäßigkeiten —
sie wirkt gesetzt statt generiert und trägt bei großen Graden Persönlichkeit, ohne
dekorativ zu werden. Instrument Sans darunter ist neutral und ruhig, damit die Displaygrade
allein sprechen. Spline Sans Mono übernimmt Beschriftungen und Zahlen: Sie signalisiert
Genauigkeit und ist im Papier-Bild das Äquivalent zur Maschinenschrift auf einem Formular.
Alle drei sind selbst gehostet (`@fontsource-variable`) — kein Google-Fonts-CDN, aus
Datenschutz- und Ladezeitgründen.

### Hierarchy
- **Display** (800, `clamp(3rem, 8.5vw, 6.75rem)`, LH 0.98, LS -0.03em): Nur die H1 im
  Hero. Auf höchstens 13 Zeichen Breite begrenzt, damit der Umbruch gesetzt wirkt.
- **Headline** (800, `clamp(2.25rem, 4.5vw, 3.5rem)`, LH 1.04, LS -0.025em): Section-H2.
  Maximal etwa 15 Zeichen pro Zeile.
- **Title** (700, `clamp(1.375rem, 2.6vw, 1.875rem)`, LH 1.12, LS -0.02em): H3 in
  Leistungsbändern und Karten.
- **Body** (400, `1.0625rem`, LH 1.7): Fließtext in Tinte-2. Zeilenlänge 50–68 Zeichen;
  Rechtstexte laufen enger (max. 46rem Spaltenbreite).
- **Label** (500, `11px`, LS 0.12em, Versalien): Spalten- und Feldbeschriftungen,
  Datumsangaben, Tabellenköpfe. Ausschließlich Mono.

### Named Rules

**Die Kein-Eyebrow-Regel.** Mono-Labels beschriften Daten — Tabellenspalten, Felder,
Stände. Sie stehen nie als Kategorie-Etikett über einer Überschrift. Genau diese
Verwendung war das stärkste Vorlagen-Signal und wurde vollständig entfernt.

**Die Zahlen-haben-Bedeutung-Regel.** Sichtbare Nummerierung (01/02/03) erscheint nur,
wo eine echte Reihenfolge besteht — im Prozess und in nummerierten Rechtstexten. Nie als
Zierrat in Karten oder Feature-Listen.

## Layout

Ein einziger zentrierter Container (`max-width: 74rem`) mit fließendem Innenabstand
(`clamp(1.25rem, 5vw, 2.5rem)`) trägt alle Seiten. Rechtstexte laufen zusätzlich auf
46rem verengt, weil lange Fließtexte andere Maße brauchen als Marketingseiten.

Der vertikale Takt kommt aus einer einzigen Utility: `section-pad` mit
`clamp(4.5rem, 9vw, 8rem)`. Abstände innerhalb von Sections folgen 4/8/16/24/44px.

Die Seite arbeitet überwiegend mit **asymmetrischen Zwei-Spalten-Rastern** statt mit
gleichmäßigen Kartenrastern: `minmax(0,1fr) / minmax(0,1.15fr)` für Text-gegen-Inhalt,
`110px / 1fr / 1fr` für den Vergleich. Leistungen sind liegende Bänder, keine drei
gleichen Karten — das ist eine bewusste Abkehr vom Dreier-Kachelraster.

**Breakpoint:** faktisch einer — **820px** (17 Verwendungen). Darunter kollabieren alle
Zwei-Spalten-Raster auf eine Spalte, der Vergleich verliert seinen Spaltenkopf und die
Agentur-Spalte wird durchgestrichen dargestellt. Vereinzelte Werte bei 980/900/600/480px
sind komponentenlokale Feinheiten, kein zweiter Systembreakpoint.

### Named Rules

**Die Ein-Breakpoint-Regel.** Neue Komponenten brechen bei 820px. Ein zusätzlicher
Systembreakpoint braucht einen belegten Grund, keine Bequemlichkeit.

## Elevation & Depth

Das System war bisher **vollständig flach**: `--shadow-md` war definiert, wurde aber an
keiner einzigen Stelle verwendet. Tiefe entstand allein über Flächenwechsel
(Papier → Papier-Alt → Blatt → Tiefviolett) und 1px-Linien.

**Das ändert sich bewusst.** Erhebung wird eingeführt — aber als *Papier auf einer
Unterlage*, nicht als schwebende Bedienfläche. Ein Blatt liegt dicht auf, sein Schatten
ist kurz, weich und tintengetönt, nie neutralgrau und nie weit gestreut. Wo heute eine
Karte flach mit 1px-Rahmen auf Papier sitzt, bekommt sie die Anmutung eines aufliegenden
Blattes.

> **Noch nicht implementiert.** Die folgenden Werte sind entschieden, stehen aber noch
> nicht im Code. Aktuell existieren im gesamten Projekt nur zwei `box-shadow`-Vorkommen:
> der WhatsApp-Knopf und der Fokusring im Formular.

### Shadow Vocabulary
- **Aufliegend** (`box-shadow: 0 1px 2px rgba(30,27,46,0.06), 0 2px 8px rgba(30,27,46,0.05)`):
  Ruhezustand von Karten, Hinweiskästen und Formularflächen. Ein Blatt, das auf dem
  Papier liegt.
- **Angehoben** (`box-shadow: 0 2px 4px rgba(30,27,46,0.07), 0 8px 20px rgba(30,27,46,0.08)`):
  Hover auf anfassbaren Karten. Das Blatt wird einen Fingerbreit gelüftet.
- **Schwebend** (`box-shadow: 0 10px 30px rgba(30,27,46,0.14)`): Nur für echte Overlays —
  Dialoge, der WhatsApp-Knopf. Das Einzige, was den Papierstapel verlässt.
- **Fokus** (`box-shadow: 0 0 0 3px rgba(91,79,209,0.14)`): Kein Schatten im eigentlichen
  Sinn, sondern ein Ring. Bleibt unverändert.

### Named Rules

**Die Tintenschatten-Regel.** Jeder Schatten ist in Tinte getönt (`rgba(30,27,46, …)`),
nie in Schwarz oder Neutralgrau. Ein schwarzer Schatten auf warmem Papier wirkt sofort
wie eine fremde Bibliothek.

**Die Kurzer-Wurf-Regel.** Vertikaler Versatz bleibt unter der Unschärfe, und die
Unschärfe unter 30px. Weite, weiche Schatten lassen Elemente schweben — Papier schwebt nicht.

**Die Erhebung-bedeutet-Anfassbar-Regel.** Erhebung zeigt an, dass etwas aufliegt oder
bedienbar ist. Ein reiner Textabschnitt bekommt keinen Schatten, nur weil er ein Kasten ist.

## Shapes

Enge, zurückhaltende Radien: **4px** für kleine Marker, **8px** für Buttons, Eingabefelder
und Hinweiskästen, **14px** für Karten und größere Flächen. Nichts Vollrundes außer dem
WhatsApp-Knopf.

Die prägende Form ist nicht die Karte, sondern die **Linie**. Leistungen, der Vergleich
und die Arbeiten sind durch 1px-Regeln gegliedert, nicht durch Rahmen. Wo Rahmen
vorkommen, sind sie 1px in `rgba(30,27,46,0.12)`; Hervorhebungen gehen auf 1,5px in der
Signaturfarbe (hervorgehobene Preiskarte) oder auf einen 3px-Streifen links
(Hinweiskästen in Rechtstexten).

Über allem liegt ein fixiertes SVG-Rauschen bei Opazität 0,035 — das Korn, das die Fläche
als Papier lesbar macht. Es ist nicht dekorativ, sondern die Materialaussage des Systems.

### Named Rules

**Die Linie-vor-Rahmen-Regel.** Eine Liste bekommt Trennlinien, keine Kartenrahmen. Ein
Rahmen ist erst gerechtfertigt, wenn der Inhalt wirklich ein eigenständiges Objekt ist.

## Components

Die Komponenten sind **fest und griffig**: spürbares Gewicht, deutliche Zustände, eine
klare Reaktion auf Druck. Nicht weich, nicht verspielt — Werkzeug mit sauberer Kante.

### Buttons
- **Shape:** enge Rundung (8px, `--r-md`)
- **Primary:** Signatur-Violett auf Weiß, Polsterung 15px/28px, Display-Schrift 15px/600,
  Laufweite -0,01em. Der einzige gefüllte Akzent im Blickfeld.
- **Hover / Focus:** Fläche wechselt auf Signatur kräftig und hebt sich um 1px
  (`translateY(-1px)`), 180ms `cubic-bezier(0.16, 1, 0.3, 1)`. Druck staucht auf
  `scale(0.98)`. Hover ist auf `(hover: hover) and (pointer: fine)` begrenzt, damit
  Touch-Geräte keinen hängenden Zustand zeigen.
- **Ghost:** transparent mit 1,5px-Rahmen in `rgba(30,27,46,0.22)`; bei Hover wird der
  Rahmen zu Tinte und die Fläche zu Blatt.
- **Light:** für Tiefviolett-Sections — helle Fläche, tiefvioletter Text.

### Cards / Containers
- **Corner Style:** 14px (`--r-lg`)
- **Background:** Blatt (`#FFFFFF`) auf Papier
- **Shadow Strategy:** „Aufliegend" im Ruhezustand, „Angehoben" bei Hover auf anfassbaren
  Karten (siehe Elevation & Depth — noch zu implementieren)
- **Border:** 1px `rgba(30,27,46,0.12)`; hervorgehobene Variante 1,5px in Signaturfarbe
- **Internal Padding:** `clamp(1.75rem, 3vw, 2.25rem)`

### Inputs / Fields
- **Style:** Papierfläche mit 1,5px-Rahmen in `rgba(30,27,46,0.22)`, 8px Radius,
  Polsterung 12px/14px, Body-Schrift 15px. Platzhalter in Tinte-3.
- **Focus:** Rahmen wechselt auf Signaturfarbe, dazu ein 3px-Ring in
  `rgba(91,79,209,0.14)`. Kein Aufleuchten, kein Versatz.
- **Label:** immer sichtbar über dem Feld, nie nur als Platzhalter.

### Navigation
- Klebende Kopfzeile mit `rgba(250,248,244,0.85)` und 14px Rückseitenunschärfe. Die
  Unterkante erscheint erst nach 24px Scroll — bis dahin sitzt die Navigation randlos
  auf dem Papier.
- Links 14,5px/500 in Tinte-2; der aktive Eintrag steht in Tinte mit einer 2px-Unterstreichung
  in Signaturfarbe, die von links einfährt (`transform: scaleX()`, 200ms). Hover auf
  inaktiven Einträgen zieht dieselbe Linie auf 40 % — eine Andeutung, keine Vorwegnahme.
- Die Haupt-Handlungsaufforderung steht in Tinte, nicht in der Signaturfarbe: Sie soll
  dauerhaft präsent sein, ohne das Akzentbudget der Seite zu verbrauchen.
- Unter 820px: Vollbild-Überlagerung in Tiefviolett, Menüpunkte in Display-Schrift bis
  3rem, versetzt eingeblendet (80/140/200/260ms).

### Signature: Die gezeichnete Linie
Im Prozessabschnitt läuft eine senkrechte Linie mit dem Scrollen mit und füllt sich
(`scaleY`), während die zugehörigen Schritte aufleuchten. In den Leistungsbändern zeichnet
sich die waagerechte Trennlinie (`scaleX`), sobald das Band in den Blick kommt. Der
Vergleich in „Über mich" baut sich Zeile für Zeile auf.

Alle drei hängen an der Scroll-Position (`animation-timeline: view()`), nicht an einem
Timer, und laufen ohne JavaScript. Ältere Browser erhalten denselben Effekt über einen
IntersectionObserver-Fallback, der sich vorher auf Unterstützung prüft. Bei
`prefers-reduced-motion: reduce` ist alles sofort sichtbar und die Linien stehen still.

### Named Rules

**Die Bewegung-erklärt-Struktur-Regel.** Eine Animation zeigt einen Zusammenhang oder sie
entfällt. Pro Blickfeld bewegen sich höchstens ein bis zwei Elemente. Kein Scroll-Jacking,
keine Parallaxe.

**Die Hover-ist-ein-Bonus-Regel.** Jeder Hover-Zustand steht in
`@media (hover: hover) and (pointer: fine)`. Keine Information existiert nur im Hover.

## Do's and Don'ts

### Do:
- **Do** Papier (`#FAF8F4`) als Grund verwenden und Weiß für aufliegende Objekte reservieren.
- **Do** den Akzent auf höchstens 10 % einer Ansicht begrenzen — ein gefüllter Button
  pro Blickfeld.
- **Do** Listen mit 1px-Linien gliedern, bevor du zu Karten greifst.
- **Do** Schatten in Tinte tönen (`rgba(30,27,46, …)`), kurz werfen und unter 30px
  Unschärfe halten.
- **Do** bei 820px umbrechen.
- **Do** jede Bewegung an die Scroll-Position hängen statt an einen Timer, und
  `prefers-reduced-motion` respektieren.
- **Do** Mono ausschließlich für Datenbeschriftungen einsetzen.
- **Do** Schriften selbst hosten — kein CDN.

### Don't:
- **Don't** Mono-Labels als Eyebrow über Überschriften setzen. Das war das stärkste
  Vorlagen-Signal und wurde bewusst entfernt.
- **Don't** 01/02/03 als Zierrat verwenden, wo keine echte Reihenfolge besteht.
- **Don't** eine zweite Akzentfarbe einführen.
- **Don't** Stock-Fotos von Personen, Büros oder Teams verwenden — auch nicht als
  Platzhalter. Fehlende Bilder bekommen gestaltete Platzhalter oder Konzept-Illustrationen.
- **Don't** Illustrationen in einem anderen Stil als die bestehenden drei ergänzen.
- **Don't** Google Fonts oder andere externe Ressourcen einbinden.
- **Don't** Häkchen-Badge-Reihen, schwebende Deko-Formen oder Dreier-Kartenraster
  wiedereinführen — alle drei wurden gezielt entfernt.
- **Don't** reines Schwarz oder Neutralgrau als Schattenfarbe verwenden.
