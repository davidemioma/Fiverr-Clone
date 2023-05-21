import React from "react";
import { cards, projects } from "../util/data";
import Faetured from "./components/featured/Faetured";
import TrustedBy from "./components/trustedBy/TrustedBy";
import Slider from "./components/Slider";
import CategoryCard from "./components/CategoryCard";
import Container from "./components/Container";
import ProjectCard from "./components/ProjectCard";

const Home = () => {
  return (
    <div className="w-screen">
      <Faetured />

      <TrustedBy />

      <Slider>
        {cards.map((card) => (
          <CategoryCard key={card.id} card={card} />
        ))}
      </Slider>

      <section className="bg-[#f1fdf7] w-screen py-16">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex flex-col space-y-4 text-xs md:text-sm">
              <h1 className="text-lg md:text-xl font-medium">
                A whole world of freelance talent at your fingertips
              </h1>

              <div className="flex flex-col space-y-2 text-[gray]">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-5 h-5 object-cover"
                    src="/assets/check.png"
                    alt=""
                  />

                  <p className="text-sm md:text-base font-medium">
                    The best for every budget
                  </p>
                </div>

                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </div>

              <div className="flex flex-col space-y-2 text-[gray]">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-5 h-5 object-cover"
                    src="/assets/check.png"
                    alt=""
                  />

                  <p className="text-sm md:text-base font-medium">
                    Quality work done quickly
                  </p>
                </div>

                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </div>

              <div className="flex flex-col space-y-2 text-[gray]">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-5 h-5 object-cover"
                    src="/assets/check.png"
                    alt=""
                  />

                  <p className="text-sm md:text-base font-medium">
                    Protected payments, every time
                  </p>
                </div>

                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </div>

              <div className="flex flex-col space-y-2 text-[gray]">
                <div className="flex items-center space-x-2">
                  <img
                    className="w-5 h-5 object-cover"
                    src="/assets/check.png"
                    alt=""
                  />

                  <p className="text-sm md:text-base font-medium">
                    24/7 support
                  </p>
                </div>

                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <video
                className="w-full max-w-[720px]"
                src="/assets/video.mp4"
                controls
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#0d084d] text-white w-screen py-16">
        <Container>
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex flex-col space-y-4 text-xs md:text-sm">
              <h1 className="text-lg md:text-xl font-medium">
                Fiverr <i>business</i>
              </h1>

              <h1 className="text-lg md:text-xl font-medium">
                A business solution designed for <i>teams</i>
              </h1>

              <p>
                Upgrade to a curated experience packed with tools and benefits,
                dedicated to businesses
              </p>

              <div className="flex items-center space-x-2">
                <img
                  className="w-5 h-5 object-cover"
                  src="/assets/check.png"
                  alt=""
                />

                <p>Connect to freelancers with proven business experience</p>
              </div>

              <div className="flex items-center space-x-2">
                <img
                  className="w-5 h-5 object-cover"
                  src="/assets/check.png"
                  alt=""
                />

                <p>
                  Get matched with the perfect talent by a customer success
                  manager
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <img
                  className="w-5 h-5 object-cover"
                  src="/assets/check.png"
                  alt=""
                />

                <p>
                  Manage teamwork and boost productivity with one powerful
                  workspace
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#1dbf73] px-4 py-2 rounded font-medium">
                  Explore Fiverr Business
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center">
              <img
                className="w-full max-w-[720px]"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              />
            </div>
          </div>
        </Container>
      </section>

      <Slider>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slider>
    </div>
  );
};

export default Home;
