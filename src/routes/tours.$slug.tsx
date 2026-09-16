import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import {
  CalendarDays,
  CheckCircle2,
  Clock,
  Info,
  Mountain,
  MapPin,
  Backpack,
  Route as RouteIcon,
  Timer,
  Wallet,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { TourCard } from "@/components/TourCard";
import {
  difficultyKey,
  getTour,
  tourBring,
  tourImportant,
  tourIncluded,
  tours,
} from "@/data/tours";
import { formatDate, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { title: tour.title.en, short: tour.short.en };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Hike not found — The Mountain Escape" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} — The Mountain Escape`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.short },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: TourDetailsPage,
});

function TourDetailsPage() {
  const { slug } = Route.useParams();
  const { t, tr, trList, lang } = useI18n();
  const tour = getTour(slug);

  if (!tour) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl">{t("tour.notFound")}</h1>
        <Link to="/tours" className="btn-primary mt-6">
          {t("cta.allTours")}
        </Link>
      </div>
    );
  }

  const related = tours.filter((item) => item.slug !== tour.slug).slice(0, 3);

  const facts = [
    { icon: MapPin, label: t("label.location"), value: tr(tour.location) },
    { icon: CalendarDays, label: t("label.date"), value: formatDate(tour.date, lang) },
    { icon: Timer, label: t("label.departure"), value: tour.departure },
    { icon: Clock, label: t("label.duration"), value: `${tour.hours} ${lang === "mk" ? "часа" : "hours"}` },
    { icon: RouteIcon, label: t("label.distance"), value: `${tour.distanceKm} km` },
    { icon: Mountain, label: t("label.elevation"), value: `${tour.elevationM} m` },
    { icon: Info, label: t("label.difficulty"), value: t(difficultyKey[tour.difficulty]) },
    { icon: MapPin, label: t("label.meeting"), value: tr(tour.meetingPoint) },
    { icon: Wallet, label: t("label.fee"), value: `${tour.fee} MKD` },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={tour.image}
          alt={tr(tour.title)}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="container-page relative py-20 sm:py-28">
          <p className="eyebrow">{t(difficultyKey[tour.difficulty])}</p>
          <h1 className="mt-3 max-w-3xl text-3xl text-forest-foreground sm:text-5xl">
            {tr(tour.title)}
          </h1>
          <p className="mt-4 max-w-2xl text-forest-foreground/85">{tr(tour.short)}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/membership" className="btn-accent">
              {t("cta.joinHike")}
            </Link>
            <Link to="/tours" className="btn-ghost-light">
              {t("cta.allTours")}
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl">{t("tour.about.title")}</h2>
              {trList(tour.about).map((paragraph) => (
                <p key={paragraph} className="mt-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </Reveal>

            <Reveal delay={80} className="mt-10">
              <h2 className="text-2xl">{t("tour.highlights.title")}</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {trList(tour.highlights).map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-primary-soft px-3.5 py-1.5 text-sm font-semibold text-primary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Reveal>
                <article className="card-surface h-full p-6">
                  <h2 className="flex items-center gap-2 text-lg">
                    <Backpack className="size-5 text-primary" aria-hidden="true" />
                    {t("tour.bring.title")}
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {trList(tourBring).map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
              <Reveal delay={90}>
                <article className="card-surface h-full p-6">
                  <h2 className="flex items-center gap-2 text-lg">
                    <CheckCircle2 className="size-5 text-primary" aria-hidden="true" />
                    {t("tour.included.title")}
                  </h2>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {trList(tourIncluded).map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>

            <Reveal delay={60} className="mt-6">
              <article className="rounded-2xl border border-accent/40 bg-accent/10 p-6">
                <h2 className="flex items-center gap-2 text-lg">
                  <Info className="size-5 text-accent-foreground" aria-hidden="true" />
                  {t("tour.important.title")}
                </h2>
                <ul className="mt-4 space-y-2 text-sm text-foreground/80">
                  {trList(tourImportant).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden="true">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>

          <aside>
            <div className="card-surface sticky top-24 p-6">
              <h2 className="text-lg">{t("tour.details.title")}</h2>
              <dl className="mt-5 space-y-4 text-sm">
                {facts.map((fact) => (
                  <div key={fact.label + fact.value} className="flex gap-3">
                    <fact.icon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <dt className="text-muted-foreground">{fact.label}</dt>
                      <dd className="font-semibold">{fact.value}</dd>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  <Mountain className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="text-muted-foreground">{t("tour.guide")}</dt>
                    <dd className="font-semibold">{tour.guide}</dd>
                  </div>
                </div>
              </dl>
              <Link to="/membership" className="btn-primary mt-6 w-full">
                {t("cta.joinHike")}
              </Link>
              <Link to="/contact" className="btn-outline mt-3 w-full">
                {t("cta.contactUs")}
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-sand py-14 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl">{t("tour.related")}</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} className="h-full">
                <TourCard tour={item} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
