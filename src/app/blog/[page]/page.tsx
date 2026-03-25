import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";
import { getPosts } from "@/lib/wordpress";
import { defaultMetadata } from "@/lib/metadata";

interface Props {
  params: Promise<{ page: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const pageNum = parseInt(page, 10);
  return defaultMetadata(
    `Blog - Page ${pageNum}`,
    `Expert insights on private investigation and corporate security from Lauth Investigations. Page ${pageNum}.`,
    `/blog/${pageNum}`
  );
}

export default async function BlogPaginatedPage({ params }: Props) {
  const { page } = await params;
  const pageNum = parseInt(page, 10);

  if (isNaN(pageNum) || pageNum < 1) notFound();

  const { items: blogPosts, totalPages } = await getPosts(pageNum);

  if (pageNum > totalPages) notFound();

  return (
    <>
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16">
        <Container>
          <SectionHeading
            eyebrow="Our Blog"
            title="Insights & Expertise"
          />
          <p className="text-navy-200 text-center mt-4 max-w-2xl mx-auto">
            Page {pageNum} of {totalPages}
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
          <Pagination currentPage={pageNum} totalPages={totalPages} />
        </Container>
      </section>
    </>
  );
}
