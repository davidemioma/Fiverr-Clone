import prisma from "../../../lib/prismaDb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/action/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const {
    title,
    category,
    description,
    coverImage,
    images,
    shortTitle,
    shortDesc,
    deliveryTime,
    revisionNo,
    price,
    features,
  } = body;

  await prisma.gig.create({
    data: {
      title,
      category,
      description,
      coverImage,
      images,
      shortTitle,
      shortDesc,
      deliveryTime: parseInt(deliveryTime, 10),
      revisionNo: parseInt(revisionNo, 10),
      price: parseInt(price, 10),
      features,
      userId: currentUser.id,
    },
  });

  return NextResponse.json("New gig created!");
}
