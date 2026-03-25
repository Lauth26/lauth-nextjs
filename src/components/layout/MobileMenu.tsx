"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_ITEMS } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div className="absolute right-0 top-0 h-full w-[300px] bg-navy-500 shadow-2xl flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-navy-400">
          <Link href="/" onClick={onClose}>
            <Image
              src="https://lauthinvestigations.com/wp-content/uploads/2025/01/Lauth-Logo-Dark.png"
              alt="Lauth Investigations"
              width={150}
              height={38}
              className="h-10 w-auto"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-gold transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              if ("children" in item && item.children) {
                const isExpanded = expandedService === item.label;
                return (
                  <li key={item.label}>
                    <button
                      className="w-full flex items-center justify-between py-3 px-3 text-white hover:text-gold transition-colors font-medium rounded-lg hover:bg-white/5"
                      onClick={() =>
                        setExpandedService(isExpanded ? null : item.label)
                      }
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
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
                    {isExpanded && (
                      <div className="ml-3 mt-1 space-y-4 border-l-2 border-gold/30 pl-4">
                        {item.children.map((cat) => (
                          <div key={cat.category}>
                            <span className="text-gold text-xs font-bold uppercase tracking-wider">
                              {cat.category}
                            </span>
                            <ul className="mt-2 space-y-1">
                              {cat.items.map((subItem) => (
                                <li key={subItem.href}>
                                  <Link
                                    href={subItem.href}
                                    className="block py-1.5 text-sm text-navy-200 hover:text-gold transition-colors"
                                    onClick={onClose}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-3 px-3 text-white hover:text-gold transition-colors font-medium rounded-lg hover:bg-white/5"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA */}
        <div className="p-4 border-t border-navy-400">
          <Link
            href="/contact"
            className="block w-full py-3 bg-gold text-dark font-semibold text-center rounded-lg hover:bg-gold-500 transition-colors"
            onClick={onClose}
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
