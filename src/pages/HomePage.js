import React, { useRef } from "react";
import Banner from "../components/Banner/Banner";
import { HOME_BANNER_IMAGE, BEST_SELLER_PERFUMES_IDS } from "../data/settings";
import SubBanner from "../components/Banner/SubBanner";
import HorizontalScrollableGridView from "../components/GridView/HorizontalScrollableGridView";
import { PERFUME_CATALOG } from "../data/data";
import EmailSubscription from "../components/EmailSubscription/EmailSubscription";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";

function HomePage() {
  const subBannerRef = useRef(null);
  const navigate = useNavigate();

  // Best Seller Perfumes Items
  const bestSellerIds = BEST_SELLER_PERFUMES_IDS.slice(0, 4);
  const bestSellers = PERFUME_CATALOG.filter((perfumeObj) =>
    bestSellerIds.includes(perfumeObj.id)
  ).sort((a, b) => bestSellerIds.indexOf(a.id) - bestSellerIds.indexOf(b.id));

  // New Collections Perfumes Items
  const newCollections = PERFUME_CATALOG.sort(
    (a, b) => new Date(b.releaseAt) - new Date(a.releaseAt)
  ).slice(0, 4);

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

      {/* Best Sellers Sections */}
      <div className="my-3 px-8 pb-10 border-b border-gray-200">
        <h1 className="relative font-title text-3xl mt-8 mb-5">
          Our Best Sellers
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-16 h-[2px] bg-black"></span>
        </h1>
        <HorizontalScrollableGridView perfumeList={bestSellers} />
        <div className="mt-5">
          <Button onClick={() => navigate(ROUTES.BEST_SELLERS)}>
            SEE MORE
          </Button>
        </div>
      </div>

      {/* TODO: Selected For You Sections */}
      <div>Selected For You</div>

      {/* TODO: Try Starter Kit Sections */}
      <div>Starter Kit</div>

      {/* New Collections Sections */}
      <div className="my-3 px-8 border-t border-gray-200">
        <h1 className="relative font-title text-3xl mt-8 mb-5">
          New Collections
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-16 h-[2px] bg-black"></span>
        </h1>
        <HorizontalScrollableGridView perfumeList={newCollections} />
        <div className="mt-5">
          <Button onClick={() => navigate(ROUTES.NEW_COLLECTIONS)}>
            SEE MORE
          </Button>
        </div>
      </div>

      {/* Email Subscribe Sections */}
      <EmailSubscription />
    </div>
  );
}

export default HomePage;
