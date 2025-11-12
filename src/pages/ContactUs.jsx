import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
    </div>
  );
};

export default ContactUs;