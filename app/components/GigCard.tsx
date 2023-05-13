"use client";

import React from "react";
import Image from "next/image";
import { GigProps } from "@/types";
import Avatar from "./Avatar";
import { useRouter } from "next/navigation";

interface Props {
  gig: GigProps;
}

const GigCard = ({ gig }: Props) => {
  const router = useRouter();

  const showStar = gig.totalRating / gig.numberOfRatings > 0;

  return (
    <div
      onClick={() => router.push(`/gig/${gig.id}`)}
      className="w-full max-w-[324px] h-[400px] border shadow-md cursor-pointer rounded overflow-hidden"
    >
      <div className="relative w-full h-1/2">
        <Image className="object-cover" fill src={gig.coverImage} alt="" />
      </div>

      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <Avatar imgSrc={gig.user.image!} />

          <p className="font-bold capitalize text-sm">{gig.user.username}</p>
        </div>

        <p className="text-xs font-light my-2 w-[292px] truncate">
          {gig.description}
        </p>

        {showStar && (
          <div className="flex items-center space-x-1">
            <img
              className="w-3 h-3 object-cover"
              src="/assets/star.png"
              alt=""
            />

            <span className="text-[#ffc108] text-sm">
              {gig.totalRating / gig.numberOfRatings}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between p-4">
        <Image
          className="object-cover"
          width={20}
          height={20}
          src="/assets/heart.png"
          alt=""
        />

        <div className="price">
          <span className="text-[#999] text-xs font-light">STARTING AT</span>

          <h2 className="text-[#555] text-lg font-normal">$ {gig.price}</h2>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
