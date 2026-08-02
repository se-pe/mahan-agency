import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MAHAN — Independent Creative Studio",
  description: "MAHAN is an independent creative studio shaping identities, spaces and digital worlds.",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "MAHAN — Independent Creative Studio", description: "For brands that refuse to blend in.", images: [{ url: "/og.png", width: 1200, height: 630 }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
