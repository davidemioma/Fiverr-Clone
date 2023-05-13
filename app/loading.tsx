import React from "react";

const loading = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-20 h-20 rounded-full border-t border-l border-[#1dbf73] animate-spin" />
    </div>
  );
};

export default loading;
