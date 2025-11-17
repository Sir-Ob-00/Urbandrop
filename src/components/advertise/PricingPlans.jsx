import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import image from '../../assets/images/advertising/friends-laughing-using-mobiles 2.png';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Starter',
    gradient: 'bg-gradient-to-r from-green-500 to-green-700',
    features: [
      'Banner placement',
      'Basic targeting options',
      'Performance reports',
    ],
  },
  {
    name: 'Growth',
    gradient: 'bg-gradient-to-r from-yellow-500 to-yellow-700',
    features: [
      'Banner + featured listings',
      'Advanced targeting',
      'Real-time analytics',
    ],
  },
  {
    name: 'Premium',
    gradient: 'bg-gradient-to-r from-[#2d4d31] to-[#2d4d31]',
    textColor: 'text-gray-800',
    features: [
      'Multiple placements',
      'Custom campaign strategy',
      'Dedicated account manager',
    ],
  },
];

const PricingPlans = () => {
  const containerRef = useRef();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.plan-section').forEach((section, i) => {
        // Parallax effect on background
        gsap.to(section.querySelector('.bg-element'), {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });

      // Pin the image for the first two plans
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: () => "+=" + (2 * window.innerHeight),
        pin: '.image-container',
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col lg:flex-row overflow-hidden">
      <div className="image-container absolute top-0 w-full h-1/2 lg:right-0 lg:h-screen lg:w-1/2 z-10">
        <img src={image} alt="Friends laughing using mobiles" className="w-full h-full object-cover" />
      </div>
      <div className="lg:w-1/2 w-full order-2 lg:order-1">
        {plans.map((plan, index) => (
          <section key={index} className={`plan-section h-screen flex items-center relative overflow-hidden ${isDesktop ? plan.gradient : 'bg-transparent'}`}>
            {/* Decorative Background Elements */}
            <div className="bg-element absolute inset-0 opacity-20 hidden lg:block">
              <div className={`absolute top-20 left-20 w-32 h-32 border-4 ${plan.textColor ? 'border-gray-300' : 'border-white/30'} rounded-full`}></div>
              <div className={`absolute bottom-20 right-20 w-24 h-24 border-4 ${plan.textColor ? 'border-gray-200' : 'border-white/20'} rounded-full`}></div>
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 ${plan.textColor ? 'border-gray-100' : 'border-white/10'} rounded-full`}></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className={`text-center lg:text-left text-white lg:${plan.textColor || 'text-white'} max-w-lg bg-black/70 lg:bg-transparent rounded-lg p-4 lg:p-0`}
              >
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-black leading-tight mb-8 drop-shadow-lg">
                  {plan.name}
                </h2>
                <ul className="space-y-4 mb-12 text-center lg:text-left">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className={`text-xl md:text-2xl lg:text-3xl drop-shadow-lg ${plan.textColor ? plan.textColor + '/90' : 'text-white/90'}`}
                    >
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: plan.textColor ? '0 0 20px rgba(0,0,0,0.3)' : '0 0 20px rgba(255,255,255,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className={`${plan.name === 'Premium' ? 'bg-white text-black' : 'bg-white text-black'} lg:${plan.name === 'Premium' ? 'bg-white text-gray-800' : plan.textColor ? 'bg-black text-white' : 'bg-white text-gray-800'} px-10 py-4 rounded-full font-bold text-2xl lg:text-3xl shadow-lg hover:shadow-xl transition-all`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;