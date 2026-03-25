import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    title: "Legal Support",
    description: "Legal investigation support to strengthen your case with admissible evidence.",
    href: "/corporate",
    image: "https://lauthinvestigations.com/wp-content/uploads/2025/01/legal-support-icon.png",
    cta: "Explore Legal Support Services",
  },
  {
    title: "Corporate",
    description: "Corporate fraud investigation and employee background verification.",
    href: "/corporate",
    image: "https://lauthinvestigations.com/wp-content/uploads/2025/01/corporate-icon.png",
    cta: "Explore Corporate Services",
  },
  {
    title: "Personal",
    description: "Discreet personal investigations – custody, infidelity, missing persons.",
    href: "/personal",
    image: "https://lauthinvestigations.com/wp-content/uploads/2025/01/personal-icon.png",
    cta: "Explore Personal Services",
  },
];

export function ServicesGrid() {
  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Specialized Services Tailored to Your Needs"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-navy-500 rounded-xl p-8 text-center hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy-400 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-navy-200 mb-6">{service.description}</p>
              <Button href={service.href} variant="ghost" size="sm">
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
