"use client";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="w-screen max-w-5xl mx-auto px-5 sm:px-8">{children}</div>
  );
};

export default Container;
