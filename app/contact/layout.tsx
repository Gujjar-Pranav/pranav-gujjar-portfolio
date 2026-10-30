import type { Metadata } from "next";
import { pageMetadata } from "../lib/siteMetadata";

export const metadata: Metadata = pageMetadata(
  "Contact",
  "Contact Pranav Gujjar about AI engineering roles, machine learning projects, Computer Vision, and professional collaboration.",
  "/contact",
);

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
