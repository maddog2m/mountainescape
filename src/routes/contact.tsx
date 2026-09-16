import { Link, createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/tour-vodno.jpg";
import { site } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Mountain Escape, Skopje" },
      {
        name: "description",
        content:
          "Contact The Mountain Escape in Skopje, North Macedonia: phone +389 70 123 456, hello@themountainescape.mk, working hours and a message form.",
      },
      { property: "og:title", content: "Contact — The Mountain Escape, Skopje" },
      {
        property: "og:description",
        content: "Write to us about hikes, membership or partnerships. We reply every working day.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: ContactPage,
});

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const emptyForm: FormState = { name: "", email: "", phone: "", subject: "", message: "" };

function ContactPage() {
  const { t, tr } = useI18n();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 3) next.name = t("form.err.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = t("form.err.email");
    if (form.phone.trim() && !/^[+0-9][0-9\s()/-]{6,}$/.test(form.phone.trim()))
      next.phone = t("form.err.phone");
    if (!form.subject) next.subject = t("form.err.select");
    if (form.message.trim().length < 10) next.message = t("form.err.message");
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  const errorText = (field: keyof FormState) =>
    errors[field] ? (
      <p id={`${field}-error`} className="mt-1.5 text-xs font-semibold text-destructive">
        {errors[field]}
      </p>
    ) : null;

  const fieldProps = (field: keyof FormState) => ({
    id: field,
    name: field,
    className: "field-input mt-2",
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
  });

  return (
    <>
      <PageHero
        image={heroImage}
        imageAlt="Forest trail leading up towards Vodno above Skopje"
        eyebrow={t("nav.contact")}
        title={t("contact.hero.title")}
        subtitle={t("contact.hero.subtitle")}
      />

      <section className="container-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading title={t("contact.info.title")} />
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-semibold">{tr(site.city)}</span>
                  <span className="block text-muted-foreground">{tr(site.address)}</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <a href={site.phoneHref} className="font-semibold hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <a href={site.emailHref} className="font-semibold hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>

            <h3 className="mt-10 flex items-center gap-2 font-display text-base font-bold">
              <Clock className="size-5 text-primary" aria-hidden="true" />
              {t("contact.hours.title")}
            </h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li>{t("contact.hours.week")}</li>
              <li>{t("contact.hours.sat")}</li>
              <li>{t("contact.hours.sun")}</li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/membership" className="btn-primary">
                {t("cta.becomeMember")}
              </Link>
              <Link to="/tours" className="btn-outline">
                {t("cta.exploreTours")}
              </Link>
            </div>
          </div>

          <div>
            <SectionHeading title={t("contact.form.title")} />
            {sent ? (
              <div className="card-surface mt-6 p-8 text-center">
                <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
                <p role="status" className="mt-4 text-lg font-semibold">
                  {t("contact.form.success")}
                </p>
                <button
                  type="button"
                  className="btn-outline mt-7"
                  onClick={() => {
                    setForm(emptyForm);
                    setSent(false);
                  }}
                >
                  {t("contact.form.another")}
                </button>
              </div>
            ) : (
              <form className="card-surface mt-6 p-6 sm:p-8" noValidate onSubmit={onSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">
                      {t("form.name")}
                    </label>
                    <input
                      {...fieldProps("name")}
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(event) => update("name", event.target.value)}
                    />
                    {errorText("name")}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      {t("form.email")}
                    </label>
                    <input
                      {...fieldProps("email")}
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(event) => update("email", event.target.value)}
                    />
                    {errorText("email")}
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-semibold">
                      {t("form.phone")}{" "}
                      <span className="font-normal text-muted-foreground">
                        ({t("form.optional")})
                      </span>
                    </label>
                    <input
                      {...fieldProps("phone")}
                      type="tel"
                      autoComplete="tel"
                      placeholder="+389 70 123 456"
                      value={form.phone}
                      onChange={(event) => update("phone", event.target.value)}
                    />
                    {errorText("phone")}
                  </div>
                  <div>
                    <label htmlFor="subject" className="text-sm font-semibold">
                      {t("form.subject")}
                    </label>
                    <select
                      {...fieldProps("subject")}
                      value={form.subject}
                      onChange={(event) => update("subject", event.target.value)}
                    >
                      <option value="">{t("form.select")}</option>
                      <option value="tours">{t("form.subject.tours")}</option>
                      <option value="membership">{t("form.subject.membership")}</option>
                      <option value="partnership">{t("form.subject.partnership")}</option>
                      <option value="other">{t("form.subject.other")}</option>
                    </select>
                    {errorText("subject")}
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="text-sm font-semibold">
                      {t("form.message")}
                    </label>
                    <textarea
                      {...fieldProps("message")}
                      rows={5}
                      value={form.message}
                      onChange={(event) => update("message", event.target.value)}
                    />
                    {errorText("message")}
                  </div>
                </div>
                <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                  {t("contact.form.submit")}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={t("contact.map.title")} subtitle={t("contact.map.text")} />
          <div className="card-surface mt-8 overflow-hidden">
            <div className="relative aspect-[16/9] w-full bg-primary-soft sm:aspect-[21/9]">
              <div
                className="absolute inset-0 opacity-60"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "linear-gradient(0deg, var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <MapPin className="size-7" aria-hidden="true" />
                </span>
                <p className="mt-3 font-display text-base font-bold">{t("contact.map.marker")}</p>
                <p className="text-sm text-muted-foreground">{tr(site.address)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
