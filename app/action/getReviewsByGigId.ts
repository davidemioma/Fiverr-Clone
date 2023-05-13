import prisma from "../../lib/prismaDb";

interface Params {
  gigId?: string;
}

export const getReviewsByGigId = async (params: Params) => {
  try {
    const { gigId } = params;

    const reviews = await prisma.review.findMany({
      where: {
        gigId,
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });

    const safeReviews = reviews.map((review) => ({
      ...review,
      createdAt: review.createdAt.toISOString(),
      user: {
        ...review.user,
        createdAt: review.user.createdAt.toISOString(),
        updatedAt: review.user.updatedAt.toISOString(),
      },
    }));

    return safeReviews;
  } catch (err: any) {
    throw new Error(err);
  }
};
