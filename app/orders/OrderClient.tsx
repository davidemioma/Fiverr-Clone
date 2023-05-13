"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { OrderProps, UserProps } from "../../types";

interface Props {
  orders: OrderProps[];
  currentUser: UserProps | null;
}

const OrderClient = ({ orders, currentUser }: Props) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const crateConversationHandler = async (order: OrderProps) => {
    setLoading(true);

    axios
      .post("/api/conversations", {
        to: currentUser?.isSeller ? order.buyerId : order.sellerId,
        sellerId: order.sellerId,
        buyerId: order.buyerId,
      })
      .then((res) => {
        toast.success("Converstion created");

        router.push(`/chat/${res.data.conversationId}`);
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-10">
      <h1 className="text-xl font-bold">Orders</h1>

      <table className="w-full">
        <thead>
          <tr className="text-left text-xs sm:text-sm h-12">
            <th>Image</th>

            <th>Title</th>

            <th>Price</th>

            <th>Contact</th>
          </tr>
        </thead>

        <tbody className="text-xs md:text-sm">
          {orders.map((order, i) => (
            <tr
              key={order.id}
              className={`h-12 ${i % 2 == 0 && "bg-[#1dbf730f]"}`}
            >
              <td>
                <div className="relative w-9 sm:w-12 h-5">
                  <Image
                    className="object-cover"
                    fill
                    src={order.image}
                    alt=""
                  />
                </div>
              </td>

              <td>{order.title}</td>

              <td>{order.price}</td>

              <td>
                <button
                  className="disabled:cursor-not-allowed"
                  onClick={() => crateConversationHandler(order)}
                  disabled={loading}
                >
                  <Image
                    className="object-cover"
                    width={16}
                    height={16}
                    src="/assets/message.png"
                    alt=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderClient;
