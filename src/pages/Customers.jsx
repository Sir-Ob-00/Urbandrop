import React from 'react';
import CustomerHero from '../components/customers/CustomerHero';
import PersonalisedRecommendation from '../components/customers/PersonalisedRecommendation';
import CustomerScenarios from '../components/customers/CustomerScenarios';
import WhatYouCanDo from '../components/customers/WhatYouCanDo';
import UrbandropBenefit from '../components/customers/UrbandropBenefit';
import AppDownloadSection from '../components/customers/AppDownloadSection';

import SEO from "../components/common/SEO";

const Customers = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="For Customers - Urbandrop"
        description="Experience convenient, fast, and reliable delivery with Urbandrop. Shop from your favorite local stores."
        canonical="https://urbandrop.io/customer"
      />
      <CustomerHero />
      <PersonalisedRecommendation />
      <CustomerScenarios />
      <WhatYouCanDo />
      <UrbandropBenefit />
      <AppDownloadSection />
    </div>
  );
};

export default Customers;