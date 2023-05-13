"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Message from "./Message";
import Input from "@/app/components/input/Input";
import Button from "@/app/components/Button";
import { ConversationProps, MessageProps, UserProps } from "@/types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  currentUser: UserProps | null;
  conversation: ConversationProps;
  messages: MessageProps[];
}

const ChatClient = ({ currentUser, conversation, messages }: Props) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const sendHandler: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    axios
      .post("/api/messages", {
        ...data,
        conversationId: conversation.id,
      })
      .then(() => {
        toast.success("Message sent");

        router.refresh();

        reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="pt-10">
      <span
        className="text-[#555] text-xs uppercase font-light cursor-pointer"
        onClick={() => router.push("/messages")}
      >
        Fiverr &gt; Messages &gt;
      </span>

      <div className="relative w-full h-[50vh] space-y-2 mt-5 pb-5 border-b overflow-y-scroll overflow-x-hidden">
        {messages.map((message) => (
          <Message
            key={message.id}
            currentUser={currentUser}
            message={message}
          />
        ))}
      </div>

      <div className="flex items-center gap-5 w-full pt-5">
        <div className="w-full flex-1">
          <Input
            id="message"
            type="text"
            placeholder="Write a message"
            disabled={loading}
            required
            errors={errors}
            register={register}
          />
        </div>

        <div className="w-[120px]">
          <Button
            label="Send"
            disabled={loading}
            onClick={handleSubmit(sendHandler)}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatClient;
