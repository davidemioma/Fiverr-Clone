import prisma from "../../lib/prismaDb";

interface Params {
  conversationId?: string;
}

export const getConversation = async (params: Params) => {
  try {
    const { conversationId } = params;

    const conversations = await prisma.conversation.findMany({
      where: {
        conversationId,
      },
    });

    const safeConversations = conversations.map((conversation) => ({
      ...conversation,
      createdAt: conversation.createdAt.toISOString(),
      updatedAt: conversation.updatedAt.toISOString(),
    }));

    return safeConversations[0];
  } catch (err: any) {
    throw new Error(err);
  }
};
