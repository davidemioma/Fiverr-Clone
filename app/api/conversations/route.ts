import prisma from "../../../lib/prismaDb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/action/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const body = await request.json();

  const { sellerId, buyerId, to } = body;

  const conversations = await prisma.conversation.findMany({
    where: {
      sellerId,
      buyerId,
    },
  });

  if (conversations && conversations.length > 0) {
    return NextResponse.json(conversations[0]);
  }

  const newConversation = await prisma.conversation.create({
    data: {
      conversationId: currentUser.isSeller
        ? currentUser.id + to
        : to + currentUser.id,
      sellerId,
      buyerId,
    },
  });

  return NextResponse.json(newConversation);
}
