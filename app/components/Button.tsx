import React from "react";
import BtnSpinner from "./BtnSpinner";

interface Props {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

const Button = ({ label, disabled, onClick }: Props) => {
  return (
    <button
      className="w-full max-w-sm bg-[#1dbf73] flex items-center justify-center text-white text-sm font-bold p-2 rounded disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {disabled ? <BtnSpinner /> : <p>{label}</p>}
    </button>
  );
};

export default Button;
