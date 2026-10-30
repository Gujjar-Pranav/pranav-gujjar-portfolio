/**
 * Business value and engineering evidence for portfolio projects.
 *
 * Numerical model results are drawn from documented project/CV
 * evaluations. Business outcomes are not implied unless measured.
 */
export const projectEvidence: Record<
  string,
  {
    category: string;
    value: string;
    problem: string;
    facts: [string, string, string];
  }
> = {
  "ForceField — AI Movement Intelligence Platform": {
    category: "Professional AI product / UK startup",
    problem:
      "A UK startup needed to translate its founder's vision into a usable AI movement-intelligence product while controlling infrastructure costs. Manual movement assessment was difficult to scale, and dedicated server-side inference would increase cost and latency. The engineering challenge was to deliver a high-quality MVP combining real-time Computer Vision, adaptive coaching, secure athlete workflows, and a sustainable infrastructure strategy.",
    value:
      "Delivered the first UK-market MVP with 60+ players, taking end-to-end engineering ownership across Figma implementation, frontend, backend, real-time AI detection, and voice coaching. Designed cost-conscious infrastructure using Vercel Pro, Supabase Free, browser-based inference, and secure athlete/coach access.",
    facts: [
      "60+ MVP players",
      "80%+ less manual assessment",
      "20+ exercise modules",
    ],
  },
  "Strategic Intelligence Stack": {
    problem:
      "Customer data often sits across reports and dashboards without a clear path from segmentation to actionable decisions. Business teams need a repeatable way to understand customer groups, compare commercial patterns, and evaluate alternative strategies.",
    category: "Decision intelligence",
    value:
      "Transform customer data into actionable business insights. Discover customer segments, understand commercial patterns, and evaluate what-if strategies without retraining models.",
    facts: ["Customer segmentation", "What-if simulation", "FastAPI + Next.js"],
  },

  "ReviewSense AI": {
    problem:
      "Large volumes of customer reviews are difficult to assess consistently. Sentiment predictions alone are not enough when ambiguous or high-risk feedback requires human attention.",
    category: "NLP / customer intelligence",
    value:
      "Turn unstructured customer feedback into prioritized, decision-ready insights using sentiment classification, calibrated confidence, and risk-aware review routing.",
    facts: [
      "85.55% test accuracy",
      "Confidence calibration",
      "Risk-based routing",
    ],
  },

  "Diabetes Prediction App": {
    problem:
      "Raw predictive-model outputs can be difficult to interpret and document. A practical decision-support workflow needs consistent preprocessing, understandable risk categories, and accessible reporting.",
    category: "Predictive healthcare ML",
    value:
      "Demonstrate how predictive machine learning can support structured diabetes risk assessment through probability estimates, risk categories, patient history, and exportable reports.",
    facts: ["0.813 ROC-AUC", "Risk stratification", "PDF + Excel reporting"],
  },

  "Retina-AI": {
    problem:
      "An image classifier alone does not provide a complete retinal screening workflow. A usable prototype must also consider image quality, prediction confidence, explainability, user access, and structured reporting.",
    category: "Medical computer vision",
    value:
      "Explore an end-to-end AI-assisted retinal screening prototype that combines image classification, quality checks, explainability, role-based workflows, and automated reporting.",
    facts: [
      "PyTorch inference",
      "Grad-CAM explainability",
      "Clinical workflow prototype",
    ],
  },

  "Glass Identification": {
    problem:
      "A trained classification model is difficult to reuse when preprocessing, model artifacts, and inference logic are disconnected. A deployable application needs a reproducible pipeline and a consistent prediction interface.",
    category: "Production-oriented ML",
    value:
      "Build reliable classification workflows by connecting ensemble machine learning, reproducible preprocessing, REST APIs, containerized services, and automated deployment checks.",
    facts: ["90.70% test accuracy", "Stacking ensemble", "FastAPI + Docker"],
  },

  "Meeting Task Assignment": {
    problem:
      "Meeting discussions can contain action items that are difficult to capture and organize manually. An offline transcription and extraction workflow can help turn spoken instructions into structured task records.",
    category: "Speech / NLP automation",
    value:
      "Convert meeting audio into structured, actionable task data using offline speech recognition and NLP extraction, without sending recordings to external inference services.",
    facts: ["Offline Whisper ASR", "Task extraction", "Structured JSON output"],
  },
};
