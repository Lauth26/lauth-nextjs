"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const TESTIMONIALS = [
  {
    text: "Working with Lauth Investigation is both efficient and rewarding. They have been able to obtain crucial information that has impacted the overall effectiveness of my team. This has put my company growth in the forefront of everyone's mind. The results of their in house consultations were immeasurable.",
    author: "Bradley L.",
  },
  {
    text: "The results of Lauth Investigations has been rapid, clear, and understandable. My company needed this refreshing crisis management consultation process. I am happy to have such an incredible team to lean on when we need them.",
    author: "Jennifer B.",
  },
  {
    text: "The information Lauth Investigations was able to obtain in regards to the unethical activities occurring at one of our warehouses was exactly what our HR Director needed to begin termination procedures on not just one individual but an entire department. I would definitely recommend them!",
    author: "Benjamin A.",
  },
  {
    text: "Thank you LII for bringing the lost asset to my attention. As I live in another state, you were able to locate me, cited the asset, answered my questions when I contacted you, and explained the process thoroughly. You provided all the forms necessary. After a few steps on my own, the claim was submitted and processed. I am very impressed by your process and professionalism. Thank you again.",
    author: "John B. - King George, VA",
  },
  {
    text: "I was completely surprised when I received a letter from Lauth Investigations informing me that my deceased sister and I may be heirs to some lost assets. We would have never known about it. I do appreciate Rain and the others for making this possible.",
    author: "Forrest C. - Omaha, TX",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section id="testimonial" className="bg-navy-600 py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading
          eyebrow="TESTIMONIAL"
          title="What Our Clients Say"
          className="mb-12"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Quote icon */}
          <div className="text-gold/20 text-8xl font-serif leading-none mb-4 text-center">
            &ldquo;
          </div>

          {/* Testimonial content */}
          <div className="text-center min-h-[200px] flex flex-col items-center justify-center">
            <p className="text-lg md:text-xl text-navy-100 leading-relaxed italic mb-6">
              &ldquo;{TESTIMONIALS[current].text}&rdquo;
            </p>
            <p className="text-gold font-semibold">
              {TESTIMONIALS[current].author}
            </p>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-gold w-8"
                    : "bg-navy-400 hover:bg-navy-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Prev/Next arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 rounded-full bg-navy-400 text-white hover:bg-gold hover:text-dark transition-all flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 rounded-full bg-navy-400 text-white hover:bg-gold hover:text-dark transition-all flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
