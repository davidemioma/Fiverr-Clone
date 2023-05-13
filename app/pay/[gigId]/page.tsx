import React from "react";
import Container from "@/app/components/Container";
import PayClient from "./PayClient";
import EmptyState from "@/app/components/EmptyState";
import { getGigById } from "@/app/action/getGigById";
import { getCurrentUser } from "@/app/action/getCurrentUser";

interface Params {
  gigId?: string;
}

const Pay = async ({ params }: { params: Params }) => {
  const currentUser = await getCurrentUser();

  const gig = await getGigById(params);

  if (!gig || !currentUser) {
    return (
      <Container>
        <EmptyState
          title="Gig not found"
          subtitle="Try refreshing this page"
          showReset
          route="/gigs"
        />
      </Container>
    );
  }

  return (
    <Container>
      <PayClient gig={gig} currentUser={currentUser} />
    </Container>
  );
};

export default Pay;
