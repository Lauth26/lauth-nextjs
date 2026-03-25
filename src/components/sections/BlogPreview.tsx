import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/wordpress";
import type { BlogPost } from "@/lib/types";

export async function BlogPreview() {
  let posts: BlogPost[] = [];
  try {
    const result = await getPosts(1, 3);
    posts = result.items;
  } catch {
    // WP API unavailable — show empty state
  }

  if (!posts.length) {
    return null;
  }

  return (
    <section className="bg-dark py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Blog"
          title="Investigative Insights & News"
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-navy-500 rounded-xl overflow-hidden group hover:shadow-card-hover transition-all duration-300"
            >
              {post.featuredImage && (
                <Link href={`/${post.slug}`} className="block aspect-video relative overflow-hidden">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              )}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  <Link
                    href={`/${post.slug}`}
                    className="hover:text-gold transition-colors"
                  >
                    {post.title}
                  </Link>
                </h3>
                <div
                  className="text-navy-300 text-sm mb-4 line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                />
                <div className="flex items-center justify-between text-sm">
                  <Link
                    href={`/${post.slug}`}
                    className="text-gold hover:text-gold-300 font-medium transition-colors"
                  >
                    Read More &raquo;
                  </Link>
                  <time className="text-navy-400" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/blog">Explore Our Blog</Button>
        </div>
      </div>
    </section>
  );
}
