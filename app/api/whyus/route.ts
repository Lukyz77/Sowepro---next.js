import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "whyUsSection"][0]{
      titleBefore,
      titleMiddle,
      titleAfter,
      subtitle,
      reasons[]{
        title,
        text
      }
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data);
}
