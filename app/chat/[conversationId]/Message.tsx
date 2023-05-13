"use client";

import React from "react";
import Avatar from "@/app/components/Avatar";
import { MessageProps, UserProps } from "@/types";

interface Props {
  message: MessageProps;
  currentUser: UserProps | null;
}

const Message = ({ currentUser, message }: Props) => {
  return (
    <div
      className={`flex items-start space-x-2 ${
        message.senderId === currentUser?.id && "justify-end"
      }`}
    >
      <Avatar imgSrc={message.user.image!} />

      <div
        className={`${
          message.senderId === currentUser?.id
            ? "rounded-tr-none bg-gray-100"
            : "rounded-tl-none bg-[#1775ee] text-white"
        } overflow-hidden rounded-lg px-4 py-2`}
      >
        <p className="text-xs max-w-[200px] sm:max-w-[300px] break-all">
          {message.message}
        </p>
      </div>
    </div>
  );
};

export default Message;
