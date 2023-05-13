import React from "react";
import Image from "next/image";

interface Props {
  imgSrc?: string;
  large?: boolean;
}

const Avatar = ({ imgSrc, large }: Props) => {
  return (
    <div className={`relative ${large ? "w-10 h-10" : "w-7 h-7"}`}>
      <Image
        className="object-cover rounded-full"
        fill
        src={imgSrc || "/assets/no-user.jpeg"}
        alt=""
      />
    </div>
  );
};

export default Avatar;
