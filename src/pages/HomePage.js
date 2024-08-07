import React, { useRef } from "react";
import Banner from "../components/Banner/Banner";
import {
  HOME_BANNER_IMAGE,
  BEST_SELLER_PERFUMES_IDS,
  HOME_SUBBANNER1_IMAGE,
  HOME_SUBBANNER2_IMAGE,
  HOME_STARTER_KIT_IMAGE,
} from "../data/settings";
import SubBanner from "../components/Banner/SubBanner";
import HorizontalScrollableGridView from "../components/GridView/HorizontalScrollableGridView";
import { PERFUME_CATALOG } from "../data/data";
import EmailSubscription from "../components/EmailSubscription/EmailSubscription";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../routes";
import { Gender } from "../enums/genderEnum";
import TitleManager from "../components/TitleManager/TitleManager";

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

  const subbannerInfoArr = [
    {
      title: "Elegant Feminine Fragrances",
      description: [
        "Experience the essence of sophistication with Celyssee's exclusive range of feminine perfumes.",
        "Our carefully crafted scents are designed to embody grace and allure, offering you a signature fragrance that enhances your natural beauty.",
      ],
      image: HOME_SUBBANNER1_IMAGE,
      imagePosition: "left",
      buttonText: "SEE MORE",
      onClick: () =>
        navigate(ROUTES.COLLECTIONS(Gender.FEMININE.toLowerCase())),
    },
    {
      title: "Refined Masculine Scents",
      description: [
        "Discover the essence of sophistication with Celyssee's distinguished range of masculine perfumes.",
        "Our meticulously crafted fragrances are designed to exude strength and elegance, providing a signature scent that complements the modern man’s refined style.",
      ],
      image: HOME_SUBBANNER2_IMAGE,
      imagePosition: "right",
      buttonText: "SEE MORE",
      onClick: () =>
        navigate(ROUTES.COLLECTIONS(Gender.MASCULINE.toLowerCase())),
    },
  ];

  const starterKitInfo = {
    title: "Starter Kit",
    description: [
      "Discover your perfect fragrance with our Starter Kit. Featuring a curated selection of miniature perfume bottles, this kit allows you to explore and test various scents before committing to a full-sized bottle.",
    ],
    image: HOME_STARTER_KIT_IMAGE,
    imagePosition: "left",
    buttonText: "FIND YOUR FRAGANCE",
    onClick: () => navigate(ROUTES.PRODUCT_DETAILS(4)), // ID:4 = Starter Kit
  };

  return (
    <>
      <TitleManager />
      <div>
        {/* Home Banner */}
        <Banner
          img={`${process.env.PUBLIC_URL}/images/banner/${HOME_BANNER_IMAGE}`}
          onClick={handleOnClickBanner}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div
            data-aos="fade-up"
            className="absolute inset-0 flex items-center justify-center text-white"
          >
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
        <div ref={subBannerRef} className="my-12">
          {subbannerInfoArr.map((item, index) => (
            <SubBanner key={index} {...item} />
          ))}
        </div>

        {/* Best Sellers Sections */}
        <div className="my-3 px-8 pb-10 border-b border-gray-200">
          <h1
            data-aos="fade-up"
            className="relative font-title text-3xl mt-8 mb-5"
          >
            Our Best Sellers
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-4px] w-16 h-[2px] bg-black"></span>
          </h1>
          <HorizontalScrollableGridView
            perfumeList={bestSellers}
            fadeDirection="right"
          />
          <div className="mt-5">
            <Button onClick={() => navigate(ROUTES.BEST_SELLERS)}>
              SEE MORE
            </Button>
          </div>
        </div>

        {/* Try Starter Kit Sections */}
        <div className="my-8">
          <SubBanner {...starterKitInfo} isTextCenter={true} />
        </div>

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
    </>
  );
}

export default HomePage;
