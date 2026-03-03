import React, { useState } from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ReportBugModal from '../components/common/ReportBugModal';

import SEO from "../components/common/SEO";

const ContactUs = () => {
  const [isBugModalOpen, setIsBugModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Urbandrop"
        description="Get in touch with Urbandrop for support, inquiries, or partnerships. We are here to help."
        canonical="https://urbandrop.io/contact-us"
      />
      <ContactHero />
      <ContactForm />
      
      {/* Report Bug Button - Fixed position */}
      <button
        onClick={() => setIsBugModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-primary text-white px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2 font-medium"
        aria-label="Report a technical issue"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        Report a Bug
      </button>
      
      <ReportBugModal isOpen={isBugModalOpen} onClose={() => setIsBugModalOpen(false)} />
    </div>
  );
};

export default ContactUs;
