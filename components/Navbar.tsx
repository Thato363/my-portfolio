"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const links = [
  { name: "About", href: "/", icon: "home" },
  { name: "Projects", href: "/projects", icon: "grid" },
  { name: "Skills", href: "/skills", icon: "sparkles" },
  { name: "Contact", href: "/contact", icon: "mail" },
  { name: "CV", href: "/cv", icon: "file" },
];

function NavIcon({ name }: { name: string }) {
  const paths: Record<string, ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7" />
        <path d="M5 9v11h14V9M9 20v-6h6v6" />
      </>
    ),
    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    sparkles: (
      <>
        <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3Z" />
        <path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 13h6M9 17h6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0 lg:h-[1.1rem] lg:w-[1.1rem]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 flex min-h-16 items-stretch justify-center border-t border-white/10 bg-[#173b39] px-3 py-2 pb-[calc(env(safe-area-inset-bottom)+0.5rem)] shadow-[0_-10px_30px_rgba(17,42,40,0.12)] lg:inset-y-0 lg:left-0 lg:right-auto lg:h-screen lg:min-h-screen lg:w-[16.5rem] lg:flex-col lg:justify-start lg:border-r lg:border-t-0 lg:px-5 lg:py-8 lg:shadow-[8px_0_30px_rgba(17,42,40,0.07)]">
      <Link
        href="/"
        className="mb-12 hidden items-center gap-3 text-white lg:mb-12 lg:ml-1 lg:flex"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 font-mono text-sm font-bold text-[#b9eddb]">
          TT
        </span>
        <span>
          <strong className="block text-sm font-bold">Thato Thobane</strong>
          <span className="mt-1 block text-[0.68rem] text-[#a4bdb7]">
            Developer portfolio
          </span>
        </span>
      </Link>

      <p className="mb-3 ml-3 hidden text-[0.64rem] font-bold tracking-[0.13em] text-[#829f98] lg:block">
        MENU
      </p>
      <nav
        aria-label="Main navigation"
        className="grid w-full max-w-md grid-cols-5 gap-1 lg:flex lg:max-w-none lg:flex-col lg:gap-1"
      >
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={`relative flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-[0.68rem] font-semibold text-[#b6ceca] transition-colors hover:text-white lg:min-h-12 lg:flex-row lg:justify-start lg:gap-3 lg:rounded-lg lg:px-3 lg:text-[0.84rem] ${
                isActive
                  ? "bg-white/10 text-white"
                  : ""
              }`}
            >
              <NavIcon name={link.icon} />
              <span>{link.name}</span>
              {isActive && (
                <span className="absolute top-0 h-0.5 w-5 rounded-full bg-[#75d4bd] lg:right-3 lg:top-1/2 lg:h-1.5 lg:w-1.5 lg:-translate-y-1/2 lg:rounded-full" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto hidden items-center gap-2 border-t border-white/10 pt-4 text-[0.68rem] text-[#afc5bf] lg:flex">
        <span className="h-2 w-2 rounded-full bg-[#70d3a5] shadow-[0_0_0_3px_rgba(112,211,165,0.13)]" />
        <span>Available for opportunities</span>
      </div>
    </aside>
  );
}
