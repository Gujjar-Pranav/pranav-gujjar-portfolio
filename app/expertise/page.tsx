import Link from "next/link";
import Shell from "../components/site/Shell";

const expertise = [
  {
    title: "Applied Machine Learning",
    description:
      "Designing practical machine learning systems, from feature engineering and model selection to evaluation, confidence calibration, and reproducible inference.",
    skills: [
      "Python",
      "scikit-learn",
      "PyTorch",
      "TensorFlow",
      "Feature Engineering",
      "Model Evaluation",
      "Confidence Calibration",
    ],
    projects: [
      {
        title: "Strategic Intelligence Stack",
        slug: "strategic-intelligence-stack",
      },
      { title: "Diabetes Prediction App", slug: "diabetes-prediction-app" },
      { title: "Glass Identification", slug: "glass-identification" },
    ],
  },
  {
    title: "Computer Vision",
    description:
      "Engineering real-time Computer Vision systems for pose estimation, biomechanical movement assessment, and adaptive coaching, alongside medical-image segmentation and explainable visual inference.",
    skills: [
      "MediaPipe Pose",
      "Pose Estimation",
      "Movement Validation",
      "Biomechanical Analysis",
      "Real-Time Inference",
      "U-Net",
      "Image Segmentation",
      "Grad-CAM",
      "CLAHE",
      "Dice / IoU",
    ],
    projects: [
      {
        title: "ForceField — AI Movement Intelligence Platform",
        slug: "forcefield-ai-movement-intelligence-platform",
      },
      { title: "Retina-AI", slug: "retina-ai" },
    ],
  },
  {
    title: "NLP, Speech & Voice Intelligence",
    description:
      "Engineering NLP and speech-processing pipelines alongside real-time text-to-speech guidance that converts exercise feedback into spoken coaching instructions.",
    skills: [
      "Text-to-Speech (TTS)",
      "Adaptive Voice Coaching",
      "Browser Speech Synthesis",
      "TF-IDF",
      "Linear SVM",
      "Text Preprocessing",
      "Sentiment Analysis",
      "Rule-based NLP",
      "Whisper",
    ],
    projects: [
      {
        title: "ForceField — AI Movement Intelligence Platform",
        slug: "forcefield-ai-movement-intelligence-platform",
      },
      { title: "ReviewSense AI", slug: "reviewsense-ai" },
      { title: "Meeting Task Assignment", slug: "meeting-task-assignment" },
    ],
  },
  {
    title: "Data & Production Engineering",
    description:
      "Delivering end-to-end AI products across frontend, backend, secure data architecture, inference, deployment, and cost-conscious infrastructure, alongside reproducible ML pipelines and APIs.",
    skills: [
      "Full-Stack Engineering",
      "Figma to Frontend",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Row-Level Security",
      "Vercel",
      "FastAPI",
      "REST APIs",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Reproducible Pipelines",
    ],
    projects: [
      {
        title: "ForceField — AI Movement Intelligence Platform",
        slug: "forcefield-ai-movement-intelligence-platform",
      },
      {
        title: "Strategic Intelligence Stack",
        slug: "strategic-intelligence-stack",
      },
      { title: "Glass Identification", slug: "glass-identification" },
    ],
  },
];

export default function Expertise() {
  return (
    <Shell>
      <main className="site-container compact-page">
        <header className="compact-header">
          <div>
            <p className="eyebrow">CAPABILITIES / ENGINEERING PRACTICE</p>
            <h1 className="compact-title">
              Engineering expertise<span className="accent-dot">.</span>
            </h1>
          </div>
          <p className="compact-lede">
            Applied AI expertise supported by practical engineering, technical
            methods, and working projects.
          </p>
        </header>

        <div className="expertise-list">
          {expertise.map((domain, index) => (
            <section className="expertise-row" key={domain.title}>
              <div className="expertise-label">
                <span className="section-index">
                  0{index + 1} / SPECIALIZATION
                </span>
                <h2>{domain.title}</h2>
                <p>{domain.description}</p>
              </div>

              <div className="expertise-body">
                <p className="micro-label">METHODS & TECHNOLOGIES</p>
                <div className="expertise-tags">
                  {domain.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <p className="micro-label evidence-heading">
                  RELATED ENGINEERING WORK
                </p>

                <div className="evidence-links">
                  {domain.projects.map((project) => (
                    <Link key={project.slug} href={`/projects/${project.slug}`}>
                      {project.title}
                      <span aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="expertise-footer">
          <div>
            <p className="micro-label">ADDITIONAL CAPABILITIES</p>
            <h2>Data & Analytics</h2>
          </div>

          <div className="expertise-tags">
            {[
              "pandas",
              "NumPy",
              "MongoDB",
              "Matplotlib",
              "Plotly",
              "Power BI",
              "Tableau",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>

        <div className="compact-bottom-link">
          <span>
            Explore how these capabilities come together in real applications.
          </span>
          <Link href="/projects">
            Explore projects <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </main>
    </Shell>
  );
}
