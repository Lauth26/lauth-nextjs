import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      {eyebrow && (
        <h2 className="text-gold text-sm font-bold uppercase tracking-widest mb-3">
          {eyebrow}
        </h2>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
        {title}
      </h2>
      <div
        className={cn(
          "w-16 h-1 bg-gold mt-4",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
