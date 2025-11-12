import React from 'react';
import { motion } from 'framer-motion';

const backgroundImage = {
  src: '/src/assets/images/advertising/ad-fruit.jpg',
  alt: 'Advertising hero background for Urbandrop',
};

const AdvertiseHero = () => {

  return (
    <section className="relative h-screen w-full flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Empty on desktop */}
        <div></div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Reach Your <span className="text-primary">Perfect</span> Audience
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-lg mx-auto md:mx-0">
            Connect with thousands of engaged shoppers looking for authentic ethnic groceries and products.
          </p>
          <div className="pt-4">
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-darkGreen transition-all transform hover:scale-105 shadow-lg">
              Start Your Campaign
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertiseHero;