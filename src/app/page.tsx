import { COMPANY } from "@/lib/constants";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-gold">{COMPANY.shortName}</span>
        </h1>
        <p className="text-xl text-navy-200 mb-4">
          {COMPANY.tagline}
        </p>
        <p className="text-navy-300 mb-8">
          Next.js site under construction. Full homepage coming in Phase 3.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href={COMPANY.url}
            className="px-6 py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-500 transition-colors"
          >
            Visit Current Site
          </a>
          <a
            href="/blog"
            className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors"
          >
            Blog (Coming Soon)
          </a>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl font-bold text-gold">{COMPANY.yearsExperience}</div>
          <div className="text-sm text-navy-300 mt-1">Years Experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gold">2,400+</div>
          <div className="text-sm text-navy-300 mt-1">Cases Handled</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gold">50</div>
          <div className="text-sm text-navy-300 mt-1">States Covered</div>
        </div>
        <div>
          <div className="text-3xl font-bold text-gold">98%</div>
          <div className="text-sm text-navy-300 mt-1">Client Satisfaction</div>
        </div>
      </div>
    </div>
  );
}
