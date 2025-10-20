import React from 'react';
import AdvertiseHero from '../components/advertise/AdvertiseHero';
import WhyAdvertise from '../components/advertise/WhyAdvertise';
import AdvertisingOptions from '../components/advertise/AdvertisingOptions';
import AdvertiseProcess from '../components/advertise/AdvertiseProcess';
import SuccessStories from '../components/advertise/SuccessStories';
import PricingPlans from '../components/advertise/PricingPlans';
import AdvertiseCTA from '../components/advertise/AdvertiseCTA';
import AdvertiseFAQ from '../components/advertise/AdvertiseFAQ';

const Advertise = () => {
  return (
    <div className="min-h-screen">
      <AdvertiseHero />
      <WhyAdvertise />
      <AdvertisingOptions />
      <AdvertiseProcess />
      <SuccessStories />
      <PricingPlans />
      <AdvertiseCTA />
      <AdvertiseFAQ />
    </div>
  );
};

export default Advertise;
