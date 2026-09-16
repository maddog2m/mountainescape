import { Link } from "@tanstack/react-router";
import { Cookie } from "lucide-react";
import { useEffect, useState } from "react";

import { useI18n } from "@/lib/i18n";

const STORAGE_KEY = "tme-cookie-consent";

export function CookieConsent() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const decide = (choice: "all" | "necessary") => {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* storage unavailable */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t("cookies.title")}
      className="fixed inset-x-3 bottom-3 z-[60] mx-auto max-w-3xl rounded-2xl border border-border bg-card p-5 shadow-lg sm:inset-x-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
          <Cookie className="size-5" aria-hidden="true" />
        </span>
        <p className="flex-1 text-sm text-muted-foreground">{t("cookies.text")}</p>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn-primary text-sm" onClick={() => decide("all")}>
            {t("cookies.acceptAll")}
          </button>
          <button type="button" className="btn-outline text-sm" onClick={() => decide("necessary")}>
            {t("cookies.necessary")}
          </button>
          <Link to="/privacy" className="btn-base text-sm text-primary underline">
            {t("cookies.learnMore")}
          </Link>
        </div>
      </div>
    </div>
  );
}
