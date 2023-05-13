"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface Props {
  label: string;
  values: string[];
  onChange: (values: string[]) => void;
}

const MultipleImageUpload = ({ label, values, onChange }: Props) => {
  const handleSubmit = useCallback(
    (result: any) => {
      onChange([...values, result?.info?.secure_url]);
    },
    [onChange, values]
  );

  return (
    <CldUploadWidget
      onUpload={handleSubmit}
      uploadPreset="ofj4nzii"
      options={{
        maxFiles: 5,
      }}
    >
      {({ open }) => (
        <div className="flex flex-col space-y-2 text-sm">
          <label>{label}</label>

          <div className="flex items-center gap-3 p-2 border">
            <button className="text-[#1dbf73]" onClick={() => open?.()}>
              Choose Files
            </button>

            {values.length > 0 && (
              <Image
                className="object-cover"
                width={25}
                height={25}
                src={values[0]}
                alt=""
              />
            )}
          </div>
        </div>
      )}
    </CldUploadWidget>
  );
};

export default MultipleImageUpload;
