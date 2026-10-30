import type { Metadata } from "next";
import { pageMetadata } from "../lib/siteMetadata";

export const metadata: Metadata = pageMetadata(
  "About",
  "Learn about Pranav Gujjar's AI engineering experience, UK startup product development, education, and end-to-end machine learning work.",
  "/about",
);

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
