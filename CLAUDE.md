# Baumstein — Project Memory

## What This Is
A luxury furniture brand website for **Baumstein** (Wood & Stone).
Single-page HTML site — no frameworks, no build tools. Everything lives in `index.html`.

---

## About Baumstein
Baumstein is a brand new Latvian furniture manufacturer specialising in **custom handmade tables**. Their signature product: wooden tables where part of the tabletop is replaced with the highest quality natural stone. Every table is fully bespoke — made to the customer's exact specification by skilled craftsmen in Latvia using premium materials.

They are a new player in the luxury furniture space, highly motivated to earn their place and stand out. The brand needs to project confidence and premium quality even without a long track record.

---

## Project Goals
- **Primary:** Generate enquiries from potential customers — every page decision should nudge toward the contact form
- **Secondary:** Build trust — the visitor should feel they are looking at an established, premium brand
- **Tertiary:** Showcase the tables — mockup images and future real photography should be the hero of the page
- The site should feel like a **gallery meets brand story** — not a shop, not a catalogue
- Visitor should leave feeling: *"This is special. I want one. I need to contact them."*

---

## Target Audience
- Affluent homeowners, interior designers, architects
- Appreciate craftsmanship, natural materials, bespoke/one-of-a-kind objects
- Likely browsing on desktop first (premium purchase = considered decision) but mobile must be flawless
- May not know Baumstein yet — the page has to do all the trust-building from scratch

---

## Future Vision (awareness only — not a current priority)
- Possible expansion to multiple pages, 3D table viewer, e-commerce
- Not planned for near future — don't over-engineer for it
- Just write clean, readable code as a natural habit — that's enough


---

## Mobile First — Non-Negotiable
- **Mobile view is the priority**. Every feature is designed for mobile first, then adapted up to desktop
- Test every change at 390px width (iPhone) before considering it done
- If something has to be sacrificed for mobile, sacrifice the desktop version — not the other way around
- Touch targets minimum 44px, generous padding on small screens, no tiny text

## Design Rules (Do Not Break These)
- **Dark theme only, single canvas** — every section is the warm near-black base `--bg #13110D`. (A lighter "limestone" palette and a full light-page inversion were both trialled and **reverted** — the user decided firmly on no light parts. Don't reintroduce light sections.) **`--bg-lift` is retired for section/panel backgrounds** — it created jarring lighter "slabs" between dark sections. Sections that need to stand out do NOT use a lighter background; instead they get a **warm-brown framed panel lifted over the dark canvas**.
- **Framed-panel system (showcases & cards):** a panel = a warm-brown gradient `linear-gradient(var(--panel-top) #201a11 → var(--panel-bot) #16110a)` + a walnut frame `--frame rgba(160,120,80,0.24)` + an inner walnut double-mat hairline `--mat rgba(160,120,80,0.14)` + a soft ambient shadow. Used by: the Collection gallery stage (`.carousel-stage`), the Craft map unit (`.origins` frame + `.origins-panel` body), and the Contact card (`.contact-form-box`). Brown reads as a warm accent, NOT a lighter block — keep panels dark+warm, distinguished by frame/shadow, not by lightness. The map viewport (`.origins-map-wrap #100E0A`) stays the darkest layer on purpose.
- Accent is **walnut** `--walnut #A07850` (not "gold") — used for hairlines, CTAs, active states
- Text tones: `--stone #D4CCBC` (headings/primary), `--body #B4AEA4` (reading paragraphs), `--platinum #C2BDB5` (labels), `--dim #9C978C` (muted/micro-labels only — too low-contrast for body copy)
- Three fonts: `Cormorant Garamond` (headings, serif), `DM Sans` (body, sans-serif), `Great Vibes` (script accents — the word "Stone", "Tell us what you imagine", form success)
- **Heading rule (consistency — don't reintroduce the flip-flop):** all serif headlines are **upright** Cormorant. Emphasis comes ONLY from an accent on a key word — either an italic-walnut `<em>` (e.g. "Ready to *Begin?*") or a Great Vibes script span (hero "Stone", craft opener "a conversation."). Headlines are never set fully italic. (Hero, `.craft-opener`, and `.form-title` were previously full-italic and clashed with the upright section titles — now unified upright.) Italic Cormorant is still fine for clearly-secondary editorial voice (`.promise-lead` quotes).
- **Heading size scale (keep consistent):** the **hero** (`.hero-headline`) is the singular biggest at `clamp(52px, 8.5vw, 96px)`. **All section titles** (`.section-title` — used by Collection, How It Works, Contact) share ONE size: `clamp(36px, 5.4vw, 66px)` (~66px desktop). Collection's title was previously blown up to 96px (hero-sized) while the others sat at 54px — a jarring split the user flagged ("Nature Becomes Furniture huge, From Vision to Heirloom tiny"); now unified. Sub-headings (`.craft-opener` ~42px, `.form-title` ~38px) sit below the section-title tier.
- **Intro alignment is CENTRED (current decision — but UNRESOLVED, revisit).** `.craft-intro` and `.promise-heading` are centred on all breakpoints. This is a tension we haven't cracked: **left-aligned** intros left the right half of the desktop empty ("dead space" — rejected); a **two-column editorial** version (statement left / supporting text right) was tried and the user "didn't like it at all"; plain **centred** floats a bit small on very wide desktops but is the chosen lesser-evil **for now**. The centred heading reads OK above full-width content (the map under The Craft, the roadmap under How It Works anchor the width so it doesn't float alone). **TODO: a better answer for filling desktop width without left-align or a 2-col split — think about it before launch.** (Hero & collection were always centred.)
- No rounded corners except the logo badge — everything sharp/architectural
- Whitespace is premium — never crowd elements
- Mobile-first thinking: test every change on small screens
- Keep imagery readable: image gradient overlays are deliberately light so the tables stay visible — don't darken them back

---

## Current File Structure
```
Baumstein Web/
├── index.html                    ← entire site lives here
├── heroimage.png                 ← dining room hero photo
├── cross section.jpeg            ← wood/stone junction close-up (legacy; no longer used after Craft map rebuild)
├── worldmap.svg                  ← full-globe equirectangular world map for The Craft origins map. **Public domain** — generated from Natural Earth land-110m data (no attribution / no share-alike). viewBox `0 0 5760 2880`, single `<path>`, restyled to walnut outlines. (Replaced the earlier Wikimedia CC BY-SA map to clear the licensing obligation.)
├── nero ovale.jpeg               ← collection: The Nero Ovale
├── the aurum.jpeg                ← collection: The Aurum
├── the cinder.jpeg               ← collection: The Cinder
├── the alba.jpeg                 ← collection: The Alba
├── baumstein-logo.png            ← BS monogram, circular, white background
├── baumstein logo no bg.png      ← transparent logo (footer)
├── serve.ps1                     ← local dev server (PowerShell, port 3000)
└── .claude/
    └── launch.json               ← preview server config (server name: "baumstein")
```

---

## Collection Section — Design Philosophy
- These are **showcase designs**, not an exhaustive catalog — they demonstrate possible wood/stone combinations
- A **crossfade carousel** (not the old 3-column grid): one large image per slide, arrows + dots + swipe/drag
- **Desktop:** the carousel sits inside a **framed "gallery stage"** — a lifted `--bg-lift` matte panel (14px even matte) with a 1px outer frame, a thin inner double-mat hairline (`.carousel-stage::before`), and a soft ambient shadow, on a **warm walnut depth field + edge vignette** background with **faint stone veining** (`.collection-vein` SVG, ~5% opacity). The **name/badge/material sit OVER the image** (`.slide-overlay-top` / `.slide-overlay-bottom` + the top/bottom `.slide-gradient` dark gradients for legibility) — the user reverted the earlier "caption placard beneath" idea back to text-on-image; the `.carousel-plate` placard was removed entirely (HTML/CSS/JS).
- **Mobile:** unchanged — full-bleed image with the name/material overlaid on the photo (the stage frame/veining/glow are disabled under 900px; text-over-image is the same as desktop).
- Each design has a name ("The Nero Ovale", "The Aurum", "The Cinder", "The Alba"), the badge "Baumstein Originals", and a material line (e.g. "Oak ◆ Black Marquina Marble")
- Legs are a key differentiator to be highlighted in a dedicated section later

## Sections on the Page (in order)
1. **Hero** — full viewport, `heroimage.png`, Ken Burns zoom, scroll-triggered header
2. **Marquee bar** — scrolling material names
3. **Collection** — framed "gallery stage" carousel of 4 named designs on desktop (caption placard beneath, warm veined backdrop); full-bleed with on-image captions on mobile. See Collection philosophy above.
4. **The Craft** — centered intro copy, then a **cinematic material-origins map slideshow**: a zoomed-in `worldmap.svg` (walnut outlines + faint lat/long graticule, corner ticks, edge vignette) that **pans region-to-region** as it auto-rotates through **11 materials** in **random order** (~5.4s each): **9 stones + 2 woods** (only Oak — Vidzeme, Latvia — and American Walnut are currently sourceable). A reticle marks the active origin; the panel shows material name, location, coordinates, swatch, description, "Pairs with", STONE/WOOD tag. **Map behaviour (rebuilt):** the active location is **always dead-centre** (the pan clamp was removed; reticle is fixed at centre); the map is **sized by HEIGHT** — `.origins-zoom { width:auto; height:320% }` + `.origins-map { width:auto; height:100% }` (was width-based `width:300%`). **Why height-based:** the `.origins` block has a locked desktop height (700px) but a width-scaled map shrinks vertically on narrower desktops, so centring on a northern point (e.g. Oak, Latvia 57°N) ran out of map and showed a void above Europe — exactly the bug seen at 1280×800. Height-based sizing makes vertical coverage **constant at every viewport width** (~58px top margin desktop, 26px mobile). Combined with the full-globe map (lat +90..−90), no edge ever enters view; the `.origins` block has a **locked `height: 600px`** on desktop so the panel's varying text length never resizes it (this killed the page-shift-while-browsing bug); the **graticule (`.origins-grid`) now lives in `.origins-map-wrap`** (not inside the panning `.origins-zoom`) so it fills the whole viewport and edge gaps read as map "space" under the vignette. It's a **pure slideshow** — cursor never affects it; pauses only when tab hidden; respects reduced-motion. Stacks on mobile (`.origins` height auto). NOTE: the map `<img>` must NOT use `loading="lazy"` (it stalled page load). Material data + LV/RU + coords live in the `ORIGINS` array; `LABELS` holds the stone/wood eyebrow+tag; `PAIRS` holds the suggested pairing per index. Pan math: `x=(lng+180)/360`, `y=(90-lat)/180` (full-globe map, lat +90..-90; the old cropped-map formula `y=(75-lat)/132` is retired). Swatches are CSS placeholders (`.sw-stone-* / .sw-wood-*`) — swap for real photos. (Welsh Slate removed — slate is not a real tabletop stone.)
5. **Process / "How It Works" — the commission roadmap** (rebuilt). The four stages are a **connected journey**, each marked by a small refined circular **node** (`.step-node`) holding a small italic roman numeral (`.step-numeral`, ~19px — replaced the old 72–110px giant numerals). **Desktop (≥901px):** the roadmap runs **horizontally** — `.process-steps` is `flex-direction:row`, four equal stages across the width — joined by a **serpentine dashed SVG route** (`.roadmap-route`, a wave threaded through the node centres via `viewBox 0 0 100 90` + `preserveAspectRatio="none"` + `vector-effect="non-scaling-stroke"`); heading left-aligned. **Mobile:** a **vertical timeline** — `flex-direction:column`, a vertical spine on the left (`.process-steps::before`); the SVG route is hidden. **Tie-in into contact (no button — that was rejected as "cutting corners"):** after the stages, a **descending dashed line + chevron** (`.roadmap-into`, an `<a href="#contact">`) leads the eye down into the contact section (whose "Ready to *Begin?*" heading is the destination). **Our Standards was REMOVED** (user: didn't make sense) — its HTML/CSS and the `.promise-statements-label`/`.promise-standard-text` i18n rows are gone. All remaining step i18n counts/order unchanged.
6. **Contact** — form + contact details. The form POSTs to `/api/contact`, a **Vercel serverless function** that emails the enquiry to the team. Works in production; it will NOT work under the local `serve.ps1` static server (expect a failed submit locally — that's normal). **Visual treatment = "engraved commission card"** (redesigned for a premium feel, CSS-only — HTML/JS/i18n untouched): the form sits in a lifted card (`.contact-form-box`) with a warm gradient body, a soft ambient drop-shadow, and a fine inner walnut "double-mat" frame (`::before`, inset 9px) that echoes the collection gallery stage; a short walnut letterhead rule sits above the title (`.form-heading::before`). Fields keep the floating-label underline pattern but refined: labels float to walnut uppercase, and a walnut underline **draws in from the left on focus** (`.form-group::after` + `:focus-within`). The left column renders the contact details as an engraved ledger (hairline dividers + walnut left-rules). Submit button stays in the site's outlined-walnut CTA family (matches `.btn-primary`). **Whole section flows on a single unified `--bg` field** (was a lighter `--bg-lift` slab with a hard `--bg`/`--bg-lift` left/right colour split — that jarring seam was removed): `#contact` is now `--bg` (matching the section above and the footer, so it reads as one continuous block), the two columns share that field, and they're separated only by a **soft vertical hairline that fades out at top & bottom** (`.contact-left::after`, hidden on mobile). The only lifted element is the card (its gradient + shadow + frame + a tightly-centred warm glow behind it via `.contact-form-wrap::before`). All field `name`s, ids, `.submit-btn span` count, and the i18n-aligned `.form-label`/`.cd-label`/`.form-select option` order are preserved.
7. **Footer**

> Note: a full-screen **password gate is ACTIVE on the live site only** (pre-launch privacy — re-enabled on request). Passphrase (`ivisivis23`) lives in the "Password gate" IIFE at the bottom of `index.html`; unlock persists via `sessionStorage` (`bs_auth`). **The gate auto-skips during local preview** — an `isLocal` check (`localhost` / `127.0.0.1` / `0.0.0.0` / file-open / `*.local`) unlocks it immediately so the site is viewable while working; the password still guards the real domain. Remove the gate HTML/CSS/JS entirely when the site goes fully public.

---

## Things Still To Build

### Done
- [x] Hamburger menu + full-screen nav overlay (smooth open/close)
- [x] Scroll-triggered entrance animations (`.reveal` via IntersectionObserver)
- [x] Collection rethought into a full-width gallery carousel
- [x] Real table photos in the collection (SVG placeholders gone)
- [x] The Craft section reworked into a balanced two-column desktop layout
- [x] ~~Our Standards~~ — removed entirely (user found it didn't make sense)
- [x] Contact form submission — live via a Vercel serverless function (`/api/contact`) that emails enquiries
- [x] Full **EN / LV / RU translations** + working language switcher (localStorage-persisted, defaults to EN)

### Must-have (before this page is shareable)
- [ ] SEO basics — meta description, Open Graph image/title for link previews (still missing)

### Should-have (makes it feel complete)
- [x] **Marquee polish (done)** — all `.mat` share one font (DM Sans, tracked uppercase), dark bar. **Desktop loop gap FIXED:** a JS IIFE (`#marqueeTrack`) measures one unit and repeats it so each half exceeds the viewport, making `translateX(-50%)` seamless at any width (rebuilds on resize). **Separators unified:** all material breaks now use the single walnut diamond `◆` (`.sep`) — the earlier random mix of hairlines (`.sep-line`) and diamonds was removed, including the dead `.sep-line` CSS rule. The diamond matches the brand's collection material-line notation ("Oak ◆ Black Marquina Marble"). (Materials: Oak, Granite, Marble, Quartzite, Onyx, American Walnut, Travertine, Terrazzo.) **Material names stay English in all languages by design** — they read as brand/material terms (like Carrara), so they are NOT wired into the EN/LV/RU i18n. Don't translate them.
- [x] **The Craft — interactive world map** of material sourcing origins (built). Material data + LV/RU translations live in the `ORIGINS` array inside the map IIFE near the bottom of `index.html`; type labels in `LABELS`. Dot positions are `x`/`y` percentages on the equirectangular map (`x = (lng+180)/360`, `y = (90-lat)/180`). It listens for the `bs:lang` event to re-translate the active panel.
  - [ ] **Swap swatch placeholders for real photos** — the panel swatches are CSS-generated gradients (`.sw-stone-* / .sw-wood-*`). Replace with real close-up material photos when available.
  - [ ] **Verify the 11 sourcing claims are factually true** to the business before publishing (origins were drafted, not confirmed; stone origins especially). User wants only table-suitable stones shown — Welsh Slate already removed; review the rest (Calacatta, Nero Marquina, Travertine, Honey Onyx, Verde Alpi, Emperador, Brazilian Granite, White Quartzite, Blue Sodalite) and flag any others that aren't genuine tabletop stones.
  - [x] **Map licensing settled** — swapped the CC BY-SA Wikimedia map for a **public-domain** full-globe map generated from Natural Earth land-110m data. No attribution or share-alike required.
- [x] Hero video — wired in (`<video>` autoplay/muted/loop/playsinline + `heroimage.png` poster + reduced-motion fallback) and **now hosted on Bunny CDN** (`https://baumstein.b-cdn.net/hero1%20baumst.mp4`, ~15.4 MB, served from Bunny's Latvia edge). Decision: do NOT compress for now — at pre-launch/low traffic it's fine, and hosting off-Vercel keeps deploys light. Revisit (compress to ~1080p H.264 CRF 18–20 / +faststart, or move to Bunny Stream for adaptive quality) only if traffic grows or weak-mobile playback becomes an issue. To swap the clip: replace the file in Bunny (purge its cache) or update the one `<source>` URL.
- [ ] "Made in Latvia" / origin story moment — a small but powerful trust signal
- [ ] More distinct close-up photos for The Craft (the polaroids + feature currently reuse one image, `cross section.jpeg`)

### Nice-to-have (future thinking)
- [ ] 3D table viewer — Three.js model viewer per product
- [ ] Instagram feed embed
- [ ] Individual table detail pages
- [ ] Page transition animations between sections

---

## Decisions Already Made
- Navbar shows the **"Baumstein" wordmark** (text), centered — not a logo image. The logo PNG only appears in the footer.
- Header is transparent at the top; on scroll it gains a blurred dark background, and the hamburger + language selector fade in.
- Header language selector is a **collapsed dropdown**: shows only the current language (e.g. "EN ▾"); tapping reveals the other two. Saves space for the wordmark. Active language is hidden from the menu via `.lang-menu .lang-btn.is-active { display:none }`. The full-screen nav overlay still lists all three inline. DM Sans 600/700 weights are loaded for the bolder header type.
- Header brand "Baumstein" starts at 26px (hero) and stays **prominent on scroll** — 24px desktop / 20px mobile, weight 600 (deliberately bigger + bolder, not shrunk).
- Hero readability comes from a light `hero-dark-overlay` (~15%) plus a bottom `hero-text-fade` gradient — deliberately light so the bright photo shows through.
- Hero image has a slow Ken Burns zoom (disabled under prefers-reduced-motion).
- **Type sizing for the 40+ ICP:** base/reading text is **16px on mobile** (was 14–15px) — deliberately bumped for an older, affluent audience with possibly weaker vision. Form fields at 16px also stop iOS zoom-on-focus. Don't shrink reading text back below 16px. **On desktop (≥901px) reading paragraphs step up to 17.5px** (`.craft-body`, `.step-desc`, `.contact-intro`) for presence next to the large headings — via the `@media (min-width:901px)` block. **Exception: `.origins-desc` stays 16px even on desktop** because its panel height is locked and 17.5px would clip the longer LV/RU descriptions. (The height-locked Craft map `.origins` was raised to **700px** so the larger panel text never clips — verified ~49px headroom for the longest EN/LV/RU descriptions.) **Mobile page-shift fix:** on mobile `.origins` height is auto, so taller materials (American Walnut / Brazilian Granite, longest descriptions) made the panel grow and shifted the page as the slideshow rotated. Fixed by reserving space — `.origins-panel { min-height: 612px }` on mobile (covers the tallest at 320px) so every material yields the same section height.
- Process steps: a **commission roadmap** — horizontal serpentine-route journey on desktop, vertical timeline on mobile (see section 5 above). Small numbered nodes; the tie-in into contact is a descending dashed line + chevron (NOT a button — user rejected the button as "cutting corners" and wanted the line to lead the eye). **Our Standards was removed** (user found it didn't make sense). The roadmap replaced the earlier two-column-editorial (sticky heading + Standards sidebar + giant numerals); earlier attempts before that (centred narrow list; an unconnected horizontal timeline; a straight-line roadmap with a CTA button) were also rejected. Dark only (a lighter palette was trialled here and reverted).

---

## Internationalisation (EN / LV / RU)
- One JS IIFE near the bottom of `index.html` (the "Language selector + i18n engine" block) handles everything. No build step, no external libs.
- **EN is the source of truth** — it lives in the HTML directly and is captured live from the DOM on load. LV/RU live in the `T` array as `[selector, mode, LV, RU]` rows (`mode` is `'text'` or `'html'`). Single DOM match → string; multiple matches → array aligned by index.
- **To add/edit a translatable string:** add or update a row in `T` keyed by a CSS selector. If the element contains inline markup (`<em>`, `<br>`, a script span), use `'html'` mode.
- **Dynamic (JS-generated) strings** — the contact form's "Sending…", success title/text, error, and submit-reset — live in `window.BS_FORM[en|lv|ru]`. Current language is `window.BS_LANG`.
- Preference persists in `localStorage` (`bs_lang`); defaults to EN. The `<html lang>` attribute updates on switch.
- **Script font caveat:** Great Vibes (the cursive accent font) is Latin-only, so for LV/RU the script accents (`.hero-script`, `.craft-opener .script`, `.craft-close em`, `.form-success-title`) fall back to Cormorant Garamond italic via `html[lang="lv"]/[lang="ru"]` CSS rules. Keep that in mind if adding new script-font text.
- Left untranslated by design: brand "Baumstein", the **hero headline "Where Wood Meets Stone"** (stays English in all languages — keeps the Great Vibes script on "Stone"), design names (The Nero Ovale, etc.), "Baumstein Originals" badge, and stone quarry names (Marquina, Carrara, Emperador).
- The **marquee** material names are NOT wired into i18n yet — it's pending the marquee rework (see To Build).

## Coding Standards
- No external CSS frameworks (no Tailwind, no Bootstrap)
- No JavaScript frameworks (no React, no Vue)
- All CSS lives in the `<style>` block in the HTML file
- All JS lives at the bottom of the `<body>` in a `<script>` block
- Use CSS custom properties (`--walnut`, `--bg`, `--bg-lift`, `--stone`, `--body`, `--dim`, etc., defined in `:root`) — never hardcode colours
