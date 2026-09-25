# Product Brief — Copernicus IT Solutions website redesign

Owner: Product (Renaud Arnoux-Prost, via product-owner agent)
Audience: dev lead building the static multi-page site
Source of truth for current content: `current_site_audit.md` (crawl of www.copernicus-it.solutions, 2026-09-24)
Date: 2026-09-24

---

## 1. Critique of the current site

### 1.1 Positioning is split in two and the visitor has to guess
- The Home page sells a **near-shore engineering team** ("Your Near-Shore Acceleration Team — French Software Engineering in U.S. Time", "our seasoned A-Player teams").
- The unlisted `/-5` page sells a **solo executive advisor** in the first person ("What I can do for you", "I advise CIOs…", "Contact me").
- The About page sells a **two-person leadership team** and a "five foundational pillars" method.
- The Services page title is "Near-Shoring Information System Development Services" but four of its five sections are strategy, sourcing and program-management consulting.
- Result: a CIO cannot tell whether they are hiring a person, a consultancy, or an offshore dev shop. Nothing on the site explains that advisory and delivery are two doors into the same firm.

### 1.2 Structural / navigational defects
- `/-5` has an empty `<title>` (".") and no nav entry, but is reachable (and indexed). It repeats headings three to four times because the builder's accordion clones each header ("🧠 What I Do" appears 3 times, "🏗️ Transformation Leadership" 4 times, "✈️ Travel & Airline Industry" 3 times).
- Home hero block is rendered **four times** ("Your Near-Shore Acceleration Team / French Software Engineering in U.S. Time" ×4). The service tiles below the hero repeat "IT Strategy Consulting" and "Program Management" as stray labels between tiles, and "Explore Services" appears five times.
- About page repeats each bio twice (Show More / Show Less expander duplicating the text) and mislabels Christophe Griva's card with "Renaud Arnoux-Prost" as a sub-heading.
- Home `<title>` is "Travel & Airline IT | Copernicus IT Solutions" while the H1 is about near-shoring; Services `<title>` is just "Services" (no brand).
- Meta descriptions promise things the pages do not say ("seasoned A-Players team", "where expertise meets innovation").

### 1.3 Copy quality
- Typos: "accelarate" (Services), "misssion critical" (About), "eretail" (About), "Rallye the teams" (Services), "Your It Landscape" (About), "Devops & Secops" (capitalisation), "Web3.0" and a bare URL pasted as body text.
- Truncated sentences from the expander: "…structure R&D organizations, and delive".
- Filler and hype: "Expertise at the pinnacle of technological prowess to tackle your most intricate IT endeavors", "overdrive your IT transformation", "rock-solid foundations", "A-Player teams", "BEEN THERE, DONE THAT" in all-caps.
- The "Because we believe…" manifesto in Solution Design is four dangling subordinate clauses before a single main verb.
- Build & Deliver paragraph is ungrammatical: "Full front-end, back-end, and database stack Software factory industrialization for an optimized change management process and operational excellence that integrates."
- Emoji in headings (🧠 ✈️ 🏗️ 👥 🌐) undercut an executive audience.
- Inconsistent experience claims: "25+ years" (`/-5`), "Over 30 years" (About), "25 YEARS OF EXPERIENCE" (Services).

### 1.4 Contact and trust signals are inconsistent
- Three different phone numbers: `+1 (863) 350-6951` on `/-5` and Services; `+33 7 71 62 01 64` and `+1 (940) 452-6288` on Contact. The Florida number must go.
- Copyright reads "© 2017" only — the site looks abandoned.
- Cookie consent banner on every page, yet the site has no stated analytics need and no privacy page. For a static brochure site this is friction without benefit.
- "Join Our Mailing List" appears on four pages with no newsletter ever sent; it dilutes the real CTA.
- Contact form on Contact page requires **Phone** (mandatory) and has no Company or Message field; the Services and `/-5` forms only ask Name + Email. Three different forms, none of which asks what the visitor wants.
- reCAPTCHA notice text sits in the middle of the page as body copy.
- "Contact Copernicus IT Solutions Sales" with "Get directions" for a consulting firm nobody will visit unannounced.

### 1.5 Weak calls to action
- CTAs are generic and repeated: "Explore Services" ×5, "Connect With Us", "Get in Touch", "Send a note", "Contact me", "Subscribe today". No CTA names the outcome (an assessment call, a scoping conversation).
- No page tells the visitor what happens after they write (response time, who answers, what the first call looks like).

### 1.6 What is worth keeping (the real assets buried in the noise)
- The six near-shore benefits (time-zone overlap, 20–70 % cost advantage, cultural alignment, EU security posture, flight access, one-team continuity) are concrete and differentiated.
- The five service lines (IT Strategy & Leadership, Solution Design & Sourcing, Program Management, Build & Deliver, DevOps & SecOps) and the three-step DevOps method.
- The airline/travel domain list (PSS, NDC / ONE Order, Altea, availability/PNR/disruption, TPF decommissioning, cruise-line distribution).
- Named client references: Amadeus, Sopra Steria, Michelin, ENGIE, EDF, SNCF, CMA CGM, Capgemini, Tier-1 banks.
- The "who benefits" triad (stalled enterprise transformations, scale-ups, companies wanting to offload engineering).
- Two credible bios.

---

## 2. Recommended positioning and value proposition

### 2.1 Positioning statement (internal)
Copernicus IT Solutions is a boutique engineering consultancy in Sophia Antipolis, France, that helps CIOs and technology leaders in the US and Europe turn mission-critical platform programs into delivered outcomes — first by advising on strategy, architecture and program structure, then by building and operating with a senior near-shore team working in US hours.

### 2.2 One story that reconciles advisory + delivery
**"We advise, then we build."**
Most consultancies stop at the slide deck; most near-shore shops start at the ticket. Copernicus covers the gap: the same senior people who help you set the vision, choose the stack and structure the program stay to deliver it, with a European engineering team that overlaps your working day.

### 2.3 Value proposition (external, one paragraph)
Thirty years of building and running some of the world's largest real-time travel platforms, available to your organisation as executive advisory, as a delivery team, or both. Senior European engineers in US time, at a fraction of on-shore cost, under EU-grade security and governance.

### 2.4 Proof points to repeat across the site
- Ex-Amadeus product-engineering leadership; teams of several hundred engineers; PSS / Altea / NDC / ONE Order / TPF decommissioning.
- Infrastructure and DevOps track record with ENGIE, EDF, SNCF, CMA CGM, Capgemini and Tier-1 banks since 2014.
- Sophia Antipolis: six hours ahead of US Eastern, direct flights from Nice, Marseille and Paris CDG.

### 2.5 Tone rules for all copy
- Executive, plain, specific. No superlatives ("pinnacle", "rock-solid", "A-Player"), no emoji, no all-caps slogans.
- First person plural ("we") everywhere. Renaud speaks in first person singular only inside his quoted bio pull-quote, if used.
- One claim of experience: **30 years** (Renaud), **since 2014** (Christophe). Company "founded 2017".
- One phone set only: FR +33 7 71 62 01 64, US +1 (940) 452-6288.

---

## 3. Final sitemap (6 pages)

| # | Path | Nav label | Purpose | `<title>` |
|---|------|-----------|---------|-----------|
| 1 | `/` (index.html) | Home | Story, proof, two doors (advise / build), primary CTA | Copernicus IT Solutions — Advisory and near-shore engineering for mission-critical platforms |
| 2 | `/services/` | Services | The five service lines, engagement models, DevOps 3-step method | Services — Copernicus IT Solutions |
| 3 | `/advisory/` | Advisory | CIO / technology-leader advisory offer (absorbs all `/-5` content) | CIO Advisory — Copernicus IT Solutions |
| 4 | `/travel-airline-it/` | Travel & Airline IT | Industry page: PSS, NDC, Altea, distribution, legacy decommissioning; link to copernic-us.com | Travel & Airline IT — Copernicus IT Solutions |
| 5 | `/about/` | About | Positioning, the two leaders, operating model, who we work with | About — Copernicus IT Solutions |
| 6 | `/contact/` | Contact | Form, direct contacts, what happens next | Contact — Copernicus IT Solutions |

Decision on `/-5`: **retire the URL** (301 to `/advisory/` if the host allows redirects; otherwise a static `/-5/index.html` containing a meta-refresh to `/advisory/`). Its content becomes the Advisory page — it is a distinct offer (executive advisory) and deserves its own door, but rewritten in "we" voice and stripped of duplicates and emoji.

Removed from the site: mailing-list subscription blocks, cookie banner (no cookies are set; if analytics is added later use a cookieless tool such as Plausible or GoatCounter), "Get directions" map, reCAPTCHA notices, the Florida phone number.

Global elements (every page):
- Header: wordmark "Copernicus IT Solutions" (links to `/`), nav in the order above, header CTA button **"Book a call"** → `/contact/`.
- Footer (three columns):
  - Column 1: Copernicus IT Solutions · Sophia Antipolis, France · "We advise, then we build."
  - Column 2: FR +33 7 71 62 01 64 · US +1 (940) 452-6288 · rarnoux-prost@copernicus-it.solutions · LinkedIn (https://www.linkedin.com/in/renaud-arnoux-prost/)
  - Column 3: nav links repeated + "Web3 retail for travel: copernic-us.com" (https://copernic-us.com/, opens in new tab)
  - Bottom line: `© 2017–2026 Copernicus IT Solutions. All rights reserved.`

---

## 4. Final copy, page by page

Conventions: `H1:` / `H2:` / `H3:` mark headings. `Sub:` is the hero subline. `CTA:` gives button label → destination. Everything else is body copy or bullets, ready to paste.

---

### 4.1 Home — `/`

**Meta description:** Copernicus IT Solutions helps CIOs deliver mission-critical platforms: executive advisory plus a senior near-shore engineering team in Sophia Antipolis, working in US hours.

**Hero**
- H1: Mission-critical platforms, delivered.
- Sub: Executive advisory and senior near-shore engineering from Sophia Antipolis, France — for CIOs who need large-scale programs to land, not just to start.
- CTA primary: **Book a call** → `/contact/`
- CTA secondary: **See our services** → `/services/`

**Section — Two ways to work with us**
- H2: We advise, then we build.
- Body: Most consultancies stop at the recommendation. Most near-shore providers start at the ticket. We cover the whole path: the senior people who help you set the vision, choose the stack and structure the program stay to deliver it, alongside your teams.

Two cards:
- H3: Advisory
  Body: Strategy, architecture and program leadership for CIOs and technology leaders. Thirty years running product engineering for some of the world's largest real-time travel platforms.
  CTA: **Advisory for technology leaders** → `/advisory/`
- H3: Near-shore engineering
  Body: A senior European team that designs, builds and operates your platform in your working day, at a 20–70 % cost advantage over US on-shore rates.
  CTA: **How we deliver** → `/services/`

**Section — Why a near-shore team in France works**
- H2: On-shore immediacy, without the on-shore price tag.
- Intro: European near-shore engineering, wrapped in EU-grade security and governance.

Six benefit tiles:
1. H3: Real-time US overlap
   Body: We are six hours ahead of the US East Coast. Morning stand-up in New York, afternoon build review in Austin — we are on the call. Your feedback lands in today's sprint, not tomorrow's.
2. H3: Senior talent at a 20–70 % cost advantage
   Body: France's deep cloud and fintech engineering pool lets you staff experienced engineers below US on-shore rates, without the coordination and rework costs of far-shore delivery. Transparent USD pricing keeps budgeting simple.
3. H3: Cultural and linguistic alignment
   Body: English-first delivery, the agile rituals you already run, and a European business culture that meshes with US product organisations.
4. H3: Enterprise-grade security by default
   Body: EU GDPR rigour and ISO 27001-aligned practices, audited. Compliance is built into every commit rather than bolted on before go-live.
5. H3: Flight-time friendly
   Body: Nice, Marseille and Paris CDG offer direct or one-stop routes to every major US hub. Need us in the room? We are at your office the next morning.
6. H3: One-team continuity
   Body: Because the hours overlap, the engineers who write the code also demo, refine and deploy with you. No hand-offs across hemispheres.

**Section — What we do**
- H2: Five service lines, one team.
Bulleted list (each links to the matching anchor on `/services/`):
- IT Strategy & Leadership — vision, consensus, roadmap, governance.
- Solution Design & Sourcing — the stack that fits your business ambition, not the default one.
- Program Management — multi-region, multi-business-unit transformation programs.
- Build & Deliver — full-stack engineering from specification to production.
- DevOps & SecOps — assess, automate, operate under shared SLAs.
- CTA: **Explore the services** → `/services/`

**Section — Travel & airline depth**
- H2: Built by people who built the platforms you run on.
- Body: PSS integration and modernisation, NDC and ONE Order, Altea implementation and optimisation, availability, PNR and disruption management, TPF decommissioning, cruise-line and large-scale distribution platforms. If it is real-time, high-volume and cannot go down, we have shipped it.
- CTA: **Travel & Airline IT** → `/travel-airline-it/`

**Section — Track record**
- H2: Trusted in demanding environments.
- Body: Our leaders have delivered for Amadeus, Sopra Steria, Michelin, ENGIE, EDF, SNCF, CMA CGM, Capgemini and Tier-1 banks on both sides of the Atlantic.
- (Optional logo row if licensing is confirmed; otherwise plain text list — do not fabricate logos.)

**Section — Who we work with**
- H2: A good fit if you are…
- A large enterprise whose IT transformation has stalled and needs to be restructured and delivered.
- A scale-up whose platform must grow faster than its engineering organisation can.
- A company of any size that wants to entrust a mission-critical build or run to a senior team it can actually talk to.

**Closing CTA band**
- H2: Tell us where the program is stuck.
- Body: A 30-minute call with Renaud Arnoux-Prost. No deck, no pitch — a candid read on what it will take to deliver.
- CTA: **Book a call** → `/contact/`

---

### 4.2 Services — `/services/`

**Meta description:** IT strategy, solution design, program management, build & deliver, and DevOps & SecOps — five service lines from a senior near-shore engineering team in France, working in US hours.

**Hero**
- H1: Services
- Sub: From the IT vision to the production release: five service lines you can engage separately or as one delivery path.
- CTA: **Discuss your program** → `/contact/`

**Section — How we engage**
- H2: Three engagement models
- Advisory retainer — a senior partner alongside the CIO or CTO, typically two to four days a month.
- Scoped program — a fixed-scope mission (assessment, architecture, transition plan, program set-up) with a defined outcome and end date.
- Near-shore team — a dedicated, stable team that builds and operates your platform, priced transparently in USD or EUR.

**Section 1 — anchor `#strategy`**
- H2: IT Strategy & Leadership
- H3: Vision, conviction, consensus, execution.
- Body: We work with the CIO and the heads of enterprise architecture and business solutions to establish the long-term IT vision the organisation actually needs, and to turn it into a roadmap that gets funded and delivered.
- Bullets:
  - Establish the long-term IT vision that supports your organisation's strategy and DNA.
  - Build consensus across business and IT around that vision and the transformations it requires.
  - Build leadership conviction and rally teams across the organisation.
  - Define the implementation roadmap and the governance bodies and rules needed to execute it.

**Section 2 — anchor `#design`**
- H2: Solution Design & Sourcing
- H3: The stack that matches your ambition, not the default one.
- Body: Industries whose core products are being commoditised will differentiate through digital platforms, and established companies have the business knowledge to lead those platforms. Adopting a mainstream solution "because everyone does" often delivers a false economy when it does not fit the business vision. Programming is not a commodity. We run a rigorous, open-minded sourcing analysis with one objective: the stack that best serves your business ambition.
- Bullets:
  - Target architecture and solution design for high-availability, low-latency platforms.
  - Build / buy / partner analysis with total-cost and fit-to-vision scoring.
  - Hybrid integration and legacy modernisation patterns.
  - Zero-downtime transition architectures.

**Section 3 — anchor `#program`**
- H2: Program Management
- H3: At-scale, global program leadership.
- Bullets:
  - Define multidimensional program roadmaps across business units, regions and sites of large organisations.
  - Build incremental transformation roadmaps that minimise transformation cost and deliver business value to the market early.
  - Lead international, multicultural programs and their governance.
  - Structure and execute legacy transition and decommissioning programs (TPF and other mainframe estates).

**Section 4 — anchor `#build`**
- H2: Build & Deliver
- H3: A short value chain from specification to production.
- Body: Our software design approach maximises value creation by compressing the software creation chain and reducing development entropy. Team members work across the full development process — product specification, coding, testing and delivery — rather than passing work between silos.
- Bullets:
  - Full-stack delivery: front end, back end and data layer.
  - Software-factory industrialisation: repeatable builds, controlled change management, operational excellence.
  - Real-time, high-volume transactional platforms and marketplaces.
  - The same engineers from backlog to production, in your time zone.

**Section 5 — anchor `#devops`**
- H2: DevOps & SecOps
- H3: Our approach in three steps.
- Numbered list:
  1. **Assess & Architect** — Map current pipelines, security posture and compliance gaps.
  2. **Automate & Harden** — Implement CI/CD, infrastructure as code and security scanning; codify policies and quality gates.
  3. **Operate & Improve** — Run, monitor and continuously tune the platform under shared SLAs.
- Body: Led by Christophe Griva, who has delivered middleware and DevOps for ENGIE, EDF, SNCF, CMA CGM, Capgemini and Tier-1 banks. IBM WebSphere, Oracle WebLogic, open-source stacks, containers and Kubernetes; regulated environments turned into automated, observable, security-hardened pipelines.

**Section — Industry focus**
- H2: Deep in travel and airline IT
- Body: Twenty-five years building leading solutions in airline and travel IT: full PSS, mission-critical high-availability and high-scalability platforms, decommissioning of legacy systems and the transformation programs around them.
- CTA: **Travel & Airline IT** → `/travel-airline-it/`

**Closing CTA band**
- H2: Not sure which service line you need?
- Body: Most conversations start with "the program is late and nobody agrees why." Start there.
- CTA: **Book a call** → `/contact/`

---

### 4.3 Advisory — `/advisory/` (replaces `/-5`)

**Meta description:** Independent advisory for CIOs and technology leaders: align IT and architecture with strategy, make IT a performance driver, and structure large-scale transformation programs that deliver.

**Hero**
- H1: Advisory for CIOs and technology leaders
- Sub: We help technology leaders make large-scale platforms deliver on business strategy — and stay to make sure they do.
- CTA: **Book a call** → `/contact/`

**Section — What we do for you**
- H2: What we can do for you
- Align your IT vision and architecture with business objectives.
- Define the role of IT as a driver of performance, not just a cost centre.
- Design an actionable delivery plan for scalable digital platforms.
- Structure and execute large-scale transformation programs.
- Manage your transformation project end to end when you need a hand on the wheel.

**Section — Expertise**
- H2: Where we are strongest
- Body: Large-scale transactional platforms, distribution systems, marketplaces and mission-critical environments.
- Bullets:
  - High-availability, low-latency systems.
  - Hybrid integration and legacy modernisation.
  - Zero-downtime transition architectures.
  - Real-time, high-volume transactional platforms.

**Section — Travel & airline**
- H2: Travel and airline industry
- Body: Extensive experience in airline and travel IT, including:
- Bullets:
  - PSS integration and modernisation.
  - NDC / ONE Order transformation.
  - Altea suite implementation and optimisation.
  - Flight availability, PNR and disruption management.
  - Large-scale distribution and content platforms.
  - Cruise-line distribution platforms.
- Link: **More on Travel & Airline IT** → `/travel-airline-it/`

**Section — Transformation leadership**
- H2: Transformation leadership
- Body: Leading and structuring complex transformation programs:
- Bullets:
  - Business / IT vision alignment.
  - Transition and decommissioning of legacy systems (TPF and others).
  - Governance and execution strategy.
  - Scaling platforms and engineering organisations.

**Section — Leadership and experience**
- H2: Who you will be working with
- Body: Renaud Arnoux-Prost brings thirty years at the core of large-scale engineering organisations, including VP-level product engineering roles at Amadeus, contributing to one of the world's leading travel technology platforms. He has led multidisciplinary teams of several hundred engineers across product, R&D, UX and operations in demanding real-time environments, and has also worked with Sopra Steria, Michelin and cruise-line distribution leaders.
- Link: **Meet the team** → `/about/`

**Section — Operating model**
- H2: How an advisory engagement runs
- Body: Delivered by Renaud personally, with a network of senior architects, product leaders and engineering experts assembled for each mission. Typical formats: a two-to-four-week assessment with a written findings-and-roadmap document; a monthly retainer alongside the CIO; or interim program leadership. When the advice leads to a build, our near-shore team can take it on — see **Services**.

**Closing CTA band**
- H2: Let's talk about your platform.
- Body: A first conversation is free and confidential.
- CTA: **Book a call** → `/contact/`

---

### 4.4 Travel & Airline IT — `/travel-airline-it/`

**Meta description:** Airline and travel IT expertise: PSS integration, NDC and ONE Order, Altea, availability and PNR, disruption management, TPF decommissioning and large-scale distribution platforms.

**Hero**
- H1: Travel & Airline IT
- Sub: Twenty-five years building and running the real-time platforms the industry depends on — from full PSS to next-generation retailing.
- CTA: **Discuss your program** → `/contact/`

**Section — Domains**
- H2: Where we have done the work
Three columns:
- H3: Passenger service systems
  - PSS integration and modernisation.
  - Altea suite implementation and optimisation.
  - Flight availability, PNR and disruption management.
- H3: Distribution and retailing
  - NDC / ONE Order transformation.
  - Large-scale distribution and content platforms.
  - Cruise-line distribution platforms.
  - GDS integration.
- H3: Legacy transition
  - TPF and mainframe decommissioning.
  - Zero-downtime transition architectures.
  - Hybrid integration between legacy and modern stacks.

**Section — Why it matters**
- H2: Mission-critical, high-availability, high-scalability
- Body: Airline platforms do not get a maintenance window. Every decision — architecture, sourcing, program sequencing — has to respect availability, latency and peak-load reality. Our leaders spent three decades inside those constraints at Amadeus and with airline and cruise-line clients, and they design and deliver accordingly.

**Section — From consultancy to end-to-end build**
- H2: Advice or delivery, or both
- Body: Whether you need an independent view on a PSS roadmap, a program lead for an NDC rollout, or a near-shore team to build the retailing layer, the engagement models on our **Services** page apply. Airline programs in particular benefit from a team that already speaks the domain and works in your hours.
- CTA: **See our services** → `/services/`

**Section — Sister venture**
- H2: Next-generation retailing for travel
- Body: Our sister venture, **copernic-us**, explores Web3 retail models for travel. If your roadmap includes tokenised offers, decentralised loyalty or new distribution rails, we can bring both perspectives to the table.
- Link: **copernic-us.com** → https://copernic-us.com/ (new tab, `rel="noopener"`)

**Closing CTA band**
- H2: Talk to someone who has shipped it before.
- CTA: **Book a call** → `/contact/`

---

### 4.5 About — `/about/`

**Meta description:** Copernicus IT Solutions is a boutique engineering consultancy in Sophia Antipolis, France, founded in 2017, led by Renaud Arnoux-Prost and Christophe Griva.

**Hero**
- H1: About Copernicus IT Solutions
- Sub: A boutique engineering consultancy in Sophia Antipolis, France, founded in 2017. Small by design, senior by default.

**Section — What we believe**
- H2: From the blueprint of your IT landscape to its realisation
- Body: We work closely with IT and business leadership to align IT strategy with company goals, adapt methods and organisation to those goals, and build transformation roadmaps that cover the technical, functional, HR and organisational dimensions — for the long-term vision and the next six months alike.
- H3: Five foundations
- Bullets:
  - An IT strategy and leadership framework that the organisation actually shares.
  - A solution design that fits the business, not the vendor.
  - A transition architecture that keeps the lights on.
  - A transformation program with clear governance.
  - A build-and-deliver execution plan with a senior team behind it.

**Section — Leadership**
- H2: Leadership team

Card 1:
- H3: Renaud Arnoux-Prost
- Role: Founder — Product Engineering & Advisory
- Body: Over thirty years executing complex digital transformation programs, including VP-level product-engineering leadership at Amadeus. End-to-end development oversight of high-availability, mission-critical applications, with deep expertise in e-retail architectures for travel. Renaud bridges business strategy and technical architecture, structures R&D organisations and delivers concrete, robust solutions — equally involved in strategic vision and hands-on execution, with a strong focus on quality, scalability, value creation and R&D team leadership. Previous work includes Sopra Steria, Michelin and cruise-line distribution leaders.
- Link: LinkedIn → https://www.linkedin.com/in/renaud-arnoux-prost/

Card 2:
- H3: Christophe Griva
- Role: VP Infrastructure & Middleware — DevOps & SecOps
- Body: Since 2014 Christophe has delivered middleware and DevOps engineering to blue-chip organisations on both sides of the Atlantic, including ENGIE, EDF, SNCF, CMA CGM, Capgemini and half a dozen Tier-1 banks. Fluent in IBM WebSphere, Oracle WebLogic, open-source stacks and modern container and Kubernetes toolchains, he turns complex, regulated environments into automated, observable and security-hardened pipelines. His combination of deep systems craft and business-aligned DevOps leadership keeps clients shipping faster without compromising resilience.

**Section — Operating model**
- H2: How we are organised
- Body: Two partners, a stable core of senior engineers in Sophia Antipolis, and a network of senior architects, product leaders and engineering specialists assembled per mission. We keep the firm small so that the people you meet in the first call are the people who do the work.

**Section — Who benefits**
- H2: Who we work with
- Bullets:
  - Large enterprises whose IT transformation initiatives have stalled.
  - Scale-ups preparing for growth that need to elevate their platforms.
  - Businesses of any size that want to entrust their engineering to a senior team.
- CTA: **See our services** → `/services/`

**Closing CTA band**
- H2: Start with a conversation.
- CTA: **Book a call** → `/contact/`

---

### 4.6 Contact — `/contact/`

**Meta description:** Contact Copernicus IT Solutions in Sophia Antipolis, France. Book a call with Renaud Arnoux-Prost — FR +33 7 71 62 01 64, US +1 (940) 452-6288.

**Hero**
- H1: Book a call
- Sub: Tell us where the program stands. We reply within one business day, and the first conversation is with a partner, not a sales team.

**Two-column layout**

Left — form (H2: Send us a message)
- Name (required)
- Work email (required)
- Company (required)
- Message (required, textarea, placeholder: "What are you trying to deliver, and what is in the way?")
- Submit button label: **Send message**
- Below button, small text: "We use your details only to reply to you. No newsletter, no tracking."
- Success state text: "Thank you — we will get back to you within one business day."

Right — direct contact (H2: Or reach us directly)
- Renaud Arnoux-Prost, Founder
- Email: rarnoux-prost@copernicus-it.solutions (mailto link)
- France: +33 7 71 62 01 64 (tel link)
- United States: +1 (940) 452-6288 (tel link)
- LinkedIn: linkedin.com/in/renaud-arnoux-prost (https://www.linkedin.com/in/renaud-arnoux-prost/)
- Office: Sophia Antipolis, France (CET / CEST — six hours ahead of US Eastern)

**Section — What happens next**
- H2: What to expect
- Numbered list:
  1. A 30-minute call to understand your context, constraints and timeline.
  2. If there is a fit, a short written note: how we would approach it, who would be involved, and an indicative budget.
  3. You decide. No obligation, no follow-up sequence.

---

## 5. Conversion elements

### 5.1 Primary CTA per page
| Page | Primary CTA (header + closing band) | Secondary |
|------|-------------------------------------|-----------|
| Home | Book a call → /contact/ | See our services → /services/ |
| Services | Book a call → /contact/ | Travel & Airline IT → /travel-airline-it/ |
| Advisory | Book a call → /contact/ | Meet the team → /about/ |
| Travel & Airline IT | Book a call → /contact/ | See our services → /services/ |
| About | Book a call → /contact/ | See our services → /services/ |
| Contact | Send message (form submit) | mailto / tel links |

The header button "Book a call" is present on every page except Contact (where it becomes a non-link or scrolls to the form).

### 5.2 Contact form specification
- Fields: `name` (text, required), `email` (email, required), `company` (text, required), `message` (textarea, required, min 20 chars). No phone field, no mandatory CAPTCHA. Add a hidden honeypot field (`_gotcha` or equivalent) for spam.
- **Must work without a backend.** Implementation:
  - `<form action="https://formspree.io/f/FORM_ID_PLACEHOLDER" method="POST">` with the placeholder clearly marked in a code comment for Renaud to replace with the real Formspree (or equivalent, e.g. Basin, Web3Forms) endpoint.
  - Fallback: if the action is still the placeholder at runtime (or JS detects a submit error), build a `mailto:rarnoux-prost@copernicus-it.solutions?subject=Website%20enquiry%20from%20{company}&body={name}%0A{email}%0A%0A{message}` link and open it. The form must therefore be usable with JS disabled (plain POST) and degrade to mailto with JS enabled.
  - Client-side validation via HTML5 attributes only (`required`, `type="email"`, `minlength`).
  - On success, show the success text inline (no redirect to a third-party thank-you page); with Formspree use `_redirect` or the AJAX endpoint.
- Every phone number on the site is a `tel:` link; every email is a `mailto:` link.

### 5.3 Trust and friction
- No cookie banner, no mailing-list block, no reCAPTCHA notice, no map.
- Named-client list appears on Home and About as text; logos only if Renaud confirms rights.
- Footer copyright: `© 2017–2026 Copernicus IT Solutions` — exact string.

---

## 6. Acceptance criteria (dev lead checklist)

Structure
- [ ] Exactly six HTML pages at the paths in section 3; each has a unique, non-empty `<title>` and `<meta name="description">` as specified.
- [ ] `/-5` no longer serves content: 301 redirect or a static meta-refresh page to `/advisory/`.
- [ ] One `<h1>` per page, matching the copy in section 4; heading levels are sequential (no H1 → H3 jumps). No heading text is rendered more than once per page.
- [ ] Header nav order: Home, Services, Advisory, Travel & Airline IT, About, Contact, plus "Book a call" button. Current page is visually indicated.
- [ ] Footer identical on all pages with the three columns from section 3 and the exact line `© 2017–2026 Copernicus IT Solutions. All rights reserved.`

Content
- [ ] All body copy pasted verbatim from section 4; no leftover text from the old site (grep the build for "accelarate", "misssion", "A-Player", "pinnacle", "overdrive", "Rallye", "eretail", "863" — all must return zero hits).
- [ ] Only two phone numbers appear anywhere: `+33 7 71 62 01 64` and `+1 (940) 452-6288`, both as `tel:` links. The email `rarnoux-prost@copernicus-it.solutions` is a `mailto:` link wherever shown.
- [ ] No emoji in headings or body. No all-caps slogans.
- [ ] Services page has working in-page anchors `#strategy`, `#design`, `#program`, `#build`, `#devops`, and the Home service list links to them.
- [ ] Links to https://copernic-us.com/ and LinkedIn open in a new tab with `rel="noopener noreferrer"`.
- [ ] Sister-venture wording uses "Web3", not "Web3.0"; URL is not pasted as bare body text.

Conversion
- [ ] Contact form has exactly the four fields (name, email, company, message), all required, plus a hidden honeypot; no phone field.
- [ ] Form posts to a clearly commented placeholder endpoint and falls back to a pre-filled `mailto:` if the endpoint is unset or the POST fails. Verified with JS disabled and enabled.
- [ ] Inline success message shown after submit; no third-party thank-you redirect.
- [ ] "Book a call" header CTA present on five pages and links to `/contact/`.
- [ ] No cookie banner, no newsletter form, no reCAPTCHA text, no embedded map.

Quality
- [ ] Static site: no server-side dependency; builds to plain HTML/CSS with minimal JS (form fallback and mobile nav only). No external JS except an optional form service.
- [ ] Responsive at 360 px, 768 px, 1280 px; no horizontal scroll at 360 px; 16 px minimum side gutter on mobile.
- [ ] Lighthouse (mobile) ≥ 90 on Performance, Accessibility, Best Practices, SEO for every page.
- [ ] All images have alt text; colour contrast meets WCAG AA; the site is fully keyboard-navigable; focus states visible.
- [ ] `sitemap.xml` and `robots.txt` present; canonical URLs set; Open Graph title/description/image on every page.
- [ ] Favicon and a simple wordmark; no placeholder or stock "handshake" imagery.
- [ ] Spell-check pass in en-GB or en-US consistently (this brief uses British spelling for body copy; pick one and apply site-wide).
- [ ] Renaud signs off on: the "ISO 27001-aligned" wording (verify before publishing), the client-name list, and the Formspree endpoint.
