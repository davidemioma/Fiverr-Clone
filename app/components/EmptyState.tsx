"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  subtitle: string;
  showReset?: boolean;
  route?: string;
}

const EmptyState = ({ title, subtitle, showReset, route }: Props) => {
  const router = useRouter();

  return (
    <div className="h-[60vh] flex flex-col justify-center items-center">
      <div className="text-2xl font-semibold">{title}</div>

      <div className="mt-2 font-light text-neutral-500">{subtitle}</div>

      <div className="w-48 mt-4">
        {showReset && (
          <Button
            onClick={() => route && router.push(route)}
            label={`Go to ${route?.slice(1)}`}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
