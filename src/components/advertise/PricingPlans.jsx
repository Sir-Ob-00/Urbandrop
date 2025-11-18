import React from 'react';
import { motion } from 'framer-motion';
import starterImg from '../../assets/images/advertising/Starter.jpg';
import growthImg from '../../assets/images/advertising/Growth.jpg';
import premiumImg from '../../assets/images/advertising/Premium.jpg';

const plans = [
  {
    name: 'Starter',
    image: starterImg,
    features: [
      'Banner placement',
      'Basic targeting options',
      'Performance reports',
    ],
  },
  {
    name: 'Growth',
    image: growthImg,
    features: [
      'Banner + featured listings',
      'Advanced targeting',
      'Real-time analytics',
    ],
  },
  {
    name: 'Premium',
    image: premiumImg,
    features: [
      'Multiple placements',
      'Custom campaign strategy',
      'Dedicated account manager',
    ],
  },
];

const PricingPlans = () => {
  return (
    <div className="relative flex flex-col">
      {plans.map((plan, index) => {
        const isStarter = index === 0;
        const isGrowth = index === 1;
        const isPremium = index === 2;

        return (
          <section key={index} className="h-screen flex">
            <div className={`flex w-full ${isStarter ? 'flex-row' : 'flex-row-reverse'}`}>
              <motion.div
                className="w-1/2 h-screen"
                initial={
                  isStarter ? { y: 400, opacity: 0 } :
                  isGrowth ? { y: -400, opacity: 0 } :
                  { x: -400, opacity: 0 }
                }
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ amount: 0.1 }}
              >
                <img
                  src={plan.image}
                  alt={`${plan.name} plan`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className={`w-1/2 flex flex-col justify-center p-12 text-white ${isStarter ? 'bg-gray-900' : isGrowth ? 'bg-blue-900' : 'bg-green-900'}`}
                initial={
                  isStarter ? { y: 400, opacity: 0 } :
                  isGrowth ? { y: -400, opacity: 0 } :
                  { x: 400, opacity: 0 }
                }
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ amount: 0.1 }}
              >
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-8">
                  {plan.name}
                </h2>
                <ul className="space-y-4 mb-12">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                      className="text-xl md:text-2xl lg:text-3xl"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-10 py-4 rounded-full font-bold text-2xl lg:text-3xl shadow-lg hover:shadow-xl transition-all"
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default PricingPlans;