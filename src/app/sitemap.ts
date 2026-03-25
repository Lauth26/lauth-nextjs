import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { getAllPostsForSitemap, getCategories } from "@/lib/wordpress";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = COMPANY.url;

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/corporate`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/personal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.8 },
  ];

  // Service pages
  const services = [
    "corporate-culture-audit", "due-diligence", "embezzlement",
    "intellectual-property-theft", "insurance-fraud", "fmla-abuse",
    "workers-compensation-fraud", "child-custody", "infidelity",
    "missing-persons", "catfishing", "bug-sweeps", "background-checks",
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Blog posts from WordPress
  let postPages: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPostsForSitemap();
    postPages = posts.map((post) => ({
      url: `${baseUrl}/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }));
  } catch {
    // WP API may be down; return static pages only
  }

  // Category pages
  let categoryPages: MetadataRoute.Sitemap = [];
  try {
    const categories = await getCategories();
    categoryPages = categories.map((cat) => ({
      url: `${baseUrl}/category/${cat.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.5,
    }));
  } catch {
    // WP API may be down
  }

  return [...staticPages, ...servicePages, ...postPages, ...categoryPages];
}
