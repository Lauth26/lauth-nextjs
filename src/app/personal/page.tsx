import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { SERVICES_PERSONAL } from "@/lib/constants";
import { defaultMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = defaultMetadata(
  "Personal Investigation Services",
  "Discreet personal investigation services from Lauth Investigations. Child custody, infidelity, missing persons, background checks, and more.",
  "/personal"
);

export default function PersonalPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
              Personal Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Personal Investigation Services
            </h1>
            <p className="text-lg text-navy-200 mb-8">
              When personal matters require professional attention, our licensed
              investigators provide discreet, compassionate service with results
              you can trust.
            </p>
            <Button href="/contact" size="lg">
              Request a Consultation
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-dark py-16">
        <Container>
          <SectionHeading
            title="Our Personal Services"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_PERSONAL.map((service) => (
              <Link
                key={service.slug}
                href={`/${service.slug}`}
                className="bg-navy-500 rounded-xl p-6 border border-navy-400 hover:border-gold/30 transition-all group"
              >
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-200 text-sm">{service.description}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-navy-500 py-16">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Your Privacy Is Our Priority
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mb-6" />
            <p className="text-navy-200 mb-8">
              Every personal investigation is handled with the utmost discretion.
              Our investigators understand the sensitive nature of personal cases
              and provide compassionate, professional service at every step.
            </p>
            <Button href="/contact" size="lg">
              Confidential Consultation
            </Button>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
