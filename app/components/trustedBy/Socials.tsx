"use client";

import React from "react";
import Image from "next/image";

interface Props {
  imgSrc: string;
}

const Socials = ({ imgSrc }: Props) => {
  return (
    <img className="h-12 object-contain" src={imgSrc} alt="" loading="lazy" />
  );
};

export default Socials;
