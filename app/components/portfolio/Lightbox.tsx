"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef } from "react";

type LightboxProps = {
  open: boolean;
  images: string[];
  index: number;
  title?: string;
  onClose: () => void;
  onIndexChange: (nextIndex: number) => void;
};

export default function Lightbox({ open, images, index, title, onClose, onIndexChange }: LightboxProps) {
  const startX = useRef<number | null>(null);
  const lastX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const count = images.length;

  const safeIndex = useMemo(() => {
    if (!count) return 0;
    const i = index % count;
    return i < 0 ? i + count : i;
  }, [index, count]);

  const src = images[safeIndex] ?? null;

  const goPrev = useCallback(() => {
    if (!count) return;
    onIndexChange((safeIndex - 1 + count) % count);
  }, [count, onIndexChange, safeIndex]);

  const goNext = useCallback(() => {
    if (!count) return;
    onIndexChange((safeIndex + 1) % count);
  }, [count, onIndexChange, safeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, goPrev, goNext]);

  // Basic swipe (touch + trackpad pointer gestures)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    startX.current = e.clientX;
    lastX.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    lastX.current = e.clientX;
  };

  const onPointerUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const sx = startX.current;
    const lx = lastX.current;
    startX.current = null;
    lastX.current = null;

    if (sx == null || lx == null) return;

    const delta = lx - sx;
    const threshold = 60; // px swipe threshold
    if (Math.abs(delta) < threshold) return;

    if (delta > 0) goPrev();
    else goNext();
  };

  if (!open || !src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
      onMouseDown={(e) => {
        // close only if clicking the backdrop
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
    >
      <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 border-b border-black/10 bg-white px-4 py-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-black">{title ?? "Screenshot"}</div>
            <div className="text-xs text-black/60">
              {safeIndex + 1} / {count}
            </div>
          </div>

          <button
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 shadow-sm hover:bg-black/[0.02]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Image stage */}
        <div
          className="relative flex w-full items-center justify-center bg-black/[0.02]"
          style={{ height: "min(78vh, 820px)" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          {/* Prev */}
          {count > 1 ? (
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black/70 shadow-sm hover:bg-white"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          ) : null}

          {/* Next */}
          {count > 1 ? (
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black/70 shadow-sm hover:bg-white"
              aria-label="Next screenshot"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          ) : null}

          {/* The image (zoom-friendly via object-contain) */}
          <div className="relative h-full w-full">
            <Image
              src={src}
              alt={title ? `${title} screenshot ${safeIndex + 1}` : `Screenshot ${safeIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
            />
          </div>
        </div>

        {/* Hint footer (optional) */}
        {count > 1 ? (
          <div className="border-t border-black/10 bg-white px-4 py-3 text-center text-xs text-black/60">
            Swipe ← / → or use arrow keys to navigate
          </div>
        ) : null}
      </div>
    </div>
  );
}
