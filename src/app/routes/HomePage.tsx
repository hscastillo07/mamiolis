/*import { HeroSection } from "@/components/sections/HeroSection";
import { StorySection } from "@/components/sections/StorySection";
import { QuotesSection } from "@/components/sections/QuotesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { QrStorySection } from "@/components/sections/QrStorySection";
import { MenuSection } from "@/components/sections/MenuSection";
import { LocationHoursSection } from "@/components/sections/LocationHoursSection";*/

import { Community } from "@/components/sections/figma/Community";
import { Experiences } from "@/components/sections/figma/Experiences";
import { Footer } from "@/components/sections/figma/Footer";
import { Hero } from "@/components/sections/figma/Hero";
import { LanguageSchool } from "@/components/sections/figma/LanguageSchool";
import { Quotes } from "@/components/sections/figma/Quotes";
import { Restaurant } from "@/components/sections/figma/Restaurant";
import { Story } from "@/components/sections/figma/Story";

export function HomePage() {
  return (
    <>
      {/* <HeroSection /> 
      <StorySection />
      <QuotesSection />
      <GallerySection />
      <ExperiencesSection />
      <QrStorySection />
      <MenuSection />
      <LocationHoursSection />*/}

      <Hero />
      <Story />
      <Quotes />
      <Restaurant />
      <LanguageSchool />
      <Experiences />
      <Community />
      <Footer />
    </>
  );
}
