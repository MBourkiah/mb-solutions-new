# MB-Solutions Website

## Projekt

Agentur-Website für MB-Solutions, Köln.
Ein-Mann-Agentur: Webdesign, IT-Services, Branding.
Zielgruppe: Lokale KMU und Handwerksbetriebe in Köln.
URL: mb-solutions.biz

## Stack

- Astro
- Tailwind CSS (v4, Tokens in `src/styles/global.css`)
- Vercel Deployment via GitHub

## Design (Redesign Juli 2026: „Tiefviolett & Papier")

- Grund: Papier #FAF8F4 / Flächen-Alt #F2EFE8
- Text: Tinte #1E1B2E
- Dunkle Kontrast-Sections: Tiefviolett #2A2260 (Prozess, CTA, Footer)
- Akzent (genau einer): Signal-Violett #5B4FD1, Tint #ECE9FB
- Fonts (selbst gehostet via @fontsource-variable, kein Google-Fonts-CDN):
  Bricolage Grotesque (Display) · Instrument Sans (Body) · Spline Sans Mono (Labels)
- Semantische Tokens & Utility-Klassen (`label-mono`, `btn-primary/ghost/light`,
  `container-site`, `section-pad`, `reveal`) in `src/styles/global.css`
- Sprache: Deutsch, Du-Ansprache
- Ton: Professionell aber persönlich, keine Floskeln
- CTA einheitlich benannt: „Kostenloses Erstgespräch"

## Grundsätze

- Ehrlichkeit: Referenzen sind als „Konzeptprojekt" gekennzeichnet, solange
  keine echten Kundenprojekte existieren. Keine erfundenen Testimonials —
  TestimonialsSection rendert erst, wenn echte Zitate eingetragen sind.
- Zielgruppen-Sprache: Nutzen statt Tech-Buzzwords (keine Framework-Namen
  im Marketing-Text).

## Seiten

- index.astro (Startseite)
- leistungen.astro (Anker: #webdesign, #it-services, #branding, #pakete)
- portfolio.astro („Arbeiten", Konzeptprojekte)
- ueber-mich.astro
- kontakt.astro
- impressum.astro, datenschutz.astro

## Komponenten

- Navbar, Footer, HeroSection, AboutSection, ServicesSection,
  PortfolioSection, ProcessSection (Signature: Scroll-Linie),
  TestimonialsSection (Platzhalter), PricingSection, FAQSection,
  CTASection, ContactForm (web3forms)
