import type { Localized } from "@/lib/i18n";

export const site = {
  name: "Mountain Escape",
  phone: "+389 70 123 456",
  phoneHref: "tel:+38970123456",
  email: "hello@themountainescape.mk",
  emailHref: "mailto:hello@themountainescape.mk",
  city: { mk: "Скопје, Македонија", en: "Skopje, North Macedonia" } as Localized,
  address: {
    mk: "ул. Македонија 12, 1000 Скопје",
    en: "Makedonija St. 12, 1000 Skopje",
  } as Localized,
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
};

export const stats: { value: string; label: Localized }[] = [
  { value: "150+", label: { mk: "организирани планинарења", en: "organized hikes" } },
  { value: "2.000+", label: { mk: "учесници", en: "participants" } },
  { value: "30+", label: { mk: "планински дестинации", en: "mountain destinations" } },
  { value: "8", label: { mk: "искусни водичи", en: "experienced guides" } },
];

export const timeline: { year: string; text: Localized }[] = [
  {
    year: "2018",
    text: {
      mk: "Основана е заедницата The Mountain Escape од група пријатели од Скопје.",
      en: "The Mountain Escape community was founded by a group of friends from Skopje.",
    },
  },
  {
    year: "2019",
    text: {
      mk: "Првите организирани групни планинарења на Водно и Матка.",
      en: "First organized group hikes on Vodno and in Matka.",
    },
  },
  {
    year: "2021",
    text: {
      mk: "Повеќе од 500 учесници се придружија на нашите авантури.",
      en: "More than 500 participants joined our adventures.",
    },
  },
  {
    year: "2023",
    text: {
      mk: "Ја проширивме програмата на планинарења во цела Северна Македонија.",
      en: "We expanded our tours across the whole of North Macedonia.",
    },
  },
  {
    year: "2025",
    text: {
      mk: "Воведовме напредни вишински експедиции, меѓу кои и Кораб и Солунска Глава.",
      en: "We introduced advanced mountain expeditions, including Korab and Solunska Glava.",
    },
  },
  {
    year: "2026",
    text: {
      mk: "Заедницата надмина 2.000 планинари и осум сертифицирани водичи.",
      en: "The community passed 2,000 hikers and eight certified guides.",
    },
  },
];

export const values: { icon: string; title: Localized; text: Localized }[] = [
  {
    icon: "compass",
    title: { mk: "Авантура", en: "Adventure" },
    text: {
      mk: "Верувајме дека секој има право на своја авантура — без разлика на возраст и кондиција.",
      en: "We believe everyone deserves their own adventure — regardless of age or fitness.",
    },
  },
  {
    icon: "shield",
    title: { mk: "Безбедност", en: "Safety" },
    text: {
      mk: "Планираме однапред, носиме опрема за прва помош и никогаш не ризикуваме заради врв.",
      en: "We plan ahead, carry first aid gear and never take risks for the sake of a summit.",
    },
  },
  {
    icon: "users",
    title: { mk: "Заедница", en: "Community" },
    text: {
      mk: "Групата е посилна од поединецот. Никој не останува сам на патеката.",
      en: "The group is stronger than the individual. Nobody is left alone on the trail.",
    },
  },
  {
    icon: "leaf",
    title: { mk: "Почит кон природата", en: "Respect for nature" },
    text: {
      mk: "Го носиме назад секое ѓубре и ги почитуваме правилата на националните паркови.",
      en: "We carry every piece of rubbish back and respect national park rules.",
    },
  },
  {
    icon: "trending",
    title: { mk: "Личен раст", en: "Personal growth" },
    text: {
      mk: "Секое искачување е чекор кон подобра кондиција и повеќе самодоверба.",
      en: "Every ascent is a step towards better fitness and more confidence.",
    },
  },
  {
    icon: "recycle",
    title: { mk: "Одржливост", en: "Sustainability" },
    text: {
      mk: "Заеднички превоз, локални планинарски куќи и опрема што трае долго.",
      en: "Shared transport, local mountain huts and gear that lasts.",
    },
  },
];

export const testimonials: { name: string; rating: number; text: Localized; role: Localized }[] = [
  {
    name: "Марија Стефановска",
    rating: 5,
    role: { mk: "Членка од 2022", en: "Member since 2022" },
    text: {
      mk: "Првото планинарење ми беше на Водно и оттогаш не сум пропуштила ниту еден викенд. Водичите се трпеливи и одлично организирани.",
      en: "My first hike was on Vodno and I have not missed a weekend since. The guides are patient and superbly organized.",
    },
  },
  {
    name: "Дејан Ристовски",
    rating: 5,
    role: { mk: "Планинар", en: "Hiker" },
    text: {
      mk: "Експедицијата на Кораб беше најдоброто искуство во мојот живот. Безбедносните брифинзи пред искачувањето ми дадоа целосна доверба.",
      en: "The Korab expedition was the best experience of my life. The safety briefings before the ascent gave me complete confidence.",
    },
  },
  {
    name: "Ана Јовановска",
    rating: 5,
    role: { mk: "Членка од 2024", en: "Member since 2024" },
    text: {
      mk: "Дојдов сама, а се вратив со десет нови пријатели. Атмосферата во групата е топла и никој не се чувствува како почетник.",
      en: "I came alone and left with ten new friends. The atmosphere in the group is warm and nobody feels like a beginner.",
    },
  },
  {
    name: "Филип Тодоровски",
    rating: 4,
    role: { mk: "Планинар", en: "Hiker" },
    text: {
      mk: "Патеките се одлично избрани, а фотографиите што ги добиваме по секое планинарење се вистински бонус.",
      en: "The trails are excellently chosen, and the photos we get after every hike are a real bonus.",
    },
  },
];

export const whyUs: { icon: string; titleKey: string; textKey: string }[] = [
  { icon: "award", titleKey: "home.why.guides.title", textKey: "home.why.guides.text" },
  { icon: "map", titleKey: "home.why.routes.title", textKey: "home.why.routes.text" },
  { icon: "shield", titleKey: "home.why.safety.title", textKey: "home.why.safety.text" },
  { icon: "users", titleKey: "home.why.community.title", textKey: "home.why.community.text" },
  { icon: "trending", titleKey: "home.why.levels.title", textKey: "home.why.levels.text" },
  { icon: "mountain", titleKey: "home.why.places.title", textKey: "home.why.places.text" },
];
