import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { SERVICES_CORPORATE } from "@/lib/constants";
import { defaultMetadata } from "@/lib/metadata";
import Link from "next/link";

export const metadata: Metadata = defaultMetadata(
  "Corporate Investigation Services",
  "Lauth Investigations provides comprehensive corporate investigation services including fraud detection, due diligence, embezzlement investigation, and more.",
  "/corporate"
);

export default function CorporatePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
              Corporate Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Corporate Investigation Services
            </h1>
            <p className="text-lg text-navy-200 mb-8">
              Protect your business with professional corporate investigation
              services. From fraud detection to employee misconduct, our licensed
              investigators deliver actionable intelligence.
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
            title="Our Corporate Services"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_CORPORATE.map((service) => (
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Businesses Choose Lauth
              </h2>
              <div className="w-16 h-1 bg-gold mb-6" />
              <ul className="space-y-4">
                {[
                  "Licensed investigators with corporate security backgrounds",
                  "Discreet, fact-based methodology",
                  "Reports documented to legal standards",
                  "Nationwide coverage across all 50 states",
                  "Free initial consultation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-navy-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-600 rounded-xl p-8 border border-navy-400">
              <h3 className="text-xl font-bold text-white mb-4">
                Start Your Investigation
              </h3>
              <p className="text-navy-200 mb-6">
                Every investigation begins with a free, confidential consultation.
                Speak with a licensed investigator about your concerns.
              </p>
              <Button href="/contact" className="w-full">
                Get Started Today
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
