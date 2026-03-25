import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";
import { getPosts } from "@/lib/wordpress";
import { defaultMetadata } from "@/lib/metadata";

export const metadata: Metadata = defaultMetadata(
  "Blog",
  "Expert insights on private investigation, corporate security, fraud detection, and more from Lauth Investigations International.",
  "/blog"
);

export default async function BlogPage() {
  const { items: blogPosts, totalPages } = await getPosts(1);

  return (
    <>
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Blog"
            title="Insights & Expertise"
          />
          <p className="text-navy-200 text-center mt-4 max-w-2xl mx-auto">
            Stay informed with expert articles on private investigation, corporate
            security, fraud prevention, and industry best practices.
          </p>
        </Container>
      </section>

      <section className="bg-dark py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <Pagination currentPage={1} totalPages={totalPages} />
        </Container>
      </section>
    </>
  );
}
