import React from 'react';
import CustomerHero from '../components/customers/CustomerHero';
import FeaturedProducts from '../components/customers/FeaturedProducts';
import CustomerTestimonials from '../components/customers/CustomerTestimonials';
import AppDownloadSection from '../components/customers/AppDownloadSection';

const Customers = () => {
  return (
    <div className="min-h-screen">
      <CustomerHero />
      <FeaturedProducts />
      <CustomerTestimonials />
      <AppDownloadSection />
    </div>
  );
};

export default Customers;