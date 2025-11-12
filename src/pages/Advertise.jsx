import React from 'react';
import AdvertiseHero from '../components/advertise/AdvertiseHero';
import AdvertisingOptions from '../components/advertise/AdvertisingOptions';
import PricingPlans from '../components/advertise/PricingPlans';
import AdvertiseCTA from '../components/advertise/AdvertiseCTA';
import AdvertiseFAQ from '../components/advertise/AdvertiseFAQ';

const Advertise = () => {
  return (
    <div className="min-h-screen">
      <AdvertiseHero />
      <AdvertisingOptions className="mt-16" />
      <PricingPlans />
      <AdvertiseCTA />
      <AdvertiseFAQ />
    </div>
  );
};

export default Advertise;
