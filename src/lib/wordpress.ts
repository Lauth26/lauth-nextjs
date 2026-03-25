import { WP_CONFIG } from "./constants";
import type {
  WPPost,
  WPPage,
  WPCategory,
  WPTag,
  WPMedia,
  BlogPost,
  PaginatedResponse,
} from "./types";

const API_BASE = WP_CONFIG.apiBase;

async function fetchAPI<T>(
  endpoint: string,
  params: Record<string, string | number> = {}
): Promise<{ data: T; totalPages: number; total: number }> {
  const url = new URL(`${API_BASE}/${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, String(value));
  });

  const res = await fetch(url.toString(), {
    next: { revalidate: WP_CONFIG.revalidateSeconds },
  });

  if (!res.ok) {
    throw new Error(`WP API error: ${res.status} ${res.statusText} for ${url}`);
  }

  const data = (await res.json()) as T;
  const totalPages = parseInt(res.headers.get("X-WP-TotalPages") || "1", 10);
  const total = parseInt(res.headers.get("X-WP-Total") || "0", 10);

  return { data, totalPages, total };
}

// --- Posts ---

export async function getPosts(
  page = 1,
  perPage: number = WP_CONFIG.postsPerPage
): Promise<PaginatedResponse<BlogPost>> {
  const { data, totalPages, total } = await fetchAPI<WPPost[]>("posts", {
    page,
    per_page: perPage,
    _embed: "author,wp:featuredmedia,wp:term",
    orderby: "date",
    order: "desc",
  });

  return {
    items: data.map(transformPost),
    total,
    totalPages,
    currentPage: page,
  };
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data } = await fetchAPI<WPPost[]>("posts", {
    slug,
    _embed: "author,wp:featuredmedia,wp:term",
  });

  if (!data.length) return null;
  return transformPost(data[0]);
}

export async function getPostSlugs(): Promise<string[]> {
  const slugs: string[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { data, totalPages } = await fetchAPI<WPPost[]>("posts", {
      page,
      per_page: 100,
      _fields: "slug",
    });

    slugs.push(...data.map((p) => p.slug));
    hasMore = page < totalPages;
    page++;
  }

  return slugs;
}

export async function getTopPostSlugs(count = WP_CONFIG.topPostsCount): Promise<string[]> {
  const { data } = await fetchAPI<WPPost[]>("posts", {
    per_page: count,
    _fields: "slug",
    orderby: "date",
    order: "desc",
  });

  return data.map((p) => p.slug);
}

export async function getPostsByCategory(
  categoryId: number,
  page = 1
): Promise<PaginatedResponse<BlogPost>> {
  const { data, totalPages, total } = await fetchAPI<WPPost[]>("posts", {
    categories: categoryId,
    page,
    per_page: WP_CONFIG.postsPerPage,
    _embed: "author,wp:featuredmedia,wp:term",
  });

  return {
    items: data.map(transformPost),
    total,
    totalPages,
    currentPage: page,
  };
}

export async function getPostsByTag(
  tagId: number,
  page = 1
): Promise<PaginatedResponse<BlogPost>> {
  const { data, totalPages, total } = await fetchAPI<WPPost[]>("posts", {
    tags: tagId,
    page,
    per_page: WP_CONFIG.postsPerPage,
    _embed: "author,wp:featuredmedia,wp:term",
  });

  return {
    items: data.map(transformPost),
    total,
    totalPages,
    currentPage: page,
  };
}

export async function getRelatedPosts(
  postId: number,
  categoryIds: number[],
  limit = 3
): Promise<BlogPost[]> {
  if (!categoryIds.length) return [];

  const { data } = await fetchAPI<WPPost[]>("posts", {
    categories: categoryIds[0],
    exclude: postId,
    per_page: limit,
    _embed: "author,wp:featuredmedia,wp:term",
  });

  return data.map(transformPost);
}

// --- Pages ---

export async function getPage(id: number): Promise<WPPage | null> {
  try {
    const res = await fetch(`${API_BASE}/pages/${id}?_embed`, {
      next: { revalidate: WP_CONFIG.revalidateSeconds },
    });
    if (!res.ok) return null;
    return (await res.json()) as WPPage;
  } catch {
    return null;
  }
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const { data } = await fetchAPI<WPPage[]>("pages", {
    slug,
    _embed: 1,
  });

  return data.length ? data[0] : null;
}

// --- Categories ---

export async function getCategories(): Promise<WPCategory[]> {
  const categories: WPCategory[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { data, totalPages } = await fetchAPI<WPCategory[]>("categories", {
      page,
      per_page: 100,
      hide_empty: 1,
    });

    categories.push(...data);
    hasMore = page < totalPages;
    page++;
  }

  return categories;
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const { data } = await fetchAPI<WPCategory[]>("categories", { slug });
  return data.length ? data[0] : null;
}

// --- Tags ---

export async function getTags(): Promise<WPTag[]> {
  const { data } = await fetchAPI<WPTag[]>("tags", {
    per_page: 100,
    hide_empty: 1,
  });
  return data;
}

export async function getTagBySlug(slug: string): Promise<WPTag | null> {
  const { data } = await fetchAPI<WPTag[]>("tags", { slug });
  return data.length ? data[0] : null;
}

// --- Media ---

export async function getMedia(id: number): Promise<WPMedia | null> {
  try {
    const res = await fetch(`${API_BASE}/media/${id}`, {
      next: { revalidate: WP_CONFIG.revalidateSeconds },
    });
    if (!res.ok) return null;
    return (await res.json()) as WPMedia;
  } catch {
    return null;
  }
}

// --- Sitemap ---

export async function getAllPostsForSitemap(): Promise<
  Array<{ slug: string; modified: string }>
> {
  const posts: Array<{ slug: string; modified: string }> = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const { data, totalPages } = await fetchAPI<WPPost[]>("posts", {
      page,
      per_page: 100,
      _fields: "slug,modified",
    });

    posts.push(...data.map((p) => ({ slug: p.slug, modified: p.modified })));
    hasMore = page < totalPages;
    page++;
  }

  return posts;
}

// --- Transform helpers ---

function transformPost(post: WPPost): BlogPost {
  const embedded = post._embedded;
  const author = embedded?.author?.[0];
  const media = embedded?.["wp:featuredmedia"]?.[0];
  const terms = embedded?.["wp:term"] || [];

  const categories = (terms[0] || [])
    .filter((t) => t.taxonomy === "category")
    .map((t) => ({ id: t.id, name: t.name, slug: t.slug }));

  const tags = (terms[1] || [])
    .filter((t) => t.taxonomy === "post_tag")
    .map((t) => ({ id: t.id, name: t.name, slug: t.slug }));

  return {
    id: post.id,
    slug: post.slug,
    title: decodeHTMLEntities(post.title.rendered),
    excerpt: post.excerpt.rendered,
    content: post.content.rendered,
    date: post.date,
    modified: post.modified,
    author: {
      name: author?.name || "Lauth Investigations",
      avatar: author?.avatar_urls?.["96"] || "",
    },
    featuredImage: media
      ? {
          url: media.source_url,
          alt: media.alt_text || decodeHTMLEntities(post.title.rendered),
          width: media.media_details?.width || 1200,
          height: media.media_details?.height || 630,
        }
      : null,
    categories,
    tags,
    yoast: post.yoast_head_json,
  };
}

function decodeHTMLEntities(text: string): string {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "--")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}
