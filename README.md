# Copernicus IT Solutions — website

Static site for **https://copernicus-it.solutions** (GitHub Pages, custom domain).
Pure HTML/CSS with two small vanilla-JS behaviours (mobile nav, contact form). No build step, no framework, no dependencies.

## Structure

```
index.html                  Home
services/index.html         Services (anchors #strategy #design #program #build #devops)
advisory/index.html         Advisory for CIOs and technology leaders (replaces old /-5)
travel-airline-it/index.html
about/index.html
contact/index.html          Form + direct contacts
404.html                    GitHub Pages not-found page (noindex)
-5/index.html               Meta-refresh redirect of the old GoDaddy /-5 URL to /advisory/ (noindex, canonical → /advisory/)
assets/css/site.css         The one stylesheet
assets/js/site.js           Mobile nav toggle + contact-form handling
assets/img/                 logo.png (512 square, apple-touch-icon), logo-wordmark.png (cropped, header/footer),
                            og-image.png (1200x630 share image), renaud-arnoux-prost.jpg, christophe-griva.jpg
favicon.svg, favicon.ico    Icons
robots.txt, sitemap.xml     SEO (update <lastmod> in sitemap.xml when a page changes)
site.webmanifest            Minimal web-app manifest
.well-known/security.txt    Security contact
CNAME                       Custom domain for GitHub Pages (apex, no www)
.nojekyll                   Disables Jekyll processing on GitHub Pages
```

All internal links are root-absolute (`/services/`, `/assets/...`) with trailing slashes, so the site must be served from the domain root.
Every page carries a self-referencing canonical, Open Graph / Twitter tags, and JSON-LD (Organization + Person + WebSite site-wide, WebPage + BreadcrumbList per page).

## Local preview

```
python3 -m http.server 8000
# open http://localhost:8000/
```

## Deploy on GitHub Pages

1. Push this repository to GitHub (default branch `main`).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → branch `main`, folder `/ (root)`.
3. The `CNAME` file already contains `copernicus-it.solutions`; GitHub picks it up and shows it under *Custom domain*.
4. After DNS resolves (below), tick **Enforce HTTPS**. Certificate issuance can take up to an hour.

### DNS at the registrar

Apex `copernicus-it.solutions`:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |
| CNAME | www | `<github-user>.github.io` |

Remove the old GoDaddy Website Builder A/CNAME records first. GitHub then redirects `www` → apex and `http` → `https` automatically. Verify with `curl -I https://www.copernicus-it.solutions/` (expect 301 to the apex) and `curl -I https://copernicus-it.solutions/about` (expect 301 to `/about/`).

### After launch

- Google Search Console: verify the apex property (DNS TXT), submit `https://copernicus-it.solutions/sitemap.xml`.
- Run Google's Rich Results Test on `/` and `/about/`.
- Use LinkedIn Post Inspector on each URL to refresh the old share previews.

## Contact form — set the Formspree ID

The form in `contact/index.html` posts to `https://formspree.io/f/REPLACE_WITH_FORM_ID`.

1. Create a free form at https://formspree.io (recipient `rarnoux-prost@copernicus-it.solutions`), copy the form ID (looks like `xabcdefg`).
2. In `contact/index.html`, replace `REPLACE_WITH_FORM_ID` in the `<form action="...">` attribute (there is a comment right above it).
3. Nothing else changes. `assets/js/site.js` looks at the action at submit time:
   - placeholder still present → it opens a pre-filled `mailto:` link to `rarnoux-prost@copernicus-it.solutions` instead;
   - real ID → it POSTs via `fetch` and shows the inline success message; if the POST fails it falls back to the `mailto:` link;
   - JavaScript disabled → the browser submits the plain POST to Formspree.

The hidden `_gotcha` field is the honeypot (Formspree drops submissions where it is filled). There is no phone field, no CAPTCHA, no third-party thank-you redirect.

Any other form service that accepts a plain HTML POST (Basin, Web3Forms, …) works the same way: change the `action` URL and, if you keep the placeholder detection, the string `REPLACE_WITH_FORM_ID` in `site.js`.

## Editing content

Pages are hand-written HTML. Header and footer are repeated in each file; when you change them, change all seven files (six pages + `404.html`).
Headshots are 640x640 JPEGs displayed at 112px. The OG image is a single 1200x630 PNG used on every page.

## Changelog vs the old GoDaddy site

**Positioning**
- One story instead of three: "We advise, then we build." The near-shore team, the solo-advisor page and the two-person leadership page are now framed as two doors (Advisory / Near-shore engineering) into the same firm.
- Copy rewritten in first-person plural, executive tone; hype, emoji, all-caps slogans and typos removed. One experience claim (30 years / since 2014 / founded 2017).

**Pages**
- New: `/advisory/` (absorbs and rewrites the unlisted `/-5` page) and `/travel-airline-it/` (dedicated industry page).
- `/services/` restructured into five service lines with in-page anchors plus three engagement models and the three-step DevOps method.
- `/about/` fixes the mislabelled Christophe Griva card, removes duplicated bios and the "Show more" expander.
- `/contact/`: single form (name, work email, company, message + honeypot), no mandatory phone, direct contacts, and a "What to expect" section.
- `/-5` retired: meta-refresh redirect to `/advisory/` with `noindex` and canonical to the new page.
- Custom `404.html`.

**SEO / technical**
- Unique `<title>` and meta description on every page, self-referencing canonicals, Open Graph and Twitter cards with a 1200x630 image, JSON-LD (Organization/ProfessionalService, Person, WebSite, WebPage, BreadcrumbList, AboutPage, ContactPage).
- `robots.txt`, `sitemap.xml`, `CNAME`, `.nojekyll`, `site.webmanifest`, `.well-known/security.txt`.
- Exactly one `<h1>` per page, sequential heading levels, semantic landmarks, skip link, visible focus states, alt text on all images, `prefers-reduced-motion` respected, WCAG AA contrast.
- No third-party JS except Google Fonts (Inter) with preconnect; no GoDaddy tracking scripts.

**Removed**
- Cookie consent banner (no cookies are set), "Join Our Mailing List" blocks, reCAPTCHA notice text, embedded map / "Get directions", the Florida phone number. Copyright is now `© 2017–2026`.
