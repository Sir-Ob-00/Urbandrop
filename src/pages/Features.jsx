import React from 'react';
import FeaturesHero from '../components/features/FeaturesHero';
import PersonalizedExperience from '../components/features/PersonalizedExperience';

const Features = () => {
  return (
    <div className="min-h-screen">
      <FeaturesHero />
      <PersonalizedExperience />
      {/* <SeamlessPayments /> */}
     {/*  <FeaturesCTA /> */}
    </div>
  );
};

export default Features;