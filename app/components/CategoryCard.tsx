"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  card: {
    id: number;
    title: string;
    desc: string;
    img: string;
  };
}

const CategoryCard = ({ card }: Props) => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/gigs")}>
      <div
        className="relative w-60 h-80 text-white rounded overflow-hidden cursor-pointer"
        onClick={() => router.push("/gigs?cat=design")}
      >
        <img className="w-full h-full object-cover" src={card.img} alt="" />

        <div className="absolute top-0 w-full h-full bg-black/40" />

        <div className="absolute top-5 left-5 flex flex-col">
          <span className="font-medium">{card.desc}</span>

          <span className="font-bold text-lg">{card.title}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
