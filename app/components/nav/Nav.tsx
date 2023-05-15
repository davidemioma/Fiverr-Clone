"use client";

import React, { useEffect, useState } from "react";
import Avatar from "../Avatar";
import Options from "./Options";
import NavLink from "./NavLink";
import Container from "../Container";
import { UserProps } from "@/types";
import { signOut } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import useProfileModal from "@/app/hooks/useProfileModal";

interface Props {
  currentUser: UserProps | null;
}

const Nav = ({ currentUser }: Props) => {
  const router = useRouter();

  const pathname = usePathname();

  const profileModal = useProfileModal();

  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const show = active || pathname !== "/";

  return (
    <nav
      className={`${
        show ? "bg-white text-black" : "bg-[#013914] text-white"
      } sticky top-0 z-40 transition-all duration-400 ease`}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <div
            className="flex items-baseline gap-0.5 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <span className="text-3xl font-bold">Fiverr</span>

            <span className="bg-[#1bdf73] w-2 h-2 rounded-full" />
          </div>

          <div className="flex items-center gap-5 text-sm font-medium">
            <div className="hidden md:inline-flex items-center gap-5">
              <NavLink label="Fiverr Business" />

              <NavLink label="Explore" />

              <NavLink label="English" />

              {!currentUser?.isSeller && <NavLink label="Become a seller" />}
            </div>

            {!currentUser && (
              <NavLink label="Sign In" onClick={() => router.push("/signin")} />
            )}

            {!currentUser && (
              <span
                onClick={() => router.push("/signup")}
                className={`border ${
                  show && "border-[#1bdf73] text-[#1bdf73]"
                } px-3 py-1.5 rounded cursor-pointer hover:bg-[#1bdf73] hover:text-white hover:border-[#1bdf73]`}
              >
                Join
              </span>
            )}

            {currentUser && (
              <div className="relative">
                <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => profileModal.toggle()}
                >
                  <Avatar imgSrc={`${currentUser?.image}`} />

                  <p className="capitalize">{currentUser.username}</p>
                </div>

                {profileModal.isOpen && (
                  <div className="absolute top-[50px] right-0 z-50 w-[250px] bg-white text-[gray] rounded-lg shadow-md p-4 flex flex-col space-y-2">
                    {currentUser?.isSeller && (
                      <NavLink
                        label="Gigs"
                        onClick={() => router.push("/mygigs")}
                      />
                    )}

                    {currentUser?.isSeller && (
                      <NavLink
                        label="Add New Gig"
                        onClick={() => router.push("/add")}
                      />
                    )}

                    {!currentUser.isSeller && (
                      <NavLink
                        label="Orders"
                        onClick={() => router.push("/orders")}
                      />
                    )}

                    <NavLink
                      label="Messages"
                      onClick={() => router.push("/messages")}
                    />

                    <NavLink label="Logout" onClick={() => signOut()} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>

      {show && <Options />}
    </nav>
  );
};

export default Nav;
