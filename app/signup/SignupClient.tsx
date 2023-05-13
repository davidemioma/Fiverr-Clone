"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Input from "../components/input/Input";
import ImageUpload from "../components/input/ImageUpload";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SignupClient = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [isSeller, setIsSeller] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      image: "",
      country: "",
      phoneNo: "",
      bio: "",
    },
  });

  const image = watch("image");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const registerHandler: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    axios
      .post("/api/register", { ...data, isSeller })
      .then(() => {
        toast.success("Success");

        router.push("/signin");

        reset();
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10 pt-10">
        <div className="w-full flex flex-col space-y-7">
          <h1 className="w-full max-w-sm text-xl text-left font-bold">
            Create A New Account
          </h1>

          <div className="w-full flex flex-col gap-3">
            <Input
              id="username"
              type="text"
              label="Username"
              disabled={loading}
              required
              errors={errors}
              register={register}
            />

            <Input
              id="email"
              type="text"
              label="Email"
              disabled={loading}
              required
              errors={errors}
              register={register}
            />

            <Input
              id="password"
              type="password"
              label="Password"
              disabled={loading}
              required
              errors={errors}
              register={register}
            />

            <ImageUpload
              label="Profile Picture"
              profile
              value={image}
              onChange={(value) => setCustomValue("image", value)}
            />

            <Input
              id="country"
              type="text"
              label="Country"
              disabled={loading}
              errors={errors}
              register={register}
            />
          </div>
        </div>

        <div className="w-full flex flex-col space-y-7">
          <h1 className="w-full max-w-sm text-xl text-left font-bold">
            I Want To Become A Seller
          </h1>

          <div className="w-full flex flex-col gap-3">
            <div className="flex items-center space-x-2 text-sm">
              <label>Activate the seller account</label>

              <div
                className={`${
                  isSeller ? "bg-[#1dbf73]" : "bg-[#ccc]"
                } relative w-12 h-6 rounded-2xl cursor-pointer`}
                onClick={() => setIsSeller((prev) => !prev)}
              >
                <span
                  className={`absolute bottom-1 left-1 ${
                    isSeller ? "translate-x-[24px]" : "translate-x-0"
                  } w-4 h-4 rounded-full bg-white transition-transform duration-300 ease-in-out`}
                />
              </div>
            </div>

            <Input
              id="phoneNo"
              type="text"
              label="Phone Number"
              placeholder="+1 234 567 89"
              disabled={loading}
              errors={errors}
              register={register}
            />

            <Input
              id="bio"
              bigtext
              label="Bio"
              row={11}
              placeholder="A short description of yourself"
              disabled={loading}
              errors={errors}
              register={register}
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto flex item-center justify-center mt-8">
        <Button
          label="Register"
          onClick={handleSubmit(registerHandler)}
          disabled={loading}
        />
      </div>
    </>
  );
};

export default SignupClient;
