import React from 'react';
import AdvertiseHero from '../components/advertise/AdvertiseHero';
import AdvertisingOptions from '../components/advertise/AdvertisingOptions';
import PricingPlans from '../components/advertise/PricingPlans';

const Advertise = () => {
  return (
    <div className="min-h-screen">
      <AdvertiseHero />
      <AdvertisingOptions/>
      <PricingPlans />
    </div>
  );
};

export default Advertise;
