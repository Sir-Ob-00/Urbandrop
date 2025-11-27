// src/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CookieConsent from "../components/common/CookieConsent";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f2f5f9] text-dark font-sans">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Renders the page */}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default MainLayout;
