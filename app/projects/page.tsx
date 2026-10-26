"use client";
import { useMemo, useState } from "react";
import Shell from "../components/site/Shell";
import ProjectTile from "../components/site/ProjectTile";
import { projects } from "../components/portfolio/data";

const filters = [
  "All work",
  "Machine learning",
  "Computer vision",
  "NLP & speech",
] as const;
type Filter = (typeof filters)[number];
const categories: Record<string, Filter> = {
  "ForceField — AI Movement Intelligence Platform": "Computer vision",
  "Strategic Intelligence Stack": "Machine learning",
  "ReviewSense AI": "NLP & speech",
  "Diabetes Prediction App": "Machine learning",
  "Retina-AI": "Computer vision",
  "Glass Identification": "Machine learning",
  "Meeting Task Assignment": "NLP & speech",
};
export default function Projects() {
  const [filter, setFilter] = useState<Filter>("All work");
  const [query, setQuery] = useState("");
  const visible = useMemo(
    () =>
      projects.filter(
        (p) =>
          (filter === "All work" || categories[p.title] === filter) &&
          `${p.title} ${p.description} ${p.tags.join(" ")}`
            .toLowerCase()
            .includes(query.trim().toLowerCase()),
      ),
    [filter, query],
  );
  return (
    <Shell>
      <main className="site-container compact-page">
        <header className="compact-header">
          <div>
            <p className="eyebrow">PORTFOLIO / SELECTED ENGINEERING WORK</p>
            <h1 className="compact-title">
              Selected work<span className="accent-dot">.</span>
            </h1>
          </div>
          <p className="compact-lede">
            Real applications across applied AI, machine learning, computer
            vision, and intelligent systems. Open a project for its
            implementation and architecture.
          </p>
        </header>
        <div className="projects-toolbar">
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                type="button"
                key={item}
                onClick={() => setFilter(item)}
                className={filter === item ? "selected" : ""}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
          <label className="project-search">
            <span className="sr-only">Search projects</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m16 16 5 5" />
            </svg>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search work"
            />
          </label>
        </div>
        <div className="project-editorial-grid">
          {visible.map((p) => (
            <ProjectTile key={p.title} p={p} index={projects.indexOf(p)} />
          ))}
        </div>
        {visible.length === 0 && (
          <p className="empty-projects">
            No projects match this search. Try another category or keyword.
          </p>
        )}
        <div className="projects-endnote">
          <span>
            {visible.length} of {projects.length} projects
          </span>
          <span>
            Explore a case study for technical details and supporting visuals.
          </span>
        </div>
      </main>
    </Shell>
  );
}
