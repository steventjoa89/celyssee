import React from "react";
import Button from "../Button/Button";
import {
  HOME_SUBBANNER1_IMAGE,
  HOME_SUBBANNER2_IMAGE,
} from "../../data/settings";

function SubBannerParagraph({ subbanner, onClick }) {
  return (
    <div className="flex-1 h-[25vh] md:h-[45vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="px-3 md:px-12 text-left">
          <h2 className="font-title text-base sm:text-lg md:text-xl lg:text-2xl font-bold line-clamp-2 md:line-clamp-none">
            {subbanner.title}
          </h2>
          <p className="mt-2 lg:mt-3 mb-2 sm:mb-3 lg:mb-6 text-xs md:text-base line-clamp-3 md:line-clamp-none text-gray-500">
            {subbanner.description}
          </p>
          {/* <div className="hidden sm:block"> */}
          <Button onClick={onClick}>{subbanner.buttonText}</Button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

function SubBannerImage({ subbanner }) {
  return (
    <div className="flex-1">
      <img
        className="w-full max-w-full h-[25vh] md:h-[45vh] pl-5 object-cover object-center rounded-lg"
        src={subbanner.image}
        alt={subbanner.title}
      />
    </div>
  );
}

function SubBanner() {
  const subbannerInfoArr = [
    {
      title: "Elegant Feminine Fragrances",
      description:
        "Experience the essence of sophistication with Celyssee's exclusive range of feminine perfumes.",
      image: `${process.env.PUBLIC_URL}/images/banner/${HOME_SUBBANNER1_IMAGE}`,
      buttonText: "MORE",
      buttonClick: () => {
        console.log("first"); // TODO: ONCLICK
      },
    },
    {
      title: "Refined Masculine Scents",
      description:
        "Discover the essence of sophistication with Celyssee's distinguished range of masculine perfumes.",
      image: `${process.env.PUBLIC_URL}/images/banner/${HOME_SUBBANNER2_IMAGE}`,
      buttonText: "MORE",
      buttonClick: () => {
        console.log("second"); // TODO: ONCLICK
      },
    },
  ];

  return (
    <div className="my-3 mt-8 p-8 px-12">
      {subbannerInfoArr.map((item, index) => (
        <div key={index}>
          <div className="flex w-full">
            {index % 2 === 0 ? (
              <>
                <SubBannerParagraph
                  subbanner={item}
                  onClick={item.buttonClick}
                />
                <SubBannerImage subbanner={item} />
              </>
            ) : (
              <>
                <SubBannerImage subbanner={item} />
                <SubBannerParagraph
                  subbanner={item}
                  onClick={item.buttonClick}
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SubBanner;
