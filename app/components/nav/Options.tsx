import React from "react";
import Container from "../Container";
import NavLink from "./NavLink";

const Options = () => {
  return (
    <>
      <hr />

      <Container>
        <div className="hidden sm:inline-flex bg-white text-black w-full justify-center py-4">
          <div className="w-full overflow-x-hidden flex items-center">
            <div className="w-full overflow-x-scroll scrollbar-hide flex gap-3 item-center justify-between text-xs">
              <NavLink label="Graphics & Design" />

              <NavLink label="Video & Animation" />

              <NavLink label="Writing & Translation" />

              <NavLink label="AI Services" />

              <NavLink label="Digital Marketing" />

              <NavLink label="Music & Audio" />

              <NavLink label="Programming & Tech" />

              <NavLink label="Business" />

              <NavLink label="Lifestyle" />
            </div>
          </div>
        </div>
      </Container>

      <hr />
    </>
  );
};

export default Options;
