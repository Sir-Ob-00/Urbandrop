import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Star, ArrowRight } from 'lucide-react';
import appMockup from '../../assets/images/urbandrop-mobile-app-ui.png';

const FeaturesHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
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
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-blue-500 text-white px-6 py-3 rounded-full font-semibold shadow-2xl"
              >
                <Sparkles size={20} className="animate-pulse" />
                <span>Revolutionary Features</span>
              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                Discover, Order &
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Enjoy — Smarter
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-lg">
                Urbandrop is not just a delivery app — it's your gateway to authentic cuisines,
                culinary mastery, and seamless food experiences that connect you with the world's flavors.
              </p>
            </div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Zap size={24} className="text-yellow-400" />
                  <span className="font-bold text-white">Lightning Fast</span>
                </div>
                <p className="text-white/80 text-sm">30-minute delivery guarantee</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Star size={24} className="text-yellow-400" />
                  <span className="font-bold text-white">Premium Quality</span>
                </div>
                <p className="text-white/80 text-sm">Trusted local merchants</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles size={24} className="text-primary" />
                  <span className="font-bold text-white">Smart Features</span>
                </div>
                <p className="text-white/80 text-sm">AI-powered recommendations</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/25 transition-all flex items-center justify-center gap-3"
              >
                Explore Features
                <ArrowRight size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
              >
                Watch Demo
                <Sparkles size={24} />
              </motion.button>
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
                alt="Urbandrop app showcasing amazing features"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Feature Cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">👨‍🍳</span>
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Recipe Learning</div>
                    <div className="text-muted text-xs">Cook like a pro chef</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">🚚</span>
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Smart Delivery</div>
                    <div className="text-muted text-xs">Real-time tracking</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-1/2 -right-8 bg-primary text-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">✨</div>
                  <div className="text-sm font-medium">AI-Powered</div>
                  <div className="text-xs opacity-90">Personalized experience</div>
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

export default FeaturesHero;