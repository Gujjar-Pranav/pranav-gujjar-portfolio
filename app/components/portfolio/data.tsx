"use client";

import type { Education, Experience, Project, SkillGroup } from "./types";
import type { ReactNode } from "react";

import {
  BarChart3,
  Briefcase,
  ClipboardList,
  Code2,
  ExternalLink,
  Eye,
  FileText,
  FlaskConical,
  Github,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  LineChart,
  Lock,
  MessageCircle,
  Mic,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  Wrench,
  FolderGit2,
  Mail,
} from "lucide-react";

export const NAV = [
  { href: "#about", label: "About", icon: <Sparkles className="h-4 w-4" /> },
  {
    href: "#why",
    label: "Why Hire Me",
    icon: <ShieldCheck className="h-4 w-4" />,
  },
  {
    href: "#achievements",
    label: "Achievements",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    href: "#experience",
    label: "Experience",
    icon: <Briefcase className="h-4 w-4" />,
  },
  { href: "#skills", label: "Skills", icon: <Wrench className="h-4 w-4" /> },
  {
    href: "#projects",
    label: "Projects",
    icon: <FolderGit2 className="h-4 w-4" />,
  },
  {
    href: "#education",
    label: "Education",
    icon: <GraduationCap className="h-4 w-4" />,
  },
  {
    href: "#certifications",
    label: "Certifications",
    icon: <FileText className="h-4 w-4" />,
  },
  { href: "#contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
];

export const experience: Experience[] = [
  {
    role: "Machine Learning Engineer — Freelance",
    period: "Aug 2025 — Present",
    bullets: [
      "Built end-to-end ML pipelines (data prep → modeling → evaluation → deployment) with reproducible artifacts and clean project structure.",
      "Delivered production-style inference services (FastAPI) and interactive dashboards (Streamlit) for explainability and confidence-based decision support.",
      "Focused on training–inference parity, versioned outputs, and maintainable code (not notebook-only work).",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Vertexblue Pvt Ltd (India)",
    period: "Jun 2022 — Dec 2022",
    bullets: [
      "Improved forecasting accuracy by ~15% using Python/SQL predictive modeling and evaluation workflows.",
      "Supported 10%+ operational cost reduction via data-driven recommendations and insights.",
      "Reduced manual processing by ~30% by automating reporting and repeatable analytics pipelines.",
    ],
  },
];

export const education: Education[] = [
  {
    degree: "MSc in Data Science (Distinction)",
    school: "University of East Anglia, UK",
    period: "Sept 2023 — Sept 2024",
    notes: [
      "Focus: Machine Learning, NLP, Computer Vision, and Time Series",
      "Dissertation: Retinal vessel segmentation (U-Net / Dense U-Net)",
    ],
  },
];

export const certGroups: { title: string; items: string[] }[] = [
  {
    title: "Advanced (ML / DL)",
    items: [
      "Machine Learning and Deep Learning in Python & R",
      "Intermediate Machine Learning",
    ],
  },
  {
    title: "Foundations (Core ML + Python)",
    items: [
      "Machine Learning A–Z: Python & R",
      "Python for Data Science and Machine Learning Bootcamp",
      "Introduction to Machine Learning",
      "Python Programming",
    ],
  },
  {
    title: "Applied (Data / Analytics)",
    items: [
      "Pandas for Data Analysis",
      "PostgreSQL Essentials",
      "Data Visualization",
      "CV Masterclass",
    ],
  },
];

export const achievements: { title: string; note: string; icon: ReactNode }[] = [
  { title: "Production ML systems", note: "FastAPI + Streamlit/Next.js + Docker + CI/CD pipelines", icon: <ShieldCheck className="h-5 w-5 text-black/70" /> },
  { title: "Trust-aware ML delivery", note: "Calibration, confidence scoring, risk routing, explainability", icon: <Target className="h-5 w-5 text-black/70" /> },
  { title: "~15% forecasting improvement", note: "Predictive modeling + evaluation workflows (Python/SQL)", icon: <BarChart3 className="h-5 w-5 text-black/70" /> },
  { title: "~30% automation gain", note: "Reduced manual processing via repeatable pipelines", icon: <Wrench className="h-5 w-5 text-black/70" /> },
];


export const projects: Project[] = [
  {
    title: "Strategic Intelligence Stack",
    icon: <BarChart3 className="h-5 w-5 text-black/70" />,
    description:
      "Production-grade customer segmentation and decision intelligence platform: deterministic clustering runs, segment personas and KPI insights, and scenario simulations without retraining — delivered via FastAPI APIs and an executive-ready Next.js dashboard.",
    badges: [
      { label: "Decision Intelligence", icon: <Target className="h-4 w-4" /> },
      { label: "Dashboards", icon: <LayoutDashboard className="h-4 w-4" /> },
      { label: "Simulation", icon: <LineChart className="h-4 w-4" /> },
      { label: "Run Versioning", icon: <ShieldCheck className="h-4 w-4" /> },
    ],
    tags: [
      "Next.js",
      "FastAPI",
      "Customer Segmentation",
      "Clustering",
      "Run Management",
      "Simulation Engine",
      "REST APIs",
      "Swagger",
      "Vercel",
      "Render",
    ],
    links: {
      code: "https://github.com/Gujjar-Pranav/strategic-intelligence-stack",
      demo: "https://strategic-intelligence-stack.vercel.app",
      docs: "https://strategic-intelligence-stack.onrender.com/docs",
    },
    coverImage: "/projects/strategic-intelligence_1.png",
    screenshots: [
      "/projects/strategic-intelligence_1.png",
      "/projects/strategic-intelligence_2.png",
      "/projects/strategic-intelligence_3.png",
      "/projects/strategic-intelligence_4.png",
    ],
    highlights: [
      "Deterministic, reproducible segmentation runs (run ID + persisted artifacts)",
      "Decision-oriented insights: revenue share, promo responsiveness, discount-risk, channel mix",
      "Scenario simulations operate on persisted runs (no retraining required)",
      "Executive-first UI with print-optimized exports",
    ],
    architecture: [
      "Dataset ingestion → validation + normalization → clustering pipeline",
      "Cluster analytics + persona generation → persisted run artifacts (run_id)",
      "Simulation engine applies business-rule transformations on persisted results",
      "Next.js frontend consumes run data via REST APIs → dashboards + exports",
    ],
  },

  {
    title: "ReviewSense AI",
    icon: <ShieldCheck className="h-5 w-5 text-black/70" />,
    description:
      "Trust-aware review intelligence dashboard: sentiment + calibrated confidence, risk routing, tricky-review detection, and executive insights in Streamlit.",
    badges: [
      { label: "Trust-aware", icon: <Shield className="h-4 w-4" /> },
      { label: "Dashboard", icon: <LayoutDashboard className="h-4 w-4" /> },
      { label: "Insights", icon: <LineChart className="h-4 w-4" /> },
      { label: "Metrics", icon: <BarChart3 className="h-4 w-4" /> },
    ],
    tags: [
      "Python",
      "NLP",
      "TF-IDF",
      "Linear SVM",
      "Model Calibration",
      "Streamlit",
      "Plotly",
      "scikit-learn",
      "Responsible AI",
    ],
    links: {
      code: "https://github.com/Gujjar-Pranav/review-sense-ai",
      demo: "https://review-sense-ai-mvvd48vdsasmys7ecjenpa.streamlit.app/",
    },
    coverImage: "/projects/review-sense-ai_1.png",
    screenshots: [
      "/projects/review-sense-ai_1.png",
      "/projects/review-sense-ai_2.png",
      "/projects/review-sense-ai_3.png",
      "/projects/review-sense-ai_4.png",
    ],
    highlights: [
      "Confidence + risk scoring to route auto-approve vs manual review",
      "Detection of tricky reviews (negation, mixed sentiment, vague wording)",
      "Executive insights + explainability dashboards",
      "CI quality gates and artifact validation",
    ],
    architecture: [
      "Raw reviews → preprocessing → TF-IDF feature extraction",
      "Model training + benchmarking → best model selection",
      "Probability calibration → confidence scoring",
      "Risk routing → auto-approve vs manual review",
      "Reports (misclassifications, comparisons) → Streamlit dashboard",
    ],
  },

  {
    title: "Diabetes Prediction App",
    icon: <HeartPulse className="h-5 w-5 text-black/70" />,
    description:
      "End-to-end diabetes risk prediction with probability output, Low/Medium/High risk stratification, patient history, Excel export, and PDF report generation.",
    badges: [
      { label: "Healthcare", icon: <HeartPulse className="h-4 w-4" /> },
      { label: "PDF Reports", icon: <FileText className="h-4 w-4" /> },
      { label: "History", icon: <ClipboardList className="h-4 w-4" /> },
      { label: "Metrics", icon: <BarChart3 className="h-4 w-4" /> },
    ],
    tags: [
      "Python",
      "Logistic Regression",
      "Streamlit",
      "scikit-learn",
      "StandardScaler",
      "PDF",
      "Excel Export",
    ],
    links: {
      code: "https://github.com/Gujjar-Pranav/Diabetes_Prediction_App",
      demo: "https://diabetespredictionapp-ffcfgbmn3xxxe9ah7dl3rw.streamlit.app/",
    },
    coverImage: "/projects/diabetic_1.png",
    screenshots: [
      "/projects/diabetic_1.png",
      "/projects/diabetic_2.png",
      "/projects/diabetic_3.png",
      "/projects/diabetic_4.png",
    ],
    highlights: [
      "Risk level + probability output for decision support",
      "PDF reports with patient ID + QR + timestamp",
      "Patient history tracking + Excel export",
      "Automated ML pipeline (EDA → train → evaluate → app)",
    ],
    architecture: [
      "Dataset → preprocessing → scaling (StandardScaler)",
      "Train Logistic Regression → evaluation + metrics",
      "Persist model + scaler → app inference",
      "Streamlit UI → prediction + PDF report + patient history export",
    ],
  },

  {
    title: "Retina-AI",
    icon: <Eye className="h-5 w-5 text-black/70" />,
    description:
      "Clinical diabetic retinopathy screening MVP: patient & clinician registry → fundus upload → DR/No-DR inference with confidence + image-quality gates → risk stratification → Grad-CAM explainability → one-page clinical PDF reports, secured with role-based authentication.",
    badges: [
      { label: "Clinical AI", icon: <HeartPulse className="h-4 w-4" /> },
      { label: "Explainability", icon: <Eye className="h-4 w-4" /> },
      { label: "PDF Reports", icon: <FileText className="h-4 w-4" /> },
      { label: "Auth + Roles", icon: <Lock className="h-4 w-4" /> },
    ],
    tags: [
      "Python",
      "Streamlit",
      "PyTorch",
      "Grad-CAM",
      "OpenCV/Pillow",
      "Risk Stratification",
      "ReportLab",
      "Ruff",
      "GitHub Actions",
      "Clinical Workflow",
    ],
    links: {
      code: "https://github.com/Gujjar-Pranav/retina-ai",
      demo: "https://retina-ai-zpkddbsb6m2rf6tfgd6rjh.streamlit.app",
    },
    coverImage: "/projects/retina-ai_1.png",
    screenshots: [
      "/projects/retina-ai_1.png",
      "/projects/retina-ai_2.png",
      "/projects/retina-ai_3.png",
      "/projects/retina-ai_4.png",
    ],
    highlights: [
      "End-to-end screening workflow: Registry → Screening → Risk → Explainability → Reporting",
      "PyTorch inference with confidence + image quality gating",
      "Grad-CAM explainability embedded into clinical PDF reports",
      "Role-based access control (Admin / Registry / Screening / Reports)",
      "CI/CD via GitHub Actions (Ruff linting + import smoke tests)",
    ],
    architecture: [
      "Streamlit UI → Auth + Roles → Registry / Screening / Reports tabs",
      "Fundus upload → PyTorch model inference (DR/No-DR) + confidence scoring",
      "Quality gates + risk stratification + clinical recommendations",
      "Grad-CAM generation → PDF builder (ReportLab) → reports/*.pdf",
    ],
  },

  {
    title: "Glass Identification",
    icon: <FlaskConical className="h-5 w-5 text-black/70" />,
    description:
      "Production-style ML system: stacking ensemble + reproducible inference pipeline, FastAPI backend, Streamlit UI, Docker Compose, and CI/CD automation.",
    badges: [
      { label: "API", icon: <Code2 className="h-4 w-4" /> },
      { label: "Docker", icon: <ExternalLink className="h-4 w-4" /> },
      { label: "CI/CD", icon: <Wrench className="h-4 w-4" /> },
      { label: "Deployment", icon: <ExternalLink className="h-4 w-4" /> },
    ],
    tags: [
      "Python",
      "Ensembles",
      "Stacking",
      "SMOTE",
      "FastAPI",
      "Streamlit",
      "Docker",
      "GitHub Actions",
    ],
    links: { code: "https://github.com/Gujjar-Pranav/Glass_Identification" },
    coverImage: "/projects/glass_indetification_1.png",
    screenshots: [
      "/projects/glass_indetification_1.png",
      "/projects/glass_indetification_2.png",
      "/projects/glass_indetification_3.png",
      "/projects/glass_indetification_4.png",
    ],
    highlights: [
      "Advanced feature engineering + imbalance handling",
      "Stacking ensemble selected over tuned baselines",
      "FastAPI inference service with trained artifacts",
      "Dockerized services with CI builds",
    ],
    architecture: [
      "UCI data → cleaning → outlier handling → features",
      "Scaling + stratified split + SMOTE → training/eval",
      "Persist model + scaler + schema artifacts",
      "FastAPI /predict endpoint → Streamlit UI calls API",
    ],
  },

  {
    title: "Meeting Task Assignment",
    icon: <Mic className="h-5 w-5 text-black/70" />,
    description:
      "Local-only pipeline that turns meeting audio into structured task JSON using offline Whisper speech-to-text + rule-based NLP (no cloud/APIs).",
    badges: [
      { label: "Audio → Text", icon: <Mic className="h-4 w-4" /> },
      { label: "Task Extraction", icon: <ClipboardList className="h-4 w-4" /> },
      { label: "NLP", icon: <MessageCircle className="h-4 w-4" /> },
      { label: "JSON Output", icon: <ExternalLink className="h-4 w-4" /> },
    ],
    tags: ["Python", "Whisper", "NLP", "Automation", "Offline", "JSON"],
    links: { code: "https://github.com/Gujjar-Pranav/Meeting_task_assignment" },
    coverImage: "/projects/task_identification_output.png",
    screenshots: ["/projects/task_identification_output.png"],
    highlights: [
      "Audio (.m4a) → transcript → task candidates → JSON output",
      "Team-member aware assignment logic via skills mapping",
      "Runs fully locally with ffmpeg + Whisper",
    ],
    architecture: [
      "Meeting audio → Whisper STT → transcript.txt",
      "Sentence splitting → rule-based task identification",
      "Feature extraction → task objects → tasks_output.json",
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    subtitle: "Primary tools used across projects",
    items: [
      "Python",
      "SQL",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "FastAPI",
      "Streamlit",
      "Docker",
    ],
  },
  {
    title: "Machine Learning",
    subtitle: "Modeling + evaluation in real workflows",
    items: [
      "Supervised/Unsupervised Learning",
      "Feature Engineering",
      "Model Evaluation (ROC-AUC, Precision/Recall)",
      "Calibration & Confidence Scoring",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "NLP & Speech",
    subtitle: "Text pipelines + speech-to-text",
    items: [
      "TF-IDF",
      "Linear SVM",
      "Text Preprocessing",
      "Rule-based NLP",
      "Speech-to-Text (Whisper)",
    ],
  },
  {
    title: "Computer Vision",
    subtitle: "Segmentation + image workflows",
    items: [
      "U-Net",
      "Image Segmentation",
      "Augmentation",
      "Dice/IoU",
      "Preprocessing (CLAHE)",
    ],
  },
  {
    title: "Data & Analytics",
    subtitle: "Pipelines + BI + visualization",
    items: [
      "pandas",
      "NumPy",
      "PostgreSQL",
      "MongoDB",
      "Matplotlib",
      "Plotly",
      "Power BI",
      "Tableau",
    ],
  },
  {
    title: "MLOps",
    subtitle: "Production readiness + repeatability",
    items: [
      "CI/CD (GitHub Actions)",
      "Model Persistence",
      "APIs",
      "Training–Inference Parity",
      "Reproducible Pipelines",
    ],
  },
];

/**
 * ✅ Project-linked skills
 * Used by the Skills UI: click a skill chip → show related projects.
 * (We keep it here so you only update this file to maintain mappings.)
 */
export type SkillToProjectsMap = Record<string, string[]>;

const PROJECT_TITLES = new Set(projects.map((p) => p.title));
const pick = (...titles: string[]) =>
  titles.filter((t) => PROJECT_TITLES.has(t));

export const SKILL_TO_PROJECTS: SkillToProjectsMap = {
  // Core tools
  Python: pick(
    "Strategic Intelligence Stack",
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Retina-AI",
    "Glass Identification",
    "Meeting Task Assignment",
  ),
  SQL: pick("Strategic Intelligence Stack"),
  "scikit-learn": pick(
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Glass Identification",
  ),
  PyTorch: pick("Retina-AI"),
  TensorFlow: pick(),
  FastAPI: pick("Strategic Intelligence Stack", "Glass Identification"),
  Streamlit: pick(
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Retina-AI",
    "Glass Identification",
  ),
  Docker: pick("Glass Identification"),

  // ML concepts
  "Supervised/Unsupervised Learning": pick(
    "Strategic Intelligence Stack",
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Retina-AI",
    "Glass Identification",
  ),
  "Feature Engineering": pick(
    "Strategic Intelligence Stack",
    "Glass Identification",
    "ReviewSense AI",
  ),
  "Model Evaluation (ROC-AUC, Precision/Recall)": pick(
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Glass Identification",
  ),
  "Calibration & Confidence Scoring": pick("ReviewSense AI", "Retina-AI"),
  "Hyperparameter Tuning": pick("Glass Identification", "ReviewSense AI"),

  // NLP & Speech
  "TF-IDF": pick("ReviewSense AI"),
  "Linear SVM": pick("ReviewSense AI"),
  "Text Preprocessing": pick("ReviewSense AI"),
  "Rule-based NLP": pick("Meeting Task Assignment"),
  "Speech-to-Text (Whisper)": pick("Meeting Task Assignment"),

  // CV
  "U-Net": pick(),
  "Image Segmentation": pick(),
  Augmentation: pick(),
  "Dice/IoU": pick(),
  "Preprocessing (CLAHE)": pick(),

  // Data & Analytics
  pandas: pick(
    "Strategic Intelligence Stack",
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Retina-AI",
    "Glass Identification",
  ),
  NumPy: pick(
    "Strategic Intelligence Stack",
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Retina-AI",
    "Glass Identification",
  ),
  PostgreSQL: pick("Strategic Intelligence Stack"),
  MongoDB: pick(),
  Matplotlib: pick(
    "ReviewSense AI",
    "Diabetes Prediction App",
    "Glass Identification",
  ),
  Plotly: pick("ReviewSense AI", "Strategic Intelligence Stack"),
  "Power BI": pick(),
  Tableau: pick(),

  // MLOps
  "CI/CD (GitHub Actions)": pick(
    "Strategic Intelligence Stack",
    "Retina-AI",
    "Glass Identification",
  ),
  "Model Persistence": pick(
    "Strategic Intelligence Stack",
    "Diabetes Prediction App",
    "Glass Identification",
    "ReviewSense AI",
  ),
  APIs: pick("Strategic Intelligence Stack", "Glass Identification"),
  "Training–Inference Parity": pick(
    "Strategic Intelligence Stack",
    "Glass Identification",
    "Retina-AI",
  ),
  "Reproducible Pipelines": pick(
    "Strategic Intelligence Stack",
    "Glass Identification",
    "Retina-AI",
  ),
};
