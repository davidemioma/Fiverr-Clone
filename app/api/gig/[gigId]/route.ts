import prisma from "@/lib/prismaDb";
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/app/action/getCurrentUser";

interface Iparams {
  gigId: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: Iparams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return NextResponse.error();

  const { gigId } = params;

  if (!gigId || typeof gigId !== "string") {
    throw new Error("Invalid ID");
  }

  await prisma.gig.deleteMany({
    where: {
      id: gigId,
      userId: currentUser.id,
    },
  });

  return new Response("Property removed!");
}
