"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Shell from "../../components/site/Shell";
import { slug } from "../../components/site/ProjectTile";
import { projectEvidence } from "../../components/site/projectEvidence";
import { projects } from "../../components/portfolio/data";

export default function ProjectDetail() {
  const params = useParams();
  const p = projects.find((project) => slug(project.title) === params.slug);
  const [active, setActive] = useState(0);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const shots = p
    ? p.screenshots?.length
      ? p.screenshots
      : p.coverImage
        ? [p.coverImage]
        : []
    : [];
  useEffect(() => {
    if (!galleryOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setGalleryOpen(false);
      if (event.key === "ArrowRight") setActive((i) => (i + 1) % shots.length);
      if (event.key === "ArrowLeft")
        setActive((i) => (i - 1 + shots.length) % shots.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [galleryOpen, shots.length]);
  if (!p)
    return (
      <Shell>
        <main className="site-container case-study-page">
          <h1 className="section-heading">Project not found.</h1>
          <Link href="/projects" className="case-back">
            ← All projects
          </Link>
        </main>
      </Shell>
    );
  const evidence = projectEvidence[p.title];
  const next = projects[(projects.indexOf(p) + 1) % projects.length];
  return (
    <Shell>
      <article className="site-container case-study-page">
        <Link href="/projects" className="case-back">
          ← All projects
        </Link>
        <header className="case-header">
          <p className="eyebrow">
            ENGINEERING CASE STUDY /{" "}
            {evidence?.category || "APPLIED ENGINEERING"}
          </p>
          <h1 className="case-title">
            {p.title}
            <span className="accent-dot">.</span>
          </h1>
          <p className="case-lede">{evidence?.value || p.description}</p>
          <div className="case-actions">
            {p.links.code && (
              <a
                href={p.links.code}
                target="_blank"
                rel="noreferrer"
                className="site-primary"
              >
                Source code ↗
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noreferrer"
                className="site-outline"
              >
                Live application ↗
              </a>
            )}
            {p.links.docs && (
              <a
                href={p.links.docs}
                target="_blank"
                rel="noreferrer"
                className="site-outline"
              >
                API documentation ↗
              </a>
            )}
            <Link href="/contact" className="site-outline">
              Discuss a similar project ↗
            </Link>
          </div>
        </header>
        <div className="case-proof" aria-label="Key engineering capabilities">
          {(
            evidence?.facts ||
            p.highlights?.slice(0, 3) ||
            p.tags.slice(0, 3)
          ).map((fact, i) => (
            <div key={fact}>
              <span className="case-proof-index">0{i + 1}</span>
              <strong>{fact}</strong>
              <span>Implemented capability</span>
            </div>
          ))}
        </div>
        <div className="case-columns">
          <div className="case-main">
            <section className="case-section">
              <p className="case-section-index">01 / THE CHALLENGE</p>
              <h2>The problem worth solving</h2>
              <p className="case-description">
                {evidence?.problem || p.description}
              </p>
            </section>
            <section className="case-section">
              <p className="case-section-index">02 / THE SOLUTION</p>
              <h2>What this system delivers</h2>
              <p className="case-description">{p.description}</p>
            </section>
            <section className="case-section">
              <p className="case-section-index">03 / ENGINEERING WORK</p>
              <h2>Implementation highlights</h2>
              <ul className="case-highlights">
                {(p.highlights || [p.description]).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section className="case-section">
              <p className="case-section-index">04 / SYSTEM DESIGN</p>
              <h2>How it works</h2>
              {p.architecture?.length ? (
                <ol className="case-architecture">
                  {p.architecture.map((step, i) => (
                    <li key={step}>
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <p>{step}</p>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="case-description">
                  Refer to the source repository for architecture and
                  implementation details.
                </p>
              )}
            </section>
          </div>
          <aside className="case-aside" aria-label="Project technical overview">
            <div className="case-aside-panel">
              <p className="case-section-index">TECHNICAL PROFILE</p>
              <h2>Tools & technologies</h2>
              <div className="case-stack">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
            {shots.length > 0 && (
              <div className="case-aside-panel">
                <p className="case-section-index">IMPLEMENTATION EVIDENCE</p>
                <h2>Explore the application</h2>
                <p className="case-aside-copy">
                  Screenshots are supporting material. The engineering details
                  are available directly on this page.
                </p>
                {shots.length > 0 ? (
                  <button
                    className="case-gallery-trigger"
                    type="button"
                    onClick={() => {
                      setActive(0);
                      setGalleryOpen(true);
                    }}
                  >
                    <span>
                      View product screenshots{" "}
                      <small>
                        {shots.length} image{shots.length === 1 ? "" : "s"}
                      </small>
                    </span>
                    <span aria-hidden="true">↗</span>
                  </button>
                ) : (
                  <p className="case-aside-copy">
                    No screenshots are currently available.
                  </p>
                )}
              </div>
            )}
            {(p.links.code || p.links.demo || p.links.docs) && (
              <div className="case-aside-panel">
                <p className="case-section-index">PROJECT LINKS</p>
                <div className="case-resource-links">
                  {p.links.code && (
                    <a href={p.links.code} target="_blank" rel="noreferrer">
                      GitHub repository ↗
                    </a>
                  )}
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noreferrer">
                      Live application ↗
                    </a>
                  )}
                  {p.links.docs && (
                    <a href={p.links.docs} target="_blank" rel="noreferrer">
                      API documentation ↗
                    </a>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
        <footer className="case-next">
          <span>CONTINUE EXPLORING</span>
          <Link href={`/projects/${slug(next.title)}`}>{next.title} ↗</Link>
        </footer>
      </article>
      {galleryOpen && shots.length > 0 && (
        <div
          className="case-gallery-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setGalleryOpen(false);
          }}
        >
          <div
            className="case-gallery-dialog"
            role="dialog"
            aria-modal="true"
            aria-label={`${p.title} screenshots`}
          >
            <div className="case-gallery-top">
              <div>
                <strong>{p.title}</strong>
                <span>
                  Screenshot {active + 1} of {shots.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setGalleryOpen(false)}
                aria-label="Close screenshot gallery"
              >
                ✕
              </button>
            </div>
            <div className="case-gallery-image">
              <Image
                src={shots[active]}
                alt={`${p.title} screenshot ${active + 1}`}
                fill
                sizes="(max-width: 900px) 100vw, 900px"
                className="object-contain"
              />
            </div>
            <div className="case-gallery-controls">
              <button
                type="button"
                onClick={() =>
                  setActive((i) => (i - 1 + shots.length) % shots.length)
                }
                disabled={shots.length === 1}
              >
                ← Previous
              </button>
              <span>
                {active + 1} / {shots.length}
              </span>
              <button
                type="button"
                onClick={() => setActive((i) => (i + 1) % shots.length)}
                disabled={shots.length === 1}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
