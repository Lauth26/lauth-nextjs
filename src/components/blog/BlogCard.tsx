import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/types";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/${post.slug}`}
      className="bg-navy-500 rounded-xl overflow-hidden border border-navy-400 hover:border-gold/30 transition-all group"
    >
      {post.featuredImage && (
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        {post.categories.length > 0 && (
          <p className="text-gold text-xs font-bold uppercase tracking-widest mb-2">
            {post.categories[0].name}
          </p>
        )}
        <h3
          className="text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.title }}
        />
        <div
          className="text-navy-200 text-sm line-clamp-3 mb-4"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />
        <time className="text-navy-300 text-xs">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </div>
    </Link>
  );
}
