import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { ROUTES } from "../routes";
import TitleManager from "../components/TitleManager/TitleManager";

function PageNotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <TitleManager title="Page Not Found" />
      <div className="flex items-center justify-center min-h-[58vh] text-center">
        <div className="p-8">
          <h1 className="font-title text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            404
          </h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-700 mb-4">
            Oops! The page you are looking for doesn't exist.
          </p>
          <p className="text-sm lg:text-base text-gray-500">
            You might want to check the URL or return to the homepage.
          </p>
          <div className="mt-6">
            <Button onClick={() => navigate(ROUTES.HOME)}>
              Go to Home Page
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFoundPage;
