import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, Star, Users, Award, Truck } from 'lucide-react';
import appMockup from '../../assets/images/urbandrop-mobile-app-ui.png';

const AppDownloadSection = () => {
  const [downloads, setDownloads] = useState(50000);

  // Simulate download counter animation
  useEffect(() => {
    const targetDownloads = 75000;
    const increment = Math.ceil(targetDownloads / 100);
    const interval = setInterval(() => {
      setDownloads(prev => {
        const next = prev + increment;
        return next >= targetDownloads ? targetDownloads : next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Smartphone size={24} className="text-white" />,
      title: 'Easy Ordering',
      description: 'Tap to order, track in real-time',
    },
    {
      icon: <Star size={24} className="text-white" />,
      title: 'Exclusive Deals',
      description: 'App-only discounts and offers',
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: 'Community',
      description: 'Connect with food lovers worldwide',
    },
    {
      icon: <Award size={24} className="text-white" />,
      title: 'Rewards Program',
      description: 'Earn points on every order',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primaryLight to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Get the Full
                <br />
                <span className="text-dark">Urbandrop</span> Experience
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Download our app for lightning-fast ordering, exclusive deals,
                and a seamless food discovery experience right at your fingertips.
              </p>
            </div>

            {/* Download Stats */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {downloads.toLocaleString()}+
              </div>
              <div className="text-white/80">Happy App Users</div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="bg-white/20 rounded-lg p-2 w-fit mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-white/80">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
                <Download size={24} />
                Download for iOS
              </button>
              <button className="bg-white text-primary px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
                <Download size={24} />
                Download for Android
              </button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src={appMockup}
                alt="Urbandrop Mobile App"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Truck size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Order Delivered!</div>
                    <div className="text-muted text-xs">Your Jollof Rice is here</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;