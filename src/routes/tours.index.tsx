import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { TourCard } from "@/components/TourCard";
import heroImage from "@/assets/tour-sar.jpg";
import { difficultyKey, tours, type Difficulty } from "@/data/tours";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/tours/")({
  head: () => ({
    meta: [
      { title: "Hiking Tours in North Macedonia — The Mountain Escape" },
      {
        name: "description",
        content:
          "Ten guided hiking tours across North Macedonia: Vodno, Matka, Korab, Pelister, Galičica, Šar Mountain and more. Filter by difficulty, duration and location.",
      },
      { property: "og:title", content: "Hiking Tours in North Macedonia — The Mountain Escape" },
      {
        property: "og:description",
        content: "Choose a trail by difficulty, duration and location. All hikes include a professional guide.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ToursPage,
});

type DurationFilter = "all" | "short" | "medium" | "long";

const difficulties: Difficulty[] = ["easy", "moderate", "difficult", "advanced"];

function ToursPage() {
  const { t, tr } = useI18n();
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");
  const [duration, setDuration] = useState<DurationFilter>("all");
  const [location, setLocation] = useState<string>("all");

  const locations = useMemo(
    () => Array.from(new Set(tours.map((tour) => tour.location.en))),
    [],
  );

  const filtered = tours.filter((tour) => {
    if (difficulty !== "all" && tour.difficulty !== difficulty) return false;
    if (location !== "all" && tour.location.en !== location) return false;
    if (duration === "short" && tour.hours > 5) return false;
    if (duration === "medium" && (tour.hours < 5 || tour.hours > 8)) return false;
    if (duration === "long" && tour.hours <= 8) return false;
    return true;
  });

  const reset = () => {
    setDifficulty("all");
    setDuration("all");
    setLocation("all");
  };

  return (
    <>
      <PageHero
        image={heroImage}
        imageAlt="Hikers walking a mountain ridge on Šar Mountain"
        eyebrow={t("home.tours.eyebrow")}
        title={t("tours.hero.title")}
        subtitle={t("tours.hero.subtitle")}
      />

      <section className="container-page py-12 sm:py-16">
        <div className="card-surface p-6">
          <h2 className="text-lg">{t("tours.filters.title")}</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div>
              <label htmlFor="filter-difficulty" className="block text-sm font-semibold">
                {t("label.difficulty")}
              </label>
              <select
                id="filter-difficulty"
                className="field-input mt-2"
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value as Difficulty | "all")}
              >
                <option value="all">{t("label.all")}</option>
                {difficulties.map((value) => (
                  <option key={value} value={value}>
                    {t(difficultyKey[value])}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="filter-duration" className="block text-sm font-semibold">
                {t("tours.filters.duration")}
              </label>
              <select
                id="filter-duration"
                className="field-input mt-2"
                value={duration}
                onChange={(event) => setDuration(event.target.value as DurationFilter)}
              >
                <option value="all">{t("label.all")}</option>
                <option value="short">{t("tours.filters.durationShort")}</option>
                <option value="medium">{t("tours.filters.durationMedium")}</option>
                <option value="long">{t("tours.filters.durationLong")}</option>
              </select>
            </div>
            <div>
              <label htmlFor="filter-location" className="block text-sm font-semibold">
                {t("label.location")}
              </label>
              <select
                id="filter-location"
                className="field-input mt-2"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              >
                <option value="all">{t("label.all")}</option>
                {locations.map((value) => {
                  const match = tours.find((tour) => tour.location.en === value)!;
                  return (
                    <option key={value} value={value}>
                      {tr(match.location)}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground" role="status">
              {filtered.length} {t("tours.results")}
            </p>
            <button type="button" className="btn-outline text-sm" onClick={reset}>
              {t("tours.filters.reset")}
            </button>
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="mt-12 rounded-2xl border border-dashed border-border p-10 text-center text-muted-foreground">
            {t("tours.empty")}
          </p>
        ) : (
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((tour, index) => (
              <Reveal as="li" key={tour.slug} delay={(index % 3) * 80} className="h-full">
                <TourCard tour={tour} />
              </Reveal>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
