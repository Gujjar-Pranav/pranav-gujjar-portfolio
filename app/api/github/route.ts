// app/api/github/route.ts
import { NextResponse } from "next/server";

export const revalidate = 60; // cache this API route for 60 seconds (server-side)

export async function GET() {
  try {
    const username = "Gujjar-Pranav";

    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
        // Next.js caching control:
        next: { revalidate: 60 }, // same as export const revalidate
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: `GitHub API failed: ${res.status}` },
        { status: 200 }
      );
    }

    const data = await res.json();

    const repos = (data || []).map((r: any) => ({
      name: r.name,
      url: r.html_url,
      description: r.description ?? "",
      stars: r.stargazers_count ?? 0,
      language: r.language ?? "",
      updatedAt: r.updated_at ?? "",
      fork: !!r.fork,
    }));

    // Hide forks (optional)
    const filtered = repos.filter((r: any) => !r.fork);

    return NextResponse.json({ ok: true, repos: filtered }, { status: 200 });
  } catch (e: any) {
    return NextResponse.json(
      { ok: false, error: e?.message ?? "Unknown error" },
      { status: 200 }
    );
  }
}
