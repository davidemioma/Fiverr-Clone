import {
  User,
  Gig,
  Conversation,
  Review,
  Message,
  Order,
} from "@prisma/client";

export type UserProps = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type ConversationProps = Omit<
  Conversation,
  "createdAt" | "updatedAt"
> & {
  createdAt: string;
  updatedAt: string;
};

export type OrderProps = Omit<Order, "createdAt"> & {
  createdAt: string;
};

export type MessageProps = Omit<Message, "createdAt"> & {
  user: UserProps;
  createdAt: string;
};

export type GigProps = Omit<Gig, "createdAt"> & {
  user: UserProps;
  createdAt: string;
};

export type ReviewProps = Omit<Review, "createdAt"> & {
  user: UserProps;
  createdAt: string;
};
