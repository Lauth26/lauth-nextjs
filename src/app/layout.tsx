import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Slab } from "next/font/google";
import "@/styles/globals.css";
import { COMPANY } from "@/lib/constants";
import { organizationSchema, websiteSchema } from "@/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: `${COMPANY.name} | Trusted Investigation Solutions Since ${COMPANY.founded}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: COMPANY.description,
  keywords: [
    "private investigator",
    "corporate investigations",
    "private detective",
    "Indianapolis PI",
    "background checks",
    "surveillance",
    "due diligence",
    "insurance fraud investigation",
    "missing persons",
    "child custody investigation",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: COMPANY.url,
    siteName: COMPANY.name,
    title: COMPANY.name,
    description: COMPANY.description,
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: COMPANY.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: "verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable} ${robotoSlab.variable}`}>
      <head>
        {/* Google Tag Manager - will be added in Phase 6 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema()),
          }}
        />
      </head>
      <body className="bg-dark text-white font-inter antialiased">
        {/* Header will be added in Phase 2 */}
        <main>{children}</main>
        {/* Footer will be added in Phase 2 */}
      </body>
    </html>
  );
}
