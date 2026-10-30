import type { Metadata } from "next";

const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://pranav-gujjar-portfolio.vercel.app";

export const SITE_URL = configuredUrl.replace(/\/$/, "");

export const SITE_NAME = "Pranav Gujjar";

export const SITE_DESCRIPTION =
  "Explore Pranav Gujjar's AI engineering portfolio: real-time Computer Vision, production machine learning, NLP, decision intelligence, and full-stack AI products.";

export function pageMetadata(
  title: string,
  description: string,
  pathname: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url: pathname,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
