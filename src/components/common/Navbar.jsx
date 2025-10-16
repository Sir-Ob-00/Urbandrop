import React, { useState } from "react";
import logo from "../../assets/images/urbandrop logo.png";
import { Menu, X, Facebook, Twitter, Instagram, ShoppingCart, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "Features", href: "/features" },
    { name: "Customer", href: "/customers" },
    { name: "Advertise", href: "/advertise" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-[#e6ece6] text-[#5CB35E] text-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          <div className="flex items-center gap-3">
            <span className="font-medium">Find location</span>
            <span className="text-gray-500">|</span>
            <a href="mailto:info@urbandrop.com" className="hover:underline">info@urbandrop.com</a>
          </div>

          <div className="flex items-center gap-4">
            <Facebook size={16} className="text-[#5CB35E]" />
            <Twitter size={16} className="text-[#5CB35E]" />
            <Instagram size={16} className="text-[#5CB35E]" />
            <ShoppingCart size={16} className="text-[#5CB35E]" />
          </div>

          <div className="flex items-center gap-3">
            <Globe size={16} className="text-[#5CB35E]" />
            <select className="bg-transparent text-[#5CB35E] focus:outline-none">
              <option>English</option>
              <option>Bangla</option>
              <option>French</option>
              <option>Spanish</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Urbandrop Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark relative inline-block focus:outline-none overflow-hidden px-1"
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(link.name)}
              onBlur={() => setHovered(null)}
            >
              {/* Sliding highlight behind the text */}
              <span
                className={`absolute inset-0 left-0 bg-[#5CB35E] transition-all duration-200 transform origin-left ${hovered === link.name ? 'w-full' : 'w-0'}`}
                aria-hidden="true"
              />
              <span className={`relative z-10 transition-colors duration-200 ${hovered === link.name ? 'text-white' : ''}`}>{link.name}</span>
            </a>
          ))}
          <a
            href="/get-the-app"
            className="bg-[#5CB35E] text-white px-5 py-2 rounded-lg font-medium hover:bg-[#4a954d] transition"
          >
            Get The App
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-dark"
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
            className="bg-white border-t border-gray-100 md:hidden overflow-hidden"
          >
            <ul className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-dark relative inline-block focus:outline-none overflow-hidden px-1"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHovered(link.name)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(link.name)}
                    onBlur={() => setHovered(null)}
                  >
                    <span
                      className={`absolute inset-0 left-0 bg-[#5CB35E] transition-all duration-200 transform origin-left ${hovered === link.name ? 'w-full' : 'w-0'}`}
                      aria-hidden="true"
                    />
                    <span className={`relative z-10 transition-colors duration-200 ${hovered === link.name ? 'text-white' : ''}`}>{link.name}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/become-merchant"
                  className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-dark transition"
                  onClick={() => setIsOpen(false)}
                >
                  Join as Merchant
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
