import React from "react";
import { getOrders } from "../action/getOrders";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import OrderClient from "./OrderClient";
import { getCurrentUser } from "../action/getCurrentUser";

const Orders = async () => {
  const orders = await getOrders();

  const currentUser = await getCurrentUser();

  if (orders.length === 0) {
    return (
      <Container>
        <EmptyState
          title="No orders available"
          subtitle="Try buying a gig"
          showReset
          route="/gigs"
        />
      </Container>
    );
  }

  return (
    <Container>
      <OrderClient orders={orders} currentUser={currentUser} />
    </Container>
  );
};

export default Orders;
