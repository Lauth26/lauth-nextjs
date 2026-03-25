import Link from "next/link";

interface ServiceCategory {
  readonly category: string;
  readonly items: ReadonlyArray<{
    readonly label: string;
    readonly href: string;
  }>;
}

interface ServicesMegaMenuProps {
  categories: ReadonlyArray<ServiceCategory>;
  onClose: () => void;
}

export function ServicesMegaMenu({ categories, onClose }: ServicesMegaMenuProps) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] bg-navy-500 border border-navy-400 rounded-xl shadow-2xl p-6 grid grid-cols-2 gap-6">
      {categories.map((category) => (
        <div key={category.category}>
          <h3 className="text-gold font-bold text-sm uppercase tracking-wider mb-3">
            {category.category}
          </h3>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-navy-200 hover:text-gold transition-colors text-sm block py-1"
                  onClick={onClose}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
