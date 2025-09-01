import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";

import Contact from "./pages/Contact";
import GivingSection from "./pages/Giving";
import LatestTeachings from "./pages/Teachings";
import UpcomingEvents from "./pages/Events";

import GivingDetails from "./pages/GivingDetails";
import PartnerPage from "./pages/PatnerPage";
import PartnerInfoPage from "./pages/PatnerInfoPage";
import PresidentPage from "./pages/President";

// 🔹 ScrollToTop Component
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // ✅ Smooth scrolling
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* ✅ This ensures scrolling on every route change */}
      <ScrollToTop />

      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/president" element={<PresidentPage />} />
            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/giving" element={<GivingSection />} />
            <Route path="/giving/:method" element={<GivingDetails />} />
            <Route path="/teachings" element={<LatestTeachings />} />
            <Route path="/events" element={<UpcomingEvents />} />

            <Route path="/giving/partner" element={<PartnerPage />} />
            <Route path="/giving/partner-info" element={<PartnerInfoPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
