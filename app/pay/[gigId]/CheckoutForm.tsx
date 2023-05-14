"use client";

import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const CheckoutForm = () => {
  const stripe = useStripe();

  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent?.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const url = "https://fiverr-clone-sepia.vercel.app";

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${url ? url : "http://localhost:3002"}/success`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message || "Something went wrong!");
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" className="space-y-3" onSubmit={handleSubmit}>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e: any) => setEmail(e?.target?.value)}
      />
      <PaymentElement id="payment-element" options={{ layout: "tabs" }} />

      <button
        className="bg-[#1dbf73] flex items-center justify-center w-full max-w-[200px] text-white font-bold py-1.5 px-4 rounded disabled:cursor-not-allowed"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        {isLoading ? (
          <div className="w-5 h-5 rounded-full border-t border-l border-white animate-spin"></div>
        ) : (
          "Pay now"
        )}
      </button>

      {message && (
        <div className="text-red-500 text-sm font-light">{message}</div>
      )}
    </form>
  );
};

export default CheckoutForm;
