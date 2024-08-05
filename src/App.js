import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import BestSellersPage from "./pages/BestSellersPage";
import NewCollectionsPage from "./pages/NewCollectionsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import FaqPage from "./pages/FaqPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import Footer from "./components/Footer/Footer";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import AboutUsPage from "./pages/AboutUsPage";
// TODO: NPRogressBar
// import NProgress from "nprogress";
// import "nprogress/nprogress.css"; // Import the NProgress styles

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exatch path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.BEST_SELLERS} element={<BestSellersPage />} />
        <Route path={ROUTES.NEW_COLLECTIONS} element={<NewCollectionsPage />} />
        <Route
          path={ROUTES.PRODUCT_DETAILS(":id")}
          element={<ProductDetailsPage />}
        />
        <Route path={ROUTES.FAQS} element={<FaqPage />} />
        <Route path={ROUTES.RETURN_POLICY} element={<ReturnPolicyPage />} />
        <Route path={ROUTES.ABOUT_US} element={<AboutUsPage />} />
        <Route
          path={ROUTES.TERM_AND_CONDITIONS}
          element={<TermsAndConditionsPage />}
        />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
        {/* Catch-all route for undefined pages */}
        <Route path="*" element={<PageNotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
