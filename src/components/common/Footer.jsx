import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Cookies Policy", href: "/cookies-policy" },
    { name: "Terms & Conditions", href: "/terms-conditions" },
    { name: "FAQs", href: "/faqs" },
  ];

  const importantLinks = [
    { name: "Be a Merchant", href: "/become-merchant" },
    { name: "Advertise on Urbandrop", href: "/advertise" },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#146d15] to-[#173a36] text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h2 className="text-4xl font-bold mb-3 text-white">Urbandrop</h2>
          <p className="text-white">
            Your trusted online recipe and grocery marketplace — connecting UK customers to local merchants.
          </p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">Get Exclusive deals</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white text-black placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5CB35E8C]"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#257a278c] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#257a278c] transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Legal Pages */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">Legal pages</h3>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-bold text-2xl mb-4 text-white">Important links</h3>
          <ul className="space-y-2">
            {importantLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-primary transition">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Secondary Footer */}
      <div className="max-w-7xl mx-auto border-t border-white mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm">
          <div className="flex items-center gap-2"><Mail size={16} /> support@urbandrop.com</div>
          <div className="flex items-center gap-2"><Phone size={16} /> +44 20 1234 5678</div>
          <div className="flex items-center gap-2"><MapPin size={16} /> London, United Kingdom</div>
        </div>
        © {new Date().getFullYear()} Urbandrop Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
