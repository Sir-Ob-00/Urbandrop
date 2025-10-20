import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, Zap, ArrowRight, Play } from 'lucide-react';
import deliveryRider from '../../assets/images/deliveryguy.jpg';

const AdvertiseHero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { value: 50000, label: 'Daily Active Users', suffix: '+' },
    { value: 2500000, label: 'Monthly Orders', suffix: '+' },
    { value: 98, label: 'Customer Satisfaction', suffix: '%' },
    { value: 30, label: 'Avg. Delivery Time', suffix: 'min' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" style={{paddingTop: '140px'}}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2"
            >
              <TrendingUp size={16} className="text-primary" />
              <span className="text-sm font-medium">Premium Advertising Platform</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Thousands</span>
                <br />
                of Shoppers
                <br />
                <span className="text-primary">Every Day</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
                Advertise on Urbandrop to grow brand awareness, boost product visibility,
                and increase your sales through our engaged food and grocery community.
              </p>
            </div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
            >
              <div className="text-center">
                <motion.div
                  key={currentStat}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-primary mb-2"
                >
                  {stats[currentStat].value.toLocaleString()}{stats[currentStat].suffix}
                </motion.div>
                <div className="text-gray-300">{stats[currentStat].label}</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/25 transition-all flex items-center justify-center gap-3"
              >
                Start Advertising
                <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
              >
                <Play size={20} />
                Watch Demo
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-blue-400 border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-gray-300 text-sm">
                Trusted by 200+ brands worldwide
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative">
              <img
                src={deliveryRider}
                alt="Delivery rider with advertising"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Ad Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-2xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Your Brand Here</div>
                    <div className="text-muted text-xs">Premium Placement</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary to-blue-500 rounded-2xl p-4 shadow-2xl text-white"
              >
                <div className="text-2xl font-bold">3x</div>
                <div className="text-sm opacity-90">More Visibility</div>
              </motion.div>

              {/* App Screen Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-white rounded-3xl p-4 shadow-2xl hidden lg:block"
              >
                <div className="w-32 h-48 bg-gradient-to-b from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-primary rounded-lg mx-auto mb-2"></div>
                    <div className="text-xs text-dark font-medium">Sponsored</div>
                  </div>
                </div>
              </motion.div>
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
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default AdvertiseHero;