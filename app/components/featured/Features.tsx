"use client";

import React from "react";

interface Props {
  label: string;
}

const Features = ({ label }: Props) => {
  return (
    <button className="border rounded-full py-1 px-2 whitespace-nowrap">
      {label}
    </button>
  );
};

export default Features;
