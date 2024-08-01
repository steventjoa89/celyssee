import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import BestSellersPage from "./pages/BestSellersPage";
import NewCollectionsPage from "./pages/NewCollectionsPage";
import Footer from "./components/Footer/Footer";
import FaqPage from "./pages/FaqPage";
import ReturnPolicyPage from "./pages/ReturnPolicyPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";

function App() {
  const location = useLocation();

  // Always Scroll to the top
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
        <Route path={ROUTES.FAQS} element={<FaqPage />} />
        <Route path={ROUTES.RETURN_POLICY} element={<ReturnPolicyPage />} />
        <Route
          path={ROUTES.TERM_AND_CONDITIONS}
          element={<TermsAndConditionsPage />}
        />
        <Route path={ROUTES.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
