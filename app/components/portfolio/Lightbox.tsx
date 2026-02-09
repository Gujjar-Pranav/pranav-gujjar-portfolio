"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

type Props = {
  open: boolean;
  images: string[];
  index: number;
  title?: string;
  onClose: () => void;
  onIndexChange: (next: number) => void;
};

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export default function Lightbox({ open, images, index, title, onClose, onIndexChange }: Props) {
  const hasImages = images?.length > 0;
  const safeIndex = useMemo(() => clamp(index, 0, Math.max(0, images.length - 1)), [index, images.length]);
  const src = hasImages ? images[safeIndex] : "";

  // Zoom + pan state
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  // Gesture refs
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const startTx = useRef(0);
  const startTy = useRef(0);

  const swipeStartX = useRef<number | null>(null);
  const lastTap = useRef<number>(0);

  // Pinch
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartScale = useRef(1);

  function resetView() {
    setScale(1);
    setTx(0);
    setTy(0);
  }

  function prev() {
    if (!images.length) return;
    resetView();
    onIndexChange((safeIndex - 1 + images.length) % images.length);
  }

  function next() {
    if (!images.length) return;
    resetView();
    onIndexChange((safeIndex + 1) % images.length);
  }

  function zoomIn() {
    setScale((s) => clamp(Number((s + 0.25).toFixed(2)), 1, 3));
  }

  function zoomOut() {
    setScale((s) => {
      const ns = clamp(Number((s - 0.25).toFixed(2)), 1, 3);
      if (ns === 1) {
        setTx(0);
        setTy(0);
      }
      return ns;
    });
  }

  function toggleZoomAtCenter() {
    setScale((s) => {
      const ns = s === 1 ? 2 : 1;
      if (ns === 1) {
        setTx(0);
        setTy(0);
      }
      return ns;
    });
  }

  // Close on ESC + keyboard nav
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, safeIndex, images.length]);

  // Reset zoom when opening or switching image
  useEffect(() => {
    if (!open) return;
    resetView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, safeIndex]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      {/* Backdrop */}
      <button
        aria-label="Close lightbox"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        type="button"
      />

      {/* Panel */}
      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-4 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white backdrop-blur">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold">
              {title ? title : "Screenshots"}{" "}
              {hasImages ? <span className="text-white/70">· {safeIndex + 1}/{images.length}</span> : null}
            </div>
            <div className="text-xs text-white/70">Swipe to navigate · wheel/double click to zoom</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={zoomOut}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 hover:bg-white/15"
              aria-label="Zoom out"
              title="Zoom out"
            >
              <ZoomOut className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={zoomIn}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 hover:bg-white/15"
              aria-label="Zoom in"
              title="Zoom in"
            >
              <ZoomIn className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/10 hover:bg-white/15"
              aria-label="Close"
              title="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-black/60">
          {/* Prev/Next */}
          {images.length > 1 ? (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/15"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-white/10 bg-white/10 p-3 text-white backdrop-blur hover:bg-white/15"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          {/* Image area */}
          <div
            ref={containerRef}
            className="absolute inset-0 flex items-center justify-center touch-pan-y"
            style={{
              // allow custom gestures
              touchAction: scale > 1 ? "none" : "pan-y",
            }}
            onWheel={(e) => {
              e.preventDefault();
              const delta = e.deltaY;
              if (delta > 0) zoomOut();
              else zoomIn();
            }}
            onPointerDown={(e) => {
              (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
              pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

              // double tap / double click
              const now = Date.now();
              if (now - lastTap.current < 280) {
                toggleZoomAtCenter();
              }
              lastTap.current = now;

              // pinch start
              if (pointers.current.size === 2) {
                const pts = Array.from(pointers.current.values());
                const dx = pts[0].x - pts[1].x;
                const dy = pts[0].y - pts[1].y;
                pinchStartDist.current = Math.hypot(dx, dy);
                pinchStartScale.current = scale;
                dragging.current = false;
                return;
              }

              // start drag
              dragging.current = true;
              startX.current = e.clientX;
              startY.current = e.clientY;
              startTx.current = tx;
              startTy.current = ty;

              // swipe start (only when not zoomed)
              if (scale === 1) swipeStartX.current = e.clientX;
            }}
            onPointerMove={(e) => {
              if (!pointers.current.has(e.pointerId)) return;
              pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

              // pinch zoom
              if (pointers.current.size === 2 && pinchStartDist.current) {
                const pts = Array.from(pointers.current.values());
                const dx = pts[0].x - pts[1].x;
                const dy = pts[0].y - pts[1].y;
                const dist = Math.hypot(dx, dy);
                const ratio = dist / pinchStartDist.current;
                const nextScale = clamp(pinchStartScale.current * ratio, 1, 3);
                setScale(nextScale);
                if (nextScale === 1) {
                  setTx(0);
                  setTy(0);
                }
                return;
              }

              // pan when zoomed
              if (dragging.current && scale > 1) {
                const dx = e.clientX - startX.current;
                const dy = e.clientY - startY.current;
                setTx(startTx.current + dx);
                setTy(startTy.current + dy);
              }
            }}
            onPointerUp={(e) => {
              pointers.current.delete(e.pointerId);

              if (pointers.current.size < 2) {
                pinchStartDist.current = null;
              }

              // swipe to change image only when not zoomed
              if (scale === 1 && swipeStartX.current !== null) {
                const dx = e.clientX - swipeStartX.current;
                swipeStartX.current = null;

                if (Math.abs(dx) > 60 && images.length > 1) {
                  if (dx < 0) next();
                  else prev();
                }
              }

              dragging.current = false;
            }}
          >
            {hasImages ? (
              <img
                src={src}
                alt={title ? `${title} screenshot ${safeIndex + 1}` : `Screenshot ${safeIndex + 1}`}
                className="max-h-[85vh] max-w-[95vw] select-none"
                draggable={false}
                style={{
                  transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
                  transformOrigin: "center center",
                  transition: pointers.current.size === 2 ? "none" : "transform 80ms linear",
                  cursor: scale > 1 ? "grab" : "zoom-in",
                }}
                onDoubleClick={(e) => {
                  e.preventDefault();
                  toggleZoomAtCenter();
                }}
              />
            ) : (
              <div className="text-sm text-white/80">No screenshots</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
