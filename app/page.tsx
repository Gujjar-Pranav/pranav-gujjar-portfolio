"use client";

import PortfolioChat from "./components/PortfolioChat";
import Image from "next/image";
import type { ReactNode } from "react";
import {
  Github,
  Linkedin,
  FileText,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Wrench,
  FolderGit2,
  GraduationCap,
  Award,
  Code2,
  HeartPulse,
  FlaskConical,
  Mic,
  BarChart3,
  LayoutDashboard,
  LineChart,
  Shield,
  ClipboardList,
  Cpu,
  Database,
  Boxes,
  ChevronDown,
  MessageCircle,
  Target,
} from "lucide-react";

type LinkSet = { code: string; demo?: string; docs?: string };

type Project = {
  title: string;
  description: string;
  tags: string[];
  links: LinkSet;
  badges?: { label: string; icon: ReactNode }[];
  highlights?: string[];
  architecture?: string[];
  coverImage?: string;
  screenshots?: string[];
  icon?: ReactNode;
};

type Experience = {
  role: string;
  company?: string;
  period: string;
  bullets: string[];
};

type Education = {
  degree: string;
  school: string;
  period: string;
  notes?: string[];
};

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function Section({
  id,
  title,
  subtitle,
  icon,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <Container>
        <div className="flex items-start gap-3">
          {icon ? (
            <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
              {icon}
            </div>
          ) : null}

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-black/60">{subtitle}</p> : null}
          </div>
        </div>

        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="p-6">{children}</div>
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
      {children}
    </span>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs text-black/70">
      {children}
    </span>
  );
}

function IconLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-black shadow-sm transition hover:border-black/20 hover:shadow"
    >
      {icon ? <span className="h-4 w-4">{icon}</span> : null}
      <span>{children}</span>
    </a>
  );
}

function PrimaryLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-black/90"
    >
      {icon ? <span className="h-4 w-4">{icon}</span> : null}
      <span>{children}</span>
    </a>
  );
}

function NavLink({ href, label, icon }: { href: string; label: string; icon?: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-black/70 transition hover:bg-black/[0.04] hover:text-black"
    >
      {icon ? <span className="h-4 w-4">{icon}</span> : null}
      <span>{label}</span>
    </a>
  );
}

/**
 * Premium collapsible: native <details> (fast + accessible)
 * NOTE: React does NOT support "defaultOpen" on <details>.
 * We conditionally set the valid "open" attribute instead.
 */
function Collapsible({
  title,
  subtitle,
  children,
  defaultOpen,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-2xl border border-black/10 bg-white shadow-sm"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6">
        <div>
          <div className="text-base font-semibold text-black">{title}</div>
          {subtitle ? <div className="mt-1 text-sm text-black/60">{subtitle}</div> : null}
        </div>

        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/60 shadow-sm transition group-open:rotate-180">
          <ChevronDown className="h-4 w-4" />
        </div>
      </summary>

      <div className="px-6 pb-6">{children}</div>
    </details>
  );
}

export default function Home() {
  // ====== DATA ======

  const experience: Experience[] = [
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

  const education: Education[] = [
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

  // Grouped certifications (ML-first scanning)
  const certGroups: { title: string; items: string[] }[] = [
    {
      title: "Advanced (ML / DL)",
      items: ["Machine Learning and Deep Learning in Python & R", "Intermediate Machine Learning"],
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
      items: ["Pandas for Data Analysis", "PostgreSQL Essentials", "Data Visualization", "CV Masterclass"],
    },
  ];

  const achievements = [
    {
      title: "~15% forecasting improvement",
      note: "Built + evaluated predictive models in Python/SQL",
      icon: <Target className="h-5 w-5 text-black/70" />,
    },
    {
      title: "10%+ cost reduction impact",
      note: "Operational insights → measurable savings",
      icon: <BarChart3 className="h-5 w-5 text-black/70" />,
    },
    {
      title: "~30% automation gain",
      note: "Reduced manual processing via repeatable pipelines",
      icon: <Wrench className="h-5 w-5 text-black/70" />,
    },
    {
      title: "Production ML systems",
      note: "FastAPI + Streamlit + Docker + CI/CD",
      icon: <ShieldCheck className="h-5 w-5 text-black/70" />,
    },
  ];

  const projects: Project[] = [
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
      tags: ["Python", "NLP", "TF-IDF", "Linear SVM", "Model Calibration", "Streamlit", "Plotly", "scikit-learn", "Responsible AI"],
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
      tags: ["Python", "Logistic Regression", "Streamlit", "scikit-learn", "StandardScaler", "PDF", "Excel Export"],
      links: {
        code: "https://github.com/Gujjar-Pranav/Diabetes_Prediction_App",
        demo: "https://diabetespredictionapp-ffcfgbmn3xxxe9ah7dl3rw.streamlit.app/",
      },
      coverImage: "/projects/diabetic_1.png",
      screenshots: ["/projects/diabetic_1.png", "/projects/diabetic_2.png", "/projects/diabetic_3.png", "/projects/diabetic_4.png"],
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
      title: "Glass Identification",
      icon: <FlaskConical className="h-5 w-5 text-black/70" />,
      description:
        "Production-style ML system: stacking ensemble + reproducible inference pipeline, FastAPI backend, Streamlit UI, Docker Compose, and CI/CD automation.",
      badges: [
        { label: "API", icon: <Code2 className="h-4 w-4" /> },
        { label: "Docker", icon: <Boxes className="h-4 w-4" /> },
        { label: "CI/CD", icon: <Wrench className="h-4 w-4" /> },
        { label: "Deployment", icon: <ExternalLink className="h-4 w-4" /> },
      ],
      tags: ["Python", "Ensembles", "Stacking", "SMOTE", "FastAPI", "Streamlit", "Docker", "GitHub Actions"],
      links: {
        code: "https://github.com/Gujjar-Pranav/Glass_Identification",
      },
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
        { label: "NLP", icon: <Cpu className="h-4 w-4" /> },
        { label: "JSON Output", icon: <Database className="h-4 w-4" /> },
      ],
      tags: ["Python", "Whisper", "NLP", "Automation", "Offline", "JSON"],
      links: { code: "https://github.com/Gujjar-Pranav/Meeting_task_assignment" },
      coverImage: "/projects/task_identification_output.png",
      screenshots: ["/projects/task_identification_output.png"],
      highlights: ["Audio (.m4a) → transcript → task candidates → JSON output", "Team-member aware assignment logic via skills mapping", "Runs fully locally with ffmpeg + Whisper"],
      architecture: ["Meeting audio → Whisper STT → transcript.txt", "Sentence splitting → rule-based task identification", "Feature extraction → task objects → tasks_output.json"],
    },
  ];

  const skillGroups: { title: string; subtitle: string; items: string[] }[] = [
    {
      title: "Core",
      subtitle: "Primary tools used across projects",
      items: ["Python", "SQL", "scikit-learn", "PyTorch", "TensorFlow", "FastAPI", "Streamlit", "Docker"],
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
      items: ["TF-IDF", "Linear SVM", "Text Preprocessing", "Rule-based NLP", "Speech-to-Text (Whisper)"],
    },
    {
      title: "Computer Vision",
      subtitle: "Segmentation + image workflows",
      items: ["U-Net", "Image Segmentation", "Augmentation", "Dice/IoU", "Preprocessing (CLAHE)"],
    },
    {
      title: "Data & Analytics",
      subtitle: "Pipelines + BI + visualization",
      items: ["pandas", "NumPy", "PostgreSQL", "MongoDB", "Matplotlib", "Plotly", "Power BI", "Tableau"],
    },
    {
      title: "MLOps",
      subtitle: "Production readiness + repeatability",
      items: ["CI/CD (GitHub Actions)", "Model Persistence", "APIs", "Training–Inference Parity", "Reproducible Pipelines"],
    },
  ];

  // ====== PAGE ======
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-3">
            <a href="#home" className="font-semibold tracking-tight text-black">
              Pranav Gujjar
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              <NavLink href="#about" label="About" icon={<Sparkles className="h-4 w-4" />} />
              <NavLink href="#why" label="Why Hire Me" icon={<ShieldCheck className="h-4 w-4" />} />
              <NavLink href="#achievements" label="Achievements" icon={<BarChart3 className="h-4 w-4" />} />
              <NavLink href="#experience" label="Experience" icon={<Briefcase className="h-4 w-4" />} />
              <NavLink href="#skills" label="Skills" icon={<Wrench className="h-4 w-4" />} />
              <NavLink href="#projects" label="Projects" icon={<FolderGit2 className="h-4 w-4" />} />
              <NavLink href="#education" label="Education" icon={<GraduationCap className="h-4 w-4" />} />
              <NavLink href="#certifications" label="Certifications" icon={<Award className="h-4 w-4" />} />
              <NavLink href="#contact" label="Contact" icon={<Mail className="h-4 w-4" />} />
            </nav>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section id="home" className="py-14">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">Pranav Gujjar</h1>

              <p className="mt-2 text-xl font-medium text-gray-700">
                Machine Learning Engineer <span className="text-gray-400">·</span> Data Scientist
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Bangalore, India
                </span>
                <span className="text-gray-300">·</span>
                <span>Open to relocation & remote work</span>
              </div>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                End-to-end machine learning systems engineered for reliability, explainability, and production deployment — from data pipelines to APIs and dashboards.
              </p>

              {/* Premium quick links */}
              <div className="mt-8 flex flex-wrap gap-3">
                <IconLink href="mailto:mr.pranavgujjar@gmail.com" icon={<Mail className="h-4 w-4" />}>
                  Email
                </IconLink>

                <IconLink href="https://wa.me/919008913366" icon={<MessageCircle className="h-4 w-4" />}>
                  WhatsApp
                </IconLink>

                <IconLink href="https://github.com/Gujjar-Pranav" icon={<Github className="h-4 w-4" />}>
                  GitHub
                </IconLink>

                <IconLink href="https://www.linkedin.com/in/pranav-b-gujjar" icon={<Linkedin className="h-4 w-4" />}>
                  LinkedIn
                </IconLink>

                <IconLink href="/Pranav_Gujjar_CV.pdf" icon={<FileText className="h-4 w-4" />}>
                  Resume
                </IconLink>

                <PrimaryLink href="#contact" icon={<Phone className="h-4 w-4" />}>
                  Contact
                </PrimaryLink>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Chip>~15% forecasting improvement</Chip>
                <Chip>10%+ cost reduction impact</Chip>
                <Chip>~30% automation gain</Chip>
                <Chip>ROC-AUC ~0.81 (Diabetes)</Chip>
                <Chip>APIs + Dashboards + CI/CD</Chip>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[260px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg sm:w-[320px]">
                <Image src="/profile.jpg" alt="Pranav Gujjar" width={900} height={900} className="h-auto w-full object-cover" priority />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 1) ABOUT */}
      <Section id="about" title="About" subtitle="Scannable summary + what you get when hiring me." icon={<Sparkles className="h-5 w-5 text-black/70" />}>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold text-black">Professional Summary</h3>
            <p className="mt-3 text-sm leading-7 text-black/70 text-justify">
              Machine Learning Engineer with an MSc in Data Science (Distinction) and experience delivering end-to-end ML systems (data preprocessing, feature engineering, model training, evaluation, and deployment). Strong in explainability, confidence/risk scoring, and production workflows (FastAPI, Streamlit, Docker, CI/CD). Worked across NLP, speech-to-text, computer vision, and time-series forecasting with a focus on reproducibility and measurable business impact.
            </p>
          </Card>

          <Card>
            <h3 className="text-base font-semibold text-black">What I Bring</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/70">
              <li>Production-ready delivery: APIs, dashboards, persisted artifacts, and clean structure.</li>
              <li>Trust-aware ML: calibration, confidence scoring, and human-in-the-loop routing.</li>
              <li>Business-first execution: measurable outcomes and clear decision-support outputs.</li>
              <li>Engineering mindset: reproducibility, training–inference parity, CI checks.</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* 2) WHY HIRE ME */}
      <Section id="why" title="Why Hire Me" subtitle="Impact + reliability + deployment readiness (short, evidence-based)." icon={<ShieldCheck className="h-5 w-5 text-black/70" />}>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="font-semibold">Production-ready delivery</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              End-to-end ML delivery: pipelines → artifacts → FastAPI inference → Streamlit dashboards, built for real usage (not notebook-only).
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold">Measurable ROI</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              Evidence from work: ~15% forecasting improvement, 10%+ operational cost reduction, ~30% automation gain — plus strong evaluation reporting.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold">Reliable & explainable ML</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              Confidence scoring, risk routing, and transparent dashboards designed to earn trust and reduce failure risk in production.
            </p>
          </Card>
        </div>
      </Section>

      {/* 2.5) KEY ACHIEVEMENTS */}
      <Section id="achievements" title="Key Achievements" subtitle="Recruiter-friendly highlights at a glance." icon={<BarChart3 className="h-5 w-5 text-black/70" />}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div key={a.title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
                  {a.icon}
                </div>
              </div>
              <div className="mt-3 text-sm font-semibold text-black">{a.title}</div>
              <div className="mt-1 text-sm leading-6 text-black/60">{a.note}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* 3) EXPERIENCE */}
      <Section id="experience" title="Experience" subtitle="Expandable roles — easy to add more later." icon={<Briefcase className="h-5 w-5 text-black/70" />}>
        <div className="space-y-4">
          {experience.map((job, idx) => (
            <Collapsible
              key={job.role}
              title={`${job.role}${job.company ? ` · ${job.company}` : ""}`}
              subtitle={job.period}
              defaultOpen={idx === 0}
            >
              <ul className="list-disc space-y-2 pl-5 text-sm text-black/70">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </Collapsible>
          ))}
        </div>
      </Section>

      {/* 4) SKILLS */}
      <Section id="skills" title="Skills" subtitle="Expandable categories — recruiter scan + ATS coverage." icon={<Wrench className="h-5 w-5 text-black/70" />}>
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, idx) => (
            <Collapsible key={g.title} title={g.title} subtitle={g.subtitle} defaultOpen={idx === 0}>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Collapsible>
          ))}
        </div>
      </Section>

      {/* 5) PROJECTS */}
      <Section id="projects" title="Projects" subtitle="Clean cards + expandable evidence (screenshots, highlights, architecture)." icon={<FolderGit2 className="h-5 w-5 text-black/70" />}>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
              {p.coverImage ? (
                <div className="relative aspect-[16/9] w-full bg-black/[0.02]">
                  <Image
                    src={p.coverImage}
                    alt={`${p.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : null}

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
                      {p.icon ?? <FolderGit2 className="h-5 w-5 text-black/70" />}
                    </div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <a
                      href={p.links.code}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
                    >
                      <Code2 className="h-4 w-4" />
                      Code
                    </a>

                    {p.links.demo ? (
                      <a
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    ) : null}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-7 text-black/70">{p.description}</p>

                {p.badges?.length ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.badges.map((b) => (
                      <Tag key={b.label}>
                        <span className="inline-flex items-center gap-2">
                          <span className="text-black/60">{b.icon}</span>
                          {b.label}
                        </span>
                      </Tag>
                    ))}
                  </div>
                ) : null}

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {/* Collapsible "Read more" */}
                <div className="mt-6">
                  <details className="group rounded-2xl border border-black/10 bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3">
                      <span className="text-sm font-semibold text-black/80">Read more (evidence, screenshots, architecture)</span>
                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/60 shadow-sm transition group-open:rotate-180">
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </summary>

                    <div className="px-4 pb-4">
                      {p.screenshots?.length ? (
                        <div className="mt-2">
                          <p className="text-xs font-semibold text-black/60">Screenshots</p>
                          <div className="mt-3 grid grid-cols-4 gap-3">
                            {p.screenshots.slice(0, 4).map((src) => (
                              <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-black/[0.02]">
                                <Image src={src} alt={`${p.title} screenshot`} fill className="object-cover" sizes="(max-width: 1024px) 25vw, 12vw" />
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {p.highlights?.length ? (
                        <div className="mt-5">
                          <p className="text-xs font-semibold text-black/60">Highlights</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/70">
                            {p.highlights.map((h) => (
                              <li key={h}>{h}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}

                      {p.architecture?.length ? (
                        <div className="mt-5">
                          <p className="text-xs font-semibold text-black/60">Architecture</p>
                          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/70">
                            {p.architecture.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 6) EDUCATION */}
      <Section id="education" title="Education" subtitle="Academic foundation aligned to applied ML engineering." icon={<GraduationCap className="h-5 w-5 text-black/70" />}>
        <div className="space-y-4">
          {education.map((e) => (
            <Card key={e.degree}>
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-sm text-black/60">{e.school}</p>
                </div>
                <p className="text-sm text-black/60">{e.period}</p>
              </div>

              {e.notes?.length ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-black/70">
                  {e.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              ) : null}
            </Card>
          ))}
        </div>
      </Section>

      {/* 7) CERTIFICATIONS */}
      <Section id="certifications" title="Certifications & Courses" subtitle="ML-first grouping for recruiter scanning." icon={<Award className="h-5 w-5 text-black/70" />}>
        <Card>
          <p className="text-sm leading-7 text-black/70">
            Selected certificates from my training portfolio. Full list is available on LinkedIn and my GitHub certificates repository.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <IconLink href="https://www.linkedin.com/in/pranav-b-gujjar/details/certifications/" icon={<Linkedin className="h-4 w-4" />}>
              LinkedIn (full list)
            </IconLink>

            <IconLink href="https://github.com/Gujjar-Pranav/Data-Science-Traning-Certificates" icon={<Github className="h-4 w-4" />}>
              GitHub certificates repo
            </IconLink>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {certGroups.map((g, idx) => (
              <Collapsible key={g.title} title={g.title} subtitle={`${g.items.length} items`} defaultOpen={idx === 0}>
                <div className="grid gap-2">
                  {g.items.map((cert) => (
                    <div key={cert} className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70">
                      {cert}
                    </div>
                  ))}
                </div>
              </Collapsible>
            ))}
          </div>
        </Card>
      </Section>

      {/* 8) CONTACT */}
      <Section id="contact" title="Contact" subtitle="Fastest way to reach me: email or WhatsApp." icon={<Mail className="h-5 w-5 text-black/70" />}>
        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 text-sm text-black/70">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-black/60" />
                <a className="underline decoration-black/20 underline-offset-4 hover:text-black" href="mailto:mr.pranavgujjar@gmail.com">
                  mr.pranavgujjar@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-black/60" />
                <a className="underline decoration-black/20 underline-offset-4 hover:text-black" href="tel:+919008913366">
                  +91 90089 13366 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-black/60" />
                <span>Bangalore, India (open to relocation & remote)</span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-black/70">
              <div className="flex items-center gap-3">
                <Github className="h-4 w-4 text-black/60" />
                <a className="underline decoration-black/20 underline-offset-4 hover:text-black" href="https://github.com/Gujjar-Pranav" target="_blank" rel="noreferrer">
                  github.com/Gujjar-Pranav
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-black/60" />
                <a className="underline decoration-black/20 underline-offset-4 hover:text-black" href="https://www.linkedin.com/in/pranav-b-gujjar" target="_blank" rel="noreferrer">
                  linkedin.com/in/pranav-b-gujjar
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-black/60" />
                <a className="underline decoration-black/20 underline-offset-4 hover:text-black" href="/Pranav_Gujjar_CV.pdf" target="_blank" rel="noreferrer">
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-black/10 py-10 text-center text-sm text-black/50">© {new Date().getFullYear()} Pranav Gujjar</footer>

      {/* Floating AI chat (keep it here so it overlays the site properly) */}
      <PortfolioChat />
    </div>
  );
}
