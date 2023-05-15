import React from "react";
import GigsClient from "./GigsClient";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import { getGigs, ParamsProps } from "../action/getGigs";

interface SearchParamsProps {
  searchParams: ParamsProps;
}

export const dynamic = "force-dynamic";

const Gigs = async ({ searchParams }: SearchParamsProps) => {
  const gigs = await getGigs(searchParams);

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
