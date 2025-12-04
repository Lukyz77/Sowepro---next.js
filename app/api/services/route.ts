import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "servicesSection"][0]{
      titleBefore,
      titleMiddle,
      titleAfter,
      subtitle,
      services[]{
        title,
        text,
        buttonText,
        buttonHref
      }
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
