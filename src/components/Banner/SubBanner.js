import React from "react";
import Button from "../Button/Button";

function ImagePanel({ image = "", title = "" }) {
  return (
    <div className="flex-1">
      {title && (
        <div className="md:hidden">
          <h2 className="font-title text-2xl lg:text-3xl font-bold mb-4">
            {title}
          </h2>
        </div>
      )}
      <img
        src={`${process.env.PUBLIC_URL}/images/banner/${image}`}
        alt={title}
        className="w-full h-[25vh] md:h-[40vh] object-cover rounded-xl"
      />
    </div>
  );
}

function ImageDescriptionPanel({
  title = "",
  description = [],
  buttonText = "SEE MORE",
  onClick,
}) {
  return (
    <div className="flex-1 flex flex-col justify-start items-start text-left md:px-12 py-6 xs:py-8 md:py-10 lg:py-12 xl:py-14">
      {title && (
        <div className="hidden md:block">
          <h2 className="font-title text-2xl lg:text-3xl font-bold mb-4">
            {title}
          </h2>
        </div>
      )}
      {description.map((item, index) => (
        <p key={index} className="mb-6 text-sm md:text-base text-gray-500">
          {item}
        </p>
      ))}
      <div className="w-full flex justify-center md:justify-start">
        <Button onClick={onClick}>{buttonText}</Button>
      </div>
    </div>
  );
}

function SubBanner({
  imagePosition = "left",
  image = "",
  title = "",
  description = [],
  buttonText = "",
  onClick,
}) {
  const isImageLeft = imagePosition === "left";

  return (
    <div className="my-3 mx-16 md:mx-20">
      <div
        className={`flex flex-col md:flex-row ${
          isImageLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        <ImagePanel image={image} title={title} />
        <ImageDescriptionPanel
          title={title}
          description={description}
          buttonText={buttonText}
          onClick={onClick}
        />
      </div>
    </div>
  );
}

export default SubBanner;
