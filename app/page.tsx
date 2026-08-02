"use client";

import { useEffect, useState } from "react";

const projects = [
  { number: "01", name: "Noura Objects", category: "Identity / Digital", year: "2026", image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1100&q=85" },
  { number: "02", name: "Ava House", category: "Hospitality / Strategy", year: "2025", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85" },
  { number: "03", name: "Orion Editions", category: "Editorial / E-commerce", year: "2025", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1100&q=85" },
  { number: "04", name: "Lila / 23", category: "Culture / Campaign", year: "2024", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1100&q=85" },
];

export default function Home() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => setProgress(Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100) || 0);
    update(); window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="MAHAN home">MAHAN<span>®</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a><a href="#studio">Studio</a><a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-meta meta"><span>Independent creative studio</span><span>Shiraz — 2026</span></div>
        <h1>An independent studio<br />for brands that refuse<br />to <em>blend in.</em></h1>
        <div className="hero-bottom"><span className="meta">Scroll to explore</span><span className="scroll-line"><i style={{ width: `${progress}%` }} /></span><span className="meta">{String(progress).padStart(2, "0")}%</span></div>
      </section>

      <section className="work section" id="work">
        <div className="section-kicker"><span className="meta">Selected work</span><span className="meta">04 — 24</span></div>
        <div className="work-list">
          {projects.map((project, index) => (
            <a href="#case-study" className={`project-row ${active === index ? "is-active" : ""}`} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} key={project.number}>
              <span className="project-number">{project.number}</span><span className="project-title">{project.name}</span><span className="project-category meta">{project.category}</span><span className="project-year meta">{project.year}</span>
            </a>
          ))}
        </div>
        <aside className="project-preview" aria-live="polite"><img src={projects[active].image} alt="" /><span className="meta">{projects[active].name}</span></aside>
      </section>

      <section className="case-study" id="case-study">
        <div className="case-intro section">
          <div className="case-label meta">Case study — 01</div>
          <h2>Noura<br /><em>Objects</em></h2>
          <div className="case-metadata meta"><span><b>Client</b>Noura Objects</span><span><b>Services</b>Strategy, Identity, Digital</span><span><b>Year</b>2026</span></div>
        </div>
        <figure className="wide-image"><img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=90" alt="Noura Objects interior campaign" /></figure>
        <div className="brief section"><span className="meta">The brief</span><p>To build an identity for a furniture house that treats domestic objects as quiet, enduring characters. A system made to leave room for material, shadow and the life around it.</p></div>
        <div className="image-pair section"><img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1100&q=85" alt="Minimal seating" /><img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1100&q=85" alt="Sculptural interior" /></div>
        <blockquote>Space is the most<br />generous material.</blockquote>
        <a className="next-project" href="#work"><span className="meta">Next project</span><strong>Ava House</strong><span className="arrow">↘</span></a>
      </section>

      <section className="studio section" id="studio">
        <div className="section-kicker"><span className="meta">The studio</span><span className="meta">Founded in Shiraz</span></div>
        <p className="studio-statement">MAHAN is a creative practice for people with a point of view. We shape identities, spaces and digital worlds with equal parts precision and <em>feeling.</em></p>
        <div className="services"><div><span className="meta">01 / Brand</span><p>Strategy<br />Identity systems<br />Art direction</p></div><div><span className="meta">02 / Digital</span><p>Websites<br />E-commerce<br />Digital products</p></div><div><span className="meta">03 / Culture</span><p>Campaigns<br />Editorial<br />Experiences</p></div></div>
        <div className="team"><div className="team-heading"><span className="meta">A small, deliberate team</span><span className="meta">Shiraz / Everywhere</span></div><div className="team-grid">{[["https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80","Mahan Y.","Creative Direction"],["https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=80","Sara K.","Design Direction"],["https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=600&q=80","Arman R.","Technology"]].map(([image,name,role]) => <figure key={name}><img src={image} alt={name} /><figcaption>{name}<span className="meta">{role}</span></figcaption></figure>)}</div></div>
      </section>

      <section className="contact section" id="contact"><div className="section-kicker"><span className="meta">New business / General enquiries</span><span className="meta">Let&apos;s begin</span></div><a className="email" href="mailto:studio@mahan.agency">studio@mahan.agency</a><div className="contact-bottom"><div><span className="meta">Shiraz office</span><a href="tel:+987132323232">+98 71 3232 3232</a></div><div><span className="meta">Social</span><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram ↗</a></div></div></section>
      <footer><a className="wordmark" href="#top">MAHAN<span>®</span></a><span className="meta">© 2026 Mahan Creative Studio</span><a className="meta" href="#top">Back to top ↑</a></footer>
    </main>
  );
}
