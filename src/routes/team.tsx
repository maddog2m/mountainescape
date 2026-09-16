import { Link, createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import heroImage from "@/assets/gallery-community.jpg";
import { team } from "@/data/team";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Guides & Team — The Mountain Escape" },
      {
        name: "description",
        content:
          "Meet the six guides, coordinators and photographers of The Mountain Escape, with their experience and specialities in navigation, safety and photography.",
      },
      { property: "og:title", content: "Our Guides & Team — The Mountain Escape" },
      {
        property: "og:description",
        content: "The guides, coordinators and photographers behind every one of our hikes.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  const { t, tr, trList } = useI18n();

  return (
    <>
      <PageHero
        image={heroImage}
        imageAlt="The Mountain Escape guides and members gathered after a hike"
        eyebrow={t("nav.team")}
        title={t("team.hero.title")}
        subtitle={t("team.hero.subtitle")}
      />

      <section className="container-page py-16 sm:py-24">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Reveal as="li" key={member.name} delay={(index % 3) * 90} className="h-full">
              <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role.en}`}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="text-lg">{member.name}</h2>
                  <p className="mt-1 text-sm font-semibold text-primary">{tr(member.role)}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Award className="size-4" aria-hidden="true" />
                    {member.years} {t("label.years")} {t("label.experience").toLowerCase()}
                  </p>
                  <p className="mt-4 flex-1 text-sm text-muted-foreground">{tr(member.bio)}</p>
                  <div className="mt-5">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      {t("label.specialties")}
                    </h3>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {trList(member.specialties).map((item) => (
                        <li
                          key={item}
                          className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="bg-sand py-16 sm:py-20">
        <div className="container-page text-center">
          <SectionHeading title={t("team.join.title")} subtitle={t("team.join.text")} align="center" />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="btn-primary">
              {t("cta.contactUs")}
            </Link>
            <Link to="/membership" className="btn-outline">
              {t("cta.becomeMember")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
