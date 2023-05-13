import React from "react";

interface Props {
  label: string;
  onClick?: () => void;
}

const NavLink = ({ label, onClick }: Props) => {
  return (
    <span
      className="cursor-pointer hover:opacity-75 transition whitespace-nowrap"
      onClick={onClick}
    >
      {label}
    </span>
  );
};

export default NavLink;
