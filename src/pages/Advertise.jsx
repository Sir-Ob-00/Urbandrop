import React from 'react';
import AdvertiseHero from '../components/advertise/AdvertiseHero';
import AdvertisingOptions from '../components/advertise/AdvertisingOptions';
import PricingPlans from '../components/advertise/PricingPlans';

import SEO from "../components/common/SEO";

const Advertise = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Advertise with Us - Urbandrop"
        description="Bootstrap your brand visibility by advertising on the Urbandrop platform."
        canonical="https://urbandrop.io/advertise"
      />
      <AdvertiseHero />
      <AdvertisingOptions />
      <PricingPlans />
    </div>
  );
};

export default Advertise;
