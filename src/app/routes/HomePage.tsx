
import { Community } from "@/components/sections/figma/Community";
import { Experiences } from "@/components/sections/figma/Experiences";
import { Hero } from "@/components/sections/figma/Hero";
import { LanguageSchool } from "@/components/sections/figma/LanguageSchool";
import { Quotes } from "@/components/sections/figma/Quotes";
import { Restaurant } from "@/components/sections/figma/Restaurant";
import { Story } from "@/components/sections/figma/Story";

export function HomePage() {
  return (
    <>

      <Hero />
      <Story />
      <Quotes />
      <Restaurant />
      <LanguageSchool />
      <Experiences />
      <Community />
    </>
  );
}
