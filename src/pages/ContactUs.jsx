import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <MapSection />
    </div>
  );
};

export default ContactUs;