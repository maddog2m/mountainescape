import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

import { useI18n } from "@/lib/i18n";

export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("cta.backToTop")}
      title={t("cta.backToTop")}
      className="fixed bottom-20 right-4 z-50 flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 sm:bottom-6"
    >
      <ArrowUp className="size-5" aria-hidden="true" />
    </button>
  );
}
