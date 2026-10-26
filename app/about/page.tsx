"use client";

import Shell from "../components/site/Shell";
import {
  experience,
  education,
  certGroups,
} from "../components/portfolio/data";

export default function About() {
  return (
    <Shell>
      <div className="site-container about-page">
        {/* Page introduction */}
        <header className="about-header">
          <div>
            <p className="eyebrow">ABOUT / PROFESSIONAL BACKGROUND</p>
            <h1 className="about-title">
              Engineering with <span>purpose.</span>
            </h1>
          </div>

          <p className="about-intro">
            I connect machine learning research, production engineering, and
            practical product decisions. My work spans real-time computer
            vision, NLP, analytics, and intelligent applications.
          </p>
        </header>

        {/* Featured professional engineering story */}
        <section
          className="mb-8 rounded-xl border border-[#dfe7f3] bg-[#f8faff] px-6 py-6 sm:px-8"
          aria-labelledby="about-featured-work"
        >
          <p className="text-[10px] font-bold uppercase tracking-[.14em] text-[#315db6]">
            From product vision to working MVP
          </p>

          <h2
            id="about-featured-work"
            className="mt-3 text-[clamp(1.35rem,2.4vw,1.8rem)] font-semibold leading-tight tracking-[-.04em] text-[#172238]"
          >
            Engineering AI products beyond the model.
          </h2>

          <div className="mt-4 grid gap-4 text-[13px] leading-7 text-[#617188] lg:grid-cols-2 lg:gap-8">
            <p>
              At ForceField Training.AI, a UK startup, I helped translate
              the founder&apos;s vision and Figma designs into a working
              AI movement-intelligence platform. My engineering work spans
              frontend, backend, real-time Computer Vision, movement
              validation, adaptive voice coaching, and secure athlete
              and coach workflows.
            </p>

            <p>
              I designed the infrastructure around startup economics:
              browser-based AI inference, Vercel Pro, and Supabase Free,
              with an upgrade path as usage grows. The first MVP is now
              being tested in the UK market by more than 60 players.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#e2e9f3] pt-4">
            <span className="text-[11px] font-semibold text-[#315db6]">
              End-to-end AI engineering
            </span>
            <span className="text-[11px] font-semibold text-[#526784]">
              60+ MVP players
            </span>
            <span className="text-[11px] font-semibold text-[#526784]">
              Cost-conscious architecture
            </span>

            <a
              href="/projects/forcefield-ai-movement-intelligence-platform"
              className="text-[11px] font-bold text-[#315db6] hover:underline hover:underline-offset-4 sm:ml-auto"
            >
              Explore ForceField case study ↗
            </a>
          </div>
        </section>

        {/* Professional experience */}
        <section className="about-section" id="experience">
          <div className="about-section-header">
            <div>
              <p className="eyebrow">01 / CAREER</p>
              <h2>Professional experience</h2>
            </div>
            <span className="about-section-count">
              {String(experience.length).padStart(2, "0")} ROLES
            </span>
          </div>

          <div className="about-experience-list">
            {experience.map((item, index) => (
              <article
                className="about-experience-item"
                key={`${item.company}-${item.role}-${index}`}
              >
                <div className="about-experience-meta">
                  <span className="about-role-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="about-period">{item.period}</span>
                </div>

                <div className="about-experience-content">
                  <h3>{item.role}</h3>
                  <p className="about-company">{item.company}</p>

                  <ul className="about-bullet-list">
                    {item.bullets.map((bullet, bulletIndex) => (
                      <li key={`${index}-${bulletIndex}`}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="about-section" id="education">
          <div className="about-section-header">
            <div>
              <p className="eyebrow">02 / ACADEMIC BACKGROUND</p>
              <h2>Education</h2>
            </div>
          </div>

          <div className="about-education-list">
            {education.map((item, index) => (
              <article
                className="about-education-item"
                key={`${item.degree}-${index}`}
              >
                <div className="about-education-meta">
                  <span className="about-period">{item.period}</span>
                </div>

                <div className="about-education-content">
                  <h3>{item.degree}</h3>
                  <p className="about-company">{item.school}</p>

                  {item.notes && item.notes.length > 0 && (
                    <ul className="about-bullet-list">
                      {item.notes.map((note, noteIndex) => (
                        <li key={noteIndex}>{note}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="about-section" id="certifications">
          <div className="about-section-header">
            <div>
              <p className="eyebrow">03 / CONTINUOUS LEARNING</p>
              <h2>Selected credentials</h2>
            </div>
          </div>

          <div className="about-credentials-grid">
            {certGroups.map((group, index) => (
              <article
                className="about-credential-group"
                key={`${group.title}-${index}`}
              >
                <div className="about-credential-heading">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{group.title}</h3>
                </div>

                <ul>
                  {group.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="about-endnote">
          <span>
            Applied machine learning. Thoughtful engineering. Measurable impact.
          </span>
          <a href="/projects">Explore selected projects ↗</a>
        </div>
      </div>
    </Shell>
  );
}
