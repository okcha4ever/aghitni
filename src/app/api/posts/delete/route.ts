import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id: string = searchParams.get("id") || "";
  try {
    await db.post.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(`Deleted ${id}`, { status: 200 });
  } catch (err) {
    return NextResponse.json("Something went wrong", { status: 500 });
  }
}
