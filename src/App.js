import "./App.css";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ROUTES } from "./routes";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import FaqPage from "./pages/FaqPage";

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
        <Route path={ROUTES.FAQS} element={<FaqPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
