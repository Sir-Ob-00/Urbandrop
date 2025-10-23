import React from 'react';
import FeaturesHero from '../components/features/FeaturesHero';
import RecipesFeature from '../components/features/RecipesFeature';
import SmartOrdering from '../components/features/SmartOrdering';
import MerchantTools from '../components/features/MerchantTools';
import PersonalizedExperience from '../components/features/PersonalizedExperience';
import SeamlessPayments from '../components/features/SeamlessPayments';
import FeaturesCTA from '../components/features/FeaturesCTA';

const Features = () => {
  return (
    <div className="min-h-screen">
      <FeaturesHero />
      <RecipesFeature />
      <SmartOrdering />
      <MerchantTools />
      <PersonalizedExperience />
      {/* <SeamlessPayments /> */}
     {/*  <FeaturesCTA /> */}
    </div>
  );
};

export default Features;