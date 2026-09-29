import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "mk" | "en";
export type Localized = { mk: string; en: string };
export type LocalizedList = { mk: string[]; en: string[] };

const STORAGE_KEY = "tme-lang";

export const dict = {
  "brand.tagline": {
    mk: "\n",
    en: "Hiking & mountaineering club",
  },

  "nav.home": { mk: "Дома", en: "Home" },
  "nav.about": { mk: "За нас", en: "About" },
  "nav.tours": { mk: "Планинарења", en: "Hiking Tours" },
  "nav.events": { mk: "Настани", en: "Events" },
  "nav.team": { mk: "Тим", en: "Team" },
  "nav.gallery": { mk: "Галерија", en: "Gallery" },
  "nav.blog": { mk: "Блог", en: "Blog" },
  "nav.contact": { mk: "Контакт", en: "Contact" },
  "nav.membership": { mk: "Членство", en: "Membership" },
  "nav.privacy": { mk: "Политика на приватност", en: "Privacy Policy" },
  "nav.openMenu": { mk: "Отвори мени", en: "Open menu" },
  "nav.closeMenu": { mk: "Затвори мени", en: "Close menu" },
  "nav.language": { mk: "Јазик", en: "Language" },

  "cta.joinUs": { mk: "Придружи се", en: "Join Us" },
  "cta.exploreTours": { mk: "Разгледај планинарења", en: "Explore Tours" },
  "cta.viewDetails": { mk: "Види детали", en: "View Details" },
  "cta.learnMore": { mk: "Прочитај повеќе", en: "Learn More" },
  "cta.readMore": { mk: "Прочитај", en: "Read More" },
  "cta.viewUpcoming": { mk: "Претстојни планинарења", en: "View Upcoming Hikes" },
  "cta.becomeMember": { mk: "Стани член", en: "Become a Member" },
  "cta.joinHike": { mk: "Придружи се на планинарењето", en: "Join This Hike" },
  "cta.allTours": { mk: "Сите планинарења", en: "All Hiking Tours" },
  "cta.allEvents": { mk: "Сите настани", en: "All Events" },
  "cta.allArticles": { mk: "Сите статии", en: "All Articles" },
  "cta.backToTop": { mk: "Врати се на почеток", en: "Back to top" },
  "cta.contactUs": { mk: "Контактирај нѐ", en: "Contact Us" },
  "cta.meetTeam": { mk: "Запознај го тимот", en: "Meet the Team" },
  "cta.close": { mk: "Затвори", en: "Close" },
  "cta.prev": { mk: "Претходна", en: "Previous" },
  "cta.next": { mk: "Следна", en: "Next" },

  "diff.easy": { mk: "Лесно", en: "Easy" },
  "diff.moderate": { mk: "Средно", en: "Moderate" },
  "diff.difficult": { mk: "Тешко", en: "Difficult" },
  "diff.advanced": { mk: "Напредно", en: "Advanced" },

  "label.location": { mk: "Локација", en: "Location" },
  "label.difficulty": { mk: "Тежина", en: "Difficulty" },
  "label.duration": { mk: "Времетраење", en: "Duration" },
  "label.distance": { mk: "Дистанца", en: "Distance" },
  "label.elevation": { mk: "Висинска разлика", en: "Elevation gain" },
  "label.date": { mk: "Датум", en: "Date" },
  "label.departure": { mk: "Тргнување", en: "Departure time" },
  "label.meeting": { mk: "Место на средба", en: "Meeting point" },
  "label.fee": { mk: "Партиципација", en: "Participation fee" },
  "label.category": { mk: "Категорија", en: "Category" },
  "label.author": { mk: "Автор", en: "Author" },
  "label.experience": { mk: "Искуство", en: "Experience" },
  "label.specialties": { mk: "Специјалности", en: "Specialties" },
  "label.years": { mk: "години", en: "years" },
  "label.eventType": { mk: "Тип на настан", en: "Event type" },
  "label.all": { mk: "Сите", en: "All" },

  "home.hero.title": {
    mk: "Излези од обичното. Откриј ги планините.",
    en: "Escape the Ordinary. Discover the Mountains.",
  },
  "home.hero.subtitle": {
    mk: "Истражувај восхитувачки патеки, запознај нови луѓе и доживеј незаборавни авантури со The Mountain Escape.",
    en: "Explore breathtaking trails, meet new people and experience unforgettable adventures with The Mountain Escape.",
  },
  "home.hero.badge": { mk: "Скопје, Северна Македонија", en: "Skopje, North Macedonia" },
  "home.stats.hikes": { mk: "организирани планинарења", en: "organized hikes" },
  "home.stats.participants": { mk: "учесници", en: "participants" },
  "home.stats.destinations": { mk: "планински дестинации", en: "mountain destinations" },
  "home.stats.guides": { mk: "искусни водичи", en: "experienced guides" },
  "home.about.eyebrow": { mk: "За нас", en: "About us" },
  "home.about.title": { mk: "За The Mountain Escape", en: "About The Mountain Escape" },
  "home.about.body1": {
    mk: "The Mountain Escape е планинарско друштво посветено на активности на отворено, истражување на планините, здрав начин на живот и поврзување на луѓето преку природата.",
    en: "The Mountain Escape is a hiking and mountaineering organization dedicated to outdoor activities, mountain exploration, healthy lifestyles and connecting people through nature.",
  },
  "home.about.body2": {
    mk: "Од 2018 година организираме безбедни, добро подготвени планинарења по целата територија на Северна Македонија — од утрински искачувања на Водно до вишински експедиции на Кораб.",
    en: "Since 2018 we have been organizing safe, well-prepared hikes across North Macedonia — from sunrise walks on Vodno to high-altitude expeditions on Korab.",
  },
  "home.tours.eyebrow": { mk: "Планинарења", en: "Hiking tours" },
  "home.tours.title": { mk: "Избрани планинарења", en: "Featured Hiking Tours" },
  "home.tours.subtitle": {
    mk: "Најпопуларните патеки од нашиот календар. Секое планинарење е водено од сертифициран водич.",
    en: "The most popular trails in our calendar. Every hike is led by a certified guide.",
  },
  "home.why.eyebrow": { mk: "Зошто со нас", en: "Why us" },
  "home.why.title": { mk: "Зошто да планинарите со нас?", en: "Why Hike With Us?" },
  "home.why.guides.title": { mk: "Искусни водичи", en: "Experienced guides" },
  "home.why.guides.text": {
    mk: "Нашиот тим има повеќе од 60 години заедничко искуство на планина.",
    en: "Our team brings more than 60 combined years of mountain experience.",
  },
  "home.why.routes.title": { mk: "Внимателно планирани маршрути", en: "Carefully planned routes" },
  "home.why.routes.text": {
    mk: "Секоја патека е претходно проверена, измерена и прилагодена на групата.",
    en: "Every trail is scouted, measured and adapted to the group in advance.",
  },
  "home.why.safety.title": { mk: "Безбедноста на прво место", en: "Safety first" },
  "home.why.safety.text": {
    mk: "Прва помош, комуникациска опрема и јасен план за секое искачување.",
    en: "First aid, communication gear and a clear plan on every ascent.",
  },
  "home.why.community.title": { mk: "Пријателска заедница", en: "Friendly community" },
  "home.why.community.text": {
    mk: "Повеќе од 2.000 планинари кои се враќаат заради луѓето, не само заради врвовите.",
    en: "More than 2,000 hikers who come back for the people, not only the peaks.",
  },
  "home.why.levels.title": { mk: "Авантури за секое ниво", en: "Adventures for different skill levels" },
  "home.why.levels.text": {
    mk: "Од лесни семејни прошетки до напредни вишински искачувања.",
    en: "From easy family walks to advanced high-altitude ascents.",
  },
  "home.why.places.title": { mk: "Прекрасни дестинации", en: "Beautiful destinations" },
  "home.why.places.text": {
    mk: "Матка, Пелистер, Шар Планина, Галичица, Маврово и уште 25 дестинации.",
    en: "Matka, Pelister, Šar Mountain, Galičica, Mavrovo and 25 more destinations.",
  },
  "home.testimonials.eyebrow": { mk: "Искуства", en: "Testimonials" },
  "home.testimonials.title": { mk: "Што кажуваат планинарите", en: "What our hikers say" },
  "home.cta.title": { mk: "Твојата следна авантура почнува тука.", en: "Your next adventure starts here." },
  "home.cta.subtitle": {
    mk: "Погледни го календарот на планинарења или стани член и добивај приоритетни пријави.",
    en: "Browse the hiking calendar or become a member and get priority registration.",
  },

  "about.hero.title": { mk: "За The Mountain Escape", en: "About The Mountain Escape" },
  "about.hero.subtitle": {
    mk: "Заедница создадена од љубов кон планините, безбедното планинарење и одговорниот однос кон природата.",
    en: "A community built on a love of mountains, safe hiking and responsible care for nature.",
  },
  "about.story.title": { mk: "Нашата приказна", en: "Our story" },
  "about.mission.title": { mk: "Мисија", en: "Mission" },
  "about.mission.text": {
    mk: "Нашата мисија е да ги инспирираме луѓето да ја истражуваат природата, да развиваат здрави навики и да ја откриваат убавината на планините безбедно и одговорно.",
    en: "Our mission is to inspire people to explore nature, develop healthy habits and discover the beauty of the mountains safely and responsibly.",
  },
  "about.vision.title": { mk: "Визија", en: "Vision" },
  "about.vision.text": {
    mk: "Да станеме најдоверливата планинарска заедница во Северна Македонија — место каде секој почетник ќе најде водич, а секој искусен планинар ново предизвикувачко искачување.",
    en: "To become the most trusted hiking community in North Macedonia — a place where every beginner finds a guide and every experienced hiker finds a new challenge.",
  },
  "about.timeline.title": { mk: "Патот досега", en: "Our journey so far" },
  "about.values.title": { mk: "Наши вредности", en: "Our values" },
  "about.community.title": { mk: "Заедница", en: "Community" },
  "about.community.text": {
    mk: "Планинарењето кај нас е социјално искуство. Организираме заеднички превоз, дружби по искачувањата и работилници каде членовите учат едни од други.",
    en: "Hiking with us is a social experience. We organize shared transport, post-hike gatherings and workshops where members learn from each other.",
  },
  "about.eco.title": { mk: "Одговорност кон природата", en: "Environmental responsibility" },
  "about.eco.text": {
    mk: "Работиме по принципот „Не оставај следа“. Секоја година организираме најмалку четири акции за чистење на планински патеки и соработуваме со националните паркови.",
    en: "We follow the Leave No Trace principle. Every year we organize at least four trail clean-up actions and cooperate with the national parks.",
  },
  "about.philosophy.title": { mk: "Наша планинарска филозофија", en: "Our hiking philosophy" },
  "about.philosophy.text": {
    mk: "Врвот е само половина од приказната. Темпото го одредува најбавниот во групата, никој не се враќа сам и секое искачување завршува со безбедно слегување.",
    en: "The summit is only half the story. The pace is set by the slowest member, nobody walks back alone and every ascent ends with a safe descent.",
  },

  "tours.hero.title": { mk: "Планинарења", en: "Hiking Tours" },
  "tours.hero.subtitle": {
    mk: "Избери патека според тежина, времетраење и локација. Сите планинарења вклучуваат професионален водич.",
    en: "Choose a trail by difficulty, duration and location. All hikes include a professional guide.",
  },
  "tours.filters.title": { mk: "Филтрирај планинарења", en: "Filter hikes" },
  "tours.filters.reset": { mk: "Исчисти филтри", en: "Clear filters" },
  "tours.filters.duration": { mk: "Времетраење", en: "Duration" },
  "tours.filters.durationShort": { mk: "До 5 часа", en: "Up to 5 hours" },
  "tours.filters.durationMedium": { mk: "5 – 8 часа", en: "5 – 8 hours" },
  "tours.filters.durationLong": { mk: "Повеќе од 8 часа", en: "More than 8 hours" },
  "tours.results": { mk: "пронајдени планинарења", en: "hikes found" },
  "tours.empty": {
    mk: "Нема планинарења според избраните филтри. Пробај со друга комбинација.",
    en: "No hikes match the selected filters. Try a different combination.",
  },

  "tour.about.title": { mk: "За патеката", en: "About the Trail" },
  "tour.bring.title": { mk: "Што да носиш", en: "What to Bring" },
  "tour.included.title": { mk: "Што е вклучено", en: "What's Included" },
  "tour.important.title": { mk: "Важни информации", en: "Important Information" },
  "tour.highlights.title": { mk: "Главни атракции", en: "Trail highlights" },
  "tour.details.title": { mk: "Детали за планинарењето", en: "Hike details" },
  "tour.guide": { mk: "Водич", en: "Guide" },
  "tour.related": { mk: "Слични планинарења", en: "Similar hikes" },
  "tour.notFound": { mk: "Планинарењето не е најдено.", en: "This hike was not found." },

  "events.hero.title": { mk: "Настани", en: "Events" },
  "events.hero.subtitle": {
    mk: "Планинарења за викенд, кампувања, работилници и еколошки акции — целата програма на нашата заедница.",
    en: "Weekend hikes, camping trips, workshops and clean-up actions — the full programme of our community.",
  },
  "events.upcoming": { mk: "Претстојни настани", en: "Upcoming Events" },
  "events.past": { mk: "Претходни настани", en: "Past Events" },
  "events.details": { mk: "Детали", en: "Details" },
  "events.completed": { mk: "Реализиран", en: "Completed" },

  "team.hero.title": { mk: "Нашиот тим", en: "Our Team" },
  "team.hero.subtitle": {
    mk: "Водичи, координатори и фотографи кои стојат зад секое наше планинарење.",
    en: "The guides, coordinators and photographers behind every one of our hikes.",
  },
  "team.join.title": { mk: "Сакаш да водиш планинарења со нас?", en: "Want to guide hikes with us?" },
  "team.join.text": {
    mk: "Секоја сезона го зголемуваме тимот со сертифицирани водичи и волонтери. Пиши ни и се гледаме на патека.",
    en: "Every season we grow the team with certified guides and volunteers. Write to us and we will meet on the trail.",
  },

  "gallery.hero.title": { mk: "Галерија", en: "Gallery" },
  "gallery.hero.subtitle": {
    mk: "Фотографии од нашите планинарења, врвови, кампувања и настани на заедницата.",
    en: "Photographs from our hikes, peaks, camping trips and community events.",
  },
  "gallery.cat.hiking": { mk: "Планинарење", en: "Hiking" },
  "gallery.cat.mountains": { mk: "Планини", en: "Mountains" },
  "gallery.cat.camping": { mk: "Кампување", en: "Camping" },
  "gallery.cat.community": { mk: "Заедница", en: "Community" },
  "gallery.cat.events": { mk: "Настани", en: "Events" },
  "gallery.openImage": { mk: "Отвори фотографија", en: "Open photograph" },

  "blog.hero.title": { mk: "Блог и новости", en: "Blog & News" },
  "blog.hero.subtitle": {
    mk: "Совети за планинарење, опрема, безбедност и дестинации, напишани од нашите водичи.",
    en: "Hiking tips, gear advice, safety and destinations, written by our guides.",
  },
  "blog.related": { mk: "Слични статии", en: "Related Articles" },
  "blog.notFound": { mk: "Статијата не е најдена.", en: "This article was not found." },
  "blog.readTime": { mk: "мин. читање", en: "min read" },
  "blog.cat.tips": { mk: "Совети", en: "Hiking Tips" },
  "blog.cat.gear": { mk: "Опрема", en: "Equipment" },
  "blog.cat.destinations": { mk: "Дестинации", en: "Destinations" },
  "blog.cat.safety": { mk: "Безбедност", en: "Safety" },
  "blog.cat.community": { mk: "Заедница", en: "Community" },
  "blog.cat.nature": { mk: "Природа", en: "Nature" },

  "membership.hero.title": { mk: "Членство", en: "Membership" },
  "membership.hero.subtitle": {
    mk: "Стани дел од The Mountain Escape и планинари со заедница која те чека на секој старт.",
    en: "Become part of The Mountain Escape and hike with a community that waits for you at every trailhead.",
  },
  "membership.benefits.title": { mk: "Придобивки од членството", en: "Membership benefits" },
  "membership.types.title": { mk: "Типови членство", en: "Membership types" },
  "membership.popular": { mk: "Најизбирано", en: "Most chosen" },
  "membership.form.title": { mk: "Пријава за членство", en: "Membership registration" },
  "membership.form.subtitle": {
    mk: "Пополни ја пријавата и ќе те контактираме во рок од два работни дена.",
    en: "Fill in the form and we will contact you within two working days.",
  },
  "membership.form.success": {
    mk: "Ви благодариме што се придружувате на The Mountain Escape! Ќе ве контактираме со повеќе информации.",
    en: "Thank you for joining The Mountain Escape! We will contact you with more information.",
  },
  "membership.form.submit": { mk: "Испрати пријава", en: "Submit application" },
  "membership.form.another": { mk: "Пополни нова пријава", en: "Submit another application" },

  "form.fullName": { mk: "Име и презиме", en: "Full Name" },
  "form.email": { mk: "Е-пошта", en: "Email" },
  "form.phone": { mk: "Телефон", en: "Phone Number" },
  "form.birth": { mk: "Датум на раѓање", en: "Date of Birth" },
  "form.experienceLevel": { mk: "Планинарско искуство", en: "Hiking Experience" },
  "form.preferredDifficulty": { mk: "Претпочитана тежина", en: "Preferred Hiking Difficulty" },
  "form.emergency": { mk: "Контакт за итни случаи", en: "Emergency Contact" },
  "form.message": { mk: "Порака", en: "Message" },
  "form.subject": { mk: "Тема", en: "Subject" },
  "form.name": { mk: "Име", en: "Name" },
  "form.select": { mk: "Избери…", en: "Select…" },
  "form.optional": { mk: "опционално", en: "optional" },
  "form.exp.none": { mk: "Без искуство", en: "No experience" },
  "form.exp.some": { mk: "Неколку планинарења", en: "A few hikes" },
  "form.exp.regular": { mk: "Редовен планинар", en: "Regular hiker" },
  "form.exp.advanced": { mk: "Напреден планинар", en: "Advanced hiker" },
  "form.subject.tours": { mk: "Прашање за планинарење", en: "Question about a hike" },
  "form.subject.membership": { mk: "Членство", en: "Membership" },
  "form.subject.partnership": { mk: "Соработка", en: "Partnership" },
  "form.subject.other": { mk: "Друго", en: "Other" },
  "form.err.required": { mk: "Ова поле е задолжително.", en: "This field is required." },
  "form.err.name": { mk: "Внеси име и презиме (најмалку 3 знаци).", en: "Enter your name (at least 3 characters)." },
  "form.err.email": { mk: "Внеси валидна е-пошта.", en: "Enter a valid email address." },
  "form.err.phone": { mk: "Внеси валиден телефонски број.", en: "Enter a valid phone number." },
  "form.err.date": { mk: "Внеси валиден датум.", en: "Enter a valid date." },
  "form.err.message": { mk: "Пораката треба да има најмалку 10 знаци.", en: "The message must be at least 10 characters." },
  "form.err.select": { mk: "Избери една опција.", en: "Please select an option." },

  "contact.hero.title": { mk: "Контакт", en: "Contact" },
  "contact.hero.subtitle": {
    mk: "Пиши ни за планинарења, членство или соработка. Одговараме секој работен ден.",
    en: "Write to us about hikes, membership or partnerships. We reply every working day.",
  },
  "contact.info.title": { mk: "Информации", en: "Organization information" },
  "contact.hours.title": { mk: "Работно време", en: "Working hours" },
  "contact.hours.week": { mk: "Понеделник – Петок: 09:00 – 17:00", en: "Monday – Friday: 09:00 – 17:00" },
  "contact.hours.sat": { mk: "Сабота: според закажана активност", en: "Saturday: by scheduled activity" },
  "contact.hours.sun": { mk: "Недела: планинарски ден / закажани настани", en: "Sunday: hiking day / scheduled events" },
  "contact.form.title": { mk: "Испрати порака", en: "Send a message" },
  "contact.form.submit": { mk: "Испрати порака", en: "Send message" },
  "contact.form.success": {
    mk: "Ви благодариме! Вашата порака е успешно испратена.",
    en: "Thank you! Your message has been sent successfully.",
  },
  "contact.form.another": { mk: "Испрати нова порака", en: "Send another message" },
  "contact.map.title": { mk: "Каде сме", en: "Where to find us" },
  "contact.map.text": {
    mk: "Нашата база е во центарот на Скопје, на пет минути од главниот плоштад. Стартовите за планинарења обично се на Водно, кај првата станица на кабинската железница.",
    en: "Our base is in central Skopje, five minutes from the main square. Hike departures are usually at Vodno, by the lower cable-car station.",
  },
  "contact.map.marker": { mk: "Скопје, Северна Македонија", en: "Skopje, North Macedonia" },

  "privacy.hero.title": { mk: "Политика на приватност", en: "Privacy Policy" },
  "privacy.hero.subtitle": {
    mk: "Како ги собираме, користиме и заштитуваме твоите лични податоци.",
    en: "How we collect, use and protect your personal data.",
  },
  "privacy.updated": { mk: "Последно ажурирано: 1 јануари 2026", en: "Last updated: 1 January 2026" },

  "cookies.text": {
    mk: " Kористиме колачиња за подобрување на вашето корисничко искуство.",
    en: "We use cookies to improve your browsing experience.",
  },
  "cookies.acceptAll": { mk: "Прифати сите", en: "Accept All" },
  "cookies.necessary": { mk: "Само неопходни", en: "Necessary Only" },
  "cookies.learnMore": { mk: "Прочитај повеќе", en: "Learn More" },
  "cookies.title": { mk: "Колачиња", en: "Cookies" },

  "notfound.title": { mk: "Изгуби ли патека?", en: "Lost the trail?" },
  "notfound.subtitle": {
    mk: "Страницата што ја бараш не постои или е преместена. Врати се на маркираната патека.",
    en: "The page you are looking for does not exist or has been moved. Let's get you back on the marked trail.",
  },
  "notfound.home": { mk: "Назад на почетна", en: "Back home" },

  "footer.about": {
    mk: "Заедница посветена на планините, авантурата и незаборавните искуства на отворено.",
    en: "A community dedicated to mountains, adventure and unforgettable outdoor experiences.",
  },
  "footer.quickLinks": { mk: "Брзи линкови", en: "Quick Links" },
  "footer.contact": { mk: "Контакт", en: "Contact" },
  "footer.follow": { mk: "Следи нѐ", en: "Follow Us" },
  "footer.rights": {
    mk: "© 2026 The Mountain Escape. Сите права задржани.",
    en: "© 2026 The Mountain Escape. All rights reserved.",
  },
  "footer.newsletterNote": {
    mk: "Планинарски календар секој петок на нашите социјални мрежи.",
    en: "Hiking calendar every Friday on our social channels.",
  },
} as const;

export type TranslationKey = keyof typeof dict;

type I18nValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
  tr: (value: Localized) => string;
  trList: (value: LocalizedList) => string[];
};

const I18nContext = createContext<I18nValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("mk");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "mk" || stored === "en") setLangState(stored);
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo<I18nValue>(
    () => ({
      lang,
      setLang,
      t: (key) => dict[key][lang],
      tr: (value) => value[lang],
      trList: (value) => value[lang],
    }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    return {
      lang: "mk",
      setLang: () => undefined,
      t: (key) => dict[key].mk,
      tr: (value) => value.mk,
      trList: (value) => value.mk,
    };
  }
  return ctx;
}

const monthNames: Record<Lang, string[]> = {
  mk: [
    "јануари",
    "февруари",
    "март",
    "април",
    "мај",
    "јуни",
    "јули",
    "август",
    "септември",
    "октомври",
    "ноември",
    "декември",
  ],
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

/** Deterministic on server and client — no Intl locale data required. */
export function formatDate(iso: string, lang: Lang): string {
  const [year, month, day] = iso.split("-").map((part) => Number(part));
  const name = monthNames[lang][(month ?? 1) - 1];
  return lang === "mk" ? `${day} ${name} ${year}` : `${day} ${name} ${year}`;
}
