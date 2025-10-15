import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-primary">Urbandrop</h2>
          <p className="text-gray-300">
            Your trusted online recipe and grocery marketplace — connecting UK
            customers to local merchants.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about-us" className="hover:text-primary transition">About Us</a></li>
            <li><a href="/faqs" className="hover:text-primary transition">FAQs</a></li>
            <li><a href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</a></li>
            <li><a href="/terms-conditions" className="hover:text-primary transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* For Merchants */}
        <div>
          <h3 className="font-semibold mb-3 text-white">For Merchants</h3>
          <ul className="space-y-2">
            <li><a href="/become-merchant" className="hover:text-primary transition">Become a Merchant</a></li>
            <li><a href="/advertise" className="hover:text-primary transition">Advertise on Urbandrop</a></li>
            <li><a href="#" className="hover:text-primary transition">Download Merchant App</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-white">Contact Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@urbandrop.co.uk
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +44 20 1234 5678
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> London, United Kingdom
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Urbandrop Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
