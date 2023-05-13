import prisma from "../../lib/prismaDb";
import { getCurrentUser } from "./getCurrentUser";

export const getAllConversations = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    let query: any = {};

    if (currentUser.isSeller) {
      query.sellerId = currentUser.id;
    }

    if (!currentUser.isSeller) {
      query.buyerId = currentUser.id;
    }

    const conversations = await prisma.conversation.findMany({
      where: query,
      orderBy: {
        updatedAt: "desc",
      },
    });

    const safeConversations = conversations.map((conversation) => ({
      ...conversation,
      createdAt: conversation.createdAt.toISOString(),
      updatedAt: conversation.updatedAt.toISOString(),
    }));

    return safeConversations;
  } catch (err: any) {
    throw new Error(err);
  }
};
