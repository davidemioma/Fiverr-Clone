import React from "react";
import Container from "../components/Container";
import SuccessClient from "./SuccessClient";

interface Params {
  payment_intent: string;
}

const Success = ({ params }: { params: Params }) => {
  return (
    <Container>
      <SuccessClient payment_intent={params.payment_intent} />
    </Container>
  );
};

export default Success;
