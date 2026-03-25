import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const FOOTER_COMPANY = [
  { label: "Home", href: "/" },
  { label: "Testimonials", href: "/#testimonial" },
  { label: "Blog", href: "/blog" },
];

const FOOTER_SERVICES = [
  { label: "Corporate Investigations", href: "/corporate" },
  { label: "Human Resources", href: "/corporate" },
  { label: "Personal/Private Client", href: "/personal" },
  { label: "Attorney & Legal Services", href: "/corporate" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-500 pt-12">
      {/* Social Links Bar */}
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-navy-400">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <SocialLink
              href={COMPANY.social.facebook}
              label="Facebook"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              }
            />
            <SocialLink
              href={COMPANY.social.linkedin}
              label="LinkedIn"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />
            <SocialLink
              href={COMPANY.social.youtube}
              label="YouTube"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              }
            />
            <SocialLink
              href={COMPANY.social.instagram}
              label="Instagram"
              icon={
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              }
            />
          </div>
          <p className="text-navy-300 text-sm">
            &copy; {currentYear} &mdash; LAUTH INVESTIGATIONS, INC.
          </p>
        </div>
      </Container>

      {/* Main Footer Content */}
      <Container>
        <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo + CTA */}
          <div className="lg:col-span-1 flex flex-col items-start gap-4">
            <Link href="/">
              <Image
                src="https://lauthinvestigations.com/wp-content/uploads/2025/01/Lauth-Logo-Dark.png"
                alt="Lauth Investigations International"
                width={160}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-dark font-semibold rounded-lg text-sm hover:bg-gold-500 transition-colors"
            >
              Let&apos;s Get Started
            </Link>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {FOOTER_COMPANY.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-200 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link
                    href={link.href}
                    className="text-navy-200 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Address
            </h3>
            <address className="not-italic text-navy-200 text-sm leading-relaxed">
              {COMPANY.address.street},<br />
              {COMPANY.address.street2} {COMPANY.address.city}, {COMPANY.address.stateAbbr}{" "}
              {COMPANY.address.zip}
            </address>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Email &amp; Phone Number
            </h3>
            <ul className="space-y-2 text-navy-200 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneClean}`}
                  className="hover:text-gold transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Logo */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Our Partner
            </h3>
            <Image
              src="https://lauthinvestigations.com/wp-content/uploads/2025/01/Footer-Logo.png"
              alt="RAD - Return Assets Division"
              width={120}
              height={60}
              className="h-12 w-auto opacity-80"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-400 text-white hover:bg-gold hover:text-dark transition-all"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
