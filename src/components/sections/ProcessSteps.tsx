import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

const STEPS = [
  {
    title: "Free Consultation",
    description: "You speak with a licensed investigator about your case.",
    image: "https://lauthinvestigations.com/wp-content/uploads/2025/01/consultation-icon.png",
  },
  {
    title: "Investigation Begins",
    description: "Discreet professionals deploy proven investigative techniques.",
    image: "https://lauthinvestigations.com/wp-content/uploads/2025/01/investigation-icon.png",
  },
  {
    title: "Achieve Results",
    description: "You receive a clear report with recommendations for next steps.",
    image: "https://lauthinvestigations.com/wp-content/uploads/2025/01/results-icon.png",
  },
];

export function ProcessSteps() {
  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="How Our Investigation Process Works"
          className="mb-16"
        />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex items-center gap-4 md:gap-0 md:flex-col">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-navy-500 flex items-center justify-center mb-4">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-navy-200 text-sm max-w-[250px]">{step.description}</p>
              </div>
              {index < STEPS.length - 1 && (
                <div className="hidden md:block w-24 h-0.5 bg-gold/30 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
