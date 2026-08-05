import Link from "next/link";
import { projects } from "../../content";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <main className="case-shell field-storm"><p className="mark">Project not found</p><Link className="stamp" href="/#work">Back to work</Link></main>;
  }

  return (
    <main className="case-shell field-storm">
      <header className="case-nav"><Link className="masthead__wordmark" href="/">MAHAN</Link><Link className="mark" href="/#work">← All work</Link></header>
      <section className="case-hero">
        <p className="mark">Case study / {project.status === "coming-soon" ? "In preparation" : project.year}</p>
        <h1 className="display">{project.name}</h1>
        <p className="case-summary">{project.summary}</p>
      </section>
      <section className="case-grid" aria-label="Project details">
        <div><span className="mark">Discipline</span><p>{project.discipline}</p></div>
        <div><span className="mark">Services</span><p>{project.services.join(" / ")}</p></div>
        <div><span className="mark">Year</span><p>{project.year}</p></div>
      </section>
      {project.status === "coming-soon" ? <section className="case-note"><p className="mark">This case-study shell is ready. Final project material will appear here once cleared for publication.</p><Link className="stamp stamp--filled" href="/#contact">Start a project</Link></section> : null}
    </main>
  );
}
