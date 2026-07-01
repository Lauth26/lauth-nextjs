import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { slug, type } = body;

    // Revalidate the specific path
    if (type === "post" && slug) {
      revalidatePath(`/${slug}`);
      revalidatePath("/blog");
      revalidatePath("/");
    } else if (type === "page" && slug) {
      revalidatePath(`/${slug}`);
    } else {
      // Revalidate everything
      revalidatePath("/", "layout");
    }

    return NextResponse.json({ revalidated: true, slug, type });
  } catch {
    return NextResponse.json(
      { message: "Error revalidating" },
      { status: 500 }
    );
  }
}
