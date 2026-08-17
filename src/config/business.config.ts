import type { BusinessConfig } from "./types";

export const business: BusinessConfig = {
  slug: "vmel-barbershop",
  name: "VMEL Barbershop",
  shortName: "VMEL",
  category: "Barbershop",
  contact: {
    phone: "(305) 347-9682",
    address: "137 SW 26th Rd",
    city: "Miami",
    state: "FL",
  },
  seo: {
    title: "VMEL Barbershop | Precision Cuts in Miami",
    description: "Precision, style and confidence at VMEL Barbershop in Miami. Explore signature cuts and reserve your appointment with Victor Manuel.",
    socialImage: "/images/vmel-barbershop/hero.jpg",
  },
  hero: {
    eyebrow: "Miami · By appointment",
    headline: "Your best cut starts here.",
    subheadline: "Precision, style and a one-on-one experience designed around you. Step out looking sharp—and feeling even better.",
    primaryCTA: { label: "Reserve your chair", href: "https://calendly.com/victorecharrileyva" },
    secondaryCTA: { label: "Explore the work", href: "#work" },
    image: {
      src: "/images/vmel-barbershop/hero.jpg",
      alt: "Victor Manuel giving a client a precision haircut at VMEL Barbershop",
      width: 736,
      height: 1600,
    },
  },
  services: [
    { name: "Signature cuts", description: "Classic shape or a fresh new direction, finished with precision and built around your features." },
    { name: "Fades & detail", description: "Clean transitions, sharp lines and careful detail from every angle." },
    { name: "Personal styling", description: "A considered look, practical guidance and a finish that feels unmistakably yours." },
  ],
  reviews: [
    {
      author: "Luis Ruiz",
      rating: 5,
      text: "He understood exactly what I wanted and absolutely nailed it.",
      source: "Google review",
    },
    {
      author: "Mike Puerto",
      rating: 5,
      text: "Every cut comes out clean and exactly how I want it.",
      source: "Google review",
    },
    {
      author: "Miami clients",
      rating: 5,
      text: "Known for attentive service, consistent results and an experience that feels personal.",
      source: "Review highlights",
    },
  ],
  about: {
    headline: "More than a cut. A standard of care.",
    body: "VMEL stands for Victor Manuel Echarri Leyva—and for an approach shaped by more than a decade of study, workshops and hands-on craft. Every appointment starts by listening, then builds a look around your hair, your style and how you want to show up.",
    image: {
      src: "/images/vmel-barbershop/about.jpg",
      alt: "A VMEL client receiving a styled finish",
      width: 1114,
      height: 1600,
    },
  },
  gallery: [
    {
      src: "/images/vmel-barbershop/gallery-1.jpg",
      alt: "Textured blue haircut with a clean fade by VMEL",
      width: 921,
      height: 2002,
    },
    {
      src: "/images/vmel-barbershop/gallery-2.jpg",
      alt: "Modern layered haircut styled by VMEL",
      width: 897,
      height: 1600,
    },
  ],
  finalCTA: {
    headline: "Your chair is waiting.",
    body: "Reserve your next look with Victor Manuel in Miami.",
    primaryCTA: { label: "Book an appointment", href: "https://calendly.com/victorecharrileyva" },
  },
  social: {
    googleBusiness: "https://www.google.com/search?q=VMEL+Barbershop+Miami",
  },
  theme: {
    primary: "#0d0e0e",
    secondary: "#eee9df",
    accent: "#c99a62",
    background: "#f7f4ee",
    foreground: "#141515",
    surface: "#fffdf8",
  },
};
