// Client brands for the logo strip and grid. Logos are white on transparent and are
// turned black on light backgrounds with CSS. Entries without a logo render as text.
export type Brand = { name: string; logo?: string; caseStudy?: boolean };

export const brands: Brand[] = [
  { name: "Kleiner Perkins" },
  { name: "Infinite Loops", caseStudy: true },
  { name: "Potential", logo: "/logos/potential.png" },
  { name: "Coasters", logo: "/logos/coasters.png" },
  { name: "Adhara", logo: "/logos/adhara.png" },
  { name: "A Million Words", logo: "/logos/a-million-words.png" },
  { name: "Evolve", logo: "/logos/evolve.png" },
  { name: "Altitude Store", logo: "/logos/altitude-store.png" },
  { name: "GAGA", logo: "/logos/gaga.png" },
  { name: "Koreyaah", logo: "/logos/koreyaah.png" },
  { name: "No.1 Burger", logo: "/logos/no1-burger.png" },
  { name: "Predict", logo: "/logos/predict.png" },
  { name: "The Twelfth Man", logo: "/logos/the-twelfth-man.png" },
  { name: "Galaxy Technical Services", logo: "/logos/gts.png" },
  { name: "Hitech", logo: "/logos/hitech.png" },
  { name: "Clippet", logo: "/logos/clippet.png" },
  { name: "Ally", logo: "/logos/ally.png" },
];
