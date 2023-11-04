import { NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET() {
  try {
    const posts = await db.post.findMany({});
    return NextResponse.json(posts, { status: 200 });
  } catch (err) {
    return NextResponse.json("something went wrong", { status: 500 });
  }
}
