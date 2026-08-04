import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAHAN — Brand, Space & Digital, from one studio in Shiraz",
  description:
    "MAHAN is an independent creative studio in Shiraz. We do identity, environments and digital for the same client, so the mark, the room and the screen agree with each other.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "MAHAN — Brand, Space & Digital, from one studio in Shiraz",
    description: "An independent studio for brands that refuse to blend in.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

/* The direction contract. Survives into the production build so it can be
   audited against the render. */
const CONTRACT = `<!--
IMPECCABLE DIRECTION CONTRACT — client-pinned, overrides seed f69bd24a

THESIS: Letters are matter. Every name on this site condenses out of scattered
type, holds, and lets the storm move on. Refuses the editorial-studio index:
warm paper, hairline rules, serif display, numbered rows with hover previews.

OWN-WORLD: Alphabet Storm. Cold storm white ground, ink as mass, one monumental
grotesk (Bricolage) doing the structural work, Archivo for marks. Cyan #2AD4D4 —
the client's own colour — owns whole regions rather than accenting them: the
imprint and contact bands are cyan edge to edge. Silver is decorative flecks
only, never text. No photography required; self-hosted fonts.

STORY: A founder sees a studio with a point of view, understands that brand,
space and digital are one weather rather than three suppliers, and can reach
WhatsApp from any scroll position.

FIRST VIEWPORT: Storm white. MAHAN at 19vw condensing from scattered, rotated
glyphs into register, headline beneath, and a credit rule carrying WhatsApp,
Phone and Email above the fold.

FORM: Word-as-weather-event. Client-pinned direction; a pinned brief beats the
roll, and the rolled Kanoon Poster world was discarded at the client's request.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
review, the verdict, and DESIGN.md
-->`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        {children}
      </body>
    </html>
  );
}
