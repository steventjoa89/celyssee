import React from "react";
import { calculateDiscountedPrice } from "../../utils/mathUtil";

function Card({ item, isLarge = false, isShowPrice = true }) {
  const { price, discount = 0 } = item.sizes[0];

  const discountedPrice = calculateDiscountedPrice(price, discount);

  return (
    <div className="flex flex-col h-full">
      <div
        className={`relative w-full ${
          isLarge
            ? "h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80"
            : "h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64"
        } overflow-hidden`}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/perfumes/${item.images[0]}`}
          alt="perfume"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex-grow p-4">
        <div className="flex flex-col">
          {/* Name */}
          <h3 className="text-sm md:text-base font-semibold truncate overflow-ellipsis whitespace-normal">
            {item.name}
          </h3>
          {/* Price */}
          {isShowPrice && (
            <div className="w-full flex flex-col md:flex-row items-center justify-center text-xs md:text-sm mt-2">
              {discount ? (
                <div className="space-x-2 md:space-x-3">
                  <span className="text-gray-600">
                    Rp. {discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-gray-400 line-through">
                    Rp. {price.toLocaleString()}
                  </span>
                </div>
              ) : (
                <span className="text-gray-600">
                  Rp. {price.toLocaleString()}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
