import React from 'react';
import MerchantHero from '../components/merchants/MerchantHero';
import WhyJoin from '../components/merchants/WhyJoin';
import HowItWorks from '../components/merchants/HowItWorks';
import MerchantFeatures from '../components/merchants/MerchantFeatures';
import MerchantCTA from '../components/merchants/MerchantCTA';


const BecomeMerchant = () => {
  return (
    <div>
      <MerchantHero />
      <WhyJoin />
      <HowItWorks />
      <MerchantFeatures />
      <MerchantCTA />
    </div>
  );
};

export default BecomeMerchant;
