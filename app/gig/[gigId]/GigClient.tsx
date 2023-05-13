"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GigProps, ReviewProps, UserProps } from "@/types";
import Avatar from "@/app/components/Avatar";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Button from "@/app/components/Button";
import Reviews from "./Reviews";

interface Props {
  currentUser: UserProps | null;
  gig: GigProps;
  reviews: ReviewProps[];
}

const GigClient = ({ gig, currentUser, reviews }: Props) => {
  const router = useRouter();

  const showStar = gig.totalRating / gig.numberOfRatings > 0;

  const [index, setIndex] = useState(0);

  const handleArrow = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : gig.images.length - 1);
    }

    if (direction === "r") {
      setIndex(index !== gig.images.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 py-10">
      <div className="w-full">
        <span className="text-[#555] text-xs uppercase font-light">
          Fiverr &gt; Graphics & Design &gt;
        </span>

        <h1 className="my-3 text-xl font-bold">{gig.title}</h1>

        <div className="flex items-center space-x-2">
          <Avatar imgSrc={gig.user.image!} />

          <span className="text-sm capitalize font-bold">
            {gig.user.username}
          </span>

          {showStar && (
            <div className="flex items-center space-x-1">
              {new Array(gig.totalRating / gig.numberOfRatings)
                .fill(0)
                .map((star, i) => (
                  <img
                    key={i}
                    className="w-3 h-3 object-cover"
                    src="/assets/star.png"
                    alt=""
                  />
                ))}

              <span className="text-xs text-[#ffc108]">
                {gig.totalRating / gig.numberOfRatings}
              </span>
            </div>
          )}
        </div>

        {gig.images.length > 0 && (
          <div className="relative my-5 w-full">
            <button
              className="absolute top-1/2 z-10 -left-5 bg-[#f3f3f3] flex items-center justify-center w-10 h-10 rounded-full"
              onClick={() => handleArrow("l")}
            >
              <AiOutlineArrowLeft size={20} color="#1dbf73" />
            </button>

            <div className="w-full overflow-hidden">
              <div
                style={{ transform: `translateX(${-100 * index}%)` }}
                className="w-full flex transition-transform duration-500 ease-in-out"
              >
                {gig.images.map((image: string, i: number) => (
                  <img
                    key={i}
                    className="min-w-[100%] max-h-[500px] object-cover"
                    src={image}
                    alt=""
                  />
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 z-10 -right-5 bg-[#f3f3f3] flex items-center justify-center w-10 h-10 rounded-full"
              onClick={() => handleArrow("r")}
            >
              <AiOutlineArrowRight size={20} color="#1dbf73" />
            </button>
          </div>
        )}

        <div className="flex flex-col space-y-3">
          <h2 className="text-xl font-medium">{gig.title}</h2>

          <p className="text-[#555] text-sm font-light">{gig.description}</p>
        </div>

        <div className="py-10">
          <h2 className="text-xl font-medium capitalize">about the seller</h2>

          <div className="flex items-center space-x-3 my-4">
            <Avatar large imgSrc={gig.user.image!} />

            <div className="flex flex-col space-y-1">
              <span className="text-sm font-bold capitalize">
                {gig.user.username}
              </span>

              <div className="flex items-center space-x-1">
                {new Array(5).fill(0).map((item) => (
                  <Image
                    className="object-cover"
                    width={12}
                    height={12}
                    src="/assets/star.png"
                    alt=""
                  />
                ))}

                <span className="text-xs text-[#ffc108]">5</span>
              </div>

              <button className="text-sm border border-[gray] py-1 px-2 rounded">
                Contact Me
              </button>
            </div>
          </div>

          <div className="w-full p-4 border rounded">
            <div className="grid grid-cols-2 gap-3 pb-4">
              <div className="flex flex-col space-y-1">
                <span className="text-xs text-[#555] font-light">From</span>

                <span className="font-bold text-sm capitalize">
                  {gig.user.country}
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-[#555] font-light">
                  Member since
                </span>

                <span className="font-bold text-sm">Aug 2022</span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-[#555] font-light">
                  Avg. response time
                </span>

                <span className="font-bold text-sm">4 hours</span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-[#555] font-light">
                  Last delivery
                </span>

                <span className="font-bold text-sm">1 day</span>
              </div>

              <div className="flex flex-col space-y-1">
                <span className="text-xs text-[#555] font-light">
                  Languages
                </span>

                <span className="font-bold text-sm">English</span>
              </div>
            </div>

            {gig.user.bio && (
              <>
                <hr />

                <p className="text-sm text-[#555] font-light pt-4">
                  {gig.user.bio}
                </p>
              </>
            )}
          </div>
        </div>

        <Reviews currentUser={currentUser} gig={gig} reviews={reviews} />
      </div>

      <div className="md:sticky md:top-[150px] flex flex-col space-y-4 w-full max-w-sm h-fit border rounded p-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold">{gig.shortTitle}</h3>

          <h2 className="text-lg text-[#555] font-light">$ {gig.price}</h2>
        </div>

        <p className="text-sm text-[#555] font-light">{gig.shortDesc}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 text-sm">
            <img
              className="w-3 h-3 object-cover"
              src="/assets/clock.png"
              alt=""
            />

            <span>{gig.deliveryTime} Days Delivery</span>
          </div>

          <div className="flex items-center space-x-1.5 text-sm">
            <img
              className="w-3 h-3 object-cover"
              src="/assets/recycle.png"
              alt=""
            />

            <span>{gig.revisionNo} Revisions</span>
          </div>
        </div>

        {gig.features && (
          <div className="flex flex-col space-y-1.5">
            {gig.features.map((feature: string, i: number) => (
              <div
                key={i}
                className="flex items-center space-x-2 text-sm text-[#555] font-light"
              >
                <img
                  className="w-3 h-3 object-cover"
                  src="/assets/greencheck.png"
                  alt=""
                />

                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}

        {gig?.userId !== currentUser?.id && (
          <Button
            label="Continue"
            onClick={() => router.push(`/pay/${gig.id}`)}
          />
        )}
      </div>
    </div>
  );
};

export default GigClient;
