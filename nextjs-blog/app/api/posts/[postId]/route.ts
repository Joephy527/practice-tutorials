import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { postId: string } },
) {
  try {
    await db.post.delete({
      where: {
        id: params.postId,
      },
    });

    return new Response(null, { status: 204 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not delete post" },
      { status: 500 },
    );
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { postId: string } },
) {
  try {
    const body = await req.json();

    await db.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title: body.title,
        content: body.content,
        tagId: body.tagId,
      },
    });

    return NextResponse.json({ message: "update successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not update post" },
      { status: 500 },
    );
  }
}

export async function GET(
  req: Request,
  { params }: { params: { postId: string } },
) {
  try {
    const post = await db.post.findFirst({
      where: {
        id: params.postId,
      },
      include: {
        tag: true,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "could not fetch post" },
      { status: 500 },
    );
  }
}
