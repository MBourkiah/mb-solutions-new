# Echte Bilder — Ablage & Konvention

Alles in diesem Ordner sind **echte** Fotos/Screenshots (keine Stock-Fotos,
keine Platzhalter). Astro optimiert alle Dateien hier automatisch zu
AVIF/WebP mit Fallback und lädt sie lazy.

**So funktioniert der Austausch:** Datei mit dem richtigen Namen hier
ablegen — mehr nicht. Die Komponenten (`PortraitSlot`, `ProjectVisual`)
finden sie automatisch über den Dateinamen. Solange eine Datei fehlt,
zeigen sie einen gestalteten Platzhalter bzw. eine Konzept-Illustration.

## Erwartete Dateien

| Dateiname                  | Inhalt                                    | Format & Größe                          |
| -------------------------- | ----------------------------------------- | --------------------------------------- |
| `maurice.jpg`              | Echtes Foto von Maurice (Headshot oder Workspace) | JPG/PNG/WebP, Hochformat 4:5, mind. 1000×1250 px |
| `mb-solutions-website.jpg` | Screenshot dieser Website (bereits vorhanden, generiert aus dem Live-Build) | 16:10, 1440×900 px |
| `cafe-morgenrot.jpg`       | Echter Screenshot, sobald ein reales Projekt das Konzept ablöst | JPG/PNG/WebP, 16:10, mind. 1600×1000 px |
| `keller-soehne.jpg`        | dito                                       | dito                                    |
| `yogastudio-sonnenlicht.jpg` | dito                                     | dito                                    |

Ein Konzeptprojekt kann auch durch ein ganz neues echtes Projekt ersetzt
werden — dann in `src/pages/portfolio.astro` bzw.
`src/components/PortfolioSection.astro` den Eintrag anpassen
(`visual.real` = Dateiname ohne Endung).

## Warum `src/assets/real/` statt `public/images/`?

Dateien unter `src/assets/` laufen durch Astros Bild-Pipeline
(automatische AVIF/WebP-Erzeugung, richtige Größen, Cache-Header).
Dateien in `public/` würden unverändert ausgeliefert.

Die Konzept-Illustrationen liegen bewusst **nicht** hier, sondern als
Inline-SVG-Code in `src/components/illustrations/` — sie sind Teil des
Designs, gestochen scharf auf jedem Display und verursachen keine
zusätzlichen Requests.
