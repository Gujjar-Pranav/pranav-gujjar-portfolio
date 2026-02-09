"use client";

import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

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

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs text-black/70">
      {children}
    </span>
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
