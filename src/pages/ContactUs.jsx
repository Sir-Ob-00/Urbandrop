import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';

import SEO from "../components/common/SEO";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Contact Us - Urbandrop"
        description="Get in touch with Urbandrop for support, inquiries, or partnerships. We are here to help."
        canonical="https://urbandrop.io/contact-us"
      />
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default ContactUs;