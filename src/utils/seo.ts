import type { BusinessConfig } from "../config/types";

export function pageTitle(business: BusinessConfig, page?: string): string {
  return page ? `${page} | ${business.name}` : business.seo.title;
}

export function canonicalUrl(
  business: BusinessConfig,
  path: string,
): string | undefined {
  if (!business.siteUrl) return undefined;
  return new URL(path, business.siteUrl).toString();
}

export function absoluteAssetUrl(
  business: BusinessConfig,
  asset?: string,
): string | undefined {
  if (!asset) return undefined;
  if (/^https?:\/\//.test(asset)) return asset;
  if (!business.siteUrl) return undefined;
  return new URL(asset, business.siteUrl).toString();
}

export function localBusinessJsonLd(business: BusinessConfig) {
  const address =
    business.contact.address || business.contact.city || business.contact.state
      ? {
          "@type": "PostalAddress",
          ...(business.contact.address
            ? { streetAddress: business.contact.address }
            : {}),
          ...(business.contact.city
            ? { addressLocality: business.contact.city }
            : {}),
          ...(business.contact.state
            ? { addressRegion: business.contact.state }
            : {}),
        }
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.seo.description,
    telephone: business.contact.phone,
    ...(business.contact.email ? { email: business.contact.email } : {}),
    ...(business.siteUrl ? { url: business.siteUrl } : {}),
    ...(address ? { address } : {}),
  };
}
