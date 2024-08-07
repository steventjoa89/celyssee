import React, { useState } from "react";
import { HOME_EMAIL_SUBSCRIPTION_IMAGE } from "../../data/settings";

function EmailSubscription() {
  const [emailSubscriptionText, setEmailSubscriptionText] = useState("");

  const handleEmailSubscriptionTextChange = (event) => {
    setEmailSubscriptionText(event.target.value);
  };

  const handleEmailSubscriptionTextKeyDown = (event) => {
    if (emailSubscriptionText !== "") {
      if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault();
        setEmailSubscriptionText(""); // TODO: check email text format validation, subscribe the user, make animation successful
      }
    }
  };

  return (
    <div className="my-8 mx-8 sm:mx-10 md:mx-12 lg:mx-14 xl:mx-16">
      <div className="flex flex-col md:flex-row">
        {/* Left Panel - Subscription */}
        <div className="flex-1 bg-[#fcf7ed] flex flex-col justify-center items-center p-6 xs:p-8 md:p-10 lg:p-12 xl:p-14">
          <h2 className="font-title text-2xl lg:text-3xl mb-4">
            Be the first to know
          </h2>
          <p className="mb-6 text-sm md:text-base text-gray-500">
            Explore our latest updates, featuring exclusive product launches,
            limited-edition collections, and curated gift inspirations.
          </p>
          <input
            type="email"
            value={emailSubscriptionText}
            onChange={handleEmailSubscriptionTextChange}
            onKeyDown={handleEmailSubscriptionTextKeyDown}
            placeholder="Email"
            className="w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[28vw] mb-6 border-0 border-b border-gray-300 p-2 bg-transparent focus:outline-none focus:border-black placeholder:text-xs md:placeholder:text-sm"
          />
        </div>

        {/* Right Panel - Image */}
        <div className="hidden md:block md:flex-shrink-0 w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/banner/${HOME_EMAIL_SUBSCRIPTION_IMAGE}`}
            alt="Promotional"
            className="max-h-[40vh] w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default EmailSubscription;
