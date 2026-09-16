import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star } from "lucide-react";

import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TourCard } from "@/components/TourCard";
import aboutImage from "@/assets/about-group.jpg";
import heroImage from "@/assets/hero-mountains.jpg";
import { stats, testimonials, whyUs } from "@/data/site";
import { tours } from "@/data/tours";
import { useI18n, type TranslationKey } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Mountain Escape — Guided Hiking in North Macedonia" },
      {
        name: "description",
        content:
          "Join guided hikes, mountain expeditions and outdoor events across North Macedonia with The Mountain Escape — 150+ hikes, 2,000+ participants, 8 certified guides.",
      },
      { property: "og:title", content: "The Mountain Escape — Guided Hiking in North Macedonia" },
      {
        property: "og:description",
        content:
          "Explore breathtaking trails, meet new people and experience unforgettable adventures with The Mountain Escape.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t, tr } = useI18n();
  const featured = tours.slice(0, 6);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Mountain ridge above the clouds at sunrise in North Macedonia"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative flex min-h-[78vh] flex-col justify-center py-24">
          <p className="eyebrow">
            <MapPin className="size-4" aria-hidden="true" />
            {t("home.hero.badge")}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl text-forest-foreground sm:text-5xl lg:text-6xl">
            {t("home.hero.title")}
          </h1>
          <p className="mt-5 max-w-2xl text-base text-forest-foreground/85 sm:text-lg">
            {t("home.hero.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/tours" className="btn-accent">
              {t("cta.exploreTours")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link to="/membership" className="btn-ghost-light">
              {t("cta.joinUs")}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card" aria-label={t("home.stats.hikes")}>
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:py-12 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.value + index} delay={index * 80} className="text-center">
              <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{tr(stat.label)}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutImage}
              alt="A group of hikers from The Mountain Escape resting on a mountain plateau"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              eyebrow={t("home.about.eyebrow")}
              title={t("home.about.title")}
              subtitle={t("home.about.body1")}
            />
            <p className="mt-4 max-w-2xl text-muted-foreground">{t("home.about.body2")}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/about" className="btn-primary">
                {t("cta.learnMore")}
              </Link>
              <Link to="/team" className="btn-outline">
                {t("cta.meetTeam")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t("home.tours.eyebrow")}
            title={t("home.tours.title")}
            subtitle={t("home.tours.subtitle")}
            align="center"
          />
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((tour, index) => (
              <Reveal as="li" key={tour.slug} delay={(index % 3) * 90} className="h-full">
                <TourCard tour={tour} />
              </Reveal>
            ))}
          </ul>
          <div className="mt-12 flex justify-center">
            <Link to="/tours" className="btn-outline">
              {t("cta.allTours")}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <SectionHeading
          eyebrow={t("home.why.eyebrow")}
          title={t("home.why.title")}
          align="center"
        />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, index) => (
            <Reveal as="li" key={item.titleKey} delay={(index % 3) * 90}>
              <div className="card-surface card-hover h-full p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg">{t(item.titleKey as TranslationKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t(item.textKey as TranslationKey)}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-sand py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow={t("home.testimonials.eyebrow")}
            title={t("home.testimonials.title")}
            align="center"
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((item, index) => (
              <Reveal as="li" key={item.name} delay={(index % 4) * 80} className="h-full">
                <figure className="card-surface flex h-full flex-col p-6">
                  <div className="flex gap-1" aria-label={`${item.rating}/5`}>
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className={`size-4 ${
                          starIndex < item.rating ? "fill-accent text-accent" : "text-border"
                        }`}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm text-muted-foreground">
                    {tr(item.text)}
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="block font-display text-sm font-bold">{item.name}</span>
                    <span className="block text-xs text-muted-foreground">{tr(item.role)}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest py-16 text-forest-foreground sm:py-20">
        <div className="container-page text-center">
          <h2 className="text-2xl text-forest-foreground sm:text-4xl">{t("home.cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-forest-foreground/80">
            {t("home.cta.subtitle")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/events" className="btn-accent">
              {t("cta.viewUpcoming")}
            </Link>
            <Link to="/membership" className="btn-ghost-light">
              {t("cta.becomeMember")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
