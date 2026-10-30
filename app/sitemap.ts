import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/siteMetadata";

// Server-safe list of published portfolio project URLs.
// Keep this list aligned with the Projects page.
const projectSlugs = [
  "forcefield-ai-movement-intelligence-platform",
  "strategic-intelligence-stack",
  "reviewsense-ai",
  "diabetes-prediction-app",
  "retina-ai",
  "glass-identification",
  "meeting-task-assignment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = ["/", "/projects", "/expertise", "/about", "/contact"];

  const projectPages = projectSlugs.map(
    (projectSlug) => `/projects/${projectSlug}`,
  );

  return [...mainPages, ...projectPages].map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority:
      path === "/"
        ? 1
        : path === "/projects"
          ? 0.9
          : path.startsWith("/projects/")
            ? 0.8
            : 0.7,
  }));
}
