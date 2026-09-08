import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

const primaryLinks = [
  { href: "/#work", label: "Projects" },
  { href: "/me", label: "Me" },
  { href: "/resume", label: "Reward" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            aria-label="Amarachi Blossom, home"
            className="flex items-center"
          >
            <span className="relative block size-6 overflow-hidden rounded-full ring-1 ring-border-soft">
              <Image
                src="/images/portrait.png"
                alt=""
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-8">
              {primaryLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-[14px] leading-5 text-ink tracking-button transition-colors hover:text-accent-purple"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/resume"
              className="hidden sm:inline-flex items-center rounded-full border border-border-soft px-5 py-2.5 text-[14px] font-medium leading-5 text-ink tracking-button transition-colors hover:bg-surface"
            >
              Grab my CV
            </Link>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[14px] font-medium leading-5 text-white tracking-button transition-opacity hover:opacity-90"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}
