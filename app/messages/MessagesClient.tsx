"use client";

import React from "react";
import moment from "moment";
import { useRouter } from "next/navigation";
import { ConversationProps, UserProps } from "../../types";

interface Props {
  currentUser: UserProps | null;
  conversations: ConversationProps[];
}

const MessagesClient = ({ currentUser, conversations }: Props) => {
  const router = useRouter();

  return (
    <div className="py-10">
      <h1 className="text-xl font-bold">Messages</h1>

      <table className="w-full">
        <thead>
          <tr className="text-left text-xs sm:text-sm h-12">
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>

            <th>Last Message</th>

            <th>Date</th>
          </tr>
        </thead>

        <tbody className="text-xs">
          {conversations.map((convo, i) => (
            <tr
              key={convo.id}
              className={`${
                i % 2 === 0 && "bg-[#1dbf730f]"
              } h-12 hover:bg-[#1dbf730f] cursor-pointer`}
              onClick={() => router.push(`/chat/${convo.conversationId}`)}
            >
              <td>
                {currentUser?.isSeller ? convo?.buyerId : convo?.sellerId}
              </td>

              <td>
                {convo?.lastMessage ? (
                  <p>
                    {convo?.lastMessage.substring(0, 80)}
                    {convo?.lastMessage.length > 80 && "..."}
                  </p>
                ) : (
                  <p>....</p>
                )}
              </td>

              <td>{moment(convo?.updatedAt).fromNow()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MessagesClient;
