import React from "react";
import Button from "../Button/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { calculateDiscountedPrice } from "../../utils/mathUtil";
import { COMPANY_INFO } from "../../data/settings";
import { normalizePhoneNumber } from "../../utils/stringUtil";

function ProductDetails({ title, description }) {
  return (
    <div>
      <span className="text-sm lg:text-base font-bold">{title}:</span>
      <p className="text-sm lg:text-base text-gray-500 leading-snug">
        {description}
      </p>
    </div>
  );
}

function ProductInfo({ item, selectedSize, setSelectedSize }) {
  const handleOpenWhatsapp = () => {
    // Open Whatsapp
    const phoneNumber = normalizePhoneNumber(
      COMPANY_INFO.COMPANY_WHATSAPP_NUMBER
    );
    const message = `Hello,\r\nI am interested in learning more about the perfume named ${item.name}. Could you please provide me with additional details, such as pricing, availability, and any other relevant information?\r\nThank you.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  const handleOpenOnlineMarketplace = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-3 mt-4">
      {/* Name */}
      <span className="w-full font-title text-2xl font-bold text-center md:text-left">
        {item.name}
      </span>

      {/* Price */}
      <div className="w-full flex items-center justify-center text-center md:items-start md:justify-start text-lg space-x-3">
        <span className="text-gray-500">
          Rp.{" "}
          {calculateDiscountedPrice(
            item.sizes[selectedSize].price,
            item.sizes[selectedSize].discount
          ).toLocaleString()}
        </span>
        {item.sizes[selectedSize].discount && (
          <span className="text-gray-400 line-through">
            Rp. {item.sizes[selectedSize].price.toLocaleString()}
          </span>
        )}
      </div>

      {/* Sizes */}
      <div className="w-full pt-4 flex justify-center md:justify-start">
        <span className="font-bold">Sizes</span>
      </div>
      <div className="w-full mt-3 pb-3 flex flex-row space-x-3 justify-center md:justify-start">
        {item.sizes.map((item, index) => (
          <Button
            key={index}
            isSelected={index === selectedSize}
            onClick={() => setSelectedSize(index)}
          >
            {item.volume} ML
          </Button>
        ))}
      </div>

      {/* Out of Stock Info */}
      {item.sizes?.[selectedSize]?.isAvailable === false && (
        <div className="w-full p-6 border border-gray-200 rounded-xl flex flex-col items-center justify-center space-y-3">
          <h2 className="text-lg font-semibold">Out of Stock</h2>
          <p className="text-sm text-gray-500">
            We apologize for the inconvenience. Unfortunately, this product is
            currently out of stock. Please feel free to reach out to us via
            WhatsApp, and we will notify you as soon as it becomes available.
          </p>
        </div>
      )}

      {/* Contact Us */}
      <div className="w-full border-y border-gray-200 mt-8 pb-4">
        <div className="flex justify-center md:justify-start pt-6 space-x-3">
          {/* Open Whatsapp */}
          <Button icon={<WhatsAppIcon />} onClick={handleOpenWhatsapp}>
            Contact Us
          </Button>
        </div>

        <div className="flex justify-center md:justify-start mt-3">
          <span className="text-xs text-left text-gray-600">
            Our advisor will be deligted to help you find more regarding this
            product.
          </span>
        </div>
      </div>

      {/* Online Stores */}
      {item.onlineMarketplaces && (
        <div className="w-full flex justify-center md:justify-start border-b border-gray-200 pt-2 pb-4">
          <div className="flex flex-col items-center md:items-start justify-start">
            <span className="font-bold">Online Stores:</span>
            <div className="mt-3 flex space-x-3">
              {item.onlineMarketplaces.map(
                (itemOnlineMarketplace, indexOnlineMarketplace) => (
                  // Open a new tab on online marketplace
                  <Button
                    key={indexOnlineMarketplace}
                    onClick={() =>
                      handleOpenOnlineMarketplace(itemOnlineMarketplace.link)
                    }
                  >
                    {itemOnlineMarketplace.name}
                  </Button>
                )
              )}
            </div>
          </div>
        </div>
      )}

      {/* Perfume Details */}
      <div className="w-full pt-4 flex flex-col text-left space-y-3">
        {/* Gender */}
        <ProductDetails title="Type" description={item.gender} />

        {/* Description */}
        <ProductDetails
          title="Description"
          description={item.description ? item.description : "-"}
        />

        {/* Ingredients */}
        <ProductDetails
          title="Ingredients"
          description={item.ingredients ? item.ingredients.join(", ") : "-"}
        />

        {/* Notes */}
        <ProductDetails
          title="Notes"
          description={item.notes ? item.notes.join(", ") : "-"}
        />

        {/* Disclaimer */}
        <div className="border-t border-gray-200 mt-8 pt-3">
          <p className="text-gray-700 text-xs">
            <b>Disclaimer</b>: Please be aware that ingredient lists may change
            or vary from time to time. Please refer to the ingredient list on
            the product package you receive for the most up to date list of
            ingredients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
