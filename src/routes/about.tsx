import { Link, createFileRoute } from "@tanstack/react-router";

import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import aboutImage from "@/assets/about-group.jpg";
import forestImage from "@/assets/gallery-forest.jpg";
import { timeline, values } from "@/data/site";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — The Mountain Escape" },
      {
        name: "description",
        content:
          "Our story, mission, vision and values: how The Mountain Escape grew from a group of friends in Skopje into a hiking community of 2,000+ people.",
      },
      { property: "og:title", content: "About Us — The Mountain Escape" },
      {
        property: "og:description",
        content:
          "A community built on a love of mountains, safe hiking and responsible care for nature.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t, tr } = useI18n();

  return (
    <>
      <PageHero
        image={forestImage}
        imageAlt="Beech forest in morning mist on a Macedonian mountain"
        eyebrow={t("home.about.eyebrow")}
        title={t("about.hero.title")}
        subtitle={t("about.hero.subtitle")}
      />

      <section className="container-page py-16 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading title={t("about.story.title")} subtitle={t("home.about.body1")} />
            <p className="mt-4 text-muted-foreground">{t("home.about.body2")}</p>
            <p className="mt-4 text-muted-foreground">{t("about.philosophy.text")}</p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={aboutImage}
              alt="Hikers of The Mountain Escape gathered on a summit plateau"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="card-surface h-full p-7">
              <h2 className="text-xl">{t("about.mission.title")}</h2>
              <p className="mt-3 text-muted-foreground">{t("about.mission.text")}</p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="card-surface h-full p-7">
              <h2 className="text-xl">{t("about.vision.title")}</h2>
              <p className="mt-3 text-muted-foreground">{t("about.vision.text")}</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <SectionHeading title={t("about.values.title")} align="center" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal as="li" key={value.icon} delay={(index % 3) * 90}>
              <div className="card-surface card-hover h-full p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                  <Icon name={value.icon} className="size-6" />
                </span>
                <h3 className="mt-5 text-lg">{tr(value.title)}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tr(value.text)}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-forest py-16 text-forest-foreground sm:py-24">
        <div className="container-page">
          <SectionHeading title={t("about.timeline.title")} align="center" light />
          <ol className="relative mx-auto mt-12 max-w-3xl border-l border-forest-foreground/25 pl-6">
            {timeline.map((item, index) => (
              <Reveal as="li" key={item.year} delay={index * 70} className="relative pb-9 last:pb-0">
                <span
                  className="absolute -left-[31px] top-1.5 size-3.5 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <p className="font-display text-lg font-bold text-accent">{item.year}</p>
                <p className="mt-1 text-forest-foreground/85">{tr(item.text)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-page py-16 sm:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <article className="card-surface h-full p-7">
              <h2 className="text-xl">{t("about.community.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("about.community.text")}</p>
            </article>
          </Reveal>
          <Reveal delay={100}>
            <article className="card-surface h-full p-7">
              <h2 className="text-xl">{t("about.eco.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("about.eco.text")}</p>
            </article>
          </Reveal>
          <Reveal delay={200}>
            <article className="card-surface h-full p-7">
              <h2 className="text-xl">{t("about.philosophy.title")}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{t("about.philosophy.text")}</p>
            </article>
          </Reveal>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link to="/tours" className="btn-primary">
            {t("cta.exploreTours")}
          </Link>
          <Link to="/membership" className="btn-outline">
            {t("cta.becomeMember")}
          </Link>
        </div>
      </section>
    </>
  );
}
