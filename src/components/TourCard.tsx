import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Route as RouteIcon } from "lucide-react";

import { difficultyKey, type Tour } from "@/data/tours";
import { formatDate, useI18n } from "@/lib/i18n";

const difficultyStyles: Record<Tour["difficulty"], string> = {
  easy: "bg-primary-soft text-primary",
  moderate: "bg-secondary/12 text-secondary",
  difficult: "bg-accent/20 text-accent-foreground",
  advanced: "bg-forest text-forest-foreground",
};

export function TourCard({ tour }: { tour: Tour }) {
  const { t, tr, lang } = useI18n();

  return (
    <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tr(tour.title)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${difficultyStyles[tour.difficulty]}`}
        >
          {t(difficultyKey[tour.difficulty])}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg">{tr(tour.title)}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0" aria-hidden="true" />
          {tr(tour.location)}
        </p>
        <p className="mt-3 text-sm text-muted-foreground">{tr(tour.short)}</p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1.5">
            <Clock className="size-4 text-primary" aria-hidden="true" />
            <dt className="sr-only">{t("label.duration")}</dt>
            <dd>
              {tour.hours} {lang === "mk" ? "ч." : "h"}
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <RouteIcon className="size-4 text-primary" aria-hidden="true" />
            <dt className="sr-only">{t("label.distance")}</dt>
            <dd>{tour.distanceKm} km</dd>
          </div>
          <div className="col-span-2 flex items-center gap-1.5">
            <CalendarDays className="size-4 text-primary" aria-hidden="true" />
            <dt className="sr-only">{t("label.date")}</dt>
            <dd>{formatDate(tour.date, lang)}</dd>
          </div>
        </dl>
        <div className="mt-5 flex items-center justify-between gap-3 pt-1">
          <span className="text-sm font-semibold text-foreground">
            {tour.fee} MKD
          </span>
          <Link to="/tours/$slug" params={{ slug: tour.slug }} className="btn-primary text-sm">
            {t("cta.viewDetails")}
          </Link>
        </div>
      </div>
    </article>
  );
}
