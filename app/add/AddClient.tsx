"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../components/Button";
import Input from "../components/input/Input";
import ImageUpload from "../components/input/ImageUpload";
import Categories from "../components/input/Categories";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import MultipleImageUpload from "../components/input/MultipleImageUpload";

const AddClient = () => {
  const router = useRouter();

  const [featureInput, setFeatureInput] = useState("");

  const [features, setFeatures] = useState<string[]>([]);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: "",
      category: "design",
      description: "",
      coverImage: "",
      images: [],
      shortTitle: "",
      shortDesc: "",
      deliveryTime: 0,
      revisionNo: 0,
      price: 0,
    },
  });

  const category = watch("category");

  const coverImage = watch("coverImage");

  const images = watch("images");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const addFeaturehandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newFeature = featureInput;

    setFeatures((prev) => [newFeature, ...prev]);

    setFeatureInput("");
  };

  const createHandler: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    axios
      .post("/api/gig", {
        ...data,
        features,
      })
      .then(() => {
        toast.success("Gig created");

        router.refresh();

        reset();

        setFeatures([]);
      })
      .catch((err) => {
        toast.error(err.response.data.message || "Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="py-10">
      <h1 className="text-[#999] text-xl lg:text-2xl capitalize font-light mb-5">
        add new gig
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full flex flex-col space-y-5">
          <Input
            id="title"
            type="text"
            label="Title"
            disabled={loading}
            required
            errors={errors}
            register={register}
          />

          <Categories
            label="Category"
            value={category}
            onChange={(value) => setCustomValue("category", value)}
            options={["design", "web", "animation", "music"]}
          />

          <ImageUpload
            label="Cover Image"
            value={coverImage}
            onChange={(value) => setCustomValue("coverImage", value)}
          />

          <MultipleImageUpload
            label="Upload Images"
            values={images}
            onChange={(values) => setCustomValue("images", values)}
          />

          <Input
            bigtext
            id="description"
            type="text"
            label="Description"
            row={10}
            placeholder="Brief descriptions to introduce your service to customers"
            disabled={loading}
            errors={errors}
            register={register}
          />
        </div>

        <div className="w-full flex flex-col space-y-5">
          <Input
            id="shortTitle"
            type="text"
            label="Service Title"
            disabled={loading}
            errors={errors}
            register={register}
          />

          <Input
            bigtext
            id="shortDesc"
            type="text"
            label="Short Description"
            row={5}
            placeholder="Short description of your service"
            disabled={loading}
            errors={errors}
            register={register}
          />

          <Input
            id="deliveryTime"
            type="number"
            label="Delivery Time"
            required
            disabled={loading}
            errors={errors}
            register={register}
            min={0}
          />

          <Input
            id="revisionNo"
            type="number"
            label="Revision Number"
            required
            disabled={loading}
            errors={errors}
            register={register}
            min={0}
          />

          <div className="flex flex-col space-y-2 text-sm">
            <label>Add Features</label>

            <form
              className="w-full flex border p-2 space-x-3"
              onSubmit={addFeaturehandler}
            >
              <input
                className="flex-1 outline-none"
                value={featureInput}
                type="text"
                placeholder="e.g. page design"
                onChange={(e) => setFeatureInput(e.target.value)}
              />

              <button
                className="bg-[#1dbf73] text-white px-4 py-0.5 rounded disabled:cursor-not-allowed"
                disabled={!featureInput.trim()}
                type="submit"
              >
                Add
              </button>
            </form>
          </div>

          {features.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {features.map((feature, i) => (
                <div
                  className="flex items-center space-x-3 text-sm text-[#1dbf73] border border-[#1dbf73] px-2 py-0.5 rounded-xl"
                  key={i}
                >
                  <p>{feature}</p>

                  <button
                    className="text-xs text-red-500"
                    onClick={() =>
                      setFeatures((prev) =>
                        prev.filter((item) => item !== feature)
                      )
                    }
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}

          <Input
            id="price"
            type="number"
            label="Price"
            required
            disabled={loading}
            errors={errors}
            register={register}
            min={0}
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-7 gap-4">
        <Button
          label="Create"
          disabled={loading}
          onClick={handleSubmit(createHandler)}
        />
      </div>
    </div>
  );
};

export default AddClient;
