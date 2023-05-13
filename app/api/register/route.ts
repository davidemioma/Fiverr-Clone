import bcrypt from "bcrypt";
import prisma from "../../../lib/prismaDb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { username, email, password, image, country, phoneNo, bio, isSeller } =
    body;

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      username,
      email,
      hashedPassword,
      image,
      country,
      phoneNo,
      bio,
      isSeller,
    },
  });

  return NextResponse.json("New user created!");
}
