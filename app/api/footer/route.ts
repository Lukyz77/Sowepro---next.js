import { client } from "@/lib/sanity";
import { NextResponse } from "next/server";

export async function GET() {
  const query = `
    *[_type == "footerSection"][0]{
      brand,
      menuItems[]{
        label,
        href
      },
      socials{
        facebook,
        instagram,
        linkedin
      },
      copyright,
      ico
    }
  `;

  const data = await client.fetch(query);
  return NextResponse.json(data);
}
