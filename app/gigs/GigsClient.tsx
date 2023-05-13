"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import qs from "query-string";
import { GigProps } from "../../types";
import useFilterModal from "../hooks/useFilterModal";
import { useRouter, useSearchParams } from "next/navigation";
import GigCard from "../components/GigCard";

interface Props {
  gigs: GigProps[];
}

const GigsClient = ({ gigs }: Props) => {
  const router = useRouter();

  const params = useSearchParams();

  const filterModal = useFilterModal();

  const [min, setMin] = useState(0);

  const [max, setMax] = useState(0);

  const [sort, setSort] = useState("sales");

  const reSort = (type: string) => {
    setSort(type);

    filterModal.onClose();
  };

  const apply = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      min,
      max,
      sort,
    };

    const url = qs.stringifyUrl(
      {
        url: "/gigs",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    filterModal.onClose();

    router.push(url);
  }, [router, params, min, max, sort, filterModal]);

  return (
    <div className="py-10">
      <span className="text-[#555] text-xs uppercase font-light">
        Fiverr &gt; Graphics & Design &gt;
      </span>

      <h1 className="my-2 text-xl font-bold">AI Artists</h1>

      <p className="text-sm text-[#999] font-light">
        Explore the boundaries of art and technology with Liverr AI artists
      </p>

      <div className="flex flex-col md:flex-row md:justify-between gap-3 my-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#999] font-light">Budget</span>

          <input
            className="w-full outline-none border rounded text-sm text-black py-0.5 px-2 placeholder:text-[#999]"
            type="number"
            value={min}
            placeholder="min"
            onChange={(e) => setMin(e.target.valueAsNumber)}
          />

          <input
            className="w-full outline-none border rounded text-sm text-black py-0.5 px-2 placeholder:text-[#999]"
            type="number"
            value={max}
            placeholder="max"
            onChange={(e) => setMax(e.target.valueAsNumber)}
          />

          <button
            className="bg-[#1dbf73] text-white text-sm font-bold py-0.5 px-2 rounded"
            onClick={apply}
          >
            Apply
          </button>
        </div>

        <div className="relative">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-[#999] font-light">Sort by</span>

            <span className="text-sm text-black font-light">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>

            <Image
              className="object-cover cursor-pointer"
              width={16}
              height={16}
              src="/assets/down.png"
              alt=""
              onClick={() => filterModal.toggle()}
            />
          </div>

          {filterModal?.isOpen && (
            <div className="absolute top-8 ml-20 md:right-0 md:ml-0 z-20 flex flex-col gap-4 text-sm text-[#555] bg-white shadow-md border rounded p-5">
              {sort === "sales" ? (
                <span
                  className="cursor-pointer"
                  onClick={() => reSort("createdAt")}
                >
                  Newest
                </span>
              ) : (
                <span
                  className="cursor-pointer"
                  onClick={() => reSort("sales")}
                >
                  Best Selling
                </span>
              )}

              <span className="cursor-pointer" onClick={() => reSort("sales")}>
                Popular
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-7 flex flex-wrap gap-5 justify-center md:justify-start">
        {gigs.map((gig) => (
          <GigCard key={gig.id} gig={gig} />
        ))}
      </div>
    </div>
  );
};

export default GigsClient;
