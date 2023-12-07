import prisma from "@/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connectToDb();

    const tweets = await prisma.tweets.findMany();

    return NextResponse.json({ tweets }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (req: Request) => {
  try {
    const { tweet, userId } = await req.json();
    if (!tweet || !userId) {
      return NextResponse.json({ err: "Missing Data" }, { status: 422 });
    }

    await connectToDb();
    const user = await prisma.user.findFirst({ where: { id: userId } });
    if (!user) {
      return NextResponse.json({ message: "Invalid User" }, { status: 401 });
    }

    const newTweet = await prisma.tweets.create({ data: { tweet, userId } });
    return NextResponse.json({ tweet: newTweet }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
