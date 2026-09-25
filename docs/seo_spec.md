# SEO Specification — Copernicus IT Solutions redesign

Domain: `https://copernicus-it.solutions` (canonical host, no `www`, HTTPS only)
Site type: static HTML, no framework, GitHub Pages + custom domain
Language: English only (`<html lang="en">`)
Prepared: 2026-09-24 from the crawl in `current_site_audit.md` (live site not re-fetched)

Pages in scope:

| URL | Purpose |
|---|---|
| `/` | Home — near-shore airline & travel IT consultancy positioning |
| `/services/` | Service lines (IT strategy, solution design, program management, build & deliver, DevOps/SecOps) |
| `/travel-airline-it/` | Industry page — PSS, NDC / ONE Order, Amadeus Altea, GDS, TPF decommissioning |
| `/advisory/` (optional) | CIO advisory / fractional CTO offer (the current unlisted `/-5` page, reborn) |
| `/about/` | Firm, leadership, operating model |
| `/contact/` | Contact details + form |
| `/404.html` | Not-found page (GitHub Pages convention) |

---

## 1. Audit of the current site (GoDaddy Website Builder)

### 1.1 Page-level findings

| # | Issue | Where | Impact | Fix in new site |
|---|---|---|---|---|
| 1 | Empty / placeholder `<title>` = `.` | `/-5` | Page indexed as "." or with a Google-rewritten title; zero keyword signal | Page gets a real title or is removed / redirected (see 1.3) |
| 2 | Unlisted page with no nav link and no redirect, still crawlable | `/-5` | Orphan URL, dilutes crawl budget, shows a stale US phone (+1 863 350-6951) | Either `301` its content into `/advisory/` or return 404/410. GitHub Pages has no server redirects: use a `<meta http-equiv="refresh" content="0; url=/advisory/">` + `<link rel="canonical" href="https://copernicus-it.solutions/advisory/">` stub, or simply drop it and let it 404 |
| 3 | `<title>` "Services" with no brand, 8 characters | `/services` | No keyword, no brand, weak SERP CTR | "IT Strategy, Delivery & DevOps Services \| Copernicus IT" |
| 4 | Home title "Travel & Airline IT \| Copernicus IT Solutions" is OK but the description is generic ("seasoned A-Players team ... Trust us for innovative solutions") — no service, no location, no differentiator | `/` | Poor CTR, no keyword match | Rewritten description (section 3) |
| 5 | About description: "where expertise meets innovation" boilerplate | `/about` | Generic | Rewritten |
| 6 | Hero heading repeated 4 times ("Your Near-Shore Acceleration Team / French Software Engineering in U.S. Time" x4) — GoDaddy slider renders the same H1/H2 pair per slide | `/` | Multiple H1s, duplicate heading text, thin semantic structure | One `<h1>` per page, slider removed |
| 7 | Card headings duplicated / mis-labelled: "IT Strategy Consulting" appears 5 times, "Program Management" 3 times, "Explore Services" 5 times as headings/buttons | `/` | Duplicate H4s, confusing outline, button text as headings | Service cards use `<h3>` with distinct text; CTAs are `<a>` not headings |
| 8 | Tab widget content duplicated in DOM (each tab title repeated as a heading 2-3 times: "What I Do", "Travel & Airline Industry", "Transformation Leadership" ...) | `/-5` | Duplicate headings, emoji in headings | Plain-text headings, no emoji, no tab-widget duplication |
| 9 | Leadership card: "Christophe Griva" block carries the sub-heading "Renaud Arnoux-Prost" (copy/paste bug); Renaud's title repeated twice; "misssion", "eretail", "delive" truncation, "Rallye", "accelarate" typos | `/about`, `/services` | Credibility + E-E-A-T; Google reads the wrong name under Christophe's photo | Correct names/titles, run a spell-check pass |
| 10 | Three different phone numbers on the site: +1 863 350-6951 (`/-5`, `/services`), +1 940 452-6288 and +33 7 71 62 01 64 (`/contact`) | site-wide | NAP (name/address/phone) inconsistency hurts local/entity signals | Single set: +33 7 71 62 01 64 and +1 940 452-6288, identical on every page, in the footer, in JSON-LD and on Google Business Profile / LinkedIn |
| 11 | No `<link rel="canonical">` on any page; site answers on `www` and non-`www` | site-wide | Duplicate-content risk, split signals | Self-referencing canonical on every page, `www` → apex redirect |
| 12 | Open Graph: `og:title` = generic site name, `og:description` = same boilerplate, no `og:image` per page | site-wide | Ugly LinkedIn shares (main sharing channel for this audience) | Per-page OG + Twitter tags with 1200x630 image (section 3) |
| 13 | No structured data (no Organization, no Person, no BreadcrumbList, no FAQ) | site-wide | No knowledge-panel / rich-result eligibility | JSON-LD in section 4 |
| 14 | Copyright "© 2017" hard-coded | footer | Stale-site signal | "© 2017–2026" |
| 15 | Cookie banner + reCAPTCHA + GoDaddy tracking scripts on every page | site-wide | Slow LCP/INP, layout shift, CMP not needed if no analytics cookies | No third-party JS by default; if analytics, use a cookieless tool (Plausible/Umami) and no banner is needed under CNIL guidance |
| 16 | "Join Our Mailing List" forms on 3 pages with no list behind them | `/`, `/about`, `/contact` | Distraction, form spam | Remove |
| 17 | Outbound link to `https://copernic-us.com/` ("Web3.0 retail for travel") with no context | `/services` | Off-topic, leaks authority to an unrelated brand | Remove or put in About under "Related ventures" with `rel="nofollow"` if kept |
| 18 | Services page H1 "Near-Shoring Information System Development Services" — long, awkward, not what anyone searches | `/services` | Keyword mismatch | "IT Consulting & Software Delivery Services" (section 3) |
| 19 | Airline block is written in ALL CAPS slogans ("BEEN THERE, DONE THAT") with no crawlable detail | `/services` | The most differentiating expertise has the thinnest content | Dedicated `/travel-airline-it/` page with real paragraphs |
| 20 | Emoji used as heading prefixes (🧠 ✈️ 🏗️ 👥 🌐) | `/-5` | Emoji in headings show in SERP titles, look unprofessional to CIOs | Remove |
| 21 | Images have no descriptive alt text (GoDaddy default) — assumed from platform behaviour, verify | site-wide | Accessibility + image search | Alt rules in section 5 |
| 22 | No `robots.txt` directives, no `sitemap.xml` submitted, no Search Console evidence | site-wide | Unknown index coverage | Section 5 + section 6 |
| 23 | Home body copy claims "ISO 27001 baseline" and "audited to prove it" | `/` | If not actually certified this is a trust/legal risk, not an SEO win | Reword as "ISO 27001-aligned practices" unless a certificate exists |

### 1.2 What is worth keeping

- The near-shore proposition (6 h ahead of US East Coast, 20–70 % cost advantage, EU GDPR rigour, direct flights from Nice/Marseille/CDG) is concrete and unusual. It should become the FAQ block and the home page benefits list.
- "25+ years at Amadeus", "PSS integration", "NDC / ONE Order", "Altea", "TPF decommissioning" are exactly the long-tail terms a US/EU airline CIO will type. They must move from slogans into crawlable H2s and paragraphs.
- Existing page titles for `/about` and `/contact` follow the correct "Topic | Brand" pattern; keep the pattern.

### 1.3 URL migration map (old GoDaddy → new)

| Old | New | Method |
|---|---|---|
| `/` | `/` | same |
| `/about` | `/about/` | GitHub Pages serves `/about/index.html`; the extension-less `/about` will 301 to `/about/` automatically |
| `/services` | `/services/` | same mechanism |
| `/contact` | `/contact/` | same mechanism |
| `/-5` | `/advisory/` (or 404) | Meta-refresh stub at `/-5/index.html` with canonical to `/advisory/`; drop after 6 months |
| `www.copernicus-it.solutions/*` | `copernicus-it.solutions/*` | GitHub Pages redirects `www` ↔ apex automatically when both DNS records exist and the CNAME file holds the apex |

---

## 2. Keyword strategy

Reality check: a boutique firm will not rank nationally for "IT consulting". The winnable space is the intersection of (a) airline/travel IT vocabulary that generalist agencies never use, (b) "near-shore France / Europe for US companies", and (c) the founder's name and the brand. Volumes are low (10–200/month) but intent is extremely high and competition is weak. Aim for page 1 on the long-tail within 3–6 months; brand and name terms within weeks.

### 2.1 Keyword map

| Page | Primary keyword | Secondary keywords | Search intent |
|---|---|---|---|
| `/` | airline IT consulting | near-shore software development France; nearshore IT consulting for US companies; travel technology consultancy; Sophia Antipolis IT consulting; French software engineering team US time zone | Commercial: "who can help my airline/travel IT programme" |
| `/services/` | IT strategy consulting for CIOs | solution design consulting; IT program management consultancy; build and deliver software engineering; DevOps and SecOps services; legacy modernization consulting; near-shore engineering team | Commercial: evaluating service lines |
| `/travel-airline-it/` | PSS integration consultant | NDC implementation consulting; ONE Order implementation; Amadeus Altea consultant; GDS integration; airline PSS migration; TPF decommissioning; airline legacy modernization; travel distribution platform; cruise line distribution system | Commercial / informational: very specific airline IT problems |
| `/advisory/` | CIO advisory services | fractional CTO airline; IT transformation advisory; IT vision and architecture alignment; interim VP engineering | Commercial: executive-level help |
| `/about/` | Renaud Arnoux-Prost | Copernicus IT Solutions; former Amadeus VP engineering consultant; Christophe Griva DevOps | Navigational / trust |
| `/contact/` | Copernicus IT Solutions contact | IT consulting Sophia Antipolis; near-shore IT partner France | Navigational |

### 2.2 Usage rules

- Primary keyword appears in: `<title>`, H1 (or a close variant), first 100 words, one H2, meta description, and the image alt of the hero image.
- Secondary keywords appear naturally in H2/H3s and body; never keyword-stuff, never repeat a phrase more than ~3 times per page.
- Write for a CIO reading on a phone: short paragraphs, specific nouns (Altea, NDC 21.3, ONE Order, TPF, PNR, availability), numbers (25+ years, 6 h overlap, 20–70 %).
- Every page must contain the words "airline", "travel" or "near-shore" at least once so the site-level topic is unambiguous.

---

## 3. Per-page on-page specification

Shared `<head>` block (every page):

```html
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{TITLE}}</title>
<meta name="description" content="{{DESCRIPTION}}">
<link rel="canonical" href="{{CANONICAL}}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta name="theme-color" content="#0b1f3a">
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Copernicus IT Solutions">
<meta property="og:locale" content="en_US">
<meta property="og:url" content="{{CANONICAL}}">
<meta property="og:title" content="{{OG_TITLE}}">
<meta property="og:description" content="{{OG_DESCRIPTION}}">
<meta property="og:image" content="https://copernicus-it.solutions/assets/og/{{OG_IMAGE}}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="{{OG_IMAGE_ALT}}">
<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="{{OG_TITLE}}">
<meta name="twitter:description" content="{{OG_DESCRIPTION}}">
<meta name="twitter:image" content="https://copernicus-it.solutions/assets/og/{{OG_IMAGE}}.png">
<meta name="twitter:image:alt" content="{{OG_IMAGE_ALT}}">
```

OG images: one 1200x630 PNG per page in `/assets/og/`, dark navy background, white page headline, small "Copernicus IT Solutions — Sophia Antipolis, France" footer, < 300 KB. Do not reuse a generic logo tile for every page.

### 3.1 Home `/`

- **Title (56):** `Airline & Travel IT Consulting | Copernicus IT Solutions`
- **Meta description (149):** `Near-shore airline and travel IT consultancy in Sophia Antipolis, France. PSS, NDC, Amadeus Altea expertise and senior engineers working in US hours.`
- **Canonical:** `https://copernicus-it.solutions/`
- **OG title:** `Airline & Travel IT Consulting, Near-Shore from France`
- **OG description:** `Senior PSS, NDC and Amadeus Altea expertise plus a French engineering team that works your US business hours.`
- **OG image:** `home` — alt: "Copernicus IT Solutions, airline and travel IT consulting from Sophia Antipolis"
- **H1:** `Airline & travel IT consulting, near-shore from France`
- **H2 outline:**
  1. `Senior engineering in your time zone, at European rates` (intro / value proposition; 3 benefit cards as H3: Real-time US overlap, 20–70 % cost advantage, GDPR-grade security)
  2. `What we do` (4–5 service cards as H3 linking to `/services/` anchors: IT strategy consulting, Solution design, Program management, Build & deliver, DevOps & SecOps)
  3. `Airline and travel IT: PSS, NDC, Altea, GDS` (short paragraph + link to `/travel-airline-it/`)
  4. `Who we work with` (US and European CIOs of airlines, travel distributors, cruise lines; scale-ups; enterprises with stalled transformations)
  5. `25 years building travel technology` (founder credibility, Amadeus, link to `/about/`)
  6. `Frequently asked questions` (5 FAQs; matches the FAQPage JSON-LD)
  7. `Talk to us` (CTA to `/contact/`)

### 3.2 Services `/services/`

- **Title (55):** `IT Strategy, Delivery & DevOps Services | Copernicus IT`
- **Meta description (147):** `IT strategy consulting, solution design, program management, build & deliver engineering and DevOps/SecOps for airline, travel and enterprise CIOs.`
- **Canonical:** `https://copernicus-it.solutions/services/`
- **OG title:** `IT Consulting & Software Delivery Services`
- **OG description:** `From IT strategy to CI/CD: five service lines delivered by senior near-shore engineers from Sophia Antipolis, France.`
- **OG image:** `services` — alt: "Copernicus IT Solutions service lines: strategy, design, program management, delivery, DevOps"
- **H1:** `IT consulting and software delivery services`
- **H2 outline** (each H2 has an `id` so home cards can deep-link):
  1. `IT strategy & leadership consulting` (`#it-strategy`) — vision, consensus, roadmap, governance
  2. `Solution design & sourcing` (`#solution-design`) — stack selection, transition architecture, build vs buy
  3. `Program management at scale` (`#program-management`) — multi-region roadmaps, incremental transformation
  4. `Build & deliver software engineering` (`#build-deliver`) — full-stack teams, software factory, near-shore squad model
  5. `DevOps & SecOps` (`#devops-secops`) — Assess & Architect, Automate & Harden, Operate & Improve (as H3s)
  6. `Engagement models` — advisory retainer, fixed-scope mission, dedicated near-shore squad, interim leadership
  7. `Airline & travel specialisation` — 2 sentences + link to `/travel-airline-it/`
  8. `Start a conversation` (CTA)

### 3.3 Travel & airline IT `/travel-airline-it/`

- **Title (51):** `PSS, NDC & Amadeus Altea Consulting | Copernicus IT`
- **Meta description (153):** `Airline IT consulting: PSS integration and migration, NDC / ONE Order, Amadeus Altea, GDS connectivity and TPF decommissioning. 25+ years in travel tech.`
- **Canonical:** `https://copernicus-it.solutions/travel-airline-it/`
- **OG title:** `Airline & Travel IT: PSS, NDC, Altea, GDS`
- **OG description:** `Former Amadeus engineering leadership for PSS integration, NDC / ONE Order programmes and TPF decommissioning.`
- **OG image:** `travel-airline-it` — alt: "Airline and travel IT expertise: PSS, NDC, ONE Order, Amadeus Altea, GDS"
- **H1:** `Airline and travel IT consulting: PSS, NDC, Altea and GDS`
- **H2 outline:**
  1. `Passenger Service System integration and migration` (`#pss`) — Altea, reservations/inventory/DCS, PNR, availability, disruption management
  2. `NDC and ONE Order transformation` (`#ndc`) — offer/order, IATA standards, aggregator and GDS connectivity
  3. `Amadeus Altea implementation and optimisation` (`#altea`)
  4. `GDS, distribution and content platforms` (`#distribution`) — airline, cruise line and marketplace distribution
  5. `Legacy decommissioning: TPF and mainframe transition` (`#tpf`) — zero-downtime transition architectures
  6. `Mission-critical platform engineering` — high availability, low latency, high-volume transactional systems
  7. `Why a former Amadeus team` — credibility, link to `/about/`
  8. `Discuss your airline IT programme` (CTA)

### 3.4 Advisory `/advisory/` (optional page)

- **Title (53):** `CIO Advisory & IT Strategy Consulting | Copernicus IT`
- **Meta description (151):** `Advisory for CIOs and technology leaders: align IT vision and architecture with business strategy, structure transformation programmes, lead execution.`
- **Canonical:** `https://copernicus-it.solutions/advisory/`
- **OG title:** `CIO Advisory & IT Transformation Leadership`
- **OG description:** `Hands-on advisory from a former Amadeus engineering executive: IT vision, architecture, transformation roadmaps and execution.`
- **OG image:** `advisory` — alt: "CIO advisory and IT transformation leadership, Copernicus IT Solutions"
- **H1:** `Advisory for CIOs and technology leaders`
- **H2 outline:**
  1. `What I do for CIOs` — align, transform, design, structure, execute (5 H3s, no emoji)
  2. `Expertise` — large-scale transactional platforms, distribution systems, hybrid integration, legacy modernisation
  3. `Transformation leadership` — vision alignment, TPF decommissioning, governance, scaling engineering orgs
  4. `Operating model` — network of senior architects and engineers assembled per mission
  5. `Let's connect` (CTA)

### 3.5 About `/about/`

- **Title (51):** `About Renaud Arnoux-Prost | Copernicus IT Solutions`
- **Meta description (153):** `Copernicus IT Solutions is led by Renaud Arnoux-Prost, ex-Amadeus engineering executive with 25+ years in airline IT, backed by senior experts in France.`
- **Canonical:** `https://copernicus-it.solutions/about/`
- **OG title:** `About Copernicus IT Solutions`
- **OG description:** `A boutique near-shore IT consultancy in Sophia Antipolis, France, founded by ex-Amadeus engineering executive Renaud Arnoux-Prost.`
- **OG image:** `about` — alt: "Renaud Arnoux-Prost, founder of Copernicus IT Solutions"
- **H1:** `About Copernicus IT Solutions`
- **H2 outline:**
  1. `Our story` — founded 2017 in Sophia Antipolis, why near-shore, why airline IT
  2. `Leadership` — H3 `Renaud Arnoux-Prost, Founder & VP Product Engineering`; H3 `Christophe Griva, VP Infrastructure & Middleware` (correct name under each bio; photo with alt = full name + role)
  3. `How we work` — the five pillars (strategy & leadership, solution design, transition architecture, transformation programme, build & deliver) as an ordered list, not five H2s
  4. `Who benefits` — enterprises with stalled transformations, scale-ups, companies offloading engineering
  5. `Where we are` — Sophia Antipolis, Nice airport, direct US routes (supports local intent)
  6. `Work with us` (CTA)

### 3.6 Contact `/contact/`

- **Title (50):** `Contact Copernicus IT Solutions | Sophia Antipolis`
- **Meta description (151):** `Talk to Copernicus IT Solutions about airline IT, near-shore engineering or IT strategy. Sophia Antipolis, France. +33 7 71 62 01 64 / +1 940 452-6288.`
- **Canonical:** `https://copernicus-it.solutions/contact/`
- **OG title:** `Contact Copernicus IT Solutions`
- **OG description:** `Reach us in France (+33 7 71 62 01 64) or the US (+1 940 452-6288), or email rarnoux-prost@copernicus-it.solutions.`
- **OG image:** `contact` — alt: "Contact Copernicus IT Solutions, Sophia Antipolis, France"
- **H1:** `Contact us`
- **H2 outline:**
  1. `Call or email` — both phones as `tel:` links, email as `mailto:` (consider obfuscating with JS-free HTML entities), office: Sophia Antipolis, France
  2. `Send a message` — form (Formspree / Netlify-style static form or `mailto:` fallback; honeypot field instead of reCAPTCHA)
  3. `Office hours` — CET/CEST, overlap 09:00–18:00 ET stated explicitly
  4. `Find us` — static map image (not an embedded Google Maps iframe) linking to Google Maps

### 3.7 404 `/404.html`

- **Title:** `Page Not Found | Copernicus IT Solutions`
- `<meta name="robots" content="noindex">`, no canonical.
- H1 `Page not found`; links to `/`, `/services/`, `/travel-airline-it/`, `/contact/`.
- GitHub Pages returns a real HTTP 404 for `/404.html`, so no soft-404 issue.

---

## 4. JSON-LD structured data (ready to paste)

Place inside `<head>` (or end of `<body>`) as `<script type="application/ld+json">`. IDs use `#fragment` so the blocks reference each other across pages.

### 4.1 Site-wide block: ProfessionalService + Person + WebSite (every page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://copernicus-it.solutions/#organization",
      "name": "Copernicus IT Solutions",
      "legalName": "Copernicus IT Solutions",
      "url": "https://copernicus-it.solutions/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://copernicus-it.solutions/assets/logo-512.png",
        "width": 512,
        "height": 512
      },
      "image": "https://copernicus-it.solutions/assets/og/home.png",
      "description": "Boutique near-shore IT consultancy in Sophia Antipolis, France, specialised in airline and travel IT (PSS integration, NDC / ONE Order, Amadeus Altea, GDS, TPF decommissioning), IT strategy, solution design, program management, software engineering and DevOps/SecOps for US and European CIOs.",
      "foundingDate": "2017",
      "founder": { "@id": "https://copernicus-it.solutions/#renaud" },
      "email": "rarnoux-prost@copernicus-it.solutions",
      "telephone": "+33771620164",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sophia Antipolis",
        "addressRegion": "Provence-Alpes-Côte d'Azur",
        "postalCode": "06560",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 43.6161,
        "longitude": 7.0553
      },
      "areaServed": [
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "France" },
        { "@type": "Place", "name": "European Union" }
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+33771620164",
          "email": "rarnoux-prost@copernicus-it.solutions",
          "areaServed": ["FR", "EU"],
          "availableLanguage": ["en", "fr"]
        },
        {
          "@type": "ContactPoint",
          "contactType": "sales",
          "telephone": "+19404526288",
          "email": "rarnoux-prost@copernicus-it.solutions",
          "areaServed": "US",
          "availableLanguage": ["en", "fr"]
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/company/copernicus-it-solutions/"
      ],
      "knowsAbout": [
        "Airline IT", "Passenger Service Systems", "NDC", "IATA ONE Order",
        "Amadeus Altea", "Global Distribution Systems", "TPF decommissioning",
        "IT strategy consulting", "Program management", "DevOps", "SecOps",
        "Near-shore software development"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IT strategy & leadership consulting", "url": "https://copernicus-it.solutions/services/#it-strategy" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solution design & sourcing", "url": "https://copernicus-it.solutions/services/#solution-design" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Program management", "url": "https://copernicus-it.solutions/services/#program-management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Build & deliver software engineering", "url": "https://copernicus-it.solutions/services/#build-deliver" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "DevOps & SecOps", "url": "https://copernicus-it.solutions/services/#devops-secops" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airline & travel IT: PSS, NDC, Altea, GDS", "url": "https://copernicus-it.solutions/travel-airline-it/" } }
        ]
      }
    },
    {
      "@type": "Person",
      "@id": "https://copernicus-it.solutions/#renaud",
      "name": "Renaud Arnoux-Prost",
      "givenName": "Renaud",
      "familyName": "Arnoux-Prost",
      "jobTitle": "Founder & VP Product Engineering",
      "worksFor": { "@id": "https://copernicus-it.solutions/#organization" },
      "url": "https://copernicus-it.solutions/about/",
      "image": "https://copernicus-it.solutions/assets/team/renaud-arnoux-prost.jpg",
      "email": "rarnoux-prost@copernicus-it.solutions",
      "telephone": "+33771620164",
      "sameAs": [
        "https://www.linkedin.com/in/renaud-arnoux-prost/"
      ],
      "alumniOf": [
        { "@type": "Organization", "name": "Amadeus" },
        { "@type": "Organization", "name": "Sopra Steria" },
        { "@type": "Organization", "name": "Michelin" }
      ],
      "knowsAbout": [
        "Airline IT", "Passenger Service Systems", "NDC", "ONE Order",
        "Amadeus Altea", "Digital transformation", "R&D leadership",
        "High-availability platforms", "E-retail architecture"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sophia Antipolis",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://copernicus-it.solutions/#website",
      "url": "https://copernicus-it.solutions/",
      "name": "Copernicus IT Solutions",
      "inLanguage": "en",
      "publisher": { "@id": "https://copernicus-it.solutions/#organization" }
    }
  ]
}
</script>
```

Before launch: replace the two LinkedIn URLs with the real slugs (the company page may not exist yet — create it, see section 6), confirm the postal code (Sophia Antipolis spans 06560 Valbonne / 06410 Biot / 06250 Mougins; use the registered one; add `streetAddress` only if you want the address public), and update `geo` to the actual office.

### 4.2 WebPage + BreadcrumbList pattern (per page)

Home page (no breadcrumb needed beyond the root):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://copernicus-it.solutions/#webpage",
  "url": "https://copernicus-it.solutions/",
  "name": "Airline & Travel IT Consulting | Copernicus IT Solutions",
  "isPartOf": { "@id": "https://copernicus-it.solutions/#website" },
  "about": { "@id": "https://copernicus-it.solutions/#organization" },
  "inLanguage": "en"
}
</script>
```

Inner page pattern (example: `/travel-airline-it/`; swap URL, name and breadcrumb leaf for each page):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://copernicus-it.solutions/travel-airline-it/#webpage",
      "url": "https://copernicus-it.solutions/travel-airline-it/",
      "name": "PSS, NDC & Amadeus Altea Consulting | Copernicus IT",
      "isPartOf": { "@id": "https://copernicus-it.solutions/#website" },
      "about": { "@id": "https://copernicus-it.solutions/#organization" },
      "inLanguage": "en",
      "breadcrumb": { "@id": "https://copernicus-it.solutions/travel-airline-it/#breadcrumb" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://copernicus-it.solutions/travel-airline-it/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://copernicus-it.solutions/" },
        { "@type": "ListItem", "position": 2, "name": "Travel & Airline IT", "item": "https://copernicus-it.solutions/travel-airline-it/" }
      ]
    }
  ]
}
</script>
```

Breadcrumb leaf names: Services · Travel & Airline IT · Advisory · About · Contact. The visible breadcrumb (`<nav aria-label="Breadcrumb"><ol>…`) must match the JSON-LD.

On `/about/`, add `"mainEntity": { "@id": "https://copernicus-it.solutions/#renaud" }` to the WebPage and set `"@type": "AboutPage"`. On `/contact/`, use `"@type": "ContactPage"`.

### 4.3 FAQPage block (home page; the same questions must be visible on the page)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://copernicus-it.solutions/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much time-zone overlap do you have with US teams?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our team in Sophia Antipolis, France works on Central European Time, six hours ahead of the US East Coast and nine ahead of the West Coast. A New York morning stand-up or an Austin early-afternoon review happens live on video, and your feedback lands in the same day's sprint. There is no overnight hand-off."
      }
    },
    {
      "@type": "Question",
      "name": "What is the cost advantage of near-shoring engineering to France?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Senior French engineers typically cost 20 to 70 percent less than equivalent US on-shore profiles, and because the time zones overlap you avoid the hidden coordination and rework costs of far-shore delivery. We quote transparently in USD or EUR."
      }
    },
    {
      "@type": "Question",
      "name": "How do you handle security and GDPR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate under EU GDPR and follow ISO 27001-aligned practices: least-privilege access, encrypted repositories and pipelines, security scanning in CI/CD, and signed data-processing agreements. Client data stays in the regions you designate, and we can work entirely inside your own tooling and cloud accounts."
      }
    },
    {
      "@type": "Question",
      "name": "What airline and travel IT experience do you have?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our founder spent more than 25 years in engineering leadership at Amadeus, building one of the world's largest travel technology platforms. We have delivered PSS integration and migration, NDC and ONE Order programmes, Amadeus Altea implementations, GDS and distribution platforms, cruise line distribution, and TPF legacy decommissioning for airlines and travel companies."
      }
    },
    {
      "@type": "Question",
      "name": "Which engagement models do you offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Four models: an advisory retainer for CIOs and technology leaders, a fixed-scope mission such as a solution design or transition architecture, a dedicated near-shore engineering squad that works as an extension of your team, and interim or fractional engineering leadership. Most clients start with a two-to-four-week assessment."
      }
    }
  ]
}
</script>
```

Note: Google now shows FAQ rich results mainly for government and health sites, so treat this block as entity/AI-answer signal rather than a guaranteed SERP feature. Keep it because the visible FAQ section is genuinely useful to the reader.

---

## 5. Technical SEO checklist (static site on GitHub Pages)

### 5.1 `robots.txt` (repo root)

```
User-agent: *
Allow: /
Disallow: /assets/og/
Disallow: /404.html

Sitemap: https://copernicus-it.solutions/sitemap.xml
```

(`/assets/og/` is blocked from indexing as image results only; social crawlers still fetch OG images because they ignore robots for previews. If you would rather have them indexable, drop that line.)

### 5.2 `sitemap.xml` (repo root; update `lastmod` on each content change, ISO date)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://copernicus-it.solutions/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://copernicus-it.solutions/services/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://copernicus-it.solutions/travel-airline-it/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://copernicus-it.solutions/advisory/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://copernicus-it.solutions/about/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://copernicus-it.solutions/contact/</loc>
    <lastmod>2026-09-24</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.6</priority>
  </url>
</urlset>
```

Remove the `/advisory/` entry if the page is not built. Never list `/404.html` or the `/-5` redirect stub.

### 5.3 GitHub Pages `CNAME` file (repo root, one line, no protocol, no trailing slash, newline at end)

```
copernicus-it.solutions
```

DNS at the registrar: four `A` records for the apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (plus the four `AAAA` records `2606:50c0:8000::153` … `8003::153`), and a `CNAME` record `www` → `<github-user>.github.io`. Tick "Enforce HTTPS" in the repo's Pages settings once the certificate is issued. GitHub then redirects `www` → apex (and `http` → `https`).

### 5.4 Language and locale

- `<html lang="en">` on every page. No `hreflang` tags are needed for a single-language site (a lone `hreflang="en"` adds nothing; `x-default` is only for multi-language). If a French version is added later, add reciprocal `<link rel="alternate" hreflang="en|fr|x-default">` on every page pair.
- `og:locale` = `en_US` (audience is primarily US).
- Write dates as "24 September 2026" or ISO; avoid ambiguous 09/24.

### 5.5 Heading hierarchy rules

- Exactly one `<h1>` per page, containing the primary keyword, placed in the hero, not in the header/logo.
- Logo in the header is an `<a>` with an `<img alt="Copernicus IT Solutions">`, never a heading.
- H2s are the page's section outline (see section 3). H3s only inside an H2. Never skip a level (no H2 → H4).
- Card titles, benefit titles and team member names are H3. CTAs and buttons are `<a>`/`<button>`, never headings.
- No duplicate heading text on a page; no emoji, no ALL CAPS in markup (use CSS `text-transform` if a design wants caps).
- Footer uses `<h2 class="visually-hidden">` only if it needs a landmark label; prefer `<nav aria-label="Footer">`.
- Use semantic landmarks: `<header>`, `<nav aria-label="Main">`, `<main>`, `<section aria-labelledby="…">`, `<footer>`.

### 5.6 Image rules

- Formats: AVIF or WebP with JPEG fallback via `<picture>`; PNG only for the logo/OG if transparency needed; SVG for logo and icons (inline the logo SVG).
- Every content `<img>` has `width` and `height` attributes (prevents CLS) and `loading="lazy" decoding="async"` except the hero/LCP image, which gets `fetchpriority="high"` and no lazy loading.
- Alt text: describe what is shown and, where natural, the entity — e.g. `alt="Renaud Arnoux-Prost, founder of Copernicus IT Solutions"`, `alt="Diagram of a zero-downtime PSS migration from TPF to a modern platform"`. Decorative images get `alt=""`. Never `alt="image"`, never stuff keywords, max ~125 characters.
- File names are descriptive and hyphenated: `pss-migration-architecture.webp`, not `IMG_0231.jpg`.
- Budget: hero ≤ 150 KB, others ≤ 80 KB, total page weight ≤ 600 KB.

### 5.7 Internal linking plan

- Global nav (identical on every page, `<nav aria-label="Main">`): Home · Services · Travel & Airline IT · About · Contact (+ Advisory if built). Footer repeats it plus phones, email, address, LinkedIn.
- Hub-and-spoke: `/` links to every page at least once in body copy (not just nav) with descriptive anchor text: "airline IT consulting" → `/travel-airline-it/`, "IT strategy consulting" → `/services/#it-strategy`, "about Renaud Arnoux-Prost" → `/about/`.
- `/services/` ↔ `/travel-airline-it/` cross-link in both directions in body text.
- `/about/` links to `/travel-airline-it/` (Amadeus paragraph) and `/services/`.
- Every page ends with the same CTA block linking to `/contact/`.
- Anchor text rule: never "click here" / "learn more"; use the destination's topic.
- Breadcrumb on all inner pages (matches JSON-LD, section 4.2).
- All internal links use absolute-path, trailing-slash URLs (`/services/`), never `/services` or `/services/index.html`, so canonicals and links agree.
- External links: LinkedIn (`rel="noopener"`), IATA NDC/ONE Order pages if cited (adds topical credibility); everything else off.

### 5.8 Page speed rules

- Target: Lighthouse ≥ 95 mobile, LCP < 1.5 s, CLS = 0, INP < 100 ms, total blocking time 0.
- Fonts: prefer the system stack (`system-ui, -apple-system, "Segoe UI", Roboto, Inter, sans-serif`). If one Google font is wanted, load exactly one family with two weights, `display=swap`, and add
  `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` — or better, self-host the two WOFF2 files and `<link rel="preload" as="font" type="font/woff2" crossorigin>` the primary one.
- CSS: one small stylesheet (< 30 KB) ; inline the critical above-the-fold CSS in a `<style>` in `<head>` and load the rest with a normal `<link>` (it is small enough that async tricks are unnecessary).
- JS: none by default. Mobile nav toggle done in pure CSS (`:checked` or `<details>`) or ≤ 1 KB inline script with `defer`. No jQuery, no sliders, no chat widgets, no reCAPTCHA, no Google Maps iframe, no YouTube embeds without a click-to-load facade.
- Analytics: optional, one of Plausible / Umami / Cloudflare Web Analytics (< 1 KB, cookieless, no consent banner needed). If Google Analytics 4 is insisted on, load via `defer` and add a real consent banner — this costs CTR and speed.
- Images per 5.6; `<link rel="preload" as="image">` for the hero if it is not in the initial HTML.
- Caching: GitHub Pages sets `Cache-Control: max-age=600`; version asset filenames (`style.a1b2c3.css`) so redesigns don't serve stale CSS.
- Compression: GitHub Pages serves gzip/brotli automatically. Minify HTML/CSS in the build step if one exists; otherwise keep files hand-tidy, the gain is marginal.
- Test with PageSpeed Insights on `/` and `/travel-airline-it/` before and after launch.

### 5.9 Other head/HTML checks

- `<meta name="robots">` only on `/404.html` and the `/-5` stub (`noindex`). Everything else indexable.
- No `<meta name="keywords">`.
- Skip-link `<a href="#main" class="skip">Skip to content</a>` as the first body element.
- Phone numbers wrapped in `<a href="tel:+33771620164">+33 7 71 62 01 64</a>` and `<a href="tel:+19404526288">+1 940 452-6288</a>`; email as `mailto:`.
- Footer: `© 2017–2026 Copernicus IT Solutions · Sophia Antipolis, France` — same NAP text on every page.
- `security.txt` at `/.well-known/security.txt` (nice touch for a firm selling SecOps).
- Validate every page with the W3C validator and every JSON-LD block with Google's Rich Results Test and the Schema.org validator before launch.
- Set up a `_config.yml` with `include: [.well-known]` if Jekyll processing stays on, or add a `.nojekyll` file to disable Jekyll entirely (recommended for a hand-written static site — faster deploys, no underscore-directory surprises).

### 5.10 Launch-day sequence

1. Push site with `CNAME`, `.nojekyll`, `robots.txt`, `sitemap.xml`, `404.html`.
2. Switch DNS from GoDaddy builder to GitHub Pages records; wait for HTTPS.
3. Verify `https://www.copernicus-it.solutions/` → 301 → apex, and `/about` → 301 → `/about/`.
4. Submit sitemap in Search Console; request indexing for the 5–6 URLs.
5. Run Rich Results Test on `/` (FAQ, Organization) and `/about/` (Person).
6. Share each page once on LinkedIn to warm OG caches (use the LinkedIn Post Inspector to clear the old GoDaddy preview).

---

## 6. Quick wins after launch

1. **Google Search Console**: verify the apex property via DNS TXT (covers www and http variants at once), submit `sitemap.xml`, check Coverage after 7 days, fix any "Duplicate without user-selected canonical" left over from the `www` era. Add Bing Webmaster Tools by importing from GSC (10 minutes, covers Copilot/ChatGPT-search citations).
2. **Google Business Profile**: create "Copernicus IT Solutions", category "IT consulting" / "Software company", service area: France + United States, address Sophia Antipolis (can be hidden if home-based), phone +33 7 71 62 01 64, website `https://copernicus-it.solutions/`, hours in CET. Add the same description as the JSON-LD. Ask 2–3 past clients for reviews.
3. **LinkedIn consistency**: create/complete the company page (name exactly "Copernicus IT Solutions", website URL with https and no www, same tagline as the home H1, HQ Sophia Antipolis, founded 2017, specialties = the `knowsAbout` list). Update Renaud's personal profile headline to include "Airline & Travel IT | PSS · NDC · Amadeus Altea | Near-shore engineering from France" and link the company page. Paste the resulting URLs into the `sameAs` arrays.
4. **NAP everywhere**: same name, phones, email and city on the site footer, GBP, LinkedIn, Crunchbase (free listing), societe.com / Pappers (French registry pages are crawled and trusted), and Apollo/Clutch if ever listed. Retire the +1 863 number everywhere.
5. **One authority article per quarter** on `/insights/` (add to sitemap when it exists): e.g. "NDC and ONE Order: what a PSS migration really costs a mid-size airline", "Decommissioning TPF without a big-bang cutover", "Near-shore vs off-shore: a CIO's time-zone math". Repost on LinkedIn; these are the terms with actual search demand from your buyers.
6. **Backlinks that are realistic**: Amadeus alumni network, Sophia Antipolis / Télécom Valley business directories, French Tech Côte d'Azur, IATA partner directory if applicable, speaking slots at Aviation Festival / T2RL (their agenda pages link to speaker companies).
7. **Monitor**: monthly GSC check of queries containing "PSS", "NDC", "Altea", "near-shore", "Arnoux-Prost"; PageSpeed re-run after any change; LinkedIn Post Inspector after OG image changes.
