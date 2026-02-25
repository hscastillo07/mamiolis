import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { QuotesSection } from "@/components/sections/QuotesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { QrStorySection } from "@/components/sections/QrStorySection";
import { MenuSection } from "@/components/sections/MenuSection";
import { LocationHoursSection } from "@/components/sections/LocationHoursSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <QuotesSection />
      <GallerySection />
      <ExperiencesSection />
      <QrStorySection />
      <MenuSection />
      <LocationHoursSection />
    </>
  );
}
