import type { Localized, LocalizedList } from "@/lib/i18n";

import camping from "@/assets/event-camping.jpg";
import workshop from "@/assets/event-workshop.jpg";
import cleanup from "@/assets/event-cleanup.jpg";
import community from "@/assets/gallery-community.jpg";
import sunrise from "@/assets/gallery-sunrise.jpg";
import winter from "@/assets/gallery-winter.jpg";
import forest from "@/assets/gallery-forest.jpg";
import matka from "@/assets/tour-matka.jpg";

export type EventType = "hike" | "camping" | "workshop" | "cleanup" | "meetup";

export const eventTypeLabel: Record<EventType, Localized> = {
  hike: { mk: "Планинарење за викенд", en: "Weekend hike" },
  camping: { mk: "Кампување", en: "Camping weekend" },
  workshop: { mk: "Работилница", en: "Workshop" },
  cleanup: { mk: "Еколошка акција", en: "Clean-up action" },
  meetup: { mk: "Дружба", en: "Community meetup" },
};

export type EventItem = {
  id: string;
  image: string;
  name: Localized;
  date: string;
  time: string;
  location: Localized;
  type: EventType;
  short: Localized;
  details: LocalizedList;
  past?: boolean;
};

export const events: EventItem[] = [
  {
    id: "sunrise-vodno-weekend",
    image: sunrise,
    name: { mk: "Викенд изгрев на Водно", en: "Weekend Sunrise on Vodno" },
    date: "2026-10-04",
    time: "05:00",
    location: { mk: "Водно, Скопје", en: "Vodno, Skopje" },
    type: "hike",
    short: {
      mk: "Класично утринско искачување до Милениумскиот крст, отворено за сите нивоа.",
      en: "Our classic morning ascent to the Millennium Cross, open to all levels.",
    },
    details: {
      mk: [
        "Средба во 05:00 кај долната станица на кабинската железница. Носете челна ламба, вода и лесен појадок.",
        "Групата се качува заедно со два водича, а по изгревот следи заедничко кафе на врвот.",
        "Времетраење околу четири часа со враќање во Скопје пред пладне.",
      ],
      en: [
        "We meet at 05:00 by the lower cable-car station. Bring a head torch, water and a light breakfast.",
        "The group climbs together with two guides, and after sunrise we share coffee at the summit.",
        "Around four hours in total, with a return to Skopje before noon.",
      ],
    },
  },
  {
    id: "camping-mavrovo",
    image: camping,
    name: { mk: "Кампување во Маврово", en: "Mavrovo Camping Weekend" },
    date: "2026-10-17",
    time: "09:00",
    location: { mk: "НП Маврово, Гостивар", en: "Mavrovo NP, Gostivar" },
    type: "camping",
    short: {
      mk: "Два дена под шаторите со вечерен оган, ноќно небо и планинарење во недела.",
      en: "Two days under canvas with a campfire, night sky and a Sunday hike.",
    },
    details: {
      mk: [
        "Заеднички превоз од Скопје во сабота во 09:00, поставување на кампот покрај Мавровско Езеро до пладне.",
        "Попладнето имаме кратка прошетка до потонатата црква, а вечерта оган, вечера и набљудување на звездите.",
        "Во недела планинарење од шест часа и враќање во Скопје околу 19:00.",
      ],
      en: [
        "Shared transport from Skopje on Saturday at 09:00 and camp set-up by Mavrovo Lake before noon.",
        "In the afternoon we take a short walk to the sunken church, followed by a campfire, dinner and stargazing.",
        "On Sunday we hike for six hours and return to Skopje around 19:00.",
      ],
    },
  },
  {
    id: "navigation-workshop",
    image: workshop,
    name: { mk: "Работилница за навигација", en: "Mountain Navigation Workshop" },
    date: "2026-10-24",
    time: "10:00",
    location: { mk: "Планинарски дом, Водно", en: "Mountain hut, Vodno" },
    type: "workshop",
    short: {
      mk: "Работа со карта, компас и GPS апликации на терен со Стефан Николов.",
      en: "Working with map, compass and GPS apps in the field with Stefan Nikolov.",
    },
    details: {
      mk: [
        "Теоретски дел од 90 минути: читање топографска карта, ориентација и планирање маршрута.",
        "Практичен дел на терен: движење по азимут, препознавање маркации и снимање GPS трага.",
        "Работилницата е бесплатна за членови, а материјалите ги добивате на почетокот.",
      ],
      en: [
        "A 90-minute theory session: reading topographic maps, orientation and route planning.",
        "A practical field session: walking on a bearing, recognising trail markings and recording a GPS track.",
        "The workshop is free for members and all materials are handed out at the start.",
      ],
    },
  },
  {
    id: "first-aid-workshop",
    image: community,
    name: { mk: "Прва помош на планина", en: "Mountain First Aid Workshop" },
    date: "2026-11-07",
    time: "17:30",
    location: { mk: "Центар на Скопје", en: "Central Skopje" },
    type: "workshop",
    short: {
      mk: "Основни постапки при повреди, дехидратација и истоштување на терен.",
      en: "Basic procedures for injuries, dehydration and exhaustion in the field.",
    },
    details: {
      mk: [
        "Работилницата ја води Елена Марковска, сертифицирана за прва помош во дивина.",
        "Учиме преврски, имобилизација, справување со истоштување и повикување помош.",
        "Секој учесник добива список за содржината на личен комплет за прва помош.",
      ],
      en: [
        "The workshop is led by Elena Markovska, certified in wilderness first aid.",
        "We practise bandaging, immobilisation, handling exhaustion and calling for help.",
        "Every participant receives a checklist for their personal first aid kit.",
      ],
    },
  },
  {
    id: "matka-cleanup",
    image: cleanup,
    name: { mk: "Акција за чистење на Матка", en: "Matka Canyon Clean-up" },
    date: "2026-11-14",
    time: "09:30",
    location: { mk: "Матка, Сарај", en: "Matka, Saraj" },
    type: "cleanup",
    short: {
      mk: "Заедничко чистење на патеката покрај Треска со локални волонтери.",
      en: "A joint clean-up of the trail along the Treska with local volunteers.",
    },
    details: {
      mk: [
        "Ракавици, вреќи и вода обезбедуваме ние; вие носите добри обувки и добро расположение.",
        "Работиме околу три часа, а потоа следи заеднички ручек кај браната.",
        "Акцијата е отворена за сите, вклучително и за деца со придружба.",
      ],
      en: [
        "We provide gloves, bags and water; you bring good shoes and good spirits.",
        "We work for about three hours, followed by a shared lunch by the dam.",
        "The action is open to everyone, including accompanied children.",
      ],
    },
  },
  {
    id: "winter-meetup",
    image: winter,
    name: { mk: "Зимска дружба на заедницата", en: "Winter Community Meetup" },
    date: "2026-12-12",
    time: "19:00",
    location: { mk: "Скопје, стара чаршија", en: "Skopje, old bazaar" },
    type: "meetup",
    short: {
      mk: "Крај на сезоната, проекција на фотографии и најава на календарот за 2027.",
      en: "End of season, a photo screening and the launch of the 2027 calendar.",
    },
    details: {
      mk: [
        "Никола Георгиев ќе прикаже избор од најдобрите фотографии од сезоната.",
        "Ги објавуваме сите планинарења за првата половина од 2027 година.",
        "Влезот е слободен, а пријавата помага да го знаеме бројот на гости.",
      ],
      en: [
        "Nikola Georgiev will screen a selection of the season's best photographs.",
        "We announce every hike planned for the first half of 2027.",
        "Entry is free; registering simply helps us know how many guests to expect.",
      ],
    },
  },
  {
    id: "pelister-weekend-2026",
    image: forest,
    name: { mk: "Планинарски викенд на Пелистер", en: "Pelister Hiking Weekend" },
    date: "2026-06-20",
    time: "07:00",
    location: { mk: "НП Пелистер, Битола", en: "Pelister NP, Bitola" },
    type: "hike",
    short: {
      mk: "Два дена во моликовите шуми со искачување до Големото Езеро.",
      en: "Two days in the Molika pine forests with an ascent to Big Lake.",
    },
    details: {
      mk: [
        "Во јуни 2026 година 46 планинари го поминаа викендот на Пелистер.",
        "Во сабота се качивме до Големото Езеро, а во недела до врвот Плетвар.",
        "Настанот е реализиран; фотографиите се достапни во нашата галерија.",
      ],
      en: [
        "In June 2026, 46 hikers spent the weekend on Pelister.",
        "On Saturday we climbed to Big Lake and on Sunday to Pletvar peak.",
        "The event is completed; the photographs are available in our gallery.",
      ],
    },
    past: true,
  },
  {
    id: "gear-workshop-2026",
    image: workshop,
    name: { mk: "Работилница за опрема", en: "Hiking Gear Workshop" },
    date: "2026-04-18",
    time: "18:00",
    location: { mk: "Центар на Скопје", en: "Central Skopje" },
    type: "workshop",
    short: {
      mk: "Како да избереш обувки, ранец и слоеви облека за македонските планини.",
      en: "How to choose boots, a backpack and clothing layers for Macedonian mountains.",
    },
    details: {
      mk: [
        "Мартин Трајков покажа практични примери на опрема од различни ценовни класи.",
        "Тридесет и две членови тестираа ранци и обувки на самата работилница.",
        "Настанот е реализиран и ќе се повтори на почетокот на 2027 година.",
      ],
      en: [
        "Martin Trajkov presented practical gear examples from different price ranges.",
        "Thirty-two members tried on backpacks and boots during the workshop.",
        "The event is completed and will be repeated at the start of 2027.",
      ],
    },
    past: true,
  },
  {
    id: "spring-cleanup-2026",
    image: matka,
    name: { mk: "Пролетна акција на Водно", en: "Spring Clean-up on Vodno" },
    date: "2026-03-22",
    time: "10:00",
    location: { mk: "Водно, Скопје", en: "Vodno, Skopje" },
    type: "cleanup",
    short: {
      mk: "Собравме над 120 килограми отпад по патеките кон Милениумскиот крст.",
      en: "We collected more than 120 kilograms of waste on the trails to the Millennium Cross.",
    },
    details: {
      mk: [
        "Во акцијата учествуваа 58 волонтери, меѓу кои и три училишни групи.",
        "Соработувавме со Јавното претпријатие за паркови и зеленило од Скопје.",
        "Настанот е реализиран; следната пролетна акција е во март 2027 година.",
      ],
      en: [
        "58 volunteers took part, including three school groups.",
        "We cooperated with the Skopje public parks and greenery enterprise.",
        "The event is completed; the next spring action is in March 2027.",
      ],
    },
    past: true,
  },
];

export const upcomingEvents = events.filter((event) => !event.past);
export const pastEvents = events.filter((event) => event.past);
