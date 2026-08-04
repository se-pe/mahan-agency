# MAHAN — Working Handoff

Written 2026-08-03. This document is for any person or AI assistant picking this project up cold. It records what is decided, what is broken, what is planned, and what is still an open question. Read it together with `PRODUCT.md`.

---

## 1. What this project is

A single-page portfolio and marketing site for **MAHAN**, an independent creative studio in Shiraz, Iran. The site is the studio's entire sales surface — its job is to convert a browsing prospective client into a direct enquiry.

**Everything currently on the site is placeholder.** Project names, the case study, team members, photography, email, phone number, and the Instagram link are all invented or stock. See `PRODUCT.md` → *Evidence on Hand*.

### Stack and commands

Next.js 16 (App Router) running through `vinext` on Vite 8, React 19, deployed via Wrangler/Cloudflare tooling. Node ≥ 22.13.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build
npm run test     # builds, then asserts on rendered HTML
npm run lint
```

The whole site is three files:

| File | Role |
|---|---|
| `app/page.tsx` | The entire page. One client component. All replaceable content sits in consts at the top of the file. |
| `app/globals.css` | The whole visual system, readable formatting, ~700 lines, sectioned by comment banners. |
| `app/layout.tsx` | `<html lang="en" dir="ltr">`, metadata, and the direction contract as an HTML comment that ships into the build. |
| `public/fonts/` | Self-hosted variable woff2 — Bricolage Grotesque (display) and Archivo (text). 216 KB total. |

Present but unused: Tailwind v4 (configured in postcss, never imported by `globals.css`, effectively dead), Drizzle ORM + D1 scaffolding (`db/`, `drizzle/`, `examples/`). Both are starter-template leftovers and can be removed.

### Gotchas

- **Never reintroduce a font or image CDN.** The audience is in Iran; Google Fonts and Unsplash are unreliable or blocked there. Fonts are self-hosted and the design deliberately requires no photography.
- **Use logical properties only** (`padding-inline`, `inset-block-start`, `border-inline-end`). Persian RTL is phase two and the stylesheet is currently 100% logical apart from the scatter transform's X offset.
- Git branch is `agent/launch-mahan-site`; main branch is `main`.
- `.claude/settings.local.json` registers two Impeccable hooks that run `node .claude/skills/impeccable/scripts/hook.mjs` after every Edit/Write and at the end of every turn. Harmless, but it is why extra design findings may appear unprompted.
- `README.md:34` still carries the pre-launch instruction to replace all placeholder content. It has not been done.

---

## 2. Where authority lives

| Question | Answer lives in |
|---|---|
| Who the users are, what the product claims, what must not be fabricated | `PRODUCT.md` |
| The visual system as built — tokens, colour roles, components, rules | `DESIGN.md` and its sidecar `.impeccable/design.json` |
| Why the design is the way it is | The direction contract in `app/layout.tsx` |
| The critique of the **previous** design, with measurements | `.impeccable/critique/2026-08-03T10-33-23Z__app-page-tsx.md` |
| What to do next | This file, §5 and §6 |

**Read `DESIGN.md` before changing anything visual.** The colour roles in particular are not obvious: `#2AD4D4` is a hard client brand commitment but only 1.66:1 on the storm-white ground, so it is a *fill* that carries ink text on top and must never be used as text or as a state colour on a light ground. `#0A5F63` is its text-safe sibling. `#8E979B` is decorative flecks only and must never carry text.

---

## 3. Decisions already confirmed by the client

These came from a direct interview on 2026-08-03. Treat them as settled; do not reopen them without asking.

1. **Audience:** decision makers — usually the founder/owner — at Iranian premium brands: hospitality, retail, furniture, F&B. Persian-speaking, in Iran. They arrive warm, from Instagram or a referral, usually on a phone, and judge taste before process.
2. **Real work exists, but none of it is on the site yet.** Four real projects form the selected-work set, and a wider body of client work warrants its own broader survey section. Some real photography exists and will be supplied. Names, categories, years, copy, and image files are all still outstanding — leave obvious marked placeholders, never plausible invented copy. Testimonials, metrics, results, awards, press, and logo walls do **not** exist and must not be invented.
3. **Bilingual English + Persian with true RTL is required, but deferred.** Ship **English only for now**. Build RTL-ready regardless: logical properties throughout, no physical `left`/`right`/`padding-left`/`border-right`, so Persian is a second phase and not a second rebuild.
4. **Enquiry channels are WhatsApp, phone, and email** — no form. All three reachable at any scroll position, not only in the footer.
5. **Positioning:** MAHAN does brand + space + digital under one roof; competitors do one of the three. This is the one claim a rival could not truthfully copy.
6. **The cyan stays.** `#2AD4D4` is a confirmed brand colour. It survives in the build as a **ground**, owning ~40% of the document edge to edge, with ink text on top. It must never carry text on a light ground — see §2.
7. **The visual world is client-pinned: "Alphabet Storm".** The client chose it directly over the rolled alternative, so it outranks any later generated suggestion. Storm-white ground, ink as mass, one monumental grotesk, letters condensing out of a scatter into register. Do not drift it back toward warm paper and a serif — that is the look this replaced.

---

## 4. Defect register — the PREVIOUS design (all resolved)

> **This section is history.** It records the site as it stood before the 2026-08-03 rebuild, from a dual-agent critique that scored it **13/40 (Poor)**. Every defect below was fixed by replacing the design, not by patching it. It is kept so nobody reintroduces one of these, and so the reasoning behind the current build is auditable.
>
> **Resolved by the rebuild:** foreign CDNs and the 2.15 MB payload (now ~341 KB, everything self-hosted); the 1.51:1 accent and the removed focus rings (now zero contrast failures, zero `outline: none`, per-field focus colours); the enquiry buried 93% down (now a sticky masthead CTA plus contact above the fold); four projects that were one and a fake team grid (now honest placeholders that look unfinished, and the team section is gone until real people and photos exist); two headings on the whole page (now twelve with a correct outline); sub-44px tap targets and 9px text (now none); no reduced-motion handling (now a full block plus a JS guard); ~20 physical CSS properties blocking RTL (now logical throughout).

<details>
<summary>The original register, kept for reference</summary>


### P0 — the site does not usably render for its primary audience

**Foreign CDNs are blocked or throttled in Iran.**
- `app/globals.css:1` is a render-blocking `@import url('https://fonts.googleapis.com/css2?...')`, discovered through a 3-hop chain: HTML → `globals.css` → `fonts.googleapis.com` → 7 files on `fonts.gstatic.com`.
- All 8 images are hot-linked from `images.unsplash.com`.
- Measured over the wire: **2.15 MB across 18 external requests**; 1.66 MB on first paint; largest single asset 646 KB (the wide case-study image).
- No `loading="lazy"`, `decoding`, or `srcset` on any of the 7 rendered `<img>` elements — including three team portraits ~4,800px down the page.
- Images are fetched at 600–1100px wide and CSS-cropped to shapes that discard 30–50% of the fetched pixels.
- **Result without a VPN:** the 110px hero renders in Times New Roman with `letter-spacing:-.055em`, where the letters in "independent" collide, above eight broken image boxes.

*Fix:* self-host both faces as `woff2` in `/public/fonts` with `@font-face`, `font-display:swap`, and `size-adjust`-matched fallback metrics; delete the `@import`. Move all imagery into `/public`, serve AVIF/WebP at 2–3 widths via `srcset`, lazy-load below the fold. Target under 400 KB total.

**Contrast: the accent is 1.51:1 and carries every interactive state.**

| Pair | Ratio | Used for | Verdict |
|---|---|---|---|
| `#2ad4d4` on `#ede9e0` | **1.51:1** | blockquote (115px), `.arrow` (48px), nav hover, `.email` hover text + border, scroll-progress fill, `.project-row` hover **and focus** | **FAIL** — misses even the 3:1 large-text floor by 2× |
| `#6c6a64` on `#ede9e0` | 4.46:1 | `.case-metadata b` (10px) | **FAIL** by 0.04 |
| `#65615c` on `#ede9e0` | 5.07:1 | `.team figcaption span` | pass |
| `#1a1917` on `#ede9e0` | 14.50:1 | body, all `.meta` | pass |

Note: `body:before` overlays fixed fractal noise at `opacity:.14`, `z-index:10` above all content, so real on-screen contrast is slightly *worse* than these pre-composite figures.

**Focus indicators are removed from the four most important links.**
`globals.css` line 4 contains `.project-row:hover,.project-row:focus,.project-row.is-active{color:var(--blue);outline:none}`. Verified with real keyboard focus: `outlineStyle:"none"`. So:
- The four work links have **no focus ring at all** (WCAG 2.4.7 / 2.4.11 failure).
- Focusing one moves its text from 14.5:1 to **1.51:1** — the focused element becomes the least readable text on the page.
- State is signalled by colour alone, plus a 28px slide.
- `onFocus` sets React `active`, and row 01 ships `is-active` on load, so **tabbing onto row 01 produces zero visual change**.
- `.project-preview` is gated on `.work:hover`, so the state a keyboard user changes is never visible to them.

*Fix:* derive a darker sibling of the brand cyan (≈`#0d6b6b`, ~4.7:1 on paper) for all text and state uses; keep `#2ad4d4` only as a fill with ink text on top. Restore `:focus-visible{outline:2px solid var(--ink);outline-offset:4px}` globally and delete `outline:none`. Add a non-colour second channel for state.

**The enquiry is seven screens away with no persistent path.**
- `.site-header` is `position:relative`, not sticky, and is the only navigation on the page.
- On mobile the contact section begins at y=5470 of a 5871px document — **93% down**.
- No CTA in the hero, none after the case study, no floating action, no back-to-top until the footer.
- Every link has `text-decoration:none`. The phone number and "Instagram ↗" render as 18px ink with no underline and no colour change — they do not read as links.

### P1 — the content actively destroys credibility

- All four `.project-row` elements have `href="#case-study"`. Clicking "Orion Editions" produces "Noura Objects."
- `.next-project` is labelled "Next project — Ava House" and links to `#work`.
- At ≤720px both `.project-preview` and `.project-category` are `display:none`, so the section whose job is proving taste renders on the primary device as four serif words on beige.
- At 1440px the preview panel (x 920–1290, y 1020–1298) sits directly on top of the category and year metadata for rows 01–03, and over three hairline rules.
- The preview is triggered by `.work:hover`, not row hover, so it pops in whenever the cursor enters the empty 700px section.
- Three team portraits are Unsplash photographs of Western strangers labelled "Mahan Y. / Sara K. / Arman R.", occupying ~1,200px — the largest single block in the mobile scroll. One shows a visible `mix-blend-mode:multiply` ghosting artifact on the face.
- The case study copy promises "a furniture house that treats domestic objects as quiet, enduring characters"; the images show an American suburban living room with a farmhouse wall clock and a highland-cow print. Words and pictures contradict each other.
- The Instagram link points at `https://instagram.com`, not a profile.
- `public/og.png` is the unmodified starter asset — so the Instagram/Telegram link preview, the first thing this audience sees, is unbranded.

### P1 — the CSS actively fights Persian/RTL

Tested by setting `dir="rtl"` with Persian copy:
- The `®` in `.wordmark span{margin-left:4px}` detaches and floats to the *left* of "MAHAN".
- `letter-spacing:-.055em` on the h1 crushes the joins of connected Arabic script.
- `line-height:.9` collides diacritics into the line below.
- `padding-left:32px / padding-right:80px`, `.hero-meta{left/right}`, `.studio-statement{margin-left:25%}`, and every `border-right` on `.services>div` and `.case-metadata span` are physical properties that invert wrongly.
- The hover `translateX(28px)` pushes the title the wrong direction.
- `.section-kicker` is `justify-content:space-between` with no `gap` and no wrap — longer Persian strings will collide at 375px.

Roughly 20 declarations need converting to logical properties (`padding-inline`, `border-inline-end`, `inset-inline`, `margin-inline`).

### P2 — accessibility and structure

- **Only two headings exist on the entire 6,807px page:** the `h1` and one `h2` (the case study). Work, Studio, and Contact have no heading. The four 65px project titles are `<span>`s. Section kickers are `<span class="meta">`.
- The five `<section>` elements have no accessible name, so none is exposed as a landmark region.
- `<footer>` is nested inside `<main>`.
- **Tap targets at 375px** — every one fails the 24×24 WCAG 2.5.8 minimum on height, let alone 44×44:

| Element | Rendered |
|---|---|
| nav "Work" | 34.1 × 16.5 |
| nav "Studio" | 42.8 × 16.5 |
| nav "Contact" | 53.7 × 16.5 |
| header wordmark | 91 × 40.5 |
| phone / Instagram | 159.5 × 27 |
| footer wordmark | 243.5 × 33 |
| "Back to top ↑" | 83.5 × **13.5** |

  (`.project-row` 339×82, `.email` 285×57, and `.next-project` 375×154 all pass.)
- **Zero `prefers-reduced-motion` rules exist** — confirmed by grep and by a programmatic stylesheet walk — while `html{scroll-behavior:smooth}` applies unconditionally to a 6,807px page.
- `.meta{font-size:10px}` sits below an 11px legibility floor and applies to ~39 elements. `.project-year` drops to **9px** on mobile — the smallest type on the site.
- `aside.project-preview` has `aria-live="polite"` with `alt=""`, so sweeping the mouse across four rows fires four screen-reader announcements that only repeat the row labels.
- The three team `alt` values duplicate their `<figcaption>` verbatim, so a screen reader says "Mahan Y." twice. These should be `alt=""`.

### P2 — code quality

- The `scroll` listener calls `setProgress` on every scroll event with no `requestAnimationFrame` throttle, re-rendering the whole `Home` component continuously while the browser composites 8 images carrying `filter` and `mix-blend-mode`.
- iOS rubber-band overscroll makes `Math.round((scrollY/(scrollHeight-innerHeight))*100)` exceed 100 and go negative. `String(-3).padStart(2,'0')` renders `-3`, and `width:-3%` is invalid, so the progress bar freezes.
- On refresh mid-page, browser scroll restoration lands the user in the work list but `useState(0)` resets `active` to row 01, so the highlighted row corresponds to nothing on screen.
- `.scroll-line i` animates `width`, a layout-triggering property, on every scroll frame.
- `.case-metadata span` and `.services > div` apply `border-right` to *every* child including the last, orphaning a vertical rule at the content edge.
- `.work{min-height:700px}` against ~612px of content leaves an 88px dead band.
- `.project-preview` sits at `right:150px` while every other element respects an 80px right gutter — the only element off the grid.
- Three unrelated image treatments coexist: `grayscale(1)+mix-blend-mode:multiply` (team), `saturate(.6)` (case study), `saturate(.7)` (preview). There is no image language.
- `.image-pair` keeps `grid-template-columns:1fr 1fr` at mobile with `height:72vw`, producing two ~168px slivers of wide interior photographs. They should stack.
- `.hero-bottom` is `position:absolute` inside `.hero`, so the scroll-progress indicator — the only wayfinding affordance — is gone by ~12% scroll.
- The preview `<img src>` swaps instantly on hover with no crossfade and no preload, so on a slow connection each hover flashes empty while a fresh 1,100px image is fetched.

### What was genuinely clean

Worth knowing so nobody "fixes" it: horizontal overflow at 375px was **0px**; there were **no console errors and no hydration warnings**; and CLS risk was low because every image got fixed geometry from CSS.

</details>

---

## 5. The plan — status

The visual world was **replaced**, not polished. The old look was a category template — Instrument Serif + Space Grotesk on warm paper with a grain overlay and a numbered project index — and the headline said "refuse to blend in" in one of the most-used typefaces on the web.

| Step | Status |
|---|---|
| 1. Surface strategy | **Done.** Four featured projects plus a wider client survey. The brand/space/digital claim is demonstrated in the second band, not listed near the bottom. |
| 2. New visual world | **Done.** "Alphabet Storm", client-pinned. Recorded in `DESIGN.md` and in the contract in `app/layout.tsx`. |
| 3. Self-host and optimise | **Done.** ~341 KB first load, zero external origins. |
| 4. Persian/RTL groundwork | **Done for layout.** Logical properties throughout; the arrow glyph mirrors. **Not done:** a Persian typeface, Persian copy, locale routing, and Persian-specific type metrics (the hero's `letter-spacing: -0.05em` / `line-height: 0.76` will destroy connected Arabic script and must be authored separately). |
| 5. Accessibility pass | **Done.** Zero contrast failures, zero sub-44px targets, no text under 11px, twelve headings, six named landmarks, reduced-motion honoured by both CSS and JS. |
| 6. Final polish | **Done.** Finish review run, findings applied, `DESIGN.md` written. |

### What is left, in order

1. **Supply the real content** — §6. Nothing else meaningfully improves the site until this lands.
2. **Author `public/og.png`** — 1200×630, under ~150 KB. Currently the 1.79 MB starter asset, and it is the first thing anyone sees when the site is shared into Instagram, WhatsApp or Telegram.
3. **Phase two: Persian.** Add a Persian face (Vazirmatn or Estedad, self-hosted), author Persian type metrics rather than reusing the Latin ones, add locale routing, set `dir` per locale.
4. **Decide whether the team section returns**, with real portraits.

---

## 6. Open questions

Resolved 2026-08-03 and folded into §3: real work exists (four featured projects plus a wider client-work survey), some real photography exists, English ships first with RTL-ready markup, and enquiry runs through WhatsApp, phone, and email.

Still outstanding — all are **content the studio must supply**, none block design work:

1. The four project names, categories, years, and case-study copy.
2. The list of additional client work for the broader survey section.
3. The real photography files, and which project each image belongs to.
4. Real contact details: studio email, phone number, WhatsApp number, and the actual Instagram handle.
5. Whether the team section returns at all, and if so with real portraits.

Until each arrives, the build carries an obviously marked placeholder. Do not write plausible substitute copy — a placeholder that looks finished is worse than one that looks unfinished, because it ships.

---

## 7. Principles for whoever continues

1. **Never invent proof.** No client names, testimonials, metrics, awards, press, or logo walls. The studio is new. That is a constraint to design around, not to paper over — and a site that makes *newness* the argument cannot be copied by an established competitor, while the current one can.
2. **Design from the failure state upward.** For the primary audience, "fonts and images did not load" is a likely condition, not an edge case. If the answer to "what still persuades when nothing loads" is "Times New Roman on beige", the design is not finished.
3. **Persian is authored, not mirrored.** Arabic script has different optical sizes and comfortable line-heights, and is destroyed by the negative tracking this design depends on. If the design does not survive being set in Persian first, it is not bilingual — it is an English site with a translation feature.
4. **The visitor arrives warm and leaves in a DM.** They come from Instagram already half-sold, on a phone, one-handed. The enquiry should be reachable at any scroll position and should say what happens next.
5. **Demonstrate the positioning, don't list it.** One brand carried across identity → space → screen in a single unbroken scroll proves the claim structurally. Three columns of nouns proves nothing.
6. **Keep the restraint.** 14 links, no carousel, no modal, no cookie banner, no chat widget. That instinct was judged correct and should survive the redesign.
