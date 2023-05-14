import React from "react";
import GigsClient from "./GigsClient";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import { getGigs } from "../action/getGigs";

// interface SearchParamsProps {
//   searchParams?: ParamsProps;
// }

//{ searchParams }: SearchParamsProps

const Gigs = async () => {
  const gigs = await getGigs();

  if (gigs.length === 0) {
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
      <GigsClient gigs={gigs} />
    </Container>
  );
};

export default Gigs;
