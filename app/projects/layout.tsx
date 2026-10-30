import type { Metadata } from "next";
import { pageMetadata } from "../lib/siteMetadata";

export const metadata: Metadata = pageMetadata(
  "Projects",
  "Explore AI and machine learning case studies including ForceField, Strategic Intelligence Stack, Retina-AI, ReviewSense AI, and more.",
  "/projects",
);

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
