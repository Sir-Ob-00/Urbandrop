import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const MerchantCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Start Growing with Urbandrop Today!
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
            It takes less than 10 minutes to join and begin selling.
            Join hundreds of successful merchants already growing their businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center gap-3">
              Become a Merchant
              <ArrowRight size={24} />
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all flex items-center gap-3">
              <Phone size={24} />
              Contact Sales
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-white/80"
          >
            <p className="text-lg">
              Have questions? Our team is here to help you every step of the way.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantCTA;