import { NextResponse } from "next/server";
import { client } from "@/lib/sanity";
import { heroQuery } from "@/lib/queries";

export async function GET() {
  const data = await client.fetch(heroQuery);
  return NextResponse.json(data, {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
