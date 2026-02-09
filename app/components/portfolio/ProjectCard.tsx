"use client";

import Image from "next/image";
import { useCallback, useMemo, useState } from "react";
import type { Project } from "./types";
import { Tag } from "./ui";
import {
  Code2,
  ExternalLink,
  FileText,
  FolderGit2,
  ChevronDown,
} from "lucide-react";
import Lightbox from "./Lightbox";

export default function ProjectCard({ p }: { p: Project }) {
  const images = useMemo(() => p.screenshots ?? [], [p.screenshots]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAt = useCallback((idx: number) => {
    setActiveIndex(idx);
    setLightboxOpen(true);
  }, []);

  const close = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm">
        {p.coverImage ? (
          <div className="relative aspect-[16/9] w-full bg-black/[0.02]">
            <Image
              src={p.coverImage}
              alt={`${p.title} cover`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ) : null}

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
                {p.icon ?? <FolderGit2 className="h-5 w-5 text-black/70" />}
              </div>
              <h3 className="text-lg font-semibold">{p.title}</h3>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <a
                href={p.links.code}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
              >
                <Code2 className="h-4 w-4" />
                Code
              </a>

              {p.links.demo ? (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
                >
                  <ExternalLink className="h-4 w-4" />
                  Demo
                </a>
              ) : null}

              {p.links.docs ? (
                <a
                  href={p.links.docs}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
                >
                  <FileText className="h-4 w-4" />
                  API Docs
                </a>
              ) : null}
            </div>
          </div>

          <p className="mt-3 text-sm leading-7 text-black/70">
            {p.description}
          </p>

          {p.badges?.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {p.badges.map((b) => (
                <Tag key={b.label}>
                  <span className="inline-flex items-center gap-2">
                    <span className="text-black/60">{b.icon}</span>
                    {b.label}
                  </span>
                </Tag>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-6">
            <details className="group rounded-2xl border border-black/10 bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3">
                <span className="text-sm font-semibold text-black/80">
                  Read more (evidence, screenshots, architecture)
                </span>
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/60 shadow-sm transition group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </summary>

              <div className="px-4 pb-4">
                {images.length ? (
                  <div className="mt-2">
                    <p className="text-xs font-semibold text-black/60">
                      Screenshots
                    </p>

                    <div className="mt-3 grid grid-cols-4 gap-3">
                      {images.slice(0, 4).map((src, i) => (
                        <button
                          type="button"
                          key={`${src}-${i}`}
                          onClick={() => openAt(i)}
                          className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10 bg-black/[0.02] focus:ring-2 focus:ring-black/20 focus:outline-none"
                          aria-label={`Open ${p.title} screenshot ${i + 1}`}
                        >
                          <Image
                            src={src}
                            alt={`${p.title} screenshot`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 25vw, 12vw"
                          />
                        </button>
                      ))}
                    </div>

                    <p className="mt-2 text-xs text-black/50">
                      Tip: click to zoom, swipe or use arrows for next/prev.
                    </p>
                  </div>
                ) : null}

                {p.highlights?.length ? (
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-black/60">
                      Highlights
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/70">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {p.architecture?.length ? (
                  <div className="mt-5">
                    <p className="text-xs font-semibold text-black/60">
                      Architecture
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-black/70">
                      {p.architecture.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>
            </details>
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        images={images}
        index={activeIndex}
        title={p.title}
        onClose={close}
        onIndexChange={setActiveIndex}
      />
    </>
  );
}
