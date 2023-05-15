import prisma from "../../lib/prismaDb";

interface Params {
  id?: string;
}

export const getMessages = async (params: Params) => {
  try {
    const { id } = params;

    const messages = await prisma.message.findMany({
      where: {
        conversationId: id,
      },
      orderBy: {
        createdAt: "asc",
      },
      include: {
        user: true,
      },
    });

    if (!messages) return [];

    const safeMessages = messages.map((message) => ({
      ...message,
      createdAt: message.createdAt.toISOString(),
      user: {
        ...message.user,
        createdAt: message.user.createdAt.toISOString(),
        updatedAt: message.user.updatedAt.toISOString(),
      },
    }));

    return safeMessages;
  } catch (err: any) {
    throw new Error(err);
  }
};
