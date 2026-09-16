import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Mountain, X } from "lucide-react";
import { useEffect, useState } from "react";

import { site } from "@/data/site";
import { useI18n, type Lang, type TranslationKey } from "@/lib/i18n";

const links: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/tours", key: "nav.tours" },
  { to: "/events", key: "nav.events" },
  { to: "/team", key: "nav.team" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contact", key: "nav.contact" },
];

const languages: { code: Lang; flag: string; label: string }[] = [
  { code: "mk", flag: "🇲🇰", label: "MK" },
  { code: "en", flag: "🇬🇧", label: "EN" },
];

export function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2.5" aria-label={site.name}>
          <span className="flex size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Mountain className="size-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold sm:text-base">{site.name}</span>
            <span className="block text-[11px] text-muted-foreground">{t("brand.tagline")}</span>
          </span>
        </Link>

        <nav aria-label={t("nav.home")} className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "bg-primary-soft text-primary" }}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="hidden items-center gap-1 rounded-full border border-border p-1 sm:flex"
            role="group"
            aria-label={t("nav.language")}
          >
            {languages.map((option) => (
              <button
                key={option.code}
                type="button"
                onClick={() => setLang(option.code)}
                aria-pressed={lang === option.code}
                className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
                  lang === option.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                <span aria-hidden="true">{option.flag}</span> {option.label}
              </button>
            ))}
          </div>

          <Link to="/membership" className="btn-accent hidden text-sm sm:inline-flex">
            {t("cta.joinUs")}
          </Link>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border text-foreground lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label={t("nav.openMenu")}>
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-primary-soft text-primary" }}
                className="rounded-xl px-3 py-3 text-base font-semibold transition-colors hover:bg-muted"
              >
                {t(link.key)}
              </Link>
            ))}
            <Link to="/membership" className="btn-accent mt-3 w-full">
              {t("cta.joinUs")}
            </Link>
            <div className="mt-3 flex items-center gap-2" role="group" aria-label={t("nav.language")}>
              {languages.map((option) => (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLang(option.code)}
                  aria-pressed={lang === option.code}
                  className={`flex-1 rounded-full border border-border px-3 py-2 text-sm font-bold transition-colors ${
                    lang === option.code
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  <span aria-hidden="true">{option.flag}</span> {option.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
