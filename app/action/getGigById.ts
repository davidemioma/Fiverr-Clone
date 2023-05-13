import prisma from "../../lib/prismaDb";

interface Params {
  gigId?: string;
}

export const getGigById = async (params: Params) => {
  try {
    const { gigId } = params;

    const gig = await prisma.gig.findUnique({
      where: {
        id: gigId,
      },
      include: {
        user: true,
      },
    });

    if (!gig) return null;

    return {
      ...gig,
      createdAt: gig?.createdAt.toISOString(),
      user: {
        ...gig.user,
        createdAt: gig.user.createdAt.toISOString(),
        updatedAt: gig.user.updatedAt.toISOString(),
      },
    };
  } catch (err: any) {
    throw new Error(err);
  }
};
