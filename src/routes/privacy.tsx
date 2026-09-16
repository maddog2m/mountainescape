import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/PageHero";
import heroImage from "@/assets/gallery-forest.jpg";
import { site } from "@/data/site";
import { useI18n, type Localized, type LocalizedList } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Mountain Escape" },
      {
        name: "description",
        content:
          "How The Mountain Escape collects, uses and protects personal data from membership applications, event registrations, contact forms and cookies.",
      },
      { property: "og:title", content: "Privacy Policy — The Mountain Escape" },
      { property: "og:description", content: "How we collect, use and protect your personal data." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PrivacyPage,
});

type Section = { title: Localized; paragraphs: LocalizedList; bullets?: LocalizedList };

const sections: Section[] = [
  {
    title: { mk: "1. Лични податоци што ги собираме", en: "1. Personal information we collect" },
    paragraphs: {
      mk: [
        "Собираме само податоци што ни се потребни за организирање планинарења и комуникација со членовите.",
      ],
      en: [
        "We collect only the data we need to organize hikes and communicate with our members.",
      ],
    },
    bullets: {
      mk: [
        "Име и презиме, е-пошта и телефонски број",
        "Датум на раѓање и планинарско искуство при пријава за членство",
        "Контакт за итни случаи, кој се користи само во случај на инцидент",
        "Содржината на пораката што ни ја испраќате преку формуларот за контакт",
      ],
      en: [
        "Full name, email address and phone number",
        "Date of birth and hiking experience in a membership application",
        "An emergency contact, used only in the event of an incident",
        "The content of any message you send us through the contact form",
      ],
    },
  },
  {
    title: { mk: "2. Пријава за членство и настани", en: "2. Membership and event registration" },
    paragraphs: {
      mk: [
        "Податоците од пријавите ги користиме за да ве вклучиме во листата на учесници, да ве известиме за промени во распоредот и да обезбедиме соодветен број водичи.",
        "Списоците на учесници се достапни само на водичите на конкретното планинарење.",
      ],
      en: [
        "Application data is used to add you to the participant list, notify you of schedule changes and ensure an appropriate number of guides.",
        "Participant lists are available only to the guides of the specific hike.",
      ],
    },
  },
  {
    title: { mk: "3. Формулари за контакт", en: "3. Contact forms" },
    paragraphs: {
      mk: [
        "Пораките испратени преку сајтот ги користиме исклучиво за да одговориме на вашето прашање. Овој демонстративен сајт нема серверска обработка — формуларите се валидираат локално во прелистувачот.",
      ],
      en: [
        "Messages sent through the site are used solely to answer your question. This presentation website has no server-side processing — forms are validated locally in your browser.",
      ],
    },
  },
  {
    title: { mk: "4. Колачиња", en: "4. Cookies" },
    paragraphs: {
      mk: [
        "Користиме неопходни колачиња за да го запомниме избраниот јазик и вашата одлука за колачиња. Со копчето „Само неопходни“ не се поставуваат никакви дополнителни колачиња.",
      ],
      en: [
        "We use necessary cookies to remember your chosen language and your cookie decision. Choosing 'Necessary Only' sets no additional cookies.",
      ],
    },
  },
  {
    title: { mk: "5. Аналитика", en: "5. Analytics" },
    paragraphs: {
      mk: [
        "Ако прифатите сите колачиња, можеме да користиме анонимна статистика за посетеност за да го подобрим сајтот. Овие податоци не ве идентификуваат лично и не се продаваат на трети страни.",
      ],
      en: [
        "If you accept all cookies, we may use anonymous visit statistics to improve the site. This data does not identify you personally and is never sold to third parties.",
      ],
    },
  },
  {
    title: { mk: "6. Како ги користиме податоците", en: "6. How we use your data" },
    paragraphs: {
      mk: [
        "Податоците ги користиме за организација на активности, безбедност на терен и известувања за календарот. Не ги користиме за автоматизирано профилирање.",
      ],
      en: [
        "We use data to organize activities, ensure safety in the field and send calendar notifications. We do not use it for automated profiling.",
      ],
    },
  },
  {
    title: { mk: "7. Твои права", en: "7. Your rights" },
    paragraphs: {
      mk: ["Во секое време имате право да:"],
      en: ["At any time you have the right to:"],
    },
    bullets: {
      mk: [
        "побарате пристап до податоците што ги чуваме за вас",
        "побарате исправка на неточни податоци",
        "побарате целосно бришење на вашите податоци",
        "ја откажете претплатата на нашите известувања",
      ],
      en: [
        "request access to the data we hold about you",
        "request correction of inaccurate data",
        "request complete deletion of your data",
        "unsubscribe from our notifications",
      ],
    },
  },
];

function PrivacyPage() {
  const { t, tr, trList } = useI18n();

  return (
    <>
      <PageHero
        image={heroImage}
        imageAlt="Quiet forest path on a Macedonian mountain"
        eyebrow={t("cookies.title")}
        title={t("privacy.hero.title")}
        subtitle={t("privacy.hero.subtitle")}
      />

      <section className="container-page py-14 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-muted-foreground">{t("privacy.updated")}</p>
          {sections.map((section) => (
            <section key={section.title.en} className="mt-10">
              <h2 className="text-xl sm:text-2xl">{tr(section.title)}</h2>
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

          <section className="mt-10">
            <h2 className="text-xl sm:text-2xl">
              {tr({ mk: "8. Контакт информации", en: "8. Contact information" })}
            </h2>
            <p className="mt-4 text-muted-foreground">
              {tr({
                mk: "За сите прашања поврзани со приватноста, пишете ни на:",
                en: "For any privacy-related questions, write to us at:",
              })}
            </p>
            <ul className="mt-4 space-y-1 text-muted-foreground">
              <li>
                <a className="text-primary hover:underline" href={site.emailHref}>
                  {site.email}
                </a>
              </li>
              <li>
                <a className="text-primary hover:underline" href={site.phoneHref}>
                  {site.phone}
                </a>
              </li>
              <li>{tr(site.address)}</li>
            </ul>
          </section>
        </div>
      </section>
    </>
  );
}
