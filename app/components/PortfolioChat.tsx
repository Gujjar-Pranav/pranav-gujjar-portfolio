"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Fuse from "fuse.js";
import { MessageCircle, X, Send, Sparkles, HelpCircle } from "lucide-react";
import { KNOWLEDGE_BASE, LINKS, type KBItem } from "@/data/knowledge";

type Msg = { role: "user" | "assistant"; text: string };

type GhRepo = {
  name: string;
  url: string;
  description: string;
  stars: number;
  language: string;
  updatedAt: string;
};

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s.+-]/g, " ").replace(/\s+/g, " ").trim();
}

function looksLikeJustGithub(q: string) {
  const n = normalize(q);
  return n === "github" || n === "github link" || n === "github profile" || n === "github url";
}

function looksLikeLinkedIn(q: string) {
  const n = normalize(q);
  return n === "linkedin" || n.includes("linkedin link") || n.includes("linkedin url");
}

function looksLikeCv(q: string) {
  const n = normalize(q);
  return n === "cv" || n === "resume" || n.includes("download cv") || n.includes("download resume");
}

function wantsRepoList(q: string) {
  const n = normalize(q);
  return (
    n.includes("repo list") ||
    n.includes("repos list") ||
    n.includes("list repos") ||
    n.includes("show repos") ||
    n.includes("show repositories") ||
    n.includes("github repos") ||
    n.includes("githhub repo list")||
    n.includes("repo")||
    n === "all repo" ||
    n === "all repos" ||
    n === "all repositories"
  );
}

function wantsRepoDetails(q: string) {
  const n = normalize(q);
  return (
    n.includes("repo details") ||
    n.includes("repository details") ||
    n.includes("details of repo") ||
    n.includes("details of repository") ||
    n.includes("about repo") ||
    n.includes("about repository")
  );
}

function extractRepoName(q: string) {
  const n = normalize(q);
  return n
    .replace("repo details", "")
    .replace("repository details", "")
    .replace("details of repo", "")
    .replace("details of repository", "")
    .replace("about repo", "")
    .replace("about repository", "")
    .trim();
}

function outOfScopeReply() {
  return (
    `I can help with Pranav’s portfolio topics:\n\n` +
    `- **Projects** (details + GitHub/demo links)\n` +
    `- **Skills / strengths**\n` +
    `- **Experience / achievements (ROI)**\n` +
    `- **Education / certifications**\n` +
    `- **Contact / relocation**\n` +
    `- **Links** (GitHub, LinkedIn, CV)\n\n` +
    `Try: “projects”, “ReviewSense AI”, “education”, “certifications”, “repo list”, “download cv”, “contact”.`
  );
}

export default function PortfolioChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      text:
        "Hi! I’m **Pranav’s portfolio assistant** (free + offline).\n\nAsk about **projects, repo list/details, skills, strengths, achievements, experience, education, certifications, contact, GitHub/LinkedIn, or CV download**.",
    },
  ]);

  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, showHelp]);

  function closeAndReset() {
    setOpen(false);
    setShowHelp(false);
    setInput("");
    setMessages([
      {
        role: "assistant",
        text:
          "Hi! I’m **Pranav’s portfolio assistant** (free + offline).\n\nAsk about **projects, repo list/details, skills, strengths, achievements, experience, education, certifications, contact, GitHub/LinkedIn, or CV download**.",
      },
    ]);
  }

  // Fuse: typo handling + flexible queries
  const kbFuse = useMemo(() => {
    return new Fuse(KNOWLEDGE_BASE, {
      includeScore: true,
      threshold: 0.45,
      keys: [
        { name: "title", weight: 0.55 },
        { name: "keywords", weight: 0.45 },
      ],
    });
  }, []);

  // Quick map for exact id access
  const kbById = useMemo(() => {
    const map: Record<string, KBItem> = {};
    for (const item of KNOWLEDGE_BASE) map[item.id] = item;
    return map;
  }, []);

  async function fetchRepos(): Promise<GhRepo[] | null> {
    try {
      const res = await fetch("/api/github", { cache: "no-store" });
      const json = await res.json();
      if (!json?.ok) return null;
      return (json.repos || []) as GhRepo[];
    } catch {
      return null;
    }
  }

  function formatRepoList(repos: GhRepo[], max = 25) {
    const top = repos.slice(0, max);

    const lines = top.map((r) => {
      const meta = [r.language || "—", `★ ${r.stars}`].filter(Boolean).join(" · ");
      const desc = r.description ? `\n  ${r.description}` : "";
      return `- **${r.name}** (${meta})\n  ${r.url}${desc}`;
    });

    return `**Latest GitHub repos (real-time):**\n\n${lines.join("\n\n")}\n\nFull profile: ${LINKS.githubProfile}`;
  }

  function formatRepoDetails(repo: GhRepo) {
    const meta = [repo.language || "—", `★ ${repo.stars}`].filter(Boolean).join(" · ");
    return `**${repo.name}** (${meta})\n\n- Repo: ${repo.url}\n${repo.description ? `- About: ${repo.description}\n` : ""}- Updated: ${repo.updatedAt}`;
  }

  function isShortGenericQuery(q: string) {
    const n = normalize(q);
    return n === "project" || n === "projects" || n === "repo" || n === "repos";
  }

  async function buildReply(userText: string): Promise<string> {
    const q = normalize(userText);

    // Direct link intents
    if (looksLikeJustGithub(userText)) return `GitHub: ${LINKS.githubProfile}`;
    if (looksLikeLinkedIn(userText)) return `LinkedIn: ${LINKS.linkedin}`;
    if (looksLikeCv(userText)) {return `**Download Resume (PDF):** [Pranav_Gujjar_CV.pdf](${LINKS.resumePdf})`;}


    // Repo list only when user asks for list
    if (wantsRepoList(userText)) {
      const repos = await fetchRepos();
      if (!repos) return `I couldn’t fetch repos right now.\n\nGitHub profile: ${LINKS.githubProfile}`;
      return formatRepoList(repos, 25);
    }

    // Repo details only when user asks for details
    if (wantsRepoDetails(userText)) {
      const repos = await fetchRepos();
      if (!repos) return `I couldn’t fetch repos right now.\n\nGitHub profile: ${LINKS.githubProfile}`;

      const repoName = extractRepoName(userText);
      if (!repoName) return `Tell me the repo name.\nExample: “repo details review-sense-ai”`;

      const repoFuse = new Fuse(repos, {
        includeScore: true,
        threshold: 0.45,
        keys: ["name", "description"],
      });

      const match = repoFuse.search(repoName)[0]?.item;
      if (!match) return `I couldn’t find that repo. Try “repo list” or paste the repo name.`;

      return formatRepoDetails(match);
    }

    // Contact intent (quick)
    if (q.includes("contact") || q.includes("whatsapp") || q.includes("call") || q.includes("phone") || q.includes("email")) {
      return kbById["contact"]?.answer ?? `WhatsApp: ${LINKS.whatsapp}\nCall: ${LINKS.phone}\nEmail: ${LINKS.email}`;
    }

    // "projects" should show the projects KB (NOT fallback)
    if (q === "projects" || q === "project" || q.includes("project list")) {
      return kbById["projects"]?.answer ?? "Ask a project name for details.";
    }

    // Prevent rigid fallback on generic short queries: try KB first
    if (isShortGenericQuery(userText)) {
      const r = kbFuse.search(userText)[0]?.item;
      return r?.answer ?? outOfScopeReply();
    }

    // Try matching specific project names even with typos (Fuse KB)
    const kbHit = kbFuse.search(userText)[0]?.item;
    if (kbHit) return kbHit.answer;

    return outOfScopeReply();
  }

  async function send() {
    const text = input.trim();
    if (!text) return;

    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");

    const reply = await buildReply(text);
    setMessages((m) => [...m, { role: "assistant", text: reply }]);
  }

  const TOPIC_CHIPS = [
    "projects",
    "review sense ai",
    "diabatic app",
    "repo list",
    "repo details review-sense-ai",
    "education",
    "certifications",
    "contact whatsapp",
    "download cv",
    "links",
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-black/90"
        aria-label="Open portfolio chat"
      >
        <MessageCircle className="h-5 w-5" />
        Ask Pranav
      </button>

      {open ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-end p-4 sm:items-center sm:justify-center">
          <div className="absolute inset-0 bg-black/30" onClick={closeAndReset} aria-hidden="true" />

          <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
            <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-black/70" />
                <div>
                  <div className="text-sm font-semibold">Ask Pranav (Offline)</div>
                  <div className="text-xs text-black/60">Portfolio + CV knowledge</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setShowHelp((s) => !s)}
                  className="rounded-lg p-2 hover:bg-black/[0.04]"
                  aria-label="Show help"
                >
                  <HelpCircle className="h-5 w-5 text-black/70" />
                </button>

                <button
                  onClick={closeAndReset}
                  className="rounded-lg p-2 hover:bg-black/[0.04]"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5 text-black/70" />
                </button>
              </div>
            </div>

            {showHelp ? (
              <div className="border-b border-black/10 px-4 py-3">
                <div className="mb-2 text-xs font-semibold text-black/60">Examples (optional):</div>
                <div className="flex flex-wrap gap-2">
                  {TOPIC_CHIPS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setInput(t)}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 hover:border-black/20"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="max-h-[55vh] space-y-3 overflow-auto px-4 py-4">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                      m.role === "user" ? "bg-black text-white" : "bg-black/[0.04] text-black"
                    }`}
                  >
                    {m.role === "assistant" ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          a: ({ children, ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-black/20 underline-offset-4 hover:text-black"
                            >
                              {children}
                            </a>
                          ),
                          ul: ({ children }) => <ul className="list-disc pl-5">{children}</ul>,
                          li: ({ children }) => <li className="mt-1">{children}</li>,
                        }}
                      >
                        {m.text}
                      </ReactMarkdown>
                    ) : (
                      m.text
                    )}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <div className="border-t border-black/10 p-3">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => (e.key === "Enter" ? send() : null)}
                  placeholder="Ask about Pranav’s portfolio..."
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-black/30"
                />
                <button
                  onClick={send}
                  className="inline-flex items-center justify-center rounded-xl bg-black px-3 py-2 text-white hover:bg-black/90"
                  aria-label="Send"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-2 text-[11px] text-black/50">
                Offline assistant. GitHub repo list/details are fetched via <code>/api/github</code>.
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
