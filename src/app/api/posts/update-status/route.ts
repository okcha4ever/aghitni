import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const postId: string = searchParams.get("postId") || "";
    const { newStatus } = await req.json();
    const changed = await db.post.update({
      where: {
        id: postId,
      },
      data: {
        status: newStatus,
      },
    });
    return NextResponse.json(changed, { status: 200 });
  } catch (err) {
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
