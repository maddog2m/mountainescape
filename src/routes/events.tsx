import { Link, createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Tag, X } from "lucide-react";
import { useEffect, useState } from "react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/event-camping.jpg";
import {
  eventTypeLabel,
  pastEvents,
  upcomingEvents,
  type EventItem,
} from "@/data/events";
import { formatDate, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events, Camping & Workshops — The Mountain Escape" },
      {
        name: "description",
        content:
          "Weekend hikes, camping trips, navigation and first-aid workshops, clean-up actions and community meetups organized by The Mountain Escape.",
      },
      { property: "og:title", content: "Events, Camping & Workshops — The Mountain Escape" },
      {
        property: "og:description",
        content: "The full programme of hikes, camping weekends, workshops and clean-up actions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const { t, tr, trList, lang } = useI18n();
  const [active, setActive] = useState<EventItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const renderCard = (event: EventItem, index: number) => (
    <Reveal as="li" key={event.id} delay={(index % 3) * 80} className="h-full">
      <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={event.image}
            alt={tr(event.name)}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-card/95 px-3 py-1 text-xs font-bold text-primary">
            {tr(eventTypeLabel[event.type])}
          </span>
          {event.past ? (
            <span className="absolute right-4 top-4 rounded-full bg-forest/90 px-3 py-1 text-xs font-bold text-forest-foreground">
              {t("events.completed")}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg">{tr(event.name)}</h3>
          <dl className="mt-3 space-y-1.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <CalendarDays className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">{t("label.date")}</dt>
              <dd>{formatDate(event.date, lang)}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">{t("label.departure")}</dt>
              <dd>{event.time}</dd>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              <dt className="sr-only">{t("label.location")}</dt>
              <dd>{tr(event.location)}</dd>
            </div>
          </dl>
          <p className="mt-3 flex-1 text-sm text-muted-foreground">{tr(event.short)}</p>
          <button
            type="button"
            className="btn-primary mt-5 text-sm"
            onClick={() => setActive(event)}
          >
            {t("events.details")}
          </button>
        </div>
      </article>
    </Reveal>
  );

  return (
    <>
      <PageHero
        image={heroImage}
        imageAlt="Tents at a mountain camp by a lake at dusk"
        eyebrow={t("nav.events")}
        title={t("events.hero.title")}
        subtitle={t("events.hero.subtitle")}
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading title={t("events.upcoming")} />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.map(renderCard)}
        </ul>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={t("events.past")} />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map(renderCard)}
          </ul>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <Link to="/gallery" className="btn-outline">
              {t("nav.gallery")}
            </Link>
            <Link to="/membership" className="btn-primary">
              {t("cta.becomeMember")}
            </Link>
          </div>
        </div>
      </section>

      {active ? (
        <div
          className="fixed inset-0 z-[70] flex items-end justify-center bg-forest/80 p-4 backdrop-blur-sm sm:items-center"
          role="presentation"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={tr(active.name)}
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card p-6 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl">{tr(active.name)}</h2>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label={t("cta.close")}
                className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <img
              src={active.image}
              alt={tr(active.name)}
              className="mt-5 aspect-[16/9] w-full rounded-2xl object-cover"
            />
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-1.5">
                <CalendarDays className="size-4 text-primary" aria-hidden="true" />
                {formatDate(active.date, lang)} · {active.time}
              </li>
              <li className="flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {tr(active.location)}
              </li>
              <li className="flex items-center gap-1.5">
                <Tag className="size-4 text-primary" aria-hidden="true" />
                {tr(eventTypeLabel[active.type])}
              </li>
            </ul>
            {trList(active.details).map((paragraph) => (
              <p key={paragraph} className="mt-4 text-sm text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="mt-6 flex flex-wrap gap-3">
              {active.past ? (
                <Link to="/gallery" className="btn-primary">
                  {t("nav.gallery")}
                </Link>
              ) : (
                <Link to="/membership" className="btn-primary">
                  {t("cta.joinUs")}
                </Link>
              )}
              <Link to="/contact" className="btn-outline">
                {t("cta.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
