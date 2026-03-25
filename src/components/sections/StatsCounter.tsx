"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 35, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Success Rate" },
  { value: 2, suffix: "K", label: "Problems Solved" },
];

export function StatsCounter() {
  return (
    <section className="bg-navy-600 py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {STATS.map((stat) => (
            <CounterCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CounterCard({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = Date.now();

          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * value));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="p-6">
      <div className="text-5xl md:text-6xl font-bold text-gold mb-2">
        {count}
        <span className="text-gold">{suffix}</span>
      </div>
      <div className="text-navy-200 text-lg">{label}</div>
    </div>
  );
}
