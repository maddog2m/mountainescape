import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { BackToTop } from "@/components/BackToTop";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { LanguageProvider, useI18n } from "@/lib/i18n";

function NotFoundComponent() {
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

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-2xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-outline">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "The Mountain Escape — Hiking & Mountaineering in North Macedonia" },
      {
        name: "description",
        content:
          "The Mountain Escape organizes guided hikes, expeditions, workshops and outdoor events across the mountains of North Macedonia.",
      },
      { name: "author", content: "The Mountain Escape" },
      { property: "og:site_name", content: "The Mountain Escape" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Manrope:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: (props) => <ErrorComponent error={props.error as Error} reset={props.reset} />,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="mk">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
        </div>
        <BackToTop />
        <CookieConsent />
      </LanguageProvider>
    </QueryClientProvider>
  );
}
