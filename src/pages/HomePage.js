import React, { useRef } from "react";
import Banner from "../components/Banner/Banner";
import {
  HOME_BANNER_IMAGE,
  HOME_MUST_HAVES_PERFUMES_IDS,
} from "../data/settings";
import SubBanner from "../components/Banner/SubBanner";
import HorizontalScrollableGridView from "../components/GridView/HorizontalScrollableGridView";
import { PERFUME_CATALOG } from "../data/data";
import EmailSubscription from "../components/EmailSubscription/EmailSubscription";

function HomePage() {
  const subBannerRef = useRef(null);

  // Must Haves Perfumes Items
  const mustHavesPerfumes = PERFUME_CATALOG.filter((perfumeObj) =>
    HOME_MUST_HAVES_PERFUMES_IDS.includes(perfumeObj.id)
  ).sort((a, b) => a.id - b.id);

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

      {/* TODO: Best Sellers Sections */}
      <div>Best Sellers</div>

      {/* TODO: Selected For You Sections */}
      <div>Selected For You</div>

      {/* TODO: Try Starter Kit Sections */}
      <div>Starter Kit</div>

      {/* Must Have Sections */}
      <div className="my-3 px-8 border-t border-gray-200">
        <h1 className="relative font-title text-3xl mt-8 mb-5">
          Must Haves
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-16 h-[2px] bg-black"></span>
        </h1>
        <HorizontalScrollableGridView perfumeList={mustHavesPerfumes} />
      </div>

      {/* Email Subscribe Sections */}
      <EmailSubscription />
    </div>
  );
}

export default HomePage;
