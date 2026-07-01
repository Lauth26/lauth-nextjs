import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import {
  getPostBySlug,
  getTopPostSlugs,
  getRelatedPosts,
} from "@/lib/wordpress";
import { yoastToMetadata, articleSchema, breadcrumbSchema } from "@/lib/metadata";
import { WP_CONFIG } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getTopPostSlugs(WP_CONFIG.topPostsCount);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  if (post.yoast) {
    return yoastToMetadata(post.yoast, {
      title: post.title,
      description: post.excerpt.replace(/<[^>]+>/g, "").slice(0, 160),
      url: `https://lauthinvestigations.com/${slug}`,
    });
  }

  return {
    title: post.title,
    description: post.excerpt.replace(/<[^>]+>/g, "").slice(0, 160),
    alternates: { canonical: `https://lauthinvestigations.com/${slug}` },
  };
}

export const revalidate = 3600;

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  const categoryIds = post.categories.map((c) => c.id);
  const relatedPosts = await getRelatedPosts(post.id, categoryIds, 3);

  const jsonLd = articleSchema({
    title: post.title,
    description: post.excerpt.replace(/<[^>]+>/g, "").slice(0, 160),
    url: `https://lauthinvestigations.com/${slug}`,
    datePublished: post.date,
    dateModified: post.modified,
    authorName: post.author?.name || "Lauth Investigations",
    image: post.featuredImage?.url,
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://lauthinvestigations.com" },
    { name: "Blog", url: "https://lauthinvestigations.com/blog" },
    { name: post.title, url: `https://lauthinvestigations.com/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-dark to-navy-700 py-12 md:py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            {post.categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {post.categories.map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.slug}`}
                    className="text-gold text-xs font-bold uppercase tracking-widest hover:underline"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />
            <div className="flex items-center justify-center gap-4 text-navy-300 text-sm">
              {post.author && (
                <span>By {post.author.name}</span>
              )}
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="bg-dark py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              {post.featuredImage && (
                <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
              <div
                className="prose prose-invert prose-lg max-w-none prose-lauth"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            <aside className="space-y-8">
              {/* Author card */}
              {post.author && (
                <div className="bg-navy-500 rounded-xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    {post.author.avatar && (
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                    )}
                    <div>
                      <p className="text-white font-bold">{post.author.name}</p>
                      <p className="text-navy-300 text-sm">Author</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact card */}
              <div className="bg-navy-500 rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">
                  Need Help?
                </h3>
                <p className="text-navy-200 text-sm mb-4">
                  Speak directly with a licensed investigator about your case.
                </p>
                <Button href="/contact" size="sm" className="w-full">
                  Contact Us
                </Button>
                <p className="text-center text-navy-300 text-sm mt-3">
                  or call{" "}
                  <a href="tel:3179511100" className="text-gold hover:underline">
                    (317) 951-1100
                  </a>
                </p>
              </div>

              {/* Categories */}
              {post.categories.length > 0 && (
                <div className="bg-navy-500 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/category/${cat.slug}`}
                        className="bg-navy-400 text-navy-200 text-sm px-3 py-1 rounded-full hover:bg-gold hover:text-dark transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="bg-navy-500 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag.id}
                        href={`/tag/${tag.slug}`}
                        className="bg-navy-400 text-navy-200 text-sm px-3 py-1 rounded-full hover:bg-gold hover:text-dark transition-colors"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-navy-500 py-12">
          <Container>
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/${related.slug}`}
                  className="bg-navy-600 rounded-xl overflow-hidden border border-navy-400 hover:border-gold/30 transition-all group"
                >
                  {related.featuredImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={related.featuredImage.url}
                        alt={related.featuredImage.alt || related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <h3
                      className="text-white font-bold group-hover:text-gold transition-colors line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: related.title }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
