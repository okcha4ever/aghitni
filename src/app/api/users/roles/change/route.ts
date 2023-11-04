import { db } from "@/server/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userId, newRole } = await req.json();
  try {
    const changedRole = await db.role.create({
      data: {
        userId,
        role: newRole,
      },
    });
    return NextResponse.json(changedRole, { status: 200 });
  } catch (err) {
    return NextResponse.json({ userId, newRole, status: 500 });
  }
}
