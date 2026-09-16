import { Link, createFileRoute } from "@tanstack/react-router";
import { Check, CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/about-group.jpg";
import { difficultyKey } from "@/data/tours";
import { useI18n, type Localized } from "@/lib/i18n";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership — Join The Mountain Escape" },
      {
        name: "description",
        content:
          "Become a member of The Mountain Escape: priority registration, discounted hikes, workshops, outdoor education and member-only adventures.",
      },
      { property: "og:title", content: "Membership — Join The Mountain Escape" },
      {
        property: "og:description",
        content: "Become part of a hiking community that waits for you at every trailhead.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: MembershipPage,
});

const benefits: Localized[] = [
  { mk: "Пристап до сите организирани планинарења", en: "Access to every organized hike" },
  { mk: "Попуст на партиципацијата за планинарења", en: "Discounted participation fees" },
  { mk: "Настани и дружби само за членови", en: "Community events and member gatherings" },
  { mk: "Бесплатни работилници за опрема и навигација", en: "Free gear and navigation workshops" },
  { mk: "Едукација за безбедност на отворено", en: "Outdoor safety education" },
  { mk: "Приоритетна пријава за ограничени искачувања", en: "Priority registration for limited ascents" },
  { mk: "Авантури достапни само за членови", en: "Member-only adventures" },
];

const plans: {
  id: string;
  name: Localized;
  price: Localized;
  tagline: Localized;
  features: Localized[];
  popular?: boolean;
}[] = [
  {
    id: "basic",
    name: { mk: "Основно членство", en: "Basic Membership" },
    price: { mk: "1.200 MKD / година", en: "1,200 MKD / year" },
    tagline: {
      mk: "За рекреативни планинари кои сакаат по едно искачување месечно.",
      en: "For recreational hikers who want about one hike a month.",
    },
    features: [
      { mk: "Пристап до сите лесни и средни планинарења", en: "Access to all easy and moderate hikes" },
      { mk: "10% попуст на партиципација", en: "10% discount on participation fees" },
      { mk: "Покана за дружбите на заедницата", en: "Invitations to community gatherings" },
      { mk: "Фотографии од секое планинарење", en: "Photographs from every hike" },
    ],
  },
  {
    id: "adventure",
    name: { mk: "Авантуристичко членство", en: "Adventure Membership" },
    price: { mk: "2.400 MKD / година", en: "2,400 MKD / year" },
    tagline: {
      mk: "За чести планинари и учесници во вишински експедиции.",
      en: "For frequent hikers and high-altitude expedition participants.",
    },
    popular: true,
    features: [
      { mk: "Сите придобивки од основното членство", en: "Everything in Basic Membership" },
      { mk: "25% попуст на партиципација", en: "25% discount on participation fees" },
      { mk: "Приоритет за Кораб и Солунска Глава", en: "Priority for Korab and Solunska Glava" },
      { mk: "Бесплатни работилници и позајмување опрема", en: "Free workshops and gear lending" },
    ],
  },
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  birth: string;
  experience: string;
  difficulty: string;
  plan: string;
  emergency: string;
  message: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  birth: "",
  experience: "",
  difficulty: "",
  plan: "basic",
  emergency: "",
  message: "",
};

function MembershipPage() {
  const { t, tr } = useI18n();
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (field: keyof FormState) => (value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 3) next.fullName = t("form.err.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = t("form.err.email");
    if (!/^[+0-9][0-9\s()/-]{6,}$/.test(form.phone.trim())) next.phone = t("form.err.phone");
    if (!form.birth || Number.isNaN(new Date(form.birth).getTime()))
      next.birth = t("form.err.date");
    if (!form.experience) next.experience = t("form.err.select");
    if (!form.difficulty) next.difficulty = t("form.err.select");
    if (form.emergency.trim().length < 3) next.emergency = t("form.err.required");
    return next;
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
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
        imageAlt="Members of The Mountain Escape together on a mountain plateau"
        eyebrow={t("nav.membership")}
        title={t("membership.hero.title")}
        subtitle={t("membership.hero.subtitle")}
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeading title={t("membership.benefits.title")} align="center" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.en} delay={(index % 3) * 70}>
              <div className="card-surface flex h-full items-start gap-3 p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm">{tr(benefit)}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading title={t("membership.types.title")} align="center" />
          <ul className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            {plans.map((plan, index) => (
              <Reveal as="li" key={plan.id} delay={index * 100} className="h-full">
                <article
                  className={`card-surface relative flex h-full flex-col p-7 ${
                    plan.popular ? "border-primary" : ""
                  }`}
                >
                  {plan.popular ? (
                    <span className="absolute -top-3 right-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                      {t("membership.popular")}
                    </span>
                  ) : null}
                  <h3 className="text-xl">{tr(plan.name)}</h3>
                  <p className="mt-2 font-display text-lg font-bold text-primary">{tr(plan.price)}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{tr(plan.tagline)}</p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature.en} className="flex gap-2">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {tr(feature)}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#membership-form"
                    className={`mt-6 ${plan.popular ? "btn-primary" : "btn-outline"}`}
                    onClick={() => setForm((current) => ({ ...current, plan: plan.id }))}
                  >
                    {t("cta.becomeMember")}
                  </a>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="membership-form" className="container-page py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            title={t("membership.form.title")}
            subtitle={t("membership.form.subtitle")}
            align="center"
          />

          {sent ? (
            <div className="card-surface mt-10 p-8 text-center">
              <CheckCircle2 className="mx-auto size-12 text-primary" aria-hidden="true" />
              <p role="status" className="mt-4 text-lg font-semibold">
                {t("membership.form.success")}
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  className="btn-outline"
                  onClick={() => {
                    setForm(emptyForm);
                    setSent(false);
                  }}
                >
                  {t("membership.form.another")}
                </button>
                <Link to="/tours" className="btn-primary">
                  {t("cta.exploreTours")}
                </Link>
              </div>
            </div>
          ) : (
            <form className="card-surface mt-10 p-6 sm:p-8" noValidate onSubmit={onSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="text-sm font-semibold">
                    {t("form.fullName")}
                  </label>
                  <input
                    {...fieldProps("fullName")}
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(event) => update("fullName")(event.target.value)}
                  />
                  {errorText("fullName")}
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
                    onChange={(event) => update("email")(event.target.value)}
                  />
                  {errorText("email")}
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold">
                    {t("form.phone")}
                  </label>
                  <input
                    {...fieldProps("phone")}
                    type="tel"
                    autoComplete="tel"
                    placeholder="+389 70 123 456"
                    value={form.phone}
                    onChange={(event) => update("phone")(event.target.value)}
                  />
                  {errorText("phone")}
                </div>
                <div>
                  <label htmlFor="birth" className="text-sm font-semibold">
                    {t("form.birth")}
                  </label>
                  <input
                    {...fieldProps("birth")}
                    type="date"
                    value={form.birth}
                    onChange={(event) => update("birth")(event.target.value)}
                  />
                  {errorText("birth")}
                </div>
                <div>
                  <label htmlFor="experience" className="text-sm font-semibold">
                    {t("form.experienceLevel")}
                  </label>
                  <select
                    {...fieldProps("experience")}
                    value={form.experience}
                    onChange={(event) => update("experience")(event.target.value)}
                  >
                    <option value="">{t("form.select")}</option>
                    <option value="none">{t("form.exp.none")}</option>
                    <option value="some">{t("form.exp.some")}</option>
                    <option value="regular">{t("form.exp.regular")}</option>
                    <option value="advanced">{t("form.exp.advanced")}</option>
                  </select>
                  {errorText("experience")}
                </div>
                <div>
                  <label htmlFor="difficulty" className="text-sm font-semibold">
                    {t("form.preferredDifficulty")}
                  </label>
                  <select
                    {...fieldProps("difficulty")}
                    value={form.difficulty}
                    onChange={(event) => update("difficulty")(event.target.value)}
                  >
                    <option value="">{t("form.select")}</option>
                    <option value="easy">{t(difficultyKey.easy)}</option>
                    <option value="moderate">{t(difficultyKey.moderate)}</option>
                    <option value="difficult">{t(difficultyKey.difficult)}</option>
                    <option value="advanced">{t(difficultyKey.advanced)}</option>
                  </select>
                  {errorText("difficulty")}
                </div>
                <div>
                  <label htmlFor="plan" className="text-sm font-semibold">
                    {t("membership.types.title")}
                  </label>
                  <select
                    {...fieldProps("plan")}
                    value={form.plan}
                    onChange={(event) => update("plan")(event.target.value)}
                  >
                    {plans.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {tr(plan.name)}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="emergency" className="text-sm font-semibold">
                    {t("form.emergency")}
                  </label>
                  <input
                    {...fieldProps("emergency")}
                    type="text"
                    value={form.emergency}
                    onChange={(event) => update("emergency")(event.target.value)}
                  />
                  {errorText("emergency")}
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-sm font-semibold">
                    {t("form.message")}{" "}
                    <span className="font-normal text-muted-foreground">({t("form.optional")})</span>
                  </label>
                  <textarea
                    {...fieldProps("message")}
                    rows={4}
                    value={form.message}
                    onChange={(event) => update("message")(event.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                {t("membership.form.submit")}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
