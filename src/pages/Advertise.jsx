import React from 'react';
import AdvertisingOptions from '../components/advertise/AdvertisingOptions';
import AdvertiseProcess from '../components/advertise/AdvertiseProcess';
import PricingPlans from '../components/advertise/PricingPlans';
import AdvertiseCTA from '../components/advertise/AdvertiseCTA';
import AdvertiseFAQ from '../components/advertise/AdvertiseFAQ';

const Advertise = () => {
  return (
    <div className="min-h-screen">
      <AdvertisingOptions />
      <AdvertiseProcess />
      <PricingPlans />
      <AdvertiseCTA />
      <AdvertiseFAQ />
    </div>
  );
};

export default Advertise;
