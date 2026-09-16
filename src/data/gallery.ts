import type { Localized, TranslationKey } from "@/lib/i18n";

import hero from "@/assets/hero-mountains.jpg";
import about from "@/assets/about-group.jpg";
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
import camping from "@/assets/event-camping.jpg";
import workshop from "@/assets/event-workshop.jpg";
import cleanup from "@/assets/event-cleanup.jpg";
import winter from "@/assets/gallery-winter.jpg";
import forest from "@/assets/gallery-forest.jpg";
import community from "@/assets/gallery-community.jpg";
import sunrise from "@/assets/gallery-sunrise.jpg";

export type GalleryCategory = "hiking" | "mountains" | "camping" | "community" | "events";

export const galleryCategoryKey: Record<GalleryCategory, TranslationKey> = {
  hiking: "gallery.cat.hiking",
  mountains: "gallery.cat.mountains",
  camping: "gallery.cat.camping",
  community: "gallery.cat.community",
  events: "gallery.cat.events",
};

export type GalleryPhoto = {
  id: string;
  image: string;
  category: GalleryCategory;
  caption: Localized;
};

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: "hero-ridge",
    image: hero,
    category: "mountains",
    caption: {
      mk: "Гребен над облаците во зори, Шар Планина",
      en: "A ridge above the clouds at dawn, Šar Mountain",
    },
  },
  {
    id: "sunrise-vodno",
    image: sunrise,
    category: "hiking",
    caption: {
      mk: "Изгрев над Скопје од Милениумскиот крст",
      en: "Sunrise over Skopje from the Millennium Cross",
    },
  },
  {
    id: "group-about",
    image: about,
    category: "community",
    caption: {
      mk: "Групна фотографија по искачувањето, Пелистер",
      en: "Group photo after the ascent, Pelister",
    },
  },
  {
    id: "vodno-trail",
    image: vodno,
    category: "hiking",
    caption: { mk: "Шумска патека кон Водно", en: "Forest trail towards Vodno" },
  },
  {
    id: "matka-water",
    image: matka,
    category: "hiking",
    caption: { mk: "Смарагдната вода на кањонот Матка", en: "The emerald water of Matka Canyon" },
  },
  {
    id: "korab-summit",
    image: korab,
    category: "mountains",
    caption: { mk: "Врвот Голем Кораб на 2.764 метри", en: "Golem Korab summit at 2,764 metres" },
  },
  {
    id: "pelister-lake",
    image: pelister,
    category: "mountains",
    caption: { mk: "Големото Езеро на Пелистер", en: "Big Lake on Pelister" },
  },
  {
    id: "galicica-view",
    image: galicica,
    category: "mountains",
    caption: { mk: "Поглед кон Охридско Езеро од Галичица", en: "Lake Ohrid seen from Galičica" },
  },
  {
    id: "sar-ridge",
    image: sar,
    category: "hiking",
    caption: { mk: "Гребенско планинарење кон Титов Врв", en: "Ridge hike towards Titov Vrv" },
  },
  {
    id: "kozjak-shore",
    image: kozjak,
    category: "hiking",
    caption: { mk: "Брегот на езерото Козјак", en: "The shore of Kozjak Lake" },
  },
  {
    id: "mavrovo-autumn",
    image: mavrovo,
    category: "mountains",
    caption: { mk: "Есенски бои во НП Маврово", en: "Autumn colours in Mavrovo NP" },
  },
  {
    id: "solunska-rocks",
    image: solunska,
    category: "mountains",
    caption: { mk: "Карпестиот врв на Солунска Глава", en: "The rocky summit of Solunska Glava" },
  },
  {
    id: "krusevo-walk",
    image: krusevo,
    category: "hiking",
    caption: { mk: "Прошетка над Крушево", en: "A walk above Kruševo" },
  },
  {
    id: "camp-night",
    image: camping,
    category: "camping",
    caption: { mk: "Камп покрај Мавровско Езеро", en: "Camp by Mavrovo Lake" },
  },
  {
    id: "workshop-session",
    image: workshop,
    category: "events",
    caption: { mk: "Работилница за навигација на терен", en: "Navigation workshop in the field" },
  },
  {
    id: "cleanup-action",
    image: cleanup,
    category: "events",
    caption: { mk: "Еколошка акција на планинска патека", en: "Clean-up action on a mountain trail" },
  },
  {
    id: "winter-hike",
    image: winter,
    category: "hiking",
    caption: { mk: "Зимско планинарење низ снежна шума", en: "Winter hike through a snowy forest" },
  },
  {
    id: "forest-path",
    image: forest,
    category: "mountains",
    caption: { mk: "Букова шума во утринска магла", en: "Beech forest in morning mist" },
  },
  {
    id: "community-fire",
    image: community,
    category: "community",
    caption: { mk: "Дружба на заедницата по планинарење", en: "Community gathering after a hike" },
  },
];
