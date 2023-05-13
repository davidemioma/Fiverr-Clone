import React from "react";
import GigClient from "./GigClient";
import Container from "@/app/components/Container";
import EmptyState from "@/app/components/EmptyState";
import { getCurrentUser } from "@/app/action/getCurrentUser";
import { getGigById } from "@/app/action/getGigById";
import { getReviewsByGigId } from "@/app/action/getReviewsByGigId";

interface Params {
  gigId?: string;
}

const Gig = async ({ params }: { params: Params }) => {
  const currentUser = await getCurrentUser();

  const gig = await getGigById(params);

  const reviews = await getReviewsByGigId(params);

  if (!gig) {
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
      <GigClient currentUser={currentUser} gig={gig} reviews={reviews} />
    </Container>
  );
};

export default Gig;
