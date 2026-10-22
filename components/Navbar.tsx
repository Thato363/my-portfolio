"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white text-sm font-mono">
              TT
            </span>
            <span>Portfolio</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 text-slate-600 hover:bg-slate-100 rounded-md"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Open menu"
          >
            <span className="block h-[2px] w-5 bg-current"></span>
            <span className="block h-[2px] w-5 bg-current mt-1"></span>
            <span className="block h-[2px] w-5 bg-current mt-1"></span>
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-slate-200 bg-slate-50 py-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-md"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}