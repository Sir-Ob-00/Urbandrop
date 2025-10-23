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
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{paddingTop: '140px'}}>
      {/* Background: Left side white, right side green semi-circle */}
      <div className="absolute inset-0">
        {/* Green semi-circle on right side */}
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-l-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#2c4d31] space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c4d31] to-[#36b44a]">Thousands</span>
                <br />
                of Shoppers
                <br />
                <span className="text-[#2c4d31]">Every Day</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#2c4d31]/80 leading-relaxed max-w-lg">
                Advertise on Urbandrop to grow brand awareness, boost product visibility,
                and increase your sales through our engaged food and grocery community.
              </p>
            </div>

            {/* Animated Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 border border-[#2c4d31]/20"
            >
              <div className="text-center">
                <motion.div
                  key={currentStat}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl font-bold text-[#2c4d31] mb-2"
                >
                  {stats[currentStat].value.toLocaleString()}{stats[currentStat].suffix}
                </motion.div>
                <div className="text-[#2c4d31]/70">{stats[currentStat].label}</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pb-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#2c4d31]/25 transition-all flex items-center justify-center gap-3"
              >
                Start Advertising
                <ArrowRight size={20} />
              </motion.button>
            </div>            
          </motion.div>

          {/* Right Visual - Image clipped to the green semi-circle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center h-full"
          >
            {/* Image clipped to the green semi-circle shape */}
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="absolute right-0 top-0 w-full h-full"
                style={{
                  backgroundImage: `url(${deliveryRider})`,
                  backgroundSize: '50% 100%',
                  backgroundPosition: 'right center',
                  backgroundRepeat: 'no-repeat',
                  clipPath: 'circle(50% at 100% 50%)'
                }}
              ></div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute top-1/4 left-1/4 bg-white rounded-2xl p-4 shadow-2xl max-w-xs z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2c4d31] rounded-xl flex items-center justify-center">
                    <Target size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-[#2c4d31] text-sm">Your Brand Here</div>
                    <div className="text-[#2c4d31]/70 text-xs">Premium Placement</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute bottom-1/4 left-1/4 bg-white rounded-2xl p-4 shadow-2xl text-[#2c4d31] z-10"
              >
                <div className="text-2xl font-bold">3x</div>
                <div className="text-sm opacity-90">More Visibility</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 left-1/2 bg-[#f1be21] rounded-2xl p-4 shadow-2xl text-[#2c4d31] z-10"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">500K+</div>
                  <div className="text-sm opacity-90">Impressions</div>
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

export default AdvertiseHero;