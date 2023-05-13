import prisma from "../../lib/prismaDb";
import { getCurrentUser } from "./getCurrentUser";

export const getOrders = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    let query: any = {};

    if (!currentUser.isSeller) {
      query.buyerId = currentUser.id;
    }

    if (currentUser.isSeller) {
      query.sellerId = currentUser.id;
    }

    const orders = await prisma.order.findMany({
      where: query,
      orderBy: {
        createdAt: "desc",
      },
    });

    const safeOrders = orders.map((order) => ({
      ...order,
      createdAt: order.createdAt.toISOString(),
    }));

    return safeOrders;
  } catch (err: any) {
    throw new Error(err);
  }
};
