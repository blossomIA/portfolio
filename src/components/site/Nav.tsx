"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/projects", label: "Projects", match: ["/projects", "/work"] },
  { href: "/me", label: "Me", match: ["/me"] },
  { href: "/resume", label: "Résumé", match: ["/resume"] },
] as const;

export function Nav() {
  const pathname = usePathname();
  const menu = useRef<HTMLDetailsElement>(null);

  // Close the phone menu after navigating.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  const current = (match: readonly string[]) =>
    match.some((m) => pathname === m || pathname.startsWith(`${m}/`)) ? "page" : undefined;

  return (
    <header className="nav">
      <div className="wrap nav-in">
        <Link className="logo" href="/" aria-label="Amarachi Blossom, home">
          <Logo />
        </Link>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.match)}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-end">
          <ThemeToggle />
          <Link className="btn btn-solid nav-cta" href="/#contact">
            Let&apos;s talk
          </Link>

        <details className="nav-menu" ref={menu}>
          <summary className="btn btn-solid" aria-label="Open menu">
            Menu
          </summary>
          <div className="sheet">
            {links.map((l) => (
              <Link key={l.href} href={l.href} aria-current={current(l.match)}>
                {l.label}
              </Link>
            ))}
            <Link className="btn btn-solid" href="/#contact">
              Let&apos;s talk
            </Link>
          </div>
        </details>
        </div>
      </div>
    </header>
  );
}
