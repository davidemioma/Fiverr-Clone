import React from "react";
import Container from "@/app/components/Container";
import ChatClient from "./ChatClient";
import EmptyState from "@/app/components/EmptyState";
import { getMessages } from "@/app/action/getMessages";
import { getConversation } from "@/app/action/getConversation";
import { getCurrentUser } from "@/app/action/getCurrentUser";

interface Params {
  conversationId: string;
}

const Chat = async ({ params }: { params: Params }) => {
  const currentUser = await getCurrentUser();

  const conversation = await getConversation(params);

  const messages = await getMessages({ id: conversation?.id });

  if (!conversation) {
    return (
      <Container>
        <EmptyState
          title="Conversation not found"
          subtitle="Try refreshing this page"
          showReset
          route="/orders"
        />
      </Container>
    );
  }

  return (
    <Container>
      <ChatClient
        currentUser={currentUser}
        conversation={conversation}
        messages={messages}
      />
    </Container>
  );
};

export default Chat;
