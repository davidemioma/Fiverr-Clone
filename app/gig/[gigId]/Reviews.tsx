"use client";

import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Avatar from "@/app/components/Avatar";
import Input from "@/app/components/input/Input";
import Categories from "@/app/components/input/Categories";
import { GigProps, ReviewProps, UserProps } from "../../../types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Props {
  currentUser: UserProps | null;
  gig: GigProps;
  reviews: ReviewProps[];
}

const Reviews = ({ gig, currentUser, reviews }: Props) => {
  const router = useRouter();

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
      review: "",
      rating: "0",
    },
  });

  const rating = watch("rating");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const addReviewHandler: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true);

    axios
      .post("/api/review", {
        ...data,
        rating: +data.rating,
        gigId: gig.id,
      })
      .then(() => {
        toast.success("Review created");

        router.refresh();

        reset();
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message || "Something went wrong!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col gap-5 pt-10">
      {reviews.length > 0 && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-medium capitalize">reviews</h2>

          <div className="flex flex-col gap-3">
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col space-y-3 py-5">
                <div className="flex items-center space-x-2">
                  <Avatar large imgSrc={review.user.image!} />

                  <div className="flex flex-col">
                    <span className="text-sm font-bold capitalize">
                      {review.user.username}
                    </span>

                    <div className="flex items-center space-x-1.5">
                      <span className="text-xs text-[#555] font-light">
                        {review.user.country}
                      </span>
                    </div>
                  </div>
                </div>

                {review.rating > 0 && (
                  <div className="flex items-center space-x-1">
                    {new Array(review.rating).fill(0).map((item, i) => (
                      <Image
                        key={i}
                        width={12}
                        height={12}
                        className="object-cover"
                        src="/assets/star.png"
                        alt=""
                      />
                    ))}

                    <span className="text-xs text-[#ffc108]">
                      {review.rating}
                    </span>
                  </div>
                )}

                <p className="text-sm text-[#555] font-light">
                  {review.review}
                </p>

                <div className="flex items-center space-x-1.5 text-sm">
                  <span>Helpful?</span>

                  <Image
                    width={16}
                    height={16}
                    className="object-cover"
                    src="/assets/like.png"
                    alt=""
                  />

                  <span>Yes</span>

                  <Image
                    width={16}
                    height={16}
                    className="object-cover"
                    src="/assets/dislike.png"
                    alt=""
                  />

                  <span>No</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!currentUser?.isSeller && (
        <div className="flex flex-col gap-3">
          <h2 className="text-xl mb-5 font-medium capitalize">
            add a new review
          </h2>

          <Input
            id="review"
            type="text"
            label="Review"
            bigtext
            row={8}
            placeholder="Brief descriptions to introduce your service to customers"
            disabled={loading}
            required
            errors={errors}
            register={register}
          />

          <Categories
            label="Rating"
            value={rating}
            onChange={(value) => setCustomValue("rating", value)}
            options={["0", "1", "2", "3", "4", "5"]}
          />

          <Button
            onClick={handleSubmit(addReviewHandler)}
            label="Add review"
            disabled={loading}
          />
        </div>
      )}
    </div>
  );
};

export default Reviews;
