import React from 'react';
import { motion } from 'framer-motion';
import { Download, Store, Users, ArrowRight, Award, Star, Trophy } from 'lucide-react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Thousands of Happy
            <br />
            <span className="text-dark">Urbandrop</span> Customers
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            Experience the convenience of fresh, authentic ethnic cuisines delivered to your door.
            Download the app and start your culinary journey today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-3"
            >
              <Download size={24} />
              Download the App
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-3"
            >
              <Store size={24} />
              Become a Merchant
            </motion.button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Users size={48} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
              <div className="text-white/80 text-lg">Active Users</div>
              <div className="text-white/60 text-sm mt-2">Growing daily</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Store size={48} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-white/80 text-lg">Partner Merchants</div>
              <div className="text-white/60 text-sm mt-2">Trusted quality</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20"
            >
              <div className="flex items-center justify-center mb-4">
                <Download size={48} className="text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.8★</div>
              <div className="text-white/80 text-lg">App Rating</div>
              <div className="text-white/60 text-sm mt-2">Customer loved</div>
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
            <p className="text-white/80 mb-6">Trusted by food lovers across the UK</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
              <div className="flex items-center gap-2 text-white">
                <Trophy size={24} className="text-yellow-400" />
                <span className="font-medium">Best Food Delivery 2024</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Star size={24} className="text-yellow-400 fill-current" />
                <span className="font-medium">4.8/5 App Store Rating</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Award size={24} className="text-yellow-400" />
                <span className="font-medium">ISO 22000 Certified</span>
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
              Ready to discover your new favorite cuisine?
            </p>
            <button className="bg-dark text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 mx-auto">
              Get Started Today
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;