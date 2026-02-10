"use client";

import { useMemo, useState } from "react";

import PortfolioChat from "./components/PortfolioChat";
import Image from "next/image";

import {
  Github,
  Linkedin,
  FileText,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Briefcase,
  Wrench,
  FolderGit2,
  GraduationCap,
  Award,
  BarChart3,
} from "lucide-react";

import {
  Card,
  Chip,
  Collapsible,
  Container,
  IconLink,
  NavLink,
  PrimaryLink,
  Section,
  Tag,
  ClickTag,
  Modal,
  ProjectListLink,
} from "./components/portfolio/ui";

import ProjectCard from "./components/portfolio/ProjectCard";

import {
  NAV,
  achievements,
  certGroups,
  education,
  experience,
  projects,
  skillGroups,
} from "./components/portfolio/data";

type ProjectMini = { title: string; href?: string };

function normalizeSkillKey(s: string) {
  return s.toLowerCase().trim();
}

export default function Home() {
  //  Skill → Related Projects mapping (edit here only in future)
  // Keys must match EXACT skill text shown in the UI (case-insensitive handled).
  const SKILL_TO_PROJECTS: Record<string, ProjectMini[]> = useMemo(
    () => ({
      // --- Core ---
      python: [
        {
          title: "ReviewSense AI",
          href: "https://github.com/Gujjar-Pranav/review-sense-ai",
        },
        {
          title: "Diabetes Prediction App",
          href: "https://github.com/Gujjar-Pranav/Diabetes_Prediction_App",
        },
        {
          title: "Retina-AI",
          href: "https://github.com/Gujjar-Pranav/retina-ai",
        },
        {
          title: "Glass Identification",
          href: "https://github.com/Gujjar-Pranav/Glass_Identification",
        },
        {
          title: "Meeting Task Assignment",
          href: "https://github.com/Gujjar-Pranav/Meeting_task_assignment",
        },
      ],
      sql: [{ title: "Forecasting work (Vertexblue internship)" }],

      "scikit-learn": [
        {
          title: "ReviewSense AI",
          href: "https://github.com/Gujjar-Pranav/review-sense-ai",
        },
        {
          title: "Diabetes Prediction App",
          href: "https://github.com/Gujjar-Pranav/Diabetes_Prediction_App",
        },
        {
          title: "Glass Identification",
          href: "https://github.com/Gujjar-Pranav/Glass_Identification",
        },
      ],

      pytorch: [
        {
          title: "Retina-AI",
          href: "https://github.com/Gujjar-Pranav/retina-ai",
        },
      ],

      tensorflow: [{ title: "Retinal vessel segmentation (MSc dissertation)" }],

      fastapi: [
        {
          title: "Strategic Intelligence Stack",
          href: "https://github.com/Gujjar-Pranav/strategic-intelligence-stack",
        },
        {
          title: "Glass Identification",
          href: "https://github.com/Gujjar-Pranav/Glass_Identification",
        },
      ],

      streamlit: [
        {
          title: "ReviewSense AI",
          href: "https://github.com/Gujjar-Pranav/review-sense-ai",
        },
        {
          title: "Diabetes Prediction App",
          href: "https://github.com/Gujjar-Pranav/Diabetes_Prediction_App",
        },
        {
          title: "Retina-AI",
          href: "https://github.com/Gujjar-Pranav/retina-ai",
        },
        {
          title: "Glass Identification",
          href: "https://github.com/Gujjar-Pranav/Glass_Identification",
        },
      ],

      docker: [
        {
          title: "Glass Identification",
          href: "https://github.com/Gujjar-Pranav/Glass_Identification",
        },
      ],

      // --- NLP & Speech ---
      "tf-idf": [
        {
          title: "ReviewSense AI",
          href: "https://github.com/Gujjar-Pranav/review-sense-ai",
        },
      ],
      "linear svm": [
        {
          title: "ReviewSense AI",
          href: "https://github.com/Gujjar-Pranav/review-sense-ai",
        },
      ],
      "speech-to-text (whisper)": [
        {
          title: "Meeting Task Assignment",
          href: "https://github.com/Gujjar-Pranav/Meeting_task_assignment",
        },
      ],
      "rule-based nlp": [
        {
          title: "Meeting Task Assignment",
          href: "https://github.com/Gujjar-Pranav/Meeting_task_assignment",
        },
        {
          title: "Retina-AI (workflow/rules)",
          href: "https://github.com/Gujjar-Pranav/retina-ai",
        },
      ],

      // --- CV ---
      "u-net": [{ title: "Retinal vessel segmentation (MSc dissertation)" }],
      "image segmentation": [
        { title: "Retinal vessel segmentation (MSc dissertation)" },
      ],

      // --- Full-stack / dashboards ---
      "next.js": [
        {
          title: "Strategic Intelligence Stack",
          href: "https://github.com/Gujjar-Pranav/strategic-intelligence-stack",
        },
      ],
      plotly: [
        {
          title: "ReviewSense AI",
          href: "https://github.com/Gujjar-Pranav/review-sense-ai",
        },
      ],

      // --- MLOps ---
      "ci/cd (github actions)": [
        {
          title: "Retina-AI",
          href: "https://github.com/Gujjar-Pranav/retina-ai",
        },
        {
          title: "Glass Identification",
          href: "https://github.com/Gujjar-Pranav/Glass_Identification",
        },
        {
          title: "ReviewSense AI",
          href: "https://github.com/Gujjar-Pranav/review-sense-ai",
        },
      ],
    }),
    [],
  );

  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [activeSkill, setActiveSkill] = useState<string>("");
  const [activeProjects, setActiveProjects] = useState<ProjectMini[]>([]);

  function openSkillProjects(skillLabel: string) {
    const key = normalizeSkillKey(skillLabel);
    const related = SKILL_TO_PROJECTS[key];

    // If no mapping exists, keep current UI behavior (no modal).
    if (!related || related.length === 0) return;

    setActiveSkill(skillLabel);
    setActiveProjects(related);
    setSkillModalOpen(true);
  }

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
              {NAV.map((n) => (
                <NavLink
                  key={n.href}
                  href={n.href}
                  label={n.label}
                  icon={n.icon}
                />
              ))}
            </nav>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <section id="home" className="py-14">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="mt-3 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Pranav Gujjar
              </h1>

              <p className="mt-2 text-xl font-medium text-gray-700">
                Machine Learning Engineer{" "}
                <span className="text-gray-400">·</span> Data Scientist
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
                End-to-end machine learning systems engineered for reliability,
                explainability, and production deployment from data pipelines to
                APIs and dashboards.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <IconLink
                  href="mailto:mr.pranavgujjar@gmail.com"
                  icon={<Mail className="h-4 w-4" />}
                >
                  Email
                </IconLink>

                <IconLink
                  href="https://wa.me/919008913366"
                  icon={<MessageCircle className="h-4 w-4" />}
                >
                  WhatsApp
                </IconLink>

                <IconLink
                  href="https://github.com/Gujjar-Pranav"
                  icon={<Github className="h-4 w-4" />}
                >
                  GitHub
                </IconLink>

                <IconLink
                  href="https://www.linkedin.com/in/pranav-b-gujjar"
                  icon={<Linkedin className="h-4 w-4" />}
                >
                  LinkedIn
                </IconLink>

                <IconLink
                  href="/Pranav_Gujjar_CV.pdf"
                  icon={<FileText className="h-4 w-4" />}
                >
                  Resume
                </IconLink>

                <PrimaryLink
                  href="#contact"
                  icon={<Phone className="h-4 w-4" />}
                >
                  Contact
                </PrimaryLink>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <Chip>FastAPI + Streamlit + Next.js</Chip>
                <Chip>CI + Typecheck + Prettier</Chip>
                <Chip>Confidence scoring + calibration</Chip>
                <Chip>Grad-CAM explainability</Chip>
                <Chip>Offline Whisper automation</Chip>
                <Chip>~15% forecasting improvement</Chip>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[260px] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-lg sm:w-[320px]">
                <Image
                  src="/profile.jpg"
                  alt="Pranav Gujjar"
                  width={900}
                  height={900}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        title="About"
        subtitle="Scannable summary + what you get when hiring me."
        icon={<Sparkles className="h-5 w-5 text-black/70" />}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="text-base font-semibold text-black">
              Professional Summary
            </h3>
            <p className="mt-3 text-justify text-sm leading-7 text-black/70">
              Machine Learning Engineer (MSc Data Science, Distinction) focused
              on building production-ready ML systems end-to-end: data →
              modeling → evaluation → deployment. I’ve shipped decision
              intelligence and segmentation systems (Next.js + FastAPI),
              trust-aware NLP dashboards with calibrated confidence/risk
              routing, clinical-style CV workflows with explainability
              (Grad-CAM) and PDF reporting, and fully local speech-to-text
              automation pipelines. Strong in reproducibility, clear evaluation,
              training–inference parity, and deployment using FastAPI,
              Streamlit, Docker, and CI/CD.
            </p>
          </Card>

          <Card>
            <h3 className="text-base font-semibold text-black">What I Bring</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/70">
              <li>
                End-to-end ML delivery: pipelines, artifacts, APIs (FastAPI),
                and dashboards (Streamlit/Next.js).
              </li>
              <li>
                Trust-aware systems: calibration, confidence scoring, risk
                routing, and explainable outputs (e.g., Grad-CAM).
              </li>
              <li>
                Production mindset: reproducibility, training–inference parity,
                versioned outputs, and clean repo structure.
              </li>
              <li>
                Hands-on breadth: NLP, speech-to-text automation, computer
                vision, forecasting, and decision intelligence.
              </li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* WHY */}
      <Section
        id="why"
        title="Why Hire Me"
        subtitle="Impact + reliability + deployment readiness."
        icon={<ShieldCheck className="h-5 w-5 text-black/70" />}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <h3 className="font-semibold">Production-ready delivery</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              Ship complete systems: data pipelines → model training/eval →
              persisted artifacts → FastAPI inference → Streamlit/Next.js
              dashboards, with clear structure and deployment readiness.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold">Measurable ROI</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              Evidence-led execution: ~15% forecasting improvement, 10%+ cost
              reduction support, and ~30% automation gains— paired with strong
              evaluation reporting and decision-focused outputs.
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold">Reliable & explainable ML</h3>
            <p className="mt-2 text-sm leading-7 text-black/70">
              Build trust into ML: calibrated confidence, quality gates,
              explainability (e.g., Grad-CAM), and human-in-the-loop routing to
              reduce risk in production.
            </p>
          </Card>
        </div>
      </Section>

      {/* ACHIEVEMENTS */}
      <Section
        id="achievements"
        title="Key Achievements"
        subtitle="Highlights at a glance."
        icon={<BarChart3 className="h-5 w-5 text-black/70" />}
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
                  {a.icon}
                </div>
              </div>
              <div className="mt-3 text-sm font-semibold text-black">
                {a.title}
              </div>
              <div className="mt-1 text-sm leading-6 text-black/60">
                {a.note}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* EXPERIENCE */}
      <Section
        id="experience"
        title="Experience"
        subtitle="Expandable roles."
        icon={<Briefcase className="h-5 w-5 text-black/70" />}
      >
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

      {/* SKILLS */}
      <Section
        id="skills"
        title="Skills"
        subtitle="Expandable categories. Click a skill to see related projects."
        icon={<Wrench className="h-5 w-5 text-black/70" />}
      >
        <div className="grid gap-4 md:grid-cols-2">
          {skillGroups.map((g, idx) => (
            <Collapsible
              key={g.title}
              title={g.title}
              subtitle={g.subtitle}
              defaultOpen={idx === 0}
            >
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => {
                  const hasLinks = Boolean(
                    SKILL_TO_PROJECTS[normalizeSkillKey(t)]?.length,
                  );

                  // If there is no mapping, keep the same Tag behavior (no click, no visual change).
                  if (!hasLinks) return <Tag key={t}>{t}</Tag>;

                  return (
                    <ClickTag
                      key={t}
                      onClick={() => openSkillProjects(t)}
                      title="Click to see related projects"
                      aria-label={`Show projects related to ${t}`}
                    >
                      {t}
                    </ClickTag>
                  );
                })}
              </div>
            </Collapsible>
          ))}
        </div>
      </Section>

      {/* ✅ Skill → Projects modal */}
      <Modal
        open={skillModalOpen}
        title={`Projects using: ${activeSkill}`}
        onClose={() => setSkillModalOpen(false)}
      >
        <div className="space-y-3">
          <div className="text-sm text-black/70">Related projects:</div>

          <div className="space-y-2">
            {activeProjects.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-black/10 bg-white px-4 py-3"
              >
                <ProjectListLink title={p.title} href={p.href} />
              </div>
            ))}
          </div>

          <div className="pt-2 text-xs text-black/50">
            Tip: add/update mappings inside <code>SKILL_TO_PROJECTS</code> in{" "}
            <code>page.tsx</code>.
          </div>
        </div>
      </Modal>

      {/* PROJECTS */}
      <Section
        id="projects"
        title="Projects"
        subtitle="Clean cards + expandable evidence (screenshots, highlights, architecture)."
        icon={<FolderGit2 className="h-5 w-5 text-black/70" />}
      >
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>

      {/* EDUCATION */}
      <Section
        id="education"
        title="Education"
        subtitle="Academic foundation aligned to applied ML engineering."
        icon={<GraduationCap className="h-5 w-5 text-black/70" />}
      >
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

      {/* CERTIFICATIONS */}
      <Section
        id="certifications"
        title="Certifications & Courses"
        subtitle="ML-first grouping."
        icon={<Award className="h-5 w-5 text-black/70" />}
      >
        <Card>
          <p className="text-sm leading-7 text-black/70">
            Selected certificates from my training portfolio. Full list is
            available on LinkedIn and my GitHub certificates repository.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <IconLink
              href="https://www.linkedin.com/in/pranav-b-gujjar/details/certifications/"
              icon={<Linkedin className="h-4 w-4" />}
            >
              LinkedIn (full list)
            </IconLink>

            <IconLink
              href="https://github.com/Gujjar-Pranav/Data-Science-Traning-Certificates"
              icon={<Github className="h-4 w-4" />}
            >
              GitHub certificates repo
            </IconLink>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {certGroups.map((g, idx) => (
              <Collapsible
                key={g.title}
                title={g.title}
                subtitle={`${g.items.length} items`}
                defaultOpen={idx === 0}
              >
                <div className="grid gap-2">
                  {g.items.map((cert) => (
                    <div
                      key={cert}
                      className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black/70"
                    >
                      {cert}
                    </div>
                  ))}
                </div>
              </Collapsible>
            ))}
          </div>
        </Card>
      </Section>

      {/* CONTACT */}
      <Section
        id="contact"
        title="Contact"
        subtitle="Fastest way to reach me: email or WhatsApp."
        icon={<Mail className="h-5 w-5 text-black/70" />}
      >
        <Card>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3 text-sm text-black/70">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-black/60" />
                <a
                  className="underline decoration-black/20 underline-offset-4 hover:text-black"
                  href="mailto:mr.pranavgujjar@gmail.com"
                >
                  mr.pranavgujjar@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-black/60" />
                <a
                  className="underline decoration-black/20 underline-offset-4 hover:text-black"
                  href="tel:+919008913366"
                >
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
                <a
                  className="underline decoration-black/20 underline-offset-4 hover:text-black"
                  href="https://github.com/Gujjar-Pranav"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/Gujjar-Pranav
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Linkedin className="h-4 w-4 text-black/60" />
                <a
                  className="underline decoration-black/20 underline-offset-4 hover:text-black"
                  href="https://www.linkedin.com/in/pranav-b-gujjar"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/pranav-b-gujjar
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FileText className="h-4 w-4 text-black/60" />
                <a
                  className="underline decoration-black/20 underline-offset-4 hover:text-black"
                  href="/Pranav_Gujjar_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Resume (PDF)
                </a>
              </div>
            </div>
          </div>
        </Card>
      </Section>

      <footer className="border-t border-black/10 py-10 text-center text-sm text-black/50">
        <p className="text-xs text-black/40">
          Built with Next.js • FastAPI • Streamlit • Vercel • CI/CD • TypeScript
        </p>
        © {new Date().getFullYear()} Pranav Gujjar
      </footer>

      <PortfolioChat />
    </div>
  );
}
