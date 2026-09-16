import type { Localized, LocalizedList } from "@/lib/i18n";

import aleksandar from "@/assets/team-aleksandar.jpg";
import elena from "@/assets/team-elena.jpg";
import stefan from "@/assets/team-stefan.jpg";
import martin from "@/assets/team-martin.jpg";
import ana from "@/assets/team-ana.jpg";
import nikola from "@/assets/team-nikola.jpg";

export type Member = {
  name: string;
  image: string;
  role: Localized;
  bio: Localized;
  years: number;
  specialties: LocalizedList;
};

export const team: Member[] = [
  {
    name: "Aleksandar Petrov",
    image: aleksandar,
    role: { mk: "Основач и планински водич", en: "Founder & Mountain Guide" },
    years: 18,
    bio: {
      mk: "Аleksandar основа The Mountain Escape во 2018 година по повеќе од десет години самостојно планинарење. Води сите наши вишински експедиции и е одговорен за безбедносните протоколи.",
      en: "Aleksandar founded The Mountain Escape in 2018 after more than a decade of solo hiking. He leads all our high-altitude expeditions and owns our safety protocols.",
    },
    specialties: {
      mk: ["Вишинско планинарење", "Планинска навигација", "Безбедност на отворено"],
      en: ["High-altitude hiking", "Mountain navigation", "Outdoor safety"],
    },
  },
  {
    name: "Elena Markovska",
    image: elena,
    role: { mk: "Планинарски водич", en: "Hiking Guide" },
    years: 9,
    bio: {
      mk: "Елена ги води нашите планинарења за почетници и семејства. Има сертификат за прва помош во дивина и особено ги сака утринските искачувања.",
      en: "Elena leads our beginner and family hikes. She holds a wilderness first aid certificate and has a special love for sunrise ascents.",
    },
    specialties: {
      mk: ["Прва помош", "Планинарења за почетници", "Планирање на патеки"],
      en: ["First aid", "Beginner hikes", "Trail planning"],
    },
  },
  {
    name: "Stefan Nikolov",
    image: stefan,
    role: { mk: "Планински водич", en: "Mountain Guide" },
    years: 12,
    bio: {
      mk: "Стефан е специјалист за зимско планинарење и искачувања во национални паркови. Го снима и одржува нашиот регистар на GPS маршрути.",
      en: "Stefan specialises in winter hiking and national park ascents. He records and maintains our register of GPS routes.",
    },
    specialties: {
      mk: ["Зимско планинарење", "Планинска навигација", "Национални паркови"],
      en: ["Winter hiking", "Mountain navigation", "National parks"],
    },
  },
  {
    name: "Martin Trajkov",
    image: martin,
    role: { mk: "Координатор за активности", en: "Outdoor Coordinator" },
    years: 7,
    bio: {
      mk: "Мартин ја организира логистиката: превоз, престој во планинарски куќи и распоред на групите. Води и работилници за опрема.",
      en: "Martin runs the logistics: transport, mountain hut stays and group scheduling. He also leads our gear workshops.",
    },
    specialties: {
      mk: ["Логистика", "Кампување", "Опрема за планинарење"],
      en: ["Logistics", "Camping", "Hiking gear"],
    },
  },
  {
    name: "Ana Stojanovska",
    image: ana,
    role: { mk: "Менаџер на заедницата", en: "Community Manager" },
    years: 6,
    bio: {
      mk: "Ана е првиот контакт за новите членови. Ги води членските програми, дружбите по планинарењата и еколошките акции.",
      en: "Ana is the first contact for new members. She runs the membership programmes, post-hike gatherings and clean-up actions.",
    },
    specialties: {
      mk: ["Работа со заедница", "Едукација на отворено", "Еколошки акции"],
      en: ["Community building", "Outdoor education", "Clean-up actions"],
    },
  },
  {
    name: "Nikola Georgiev",
    image: nikola,
    role: { mk: "Фотограф на авантури", en: "Adventure Photographer" },
    years: 10,
    bio: {
      mk: "Никола ги снима нашите планинарења и ја одржува галеријата. Секој учесник добива фотографии од своето искачување без надоплата.",
      en: "Nikola photographs our hikes and maintains the gallery. Every participant receives photos from their ascent at no extra cost.",
    },
    specialties: {
      mk: ["Фотографија", "Пејзажна фотографија", "Планинарења за изгрев"],
      en: ["Photography", "Landscape photography", "Sunrise hikes"],
    },
  },
];
