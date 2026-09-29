import type { Localized, LocalizedList, TranslationKey } from "@/lib/i18n";

import boots from "@/assets/blog-boots.jpg";
import packing from "@/assets/blog-packing.jpg";
import vodno from "@/assets/tour-vodno.jpg";
import galicica from "@/assets/tour-galicica.jpg";
import sar from "@/assets/tour-sar.jpg";
import forest from "@/assets/gallery-forest.jpg";
import winter from "@/assets/gallery-winter.jpg";
import community from "@/assets/gallery-community.jpg";

export type BlogCategory = "tips" | "gear" | "destinations" | "safety" | "community" | "nature";

export const blogCategoryKey: Record<BlogCategory, TranslationKey> = {
  tips: "blog.cat.tips",
  gear: "blog.cat.gear",
  destinations: "blog.cat.destinations",
  safety: "blog.cat.safety",
  community: "blog.cat.community",
  nature: "blog.cat.nature",
};

export type BlogSection = {
  heading: Localized;
  paragraphs: LocalizedList;
  bullets?: LocalizedList;
};

export type BlogPost = {
  slug: string;
  image: string;
  title: Localized;
  excerpt: Localized;
  date: string;
  author: string;
  category: BlogCategory;
  readMinutes: number;
  intro: Localized;
  sections: BlogSection[];
  tip: Localized;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "prepare-for-your-first-mountain-hike",
    image: vodno,
    title: {
      mk: "Како да се подготвиш за твоето прво планинарење",
      en: "How to Prepare for Your First Mountain Hike",
    },
    excerpt: {
      mk: "Сѐ што треба да знаеш пред првото групно искачување: кондиција, опрема, темпо и очекувања.",
      en: "Everything you need before your first group ascent: fitness, gear, pace and expectations.",
    },
    date: "2026-09-02",
    author: "Elena Markovska",
    category: "tips",
    readMinutes: 6,
    intro: {
      mk: "Првото планинарење не бара посебна кондиција — бара подготовка. Ако знаеш што те чека, ќе се фокусираш на гледките наместо на чекорите.",
      en: "Your first hike does not require special fitness — it requires preparation. When you know what to expect, you focus on the views instead of the steps.",
    },
    sections: [
      {
        heading: { mk: "Почни со реална процена", en: "Start with an honest assessment" },
        paragraphs: {
          mk: [
            "Избери патека до пет часа и со висинска разлика под 600 метри. Водно и Матка се идеални први избори бидејќи имаат добро маркирани патеки и можност за скратување.",
          ],
          en: [
            "Choose a trail of up to five hours with less than 600 metres of elevation gain. Vodno and Matka are ideal first choices because they are well marked and can be shortened.",
          ],
        },
      },
      {
        heading: { mk: "Две недели пред искачувањето", en: "Two weeks before the hike" },
        paragraphs: {
          mk: ["Кратка подготовка прави огромна разлика во денот на планинарењето."],
          en: ["A short preparation makes an enormous difference on the day of the hike."],
        },
        bullets: {
          mk: [
            "Прошетај по 40 минути три пати во неделата, по можност по нагорнина.",
            "Разиграј ги новите обувки — никогаш не стартувај со обувки од кутија.",
            "Спакувај го ранецот еден ден претходно и провери ја тежината.",
            "Провери ја прогнозата два дена и повторно вечерта пред стартот.",
          ],
          en: [
            "Walk for 40 minutes three times a week, ideally uphill.",
            "Break in new boots — never start a hike in boots straight from the box.",
            "Pack your backpack the day before and check its weight.",
            "Check the forecast two days ahead and again the evening before.",
          ],
        },
      },
      {
        heading: { mk: "На патеката", en: "On the trail" },
        paragraphs: {
          mk: [
            "Темпото го одредува најбавниот член во групата, затоа не се обидувај да ги следиш најбрзите. Пиј вода на секои 30 минути, дури и кога не си жеден.",
            "Кажи му на водичот ако нешто те боли или ако имаш потреба од пауза. Тоа не е слабост — тоа е дел од безбедното планинарење.",
          ],
          en: [
            "The pace is set by the slowest member of the group, so do not try to keep up with the fastest. Drink water every 30 minutes, even when you are not thirsty.",
            "Tell the guide if something hurts or if you need a break. That is not weakness — it is part of safe hiking.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: пријави се на планинарење со изгрев. Утринските температури се пониски, а групите се помали и посплотени.",
      en: "Tip: sign up for a sunrise hike. Morning temperatures are lower and the groups are smaller and closer-knit.",
    },
  },
  {
    slug: "what-to-pack-for-a-day-hike",
    image: packing,
    title: {
      mk: "Што треба да спакуваш за еднодневно планинарење",
      en: "What Should You Pack for a Day Hike",
    },
    excerpt: {
      mk: "Проверен список за ранец од 25 литри — ниту премногу, ниту премалку.",
      en: "A proven checklist for a 25-litre backpack — not too much, not too little.",
    },
    date: "2026-08-21",
    author: "Martin Trajkov",
    category: "gear",
    readMinutes: 5,
    intro: {
      mk: "Идеалниот ранец за еднодневно планинарење тежи меѓу пет и седум килограми. Сѐ над тоа најчесто е страв, а не потреба.",
      en: "The ideal day-hike backpack weighs between five and seven kilograms. Anything above that is usually fear rather than need.",
    },
    sections: [
      {
        heading: { mk: "Задолжително", en: "Essentials" },
        paragraphs: {
          mk: ["Овие работи ги носиме на секое планинарење, без разлика на прогнозата."],
          en: ["We carry these on every hike, whatever the forecast says."],
        },
        bullets: {
          mk: [
            "Два литри вода (три во лето)",
            "Ужинка со висока енергија и еден вистински сендвич",
            "Јакна за дожд или наметка",
            "Дополнителен слој облека",
            "Заштита од сонце: капа, крем и очила",
            "Мал комплет за прва помош и фластери за плускавци",
            "Полн телефон и челна ламба",
          ],
          en: [
            "Two litres of water (three in summer)",
            "High-energy snacks and one proper sandwich",
            "Rain jacket or poncho",
            "One extra clothing layer",
            "Sun protection: hat, cream and sunglasses",
            "A small first aid kit and blister plasters",
            "A charged phone and a head torch",
          ],
        },
      },
      {
        heading: { mk: "Корисно, но не задолжително", en: "Useful but optional" },
        paragraphs: {
          mk: [
            "Планинарски палки помагаат при слегување, а лесно седало е добредојдено на камени врвови. Термос со чај е бонус за секое искачување над 2.000 метри.",
          ],
          en: [
            "Trekking poles help on descents and a light sit pad is welcome on rocky summits. A thermos of tea is a bonus on any ascent above 2,000 metres.",
          ],
        },
      },
      {
        heading: { mk: "Што да оставиш дома", en: "What to leave at home" },
        paragraphs: {
          mk: [
            "Стаклени шишиња, тешки книги, повеќе од една резервна облека и целата фото-опрема ако не си фотограф. Секој непотребен килограм се чувствува на последното искачување.",
          ],
          en: [
            "Glass bottles, heavy books, more than one spare outfit and a full camera kit unless you are the photographer. Every unnecessary kilogram shows up on the final climb.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: спакувај го ранецот, потоа извади три работи. Речиси секогаш нема да ти затребаат.",
      en: "Tip: pack your bag, then take three things out. You almost certainly will not need them.",
    },
  },
  {
    slug: "beautiful-hiking-trails-in-north-macedonia",
    image: galicica,
    title: {
      mk: "5 прекрасни планинарски патеки во Македонија",
      en: "5 Beautiful Hiking Trails in Macedonia",
    },
    excerpt: {
      mk: "Од Матка до Галичица — пет патеки што ги препорачуваме на секој планинар.",
      en: "From Matka to Galičica — five trails we recommend to every hiker.",
    },
    date: "2026-08-05",
    author: "Stefan Nikolov",
    category: "destinations",
    readMinutes: 7,
    intro: {
      mk: "Македонија има повеќе од 30 планини над 2.000 метри. Овие пет патеки ги избравме заради разновидноста, а не само заради висината.",
      en: "Macedonia has more than 30 mountains above 2,000 metres. We chose these five trails for their variety, not only their altitude.",
    },
    sections: [
      {
        heading: { mk: "Петте препораки", en: "The five recommendations" },
        paragraphs: {
          mk: ["Секоја од овие патеки е дел од нашиот годишен календар."],
          en: ["Each of these trails is part of our annual calendar."],
        },
        bullets: {
          mk: [
            "Кањон Матка — патека покрај вода со пештери и манастири, 30 минути од Скопје.",
            "Галичица, врв Магаро — единствено место каде истовремено се гледаат Охридско и Преспанско Езеро.",
            "Пелистер, Големото Езеро — реликтни моликови шуми и глацијално езеро на 2.218 метри.",
            "Маврово, потонатата црква — есенски бои и водопадот Дувало.",
            "Шар Планина, Титов Врв — долг гребен и вишинска панорама кон Косово.",
          ],
          en: [
            "Matka Canyon — a waterside trail with caves and monasteries, 30 minutes from Skopje.",
            "Galičica, Magaro peak — the only place where you see Lake Ohrid and Lake Prespa at once.",
            "Pelister, Big Lake — relict Molika forests and a glacial lake at 2,218 metres.",
            "Mavrovo, the sunken church — autumn colours and the Duvalo waterfall.",
            "Šar Mountain, Titov Vrv — a long ridge and high-altitude views towards Kosovo.",
          ],
        },
      },
      {
        heading: { mk: "Кога да одиш", en: "When to go" },
        paragraphs: {
          mk: [
            "Мај и јуни носат најмногу зеленило и водени текови, септември и октомври најстабилно време и најчисти видици. Висинските врвови се сигурни од јуни до октомври.",
          ],
          en: [
            "May and June bring the most greenery and running water; September and October bring the most stable weather and clearest views. High summits are reliable from June to October.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: почни од Матка или Крушево ако немаш искуство, а Кораб остави го за втората сезона.",
      en: "Tip: start with Matka or Kruševo if you are new, and leave Korab for your second season.",
    },
  },
  {
    slug: "how-to-choose-hiking-boots",
    image: boots,
    title: { mk: "Како да избереш планинарски обувки", en: "How to Choose Hiking Boots" },
    excerpt: {
      mk: "Висок или низок дизајн, мембрана, ѓон и број — сè што влијае на удобноста.",
      en: "High or low cut, membrane, sole and size — everything that affects comfort.",
    },
    date: "2026-07-19",
    author: "Martin Trajkov",
    category: "gear",
    readMinutes: 6,
    intro: {
      mk: "Обувките се единствената опрема во која нема компромис. Погрешен избор значи плускавци во првиот час и болка во последниот.",
      en: "Boots are the one piece of gear where there is no compromise. The wrong choice means blisters in the first hour and pain in the last.",
    },
    sections: [
      {
        heading: { mk: "Висок или низок дизајн", en: "High or low cut" },
        paragraphs: {
          mk: [
            "Високите обувки го стабилизираат глуждот и се препорачуваат за камени врвови како Солунска Глава или Кораб. Ниските се полесни и подобри за патеки како Матка или Козјак.",
          ],
          en: [
            "High-cut boots stabilise the ankle and are recommended for rocky summits such as Solunska Glava or Korab. Low-cut shoes are lighter and better for trails like Matka or Kozjak.",
          ],
        },
      },
      {
        heading: { mk: "На што да внимаваш при купување", en: "What to check when buying" },
        paragraphs: {
          mk: ["Пробај ги обувките попладне, кога стапалата се веќе малку отечени."],
          en: ["Try boots on in the afternoon, when your feet are already slightly swollen."],
        },
        bullets: {
          mk: [
            "Половина број поголеми од твојот секојдневен број.",
            "Проба со планинарски чорапи, не со памучни.",
            "Прстите не смеат да го допираат врвот при слегување по нагорница.",
            "Проверен ѓон со длабок профил и добар грип на влажна карпа.",
            "Водоотпорна мембрана ако планинариш во есен, зима и рано лето.",
          ],
          en: [
            "Half a size larger than your everyday size.",
            "Try them with hiking socks, never cotton ones.",
            "Your toes must not touch the front when walking downhill.",
            "A proven sole with a deep pattern and good grip on wet rock.",
            "A waterproof membrane if you hike in autumn, winter and early summer.",
          ],
        },
      },
      {
        heading: { mk: "Одржување", en: "Care" },
        paragraphs: {
          mk: [
            "Исчисти ги од кал по секое планинарење и суши ги на воздух, никогаш на радијатор.",
          ],
          en: [
            "Clean off the mud after every hike and dry them in the air, never on a radiator.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: нови обувки носи ги најмалку 20 километри низ градот пред да ги однесеш на планина.",
      en: "Tip: walk at least 20 kilometres around town in new boots before taking them to the mountain.",
    },
  },
  {
    slug: "hiking-safety-essential-tips",
    image: sar,
    title: { mk: "Безбедност на планина: клучни совети", en: "Hiking Safety: Essential Tips" },
    excerpt: {
      mk: "Како да го намалиш ризикот пред, во текот на и по искачувањето.",
      en: "How to reduce risk before, during and after an ascent.",
    },
    date: "2026-07-02",
    author: "Aleksandar Petrov",
    category: "safety",
    readMinutes: 7,
    intro: {
      mk: "Речиси секоја планинарска несреќа има три причини: лоша прогноза, лоша проценка на времето и премногу самодоверба. Сите три можат да се избегнат.",
      en: "Nearly every hiking accident has three causes: a bad forecast, a bad time estimate and too much confidence. All three are avoidable.",
    },
    sections: [
      {
        heading: { mk: "Пред стартот", en: "Before you start" },
        paragraphs: {
          mk: ["Планинарењето почнува дома, со план кој некој друг го знае."],
          en: ["A hike begins at home, with a plan that somebody else knows about."],
        },
        bullets: {
          mk: [
            "Кажи некому каде одиш и кога се враќаш.",
            "Провери прогноза за висина, не за најблискиот град.",
            "Пресметај време за враќање пред мрак и додај еден час резерва.",
            "Полн телефон, челна ламба и офлајн карта на патеката.",
          ],
          en: [
            "Tell somebody where you are going and when you will be back.",
            "Check the forecast for altitude, not for the nearest town.",
            "Plan to be back before dark and add one hour of reserve.",
            "A charged phone, a head torch and an offline map of the route.",
          ],
        },
      },
      {
        heading: { mk: "На планина", en: "On the mountain" },
        paragraphs: {
          mk: [
            "Никогаш не се одделувај од групата и не скратувај по неозначени патеки. Ако времето се менува, враќањето е секогаш подобра одлука од врвот.",
            "Во случај на повреда, останете на место, обележете ја позицијата и повикајте помош на 112 или на Планинската спасителна служба.",
          ],
          en: [
            "Never leave the group and never take shortcuts on unmarked paths. If the weather turns, going back is always a better decision than the summit.",
            "In case of injury, stay put, mark your position and call for help on 112 or the mountain rescue service.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: правилото на трите — три часа без вода, три дена без храна, три минути без разум. Разумот е најважен.",
      en: "Tip: the rule of threes — three hours without water, three days without food, three minutes without judgement. Judgement matters most.",
    },
  },
  {
    slug: "why-time-in-nature-is-good-for-you",
    image: forest,
    title: {
      mk: "Зошто времето поминато во природа ти прави добро",
      en: "Why Spending Time in Nature Is Good for You",
    },
    excerpt: {
      mk: "Што се случува со телото и умот по два часа на планинска патека.",
      en: "What happens to body and mind after two hours on a mountain trail.",
    },
    date: "2026-06-14",
    author: "Ana Stojanovska",
    category: "nature",
    readMinutes: 5,
    intro: {
      mk: "Планинарењето не е само спорт. Тоа е една од најпристапните форми на одмор за нервниот систем.",
      en: "Hiking is not only a sport. It is one of the most accessible forms of rest for the nervous system.",
    },
    sections: [
      {
        heading: { mk: "Тело", en: "Body" },
        paragraphs: {
          mk: [
            "Одењето по нагорнина е кардио вежба со мал удар на колената кога темпото е контролирано. Четири часа на патека трошат колку и напорен час во сала, но со многу помалку монотонија.",
          ],
          en: [
            "Walking uphill is cardio with low impact on the knees when the pace is controlled. Four hours on a trail burn as much as a hard hour in the gym, with far less monotony.",
          ],
        },
      },
      {
        heading: { mk: "Ум", en: "Mind" },
        paragraphs: {
          mk: [
            "Без нотификации, со ист ритам на чекори и еден јасен правец, вниманието се одмора. Затоа многу луѓе го наоѓаат решението на нерешлив проблем токму на слегување.",
          ],
          en: [
            "With no notifications, a steady rhythm of steps and one clear direction, attention gets a rest. That is why many people find the answer to an unsolvable problem on the way down.",
          ],
        },
      },
      {
        heading: { mk: "Луѓе", en: "People" },
        paragraphs: {
          mk: [
            "Групното планинарење создава пријателства кои траат подолго од сезоната. Половина од нашите членови дошле сами на прво планинарење, а сега доаѓаат со екипа.",
          ],
          en: [
            "Group hiking creates friendships that outlast the season. Half of our members came alone to their first hike and now arrive with a crew.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: две планинарења месечно се доволни за да почувствуваш разлика во сон и концентрација.",
      en: "Tip: two hikes a month are enough to feel a difference in sleep and concentration.",
    },
  },
  {
    slug: "beginners-guide-to-mountain-navigation",
    image: community,
    title: {
      mk: "Водич за почетници во планинска навигација",
      en: "Beginner's Guide to Mountain Navigation",
    },
    excerpt: {
      mk: "Карта, компас и телефон — како да ги користиш заедно и да не се загубиш.",
      en: "Map, compass and phone — how to use them together and never get lost.",
    },
    date: "2026-05-28",
    author: "Stefan Nikolov",
    category: "tips",
    readMinutes: 6,
    intro: {
      mk: "Телефонот е одлична алатка додека има батерија. Затоа секој планинар треба да умее да чита карта и без екран.",
      en: "A phone is an excellent tool while it has battery. That is why every hiker should be able to read a map without a screen.",
    },
    sections: [
      {
        heading: { mk: "Основите", en: "The basics" },
        paragraphs: {
          mk: ["Три вештини покриваат 90 отсто од ситуациите на нашите патеки."],
          en: ["Three skills cover 90 per cent of the situations on our trails."],
        },
        bullets: {
          mk: [
            "Читање изохипси: колку се погусти, толку теренот е пострмен.",
            "Ориентација на картата според компас и видливи ориентири.",
            "Следење маркации: македонските патеки најчесто се обележани со црвено-бел круг.",
            "Снимање GPS трага пред стартот и офлајн преземена карта.",
          ],
          en: [
            "Reading contour lines: the closer they are, the steeper the terrain.",
            "Orienting the map with a compass and visible landmarks.",
            "Following markings: Macedonian trails usually use a red-and-white circle.",
            "Recording a GPS track before you start, plus an offline downloaded map.",
          ],
        },
      },
      {
        heading: { mk: "Ако ја изгубиш патеката", en: "If you lose the trail" },
        paragraphs: {
          mk: [
            "Застани. Врати се до последната позната маркација наместо да продолжиш „приближно“ во иста насока. Најголем дел од загубените планинари продолжиле напред кога требало да се вратат.",
          ],
          en: [
            "Stop. Return to the last known marking instead of continuing 'roughly' in the same direction. Most lost hikers pressed on when they should have turned back.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: дојди на нашата работилница за навигација — теорија, терен и материјали, бесплатно за членови.",
      en: "Tip: join our navigation workshop — theory, field practice and materials, free for members.",
    },
  },
  {
    slug: "winter-hiking-what-you-need-to-know",
    image: winter,
    title: { mk: "Зимско планинарење: што треба да знаеш", en: "Winter Hiking: What You Need to Know" },
    excerpt: {
      mk: "Слоеви облека, дерези, пократок ден и повисок ризик — зимата бара повеќе план.",
      en: "Layers, crampons, shorter days and higher risk — winter demands more planning.",
    },
    date: "2026-05-10",
    author: "Aleksandar Petrov",
    category: "safety",
    readMinutes: 6,
    intro: {
      mk: "Зимската планина е најубава и најнепростлива. Со вистинска опрема и скратени амбиции, сезоната трае цела година.",
      en: "The winter mountain is the most beautiful and the least forgiving. With the right gear and trimmed ambitions, the season lasts all year.",
    },
    sections: [
      {
        heading: { mk: "Систем на слоеви", en: "The layer system" },
        paragraphs: {
          mk: ["Три слоја работат подобро од една дебела јакна."],
          en: ["Three layers work better than one thick jacket."],
        },
        bullets: {
          mk: [
            "Основен слој од мерино или синтетика, никогаш памук.",
            "Среден изолационен слој од флис или лесен пух.",
            "Надворешен слој кој штити од ветер и снег.",
            "Резервни ракавици и капа во водоотпорна вреќичка.",
          ],
          en: [
            "A base layer of merino or synthetic, never cotton.",
            "A mid insulating layer of fleece or light down.",
            "An outer layer that stops wind and snow.",
            "Spare gloves and a hat in a waterproof bag.",
          ],
        },
      },
      {
        heading: { mk: "Опрема за снег", en: "Snow equipment" },
        paragraphs: {
          mk: [
            "На стрмен смрзнат снег се задолжителни дерези и цепин, а на длабок снег снежни обувки. Овие искачувања ги водиме само со ограничени групи и претходно искуство.",
          ],
          en: [
            "On steep frozen snow crampons and an ice axe are mandatory; in deep snow, snowshoes. We lead these ascents only with limited groups and previous experience.",
          ],
        },
      },
      {
        heading: { mk: "Планирај со денот", en: "Plan around daylight" },
        paragraphs: {
          mk: [
            "Во декември светлината трае околу девет часа. Тргнуваме пред разденување и планираме враќање најмалку два часа пред зајдисонце.",
          ],
          en: [
            "In December there are about nine hours of light. We start before dawn and plan to be back at least two hours before sunset.",
          ],
        },
      },
    ],
    tip: {
      mk: "Совет: термос со топол чај не е луксуз на зимско планинарење — тоа е дел од безбедносната опрема.",
      en: "Tip: a thermos of hot tea is not a luxury on a winter hike — it is part of your safety kit.",
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
