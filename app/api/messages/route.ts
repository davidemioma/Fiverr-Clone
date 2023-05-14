import prisma from "../../../lib/prismaDb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/action/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const { message, conversationId } = body;

  await prisma.message.create({
    data: {
      message,
      conversationId,
      senderId: currentUser.id,
    },
  });

  await prisma.conversation.update({
    where: {
      id: conversationId,
    },
    data: {
      lastMessage: message,
    },
  });

  return NextResponse.json("Message sent!");
}
