import React from 'react';
import MerchantHero from '../components/merchants/MerchantHero';
import WhyJoin from '../components/merchants/WhyJoin';
import HowItWorks from '../components/merchants/HowItWorks';
import MerchantFeatures from '../components/merchants/MerchantFeatures';
import MerchantCTA from '../components/merchants/MerchantCTA';


import SEO from "../components/common/SEO";

const BecomeMerchant = () => {
  return (
    <div>
      <SEO
        title="Become a Merchant - Urbandrop"
        description="Join Urbandrop as a merchant partner. Expand your reach and grow your business with our delivery network."
        canonical="https://urbandrop.io/become-merchant"
      />
      <MerchantHero />
      <WhyJoin />
      <HowItWorks />
      <MerchantFeatures />
      <MerchantCTA />
    </div>
  );
};

export default BecomeMerchant;
