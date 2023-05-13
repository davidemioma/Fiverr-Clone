"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";

interface Props {
  profile?: boolean;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ImageUpload = ({ label, value, onChange, profile }: Props) => {
  const handleSubmit = useCallback(
    (result: any) => {
      onChange(result?.info?.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleSubmit}
      uploadPreset="ofj4nzii"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <div className="flex flex-col space-y-2 text-sm">
          <label>{label}</label>

          <div className="flex items-center gap-3 p-2 border">
            <button className="text-[#1dbf73]" onClick={() => open?.()}>
              Choose File
            </button>

            {value && (
              <Image
                className={`object-cover ${profile && "rounded-full"}`}
                width={25}
                height={25}
                src={value}
                alt=""
              />
            )}
          </div>
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
