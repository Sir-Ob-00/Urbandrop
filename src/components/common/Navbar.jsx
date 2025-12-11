import React, { useState } from "react";
import logo from "../../assets/images/urbandropLogo.png";
import { Menu, X, Instagram, Globe, Youtube, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
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
            <a href="mailto:info@urbandrop.io" className="hover:underline">info@urbandrop.io</a>
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
          </div>

          <div className="flex items-center gap-3">
            <Globe size={16} className="text-[#5CB35E]" />
            <select
              className="bg-transparent text-[#5CB35E] focus:outline-none"
              onChange={changeLanguage}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="hi">Hindu</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              <option value="zh">Mandarin</option>
              <option value="nl">Dutch</option>
              <option value="it">Italian</option>
              <option value="sw">Swahili</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Urbandrop Logo" className={`h-8 w-auto ${isTop}`} />
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            const isHovered = hovered === link.name;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative inline-block focus:outline-none overflow-hidden px-1 ${isTop ? 'text-dark' : 'text-dark'}`}
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
                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-dark relative inline-block focus:outline-none overflow-hidden px-1"
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
                    <option value="hi">Hindu</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="es">Spanish</option>
                    <option value="zh">Mandarin</option>
                    <option value="nl">Dutch</option>
                    <option value="it">Italian</option>
                    <option value="sw">Swahili</option>
                    <option value="ar">Arabic</option>
                  </select>
                </div>
              </li>
              <li className="w-full flex justify-center">
                <a
                  href="/#launch-countdown"
                  className="bg-[#5CB35E] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#4a954d] transition w-11/12 text-center"
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
