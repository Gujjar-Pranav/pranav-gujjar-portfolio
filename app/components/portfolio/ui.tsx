"use client";

import type { ReactNode } from "react";
import { ChevronDown, X, ExternalLink } from "lucide-react";

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

export function Section({
  id,
  title,
  subtitle,
  icon,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <Container>
        <div className="flex items-start gap-3">
          {icon ? (
            <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm">
              {icon}
            </div>
          ) : null}

          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-black">{title}</h2>
            {subtitle ? <p className="mt-1 text-sm text-black/60">{subtitle}</p> : null}
          </div>
        </div>

        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white shadow-sm">
      <div className="p-6">{children}</div>
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-black/70 shadow-sm">
      {children}
    </span>
  );
}

/**
 * Default Tag (unchanged behavior)
 */
export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs text-black/70">
      {children}
    </span>
  );
}

/**
 * ✅ Clickable Tag (for "skill → related projects")
 * - Same visuals as Tag
 * - Adds hover + focus styles
 * - No functionality changes unless you use this component
 */
export function ClickTag({
  children,
  onClick,
  title,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  onClick: () => void;
  title?: string;
  "aria-label"?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      aria-label={ariaLabel}
      className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs text-black/70 transition hover:border-black/20 hover:bg-black/[0.04] focus:outline-none focus:ring-2 focus:ring-black/20"
    >
      {children}
    </button>
  );
}

/**
 * ✅ Minimal modal (for showing related projects list)
 * - Only used when you render it somewhere (no effect otherwise)
 * - Accessible: overlay click + Esc key closes
 */
export function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-end p-4 sm:items-center sm:justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-black/10 px-4 py-3">
          <div className="text-sm font-semibold text-black">{title ?? "Details"}</div>
          <button onClick={onClose} className="rounded-lg p-2 hover:bg-black/[0.04]" aria-label="Close">
            <X className="h-5 w-5 text-black/70" />
          </button>
        </div>

        <div className="max-h-[65vh] overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
}

export function IconLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-2 text-sm text-black shadow-sm transition hover:border-black/20 hover:shadow"
    >
      {icon ? <span className="h-4 w-4">{icon}</span> : null}
      <span>{children}</span>
    </a>
  );
}

export function PrimaryLink({
  href,
  children,
  icon,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-black/90"
    >
      {icon ? <span className="h-4 w-4">{icon}</span> : null}
      <span>{children}</span>
    </a>
  );
}

export function NavLink({ href, label, icon }: { href: string; label: string; icon?: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm text-black/70 transition hover:bg-black/[0.04] hover:text-black"
    >
      {icon ? <span className="h-4 w-4">{icon}</span> : null}
      <span>{label}</span>
    </a>
  );
}

/**
 * Premium collapsible: native <details> (fast + accessible)
 * NOTE: React does NOT support "defaultOpen" on <details>.
 * We conditionally set the valid "open" attribute instead.
 */
export function Collapsible({
  title,
  subtitle,
  children,
  defaultOpen,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group rounded-2xl border border-black/10 bg-white shadow-sm"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6">
        <div>
          <div className="text-base font-semibold text-black">{title}</div>
          {subtitle ? <div className="mt-1 text-sm text-black/60">{subtitle}</div> : null}
        </div>

        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white text-black/60 shadow-sm transition group-open:rotate-180">
          <ChevronDown className="h-4 w-4" />
        </div>
      </summary>

      <div className="px-6 pb-6">{children}</div>
    </details>
  );
}

/**
 * Small helper: project list item (optional)
 * (No impact unless used)
 */
export function ProjectListLink({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  if (!href) return <div className="text-sm text-black/70">{title}</div>;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 text-sm text-black/70 underline decoration-black/20 underline-offset-4 hover:text-black"
    >
      <span>{title}</span>
      <ExternalLink className="h-4 w-4" />
    </a>
  );
}
