"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { GigProps } from "../../types";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

interface Props {
  gigs: GigProps[];
}

const MyGigClient = ({ gigs }: Props) => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const onDeleteHandler = useCallback(
    async (id: string) => {
      setLoading(true);

      axios
        .delete(`/api/gig/${id}`)
        .then(() => {
          toast.success("Gig deleted!");

          router.refresh();
        })
        .catch((err) => {
          toast.error(err?.response?.data?.error || "Something went wrong!");
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [router]
  );

  return (
    <div className="flex flex-col gap-7 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">My Gigs</h1>

        <div className="w-[130px]">
          <Button onClick={() => router.push("/add")} label="Add New Gig" />
        </div>
      </div>

      <table className="w-full">
        <thead>
          <tr className="text-left text-xs sm:text-sm h-12">
            <th>Image</th>

            <th>Title</th>

            <th>Price ($)</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody className="text-xs md:text-sm">
          {gigs.map((gig, i) => (
            <tr
              key={gig.id}
              className={`w-full h-14 ${i % 2 == 0 && "bg-[#1dbf730f]"}`}
            >
              <td>
                <div className="relative w-9 sm:w-12 h-5">
                  <Image
                    className="object-cover"
                    fill
                    src={gig?.coverImage}
                    alt=""
                  />
                </div>
              </td>

              <td>
                {gig?.title.substring(0, 50)} {gig?.title.length > 50 && "..."}
              </td>

              <td>{gig?.price}</td>

              <td>
                <button
                  className="disabled:cursor-not-allowed"
                  disabled={loading}
                  onClick={() => onDeleteHandler(gig.id)}
                >
                  <Image
                    className="object-cover"
                    width={16}
                    height={16}
                    src="/assets/delete.png"
                    alt=""
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyGigClient;
