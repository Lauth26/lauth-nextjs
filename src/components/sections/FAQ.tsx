"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const FAQS = [
  {
    question: "What services do Lauth Investigations provide?",
    answer: `Lauth Investigations offers various investigation services for individuals and corporations. These include personal, corporate, and legal support investigations. Examples are:

- Personal Investigations: Child custody, missing persons, infidelity, theft, and unsolved homicide investigations, as well as background checks.
- Corporate Investigations: HR investigations (harassment, discrimination, misconduct, theft, etc.), corporate culture audits, fraud, threat assessments, white-collar crime, and business intelligence.
- Legal Support Investigations: Litigation support, asset searches, child support, domestic violence, drug crime, and criminal defense investigations.`,
  },
  {
    question: "How do Lauth Investigations conduct their investigations?",
    answer:
      "Our licensed investigators employ a range of proven techniques including surveillance, background research, interviews, forensic analysis, and open-source intelligence gathering. Each investigation is tailored to the specific needs of the case, and all findings are documented to legal standards.",
  },
  {
    question:
      "What is Lauth Investigations' commitment to privacy and confidentiality?",
    answer:
      "Confidentiality is the cornerstone of our practice. All information shared with us is treated with the utmost discretion. Our investigators are bound by strict confidentiality agreements, and we employ secure communication channels and data storage to protect our clients' sensitive information.",
  },
  {
    question: "How can I hire Lauth Investigations?",
    answer:
      "Getting started is simple. Contact us via phone at (317) 951-1100 or through our website contact form for a free, confidential consultation. A licensed investigator will discuss your situation, outline the investigative approach, and provide a transparent cost estimate before any work begins.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              eyebrow="FAQ"
              title="Most Asked Questions"
              align="left"
            />
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <div
                key={index}
                className="border border-navy-400 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-navy-500/50 transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5">
                    <p className="text-navy-200 whitespace-pre-line leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Button href="/blog">Explore Our Blog</Button>
        </div>
      </div>
    </section>
  );
}

