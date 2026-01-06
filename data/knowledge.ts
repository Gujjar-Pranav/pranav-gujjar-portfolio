// data/knowledge.ts

export type KBItem = {
  id: string;
  title: string;
  keywords: string[];
  answer: string;
  link?: string;
  demo?: string;
};

export const LINKS = {
  githubProfile: "https://github.com/Gujjar-Pranav",
  linkedin: "https://www.linkedin.com/in/pranav-b-gujjar",
  resumePdf: "/Pranav_Gujjar_CV.pdf",
  whatsapp: "https://wa.me/919008913366",
  phone: "tel:+919008913366",
  email: "mailto:mr.pranavgujjar@gmail.com",
  linkedinCertifications: "https://www.linkedin.com/in/pranav-b-gujjar/details/certifications/",
  githubCertificatesRepo: "https://github.com/Gujjar-Pranav/Data-Science-Traning-Certificates",
};

export const KNOWLEDGE_BASE: KBItem[] = [
  {
    id: "about",
    title: "About",
    keywords: ["about", "summary", "profile", "who is pranav", "who are you", "tell me about", "bio", "introduction"],
    answer:
      "Pranav Gujjar is a Machine Learning Engineer / Data Scientist (MSc Data Science, Distinction) building production-ready ML systems end-to-end: data → modeling → evaluation → deployment. Strong in explainability, confidence/risk scoring, and deployment using FastAPI, Streamlit, Docker, and CI/CD.",
  },

  {
    id: "whyhire",
    title: "Why hire",
    keywords: ["why hire", "hire", "why should we hire", "strength", "strengths", "why pranav", "value", "fit"],
    answer:
      "Why hire Pranav:\n- Production-ready delivery: APIs + dashboards + persisted artifacts\n- Reliable ML: calibration, confidence scoring, risk routing, human-in-the-loop\n- Measurable ROI: forecasting gains, cost reduction, automation improvements\n- Engineering mindset: reproducibility, training–inference parity, CI checks",
  },

  {
    id: "experience",
    title: "Experience",
    keywords: ["experience", "exp", "work", "intern", "internship", "freelance", "career", "job"],
    answer:
      "Experience:\n- ML Engineer — Freelance (Aug 2025 – Present): end-to-end ML pipelines, FastAPI inference, Streamlit dashboards, reproducible artifacts.\n- Data Science Intern — Vertexblue (Jun 2022 – Dec 2022): ~15% forecasting improvement, 10%+ cost reduction support, ~30% automation gain.",
  },

  {
    id: "achievements",
    title: "Achievements / ROI",
    keywords: ["achievement", "achievements", "roi", "impact", "metrics", "results", "numbers", "forecasting", "cost reduction", "automation"],
    answer:
      "Achievements / ROI:\n- ~15% forecasting improvement\n- 10%+ operational cost reduction contribution\n- ~30% reduction in manual processing via automation\n- Production ML systems: FastAPI + Streamlit + Docker + CI/CD",
  },

  // ✅ NEW: EDUCATION
  {
    id: "education",
    title: "Education",
    keywords: [
      "education",
      "educa",
      "edcation",
      "eduction",
      "study",
      "studies",
      "degree",
      "msc",
      "master",
      "university",
      "uea",
      "east anglia",
      "dissertation",
    ],
    answer:
      "Education:\n- MSc in Data Science (Distinction) — University of East Anglia, UK (Sept 2023 – Sept 2024)\n  • Focus: Machine Learning, NLP, Computer Vision, Time Series\n  • Dissertation: Retinal vessel segmentation (U-Net / Dense U-Net)",
  },

  // NEW: CERTIFICATIONS
  {
    id: "certifications",
    title: "Certifications",
    keywords: [
      "certification",
      "certifications",
      "certi",
      "certificate",
      "certificates",
      "courses",
      "training",
      "course",
      "upskilling",
      "linkedin certifications",
      "github certificates",
    ],
    answer:
      "Certifications & Courses:\n- LinkedIn certifications: " +
      LINKS.linkedinCertifications +
      "\n- GitHub certificates repo: " +
      LINKS.githubCertificatesRepo +
      "\n\nExamples (high-level):\n- Machine Learning & Deep Learning (Python & R)\n- Intermediate Machine Learning\n- Machine Learning A–Z\n- Python for Data Science & ML\n- PostgreSQL Essentials\n- Data Visualization",
  },

  {
    id: "links",
    title: "Links",
    keywords: [
      "links",
      "link",
      "link details",
      "all links",
      "profiles",
      "social",
      "github link",
      "linkedin link",
      "resume link",
      "cv link",
      "certifications link",
      "certificate link",
    ],
    answer:
      `Links:\n` +
      `- GitHub: ${LINKS.githubProfile}\n` +
      `- LinkedIn: ${LINKS.linkedin}\n` +
      `- Download CV: ${LINKS.resumePdf}\n` +
      `- WhatsApp: ${LINKS.whatsapp}\n` +
      `- Call: ${LINKS.phone}\n` +
      `- Email: ${LINKS.email}\n` +
      `- LinkedIn Certifications: ${LINKS.linkedinCertifications}\n` +
      `- GitHub Certificates Repo: ${LINKS.githubCertificatesRepo}`,
  },

  {
    id: "contact",
    title: "Contact",
    keywords: ["contact", "email", "phone", "call", "whatsapp", "reach", "message"],
    answer:
      `Contact Pranav:\n- Email: ${LINKS.email}\n- WhatsApp: ${LINKS.whatsapp}\n- Call: ${LINKS.phone}\n- Location: Bangalore, India (open to relocation & remote)`,
  },

  {
    id: "skills",
    title: "Skills",
    keywords: ["skills", "skill", "stack", "tech", "mlops", "deployment", "ats", "tools"],
    answer:
      "Key skills (ATS-friendly):\n- Languages: Python, SQL\n- ML: classification/regression/clustering, feature engineering, evaluation (ROC-AUC, Precision/Recall, F1)\n- DL: TensorFlow, PyTorch\n- NLP/Speech: TF-IDF, Linear SVM, rule-based NLP, Whisper ASR\n- Deployment/MLOps: FastAPI, Streamlit, Docker, CI/CD (GitHub Actions), model persistence",
  },

  {
    id: "projects",
    title: "Projects",
    keywords: ["projects", "project", "portfolio", "work samples", "case studies", "project list"],
    answer:
      "Projects (quick list):\n- ReviewSense AI — sentiment + calibrated confidence/risk routing (GitHub + demo)\n- Glass Identification — stacking ensemble + FastAPI + Docker + CI/CD\n- Diabetes Prediction App — probability + risk level + PDF/Excel workflow (GitHub + demo)\n- Meeting Task Assignment — offline Whisper STT → tasks JSON\n\nAsk any project name (e.g., “ReviewSense AI”) for full details + link.",
  },

  // --- Specific projects ---
  {
    id: "reviewsense",
    title: "ReviewSense AI",
    keywords: ["reviewsense", "review sense", "review-sense", "sentiment dashboard", "confidence", "calibration", "risk routing"],
    link: "https://github.com/Gujjar-Pranav/review-sense-ai",
    demo: "https://review-sense-ai-mvvd48vdsasmys7ecjenpa.streamlit.app/",
    answer:
      "ReviewSense AI:\n- TF-IDF + Linear SVM + probability calibration\n- Confidence & risk scoring for auto-approve vs human review\n- Tricky review detection (negation, mixed sentiment)\n- Streamlit dashboard with insights\n\nGitHub: https://github.com/Gujjar-Pranav/review-sense-ai\nDemo: https://review-sense-ai-mvvd48vdsasmys7ecjenpa.streamlit.app/",
  },

  {
    id: "glass",
    title: "Glass Identification",
    keywords: ["glass", "glass identification", "stacking", "smote", "fastapi", "docker", "cicd", "glass_identification"],
    link: "https://github.com/Gujjar-Pranav/Glass_Identification",
    answer:
      "Glass Identification:\n- Stacking ensemble + SMOTE (imbalance handling)\n- FastAPI backend + Streamlit UI\n- Docker / Compose + CI/CD automation\n\nGitHub: https://github.com/Gujjar-Pranav/Glass_Identification",
  },

  {
    id: "diabetes",
    title: "Diabetes Prediction App",
    keywords: [
      "diabetes",
      "diabetic",
      "diabatic",
      "doiabativs",
      "diabetes app",
      "diabetes prediction",
      "logistic regression",
      "pdf report",
      "excel export",
      "patient history",
      "diabetes_prediction_app",
    ],
    link: "https://github.com/Gujjar-Pranav/Diabetes_Prediction_App",
    demo: "https://diabetespredictionapp-ffcfgbmn3xxxe9ah7dl3rw.streamlit.app/",
    answer:
      "Diabetes Prediction App:\n- Logistic Regression + StandardScaler\n- Probability output + risk levels (Low/Med/High)\n- PDF report + patient history + Excel export\n\nGitHub: https://github.com/Gujjar-Pranav/Diabetes_Prediction_App\nDemo: https://diabetespredictionapp-ffcfgbmn3xxxe9ah7dl3rw.streamlit.app/",
  },

  {
    id: "meeting",
    title: "Meeting Task Assignment",
    keywords: ["meeting", "whisper", "audio", "task assignment", "stt", "asr", "json tasks", "meeting_task_assignment"],
    link: "https://github.com/Gujjar-Pranav/Meeting_task_assignment",
    answer:
      "Meeting Task Assignment:\n- Offline Whisper speech-to-text + rule-based NLP\n- Meeting audio → transcript → tasks_output.json\n- Fully local (no cloud)\n\nGitHub: https://github.com/Gujjar-Pranav/Meeting_task_assignment",
  },
];
