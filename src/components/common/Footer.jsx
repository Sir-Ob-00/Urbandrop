import React, { useState, Fragment } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Globe, Linkedin, Instagram, Youtube, Mail, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";
import ReportBugModal from "./ReportBugModal";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isBugModalOpen, setIsBugModalOpen] = useState(false);

  const handleSubscribe = async (e) => {
  e.preventDefault();
  if (email && email.includes('@')) {
    setLoading(true);
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
      const apiKey = import.meta.env.VITE_API_KEY;

      const response = await fetch(`${apiBaseUrl}/newsletter/subscribe`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'x-api-key': apiKey, // ✅ REQUIRED
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail('');
        setTimeout(() => setSubscribed(false), 5000);
      } else {
        console.error("Failed:", response.status);
      }
    } catch (error) {
      console.error("Newsletter subscription error:", error);
    } finally {
      setLoading(false);
    }
  }
};

  const legalLinks = [
    { name: t('footer.privacyPolicy'), href: "/privacy-policy" },
    { name: t('footer.cookiesPolicy'), href: "/cookies-policy" },
    { name: t('footer.termsConditions'), href: "/terms-and-conditions" },
    { name: t('footer.manageCookies'), action: "openCookiePreferences" },
    { name: 'Report a Bug', action: 'reportBug' },
  ];

  const importantLinks = [
    { name: t('footer.about'), href: "/about-us" },
    { name: t('footer.customer'), href: "/customer" },
    { name: t('footer.advertise'), href: "/advertise" },
    { name: t('footer.beMerchant'), href: "/become-merchant" },
    { name: "Join Beta", href: "/beta" },
  ];

  return (
    <Fragment>
    <footer className="bg-[#2c4d31] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h2 className="mb-3 text-white">
            <span className="text-5xl inline">U</span>
            <span className="inline">rban</span>
            <span className="text-5xl inline">D</span>
            <span className="inline">rop</span>
            <span className="text-sm align-super">®</span>
          </h2>
          <p className="text-white">
            {t('footer.brandDescription')}
          </p>
        </div>


        <div>
          <h4 className="text-white mb-4">{t('footer.getExclusiveDeals')}</h4>
          <div className="relative">
            {subscribed ? (
              <div className="bg-[#5CB35E]/20 text-[#5CB35E] px-4 py-3 rounded-md font-medium text-center">
                {t('footer.thanksForSubscribing')}
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.enterEmail')}
                  className="w-full bg-white text-black placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5CB35E8C]"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#257a278c] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#257a278c] transition-colors disabled:opacity-70"
                >
                  {loading ? '...' : t('footer.subscribe')}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Legal Pages */}
        <div>
          <h4 className="text-white mb-4">{t('footer.legalPages')}</h4>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                {link.action === 'reportBug' ? (
                  <button
                    onClick={() => setIsBugModalOpen(true)}
                    className="hover:text-[#5CB35E] transition text-left"
                  >
                    {link.name}
                  </button>
                ) : link.action ? (
                  <button
                    onClick={() => window.dispatchEvent(new Event(link.action))}
                    className="hover:text-[#5CB35E] transition text-left"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className={`${location.pathname === link.href ? 'text-[#5CB35E] font-medium' : 'hover:text-[#5CB35E] transition'}`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-white mb-4">{t('footer.importantLinks')}</h4>
          <ul className="space-y-2">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  onClick={() => window.scrollTo(0, 0)}
                  className={`${location.pathname === link.href ? 'text-[#5CB35E] font-medium' : 'hover:text-[#5CB35E] transition'}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Secondary Footer */}
      <div className="max-w-7xl mx-auto border-t border-white mt-12 pt-8 flex flex-col items-center gap-6 text-white">
        {/* Social Media Icons - Mobile Only */}
        <div className="md:hidden flex items-center gap-6">
          <a href="https://www.instagram.com/urbandrop.io?igsh=MTBsbXVsdjR6dzNocw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://youtube.com/@urbandropgroup?si=gDd_BU7TLc3NJOzO" target="_blank" rel="noopener noreferrer">
            <Youtube size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://www.linkedin.com/company/108883908/admin/dashboard/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://www.facebook.com/urbandropgroupltd" target="_blank" rel="noopener noreferrer">
            <Facebook size={20} className="text-white/80 hover:text-white cursor-pointer transition-colors" />
          </a>
          <a href="https://www.tiktok.com/@urbanrecipe?_r=1&_t=ZN-952wO10Niwp" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white/80 hover:text-white cursor-pointer transition-colors"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-center sm:text-left">
          <a href="mailto:support@urbandrop.io" className="flex items-center gap-2"><Mail size={16} />support@urbandrop.io</a>
          <a
            href="https://wa.me/447466738584?text=Hi%20UrbanDrop%2C%20I%E2%80%99d%20like%20to%20learn%20more%20about%20your%20services.%20Could%20you%20assist%20me%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Phone size={16} /> +447466738584
          </a>
          <div className="flex items-center gap-2"><MapPin size={16} /> London, United Kingdom</div>
        </div>
        © {new Date().getFullYear()} {t('footer.rightsReserved')}
        <div className="text-xs text-white/60">
          {t('footer.companyNumber')}: 16026087
        </div>
      </div>
    </footer>
    <ReportBugModal isOpen={isBugModalOpen} onClose={() => setIsBugModalOpen(false)} />
    </Fragment>
  );
};

export default Footer;
