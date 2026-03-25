import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lauthinvestigations.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },

  async redirects() {
    return [
      // Legacy WordPress redirects (previously JS-based, now proper 301s)
      {
        source: "/corporate-services",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/corporate-2",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/human-resources-2",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/personal-client-services",
        destination: "/personal",
        permanent: true,
      },
      {
        source: "/attorney-legal-support-services",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/specialty-services",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/specialty",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/corporate",
        permanent: true,
      },
      {
        source: "/our-team",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/our-story",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/blog/page/1",
        destination: "/blog",
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
