import React from 'react';
import { motion } from 'framer-motion';
import marketWoman from '/images/market-woman.jpg';

const MerchantHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/Video/urbandrop video promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Overlay */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Grow Your Business with{' '}
              <span className="text-primary">Urbandrop</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Join hundreds of trusted merchants selling fresh and quality foodstuffs through our app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-darkGreen transition-all transform hover:scale-105 shadow-lg">
                Join as a Merchant
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src={marketWoman}
                alt="Market Woman"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MerchantHero;