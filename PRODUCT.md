# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are decision makers at **Iranian premium brands** — hospitality, retail, furniture, food & beverage — typically the founder or owner rather than a marketing department. They are Persian-speaking, based in Iran, and have budget for identity work.

The job they arrive with: they are launching or repositioning a brand and are deciding which studio to trust with it. They are evaluating taste before they evaluate process or price, usually from a phone or laptop, often having found MAHAN through Instagram or a referral. Success for them is a short list of one.

## Product Purpose

The site is MAHAN's portfolio and its entire sales surface. It exists to convert a browsing prospective client into a direct enquiry (email, phone, or Instagram). Success is a qualified enquiry from a client who already believes the studio can hold their brand — the site does the persuading so the first call is about the project, not about credibility.

## Positioning

MAHAN does **brand, space, and digital under one roof**. Competing studios in Shiraz and Tehran typically do one of the three; a client who needs an identity, a physical environment, and a digital presence to agree with each other would otherwise coordinate two or three vendors. That single-source coherence is the claim a neighbouring studio could not truthfully copy.

## Operating Context

- Discovery is largely Instagram- and referral-driven; the site is where a warm lead goes to confirm what they already suspect.
- The enquiry channels are email, a Shiraz phone number, and Instagram. There is no form, booking flow, or CRM.
- Evaluation happens fast and visually — the work has to lead, and the first viewport has to earn the scroll.
- Prospects are comparing MAHAN against both local agencies and international studios they follow online.

## Capabilities and Constraints

- Static, content-first marketing site. No database, authentication, payments, or external service dependency, despite Drizzle/D1 scaffolding being present in the repo but unused.
- Stack is already established: Next.js 16 (App Router) via `vinext`, React 19, hand-authored CSS in `app/globals.css` (Tailwind v4 is imported but effectively unused), built and deployed through Vite/Wrangler tooling. The README additionally documents self-hosting on an Iranian Linux server with Node 22+.
- **Bilingual English + Persian with a true RTL layout is a confirmed requirement, deferred to a second phase.** The studio has decided to **ship English only for now**. The layout must nonetheless be built RTL-ready — logical properties throughout, no physical `left`/`right`/`padding-left`/`border-right` — so Persian can be added without a second rebuild. Persian typography is authored, not mirrored.
- **Enquiry channels are WhatsApp, phone, and email.** No form, no booking flow. All three must be reachable at any scroll position, not only from the footer.
- **Hosting is Iranian-facing.** Any dependency on Google Fonts, Unsplash, or similarly blocked or throttled foreign CDNs is a delivery risk for the primary audience. Fonts and imagery should be self-hosted.
- Currently a single page with in-page anchors; whether the case study becomes a real route is undecided.

## Brand Commitments

- Name: **MAHAN**, styled as a wordmark with a registered mark (`MAHAN®`) in the incumbent implementation.
- An independent studio based in **Shiraz**, working with clients anywhere.
- Practice areas: **Brand** (strategy, naming, identity systems, art direction), **Space** (interiors, environments, signage), **Digital** (websites, commerce, digital products). These three are the positioning — see below — and supersede the incumbent site's "Brand / Digital / Culture" grouping, which did not name the spatial discipline the studio actually sells.
- Voice in the incumbent copy is editorial, declarative, and unhurried. This is observed from the code, not yet confirmed by the user as binding.
- **A cyan/teal blue in the family of the incumbent `#2ad4d4` is a confirmed brand colour**, to be carried forward as a secondary/accent colour. The user asked for it to be kept or reworked into a near shade — it is not to be dropped. Note that `#2ad4d4` on the incumbent paper is 1.51:1 and cannot legally carry text or state; keeping it means using it as a fill or large-area colour and deriving a darker sibling for text, links, and focus.
- Nothing else about the current visual world is fixed. The user has explicitly opened typography, layout, palette, and imagery to replacement.

## Evidence on Hand

**Real work exists; none of it is on the site yet.** Confirmed 2026-08-03:

- **Four real projects** are to be featured as the selected-work set. Names, categories, years, and details are still to be supplied by the studio.
- **A wider body of client work exists beyond those four** and warrants its own section — a broader survey rather than four deep case studies.
- **Some real photography exists.** The studio will supply the files. Layouts should be art-directed for real imagery, not for stock.

Everything currently rendered in `app/page.tsx` is placeholder standing in for the above and must be replaced:

- Project names ("Noura Objects", "Ava House", "Orion Editions", "Lila / 23") and the case study copy — invented.
- Team members and their photographs — invented; Unsplash stock portraits of unrelated people.
- All photography — hot-linked Unsplash stock.
- Contact details — `studio@mahan.agency`, `+98 71 3232 3232`, and a bare `instagram.com` link — unverified.
- `public/og.png` is a starter asset, not a MAHAN-designed OG image.

Still absent, and **not to be invented**: testimonials, metrics, results, awards, press, and client logo walls. Real projects existing does not license fabricating outcomes or endorsements for them. Where a real fact has not been supplied, leave an obvious marked placeholder rather than writing plausible copy.

## Product Principles

1. **The work leads, the interface recedes.** A prospect decides on taste in the first seconds; every element earns its place by helping the work land faster.
2. **Never claim a track record that does not exist.** Until real projects arrive, persuasion comes from craft, point of view, and the offer — not from fabricated proof.
3. **One studio, three disciplines, one coherent result.** The brand/space/digital combination is the argument; the site should demonstrate it rather than list it.
4. **Persian is a first-class citizen, not a translation.** The audience is Iranian; RTL and Persian typography deserve the same craft as the English layout.
5. **It has to load in Iran.** Assets, fonts, and hosting choices are judged against the primary audience's real network conditions.

## Accessibility & Inclusion

No product-specific standard has been set by the user. Bidirectional text support (LTR English / RTL Persian) is a confirmed functional requirement and carries the usual obligations: logical properties, mirrored layout and iconography, and correct `lang`/`dir` on both locales.
