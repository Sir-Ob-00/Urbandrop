import React from 'react';
import { motion } from 'framer-motion';
import { Play, Download, Star } from 'lucide-react';
import heroImage from '/images/market-woman.jpg';

const CustomerHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-background via-white to-primaryLight overflow-hidden" style={{paddingTop: '140px'}}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <span className="text-muted font-medium">Trusted by 10,000+ customers</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-dark">Fresh</span>
              <br />
              <span className="text-primary">Ethnic Flavors</span>
              <br />
              <span className="text-dark">Delivered</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted leading-relaxed max-w-lg">
              Discover authentic cuisines from Africa, Asia, Europe, and the Caribbean.
              Fresh ingredients, fast delivery, and unforgettable flavors at your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-darkGreen transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
                <Download size={24} />
                Download App
              </button>
              <button className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all flex items-center gap-3">
                <Play size={24} />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-muted">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-muted">Local Merchants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">30min</div>
                <div className="text-muted">Avg. Delivery</div>
              </div>
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
                src={heroImage}
                alt="Fresh ethnic ingredients and happy customer"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🍲</span>
                  </div>
                  <div>
                    <div className="font-bold text-dark">Fresh Daily</div>
                    <div className="text-sm text-muted">Quality guaranteed</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">🚚</span>
                  </div>
                  <div>
                    <div className="font-bold text-dark">Fast Delivery</div>
                    <div className="text-sm text-muted">30min or less</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomerHero;