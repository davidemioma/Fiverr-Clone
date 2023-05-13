"use client";

import React from "react";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

const Categories = ({ label, value, onChange, options }: Props) => {
  return (
    <div className="flex flex-col space-y-2 text-sm">
      <label>{label}</label>

      <select
        className="outline-none border p-2"
        value={value}
        name="category"
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, i) => (
          <option className="capitalize" key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
