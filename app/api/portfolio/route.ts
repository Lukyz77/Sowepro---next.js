import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "portfolioSection"][0]{
      titleBefore,
      titleMiddle,
      titleAfter,
      subtitle
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data);
}
