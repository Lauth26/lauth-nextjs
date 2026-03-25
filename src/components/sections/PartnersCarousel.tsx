"use client";

import Image from "next/image";

const PARTNERS = [
  { name: "RAD", src: "https://lauthinvestigations.com/wp-content/uploads/2025/01/Footer-Logo.png" },
  { name: "Walmart", src: "https://lauthinvestigations.com/wp-content/uploads/2025/01/Walmart_Index_Only.svg.png" },
  { name: "Cisco", src: "https://lauthinvestigations.com/wp-content/uploads/2025/01/cisco.svg.png" },
  { name: "Volvo", src: "https://lauthinvestigations.com/wp-content/uploads/2025/01/Volvo_Index_Only.svg.png" },
  { name: "Deloitte", src: "https://lauthinvestigations.com/wp-content/uploads/2025/01/deloitte.svg.png" },
  { name: "Deloitte Consulting", src: "https://lauthinvestigations.com/wp-content/uploads/2025/01/deloitte.svg-1.png" },
];

export function PartnersCarousel() {
  return (
    <section className="bg-navy-500 py-12">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">Our Partners</h2>
          <p className="text-navy-300">Trusted by 54+ companies</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {PARTNERS.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 w-32 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            >
              <Image
                src={partner.src}
                alt={partner.name}
                width={128}
                height={64}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
