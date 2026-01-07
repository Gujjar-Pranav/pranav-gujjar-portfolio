Pranav Gujjar – Machine Learning Engineer Portfolio

A modern, production-focused portfolio built with Next.js (App Router) showcasing real-world Machine Learning engineering, deployment-ready projects, and an offline AI portfolio assistant with real-time GitHub integration.

Live Demo (Vercel):
https://pranav-gujjar-portfolio.vercel.app

### Overview

This portfolio is designed to reflect how ML systems are built and shipped in production, not just modeled in notebooks.

### Key goals:

- Demonstrate end-to-end ML delivery

- Highlight measurable business impact

- Provide recruiter-friendly navigation

- Enable interactive exploration via an offline AI assistant

### Key Features

1. Production-Ready ML Portfolio

- End-to-end projects with modeling, evaluation, deployment, and UI

- FastAPI, Streamlit, Docker, CI/CD patterns reflected in content

2. Offline AI Portfolio Assistant

- No paid APIs, no LLM calls

- Deterministic answers from a curated knowledge base

- Fuzzy search and typo handling using Fuse.js

3. Real-Time GitHub Integration

- Fetches repositories live from GitHub REST API

- Supports:

  - Repo list

  - Repo details

  - Direct links

- No hardcoded repo data

4. Recruiter & ATS Friendly

- Clear section ordering

- Keyword-rich skills and experience

- Clean, scannable layout

5. Mobile-Responsive UI

- Optimized for desktop and mobile viewing

- Lightweight and fast

### Tech Stack

1.Frontend

- Next.js 14 (App Router)

- React

- TypeScript

- Tailwind CSS

2. AI / Search Logic

- Fuse.js (fuzzy matching)

- Structured knowledge base (TypeScript)

3. Backend

- Next.js API Routes

- GitHub REST API

4. Deployment

- Vercel (free tier)

- Automatic CI/CD from GitHub

### Architecture
High-Level Architecture Flow

- User interacts with the portfolio UI or chat assistant

- Next.js App Router renders pages and components

- PortfolioChat component processes user intent

- Fuse.js matches queries against the knowledge base

- For GitHub requests:

/api/github fetches live data from GitHub REST API

- Responses are rendered using Markdown for clickable links

- App is deployed and served via Vercel CDN

### Project Structure

1. app/

 Core Next.js App Router directory

2. app/page.tsx

 Main landing page

 Hero, sections, and chat trigger

3. app/layout.tsx

 Global layout and metadata

4. app/api/github/route.ts

 Server-side GitHub API integration

 Fetches repositories in real time

5. components/PortfolioChat.tsx

 Offline AI assistant

 Intent detection and fuzzy matching

6. data/knowledge.ts

 Structured portfolio knowledge base

 Projects, experience, education, certifications, links

7. public/

Static assets

8. public/Pranav_Gujjar_CV.pdf

Downloadable resume used by chat and UI

9. Configuration Files

 package.json

 tsconfig.json

 tailwind.config.ts

 next.config.js

### Offline AI Assistant – Capabilities

#### The assistant can answer questions about:

1. Projects (details, GitHub links, demos)

2. Skills and technical stack

3. Experience and achievements (ROI metrics)

4. Education and certifications

5. Contact information

6. GitHub repositories (real-time)

7. Resume download

#### Example queries:

“ReviewSense AI project details”

“Repo list”

“Why hire Pranav”

“Download CV”

“Contact Pranav on WhatsApp”

If a query is out of scope, the assistant gently redirects the user.

### Screenshots
<img width="300" height="300" alt="Screenshot 2026-01-06 at 23 24 20" src="https://github.com/user-attachments/assets/019d8664-741c-49eb-a1e4-a0241b9be9f7" />
<img width="300" height="300" alt="Screenshot 2026-01-06 at 23 25 46" src="https://github.com/user-attachments/assets/f9c000c5-fc6c-4964-9fac-55770cf55571" />
<img width="300" height="300" alt="Screenshot 2026-01-06 at 23 26 02" src="https://github.com/user-attachments/assets/d72f7626-96e6-49e9-9520-a6da9a448687" />
<img width="300" height="300" alt="Screenshot 2026-01-06 at 23 24 41" src="https://github.com/user-attachments/assets/aecbd181-5450-4654-8438-7489a7856165" />
<img width="300" height="300" alt="Screenshot 2026-01-06 at 23 24 59" src="https://github.com/user-attachments/assets/01f5852b-601b-4461-9a92-b4668b646572" />
<img width="300" height="200" alt="Screenshot 2026-01-06 at 23 25 17" src="https://github.com/user-attachments/assets/ec42cfae-d2ed-44a3-87d0-c0972cec6acd" />
<img width="300" height="300" alt="Screenshot 2026-01-06 at 23 25 34" src="https://github.com/user-attachments/assets/86fa3755-6013-4b8b-978c-67d62739244c" />


### Getting Started (Local Development)

1. Install dependencies:

npm install


2. Run the development server:

npm run dev


3. Open in browser:

http://localhost:3000

### Deployment

This project is deployed on Vercel.

Deployment steps:

1. Push code to GitHub

2. Import repository into Vercel

3. Set environment variable (optional):

 GITHUB_TOKEN (to avoid API rate limits)

4. Deploy

No custom domain is required.

### Why This Portfolio Stands Out

1. Shows engineering maturity, not just models

2. Demonstrates deployment readiness

3. Uses real data and real APIs

4. Includes an interactive assistant

5. Fully free, offline, and deterministic

### Author

Pranav Gujjar

Machine Learning Engineer / Data Scientist

GitHub: https://github.com/Gujjar-Pranav

LinkedIn: https://www.linkedin.com/in/pranav-b-gujjar
