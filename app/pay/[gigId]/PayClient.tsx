"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { GigProps, UserProps } from "../../../types";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

interface Props {
  gig: GigProps;
  currentUser: UserProps;
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const PayClient = ({ gig, currentUser }: Props) => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    axios
      .post("/api/stripe", {
        ...gig,
        currentUserId: currentUser.id,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="py-10">
      {clientSecret && (
        <Elements
          options={{
            clientSecret,
            appearance: {
              theme: "stripe",
            },
          }}
          stripe={stripePromise}
        >
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PayClient;
