import React from "react";
import Container from "../components/Container";
import EmptyState from "../components/EmptyState";
import MessagesClient from "./MessagesClient";
import { getAllConversations } from "../action/getAllConversations";
import { getCurrentUser } from "../action/getCurrentUser";

const Messages = async () => {
  const currentUser = await getCurrentUser();

  const conversations = await getAllConversations();

  if (conversations.length === 0) {
    return (
      <Container>
        <EmptyState
          title="No messages available"
          subtitle="Try again later!"
          showReset
          route="/gigs"
        />
      </Container>
    );
  }

  return (
    <Container>
      <MessagesClient currentUser={currentUser} conversations={conversations} />
    </Container>
  );
};

export default Messages;
