"use client";

import React from "react";
import Socials from "./Socials";

const TrustedBy = () => {
  return (
    <div className="bg-[#fafafa] w-screen px-5 sm:px-8">
      <div className="w-full max-w-5xl mx-auto flex flex-wrap items-center space-x-5 justify-center">
        <span className="text-sm text-[gray]">Trusted by:</span>

        <Socials imgSrc="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png" />

        <Socials imgSrc="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" />

        <Socials imgSrc="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" />

        <Socials imgSrc="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" />

        <Socials imgSrc="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" />
      </div>
    </div>
  );
};

export default TrustedBy;
