import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prismaDb";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KET);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, title, price, coverImage, userId, currentUserId } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: price * 100,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  await prisma.order.create({
    data: {
      gigId: id,
      title,
      price,
      image: coverImage,
      sellerId: userId,
      buyerId: currentUserId,
      payment_intent: paymentIntent.id,
    },
  });

  res.send({ clientSecret: paymentIntent.client_secret });
}
