import { Link, createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { useState } from "react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import heroImage from "@/assets/blog-packing.jpg";
import { blogCategoryKey, blogPosts, type BlogCategory } from "@/data/blog";
import { formatDate, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog & News — Hiking Tips from The Mountain Escape" },
      {
        name: "description",
        content:
          "Hiking tips, gear advice, safety guidance and trail recommendations for North Macedonia, written by the guides of The Mountain Escape.",
      },
      { property: "og:title", content: "Blog & News — Hiking Tips from The Mountain Escape" },
      {
        property: "og:description",
        content: "Hiking tips, gear advice, safety and destinations, written by our guides.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: BlogPage,
});

const categories: BlogCategory[] = [
  "tips",
  "gear",
  "destinations",
  "safety",
  "community",
  "nature",
];

function BlogPage() {
  const { t, tr, lang } = useI18n();
  const [category, setCategory] = useState<BlogCategory | "all">("all");

  const posts =
    category === "all" ? blogPosts : blogPosts.filter((post) => post.category === category);

  return (
    <>
      <PageHero
        image={heroImage}
        imageAlt="Hiking gear laid out on a wooden table before a hike"
        eyebrow={t("nav.blog")}
        title={t("blog.hero.title")}
        subtitle={t("blog.hero.subtitle")}
      />

      <section className="container-page py-14 sm:py-20">
        <div className="flex flex-wrap gap-2" role="group" aria-label={t("label.category")}>
          <button
            type="button"
            onClick={() => setCategory("all")}
            aria-pressed={category === "all"}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              category === "all"
                ? "bg-primary text-primary-foreground"
                : "border border-border hover:bg-muted"
            }`}
          >
            {t("label.all")}
          </button>
          {categories.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setCategory(value)}
              aria-pressed={category === value}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                category === value
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:bg-muted"
              }`}
            >
              {t(blogCategoryKey[value])}
            </button>
          ))}
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <Reveal as="li" key={post.slug} delay={(index % 3) * 80} className="h-full">
              <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={tr(post.title)}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
                    {t(blogCategoryKey[post.category])}
                  </span>
                  <h2 className="mt-3 text-lg">{tr(post.title)}</h2>
                  <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      {formatDate(post.date, lang)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4" aria-hidden="true" />
                      {post.readMinutes} {t("blog.readTime")}
                    </span>
                  </p>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{tr(post.excerpt)}</p>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="btn-primary mt-5 w-fit text-sm"
                  >
                    {t("cta.readMore")}
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
