import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import starterImg from '../../assets/images/advertising/Starter.jpg';
import growthImg from '../../assets/images/advertising/Growth.jpg';
import premiumImg from '../../assets/images/advertising/Premium.jpg';

const PricingPlans = () => {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('advertise.pricing.starter.name'),
      image: starterImg,
      features: t('advertise.pricing.starter.features', { returnObjects: true }),
    },
    {
      name: t('advertise.pricing.growth.name'),
      image: growthImg,
      features: t('advertise.pricing.growth.features', { returnObjects: true }),
    },
    {
      name: t('advertise.pricing.premium.name'),
      image: premiumImg,
      features: t('advertise.pricing.premium.features', { returnObjects: true }),
    },
  ];

  return (
    <div className="relative flex flex-col">
      {plans.map((plan, index) => {
        const isStarter = index === 0;
        const isGrowth = index === 1;
        const isPremium = index === 2;

        return (
          <section key={index} className="md:min-h-screen flex">
            <div className={`flex flex-col md:flex-row w-full ${isStarter ? '' : 'md:flex-row-reverse'}`}>
              <motion.div
                className="w-full md:w-1/2 h-64 md:h-screen"
                initial={
                  isStarter ? { y: 400, opacity: 0 } :
                    isGrowth ? { y: -400, opacity: 0 } :
                      { y: 400, opacity: 0 }
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
                className={`w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 text-white ${isStarter ? 'bg-gray-900' : isGrowth ? 'bg-blue-900' : 'bg-green-900'}`}
                initial={
                  isStarter ? { y: 400, opacity: 0 } :
                    isGrowth ? { y: -400, opacity: 0 } :
                      { y: 400, opacity: 0 }
                }
                whileInView={{ y: 0, x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ amount: 0.1 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black leading-tight mb-6 md:mb-8">
                  {plan.name}
                </h2>
                <ul className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 + 0.6 }}
                      viewport={{ once: true }}
                      className="text-lg md:text-xl lg:text-2xl xl:text-3xl"
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-black px-8 md:px-10 py-3 md:py-4 rounded-full font-bold text-xl md:text-2xl lg:text-3xl shadow-lg hover:shadow-xl transition-all"
                >
                  {t('advertise.pricing.getStarted')}
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