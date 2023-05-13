"use client";

import React, { useRef, useState } from "react";
import Container from "./Container";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  children: React.ReactNode;
}

const Slider = ({ children }: Props) => {
  const rowRef = useRef<HTMLDivElement>(null);

  const [isMoved, setIsMoved] = useState(false);

  const handleClick = (direction: string) => {
    setIsMoved(true);

    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="w-screen py-16">
      <Container>
        <div className="relative">
          <button
            className={`${
              !isMoved ? "hidden" : "inline-flex"
            } absolute top-1/2 z-10 -left-5 bg-[#f3f3f3] flex items-center justify-center w-10 h-10 rounded-full`}
            onClick={() => handleClick("left")}
          >
            <AiOutlineArrowLeft size={20} color="#1dbf73" />
          </button>

          <div
            ref={rowRef}
            className="flex space-x-5 items-center overflow-x-scroll scrollbar-hide"
          >
            {children}
          </div>

          <button
            className="absolute top-1/2 z-10 -right-5 bg-[#f3f3f3] flex items-center justify-center w-10 h-10 rounded-full"
            onClick={() => handleClick("right")}
          >
            <AiOutlineArrowRight size={20} color="#1dbf73" />
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Slider;
