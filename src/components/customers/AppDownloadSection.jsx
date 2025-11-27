import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
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

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #fff5ea 0%, #ffffff 100%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-100 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-50 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Coming from Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-primary space-y-8 order-2 lg:order-1"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
                Get the Full
                <br />
                <span className="text-primaryDark">Urbandrop</span> Experience
              </h2>
              <p className="text-xl text-primary/80 leading-relaxed">
                Download our app for lightning-fast ordering, exclusive deals,
                and a seamless food discovery experience right at your fingertips.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-primaryDark transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
                <Download size={24} />
                Download for iOS
              </button>
              <button className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-3">
                <Download size={24} />
                Download for Android
              </button>
            </div>
          </motion.div>

          {/* Right Image - Coming from Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative">
              <img
                src={appMockup}
                alt="Urbandrop Mobile App"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;