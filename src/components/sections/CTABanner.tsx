import { Button } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-navy-500 to-navy-700 py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Need Clarity? We Can Help.
        </h2>
        <p className="text-navy-200 max-w-2xl mx-auto mb-8">
          Don&apos;t leave uncertainty unchallenged. Schedule your free consultation
          today with a licensed private investigator and put trusted intelligence
          to work.
        </p>
        <Button href="/contact" size="lg">
          Request a Free Consultation
        </Button>
      </div>
    </section>
  );
}
