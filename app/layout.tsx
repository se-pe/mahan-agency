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
    images: [{ url: "/og-v3.png", width: 1200, height: 630 }],
  },
};

/* The direction contract. Survives into the production build so it can be
   audited against the render. */
const CONTRACT = `<!--
IMPECCABLE DIRECTION CONTRACT — client-pinned, overrides seed f69bd24a

THESIS: MAHAN is quiet material confidence. Large type, clear wayfinding and
deliberate colour fields create an identity that is modern, minimal and human.

OWN-WORLD: Quiet Matter. Black #050505, paper #FAFAF8, stone #939393, deep
teal #3F8F91 and mist #C6D9DA. Teal and mist own complete regions; stone stays
supporting information. Neue Montreal carries the presentation typography;
Michroma remains the signature face for small labels.

STORY: A founder sees a studio with a point of view, understands that brand,
space and digital are one weather rather than three suppliers, and can reach
WhatsApp from any scroll position.

FIRST VIEWPORT: Paper. MAHAN at 19vw with a focused headline beneath and a
credit rule carrying the studio origin and project action above the fold.

FORM: Clear, minimal and tactile. Colour is spatial rather than decorative;
motion gives feedback but never competes with the work.

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
