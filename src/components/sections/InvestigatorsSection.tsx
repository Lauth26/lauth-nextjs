import Image from "next/image";

export function InvestigatorsSection() {
  return (
    <section className="bg-navy-500 py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our investigators
            </h2>
            <div className="w-16 h-1 bg-gold mb-6" />
            <p className="text-navy-200 leading-relaxed">
              Our investigators combine decades of private investigation
              experience with advanced research methods and a nationwide reach.
              Each case is handled with discretion, persistence, and results you
              can trust.
            </p>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
            <Image
              src="https://lauthinvestigations.com/wp-content/uploads/2025/01/investigators-team.jpg"
              alt="Lauth Investigations Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
