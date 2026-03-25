import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTABanner } from "@/components/sections/CTABanner";

interface ServicePageLayoutProps {
  title: string;
  subtitle?: string;
  description: string;
  content: string;
  image?: string;
  features?: Array<{ title: string; description: string }>;
  relatedServices?: Array<{ title: string; href: string }>;
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  content,
  image,
  features,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            {subtitle && (
              <p className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-lg text-navy-200 mb-8">{description}</p>
            <Button href="/contact">Get a Free Consultation</Button>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-dark py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div
                className="prose prose-invert prose-lg max-w-none prose-lauth"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
            <aside className="space-y-8">
              {image && (
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={image} alt={title} fill className="object-cover" />
                </div>
              )}
              {/* Contact card */}
              <div className="bg-navy-500 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Need Help?
                </h3>
                <p className="text-navy-200 text-sm mb-4">
                  Speak directly with a licensed investigator about your case.
                </p>
                <Button href="/contact" size="sm" className="w-full">
                  Contact Us
                </Button>
                <p className="text-center text-navy-300 text-sm mt-3">
                  or call{" "}
                  <a href="tel:3179511100" className="text-gold hover:underline">
                    (317) 951-1100
                  </a>
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Features */}
      {features && features.length > 0 && (
        <section className="bg-navy-500 py-16">
          <Container>
            <SectionHeading title="What We Offer" className="mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-navy-600 rounded-lg p-6 border border-navy-400"
                >
                  <h3 className="text-white font-bold mb-2">{feature.title}</h3>
                  <p className="text-navy-200 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="bg-dark py-16">
          <Container>
            <SectionHeading title="Related Services" className="mb-8" />
            <div className="flex flex-wrap justify-center gap-4">
              {relatedServices.map((service) => (
                <Button
                  key={service.href}
                  href={service.href}
                  variant="outline"
                  size="sm"
                >
                  {service.title}
                </Button>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTABanner />
    </>
  );
}
