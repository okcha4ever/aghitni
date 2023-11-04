import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text, location }: PostType = await req.json();
  try {
    const created = await db.post.create({
      data: {
        text,
        location,
        status: "none",
      },
    });
    return NextResponse.json(created, { status: 200 });
  } catch (err) {
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
