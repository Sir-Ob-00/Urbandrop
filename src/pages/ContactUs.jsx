import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactOptions from '../components/contact/ContactOptions';
import ContactForm from '../components/contact/ContactForm';
import MapSection from '../components/contact/MapSection';
import ContactCTA from '../components/contact/ContactCTA';

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactOptions />
      <ContactForm />
      <MapSection />
      <ContactCTA />
    </div>
  );
};

export default ContactUs;