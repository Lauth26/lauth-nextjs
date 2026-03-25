import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutLegacy() {
  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              eyebrow="About Us"
              title="A Legacy of Truth & Trust"
              align="left"
            />
            <p className="text-navy-200 mt-6 mb-8 leading-relaxed">
              Professional private investigators delivering truth and peace of
              mind since 1988. Licensed, bonded, and confidential.
            </p>
            <Button href="/contact">Meet The Team</Button>
          </div>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-navy-500">
            <Image
              src="https://lauthinvestigations.com/wp-content/uploads/2025/01/about-video-thumb.jpg"
              alt="About Lauth Investigations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-gold/90 rounded-full flex items-center justify-center hover:bg-gold transition-colors cursor-pointer">
                <svg className="w-6 h-6 text-dark ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
