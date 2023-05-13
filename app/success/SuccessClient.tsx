"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

interface Props {
  payment_intent: string;
}

const SuccessClient = ({ payment_intent }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const makeRequest = async () => {
      try {
        await axios.patch("/api/orders", { payment_intent });

        setTimeout(() => {
          router.push("/orders");
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    };

    makeRequest();
  }, []);

  return (
    <div className="py-10">
      <p className="text-lg font-bold">
        Payment successful. You are being redirected to the orders page. Please
        do not close the page!
      </p>
    </div>
  );
};

export default SuccessClient;
