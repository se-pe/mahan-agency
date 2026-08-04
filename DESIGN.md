---
name: MAHAN
description: Alphabet Storm — letters as matter on a cold storm-white ground, condensing into register.
colors:
  storm: "#f2f4f5"
  ink: "#0b0c0d"
  cyan: "#2ad4d4"
  cyan-pale: "#d4f5f4"
  cyan-deep: "#0a5f63"
  cyan-dim: "#124a4c"
  slate: "#42494d"
  silver: "#8e979b"
typography:
  display:
    fontFamily: "Bricolage, Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(76px, 19vw, 260px)"
    fontWeight: 800
    lineHeight: 0.76
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Bricolage, Archivo, ui-sans-serif, sans-serif"
    fontSize: "clamp(30px, 5.4vw, 82px)"
    fontWeight: 800
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Bricolage, sans-serif"
    fontSize: "clamp(30px, 3.6vw, 52px)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
  title-small:
    fontFamily: "Bricolage, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  prose:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(17px, 1.3vw, 20px)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 650
    lineHeight: 1.35
    letterSpacing: "0.14em"
    fontFeature: "tabular-nums"
  label-strong:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.1em"
rounded:
  none: "0"
  circle: "50%"
  pill: "999px"
spacing:
  gutter: "clamp(20px, 5vw, 76px)"
  band-block: "clamp(66px, 9vw, 138px)"
  work-row-block: "clamp(40px, 5.5vw, 76px)"
  anchor-offset: "70px"
components:
  field-storm:
    backgroundColor: "{colors.storm}"
    textColor: "{colors.ink}"
  field-cyan:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
  field-pale:
    backgroundColor: "{colors.cyan-pale}"
    textColor: "{colors.ink}"
  field-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.storm}"
  stamp:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  stamp-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.storm}"
  stamp-filled:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.storm}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  stamp-filled-hover:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
  masthead:
    backgroundColor: "{colors.storm}"
    textColor: "{colors.ink}"
    padding: "10px clamp(20px, 5vw, 76px)"
    height: "64px"
  masthead-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 10px"
    height: "44px"
  project-row:
    backgroundColor: "{colors.storm}"
    textColor: "{colors.ink}"
    padding: "clamp(40px, 5.5vw, 76px) clamp(20px, 5vw, 76px)"
  project-go:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.circle}"
    size: "62px"
  project-go-hover:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.ink}"
  precip-drop:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "46px"
  precip-drop-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.storm}"
  precip-drop-open:
    backgroundColor: "transparent"
    textColor: "{colors.cyan-deep}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "46px"
  tbd:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 8px"
  skip-link:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.storm}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
---

# Design System: MAHAN

## Overview

**Creative North Star: "The Alphabet Storm"**

Letters are matter. Every name on this site — the wordmark, the band ledes, the project titles — arrives scattered and rotated, then condenses into register and holds while the storm moves on. The ground is a cold storm white (`storm`), never warm paper; ink is used as mass rather than as a hairline; and one monumental grotesk does all the structural work at sizes that make type behave like architecture rather than like copy. Nothing is decorated: there are no shadows, no gradients, no photography, no illustration. The only ornament in the entire system is a handful of silver flecks left behind in the hero once a word has landed.

The density is deliberately lopsided. Bands are tall and generous (`band-block`), the ledes are enormous and clamped to short measures (14–22ch), and the running text is small, quiet, and narrow. That gap between the display and the body is the personality: the site speaks in a few very loud words and then explains itself in a level voice. Colour follows the same logic — cyan is not sprinkled, it takes whole regions edge to edge, so the page reads as a sequence of weather fronts rather than as a white page with accents.

This world explicitly refuses the editorial-studio index it replaced: warm paper (`#ede9e0`), hairline rules, a serif display face, and numbered project rows with hover previews. It also refuses stock imagery of any kind — the build ships zero photographs by design, and the persuasion is carried entirely by type, ground colour, and motion.

**Key Characteristics:**

- Cold storm-white ground; ink used as mass, never as a hairline decoration
- One monumental grotesk (Bricolage) doing all structural work; Archivo for marks and running text
- Cyan owns whole regions edge to edge; it is never an accent dot
- Square by default — two curved exceptions in the entire system
- Zero shadows; depth comes from ground changes and heavy ink rules
- One authored motion (letter condensation), everywhere, with a settled fallback
- Every rule written in CSS logical properties, because Persian RTL is phase two
- Self-hosted variable fonts; no foreign CDN in the critical path

## Colors

A cold, near-monochrome palette with a single saturated hue that behaves as a ground rather than as an accent.

### Primary

- **Charged Cyan** (`cyan`): The studio's own brand colour and the charged state of the system. It fills whole bands — the imprint band and the contact band are cyan edge to edge — and fills the project arrow on hover. It is also the selection highlight and the focus ring on ink grounds. **It is a fill, not a text colour.** At 1.66:1 against `storm` it cannot legally carry text, an icon stroke, or a state indication on any light ground; what it can do is carry ink text on top of itself (10.69:1). The only ground it may be used *as text* on is `ink` (10.69:1), where the small uppercase discipline labels inside a hovered precipitation drop go cyan.
- **Deep Cyan** (`cyan-deep`): The text-safe sibling. This is the colour that carries cyan's meaning wherever cyan itself is illegal: link and focus outlines on light grounds (6.73:1 on `storm`), the dimmed secondary text on the pale cyan band (6.42:1 on `cyan-pale`), the open "Room for yours" drop, and the transient colour of letters while they are still scattered.
- **Pale Cyan** (`cyan-pale`): The low-charge ground. It is the whole precipitation band, and it is the wash that rises behind a project name on hover. It is only 1.05:1 against `storm`, so it must never be used as a border, a divider, or anything expected to be visible against the default ground — only as a full-bleed field with ink on top (16.94:1).
- **Cyan Dim** (`cyan-dim`): The dimmed-text colour used only on the cyan band (5.44:1 on `cyan`). Note that this value is currently written as a literal inside the `.field-cyan` rule and is not a `:root` custom property.

### Neutral

- **Storm White** (`storm`): The page ground and the reversed text colour on ink. Cold, faintly blue-grey; deliberately not paper.
- **Ink** (`ink`): Body text on every light ground (17.75:1 on `storm`), the structural rules between sections, the studio band's full ground, the skip link, and the hover fill of every outlined control. Ink is treated as mass — rules are 1.5px and 2px, never hairlines.
- **Slate** (`slate`): The secondary text colour on light grounds only (8.31:1 on `storm`). It is what `--fg-dim` resolves to on the storm field: project metadata, supporting column copy. It is only 2.14:1 on ink and must never appear there.
- **Silver** (`silver`): Decorative particles and reversed dim text. At 2.70:1 on `storm` it is not permitted to carry text on any light ground; its only text role is as `--fg-dim` on the ink field (6.57:1). Otherwise it exists solely as the hero flecks at 42% opacity.

### Named Rules

**The Field Rule.** A section never sets its own foreground colours. It picks one of four field classes — `.field-storm`, `.field-cyan`, `.field-pale`, `.field-ink` — and each field sets `background` plus three custom properties: `--fg` (primary text), `--fg-dim` (secondary text), and `--focus` (focus-ring colour). Everything inside reads `currentColor`, `var(--fg-dim)`, or `var(--focus)`. This is the entire mechanism by which the system stays accessible while the ground colour changes five times down the page: a new ground is one class, and the contrast follows automatically. Any new section must join a field; hand-picking a text colour against a hand-picked background is how this system breaks.

**The Cyan Is A Ground Rule.** `cyan` is a fill colour. It may be a background, a wash, or a shape fill; it may carry ink text on top of it. It may never be text, a border, an icon stroke, or a state colour on a light ground. When cyan needs to *say* something on light, `cyan-deep` says it.

**The Silver Never Speaks Rule.** `silver` is particles. If a silver element contains a character a reader is expected to read on a light ground, it is a bug.

## Typography

**Display Font:** Bricolage Grotesque (variable, weights 200–800) — self-hosted at `/fonts/bricolage-grotesque-var-latin.woff2`
**Body / Mark Font:** Archivo (variable, weights 100–900) — self-hosted at `/fonts/archivo-var-latin.woff2`

**Character:** A single monumental grotesk carries every structural statement at near-poster scale with tight negative tracking and sub-1.0 line-height, so headlines stack into solid blocks of ink. Archivo does everything else — running text at a modest 17px and small, wide-tracked uppercase marks that behave like stencilled labels on machinery. The contrast is scale and register, not style: two grotesks, no serif anywhere.

### Hierarchy

- **Display** (`.display` + `.hero__wordmark`, 800, `clamp(76px, 19vw, 260px)`, line-height 0.76, tracking -0.05em): The MAHAN wordmark in the first viewport only. Tracking loosens to -0.04em below 760px.
- **Headline** (`.display` band ledes, 800, line-height 0.88, tracking -0.035em, `text-wrap: balance`): The one big statement per band. Sizes are per-surface and deliberately unequal — imprint `clamp(30px, 5.4vw, 82px)` at 18ch, contact `clamp(38px, 7.6vw, 116px)` at 14ch, studio `clamp(28px, 4.4vw, 62px)` at 22ch, project name `clamp(42px, 9vw, 130px)`, hero sub-headline `clamp(23px, 3.3vw, 44px)` at 16ch with a looser -0.025em, section heads `clamp(34px, 5vw, 68px)` and `clamp(30px, 4.4vw, 58px)` set inline.
- **Title** (`.weather h3`, Bricolage 800, `clamp(30px, 3.6vw, 52px)`, line-height 0.9, tracking -0.035em): The three discipline names on the cyan band — sized as near-headlines because the three words *are* the argument.
- **Title Small** (`.studio__cols h3`, Bricolage 700, 20px, tracking -0.02em): The same three names on the ink band, demoted to column headings.
- **Body** (Archivo 400, 17px, line-height 1.5): The document default set on `body`.
- **Prose** (`.prose`, Archivo 400, `clamp(17px, 1.3vw, 20px)`, line-height 1.55, max 68ch): Running paragraphs. Supporting column copy is separately clamped to 40–46ch.
- **Label** (`.mark`, Archivo 650, 12px, tracking 0.14em, uppercase, tabular figures): Origin lines, project metadata, counts, colophon. The widest tracking in the system.
- **Label Strong** (`.stamp`, Archivo 700, 13px, tracking 0.1em, uppercase): Control text. Navigation links use the same shape at weight 650.

### Named Rules

**The One Grotesk Rule.** Bricolage appears only via `.display` or an explicit `font-family: "Bricolage"` on a heading. It is never used for running text, never for labels, and never below 20px. Archivo never appears above 26px. If a new element needs a size between those two zones, it belongs to Bricolage and should be set as a headline, not as large body copy.

**The Self-Hosted Fonts Rule.** Both faces are loaded from `public/fonts/` through `@font-face` with `font-display: swap`. This is a hard delivery constraint, not a preference: the audience is in Iran, where Google Fonts and comparable foreign CDNs are unreliable or blocked. Never introduce a `<link>` to a font CDN, an `@import` from one, or a `next/font/google` call. New weights come from the existing variable files.

**The Numeric Weight Rule.** `font-synthesis-weight` is disabled on `body`, and both faces are variable. Weights are real axis positions — 650 is used deliberately for marks and navigation, distinct from both 600 and 700. Only ask for weights inside the declared ranges (Bricolage 200–800, Archivo 100–900).

## Layout

The page is a single vertical stack of full-bleed bands. There is no centred container and no max-width on the page: content runs to a shared inline gutter, `gutter` (`clamp(20px, 5vw, 76px)`), and measure is controlled per element with `max-inline-size` in `ch` rather than by a wrapper. Sections carry `overflow: clip` so scattered letters and washes never leak.

**Bands.** `.band` is the standard section: gutter inline, `band-block` block padding, `position: relative`, and `scroll-margin-block-start: 70px` so in-page anchors clear the sticky masthead. `.band--tall` is the hero variant: a minimum of `min(90svh, 880px)`, a column flex with `justify-content: space-between` that pins the credit rule to the bottom, and a lighter block-start of `clamp(48px, 7vw, 96px)`.

**The work section is the exception.** `#work` is not a `.band`; it has no padding of its own. Its rhythm comes from `.work__head` (`clamp(56px, 7vw, 92px)` top, `clamp(24px, 3vw, 40px)` bottom) and from each `.project` row, which supplies its own gutter and `work-row-block` padding. Rows are separated by a 1.5px ink rule on `border-block-start`, with a closing rule on the last row, so the section reads as a ledger.

**Grids.** Two auto-fit grids do all the multi-column work: the discipline weather (`repeat(auto-fit, minmax(min(100%, 230px), 1fr))`, gap `clamp(20px, 3vw, 40px)`) and the studio columns (`minmax(min(100%, 250px), 1fr)`, gap `clamp(24px, 4vw, 54px)`). Both collapse to one column without a media query. Project rows are an explicit two-column grid, `minmax(0, 1fr) auto`, baseline-aligned to the bottom.

**Rhythm.** There is no numeric spacing scale. Every gap is either the shared gutter or a per-component `clamp()` whose floor/ceiling were chosen for that element. Do not retrofit a 4px/8px scale over this; match the neighbouring clamp instead.

**Responsive.** Two breakpoints, both `max-width`:

- **760px** — project rows collapse to one column and align to start; the arrow shrinks from 62px to 52px; the hero wordmark's tracking eases to -0.04em.
- **620px** — the masthead tightens (gutter `clamp(14px, 4vw, 20px)`, nav gap 2px, link padding 8px, 11.5px type with reduced tracking, the call-to-action forced `nowrap`) so three 44px targets fit a 375px viewport on one line. The tall hero drops its minimum height and switches to `flex-start`, because `space-between` on a tall narrow viewport opened a dead gap; the credit rule then gets its own `clamp(48px, 14vw, 84px)` of separation.

**RTL.** Every rule in the stylesheet is written in CSS logical properties — `padding-inline`, `padding-block`, `inset-block-start`, `inset-inline-start`, `border-block-end`, `margin-inline-end`, `inline-size`, `block-size`, `max-inline-size`. There is not a single `left`, `right`, `padding-left`, or `border-right` in the file, and `<html>` carries explicit `lang` and `dir`. This is binding, not stylistic: Persian RTL is a confirmed phase-two requirement, and a physical property introduced now becomes a rebuild later.

## Elevation & Depth

**This system has no shadows.** There is not one `box-shadow`, `filter`, or `backdrop-filter` in the stylesheet, and none should be added. Depth is produced three ways instead:

1. **Ground change.** Sections announce themselves by switching field colour — storm, cyan, storm, pale, ink, cyan, ink. The page reads as layered because the layers are different colours, not because they are lifted.
2. **Ink rules as mass.** Dividers are 1.5px or 2px solid ink or `currentColor`, never hairlines and never tinted. The masthead's bottom edge, the hero credit rule, the project row separators, the weather rule, and the contact detail rule are the structure.
3. **The wash.** The only element that moves in the z-axis sense is `.project__wash`, a pale-cyan block that grows from `block-size: 0` to `100%` from the bottom edge of a hovered row.

Stacking order is a short, fixed ladder: flecks and the wash sit at `z-index: 0`, foreground content at `1`, the sticky masthead at `40`, the skip link at `90`.

### Named Rules

**The Flat Ink Rule.** Surfaces are flat at every state. Hover and focus change fill and colour — an outlined control inverts to solid ink — but nothing ever gains a shadow, a blur, or a glow. The single translation in the system is the 2px lift on a hovered stamp; treat that as the ceiling.

## Shapes

**Square by default.** Controls, bands, rules, and containers all have zero radius, and the arrow icon is drawn with `stroke-linecap: square`. The form language is stamped and rectilinear — borders are 1.5px or 2px solid `currentColor`, so a control's outline is always exactly the colour of its own text and inherits correctly whichever field it lands in.

There are exactly **two curved exceptions**, and both are semantic:

- **The circle** (`circle`, 50%): the project row's arrow target, a 62px ring (52px below 760px). It is round because it rotates 45° on hover.
- **The pill** (`pill`, 999px): the precipitation drops. They are round because they are droplets — the one place in the system where a shape carries the metaphor.

Do not add a third radius. A new card, panel, or input is square.

**Dashed means unfinished.** Two elements use a dashed stroke and both mean "not yet real": `.tbd` (a 2px dashed outline at 3px offset, 75% opacity) and `.precip__drop--open` (a dashed pill for the "Room for yours" slot). Dashed is reserved for that meaning.

## Components

The vocabulary is small on purpose: one control (the stamp), one row (the project), one chip (the drop), four grounds (the fields), and one motion (the condensation).

### Buttons — the Stamp

Blunt, rectangular, and stamped rather than styled.

- **Shape:** Square (`rounded.none`), 2px solid `currentColor`, 48px minimum block size, 20px inline padding, 9px gap for an inline icon.
- **Type:** `label-strong` — 13px, weight 700, 0.1em tracking, uppercase.
- **Outline (default):** transparent fill, text inherits `--fg` from the field, so the same markup is legible on all four grounds.
- **Hover / Focus:** fills with `--fg`, text goes storm white, lifts 2px, 0.22s on `--settle`. On the ink field the fill is storm white, so the text flips to ink instead.
- **Filled (`.stamp--filled`):** the inverse at rest — `--fg` ground, storm text — and it *empties* on hover back to transparent. Used for the masthead call to action and the primary WhatsApp channel. Exactly one filled stamp per surface.
- **Sizes in context:** 44px and 12px type in the masthead (11.5px below 620px); 60px and 14px type in the contact channel row.

### Chips — the Precipitation Drop

Small, rounded, droplet-like; the only pill in the system.

- **Style:** `pill` radius, 1.5px `currentColor` border, transparent fill, 46px minimum block size, 16px inline padding, 15px text at weight 600, with a trailing 11.5px uppercase discipline label in `--fg-dim`.
- **Hover:** inverts to solid ink with storm text; the trailing label goes `cyan` — legal precisely because the ground underneath it is now ink.
- **Open variant (`--open`):** dashed border and `cyan-deep` text, and it deliberately does **not** invert on hover. It is a vacancy, not an entry.

### Cards / Containers

There are none. Content sits directly on its field; grouping is done with rules and grid gaps. Do not introduce a bordered or filled card — it would be the first radius-and-container pattern in a system that has deliberately avoided both.

### Inputs / Fields

There are no form inputs anywhere in the build. Enquiry runs through WhatsApp, phone, email, and Instagram links styled as stamps. The focus treatment that *does* exist is global: `:focus-visible` draws a 3px solid outline in `var(--focus)` at 4px offset, where `--focus` is `cyan-deep` on storm and pale, `ink` on cyan, and `cyan` on ink.

### Navigation — the Masthead

- **Style:** Sticky at the top, storm ground, 64px minimum height, 1.5px ink bottom rule, gutter-aligned, wordmark left of a right-aligned nav cluster.
- **Wordmark:** Bricolage 800 at 25px, tracking -0.03em (21px below 620px), 44px tap height.
- **Links:** 13px uppercase at weight 650, 0.1em tracking, 44px tall, with a 2px transparent bottom border that becomes `currentColor` on hover and focus (0.18s). No colour change, no background.
- **Call to action:** a filled stamp, always visible — the enquiry channel must be reachable from any scroll position.
- **Skip link:** parked at `inset-inline-start: -9999px` and snapped to 0 on focus; ink ground, storm text, 14px/20px padding, above everything at `z-index: 90`. It targets the work, not the page top.

### The Project Row

The signature list pattern and the only place the cyan charge is earned by interaction.

- **Structure:** A full-bleed anchor, two-column grid (name block, then arrow), separated by 1.5px ink rules, `overflow: clip`.
- **Name:** `clamp(42px, 9vw, 130px)` Bricolage at line-height 0.84, with metadata beneath in `label` type at `--fg-dim`.
- **The charge:** on hover *or* keyboard focus, three things happen together — a `cyan-pale` wash grows from the bottom edge to full height (0.42s), the 62px arrow ring fills with `cyan` and takes an ink stroke, and the ring rotates 45°. Colour is never the sole signal; the rotation carries the state for anyone who cannot see the wash.
- **Accessible name:** supplied by `aria-label` on the anchor, including a "(details to supply)" suffix while the project is a placeholder.

### The Condensation (signature motion)

The one authored motion in the system, and the reason the world is called a storm.

- **Markup:** `<Condense>` splits a string into words and words into letters, wrapping each word in an inline-block, `white-space: nowrap` span (so an inline-block letter run cannot break "you're" across two lines) and each letter in an inline-block `<i>`. The whole run is `aria-hidden`; the accessible name comes from `aria-label` on the enclosing heading, so a screen reader hears the word once and never spells it.
- **Default state is settled.** The scattered state is applied by script *after* mount. With no JavaScript, and under reduced-motion, the type simply renders finished.
- **Armed:** each observed band gets `.armed`, which offsets every letter by `translate(--tx, --ty) rotate(--r)`, drops it to 40% opacity, and tints it `cyan-deep`. There is no transition on this state, so arming is instantaneous and never seen as a movement.
- **Settled:** an `IntersectionObserver` (`threshold: 0.1`, `rootMargin: 0px 0px -10% 0px`) adds `.settled` on entry and immediately unobserves — every word condenses exactly once per page load. Letters return to `transform: none`, full opacity, and inherited colour over 0.7s / 0.5s / 0.6s on `--settle`, staggered by `--i * 22ms`.
- **The scatter is deliberately small, and the stagger is capped.** Offsets are ±0.28em horizontally, ±0.24em vertically, ±8° of rotation, derived from a deterministic string hash so server and client render identically and hydration can never mismatch. An earlier, larger scatter made the page unreadable for a beat every time a band entered the viewport; the word should shiver into place, not explode. The stagger index is clamped at 12, capping the longest word's delay at 264ms so a long headline still lands as one event.
- **Observed elements:** the five bands (hero, imprint, precipitation, studio, contact) and each project row individually. The work section itself is not observed.
- **Flecks:** the spent grammar — eight silver squares of 3–9px, absolutely positioned and rotated inside the hero, fading from 0 to 42% opacity over 1.1s beginning 0.45s after settle and staggered 60ms apart. Decorative, `aria-hidden`, `pointer-events: none`. The hero is the only surface that uses them.
- **Reduced motion:** a global block flattens every transition and animation to 0.001ms, resets `.armed` letters to settled, and renders flecks at 50% opacity. The script also bails out before arming anything.

### The Placeholder Marker

`.tbd` wraps any value the studio has not yet supplied — project names and years, the phone number, the email, the client-work names — and draws a 2px dashed outline at 3px offset with 75% opacity. Its entire purpose is that unfinished content must *look* unfinished, so it cannot ship by accident. Never style a placeholder to look resolved, and never remove the marker without replacing the value.

## Do's and Don'ts

### Do:

- **Do** put every new section on one of the four field classes and read colour from `--fg`, `--fg-dim`, and `--focus`. That is how the system stays legible when the ground changes.
- **Do** use `cyan` as a full-region fill with ink on top, and reach for `cyan-deep` the moment cyan needs to be text, a border, or a state on a light ground.
- **Do** write every new rule in logical properties — `padding-inline`, `inset-block-start`, `border-inline-end`, `inline-size`. Persian RTL is phase two and the stylesheet currently has zero physical directional properties.
- **Do** self-host any new font file in `public/fonts/` and load it through `@font-face`. The audience is in Iran.
- **Do** pair every colour-based state change with a second, non-colour signal — the project row rotates its arrow while the wash rises; the stamp lifts 2px while it fills.
- **Do** keep controls at 44px minimum in the masthead and 46–48px elsewhere, and keep the enquiry channels reachable from any scroll position.
- **Do** wrap unsupplied content in `.tbd` so it carries the dashed outline.
- **Do** match a neighbouring `clamp()` when you need new spacing, and use `gutter` for anything that must align to the page edge.

### Don't:

- **Don't** use `cyan` (1.66:1 on storm) as text, an icon stroke, a border, or a state colour on any light ground; and **don't** ever put text in `silver` (2.70:1) on a light ground — it is particles only.
- **Don't** use `slate` on the ink field (2.14:1). Reversed secondary text is `silver`.
- **Don't** add a `box-shadow`, `filter`, `backdrop-filter`, gradient, or glow. The system is flat and depth comes from ground changes and 1.5–2px ink rules.
- **Don't** add a third corner radius. Square is the default; `circle` and `pill` are the two semantic exceptions.
- **Don't** introduce photography, illustration, or stock imagery. The build has none by design, and PRODUCT.md forbids inventing proof the studio has not supplied.
- **Don't** load fonts from Google Fonts, `next/font/google`, or any foreign CDN, and don't hot-link images from one.
- **Don't** widen the condensation scatter or lift the `--i` cap of 12. A large scatter made the page unreadable on every band entry.
- **Don't** reintroduce the world this replaced: warm paper `#ede9e0`, serif display type, hairline rules, or numbered project rows with hover previews.
- **Don't** set Bricolage below 20px or Archivo above 26px, and don't hand-pick a text colour against a hand-picked background instead of joining a field.
- **Don't** use more than one filled stamp on a single surface — its job is to be the only one.
