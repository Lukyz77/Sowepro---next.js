import { NextResponse } from "next/server";
import { getPageData } from "../../../lib/GetPageData";

export async function GET() {
  const data = await getPageData();
  return NextResponse.json(data);
}
