Pranav Gujjar – Machine Learning Engineer Portfolio

A modern, production-focused portfolio built with Next.js (App Router) showcasing real-world Machine Learning engineering, deployment-ready projects, and an offline AI portfolio assistant with real-time GitHub integration.

Live Demo (Vercel):
https://your-project-name.vercel.app

Overview

This portfolio is designed to reflect how ML systems are built and shipped in production, not just modeled in notebooks.

Key goals:

Demonstrate end-to-end ML delivery

Highlight measurable business impact

Provide recruiter-friendly navigation

Enable interactive exploration via an offline AI assistant

Key Features

Production-Ready ML Portfolio

End-to-end projects with modeling, evaluation, deployment, and UI

FastAPI, Streamlit, Docker, CI/CD patterns reflected in content

Offline AI Portfolio Assistant

No paid APIs, no LLM calls

Deterministic answers from a curated knowledge base

Fuzzy search and typo handling using Fuse.js

Real-Time GitHub Integration

Fetches repositories live from GitHub REST API

Supports:

Repo list

Repo details

Direct links

No hardcoded repo data

Recruiter & ATS Friendly

Clear section ordering

Keyword-rich skills and experience

Clean, scannable layout

Mobile-Responsive UI

Optimized for desktop and mobile viewing

Lightweight and fast

Tech Stack

Frontend

Next.js 14 (App Router)

React

TypeScript

Tailwind CSS

AI / Search Logic

Fuse.js (fuzzy matching)

Structured knowledge base (TypeScript)

Backend

Next.js API Routes

GitHub REST API

Deployment

Vercel (free tier)

Automatic CI/CD from GitHub

Architecture
High-Level Architecture Flow

User interacts with the portfolio UI or chat assistant

Next.js App Router renders pages and components

PortfolioChat component processes user intent

Fuse.js matches queries against the knowledge base

For GitHub requests:

/api/github fetches live data from GitHub REST API

Responses are rendered using Markdown for clickable links

App is deployed and served via Vercel CDN

Project Structure

app/

Core Next.js App Router directory

app/page.tsx

Main landing page

Hero, sections, and chat trigger

app/layout.tsx

Global layout and metadata

app/api/github/route.ts

Server-side GitHub API integration

Fetches repositories in real time

components/PortfolioChat.tsx

Offline AI assistant

Intent detection and fuzzy matching

data/knowledge.ts

Structured portfolio knowledge base

Projects, experience, education, certifications, links

public/

Static assets

public/Pranav_Gujjar_CV.pdf

Downloadable resume used by chat and UI

Configuration Files

package.json

tsconfig.json

tailwind.config.ts

next.config.js

Offline AI Assistant – Capabilities

The assistant can answer questions about:

Projects (details, GitHub links, demos)

Skills and technical stack

Experience and achievements (ROI metrics)

Education and certifications

Contact information

GitHub repositories (real-time)

Resume download

Example queries:

“ReviewSense AI project details”

“Repo list”

“Why hire Pranav”

“Download CV”

“Contact Pranav on WhatsApp”

If a query is out of scope, the assistant gently redirects the user.

Screenshots

Add your screenshots to public/screenshots/ and reference them here:

![Homepage](public/screenshots/homepage.png)
![Portfolio Chat](public/screenshots/chat.png)
![Projects Section](public/screenshots/projects.png)

Getting Started (Local Development)

Install dependencies:

npm install


Run the development server:

npm run dev


Open in browser:

http://localhost:3000

Deployment

This project is deployed on Vercel.

Deployment steps:

Push code to GitHub

Import repository into Vercel

Set environment variable (optional):

GITHUB_TOKEN (to avoid API rate limits)

Deploy

No custom domain is required.

Why This Portfolio Stands Out

Shows engineering maturity, not just models

Demonstrates deployment readiness

Uses real data and real APIs

Includes an interactive assistant

Fully free, offline, and deterministic

Author

Pranav Gujjar
Machine Learning Engineer / Data Scientist

GitHub: https://github.com/Gujjar-Pranav

LinkedIn: https://www.linkedin.com/in/pranav-b-gujjar