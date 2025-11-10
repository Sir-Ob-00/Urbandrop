import React from 'react';
import MerchantHero from '../components/merchants/MerchantHero';
import BenefitsSection from '../components/merchants/BenefitsSection';
import MerchantSteps from '../components/merchants/MerchantSteps';
import CommissionSection from '../components/merchants/CommissionSection';
import MerchantCTA from '../components/merchants/MerchantCTA';


const BecomeMerchant = () => {
  return (
    <div className="min-h-screen">
      <MerchantHero />
      <MerchantSteps />
      <CommissionSection />
      <MerchantCTA />
    </div>
  );
};

export default BecomeMerchant;
