import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Rocket, ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';


const AdvertiseCTA = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#2c4d31] via-[#36b44a] to-[#f1be21] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#2c4d31]/30 via-transparent to-[#36b44a]/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#36b44a]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#f1be21]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#2c4d31]/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-white/20 rounded-full"
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              opacity: [0, 0.6, 0],
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

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center">
          {/* Urgency Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-2xl mb-8 inline-block shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <Rocket size={24} className="animate-bounce" />
              <div>
                <div className="font-bold text-lg">Limited Time: 20% OFF First Month!</div>
                <div className="text-sm opacity-90">Offer ends in {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</div>
              </div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Ready to Grow Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#f1be21]">
                Brand?
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Start reaching more customers today with Urbandrop's advertising solutions.
              Join hundreds of successful brands that have transformed their business.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#2c4d31] px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl hover:shadow-white/25 transition-all flex items-center justify-center gap-3"
            >
              Start Advertising Today
              <ArrowRight size={24} />
            </motion.button>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-white/20 rounded-full p-4 w-fit mx-auto mb-4">
                <Phone size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm mb-3">Speak directly with our advertising experts</p>
              <a href="tel:+1234567890" className="text-white font-semibold hover:text-[#f1be21] transition-colors">
                +1 (234) 567-890
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-white/20 rounded-full p-4 w-fit mx-auto mb-4">
                <Mail size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm mb-3">Get detailed information and pricing</p>
              <a href="mailto:advertise@urbandrop.com" className="text-white font-semibold hover:text-[#f1be21] transition-colors">
                advertise@urbandrop.com
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-white/20 rounded-full p-4 w-fit mx-auto mb-4">
                <MessageCircle size={32} className="text-white" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Live Chat</h3>
              <p className="text-gray-300 text-sm mb-3">Instant responses to your questions</p>
              <button className="text-white font-semibold hover:text-[#f1be21] transition-colors">
                Start Chat Now
              </button>
            </div>
          </motion.div>
          <div className="text-center"> 
            <button className="bg-white text-[#2c4d31] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Get the App
              </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseCTA;