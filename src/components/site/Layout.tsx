import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, ArrowRight, Linkedin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function CtaLink({
  to = "/contact",
  children = "Let's have a conversation",
  variant = "solid",
  className,
}: {
  to?: "/contact" | "/about" | "/consulting" | "/mentorship";
  children?: ReactNode;
  variant?: "solid" | "outline" | "quiet";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-medium transition-colors",
        variant === "solid" &&
          "rounded-sm bg-foreground px-5 py-3 text-background hover:bg-primary",
        variant === "outline" &&
          "rounded-sm border border-foreground px-5 py-3 hover:bg-foreground hover:text-background",
        variant === "quiet" && "text-primary hover:text-foreground",
        className,
      )}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </Link>
  );
}

function Wordmark() {
  return (
    <Link to="/" className="group flex items-baseline gap-2" aria-label="Samuel Massari, home">
      <span className="font-serif text-2xl leading-none">Samuel Massari</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-background focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-5">
        <Wordmark />
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {NAV.slice(0, 4).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="link-underline text-sm text-muted-foreground hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="rounded-sm border border-foreground px-4 py-2 text-sm transition-colors hover:bg-foreground hover:text-background"
          >
            Let's talk
          </Link>
        </nav>
        <button
          type="button"
          className="p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t md:hidden">
          <ul className="mx-auto max-w-6xl px-6 py-4">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block border-b py-3 font-serif text-2xl last:border-0"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: true }}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-serif text-3xl">{SITE.name}</p>
          <p className="mt-2 text-sm opacity-70">{SITE.descriptor}</p>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow mb-4 !text-ink-foreground/60">Pages</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="link-underline opacity-85 hover:opacity-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="eyebrow mb-4 !text-ink-foreground/60">Contact</p>
          <a href={`mailto:${SITE.email}`} className="link-underline text-sm">
            {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Samuel Massari on LinkedIn (opens in a new tab)"
            className="link-underline mt-3 flex w-fit items-center gap-2 text-sm opacity-85 transition-opacity hover:opacity-100"
          >
            <Linkedin className="h-4 w-4" aria-hidden />
            LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 text-xs opacity-60 sm:flex-row sm:justify-between">
          <span>{SITE.legalName}</span>
          <span>
            © {new Date().getFullYear()} {SITE.name}
          </span>
        </div>
      </div>
    </footer>
  );
}

/** Numbered section label — the site's small technical motif. */
export function Eyebrow({ n, children }: { n?: string; children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      {n && <span className="text-terracotta">{n}</span>}
      <span className="h-px w-8 bg-primary/40" aria-hidden />
      {children}
    </p>
  );
}

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b">
      <div
        className="grid-paper pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-12">
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="text-5xl md:col-span-7 md:text-6xl lg:text-7xl">{title}</h1>
        <div className="prose-body md:col-span-5 md:pt-3">{children}</div>
      </div>
    </section>
  );
}

export function ClosingCta({
  title,
  children,
  cta,
}: {
  title: ReactNode;
  children?: ReactNode;
  cta?: string;
}) {
  return (
    <section className="border-t">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-12">
        <h2 className="text-4xl md:col-span-5 md:text-5xl">{title}</h2>
        <div className="md:col-span-6 md:col-start-7">
          {children && <div className="prose-body">{children}</div>}
          <div className={cn("flex flex-wrap items-center gap-6", children && "mt-8")}>
            <CtaLink>{cta}</CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
