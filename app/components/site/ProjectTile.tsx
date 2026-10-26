import Link from "next/link";
import type { Project } from "../portfolio/types";
import { projectEvidence } from "./projectEvidence";

export const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function ProjectTile({
  p,
  index = 0,
}: {
  p: Project;
  index?: number;
}) {
  const evidence = projectEvidence[p.title];
  return (
    <Link
      href={`/projects/${slug(p.title)}`}
      className="project-editorial group"
    >
      <div className="project-editorial-copy">
        <div className="project-editorial-meta">
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {evidence?.category || "Engineering"}
          </span>
          <span className="project-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <h2>{p.title}</h2>
        <p>{evidence?.value || p.description}</p>
        <div
          className="project-evidence-strip"
          aria-label="Engineering evidence"
        >
          {(
            evidence?.facts ||
            p.highlights?.slice(0, 3) ||
            p.tags.slice(0, 3)
          ).map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
        <div className="project-editorial-foot">
          <div className="project-editorial-tags">
            {p.tags.slice(0, 3).map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <span className="project-case-link">
            Explore case study <span aria-hidden="true">↗</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
