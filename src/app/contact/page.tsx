import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { defaultMetadata } from "@/lib/metadata";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = defaultMetadata(
  "Contact Us",
  `Contact ${COMPANY.name} for a free, confidential consultation. Call ${COMPANY.phone} or fill out our form.`,
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16">
        <Container>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's Discuss Your Case"
          />
          <p className="text-navy-200 text-center mt-4 max-w-2xl mx-auto">
            Whether you need a corporate investigation, legal support, or personal
            investigation services, our licensed investigators are ready to help.
          </p>
        </Container>
      </section>
      <ContactSection />
    </>
  );
}
