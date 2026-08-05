export type Project = {
  slug: string;
  name: string;
  discipline: string;
  year: string;
  status: "coming-soon" | "published";
  summary: string;
  services: string[];
};

// This is the single content surface for the shell. Replace the provisional
// values here as projects are cleared for publication; the index and case-study
// routes update together.
export const projects: Project[] = [
  { slug: "project-one", name: "Project one", discipline: "Brand", year: "2026", status: "coming-soon", summary: "A brand system in development.", services: ["Strategy", "Identity", "Art direction"] },
  { slug: "project-two", name: "Project two", discipline: "Space", year: "2026", status: "coming-soon", summary: "An environment designed to make the brand physical.", services: ["Spatial concept", "Signage", "Experience"] },
  { slug: "project-three", name: "Project three", discipline: "Digital", year: "2026", status: "coming-soon", summary: "A digital experience shaped from the same brand system.", services: ["UX", "Interface", "Build"] },
  { slug: "project-four", name: "Project four", discipline: "Brand, Space", year: "2026", status: "coming-soon", summary: "A complete identity spanning mark, room and screen.", services: ["Brand", "Space", "Digital"] },
];

export const clientWork = [
  ["Client", "Brand"], ["Client", "Digital"], ["Client", "Space"],
  ["Client", "Brand"], ["Client", "Digital"], ["Client", "Brand"],
  ["Client", "Space"], ["Client", "Digital"], ["Client", "Brand"],
  ["Client", "Space"],
] as const;

export const contact = {
  email: "studio@mahan.agency",
  phoneLabel: "+98 71 0000 0000",
  phoneHref: "tel:+987100000000",
  whatsappHref: "https://wa.me/000000000000",
  instagramHref: "https://instagram.com/",
  ready: false,
};

export const disciplines = [
  { key: "Brand", body: "Strategy, naming, identity systems and art direction — the argument a brand makes before anyone has walked in or clicked anything." },
  { key: "Space", body: "Interiors, environments and signage. What a brand feels like at arm's length, in daylight, standing up." },
  { key: "Digital", body: "Websites, commerce and digital products, built by the same people who drew the mark — so the screen agrees with the room." },
];

export const studioNotes = [
  { key: "In one order", body: "The identity settles first, the room is drawn against it, and the screen is built last, because by then there is something true to build from." },
  { key: "No handoff", body: "The people who draw the mark specify the room and write the site. Nothing has to survive translation between three suppliers who have never met." },
  { key: "Judged in use", body: "The test is not the presentation. It is the room at seven in the evening and the site on a three-year-old phone." },
];
