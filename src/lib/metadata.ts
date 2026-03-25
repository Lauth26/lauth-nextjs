import type { Metadata } from "next";
import type { YoastHeadJson } from "./types";
import { COMPANY } from "./constants";

/**
 * Convert Yoast SEO head JSON to Next.js Metadata object.
 * Falls back to sensible defaults when Yoast data is missing.
 */
export function yoastToMetadata(
  yoast: YoastHeadJson | undefined,
  fallback: {
    title?: string;
    description?: string;
    url?: string;
    image?: string;
  } = {}
): Metadata {
  const title = yoast?.title || fallback.title || COMPANY.name;
  const description =
    yoast?.description || fallback.description || COMPANY.description;
  const canonical = yoast?.canonical || fallback.url;
  const ogImage =
    yoast?.og_image?.[0]?.url || fallback.image;

  return {
    title,
    description,
    ...(canonical && {
      alternates: { canonical: canonical.replace(COMPANY.url, "") },
    }),
    robots: {
      index: yoast?.robots?.index !== "noindex",
      follow: yoast?.robots?.follow !== "nofollow",
    },
    openGraph: {
      title: yoast?.og_title || title,
      description: yoast?.og_description || description,
      url: yoast?.og_url || canonical,
      siteName: yoast?.og_site_name || COMPANY.name,
      locale: yoast?.og_locale || "en_US",
      type: (yoast?.og_type as "website" | "article") || "website",
      ...(ogImage && {
        images: [
          {
            url: ogImage,
            width: yoast?.og_image?.[0]?.width || 1200,
            height: yoast?.og_image?.[0]?.height || 630,
          },
        ],
      }),
    },
    twitter: {
      card: (yoast?.twitter_card as "summary_large_image" | "summary") || "summary_large_image",
      title: yoast?.twitter_title || yoast?.og_title || title,
      description: yoast?.twitter_description || yoast?.og_description || description,
      ...(yoast?.twitter_image && { images: [yoast.twitter_image] }),
    },
  };
}

/**
 * Generate default metadata for a page that doesn't have Yoast data.
 */
export function defaultMetadata(
  title: string,
  description: string,
  path: string
): Metadata {
  const fullTitle = `${title} | ${COMPANY.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: `${COMPANY.url}${path}`,
      siteName: COMPANY.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/**
 * Build Organization JSON-LD schema
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${COMPANY.url}/#organization`,
    name: COMPANY.name,
    url: COMPANY.url,
    logo: `${COMPANY.url}/wp-content/uploads/2024/01/lauth-logo.png`,
    image: `${COMPANY.url}/wp-content/uploads/2024/01/lauth-logo.png`,
    description: COMPANY.description,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: COMPANY.founded,
    founder: {
      "@type": "Person",
      name: COMPANY.founder,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.stateAbbr,
      postalCode: COMPANY.address.zip,
      addressCountry: COMPANY.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.latitude,
      longitude: COMPANY.geo.longitude,
    },
    sameAs: Object.values(COMPANY.social),
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  };
}

/**
 * Build WebSite JSON-LD schema
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY.url}/#website`,
    url: COMPANY.url,
    name: COMPANY.name,
    description: COMPANY.description,
    publisher: {
      "@id": `${COMPANY.url}/#organization`,
    },
  };
}

/**
 * Build BreadcrumbList JSON-LD schema
 */
export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${COMPANY.url}${item.url}`,
    })),
  };
}

/**
 * Build Article JSON-LD schema for blog posts
 */
export function articleSchema(post: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: post.url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Person",
      name: post.authorName,
    },
    publisher: {
      "@id": `${COMPANY.url}/#organization`,
    },
    ...(post.image && {
      image: {
        "@type": "ImageObject",
        url: post.image,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": post.url,
    },
  };
}

/**
 * Build FAQPage JSON-LD schema
 */
export function faqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
