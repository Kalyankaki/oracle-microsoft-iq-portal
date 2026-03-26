"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Chat", href: "/chat" },
  { label: "Best Practices", href: "/best-practices" },
  { label: "Availability", href: "/availability" },
  { label: "Sessions", href: "/sessions" },
  { label: "Community", href: "/community" },
  { label: "MVP Corner", href: "/mvp-corner" },
  { label: "Innovation Hub", href: "/innovation-hub" },
];

const moreLinks = [
  { label: "Migration", href: "/migration" },
  { label: "Architecture", href: "/architecture" },
  { label: "What's New", href: "/whats-new" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 text-lg font-bold tracking-tight">
          <span className="text-oracle-red">OracleDB</span>
          <span className="text-azure-blue">@Azure</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative">
            <button
              onClick={() => setMoreOpen(!moreOpen)}
              className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-white"
            >
              More <ChevronDown className="h-3 w-3" />
            </button>
            {moreOpen && (
              <>
                <div className="fixed inset-0" onClick={() => setMoreOpen(false)} />
                <div className="absolute right-0 top-full mt-1 w-48 rounded-lg border border-white/10 bg-surface py-1 shadow-xl">
                  {moreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMoreOpen(false)}
                      className="block px-4 py-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Status pill + mobile toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 sm:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="text-xs font-medium text-green-400">
              Azure + Oracle: Generally Available
            </span>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-muted transition-colors hover:text-white lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-charcoal lg:hidden">
          <div className="space-y-1 px-4 py-3">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-medium text-green-400">
                Azure + Oracle: Generally Available
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
