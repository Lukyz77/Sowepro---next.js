import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "navigation"][0]{
      items,
      ctaText,
      ctaHref
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
