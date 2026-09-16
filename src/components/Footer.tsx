import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Mountain, Phone, Youtube } from "lucide-react";

import { site } from "@/data/site";
import { useI18n, type TranslationKey } from "@/lib/i18n";

const quickLinks: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/about", key: "nav.about" },
  { to: "/tours", key: "nav.tours" },
  { to: "/events", key: "nav.events" },
  { to: "/team", key: "nav.team" },
  { to: "/blog", key: "nav.blog" },
  { to: "/contact", key: "nav.contact" },
];

export function Footer() {
  const { t, tr } = useI18n();

  return (
    <footer className="mt-20 bg-forest text-forest-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-full bg-forest-foreground/12">
              <Mountain className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-base font-bold">{site.name}</span>
          </div>
          <p className="mt-4 text-sm text-forest-foreground/80">{t("footer.about")}</p>
          <p className="mt-4 text-xs text-forest-foreground/60">{t("footer.newsletterNote")}</p>
        </div>

        <nav aria-label={t("footer.quickLinks")}>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest">
            {t("footer.quickLinks")}
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="text-forest-foreground/80 transition-colors hover:text-forest-foreground"
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/membership"
                className="text-forest-foreground/80 transition-colors hover:text-forest-foreground"
              >
                {t("nav.membership")}
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest">
            {t("footer.contact")}
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/85">
            <li>
              <a className="flex items-center gap-2 hover:underline" href={site.phoneHref}>
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:underline" href={site.emailHref}>
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" />
              {tr(site.city)}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest">
            {t("footer.follow")}
          </h2>
          <ul className="mt-4 flex gap-3">
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="flex size-11 items-center justify-center rounded-full bg-forest-foreground/12 transition-colors hover:bg-forest-foreground/25"
              >
                <Facebook className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
                className="flex size-11 items-center justify-center rounded-full bg-forest-foreground/12 transition-colors hover:bg-forest-foreground/25"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="YouTube"
                className="flex size-11 items-center justify-center rounded-full bg-forest-foreground/12 transition-colors hover:bg-forest-foreground/25"
              >
                <Youtube className="size-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-forest-foreground/70 sm:flex-row">
          <p>{t("footer.rights")}</p>
          <Link to="/privacy" className="transition-colors hover:text-forest-foreground">
            {t("nav.privacy")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
