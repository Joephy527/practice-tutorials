import prisma from "@/prisma";
import { connectToDb } from "@/utils";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (req: Request) => {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ err: "Missing Data" }, { status: 422 });
    }

    await connectToDb();
    const existingUser = await prisma.user.findFirst({ where: { email } });
    if (!existingUser) {
      return NextResponse.json(
        { message: "user not registered" },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return NextResponse.json({ err: "Incorrect password" }, { status: 403 });
    }

    return NextResponse.json({ message: "Logged in" }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ err: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
