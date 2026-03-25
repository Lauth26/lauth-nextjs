import { SectionHeading } from "@/components/ui/SectionHeading";

const REASONS = [
  {
    title: "Responsive & Dedicated Service",
    description:
      "At Lauth, we pride ourselves on our swift and decisive action, with investigators ready to deploy at a moment's notice to address your urgent needs. We understand time is critical, and our rapid response ensures crucial evidence is secured. Throughout this process, your peace of mind is our top priority. We maintain open lines of communication, providing regular updates and tailoring our approach to meet your specific goals.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Expertise Across All Sectors",
    description:
      "Our strength lies in our diverse team of seasoned investigators with backgrounds in law enforcement, military intelligence, and corporate security. This wealth of collective knowledge allows us to deliver proven solutions across a wide range of sectors, from corporate fraud and intellectual property theft to family law and missing persons cases for corporations, law firms, and private individuals alike.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: "Fact-based Investigations",
    description:
      'Every investigation is fact-based, independently verified, and thoroughly documented for legal proceedings.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Commitment to Results",
    description:
      "Our investigators are dedicated to fulfilling your request. No matter the obstacles we encounter, our team remains steadfast in achieving results, providing accurate information, and keeping open lines of communication with all parties involved.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-navy-700 py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              title="Why Choose Lauth?"
              align="left"
              className="mb-4"
            />
            <p className="text-navy-300 mb-2">
              Lauth Private investigators Readiness and Response
            </p>
            <p className="text-navy-200 leading-relaxed">
              At Lauth Investigations, we&apos;re more than just investigators — we&apos;re
              your trusted partner in uncovering the truth. Here is why clients
              across the U.S. choose us:
            </p>
          </div>
          <div className="space-y-6">
            {REASONS.map((reason) => (
              <div key={reason.title} className="flex gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-navy-200 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
