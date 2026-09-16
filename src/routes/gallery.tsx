import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/gallery-sunrise.jpg";
import {
  galleryCategoryKey,
  galleryPhotos,
  type GalleryCategory,
} from "@/data/gallery";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Photo Gallery — The Mountain Escape" },
      {
        name: "description",
        content:
          "Photographs from our hikes, summits, camping trips and community events across the mountains of North Macedonia.",
      },
      { property: "og:title", content: "Photo Gallery — The Mountain Escape" },
      {
        property: "og:description",
        content: "Photographs from our hikes, peaks, camping trips and community events.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: GalleryPage,
});

const categories: GalleryCategory[] = ["hiking", "mountains", "camping", "community", "events"];

function GalleryPage() {
  const { t, tr } = useI18n();
  const [category, setCategory] = useState<GalleryCategory | "all">("all");
  const [index, setIndex] = useState<number | null>(null);

  const photos =
    category === "all" ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === category);

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIndex(null);
      if (event.key === "ArrowRight") setIndex((value) => ((value ?? 0) + 1) % photos.length);
      if (event.key === "ArrowLeft")
        setIndex((value) => ((value ?? 0) - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, photos.length]);

  const current = index === null ? null : photos[index];

  return (
    <>
      <PageHero
        image={heroImage}
        imageAlt="Sunrise seen from a mountain summit above Skopje"
        eyebrow={t("nav.gallery")}
        title={t("gallery.hero.title")}
        subtitle={t("gallery.hero.subtitle")}
      />

      <section className="container-page py-14 sm:py-20">
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label={t("label.category")}
        >
          <button
            type="button"
            onClick={() => {
              setCategory("all");
              setIndex(null);
            }}
            aria-pressed={category === "all"}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              category === "all"
                ? "bg-primary text-primary-foreground"
                : "border border-border text-foreground hover:bg-muted"
            }`}
          >
            {t("label.all")}
          </button>
          {categories.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => {
                setCategory(value);
                setIndex(null);
              }}
              aria-pressed={category === value}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === value
                  ? "bg-primary text-primary-foreground"
                  : "border border-border text-foreground hover:bg-muted"
              }`}
            >
              {t(galleryCategoryKey[value])}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {photos.map((photo, photoIndex) => (
            <Reveal as="li" key={photo.id} delay={(photoIndex % 3) * 70}>
              <button
                type="button"
                onClick={() => setIndex(photoIndex)}
                className="group block w-full overflow-hidden rounded-2xl border border-border text-left shadow-[var(--shadow-soft)]"
                aria-label={`${t("gallery.openImage")}: ${tr(photo.caption)}`}
              >
                <span className="block aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.image}
                    alt={tr(photo.caption)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="flex items-center justify-between gap-3 bg-card p-4">
                  <span className="text-sm text-muted-foreground">{tr(photo.caption)}</span>
                  <span className="shrink-0 rounded-full bg-primary-soft px-2.5 py-1 text-xs font-bold text-primary">
                    {t(galleryCategoryKey[photo.category])}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </section>

      {current ? (
        <div
          className="fixed inset-0 z-[70] flex flex-col items-center justify-center bg-forest/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={tr(current.caption)}
        >
          <div className="flex w-full max-w-5xl justify-end">
            <button
              type="button"
              onClick={() => setIndex(null)}
              aria-label={t("cta.close")}
              className="flex size-11 items-center justify-center rounded-full bg-forest-foreground/15 text-forest-foreground"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>
          <img
            src={current.image}
            alt={tr(current.caption)}
            className="mt-3 max-h-[70vh] w-full max-w-5xl rounded-2xl object-contain"
          />
          <p className="mt-4 text-center text-sm text-forest-foreground/85">{tr(current.caption)}</p>
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={() => setIndex((value) => ((value ?? 0) - 1 + photos.length) % photos.length)}
              className="btn-ghost-light text-sm"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
              {t("cta.prev")}
            </button>
            <button
              type="button"
              onClick={() => setIndex((value) => ((value ?? 0) + 1) % photos.length)}
              className="btn-ghost-light text-sm"
            >
              {t("cta.next")}
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
