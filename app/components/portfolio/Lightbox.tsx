"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

export default function Lightbox({
  open,
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: Props) {
  const hasImages = images.length > 0;

  const safeIndex = useMemo(
    () => clamp(index, 0, Math.max(0, images.length - 1)),
    [index, images.length],
  );

  const src = hasImages ? images[safeIndex] : "";

  // Zoom + pan
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);

  // 🔑 render-safe pinch state
  const [isPinching, setIsPinching] = useState(false);

  // refs (gesture only)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const startTx = useRef(0);
  const startTy = useRef(0);

  const swipeStartX = useRef<number | null>(null);
  const lastTap = useRef(0);

  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map());
  const pinchStartDist = useRef<number | null>(null);
  const pinchStartScale = useRef(1);

  const resetView = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const prev = useCallback(() => {
    if (!images.length) return;
    resetView();
    onIndexChange((safeIndex - 1 + images.length) % images.length);
  }, [images.length, onIndexChange, resetView, safeIndex]);

  const next = useCallback(() => {
    if (!images.length) return;
    resetView();
    onIndexChange((safeIndex + 1) % images.length);
  }, [images.length, onIndexChange, resetView, safeIndex]);

  const zoomIn = () => {
    setScale((s) => clamp(Number((s + 0.25).toFixed(2)), 1, 3));
  };

  const zoomOut = () => {
    setScale((s) => {
      const ns = clamp(Number((s - 0.25).toFixed(2)), 1, 3);
      if (ns === 1) {
        setTx(0);
        setTy(0);
      }
      return ns;
    });
  };

  const toggleZoomAtCenter = () => {
    setScale((s) => {
      const ns = s === 1 ? 2 : 1;
      if (ns === 1) {
        setTx(0);
        setTy(0);
      }
      return ns;
    });
  };

  // Keyboard
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, prev, next]);

  // Reset on open / image change
  useEffect(() => {
    if (!open) return;
    // Intentional: reset zoom/pan when modal opens or image changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    resetView();
  }, [open, safeIndex, resetView]);

  if (!open) return null;

  const altText = title
    ? `${title} screenshot ${safeIndex + 1}`
    : `Screenshot ${safeIndex + 1}`;

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        aria-label="Close lightbox"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        type="button"
      />

      <div className="relative mx-auto flex h-full max-w-6xl flex-col px-4 py-4">
        {/* Top bar */}
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-white backdrop-blur">
          <div className="truncate text-sm font-semibold">
            {title ?? "Screenshots"} · {safeIndex + 1}/{images.length}
          </div>

          <div className="flex items-center gap-2">
            <button onClick={zoomOut}>
              <ZoomOut />
            </button>
            <button onClick={zoomIn}>
              <ZoomIn />
            </button>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl bg-black/60">
          {images.length > 1 && (
            <>
              <button onClick={prev} className="absolute top-1/2 left-3 z-10">
                <ChevronLeft />
              </button>
              <button onClick={next} className="absolute top-1/2 right-3 z-10">
                <ChevronRight />
              </button>
            </>
          )}

          <div
            ref={containerRef}
            className="absolute inset-0 flex items-center justify-center"
            style={{ touchAction: scale > 1 ? "none" : "pan-y" }}
            onPointerDown={(e) => {
              pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

              const now = Date.now();
              if (now - lastTap.current < 280) toggleZoomAtCenter();
              lastTap.current = now;

              if (pointers.current.size === 2) {
                setIsPinching(true);
                const pts = Array.from(pointers.current.values());
                pinchStartDist.current = Math.hypot(
                  pts[0].x - pts[1].x,
                  pts[0].y - pts[1].y,
                );
                pinchStartScale.current = scale;
                dragging.current = false;
                return;
              }

              dragging.current = true;
              startX.current = e.clientX;
              startY.current = e.clientY;
              startTx.current = tx;
              startTy.current = ty;

              if (scale === 1) swipeStartX.current = e.clientX;
            }}
            onPointerMove={(e) => {
              if (!pointers.current.has(e.pointerId)) return;
              pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

              if (pointers.current.size === 2 && pinchStartDist.current) {
                const pts = Array.from(pointers.current.values());
                const dist = Math.hypot(
                  pts[0].x - pts[1].x,
                  pts[0].y - pts[1].y,
                );
                setScale(
                  clamp(
                    (pinchStartScale.current * dist) / pinchStartDist.current,
                    1,
                    3,
                  ),
                );
                return;
              }

              if (dragging.current && scale > 1) {
                setTx(startTx.current + (e.clientX - startX.current));
                setTy(startTy.current + (e.clientY - startY.current));
              }
            }}
            onPointerUp={(e) => {
              pointers.current.delete(e.pointerId);
              if (pointers.current.size < 2) setIsPinching(false);
              dragging.current = false;
            }}
          >
            <div
              className="relative h-[85vh] w-[95vw]"
              style={{
                transform: `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`,
                transition: isPinching ? "none" : "transform 80ms linear",
              }}
            >
              <Image src={src} alt={altText} fill className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
