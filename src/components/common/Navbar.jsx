import React, { useState } from "react";
import logo from "../../assets/images/urbandropLogo.png";
import { Menu, X, Instagram, Globe, Youtube, Linkedin, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const [isTop, setIsTop] = useState(true);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // listen to scroll to toggle header styles
  React.useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navLinks = [
    { name: t('navbar.home'), href: "/" },
    { name: t('navbar.aboutUs'), href: "/about-us" },
    { name: t('navbar.customer'), href: "/customer" },
    { name: t('navbar.merchant'), href: "/become-merchant" },
    { name: t('navbar.contactUs'), href: "/contact-us" },
  ];

  return (
    <header className={`${isTop ? 'bg-[#f2f5f9]/95 backdrop-blur-sm' : 'bg-white shadow-sm'} fixed top-0 left-0 right-0 z-50 transition-all duration-200`}>
      {/* Top info bar (hidden at top) */}
      <div className={`${isTop ? 'hidden bg-[#e6ece6]' : 'bg-[#e6ece6]'} text-[#5CB35E] text-sm transition-all duration-200 hidden lg:block`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-3">
            <span className="font-medium">{t('navbar.findLocation')}</span>
            <span className="text-gray-500">|</span>
            <a href="mailto:support@urbandrop.io" className="hover:underline">support@urbandrop.io</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/urbandrop.io?igsh=MTBsbXVsdjR6dzNocw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Instagram size={16} className="text-[#5CB35E]" />
            </a>
            <a href="https://youtube.com/@urbandropgroup?si=gDd_BU7TLc3NJOzO" target="_blank" rel="noopener noreferrer">
              <Youtube size={16} className="text-[#5CB35E]" />
            </a>
            <a href="https://www.linkedin.com/company/108883908/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} className="text-[#5CB35E]" />
            </a>
            <a href="https://www.facebook.com/urbandropgroupltd" target="_blank" rel="noopener noreferrer">
              <Facebook size={16} className="text-[#5CB35E]" />
            </a>
            <a href="https://www.tiktok.com/@urbanrecipe?_r=1&_t=ZN-952wO10Niwp" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#5CB35E]"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Globe size={16} className="text-[#5CB35E]" />
            <select
              className="bg-transparent text-[#5CB35E] focus:outline-none"
              onChange={changeLanguage}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="zh">Mandarin</option>
              <option value="nl">Dutch</option>
              <option value="it">Italian</option>
              <option value="sw">Swahili</option>
              <option value="ar">Arabic</option>
              <option value="tw">Twi</option>
              <option value="yo">Yoruba</option>
              <option value="af">Afrikaans</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Urbandrop™ Logo" className={`h-8 w-auto ${isTop}`} />
          <span className="text-sm align-super">®</span>
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const isHovered = hovered === link.name;
            
            if (link.isCTA) {
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="bg-gradient-to-r from-green-500 to-[#5CB35E] text-white px-4 py-1.5 rounded-lg font-bold font-heading text-sm xl:text-base shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5 ml-2 border border-green-400 whitespace-nowrap"
                >
                  {link.name}
                </Link>
              );
            }
            
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative inline-block focus:outline-none overflow-hidden px-2 xl:px-3 py-1 font-heading text-sm xl:text-base whitespace-nowrap ${isTop ? 'text-dark' : 'text-dark'}`}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(link.name)}
                onBlur={() => setHovered(null)}
              >
                {/* Sliding highlight behind the text */}
                <span
                  className={`absolute inset-0 left-0 bg-[#5CB35E] transition-all rounded-lg duration-200 transform origin-left ${isHovered || isActive ? 'w-full' : 'w-0'}`}
                  aria-hidden="true"
                />
                <span className={`relative z-10 transition-colors duration-200 ${isHovered || isActive ? 'text-white' : ''}`}>{link.name}</span>
              </a>
            )
          })}
        </nav>

        {/* Get The App Button */}
        <a
          href="/#launch-countdown"
          className="bg-[#5CB35E] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#4a954d] transition hidden lg:block"
        >
          {t('navbar.getTheApp')}
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-dark"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-white border-t border-gray-100 lg:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                const isHovered = hovered === link.name;
                
                if (link.isCTA) {
                  return (
                    <li key={link.name} className="w-full flex justify-center pb-2">
                      <Link
                        to={link.href}
                        className="bg-gradient-to-r from-green-500 to-[#5CB35E] text-white px-6 py-2 rounded-lg font-bold font-heading shadow hover:shadow-md transition w-[200px] text-center border border-green-400"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                }
                
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark font-heading relative inline-block focus:outline-none overflow-hidden px-3 py-1"
                      onClick={() => setIsOpen(false)}
                      onMouseEnter={() => setHovered(link.name)}
                      onMouseLeave={() => setHovered(null)}
                      onTouchStart={() => setHovered(link.name)}
                      onTouchEnd={() => setHovered(null)}
                      onFocus={() => setHovered(link.name)}
                      onBlur={() => setHovered(null)}
                    >
                      <span
                        className={`absolute inset-0 left-0 bg-[#5CB35E] transition-all rounded-lg duration-200 transform origin-left ${isHovered || isActive ? 'w-full' : 'w-0'}`}
                        aria-hidden="true"
                      />
                      <span className={`relative z-10 transition-colors duration-200 ${isHovered || isActive ? 'text-white' : ''}`}>{link.name}</span>
                    </a>
                  </li>
                )
              })}
              <li className="w-full flex justify-center pb-4">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                  <Globe size={16} className="text-[#5CB35E]" />
                  <select
                    className="bg-transparent text-[#5CB35E] focus:outline-none text-sm"
                    onChange={changeLanguage}
                    value={i18n.language}
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                    <option value="zh">Mandarin</option>
                    <option value="nl">Dutch</option>
                    <option value="it">Italian</option>
                    <option value="sw">Swahili</option>
                    <option value="ar">Arabic</option>
                    <option value="tw">Twi</option>
                    <option value="yo">Yoruba</option>
                    <option value="af">Afrikaans</option>
                  </select>
                </div>
              </li>
              <li className="w-full flex justify-center">
                <a
                  href="/#launch-countdown"
                  className="bg-[#5CB35E] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#4a954d] transition w-[200px] text-center"
                  onClick={() => setIsOpen(false)}
                >
                  {t('navbar.getTheApp')}
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
