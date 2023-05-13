import React from "react";
import { getMyGigs } from "../action/getMyGigs";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import MyGigClient from "./MyGigClient";

const MyGigs = async () => {
  const myGigs = await getMyGigs();

  if (myGigs.length === 0) {
    return (
      <Container>
        <EmptyState
          title="No gigs available"
          subtitle="Try again later or if you are a seller add a gig."
          showReset
          route="/gigs"
        />
      </Container>
    );
  }

  return (
    <Container>
      <MyGigClient gigs={myGigs} />
    </Container>
  );
};

export default MyGigs;
