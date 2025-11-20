import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "aboutSection"][0]{
      titleBefore,
      titleMiddle,
      titleAfter,
      text1,
      text2,
      text3,
      buttonText,
      buttonHref
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data);
}
