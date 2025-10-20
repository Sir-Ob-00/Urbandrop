import React from 'react';
import MerchantHero from '../components/merchants/MerchantHero';
import BenefitsSection from '../components/merchants/BenefitsSection';
import MerchantSteps from '../components/merchants/MerchantSteps';
import TestimonialsSection from '../components/merchants/TestimonialsSection';
import CommissionSection from '../components/merchants/CommissionSection';
import MerchantCTA from '../components/merchants/MerchantCTA';
import MerchantFAQ from '../components/merchants/MerchantFAQ';

const BecomeMerchant = () => {
  return (
    <div className="min-h-screen">
      <MerchantHero />
      <BenefitsSection />
      <MerchantSteps />
      <TestimonialsSection />
      <CommissionSection />
      <MerchantCTA />
      <MerchantFAQ />
    </div>
  );
};

export default BecomeMerchant;
