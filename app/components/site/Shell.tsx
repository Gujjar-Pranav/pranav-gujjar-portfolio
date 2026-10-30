"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import PortfolioChat from "../PortfolioChat";
const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/expertise", label: "Expertise" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [menu, setMenu] = useState(false);
  return (
    <div className="min-h-screen bg-white text-[#172238]">
      <header className="sticky top-0 z-50 border-b border-[#e8edf3] bg-white/95 backdrop-blur">
        <div className="site-container flex h-[76px] items-center justify-between gap-5">
          <Link href="/" className="text-[17px] font-bold tracking-[-.04em]">
            PRANAV<span className="text-[#3662bf]">.</span>GUJJAR
          </Link>
          <nav
            className="hidden items-center gap-9 md:flex"
            aria-label="Main navigation"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-medium transition-colors hover:text-[#2856b4] ${path === l.href ? "text-[#2856b4]" : "text-[#637083]"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:block"></div>
          <button
            aria-label="Toggle navigation"
            aria-expanded={menu}
            onClick={() => setMenu(!menu)}
            className="text-sm font-semibold md:hidden"
          >
            {menu ? "Close ✕" : "Menu ☰"}
          </button>
        </div>
        {menu && (
          <nav className="site-container flex flex-col gap-4 border-t border-slate-100 py-5 md:hidden">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenu(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-[#e8edf3] py-8">
        <div className="site-container flex flex-col justify-between gap-3 text-xs text-[#798496] sm:flex-row">
          <span>
            © {new Date().getFullYear()} Pranav Gujjar. AI engineering &
            intelligent products.
          </span>
          <span>Built with Next.js · Designed for clarity</span>
        </div>
      </footer>
      <PortfolioChat />
    </div>
  );
}
