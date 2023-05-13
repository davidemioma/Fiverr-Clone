"use client";

import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="py-16">
      <Container>
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-5 pb-10 border-b">
          <div className="flex flex-col space-y-2 text-sm text-[gray]">
            <h2 className="font-bold text-black">Categories</h2>

            <span className="cursor-pointer">Graphics & Design</span>

            <span className="cursor-pointer">Digital Marketing</span>

            <span className="cursor-pointer">Writing & Translation</span>

            <span className="cursor-pointer">Video & Animation</span>

            <span className="cursor-pointer">Music & Audio</span>

            <span className="cursor-pointer">Programming & Tech</span>

            <span className="cursor-pointer">Data</span>

            <span className="cursor-pointer">Business</span>

            <span className="cursor-pointer">Lifestyle</span>

            <span className="cursor-pointer">Photography</span>

            <span className="cursor-pointer">Sitemap</span>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-[gray]">
            <h2 className="font-bold text-black">About</h2>

            <span className="cursor-pointer">Press & News</span>

            <span className="cursor-pointer">Partnerships</span>

            <span className="cursor-pointer">Privacy Policy</span>

            <span className="cursor-pointer">Terms of Service</span>

            <span className="cursor-pointer">Intellectual Property Claims</span>

            <span className="cursor-pointer">Investor Relations</span>

            <span className="cursor-pointer">Contact Sales</span>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-[gray]">
            <h2 className="font-bold text-black">Support</h2>

            <span className="cursor-pointer">Help & Support</span>

            <span className="cursor-pointer">Trust & Safety</span>

            <span className="cursor-pointer">Selling on Liverr</span>

            <span className="cursor-pointer">Buying on Liverr</span>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-[gray]">
            <h2 className="font-bold text-black">Community</h2>

            <span className="cursor-pointer">Customer Success Stories</span>

            <span className="cursor-pointer">Community hub</span>

            <span className="cursor-pointer">Forum</span>

            <span className="cursor-pointer">Events</span>

            <span className="cursor-pointer">Blog</span>

            <span className="cursor-pointer">Influencers</span>

            <span className="cursor-pointer">Affiliates</span>

            <span className="cursor-pointer">Podcast</span>

            <span className="cursor-pointer">Invite a Friend</span>

            <span className="cursor-pointer">Become a Seller</span>

            <span className="cursor-pointer">Community Standards</span>
          </div>

          <div className="flex flex-col space-y-2 text-sm text-[gray]">
            <h2 className="font-bold text-black">More From Fiverr</h2>

            <span className="cursor-pointer">Liverr Business</span>

            <span className="cursor-pointer">Liverr Pro</span>

            <span className="cursor-pointer">Liverr Logo Maker</span>

            <span className="cursor-pointer">Liverr Guides</span>

            <span className="cursor-pointer">Get Inspired</span>

            <span className="cursor-pointer">Liverr Select</span>

            <span className="cursor-pointer">ClearVoice</span>

            <span className="cursor-pointer">Liverr Workspace</span>

            <span className="cursor-pointer">Learn</span>

            <span className="cursor-pointer">Working Not Working</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:justify-between gap-5 pt-10">
          <div className="flex flex-wrap items-center gap-3 lg:gap-4 justify-center">
            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src="/assets/twitter.png"
              alt=""
            />

            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src="/assets/facebook.png"
              alt=""
            />

            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src="/assets/linkedin.png"
              alt=""
            />

            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src="/assets/pinterest.png"
              alt=""
            />

            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src="/assets/instagram.png"
              alt=""
            />

            <div className="flex items-center space-x-2 text-xs">
              <img
                className="w-5 h-5 object-cover"
                src="/assets/language.png"
                alt=""
              />

              <span>English</span>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <img
                className="w-5 h-5 object-cover"
                src="/assets/coin.png"
                alt=""
              />

              <span>USD</span>
            </div>

            <img
              className="w-5 h-5 object-cover cursor-pointer"
              src="/assets/accessibility.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-center space-x-2 text-[gray]">
            <h2 className="font-bold">Fiverr</h2>

            <span className="text-xs">© Fiverr International Ltd. 2023</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
