import type { BusinessConfig } from "./types";

export const business: BusinessConfig = {
  slug: "demo-business",
  name: "Demo Local Services",
  shortName: "Demo",
  category: "Local Services",
  contact: {
    phone: "(305) 555-0123",
    email: "hello@example.com",
    city: "Miami",
    state: "FL",
  },
  seo: {
    title: "Demo Local Services | Miami, FL",
    description:
      "Professional local services, clear communication, and dependable work for homeowners across Miami.",
    socialImage: "/images/demo/hero.jpg",
  },
  hero: {
    eyebrow: "Proudly serving Miami, Florida",
    headline: "Local service. Done with care.",
    subheadline:
      "Straightforward communication, skilled work, and a team that treats your home like their own.",
    primaryCTA: {
      label: "Get a free quote",
      href: "#contact",
    },
    secondaryCTA: {
      label: "Explore services",
      href: "#services",
    },
    image: {
      src: "/images/demo/hero.jpg",
      alt: "Local service professional preparing tools in a clean workshop",
      width: 1798,
      height: 875,
    },
  },
  services: [
    {
      name: "Home repairs",
      description:
        "Thoughtful repairs and improvements completed cleanly, carefully, and with respect for your space.",
    },
    {
      name: "Preventive maintenance",
      description:
        "Practical maintenance that catches small issues early and helps your home keep working as it should.",
    },
    {
      name: "Custom projects",
      description:
        "Clear planning and skilled execution for the projects that make your space more useful and comfortable.",
    },
  ],
  reviews: [
    {
      author: "Sample Customer",
      rating: 5,
      text: "The team was on time, explained every step, and left the space spotless. The whole process felt easy.",
      source: "Example review",
    },
    {
      author: "Miami Homeowner",
      rating: 5,
      text: "Fast communication, fair expectations, and excellent attention to detail from start to finish.",
      source: "Example review",
    },
    {
      author: "Sample Client",
      rating: 5,
      text: "Exactly the kind of local service experience you hope for: dependable, friendly, and professional.",
      source: "Example review",
    },
  ],
  about: {
    headline: "A local company built around doing the job right.",
    body:
      "We believe great service starts before the work begins. That means returning calls, setting clear expectations, arriving prepared, and treating every project with care. Our goal is simple: deliver quality work and be the team you feel confident calling again.",
    image: {
      src: "/images/demo/about.jpg",
      alt: "Two local service professionals reviewing a project plan",
      width: 1536,
      height: 1024,
    },
  },
  gallery: [
    {
      src: "/images/demo/gallery-1.jpg",
      alt: "Careful measurement during a home improvement project",
      width: 1536,
      height: 1024,
    },
    {
      src: "/images/demo/hero.jpg",
      alt: "Organized tools in a modern local workshop",
      width: 1798,
      height: 875,
    },
    {
      src: "/images/demo/about.jpg",
      alt: "Local service team collaborating at a workbench",
      width: 1536,
      height: 1024,
    },
  ],
  finalCTA: {
    headline: "Ready to get your project moving?",
    body: "Tell us what you need and we’ll follow up with clear next steps.",
    primaryCTA: {
      label: "Request a free quote",
      href: "#contact",
    },
  },
  theme: {
    primary: "#1d2925",
    secondary: "#f4efe6",
    accent: "#d87755",
    background: "#fbfaf7",
    foreground: "#17201d",
    surface: "#ffffff",
  },
};
