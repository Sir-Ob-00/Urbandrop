import React from 'react';
import AdvertiseHero from '../components/advertise/AdvertiseHero';
import AdvertisingOptions from '../components/advertise/AdvertisingOptions';
import PricingPlans from '../components/advertise/PricingPlans';
import AdvertiseCTA from '../components/advertise/AdvertiseCTA';

const Advertise = () => {
  return (
    <div className="min-h-screen">
      <AdvertiseHero />
      <AdvertisingOptions/>
      <PricingPlans />
      <AdvertiseCTA />
    </div>
  );
};

export default Advertise;
