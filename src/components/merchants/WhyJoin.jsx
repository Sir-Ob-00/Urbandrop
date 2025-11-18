import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bg1 from '../../assets/images/merchants/list-products.jpg';
import bg2 from '../../assets/images/merchants/receive-fulfill.jpg';
import bg3 from '../../assets/images/merchants/deliver-earn.jpg';
import bg4 from '../../assets/images/merchants/merchant-signup.jpg';
import preview1 from '../../assets/images/merchants/deliver-earn.jpg';
import preview2 from '../../assets/images/merchants/merchant-signup.jpg';
import preview3 from '../../assets/images/merchants/list-products.jpg';
import preview4 from '../../assets/images/merchants/receive-fulfill.jpg';

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    bgImage: '/src/assets/images/merchants/list-products.jpg',
    accentColor: '#00b36b',
    title: 'Expand Your Reach',
    subtitle: 'Connect with thousands of customers across different regions.',
    badge: 'Popular',
    cta: 'Get Started',
    previewImage: '/src/assets/images/merchants/deliver-earn.jpg',
  },
  {
    bgImage: '/src/assets/images/merchants/receive-fulfill.jpg',
    accentColor: '#ff6b6b',
    title: 'Increase Sales',
    subtitle: 'Boost your revenue with our platform\'s wide user base.',
    badge: 'Trending',
    cta: 'Join Now',
    previewImage: '/src/assets/images/merchants/merchant-signup.jpg',
  },
  {
    bgImage: '/src/assets/images/merchants/deliver-earn.jpg',
    accentColor: '#4ecdc4',
    title: 'Easy Management',
    subtitle: 'Manage your store effortlessly with our intuitive tools.',
    badge: 'Simple',
    cta: 'Start Today',
    previewImage: '/src/assets/images/merchants/list-products.jpg',
  },
  {
    bgImage: '/src/assets/images/merchants/merchant-signup.jpg',
    accentColor: '#f9ca24',
    title: 'Community Support',
    subtitle: 'Join a community of successful merchants and get support.',
    badge: 'Community',
    cta: 'Become Part',
    previewImage: '/src/assets/images/merchants/receive-fulfill.jpg',
  },
];

const WhyJoin = () => {
  const containerRef = useRef();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXVal = (y - centerY) / centerY * -10;
    const rotateYVal = (x - centerX) / centerX * 10;
    setRotateX(rotateXVal);
    setRotateY(rotateYVal);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.panel-bg').forEach((bg) => {
        gsap.to(bg, {
          yPercent: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: bg.parentElement,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative">
      <div className="py-20 bg-gray-900 text-white text-center">
        <motion.h2
          className="text-5xl md:text-7xl font-black"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          WHY JOIN US
        </motion.h2>
      </div>
      {panels.map((panel, index) => {
        let initialAnim = {};
        if (index === 0) initialAnim = { y: -100 };
        else if (index === 1) initialAnim = { y: 100 };
        else if (index === 2) initialAnim = { x: -100 };
        else initialAnim = { x: 100 };

        return (
        <div key={index} className="relative h-[80vh] overflow-hidden panel">
          <div
            className="absolute inset-0 bg-cover bg-center panel-bg"
            style={{ backgroundImage: `url(${panel.bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 h-full flex items-center justify-center px-6 md:px-12">
            <motion.div
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl w-full"
              style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, ...initialAnim }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-4" style={{ color: panel.accentColor }}>
                    {panel.badge}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold mb-4 text-white">{panel.title}</h3>
                  <p className="text-lg md:text-xl text-gray-200 mb-6">{panel.subtitle}</p>
                  <motion.button
                    className="px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition"
                    style={{ backgroundColor: panel.accentColor }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {panel.cta}
                  </motion.button>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={panel.previewImage}
                    alt="Preview"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-xl shadow-lg object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-b-2xl" />
            </motion.div>
          </div>
        </div>
        );
      })}
    </section>
  );
};

export default WhyJoin;