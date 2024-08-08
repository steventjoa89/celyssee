import React from "react";
import { calculateDiscountedPrice } from "../../utils/mathUtil";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routes";

function Card({ item, isLarge = false, isShowPrice = true }) {
  const { price, discount = 0 } = item.sizes[0];

  const discountedPrice = calculateDiscountedPrice(price, discount);

  return (
    <Link to={ROUTES.PRODUCT_DETAILS(item.id)}>
      <div className="flex flex-col h-fulloverflow-hidden">
        <div
          className={`relative w-full ${
            isLarge
              ? "h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72"
              : "h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56"
          } overflow-hidden`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/perfumes/${item.images[0]}`}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col px-3 py-0 sm:py-1 md:py-2 lg:py-3">
          <div className="flex flex-col p-2 md:p-1 lg:p-0">
            {/* Name */}
            <h3 className="text-xs sm:text-sm md:text-base font-semibold truncate overflow-ellipsis whitespace-normal">
              {item.name}
            </h3>

            {/* Price */}
            {isShowPrice && (
              <div className="mt-2 flex flex-col">
                {item.isSoldOut && (
                  <span className="text-xs sm:text-sm text-red-500">
                    Sold Out
                  </span>
                )}

                <div className="flex flex-col md:flex-row items-center justify-center text-xs sm:text-sm md:text-base space-x-2">
                  {discount > 0 && (
                    <span className="text-gray-600">
                      Rp. {discountedPrice.toLocaleString()}
                    </span>
                  )}
                  <span
                    className={`text-gray-600 ${
                      discount > 0 ? "line-through" : ""
                    }`}
                  >
                    Rp. {price.toLocaleString()}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
