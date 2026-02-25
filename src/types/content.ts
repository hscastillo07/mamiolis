import type { ContactLinks, ScheduleDay } from "./contact";
import type { GalleryImage } from "./gallery";

export interface SiteMeta {
  siteName: string;
  title: string;
  description: string;
  tagline: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface QuoteItem {
  id: string;
  text: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  description: string;
  badge?: string;
  icon: "languages" | "table" | "music" | "coffee";
}

export interface HomeContent {
  tagline: string;
  heroSubtitle: string;
  storyIntro: string;
  storyBody: string[];
  quotes: QuoteItem[];
  ctaLabels: {
    //whatsapp: string;
    menu: string;
    directions: string;
    ecos: string;
  };
  qrStoryCopy: {
    title: string;
    body: string;
  };
}

export type { ContactLinks, ScheduleDay, GalleryImage };
