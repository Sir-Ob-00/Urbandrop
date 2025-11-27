import React from 'react';
import { motion } from 'framer-motion';
import heroVideo from '../../assets/images/merchants/Video/urbandrop video promo.mp4';

const MerchantHero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden" style={{ paddingTop: '120px' }}>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Overlay */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Grow Your Business with{' '}
            <span className="text-primary">Urbandrop</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
            Join hundreds of trusted merchants selling fresh and quality foodstuffs through our app.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-darkGreen transition-all transform hover:scale-105 shadow-2xl">
              Join as a Merchant
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantHero;