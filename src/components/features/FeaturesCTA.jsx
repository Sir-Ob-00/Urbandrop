import React from 'react';
import { motion } from 'framer-motion';
import { Download, Store, ArrowRight, Sparkles, Star, Users } from 'lucide-react';

const FeaturesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-primary/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/40 rounded-full"
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
            <span className="text-white font-medium">Ready to Experience the Future?</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the Simplicity
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              of Urbandrop
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join millions of food lovers who have discovered their new favorite way to eat.
            Download the app and unlock a world of culinary possibilities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-primary/25 transition-all flex items-center justify-center gap-3"
            >
              <Download size={24} />
              Download the App
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/80 text-lg">App Store Rating</div>
              <div className="text-white/60 text-sm mt-2">Loved by millions</div>
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">2M+</div>
              <div className="text-white/80 text-lg">Happy Customers</div>
              <div className="text-white/60 text-sm mt-2">Growing daily</div>
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
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-lg">Partner Merchants</div>
              <div className="text-white/60 text-sm mt-2">Trusted quality</div>
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
            <p className="text-white/80 mb-6">Featured in leading publications</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🏆</span>
                <span className="font-medium">Best Food Delivery 2024</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">⭐</span>
                <span className="font-medium">Innovation Award Winner</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <span className="text-2xl">🏅</span>
                <span className="font-medium">Customer Choice Award</span>
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
              Still exploring? That's okay — the best discoveries happen when you're ready.
            </p>
            <button className="bg-dark text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
              Start Your Journey
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesCTA;