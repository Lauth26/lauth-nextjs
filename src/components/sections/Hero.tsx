import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-dark to-navy-700 py-20 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,186,96,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }} />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 md:px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          Sorting Out the Truth for a{" "}
          <span className="text-gold">Secure Tomorrow</span>
        </h1>
        <p className="text-lg md:text-xl text-navy-200 max-w-3xl mx-auto mb-4">
          <strong className="text-white">
            For over 30 years, Lauth Investigations International has delivered
            clarity in uncertain times.
          </strong>
        </p>
        <p className="text-base md:text-lg text-navy-300 max-w-3xl mx-auto mb-10">
          Whether you need a corporate investigation, legal investigative support,
          or a private investigator for personal matters, our licensed
          investigators uncover the facts you need to make confident decisions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Free Consultation
          </Button>
          <Button href="/corporate" variant="outline" size="lg">
            Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}
