import { Link, createFileRoute } from "@tanstack/react-router";

import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/$")({
  head: () => ({
    meta: [
      { title: "Page not found — The Mountain Escape" },
      {
        name: "description",
        content: "The page you are looking for does not exist. Return to The Mountain Escape home page.",
      },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Page not found — The Mountain Escape" },
      {
        property: "og:description",
        content: "The page you are looking for does not exist.",
      },
    ],
  }),
  component: NotFoundPage,
});

function NotFoundPage() {
  const { t } = useI18n();
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="font-display text-6xl font-bold text-primary sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl sm:text-3xl">{t("notfound.title")}</h1>
        <p className="mt-3 text-muted-foreground">{t("notfound.subtitle")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/" className="btn-primary">
            {t("notfound.home")}
          </Link>
          <Link to="/tours" className="btn-outline">
            {t("cta.exploreTours")}
          </Link>
        </div>
      </div>
    </div>
  );
}
