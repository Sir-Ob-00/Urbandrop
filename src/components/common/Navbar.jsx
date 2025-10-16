import React, { useState } from "react";
import logo from "../../assets/images/urbandrop logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Become a Merchant", href: "/become-merchant" },
    { name: "FAQs", href: "/faqs" },
    { name: "Advertise", href: "/advertise" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
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
              className="text-dark relative inline-block focus:outline-none"
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(link.name)}
              onBlur={() => setHovered(null)}
            >
              <span className="relative z-10 transition-colors duration-200">{link.name}</span>
              {/* Underline: transition width from 0 to full for better cross-environment reliability */}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-200 ${hovered === link.name ? 'w-full' : 'w-0'}`}
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href="/become-merchant"
            className="bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-dark transition"
          >
            Join as Merchant
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
                    className="text-dark relative inline-block focus:outline-none"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHovered(link.name)}
                    onMouseLeave={() => setHovered(null)}
                    onFocus={() => setHovered(link.name)}
                    onBlur={() => setHovered(null)}
                  >
                    <span className="relative z-10 transition-colors duration-200">{link.name}</span>
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-200 ${hovered === link.name ? 'w-full' : 'w-0'}`}
                      aria-hidden="true"
                    />
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
