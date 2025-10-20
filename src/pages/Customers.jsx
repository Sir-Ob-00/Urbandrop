import React from 'react';
import CustomerHero from '../components/customers/CustomerHero';
import CustomerBenefits from '../components/customers/CustomerBenefits';
import CustomerJourney from '../components/customers/CustomerJourney';
import FeaturedProducts from '../components/customers/FeaturedProducts';
import CustomerTestimonials from '../components/customers/CustomerTestimonials';
import AppDownloadSection from '../components/customers/AppDownloadSection';
import CustomerFAQ from '../components/customers/CustomerFAQ';

const Customers = () => {
  return (
    <div className="min-h-screen">
      <CustomerHero />
      <CustomerBenefits />
      <CustomerJourney />
      <FeaturedProducts />
      <CustomerTestimonials />
      <AppDownloadSection />
      <CustomerFAQ />
    </div>
  );
};

export default Customers;