import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Globe, Linkedin, Instagram, Youtube, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setLoading(true);
      try {
        const response = await fetch("https://formsubmit.co/ajax/Info@urbandrop.io", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            _subject: "New Newsletter Subscription from Urbandrop",
            _template: "table"
          })
        });

        if (response.ok) {
          setSubscribed(true);
          setEmail('');
          setTimeout(() => setSubscribed(false), 5000);
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
    { name: t('footer.termsConditions'), href: "/terms-conditions" },
    { name: t('footer.manageCookies'), action: "openCookiePreferences" },
  ];

  const importantLinks = [
    { name: t('footer.about'), href: "/about-us" },
    { name: t('footer.customer'), href: "/customer" },
    { name: t('footer.advertise'), href: "/advertise" },
    { name: t('footer.beMerchant'), href: "/become-merchant" },
  ];

  return (
    <footer className="bg-[#2c4d31] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h2 className="text-4xl font-bold mb-3 text-white">Urbandrop</h2>
          <p className="text-white">
            {t('footer.brandDescription')}
          </p>
        </div>

        {/* Newsletter*/}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">{t('footer.getExclusiveDeals')}</h3>
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
          <h3 className="font-bold text-2xl mb-4 text-white">{t('footer.legalPages')}</h3>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                {link.action ? (
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
          <h3 className="font-bold text-2xl mb-4 text-white">{t('footer.importantLinks')}</h3>
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
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-center sm:text-left">
          <div className="flex items-center gap-2"><Mail size={16} /> Info@urbandrop.io | support@urbandrop.io</div>
          <div className="flex items-center gap-2"><Phone size={16} /> +447466738584</div>
          <div className="flex items-center gap-2"><MapPin size={16} /> London, United Kingdom</div>
        </div>
        © {new Date().getFullYear()} {t('footer.rightsReserved')}
        <div className="text-xs text-white/60">
          {t('footer.companyNumber')}: 16026087
        </div>
      </div>
    </footer>
  );
};

export default Footer;
