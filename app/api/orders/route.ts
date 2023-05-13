import prisma from "../../../lib/prismaDb";
import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
  const body = await request.json();

  const { payment_intent } = body;

  const order = await prisma.order.findMany({
    where: {
      payment_intent,
    },
  });

  if (!order) return NextResponse.error();

  await prisma.order.updateMany({
    where: {
      id: order[0].id,
    },
    data: {
      isCompleted: true,
    },
  });

  return NextResponse.json("New user created!");
}
