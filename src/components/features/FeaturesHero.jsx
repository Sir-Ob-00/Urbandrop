import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Star, ArrowRight, ChefHat, Truck } from 'lucide-react';
import appMockup from '../../assets/images/features/rack-fruits.png';

const FeaturesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#fff5ea] via-[#fcf7de] to-[#ddeab9] overflow-hidden" style={{paddingTop: '140px'}}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2c4d31]/20 via-transparent to-[#36b44a]/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#2c4d31]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f1be21]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#36b44a]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#2c4d31] space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white px-6 py-3 rounded-full font-semibold shadow-2xl"
              >
                <Sparkles size={20} className="animate-pulse" />
                <span>Ethnic Marketplace</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Authentic Ethnic
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c4d31] to-[#36b44a]">
                  Groceries & Foods
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-[#2c4d31]/90 leading-relaxed max-w-lg">
                Discover authentic ethnic groceries and restaurant-quality foods from around the world,
                delivered fresh to your doorstep with our comprehensive marketplace.
              </p>
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
                src={appMockup}
                alt="Urbandrop marketplace showcasing ethnic groceries and restaurant foods"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#2c4d31]/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#2c4d31]/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesHero;