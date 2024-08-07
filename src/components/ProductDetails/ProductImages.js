import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductImages({ item }) {
  // Ref for the main slider
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
  };

  const handleThumbnailClick = (index) => {
    sliderRef.current.slickGoTo(index); // Navigate to the specific slide
  };

  return (
    <div data-aos="fade-right" className="image-slider-container">
      <Slider ref={sliderRef} {...settings}>
        {item.images.map((image, index) => (
          <div key={index}>
            <img
              src={`${process.env.PUBLIC_URL}/images/perfumes/${image}`}
              alt={item.name}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnails */}
      <div className="thumbnails flex items-center justify-center space-x-2 mt-8 md:mt-10">
        {item.images.map((image, index) => (
          <div
            key={index}
            className="thumbnail-wrapper cursor-pointer"
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/perfumes/${image}`}
              alt={item.name}
              className="w-16 h-16 md:w-20 md:h-20 object-cover border border-gray-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductImages;
