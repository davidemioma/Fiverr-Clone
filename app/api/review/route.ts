import prisma from "../../../lib/prismaDb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/action/getCurrentUser";

export async function POST(request: Request) {
  const body = await request.json();

  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { rating, review, gigId } = body;

  await prisma.review.create({
    data: {
      review,
      rating,
      userId: currentUser.id,
      gigId,
    },
  });

  return NextResponse.json("New review created!");
}
