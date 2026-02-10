# Pranav Gujjar – Machine Learning Engineer Portfolio

A modern, production-focused portfolio built with Next.js (App Router) showcasing real-world Machine Learning engineering, deployment-ready projects, and an offline AI portfolio assistant with real-time GitHub integration.

## 🔗 Live Demo (Vercel):

https://pranav-gujjar-portfolio.vercel.app

## 📌 Overview

This portfolio reflects how ML systems are designed, built, evaluated, deployed, and maintained in production — not just modeled in notebooks.

## Core goals:

- Demonstrate end-to-end ML delivery

- Highlight measurable business impact

- Provide recruiter-friendly navigation

- Enable interactive exploration via an offline AI assistant

## ✨ Key Features

1. Production-Ready ML Portfolio
   - End-to-end projects (data → modeling → evaluation → deployment → UI)
   - FastAPI, Streamlit, Docker, CI/CD patterns reflected in real implementations
   - Architecture diagrams, screenshots, and highlights for each project

2. Offline AI Portfolio Assistant
   - No paid APIs, no LLM calls

   - Deterministic answers from a curated knowledge base

   - Fuzzy search + typo tolerance via Fuse.js

   - Supports skill → project mapping

3. Real-Time GitHub Integration
   - Live repository data via GitHub REST API:

   - Repository list

   - Repository details

   - Direct links

   - No hardcoded repo metadata.

4. Recruiter & ATS Friendly
   - Clear section ordering

   - Keyword-rich skills and experience

   - Clean, scannable layout

5. Mobile-Responsive UI
   - Optimized for desktop and mobile

   - Lightweight and fast

🛠 Tech Stack

- Frontend

- Next.js (App Router)

- React

- TypeScript

- Tailwind CSS

- AI / Search Logic

- Fuse.js (fuzzy matching)

- Structured TypeScript knowledge base

- Backend

- Next.js API Routes

- GitHub REST API

- Deployment

- Vercel (free tier)

- GitHub Actions CI

- Automatic deployments

🧱 Architecture

- High-Level Flow

- User interacts with portfolio UI or chat assistant

- Next.js App Router renders pages and components

- PortfolioChat processes user intent

- Fuse.js matches queries against the knowledge base

- GitHub requests are routed through /api/github

- Responses render via Markdown

- App is deployed globally via Vercel CDN

## 📁 Project Structure

- app/
  - page.tsx # Main landing page
  - layout.tsx # Global layout + metadata
  - api/github/route.ts # GitHub REST API integration

- components/
  - PortfolioChat.tsx # Offline AI assistant

- data/
  - knowledge.ts # Structured portfolio knowledge base

- public/
  - Pranav_Gujjar_CV.pdf # Downloadable resume

- Configuration:
  - package.json
  - tsconfig.json
  - tailwind.config.ts
  - next.config.ts

🤖 Offline AI Assistant – Capabilities

- The assistant answers questions about:

- Projects (details, GitHub links, demos)

- Skills and technical stack

- Experience and achievements (ROI metrics)

- Education and certifications

- Contact information

- GitHub repositories (real-time)

- Resume download

- Example queries:
  - “ReviewSense AI project details”

  - “Repo list”

  - “Why hire Pranav”

  - “Download CV”

  - “Contact Pranav on WhatsApp”

- Out-of-scope queries are gracefully redirected.

📸 Screenshots

(UI, dashboards, chat assistant, and projects)

<img width="300" alt="Screenshot" src="https://github.com/user-attachments/assets/019d8664-741c-49eb-a1e4-a0241b9be9f7" /> <img width="300" alt="Screenshot" src="https://github.com/user-attachments/assets/f9c000c5-fc6c-4964-9fac-55770cf55571" /> <img width="300" alt="Screenshot" src="https://github.com/user-attachments/assets/d72f7626-96e6-49e9-9520-a6da9a448687" /> <img width="300" alt="Screenshot" src="https://github.com/user-attachments/assets/aecbd181-5450-4654-8438-7489a7856165" /> <img width="300" alt="Screenshot" src="https://github.com/user-attachments/assets/01f5852b-601b-4461-9a92-b4668b646572" /> <img width="300" alt="Screenshot" src="https://github.com/user-attachments/assets/ec42cfae-d2ed-44a3-87d0-c0972cec6acd" /> <img width="300" alt="Screenshot" src="https://github.com/user-attachments/assets/86fa3755-6013-4b8b-978c-67d62739244c" />

## Getting Started (Local Development)

- npm install
- npm run dev
- Open:
- http://localhost:3000

## ☁ Deployment

- Hosted on Vercel.

### Steps:

- Push code to GitHub

- Import repo into Vercel

- (Optional) Set environment variable:

- GITHUB_TOKEN

- Deploy

- No custom domain required.

## ⭐ Why This Portfolio Stands Out

- Demonstrates full ML lifecycle ownership

- Shows deployment readiness

- Uses real APIs and real data

- Includes an interactive assistant

- Fully free, deterministic, and offline

## 👤 Author

Pranav Gujjar

Machine Learning Engineer / Data Scientist

- GitHub: https://github.com/Gujjar-Pranav

- LinkedIn: https://www.linkedin.com/in/pranav-b-gujjar
