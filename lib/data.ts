import type { CSSProperties } from "react";

export type Category = "Cuisine" | "Art floral" | "Poterie" | "Peinture";

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
  { id: 1, cat: "Cuisine", tag: "Cuisine", title: "Pâtes fraîches à la main", desc: "On pétrit, on étale, on découpe des tagliatelles, et on déjeune ensemble ce que l'on a préparé.", duration: "3 h", price: "58 €", place: "Atelier Capucins, Lyon 1er", next: "Prochaine date : jeudi 17 sept.", photo: "photo : pâtes fraîches sur plan de travail fariné" },
  { id: 2, cat: "Art floral", tag: "Art floral", title: "Bouquet de saison", desc: "Composer un bouquet généreux avec les fleurs du marché, à rapporter chez vous le soir même.", duration: "2 h", price: "45 €", place: "Atelier Capucins, Lyon 1er", next: "Prochaine date : samedi 12 sept.", photo: "photo : mains qui nouent un bouquet, feuillage" },
  { id: 3, cat: "Poterie", tag: "Poterie", title: "Premier tour de potier", desc: "Sentir la terre monter entre les mains et repartir avec deux pièces, cuites et émaillées par nos soins.", duration: "3 h 30", price: "72 €", place: "Atelier Gratte-Ciel, Villeurbanne", next: "Prochaine date : mardi 15 sept.", photo: "photo : mains sur un tour de potier, argile humide" },
  { id: 4, cat: "Peinture", tag: "Peinture", title: "Aquarelle botanique", desc: "Apprendre à observer une feuille, un pétale, et à poser la couleur en transparence. Papier et pinceaux fournis.", duration: "2 h 30", price: "48 €", place: "Atelier Capucins, Lyon 1er", next: "Prochaine date : mercredi 16 sept.", photo: "photo : palette d'aquarelle et pinceaux sur bois clair" },
  { id: 5, cat: "Cuisine", tag: "Cuisine", title: "Pains et brioches au levain", desc: "Comprendre le levain, façonner sa miche, et rentrer avec deux pains encore tièdes.", duration: "4 h", price: "65 €", place: "Atelier Capucins, Lyon 1er", next: "Prochaine date : samedi 19 sept.", photo: "photo : pains dorés sortant du four" },
  { id: 6, cat: "Poterie", tag: "Poterie", title: "Modelage à la plaque", desc: "Sans tour, à la main : un plat, une coupelle, un vase. Idéal pour une première fois.", duration: "3 h", price: "62 €", place: "Atelier Gratte-Ciel, Villeurbanne", next: "Prochaine date : vendredi 18 sept.", photo: "photo : plaque d'argile et outils en bois" },
  { id: 7, cat: "Art floral", tag: "Art floral", title: "Couronne de fleurs séchées", desc: "Une couronne durable en fleurs séchées et graminées, à accrocher chez vous toute l'année.", duration: "2 h", price: "42 €", place: "Atelier Capucins, Lyon 1er", next: "Prochaine date : jeudi 24 sept.", photo: "photo : couronne de fleurs séchées sur mur crème" },
  { id: 8, cat: "Peinture", tag: "Peinture", title: "Peinture à l'huile, portrait", desc: "Trois séances pour aborder le portrait sans crainte, avec une petite toile à chaque fois.", duration: "3 × 2 h", price: "135 €", place: "Atelier Capucins, Lyon 1er", next: "Prochaine session : à partir du 22 sept.", photo: "photo : chevalet, tubes de peinture à l'huile" },
  { id: 9, cat: "Cuisine", tag: "Cuisine", title: "Confitures et conserves", desc: "Stériliser, doser le sucre, réussir la prise : on repart avec quatre pots étiquetés.", duration: "3 h", price: "52 €", place: "Atelier Capucins, Lyon 1er", next: "Prochaine date : mardi 29 sept.", photo: "photo : pots de confiture alignés, étiquettes kraft" },
];

export const CATS: (Category | "Tous les ateliers")[] = ["Tous les ateliers", "Cuisine", "Art floral", "Poterie", "Peinture"];

export const CAT_COLORS: Record<Category, { ink: string; bg: string; line: string }> = {
  "Cuisine":    { ink: "#C24F17", bg: "#FFE5D2", line: "#F09256" },
  "Art floral": { ink: "#C41E64", bg: "#FFE0EC", line: "#F286AF" },
  "Poterie":    { ink: "#A93BA0", bg: "#FBE0F5", line: "#DC8FD3" },
  "Peinture":   { ink: "#C0392B", bg: "#FFE1DC", line: "#EE8C7E" },
};

export interface Reassurance {
  title: string;
  text: string;
}

export const REASSURANCE: Reassurance[] = [
  { title: "8 participantes maximum", text: "Assez petit pour que l'on s'occupe vraiment de vous." },
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
  { cat: "Poterie", title: "Bol tourné, émail sable", author: "Par Danielle", workshop: "Premier tour de potier", photo: "photo : bol en grès posé sur une table en bois" },
  { cat: "Art floral", title: "Bouquet d'automne", author: "Par Nicole", workshop: "Bouquet de saison", photo: "photo : bouquet de dahlias et graminées" },
  { cat: "Peinture", title: "Étude de figuier", author: "Par Sylvie", workshop: "Aquarelle botanique", photo: "photo : aquarelle d'une feuille de figuier" },
  { cat: "Cuisine", title: "Quatre pots de mirabelles", author: "Par Josiane", workshop: "Confitures et conserves", photo: "photo : pots de confiture étiquetés à la main" },
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
  const c = CAT_COLORS[cat] ?? CAT_COLORS["Poterie"];
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
  const c = CAT_COLORS[cat] ?? CAT_COLORS["Poterie"];
  return { height: 6, background: c.line };
}
