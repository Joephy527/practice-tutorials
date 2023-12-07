import prisma from "@/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDb();

    const users = await prisma.user.findMany({
      include: { tweets: true, _count: true },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
