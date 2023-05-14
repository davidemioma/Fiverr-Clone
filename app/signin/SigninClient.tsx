"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Input from "../components/input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SigninClient = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signinHandler: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setLoading(false);

      if (callback?.ok) {
        toast.success("Login successful");

        router.push("/");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  return (
    <div className="flex flex-col items-center space-y-5 pt-10">
      <h1 className="w-full max-w-sm text-xl text-left font-bold">Sign In</h1>

      <div className="w-full max-w-sm flex flex-col space-y-5">
        <Input
          id="email"
          type="email"
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

        <Button
          label="Login"
          disabled={loading}
          onClick={handleSubmit(signinHandler)}
        />
      </div>
    </div>
  );
};

export default SigninClient;
