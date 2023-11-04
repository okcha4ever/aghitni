import { NextRequest, NextResponse } from "next/server";
import { db } from "@/server/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId: string = searchParams.get("userId") || "";
  const role = await db.role.findFirst({
    where: {
      userId: userId!,
    },
  });

  const returnedData = {
    userId: role?.userId || userId,
    role: role?.role || null,
  };

  return NextResponse.json(returnedData, { status: 200 });
}
