import { Hero } from "@/components/sections/Hero";
import { PartnersCarousel } from "@/components/sections/PartnersCarousel";
import { AboutLegacy } from "@/components/sections/AboutLegacy";
import { StatsCounter } from "@/components/sections/StatsCounter";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { InvestigatorsSection } from "@/components/sections/InvestigatorsSection";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTABanner } from "@/components/sections/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersCarousel />
      <AboutLegacy />
      <StatsCounter />
      <ServicesGrid />
      <WhyChooseUs />
      <ProcessSteps />
      <Testimonials />
      <BlogPreview />
      <InvestigatorsSection />
      <FAQ />
      <ContactSection />
      <CTABanner />
    </>
  );
}
