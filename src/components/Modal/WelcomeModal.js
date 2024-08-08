import React from "react";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

function WelcomeModal({ image, isWelcomeModalOpen, closeWelcomeModal }) {
  return (
    <Modal
      open={isWelcomeModalOpen}
      onClose={closeWelcomeModal}
      aria-labelledby="Promotion"
      aria-describedby="Promotion"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[66vw] h-[55vh] rounded-xl bg-gradient-to-br from-white via-white to-[#f8edd9] bg-fixed bg-cover bg-no-repeat shadow-lg flex flex-col md:flex-row focus:outline-none">
        {/* Close Icon */}
        <button
          onClick={closeWelcomeModal}
          className="absolute top-3 right-3 p-2 rounded-full"
        >
          <CloseIcon />
        </button>

        {/* Left Panel - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={`${process.env.PUBLIC_URL}/images/modal/${image}`}
            alt="Promotion"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

        {/* Right Panel - Text */}
        <div className="w-full md:w-1/2 flex flex-col p-6 overflow-y-auto">
          <div className="flex-grow px-5 mt-16 space-y-3 sm:space-y-5 text-gray-600">
            <h2 className="font-title text-3xl md:text-2xl lg:text-3xl font-bold text-black">
              Enjoy 30% Off!
            </h2>
            <h3 className="font-title text-xl md:text-lg lg:text-xl">
              Welcome <b>Celyssians</b>,
            </h3>
            <p className="text-base md:text-sm lg:text-base">
              To celebrate our soft opening, we're offering an exclusive 30%
              discount on all products. Don't miss out on this limited-time
              promotion.
            </p>
          </div>

          <div className="mt-6 px-5 py-4">
            <button
              className="w-full px-5 py-2 text-lg text-black underline underline-offset-2 cursor-pointer"
              onClick={closeWelcomeModal}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default WelcomeModal;
