"use client";

import { Fragment, useEffect, useRef, useState, type CSSProperties, type MouseEvent } from "react";
import { clientWork, contact, disciplines, projects, studioNotes } from "./content";

/* ===========================================================================
   REPLACE BEFORE LAUNCH — everything in this block is placeholder.
   Anything rendered inside <Tbd> carries a dashed outline on the page, so an
   unfinished value can never be mistaken for a finished one.

     1. PROJECTS      — the four featured projects: name, discipline, year.
     2. CLIENT_WORK   — the wider body of client work.
     3. CONTACT       — real studio email, phone, WhatsApp number, Instagram.

   Fill a value in and drop its `tbd` flag. Nothing else needs to move.

   ALSO OUTSIDE THIS FILE, still unreplaced starter assets:
     - public/og.png      1.79 MB, 1731x909, declared as 1200x630 in
                          app/layout.tsx. This is the first thing anyone sees
                          when the site is shared into Instagram or WhatsApp.
                          Needs an authored 1200x630 MAHAN image under ~150 KB.
     - public/favicon.svg replaced with a MAHAN mark, but revisit if the
                          wordmark is ever redrawn.
   =========================================================================== */


/* Deterministic scatter: identical on server and client, so the motion can
   never cause a hydration mismatch. It is intentionally restrained — type
   resolves into place rather than performing for the visitor. */
function scatter(seed: string, i: number) {
  let h = 0;
  for (let k = 0; k < seed.length; k++) h = (h * 31 + seed.charCodeAt(k)) | 0;
  h = (h + i * 2654435761) | 0;
  const a = Math.abs(h);
  return {
    tx: ((a % 32) - 16) / 100,
    ty: (((a >> 7) % 28) - 14) / 100,
    r: ((a >> 13) % 8) - 4,
  };
}

/* Letters are aria-hidden; the accessible name comes from an aria-label on the
   surrounding heading, so a screen reader gets the word once and never spells
   it out. Words are wrapped individually because inline-block letters would
   otherwise let the browser break "you're" across two lines. */
function Condense({ text }: { text: string }) {
  const words = text.split(" ");
  let n = 0;
  return (
    <span className="cond" aria-hidden="true">
      {words.map((word, wi) => {
        const letters = Array.from(word).map((ch) => {
          const i = n++;
          const { tx, ty, r } = scatter(text, i);
          const style = {
            "--tx": `${tx.toFixed(2)}em`,
            "--ty": `${ty.toFixed(2)}em`,
            "--r": `${r}deg`,
            "--i": Math.min(i, 12),
          } as CSSProperties;
          return (
            <i key={i} style={style}>
              {ch}
            </i>
          );
        });
        return (
          <Fragment key={wi}>
            {wi > 0 ? " " : null}
            <span className="cond-w">{letters}</span>
          </Fragment>
        );
      })}
    </span>
  );
}

function Tbd({ children }: { children: React.ReactNode }) {
  return <span className="tbd">{children}</span>;
}

export default function Home() {
  const bands = useRef<HTMLElement[]>([]);
  const topScrollFrame = useRef<number | null>(null);
  const topScrollCancel = useRef<(() => void) | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateChrome = () => {
      frame = 0;
      setHasScrolled(window.scrollY > 12);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateChrome);
    };

    updateChrome();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Never arm in a background tab: IntersectionObserver delivery is
    // suspended there, so a link opened from Instagram's in-app browser would
    // otherwise sit on permanently scattered, unreadable headings.
    if (document.visibilityState !== "visible") return;

    const nodes = bands.current.filter(Boolean);
    const fold = window.innerHeight * 0.9;

    // Anything already on screen stays settled — arming it would snap the
    // server-rendered word apart and then re-condense it, which reads as a
    // glitch rather than an entrance.
    const offscreen = nodes.filter((n) => n.getBoundingClientRect().top > fold);
    offscreen.forEach((n) => n.classList.add("armed"));

    const settle = (node: HTMLElement) => {
      node.classList.add("settled");
      window.setTimeout(() => node.classList.add("motion-complete"), 760);
    };
    const settleAll = () => offscreen.forEach(settle);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            settle(e.target as HTMLElement);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 },
    );

    offscreen.forEach((n) => io.observe(n));

    // If the tab is hidden mid-scroll, settle everything so returning to it
    // never reveals type frozen in flight.
    const onVisibility = () => {
      if (document.visibilityState === "hidden") settleAll();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Last resort: if the observer never delivers, the page must still read.
    const failsafe = window.setTimeout(settleAll, 6000);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.clearTimeout(failsafe);
    };
  }, []);

  const collect = (el: HTMLElement | null) => {
    if (el && !bands.current.includes(el)) bands.current.push(el);
  };

  // Keep ordinary anchor navigation immediate for keyboard users. This is the
  // one deliberate long-distance transition on the page.
  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    topScrollCancel.current?.();

    const start = window.scrollY;
    const duration = Math.min(1150, Math.max(680, start * 0.18));
    const startedAt = performance.now();
    let interrupted = false;
    const interrupt = () => { interrupted = true; };
    const interruptionEvents: Array<keyof WindowEventMap> = ["wheel", "touchstart", "pointerdown", "keydown"];
    interruptionEvents.forEach((type) => window.addEventListener(type, interrupt, { once: true, passive: true }));

    const finish = () => {
      interruptionEvents.forEach((type) => window.removeEventListener(type, interrupt));
      topScrollFrame.current = null;
      topScrollCancel.current = null;
    };
    const cancel = () => {
      if (topScrollFrame.current) window.cancelAnimationFrame(topScrollFrame.current);
      finish();
    };
    topScrollCancel.current = cancel;
    const step = (now: number) => {
      if (interrupted) return finish();
      const progress = Math.min(1, (now - startedAt) / duration);
      // A gentle ease-out: the destination is clear immediately, without the
      // abrupt final snap of the browser's default smooth-scroll timing.
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo({ top: start * (1 - eased), behavior: "auto" });
      if (progress < 1) topScrollFrame.current = window.requestAnimationFrame(step);
      else finish();
    };

    topScrollFrame.current = window.requestAnimationFrame(step);
  };

  return (
    <>
      <a className="skip" href="#work">
        Skip to the work
      </a>

      <header className="masthead" data-scrolled={hasScrolled || undefined}>
        <a className="masthead__wordmark" href="#top" aria-label="MAHAN — home">
          <img className="brand-logo" src="/mahan-logo.svg" alt="" />
        </a>
        <nav className="masthead__nav" aria-label="Primary">
          <a className="masthead__link" href="#work">Work</a>
          <a className="masthead__link" href="#studio">Studio</a>
          <a className="stamp stamp--filled" href="#contact">Start a project</a>
        </nav>
      </header>

      <main id="top">
        {/* ---------------------------------------------------------- HERO */}
        <section
          className="band band--tall field-storm"
          ref={collect}
          aria-labelledby="hero-title"
        >
          <div className="hero-content">
            <h1 id="hero-title" className="hero__wordmark" aria-label="MAHAN">
              <img className="hero__logo" src="/mahan-logo-hero.svg" alt="" />
            </h1>
            <p className="display hero__headline">
              An independent studio for brands that refuse to blend in.
            </p>
          </div>

          <div className="hero__credit hero-content">
            <span className="mark hero__origin">
              Shiraz, Fars — brand, space &amp; digital
            </span>
            <a className="stamp" href="#contact">Start a project</a>
          </div>
        </section>

        {/* ------------------------------------------------------- IMPRINT */}
        <section className="band field-cyan" ref={collect} aria-labelledby="imprint-title">
          <h2
            id="imprint-title"
            className="display imprint__lede"
            aria-label="One storm. Three words."
          >
            <Condense text="One storm." /> <Condense text="Three words." />
          </h2>

          <div className="weather">
            {disciplines.map((d) => (
              <div key={d.key}>
                <h3 className="display">{d.key}</h3>
                <p className="prose">{d.body}</p>
              </div>
            ))}
          </div>

          <p className="imprint__note">
            Most studios can give you one of these. Commission three of them from
            three suppliers and you get three different weathers. We run all
            three, so they arrive as one.
          </p>
        </section>

        {/* ---------------------------------------------------------- WORK */}
        <section id="work" className="field-storm" aria-labelledby="work-title">
          <div className="work__head">
            <h2 id="work-title" className="display" style={{ fontSize: "clamp(34px, 5vw, 68px)" }}>
              Selected work
            </h2>
            <span className="mark">Four projects</span>
          </div>

          {projects.map((project) => (
            <a
              className="project"
              href={`/work/${project.slug}`}
              key={project.name}
              aria-label={`${project.name} — ${project.discipline}, ${project.year}${
                project.status === "coming-soon" ? " (details to supply)" : ""
              }`}
            >
              <span className="project__wash" aria-hidden="true" />
              <span>
                <span className="display project__name">
                  <Condense text={project.name} />
                </span>
                <span className="project__meta">
                  <span className="mark">{project.discipline}</span>
                  <span className="mark">{project.year}</span>
                  {project.status === "coming-soon" ? (
                    <span className="mark">
                      <Tbd>To supply</Tbd>
                    </span>
                  ) : null}
                </span>
              </span>
              <span className="project__go" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                  />
                </svg>
              </span>
            </a>
          ))}
        </section>

        {/* --------------------------------------------------- PRECIPITATION */}
        <section className="band field-pale" ref={collect} aria-labelledby="precip-title">
          <div className="precip__head">
            <h2
              id="precip-title"
              className="display"
              style={{ fontSize: "clamp(30px, 4.4vw, 58px)" }}
              aria-label="What else has landed"
            >
              <Condense text="What else has landed" />
            </h2>
            <p className="mark" style={{ maxInlineSize: "32ch" }}>
              Shorter engagements, ongoing clients, and work that never needed a
              case study.
            </p>
          </div>

          <div className="precip__field">
            {clientWork.map(([name, discipline], i) => (
              <span className="precip__drop" key={i}>
                <Tbd>{name}</Tbd>
                <span>{discipline}</span>
              </span>
            ))}
            <a className="precip__drop precip__drop--open" href="#contact">
              Room for yours
              <span>Open</span>
            </a>
          </div>
        </section>

        {/* -------------------------------------------------------- STUDIO */}
        <section id="studio" className="band field-ink" ref={collect} aria-labelledby="studio-title">
          <h2 id="studio-title" className="display studio__statement">
            A small studio in Shiraz that would rather do three things for one
            client than one thing for thirty.
          </h2>

          <div className="studio__cols">
            {studioNotes.map((n) => (
              <div key={n.key}>
                <h3>{n.key}</h3>
                <p>{n.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------------- CONTACT */}
        <section id="contact" className="band field-cyan" ref={collect} aria-labelledby="contact-title">
          <h2
            id="contact-title"
            className="display contact__lede"
            aria-label="Tell us what you're building."
          >
            <Condense text="Tell us what you're building." />
          </h2>

          <div className="contact__channels">
            {contact.ready ? <><a className="stamp stamp--filled" href={contact.whatsappHref}>WhatsApp</a><a className="stamp" href={contact.phoneHref}>{contact.phoneLabel}</a><a className="stamp" href={`mailto:${contact.email}`}>{contact.email}</a></> : <span className="contact-pending mark">Contact channels will be added before launch.</span>}
          </div>

          <p className="prose" style={{ marginBlockStart: "26px" }}>
            Send the shape of it — the brand, the room, the site, or all three.
            Every enquiry is answered by the people who would do the work.
          </p>

          <div className="contact__detail">
            <span className="mark" style={{ alignSelf: "center" }}>
              Shiraz, Fars — working everywhere
            </span>
            {contact.ready ? <a href={contact.instagramHref} rel="noreferrer">Instagram</a> : null}
          </div>
        </section>
      </main>

      <footer className="colophon field-ink">
        <a className="masthead__wordmark" href="#top" aria-label="MAHAN — home">
          <img className="brand-logo" src="/mahan-logo.svg" alt="" />
        </a>
        <span className="mark">© 2026 MAHAN Creative Studio</span>
        <a className="mark" href="#top" onClick={scrollToTop}>Back to top</a>
      </footer>
    </>
  );
}
