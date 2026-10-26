import type { Metadata } from "next";
import { pageMetadata } from "../lib/siteMetadata";

export const metadata: Metadata = pageMetadata(
  'Expertise',
  "Explore Pranav Gujjar's expertise in applied machine learning, Computer Vision, NLP, speech synthesis, and production engineering.",
  "/expertise"
);

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
