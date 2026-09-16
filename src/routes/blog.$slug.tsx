import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock, Lightbulb, User } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { blogCategoryKey, blogPosts, getPost } from "@/data/blog";
import { formatDate, useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { title: post.title.en, excerpt: post.excerpt.en };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found — The Mountain Escape" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const title = `${loaderData.title} — The Mountain Escape`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: BlogArticlePage,
});

function BlogArticlePage() {
  const { slug } = Route.useParams();
  const { t, tr, trList, lang } = useI18n();
  const post = getPost(slug);

  if (!post) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl">{t("blog.notFound")}</h1>
        <Link to="/blog" className="btn-primary mt-6">
          {t("cta.allArticles")}
        </Link>
      </div>
    );
  }

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => (a.category === post.category ? -1 : 0) - (b.category === post.category ? -1 : 0))
    .slice(0, 3);

  return (
    <>
      <article className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-3xl">
          <span className="rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
            {t(blogCategoryKey[post.category])}
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl">{tr(post.title)}</h1>
          <p className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="size-4" aria-hidden="true" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-4" aria-hidden="true" />
              {formatDate(post.date, lang)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" aria-hidden="true" />
              {post.readMinutes} {t("blog.readTime")}
            </span>
          </p>
        </div>

        <img
          src={post.image}
          alt={tr(post.title)}
          className="mx-auto mt-8 aspect-[16/9] w-full max-w-4xl rounded-3xl object-cover shadow-[var(--shadow-lift)]"
        />

        <div className="mx-auto mt-10 max-w-3xl">
          <p className="text-lg text-foreground/85">{tr(post.intro)}</p>

          {post.sections.map((section) => (
            <section key={section.heading.en} className="mt-10">
              <h2 className="text-xl sm:text-2xl">{tr(section.heading)}</h2>
              {trList(section.paragraphs).map((paragraph) => (
                <p key={paragraph} className="mt-4 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-4 space-y-2">
                  {trList(section.bullets).map((item) => (
                    <li key={item} className="flex gap-2 text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <aside className="mt-10 flex gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-6">
            <Lightbulb className="size-6 shrink-0 text-accent-foreground" aria-hidden="true" />
            <p className="text-sm text-foreground/85">{tr(post.tip)}</p>
          </aside>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/tours" className="btn-primary">
              {t("cta.exploreTours")}
            </Link>
            <Link to="/blog" className="btn-outline">
              {t("cta.allArticles")}
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-sand py-14 sm:py-20">
        <div className="container-page">
          <h2 className="text-2xl">{t("blog.related")}</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 80} className="h-full">
                <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={tr(item.title)}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base">{tr(item.title)}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{tr(item.excerpt)}</p>
                    <Link
                      to="/blog/$slug"
                      params={{ slug: item.slug }}
                      className="btn-outline mt-4 w-fit text-sm"
                    >
                      {t("cta.readMore")}
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
