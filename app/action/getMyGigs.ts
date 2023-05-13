import prisma from "../../lib/prismaDb";
import { getCurrentUser } from "./getCurrentUser";

export const getMyGigs = async () => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return [];

    const gigs = await prisma.gig.findMany({
      where: {
        userId: currentUser?.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    const safeGigs = gigs.map((gig) => ({
      ...gig,
      createdAt: gig.createdAt.toISOString(),
      user: {
        ...gig.user,
        createdAt: gig.user.createdAt.toISOString(),
        updatedAt: gig.user.updatedAt.toISOString(),
      },
    }));

    return safeGigs;
  } catch (err: any) {
    throw new Error(err);
  }
};
