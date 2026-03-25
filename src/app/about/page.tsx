import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";
import { COMPANY } from "@/lib/constants";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "About Us",
  `Learn about ${COMPANY.name}, a premier private investigation firm founded by ${COMPANY.founder} in ${COMPANY.founded}.`,
  "/about"
);

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16 md:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <SectionHeading
              eyebrow="About Us"
              title="A Legacy of Truth & Trust"
            />
            <p className="text-lg text-navy-200 mt-6">
              For over {COMPANY.yearsExperience} years, {COMPANY.name} has been
              the trusted partner for corporations, law firms, and individuals
              seeking truth in complex situations.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="bg-dark py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-navy-500">
              <Image
                src="https://lauthinvestigations.com/wp-content/uploads/2025/01/thomas-lauth.jpg"
                alt={`${COMPANY.founder} - ${COMPANY.founderTitle}`}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Founded by {COMPANY.founder}
              </h2>
              <div className="w-16 h-1 bg-gold mb-6" />
              <p className="text-navy-200 leading-relaxed mb-4">
                {COMPANY.founder}, {COMPANY.founderTitle}, founded {COMPANY.name}{" "}
                in {COMPANY.founded} with a mission to provide unparalleled
                investigation services to clients nationwide.
              </p>
              <p className="text-navy-200 leading-relaxed mb-4">
                With decades of experience in private investigation, corporate
                security, and law enforcement, Thomas built a team of seasoned
                professionals who share his commitment to truth, integrity, and
                client satisfaction.
              </p>
              <p className="text-navy-200 leading-relaxed">
                Today, Lauth Investigations operates across all 50 states,
                serving corporations, attorneys, and individuals with a full
                range of investigation services.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-navy-500 py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Values"
            title="What Sets Us Apart"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "Every investigation is conducted with the highest ethical standards. Our findings are fact-based, independently verified, and legally admissible.",
              },
              {
                title: "Discretion",
                description:
                  "Confidentiality is paramount. We protect our clients' privacy at every stage of the investigation process.",
              },
              {
                title: "Results",
                description:
                  "We are committed to delivering clear, actionable findings that empower our clients to make informed decisions.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-navy-600 rounded-xl p-8 border border-navy-400"
              >
                <h3 className="text-xl font-bold text-gold mb-3">
                  {value.title}
                </h3>
                <p className="text-navy-200">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="bg-dark py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, confidential consultation with a
              licensed investigator.
            </p>
            <Button href="/contact" size="lg">
              Get Started
            </Button>
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
