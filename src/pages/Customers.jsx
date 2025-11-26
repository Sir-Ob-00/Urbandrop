import React from 'react';
import CustomerHero from '../components/customers/CustomerHero';
import PersonalisedRecommendation from '../components/customers/PersonalisedRecommendation';
import CustomerScenarios from '../components/customers/CustomerScenarios';
import WhatYouCanDo from '../components/customers/WhatYouCanDo';
import UrbandropBenefit from '../components/customers/UrbandropBenefit';
import AppDownloadSection from '../components/customers/AppDownloadSection';

const Customers = () => {
  return (
    <div className="min-h-screen">
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