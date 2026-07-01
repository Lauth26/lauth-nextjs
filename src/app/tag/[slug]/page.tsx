import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";
import { getTagBySlug, getPostsByTag } from "@/lib/wordpress";
import { defaultMetadata } from "@/lib/metadata";
import { decodeHTMLEntities } from "@/lib/wordpress";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = await getTagBySlug(slug);
  if (!tag) return {};

  const name = decodeHTMLEntities(tag.name);
  return defaultMetadata(
    name,
    `Browse articles tagged "${name}" from Lauth Investigations International.`,
    `/tag/${slug}`
  );
}

export const revalidate = 3600;

export default async function TagPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { page: pageParam } = await searchParams;

  const tag = await getTagBySlug(slug);
  if (!tag) notFound();

  const currentPage = pageParam ? parseInt(pageParam, 10) : 1;
  const { items: posts, totalPages } = await getPostsByTag(tag.id, currentPage);
  const tagName = decodeHTMLEntities(tag.name);

  return (
    <>
      <section className="bg-gradient-to-b from-dark to-navy-700 py-16">
        <Container>
          <SectionHeading
            eyebrow="Tag"
            title={tagName}
          />
        </Container>
      </section>

      <section className="bg-dark py-16">
        <Container>
          {posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                basePath={`/tag/${slug}`}
              />
            </>
          ) : (
            <p className="text-navy-200 text-center">
              No articles found with this tag.
            </p>
          )}
        </Container>
      </section>
    </>
  );
}
