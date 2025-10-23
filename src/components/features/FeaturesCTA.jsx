import React from 'react';
import { motion } from 'framer-motion';
import { Download, Store, ArrowRight, Sparkles, Star, Users } from 'lucide-react';

const FeaturesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#36b44a]/20 via-transparent to-[#2c4d31]/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#36b44a]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f1be21]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2c4d31]/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#36b44a]/40 rounded-full"
            animate={{
              x: [0, Math.random() * 400 - 200],
              y: [0, Math.random() * 400 - 200],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
            <Sparkles size={20} className="text-yellow-400 animate-pulse" />
            <span className="text-white font-medium">Discover Authentic Flavors</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Explore Our
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36b44a] to-[#f1be21]">
              Marketplace
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Browse our extensive collection of authentic ethnic groceries and restaurant-quality foods
            from around the world, all available for delivery to your doorstep.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-[#36b44a]/25 transition-all flex items-center justify-center gap-3"
            >
              <Store size={24} />
              Shop Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 hover:border-white/50 transition-all flex items-center justify-center gap-3 backdrop-blur-sm"
            >
              <Store size={24} />
              Become a Merchant
            </motion.button>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Star size={48} className="text-yellow-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80 text-lg">Ethnic Products</div>
              <div className="text-white/60 text-sm mt-2">Authentic quality</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Users size={48} className="text-blue-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80 text-lg">Partner Merchants</div>
              <div className="text-white/60 text-sm mt-2">Trusted suppliers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Store size={48} className="text-green-400" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
              <div className="text-white/80 text-lg">Countries</div>
              <div className="text-white/60 text-sm mt-2">Global cuisines</div>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/80 mb-6">Trusted by communities worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🌍</span>
                <span className="font-medium">Global Ethnic Foods</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">⭐</span>
                <span className="font-medium">Authentic Quality</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🏅</span>
                <span className="font-medium">Community Favorite</span>
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/20"
          >
            <p className="text-white/80 mb-6">
              Ready to explore authentic ethnic flavors? Start shopping today.
            </p>
            <button className="bg-[#2c4d31] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#36b44a] transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
              Browse Products
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCTA;