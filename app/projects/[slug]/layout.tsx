import type { Metadata } from "next";
import { pageMetadata } from "../../lib/siteMetadata";

type ProjectSEO = {
  title: string;
  description: string;
};

const projectSEO: Record<string, ProjectSEO> = {
  "forcefield-ai-movement-intelligence-platform": {
    title: "ForceField — AI Movement Intelligence Platform",
    description:
      "Explore how Pranav Gujjar engineered ForceField, a browser-based AI movement intelligence platform featuring MediaPipe Pose, real-time exercise assessment, adaptive voice coaching, and Supabase-powered athlete workflows.",
  },

  "strategic-intelligence-stack": {
    title: "Strategic Intelligence Stack",
    description:
      "A production-oriented decision intelligence platform combining customer segmentation, deterministic machine learning pipelines, scenario simulations, FastAPI, and an executive-ready Next.js dashboard.",
  },

  "reviewsense-ai": {
    title: "ReviewSense AI",
    description:
      "Explore ReviewSense AI, an applied natural language processing project focused on analyzing customer reviews and extracting actionable insights.",
  },

  "diabetes-prediction-app": {
    title: "Diabetes Prediction App",
    description:
      "A machine learning project exploring diabetes risk prediction through structured health data, predictive modeling, and an interactive application.",
  },

  "retina-ai": {
    title: "Retina-AI",
    description:
      "Explore Retina-AI, a computer vision and deep learning project focused on retinal image analysis and AI-assisted medical imaging workflows.",
  },

  "glass-identification": {
    title: "Glass Identification",
    description:
      "A machine learning classification project exploring material identification using structured data, feature analysis, and predictive modeling.",
  },

  "meeting-task-assignment": {
    title: "Meeting Task Assignment",
    description:
      "An AI-powered meeting task extraction workflow combining Whisper speech-to-text, natural language processing, task identification, and structured JSON output.",
  },
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectSEO[slug];

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return pageMetadata(project.title, project.description, `/projects/${slug}`);
}

export default function ProjectDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
