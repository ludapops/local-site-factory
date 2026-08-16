import { execFileSync } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const slug = process.argv[2];
const projectRoot = process.cwd();

function fail(message) {
  console.error(`\nProspect setup stopped: ${message}\n`);
  process.exit(1);
}

function titleFromSlug(value) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function currentBranch() {
  if (!existsSync(path.join(projectRoot, ".git"))) return undefined;

  try {
    return execFileSync("git", ["branch", "--show-current"], {
      cwd: projectRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return undefined;
  }
}

function prospectConfig(value) {
  const displayName = titleFromSlug(value);

  return `import type { BusinessConfig } from "./types";

export const business: BusinessConfig = {
  slug: "${value}",
  name: "${displayName}",
  category: "Local Services",
  contact: {
    phone: "(305) 555-0123",
    email: "hello@example.com",
    city: "Miami",
    state: "FL",
  },
  seo: {
    title: "${displayName} | Miami, FL",
    description: "Professional local service from ${displayName} in Miami, Florida.",
    socialImage: "/images/${value}/hero.jpg",
  },
  hero: {
    eyebrow: "Serving Miami, Florida",
    headline: "Local service you can count on.",
    subheadline: "Replace this with the clearest reason a customer should choose ${displayName}.",
    primaryCTA: { label: "Get a free quote", href: "#contact" },
    secondaryCTA: { label: "View services", href: "#services" },
    image: {
      src: "/images/${value}/hero.jpg",
      alt: "Describe ${displayName}'s team or service shown in this image",
      width: 1798,
      height: 875,
    },
  },
  services: [
    { name: "Primary service", description: "Describe the most important service in one concise sentence." },
    { name: "Second service", description: "Describe another high-value service in one concise sentence." },
    { name: "Third service", description: "Describe another common service in one concise sentence." },
  ],
  reviews: [
    {
      author: "Verified customer name",
      rating: 5,
      text: "Replace this with a verified review and confirm permission or source requirements.",
      source: "Review source",
    },
  ],
  about: {
    headline: "What makes ${displayName} the right local choice?",
    body: "Replace this with accurate business history, credentials, service standards, and differentiators.",
    image: {
      src: "/images/${value}/about.jpg",
      alt: "Describe ${displayName}'s team shown in this image",
      width: 1536,
      height: 1024,
    },
  },
  gallery: [
    {
      src: "/images/${value}/gallery-1.jpg",
      alt: "Describe this completed project",
      width: 1536,
      height: 1024,
    },
  ],
  finalCTA: {
    headline: "Ready to get started?",
    body: "Contact us today for clear next steps.",
    primaryCTA: { label: "Request a free quote", href: "#contact" },
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
`;
}

if (!slug) {
  fail("provide a slug, for example: npm run prospect -- vmel");
}

if (!SLUG_PATTERN.test(slug)) {
  fail("the slug must use lowercase letters, numbers, and single hyphens only");
}

const branch = currentBranch();
if (branch === "main" || branch === "master") {
  fail(`create a prospect branch first (git checkout -b prospect/${slug})`);
}

const demoImages = path.join(projectRoot, "public", "images", "demo");
const prospectImages = path.join(projectRoot, "public", "images", slug);
const configPath = path.join(projectRoot, "src", "config", "business.config.ts");

if (!existsSync(demoImages)) {
  fail("the demo image set is missing from public/images/demo");
}

if (!existsSync(configPath)) {
  fail("src/config/business.config.ts could not be found");
}

if (existsSync(prospectImages)) {
  fail(`public/images/${slug} already exists; no files were changed`);
}

const previousConfig = await readFile(configPath, "utf8");

try {
  await mkdir(prospectImages, { recursive: false });
  await Promise.all(
    ["hero.jpg", "about.jpg", "gallery-1.jpg"].map((fileName) =>
      cp(path.join(demoImages, fileName), path.join(prospectImages, fileName)),
    ),
  );
  await writeFile(configPath, prospectConfig(slug), "utf8");
} catch (error) {
  await writeFile(configPath, previousConfig, "utf8");
  await rm(prospectImages, { recursive: true, force: true });
  throw error;
}

console.log(`
Created the ${titleFromSlug(slug)} prospect starter.

Next:
  1. Replace images in public/images/${slug}/
  2. Edit src/config/business.config.ts
  3. Run npm run dev
`);
