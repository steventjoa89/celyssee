import React, { useRef } from "react";
import Banner from "../components/Banner/Banner";
import { HOME_BANNER_IMAGE } from "../data/settings";
import SubBanner from "../components/Banner/SubBanner";

function HomePage() {
  const items = Array(20)
    .fill(null)
    .map((_, index) => `Hello world ${index + 1}`);

  const subBannerRef = useRef(null);

  const handleOnClickBanner = () => {
    if (subBannerRef.current) {
      window.scrollTo({
        top: subBannerRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      {/* Home Banner */}
      <Banner
        img={`${process.env.PUBLIC_URL}/images/banner/${HOME_BANNER_IMAGE}`}
        onClick={handleOnClickBanner}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="absolute bottom-0 mb-6 md:mb-8 lg:mb-10 xl:mb-12 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center space-y-10">
            <div className="flex flex-col space-y-2">
              <span className="text-sm">Perfumery</span>
              <span className="text-lg md:text-xl lg:text-2xl">
                Where Every Scent Tells a Story
              </span>
            </div>
            <span className="text-sm md:text-base underline underline-offset-4">
              Discover the collections
            </span>
          </div>
        </div>
      </Banner>

      {/* SubBanner */}
      <div ref={subBannerRef}>
        <SubBanner />
      </div>

      <div className="space-y-4">
        {items.map((item, index) => (
          <h1 key={index} className="text-3xl font-title font-bold underline">
            {item}
          </h1>
        ))}
      </div>
      <h1 className="text-3xl font-title font-bold underline">Hello world!</h1>
    </div>
  );
}

export default HomePage;
