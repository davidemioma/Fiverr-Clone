import prisma from "../../lib/prismaDb";

export interface ParamsProps {
  min?: number;
  max?: number;
  sort?: string;
  search?: string;
}

export const getGigs = async (params: ParamsProps) => {
  try {
    const { min, max, sort, search } = params;

    let query: any = {};

    if (min && max) {
      if (min > 0 && max > 0) {
        query.price = {
          gte: +min,
          lte: +max,
        };
      }
    }

    if (search) {
      query.title = search;
    }

    let orderByQuery: any = {};

    if (sort === "createdAt") {
      orderByQuery.createdAt = "desc";
    }

    if (sort === "sales") {
      orderByQuery.salesNo = "desc";
    }

    const gigs = await prisma.gig.findMany({
      where: query,
      orderBy: orderByQuery,
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
