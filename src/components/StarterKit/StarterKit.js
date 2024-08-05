import React from "react";
import { HOME_STARTER_KIT_IMAGE } from "../../data/settings";
import Button from "../Button/Button";

function StarterKit() {
  const StarterKitTitle = (
    <h2 className="font-title text-2xl lg:text-3xl font-bold mb-4">
      Starter Kit
    </h2>
  );

  return (
    <div className="my-8 mx-16 md:mx-20">
      <div className="flex flex-col md:flex-row">
        {/* Left Panel - Image */}
        <div className="flex-1">
          <div className="md:hidden">{StarterKitTitle}</div>
          <img
            src={`${process.env.PUBLIC_URL}/images/banner/${HOME_STARTER_KIT_IMAGE}`}
            alt="Starter Kit"
            className="max-h-[40vh] w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Panel - Description */}
        <div className="flex-1 flex flex-col justify-center items-center p-6 xs:p-8 md:p-10 lg:p-12 xl:p-14">
          <div className="hidden md:block">{StarterKitTitle}</div>
          <p className="mb-6 text-sm md:text-base text-gray-500">
            Discover your perfect fragrance with our Starter Kit. Featuring a
            curated selection of miniature perfume bottles, this kit allows you
            to explore and test various scents before committing to a full-sized
            bottle.
          </p>
          {/* TODO: Redirect to starter kit pages... */}
          <Button onClick={() => console.log("first")}>
            FIND YOUR FRAGRANCE
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StarterKit;
