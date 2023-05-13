"use client";

import React from "react";
import { FieldValues, UseFormRegister, FieldErrors } from "react-hook-form";

interface Props {
  bigtext?: boolean;
  row?: number;
  min?: number;
  max?: number;
  id: string;
  type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

const Input = ({
  bigtext,
  row,
  min,
  max,
  id,
  label,
  placeholder,
  register,
  errors,
  type,
  disabled,
  required,
}: Props) => {
  return (
    <div className="flex flex-col space-y-2 text-sm">
      {label && <label>{label}</label>}

      {bigtext ? (
        <textarea
          className={`border ${
            errors[id]
              ? "border-rose-500 focus:border-rose-500"
              : "border-neutral-300 focus:border-black"
          } p-2 outline-none`}
          rows={row}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          {...register(id, { required })}
        />
      ) : (
        <input
          className={`border ${
            errors[id]
              ? "border-rose-500 focus:border-rose-500"
              : "border-neutral-300 focus:border-black"
          } p-2 outline-none`}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          required={required}
          min={min}
          max={max}
          {...register(id, { required })}
        />
      )}
    </div>
  );
};

export default Input;
