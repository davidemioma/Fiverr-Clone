"use client";

import React from "react";
import useProfileModal from "../hooks/useProfileModal";
import useFilterModal from "../hooks/useFilterModal";

interface Props {
  children: React.ReactNode;
}

const Box = ({ children }: Props) => {
  const profileModal = useProfileModal();

  const filterModal = useFilterModal();

  const closeAllModal = () => {
    profileModal.isOpen && profileModal.onClose();

    filterModal.isOpen && filterModal.onClose();
  };

  return (
    <div className="w-screen min-h-screen" onClick={closeAllModal}>
      {children}
    </div>
  );
};

export default Box;
