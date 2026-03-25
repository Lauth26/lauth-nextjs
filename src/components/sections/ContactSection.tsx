import { COMPANY } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section className="bg-navy-500 py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-navy-200 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    className="w-full px-4 py-3 bg-navy-600 border border-navy-400 rounded-lg text-white placeholder-navy-300 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-navy-200 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    className="w-full px-4 py-3 bg-navy-600 border border-navy-400 rounded-lg text-white placeholder-navy-300 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-navy-200 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john.doe@example.com"
                  className="w-full px-4 py-3 bg-navy-600 border border-navy-400 rounded-lg text-white placeholder-navy-300 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-navy-200 mb-1">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 234 567 8900"
                  className="w-full px-4 py-3 bg-navy-600 border border-navy-400 rounded-lg text-white placeholder-navy-300 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-navy-200 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Type your message ..."
                  className="w-full px-4 py-3 bg-navy-600 border border-navy-400 rounded-lg text-white placeholder-navy-300 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gold text-dark font-semibold rounded-lg hover:bg-gold-500 transition-colors"
              >
                Submit
              </button>
            </form>
            <h2 className="text-2xl font-bold text-white mt-8">
              Contact Lauth Investigations
            </h2>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">
              Contact information
            </h2>
            <div className="space-y-6">
              <ContactInfo
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
                title="Phone Number"
                content={`Call us : ${COMPANY.phone} | Text us : ${COMPANY.textPhone}`}
              />
              <ContactInfo
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                title="Email"
                content={COMPANY.email}
              />
              <ContactInfo
                icon={
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                title="Address"
                content={COMPANY.address.full}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 text-gold flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        <p className="text-navy-200 text-sm">{content}</p>
      </div>
    </div>
  );
}
