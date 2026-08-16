export interface CTA {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BusinessService {
  name: string;
  description: string;
  image?: ImageAsset;
}

export interface BusinessReview {
  author: string;
  rating: number;
  text: string;
  source?: string;
}

export interface GalleryImage extends ImageAsset {}

export interface BusinessConfig {
  slug: string;
  name: string;
  shortName?: string;
  category: string;
  siteUrl?: string;
  contact: {
    phone: string;
    email?: string;
    address?: string;
    city?: string;
    state?: string;
    formEndpoint?: string;
  };
  seo: {
    title: string;
    description: string;
    socialImage?: string;
  };
  hero: {
    eyebrow?: string;
    headline: string;
    subheadline: string;
    primaryCTA: CTA;
    secondaryCTA?: CTA;
    image: ImageAsset;
  };
  services: BusinessService[];
  reviews: BusinessReview[];
  about: {
    headline: string;
    body: string;
    image?: ImageAsset;
  };
  gallery?: GalleryImage[];
  finalCTA?: {
    headline: string;
    body?: string;
    primaryCTA: CTA;
  };
  social?: {
    instagram?: string;
    facebook?: string;
    googleBusiness?: string;
  };
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    background?: string;
    foreground?: string;
    surface?: string;
  };
}
