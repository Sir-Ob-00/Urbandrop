// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SimpleLayout from "../layouts/SimpleLayout";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import BecomeMerchant from "../pages/BecomeMerchant";
import FAQs from "../pages/FAQs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondition from "../pages/TermsCondition";
import Advertise from "../pages/Advertise";
import CookiesPolicy from "../pages/CookiesPolicy";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes using the main header/footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/become-merchant" element={<BecomeMerchant />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsCondition />} />
        <Route path="/cookies-policy" element={<CookiesPolicy />} />
      </Route>

      {/* Routes using a simpler layout (no nav/footer) */}
      <Route element={<SimpleLayout />}>
        {/* Add any pages that need a simple layout here in the future */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
