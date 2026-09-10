import type { CSSProperties } from "react";

export type Category = "Cuisine" | "Art floral" | "Mosaïque" | "Peinture" | "Sculpture fimo" | "Bijoux";

export interface Workshop {
  id: number;
  cat: Category;
  tag: string;
  title: string;
  desc: string;
  duration: string;
  price: string;
  place: string;
  next: string;
  photo: string;
}

export const WORKSHOPS: Workshop[] = [
  {
    id: 1,
    cat: 'Mosaïque',
    tag: 'Mosaïque',
    title: 'Création libre petit support',
    desc: "On choisi ses carreaux, on découpe, on colle, on fait les joints et hop un petit tableau prends vie et se retrouve sur vos tables ou vos meubles.",
    duration: '2 h',
    price: '45 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : carreaux de mosaïque colorés en cours de collage',
  },
  {
    id: 2,
    cat: 'Mosaïque',
    tag: 'Mosaïque',
    title: 'Création libre grand support',
    desc: "Envie d'une petite table basse personnalisée ou un tabouret coloré ? Créez votre prochain meuble 100% sorti de votre imagination.",
    duration: '3 h',
    price: '65 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : meuble en cours de décoration en mosaïque',
  },
  {
    id: 3,
    cat: 'Peinture',
    tag: 'Peinture',
    title: 'Sur toile',
    desc: 'Poser sur la toile ses idées et ses envies.',
    duration: '2 h',
    price: '42 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : toile en cours de peinture avec pinceaux',
  },
  {
    id: 4,
    cat: 'Peinture',
    tag: 'Peinture',
    title: 'Sur verre',
    desc: 'Donner vie à un objet en le décorant avec vos idées, vos envies, et toutes les couleurs dont vous rêvez.',
    duration: '2 h',
    price: '42 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : objet en verre peint aux couleurs vives',
  },
  {
    id: 5,
    cat: 'Peinture',
    tag: 'Peinture',
    title: 'Décorations',
    desc: 'Choisir son support en fonction de la saison : boules de noël, citrouilles, oeufs, …',
    duration: '2 h',
    price: '42 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : décorations de saison peintes à la main',
  },
  {
    id: 6,
    cat: 'Sculpture fimo',
    tag: 'Sculpture fimo',
    title: 'Création libre',
    desc: 'Sentir la créativité se réveiller et découvrir ses créations après quelques minutes de cuisson.',
    duration: '2 h',
    price: '40 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : petites figurines en pâte fimo colorée',
  },
  {
    id: 7,
    cat: 'Bijoux',
    tag: 'Bijoux',
    title: 'Perles',
    desc: "Créons ensemble votre prochain bijoux, le prochain cadeau à offrir : collier, bracelet, boucles d'oreille.",
    duration: '2 h',
    price: '38 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : perles colorées et fils pour création de bijoux',
  },
  {
    id: 8,
    cat: 'Bijoux',
    tag: 'Bijoux',
    title: 'Charms',
    desc: 'Choisissez vos charmes et votre support et imaginez votre prochain bijoux personnalisé.',
    duration: '2 h',
    price: '38 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : charms et breloques disposés sur une table',
  },
  {
    id: 9,
    cat: 'Art floral',
    tag: 'Art floral',
    title: 'Bouquet de fleurs séchées',
    desc: "Ressentez dans vos mains le contact avec la nature et créez un bouquet de fleurs séchées à offrir ou à garder pour vous ;)",
    duration: '2 h',
    price: '45 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : bouquet de fleurs séchées en cours de composition',
  },
  {
    id: 10,
    cat: 'Art floral',
    tag: 'Art floral',
    title: 'Herbier',
    desc: 'Créer votre herbier sous verre ou sur toile, une décoration murale originale et nature.',
    duration: '2 h',
    price: '42 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : herbier de fleurs séchées sous verre',
  },
  {
    id: 11,
    cat: 'Cuisine',
    tag: 'Cuisine',
    title: 'Atelier libre',
    desc: "On part d'une recette de votre choix et on la réalise ensemble, nous pouvons aussi partir d'une idée recette de l'atelier.",
    duration: '3 h',
    price: '55 €',
    place: 'À domicile',
    next: 'Prochaine date : à définir',
    photo: 'photo : plat en préparation sur un plan de travail',
  },
];

export const CATS: (Category | 'Tous les ateliers')[] = [
  'Tous les ateliers',
  'Cuisine',
  'Art floral',
  'Mosaïque',
  'Peinture',
  'Sculpture fimo',
  'Bijoux',
];

export const CAT_COLORS: Record<Category, { ink: string; bg: string; line: string }> = {
  "Cuisine":        { ink: "#C24F17", bg: "#FFE5D2", line: "#F09256" },
  "Art floral":     { ink: "#C41E64", bg: "#FFE0EC", line: "#F286AF" },
  "Mosaïque":       { ink: "#A93BA0", bg: "#FBE0F5", line: "#DC8FD3" },
  "Peinture":       { ink: "#C0392B", bg: "#FFE1DC", line: "#EE8C7E" },
  "Sculpture fimo": { ink: "#9C5A1F", bg: "#F6E2C6", line: "#D9A25C" },
  "Bijoux":         { ink: "#9A7A00", bg: "#FFF2C9", line: "#E3C453" },
};

export interface Reassurance {
  title: string;
  text: string;
}

export const REASSURANCE: Reassurance[] = [
  { title: "5 participantes maximum", text: "Assez petit pour que l'on s'occupe vraiment de vous." },
  { title: "Tout le matériel fourni", text: "Venez les mains vides, tablier et ingrédients compris." },
  { title: "Aucune expérience requise", text: "La plupart de nos participantes débutent avec nous." },
];

export interface Creation {
  cat: Category;
  title: string;
  author: string;
  workshop: string;
  photo: string;
}

export const CREATIONS: Creation[] = [
  {
    cat: 'Mosaïque',
    title: 'Bol tourné, émail sable',
    author: 'Par Danielle',
    workshop: 'Création libre petit support',
    photo: 'photo : bol en grès posé sur une table en bois',
  },
  {
    cat: 'Art floral',
    title: "Bouquet d'automne",
    author: 'Par Nicole',
    workshop: 'Bouquet de fleurs séchées',
    photo: 'photo : bouquet de dahlias et graminées',
  },
  {
    cat: 'Peinture',
    title: 'Étude de figuier',
    author: 'Par Sylvie',
    workshop: 'Sur toile',
    photo: "photo : aquarelle d'une feuille de figuier",
  },
  {
    cat: 'Cuisine',
    title: 'Quatre pots de mirabelles',
    author: 'Par Josiane',
    workshop: 'Atelier libre',
    photo: 'photo : pots de confiture étiquetés à la main',
  },
];

export interface Review {
  quote: string;
  name: string;
  initials: string;
}

export const REVIEWS: Review[] = [
  { quote: "Je suis venue seule, un peu intimidée. Au bout d'une heure je riais avec mes voisines de table.", name: "Martine, 63 ans", initials: "M" },
  { quote: "On m'explique lentement, on ne me fait jamais sentir que je suis lente. C'est rare.", name: "Françoise, 58 ans", initials: "F" },
  { quote: "Mes deux bols sont sur la table du salon. Mes petits-enfants n'y croyaient pas.", name: "Chantal, 71 ans", initials: "C" },
];

export function tagStyle(cat: Category): CSSProperties {
  const c = CAT_COLORS[cat] ?? CAT_COLORS['Mosaïque'];
  return {
    alignSelf: "flex-start",
    fontSize: 15,
    fontWeight: 600,
    borderRadius: 999,
    padding: "6px 14px",
    marginBottom: 14,
    color: c.ink,
    background: c.bg,
    border: `1px solid ${c.line}`,
  };
}

export function barStyle(cat: Category): CSSProperties {
  const c = CAT_COLORS[cat] ?? CAT_COLORS['Mosaïque'];
  return { height: 6, background: c.line };
}
