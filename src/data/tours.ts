import type { Localized, LocalizedList, TranslationKey } from "@/lib/i18n";

import vodno from "@/assets/tour-vodno.jpg";
import matka from "@/assets/tour-matka.jpg";
import korab from "@/assets/tour-korab.jpg";
import pelister from "@/assets/tour-pelister.jpg";
import galicica from "@/assets/tour-galicica.jpg";
import sar from "@/assets/tour-sar.jpg";
import kozjak from "@/assets/tour-kozjak.jpg";
import mavrovo from "@/assets/tour-mavrovo.jpg";
import solunska from "@/assets/tour-solunska.jpg";
import krusevo from "@/assets/tour-krusevo.jpg";

export type Difficulty = "easy" | "moderate" | "difficult" | "advanced";

export const difficultyKey: Record<Difficulty, TranslationKey> = {
  easy: "diff.easy",
  moderate: "diff.moderate",
  difficult: "diff.difficult",
  advanced: "diff.advanced",
};

export type Tour = {
  slug: string;
  image: string;
  title: Localized;
  location: Localized;
  difficulty: Difficulty;
  hours: number;
  distanceKm: number;
  elevationM: number;
  fee: number;
  date: string;
  departure: string;
  meetingPoint: Localized;
  guide: string;
  short: Localized;
  about: LocalizedList;
  highlights: LocalizedList;
};

const commonBring: LocalizedList = {
  mk: [
    "Планинарски обувки со добар грип",
    "Ранец од 20 – 30 литри",
    "Најмалку 2 литри вода",
    "Храна и ужинка со висока енергија",
    "Облека според временските услови",
    "Заштита од сонце (капа, крем, очила)",
    "Дожден јакна или наметка",
  ],
  en: [
    "Hiking boots with good grip",
    "A 20 – 30 litre backpack",
    "At least 2 litres of water",
    "Food and high-energy snacks",
    "Weather-appropriate clothing",
    "Sun protection (hat, cream, sunglasses)",
    "Rain jacket or poncho",
  ],
};

const commonIncluded: LocalizedList = {
  mk: [
    "Професионален планински водич",
    "Координација на групата",
    "Планирање и проверка на маршрутата",
    "Основна поддршка за прва помош",
    "Фотографии од планинарењето",
  ],
  en: [
    "Professional mountain guide",
    "Group coordination",
    "Route planning and scouting",
    "Basic first aid support",
    "Photographs from the hike",
  ],
};

const commonImportant: LocalizedList = {
  mk: [
    "Пријавата се затвора 48 часа пред стартот, бројот на места е ограничен.",
    "Планинарењето може да се одложи или откаже поради невреме — секогаш ве известуваме во преткавечерината.",
    "Темпото го одредува најбавниот член во групата; никој не се враќа сам.",
    "Учесниците под 18 години планинарат со придружба на родител или старател.",
    "Планинарењето е на сопствена одговорност; препорачуваме валидно здравствено осигурување.",
  ],
  en: [
    "Registration closes 48 hours before departure; places are limited.",
    "A hike may be postponed or cancelled due to bad weather — we always notify you the evening before.",
    "The pace is set by the slowest member of the group; nobody walks back alone.",
    "Participants under 18 hike accompanied by a parent or guardian.",
    "Hiking is at your own risk; we recommend valid health insurance.",
  ],
};

export const tourBring = commonBring;
export const tourIncluded = commonIncluded;
export const tourImportant = commonImportant;

export const tours: Tour[] = [
  {
    slug: "vodno-sunrise-hike",
    image: vodno,
    title: { mk: "Изгрев на Водно", en: "Vodno Sunrise Hike" },
    location: { mk: "Водно, Скопје", en: "Vodno, Skopje" },
    difficulty: "easy",
    hours: 4,
    distanceKm: 8,
    elevationM: 520,
    fee: 300,
    date: "2026-10-04",
    departure: "05:00",
    meetingPoint: { mk: "Долна станица на кабинската железница, Водно", en: "Lower cable-car station, Vodno" },
    guide: "Elena Markovska",
    short: {
      mk: "Кратко утринско искачување до Милениумскиот крст со изгрев над Скопје.",
      en: "A short morning ascent to the Millennium Cross with sunrise over Skopje.",
    },
    about: {
      mk: [
        "Ова е нашето најпопуларно планинарење за почетници. Стартуваме пред изгрев со челни ламби и по маркирана шумска патека се качуваме до Милениумскиот крст на 1.066 метри.",
        "Кога сонцето ќе се појави над Скопската Котлина, целиот град се буди под нас. По кратка пауза за кафе и појадок се спуштаме по алтернативна патека покрај манастирот Свети Пантелејмон.",
      ],
      en: [
        "This is our most popular hike for beginners. We start before dawn with head torches and follow a marked forest path up to the Millennium Cross at 1,066 metres.",
        "As the sun rises over the Skopje valley the whole city wakes up below us. After a short coffee and breakfast break we descend on an alternative path past the Saint Panteleimon monastery.",
      ],
    },
    highlights: {
      mk: ["Изгрев над Скопје", "Милениумски крст", "Манастир Свети Пантелејмон", "Идеално за почетници"],
      en: ["Sunrise over Skopje", "Millennium Cross", "Saint Panteleimon monastery", "Ideal for beginners"],
    },
  },
  {
    slug: "matka-canyon-trail",
    image: matka,
    title: { mk: "Кањон Матка", en: "Matka Canyon Trail" },
    location: { mk: "Матка, Сарај", en: "Matka, Saraj" },
    difficulty: "easy",
    hours: 5,
    distanceKm: 10,
    elevationM: 380,
    fee: 350,
    date: "2026-10-11",
    departure: "08:00",
    meetingPoint: { mk: "Паркинг кај браната Матка", en: "Car park at the Matka dam" },
    guide: "Martin Trajkov",
    short: {
      mk: "Патека покрај смарагдната вода на Треска, со посета на пештерата Врело.",
      en: "A trail along the emerald water of the Treska with a visit to Vrelo cave.",
    },
    about: {
      mk: [
        "Кањонот Матка е најблиската вистинска авантура до Скопје. Патеката оди по десниот брег на реката Треска, низ карпести делови со заштитни сајли и мали дрвени мостови.",
        "Застануваме кај манастирот Света Богородица, а потоа со чамец до пештерата Врело — една од најдлабоките подводни пештери во Европа.",
      ],
      en: [
        "Matka Canyon is the closest real adventure to Skopje. The trail follows the right bank of the Treska river through rocky sections with safety cables and small wooden bridges.",
        "We stop at the Holy Mother of God monastery and then take a boat to Vrelo cave — one of the deepest underwater caves in Europe.",
      ],
    },
    highlights: {
      mk: ["Смарагдно езеро", "Пештера Врело", "Средновековни манастири", "Патека покрај вода"],
      en: ["Emerald lake", "Vrelo cave", "Medieval monasteries", "Waterside trail"],
    },
  },
  {
    slug: "mount-korab-expedition",
    image: korab,
    title: { mk: "Експедиција Голем Кораб", en: "Mount Korab Expedition" },
    location: { mk: "Кораб, Маврово", en: "Korab, Mavrovo" },
    difficulty: "advanced",
    hours: 11,
    distanceKm: 22,
    elevationM: 1450,
    fee: 1500,
    date: "2026-10-18",
    departure: "04:30",
    meetingPoint: { mk: "Стрезимир, влез во НП Маврово", en: "Strezimir, entrance to Mavrovo NP" },
    guide: "Aleksandar Petrov",
    short: {
      mk: "Искачување на највисокиот врв во Северна Македонија — 2.764 метри.",
      en: "An ascent of the highest peak in North Macedonia — 2,764 metres.",
    },
    about: {
      mk: [
        "Голем Кораб е круната на македонското планинарење. Долг ден со рано тргнување, постепено искачување низ пасишта и последен стрмен дел по камена патека до врвот.",
        "Ова планинарење бара добра кондиција и претходно искуство со целодневни искачувања. Пред пријавата задолжително разговараме со секој учесник.",
      ],
      en: [
        "Golem Korab is the crown of Macedonian hiking. A long day with an early start, a gradual climb through pastures and a final steep rocky section to the summit.",
        "This hike requires good fitness and previous experience with full-day ascents. We speak with every participant before confirming a place.",
      ],
    },
    highlights: {
      mk: ["Највисок врв во земјата", "Панорама кон Албанија", "Вишинска експедиција", "Мал ограничен тим"],
      en: ["Highest peak in the country", "Panorama towards Albania", "High-altitude expedition", "Small limited team"],
    },
  },
  {
    slug: "pelister-molika-trail",
    image: pelister,
    title: { mk: "Пелистер – Моликова патека", en: "Pelister – Molika Trail" },
    location: { mk: "НП Пелистер, Битола", en: "Pelister NP, Bitola" },
    difficulty: "moderate",
    hours: 7,
    distanceKm: 16,
    elevationM: 980,
    fee: 900,
    date: "2026-10-25",
    departure: "06:30",
    meetingPoint: { mk: "Хотел Молика, Пелистер", en: "Hotel Molika, Pelister" },
    guide: "Stefan Nikolov",
    short: {
      mk: "Низ шумите од петоигличната молика до Големото Езеро.",
      en: "Through five-needle Molika pine forests up to Big Lake.",
    },
    about: {
      mk: [
        "Пелистер е дом на молика — реликтен бор кој расте само на неколку планини на Балканот. Патеката води до Големото Езеро, едно од двете „Планински очи“ на 2.218 метри.",
        "Средно тешко планинарење со постојано, но благо искачување. Одличен избор за прво целодневно искачување.",
      ],
      en: [
        "Pelister is home to the Molika pine, a relict tree growing on only a few Balkan mountains. The trail leads to Big Lake, one of the two Mountain Eyes at 2,218 metres.",
        "A moderate hike with a steady but gentle climb. An excellent choice for a first full-day ascent.",
      ],
    },
    highlights: {
      mk: ["Реликтни молики", "Големото Езеро", "Национален парк", "Планински извори"],
      en: ["Relict Molika pines", "Big Lake", "National park", "Mountain springs"],
    },
  },
  {
    slug: "galicica-panorama",
    image: galicica,
    title: { mk: "Панорама Галичица", en: "Galičica Panorama" },
    location: { mk: "НП Галичица, Охрид", en: "Galičica NP, Ohrid" },
    difficulty: "moderate",
    hours: 6,
    distanceKm: 13,
    elevationM: 720,
    fee: 850,
    date: "2026-11-01",
    departure: "07:00",
    meetingPoint: { mk: "Превалец, патот Охрид – Преспа", en: "Prevalec pass, Ohrid – Prespa road" },
    guide: "Elena Markovska",
    short: {
      mk: "Едно планинарење, два погледа — Охридско и Преспанско Езеро.",
      en: "One hike, two views — Lake Ohrid and Lake Prespa.",
    },
    about: {
      mk: [
        "Галичица е гребен помеѓу две древни езера. Од врвот Магаро на 2.254 метри истовремено се гледаат Охридско и Преспанско Езеро.",
        "Патеката е отворена и без сенка, затоа стартуваме рано и носиме доволно вода и заштита од сонце.",
      ],
      en: [
        "Galičica is a ridge between two ancient lakes. From Magaro peak at 2,254 metres you can see Lake Ohrid and Lake Prespa at the same time.",
        "The trail is open and without shade, so we start early and carry plenty of water and sun protection.",
      ],
    },
    highlights: {
      mk: ["Врв Магаро", "Два погледа кон езера", "Ендемски растенија", "Отворен гребен"],
      en: ["Magaro peak", "Two lake views", "Endemic plants", "Open ridge"],
    },
  },
  {
    slug: "sar-mountain-adventure",
    image: sar,
    title: { mk: "Авантура на Шар Планина", en: "Šar Mountain Adventure" },
    location: { mk: "Шар Планина, Тетово", en: "Šar Mountain, Tetovo" },
    difficulty: "difficult",
    hours: 9,
    distanceKm: 19,
    elevationM: 1200,
    fee: 1200,
    date: "2026-11-08",
    departure: "05:30",
    meetingPoint: { mk: "Попова Шапка, главен паркинг", en: "Popova Šapka, main car park" },
    guide: "Aleksandar Petrov",
    short: {
      mk: "Гребенско планинарење до Титов Врв на 2.748 метри.",
      en: "A ridge hike to Titov Vrv at 2,748 metres.",
    },
    about: {
      mk: [
        "Од Попова Шапка се качуваме по широк гребен со постојана панорама кон Полог и косовските планини. Финалниот дел е камен и бара внимателен чекор.",
        "Тешко планинарење за подготвени учесници со минимум три претходни целодневни искачувања.",
      ],
      en: [
        "From Popova Šapka we climb a broad ridge with a constant panorama towards the Polog valley and the Kosovo mountains. The final section is rocky and requires careful footing.",
        "A difficult hike for prepared participants with at least three previous full-day ascents.",
      ],
    },
    highlights: {
      mk: ["Титов Врв", "Долг гребен", "Глацијални езера", "Вишинско планинарење"],
      en: ["Titov Vrv summit", "Long ridge", "Glacial lakes", "High-altitude hiking"],
    },
  },
  {
    slug: "kozjak-lake-trail",
    image: kozjak,
    title: { mk: "Патека кон езерото Козјак", en: "Kozjak Lake Trail" },
    location: { mk: "Езеро Козјак, Караџица", en: "Kozjak Lake, Karadžica" },
    difficulty: "easy",
    hours: 5,
    distanceKm: 11,
    elevationM: 420,
    fee: 400,
    date: "2026-11-15",
    departure: "08:30",
    meetingPoint: { mk: "Село Брест, паркинг кај мостот", en: "Brest village, car park by the bridge" },
    guide: "Martin Trajkov",
    short: {
      mk: "Мирна патека покрај најголемото вештачко езеро во земјата.",
      en: "A calm trail along the largest artificial lake in the country.",
    },
    about: {
      mk: [
        "Оваа патека е совршена за семејства и почетници. Одиме низ борова шума покрај брегот, со неколку убави видиковци над водата.",
        "На половина пат имаме долга пауза за пикник, а по желба и брзо капење во летните месеци.",
      ],
      en: [
        "This trail is perfect for families and beginners. We walk through pine forest along the shoreline, with several beautiful viewpoints above the water.",
        "Halfway we take a long picnic break and, in the summer months, an optional quick swim.",
      ],
    },
    highlights: {
      mk: ["Езерски видиковци", "Борова шума", "Погодно за семејства", "Пикник пауза"],
      en: ["Lake viewpoints", "Pine forest", "Family friendly", "Picnic break"],
    },
  },
  {
    slug: "mavrovo-national-park-hike",
    image: mavrovo,
    title: { mk: "Планинарење во НП Маврово", en: "Mavrovo National Park Hike" },
    location: { mk: "НП Маврово, Гостивар", en: "Mavrovo NP, Gostivar" },
    difficulty: "moderate",
    hours: 7,
    distanceKm: 15,
    elevationM: 860,
    fee: 800,
    date: "2026-11-22",
    departure: "06:45",
    meetingPoint: { mk: "Маврови Анови, кај информативниот центар", en: "Mavrovi Anovi, by the visitor centre" },
    guide: "Stefan Nikolov",
    short: {
      mk: "Есенски бои, водопади и потонатата црква во Маврово.",
      en: "Autumn colours, waterfalls and the sunken church of Mavrovo.",
    },
    about: {
      mk: [
        "Најголемиот национален парк во земјата е најубав во октомври и ноември. Патеката поминува низ букови шуми, покрај водопадот Дувало и завршува кај потонатата црква Свети Никола.",
        "Средно тешко планинарење со неколку кратки стрмни делови и многу фотогенични паузи.",
      ],
      en: [
        "The largest national park in the country is at its best in October and November. The trail passes through beech forest, by the Duvalo waterfall and ends at the sunken church of Saint Nicholas.",
        "A moderate hike with a few short steep sections and many photogenic breaks.",
      ],
    },
    highlights: {
      mk: ["Потонатата црква", "Водопад Дувало", "Есенски бои", "Букови шуми"],
      en: ["The sunken church", "Duvalo waterfall", "Autumn colours", "Beech forests"],
    },
  },
  {
    slug: "solunska-glava-challenge",
    image: solunska,
    title: { mk: "Предизвик Солунска Глава", en: "Solunska Glava Challenge" },
    location: { mk: "Мокра Планина, Јакупица", en: "Mokra Mountain, Jakupica" },
    difficulty: "advanced",
    hours: 12,
    distanceKm: 24,
    elevationM: 1600,
    fee: 1400,
    date: "2026-11-29",
    departure: "04:00",
    meetingPoint: { mk: "Алдинци, крај на асфалтот", en: "Aldinci, end of the asphalt road" },
    guide: "Aleksandar Petrov",
    short: {
      mk: "Најдолгото планинарење во нашиот календар — 2.540 метри над Скопје.",
      en: "The longest hike in our calendar — 2,540 metres above Skopje.",
    },
    about: {
      mk: [
        "Солунска Глава е предизвик за секој планинар: долг пристап, карпест врв и променливо време. Според легендата, во јасен ден се гледа Солунскиот Залив.",
        "Задолжителни се челна ламба, топла облека и претходно искуство со искачувања над 2.000 метри.",
      ],
      en: [
        "Solunska Glava is a challenge for any hiker: a long approach, a rocky summit and changeable weather. Legend says that on a clear day you can see the Gulf of Thessaloniki.",
        "A head torch, warm clothing and previous experience above 2,000 metres are mandatory.",
      ],
    },
    highlights: {
      mk: ["Карпест врв", "Долга маршрута", "Планинарска легенда", "Мала група"],
      en: ["Rocky summit", "Long route", "A hiking legend", "Small group"],
    },
  },
  {
    slug: "krusevo-mountain-walk",
    image: krusevo,
    title: { mk: "Прошетка над Крушево", en: "Kruševo Mountain Walk" },
    location: { mk: "Бушева Планина, Крушево", en: "Buševa Mountain, Kruševo" },
    difficulty: "easy",
    hours: 4,
    distanceKm: 9,
    elevationM: 350,
    fee: 350,
    date: "2026-12-06",
    departure: "09:00",
    meetingPoint: { mk: "Плоштад во Крушево", en: "Main square, Kruševo" },
    guide: "Ana Stojanovska",
    short: {
      mk: "Лесна прошетка над највисокиот град на Балканот.",
      en: "An easy walk above the highest town in the Balkans.",
    },
    about: {
      mk: [
        "Крушево е највисокиот град на Балканот и одлична база за лесни планински прошетки. Патеката води до Мечкин Камен и споменикот Македониум.",
        "Планинарењето завршува со дегустација на локални специјалитети во старата чаршија.",
      ],
      en: [
        "Kruševo is the highest town in the Balkans and a great base for easy mountain walks. The trail leads to Mečkin Kamen and the Makedonium monument.",
        "The hike finishes with a tasting of local specialities in the old bazaar.",
      ],
    },
    highlights: {
      mk: ["Мечкин Камен", "Македониум", "Стара чаршија", "Лесна патека"],
      en: ["Mečkin Kamen", "Makedonium", "Old bazaar", "Easy trail"],
    },
  },
];

export function getTour(slug: string): Tour | undefined {
  return tours.find((tour) => tour.slug === slug);
}
