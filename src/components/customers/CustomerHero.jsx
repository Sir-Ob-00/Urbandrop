import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/images/customer/lady-urbandrop.jpg';

const CustomerHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fff5ea] text-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover opacity-20 scale-105 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#fff5ea] via-[#fff5ea]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#fff5ea] via-transparent to-transparent" />
      </div>

      {/* Floating Elements (Background) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#00b36b] opacity-5 blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-gray-900">
              Taste the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b36b] to-[#00ff99]">
                Authentic
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-lg">
              Experience the vibrant flavors of Africa, Asia, and the Caribbean delivered to your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00b36b] text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(0,179,107,0.3)] hover:shadow-[0_0_30px_rgba(0,179,107,0.5)] transition-all flex items-center justify-center gap-3 group"
              >
                <Download size={24} />
                Download App
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Main Card */}
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/40 shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 bg-white/20 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
              <img
                src={heroImage}
                alt="App Preview"
                className="w-full max-w-md mx-auto object-cover h-[600px]"
              />
              {/* Floating UI Element on Card */}
              <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#00b36b] flex items-center justify-center">
                    <Download size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-bold">Order Delivered</p>
                    <p className="text-gray-600 text-xs">Just now • 2 mins ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements behind card */}
            <div className="absolute top-10 -right-10 w-64 h-64 bg-[#00b36b] rounded-full filter blur-[100px] opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-orange-300 rounded-full filter blur-[100px] opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CustomerHero;