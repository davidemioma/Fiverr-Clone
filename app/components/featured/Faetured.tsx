"use client";

import React, { useCallback, useState } from "react";
import Image from "next/image";
import qs from "query-string";
import Container from "../Container";
import Features from "./Features";
import { useRouter, useSearchParams } from "next/navigation";

const Faetured = () => {
  const router = useRouter();

  const params = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");

  const search = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      search: searchTerm,
    };

    const url = qs.stringifyUrl(
      {
        url: "/gigs",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [router, params, searchTerm]);

  return (
    <section className="bg-[#013914] text-white">
      <Container>
        <div className="flex items-center py-28 md:py-0">
          <div className="flex flex-col space-y-5">
            <h1 className="text-2xl md:text-3xl font-bold">
              Find the perfect <i className="font-light">freelance</i> services
              for your business
            </h1>

            <div className="bg-white flex items-center space-x-3 rounded overflow-hidden">
              <Image
                className="ml-[10px] object-cover"
                width={20}
                height={20}
                src="/assets/search.png"
                alt=""
              />

              <input
                className="w-full text-black flex-1 outline-none bg-transparent text-sm"
                value={searchTerm}
                type="text"
                placeholder="Try building mobil app"
                onChange={(e) => setSearchTerm(e.target.value)}
              />

              <button
                className="bg-[#1dbf73] w-[90px] sm:w-[100px] h-10"
                onClick={search}
              >
                Search
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm">
              <span>Popular:</span>

              <Features label="Web Design" />

              <Features label="WordPress" />

              <Features label="Logo Design" />

              <Features label="AI Services" />
            </div>
          </div>

          <div className="hidden md:inline h-full">
            <img
              className="w-full h-full object-contain"
              loading="lazy"
              src="/assets/man.png"
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faetured;
