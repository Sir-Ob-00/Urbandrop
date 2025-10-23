import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Clock, RefreshCw, Heart, Zap, Smartphone, Target } from 'lucide-react';
import deliveryGuy from '../../assets/images/deliveryguy.jpg';

const SmartOrdering = () => {
  const features = [
    {
      icon: <MapPin size={32} className="text-white" />,
      title: 'Real-Time Tracking',
      description: 'Watch your order journey from kitchen to doorstep with live GPS updates',
      gradient: 'bg-gradient-to-r from-[#2c4d31] to-[#36b44a]',
      stats: '99% Accuracy',
    },
    {
      icon: <Clock size={32} className="text-white" />,
      title: 'Predictive Delivery',
      description: 'ETAs that get more accurate as your order progresses',
      gradient: 'from-green-500 to-green-600',
      stats: '30min Avg',
    },
    {
      icon: <RefreshCw size={32} className="text-white" />,
      title: 'One-Click Reorders',
      description: 'Save your favorite meals and reorder with a single tap',
      gradient: 'from-green-500 to-green-600',
      stats: '2x Faster',
    },
    {
      icon: <Heart size={32} className="text-white" />,
      title: 'Smart Favorites',
      description: 'Learns your preferences and suggests meals you\'ll love',
      gradient: 'bg-gradient-to-r from-[#2c4d31] to-[#36b44a]',
      stats: '85% Match Rate',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff5ea] via-[#fcf7de] to-[#ddeab9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white px-4 py-2 rounded-full font-semibold mb-6">
            <Zap size={16} />
            <span>Smart Technology</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2c4d31] mb-6">
            Your Favorite Meals,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c4d31] to-[#36b44a]">
              Delivered Effortlessly
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Experience the future of food delivery with our intelligent ordering system,
            real-time tracking, and personalized recommendations that make every meal special.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 w-fit mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{feature.description}</p>
                  <div className={`inline-block bg-gradient-to-r ${feature.gradient} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {feature.stats}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#fff5ea]/80 to-[#fcf7de]/80 rounded-3xl p-8 border border-[#2c4d31]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#2c4d31] to-[#36b44a] rounded-2xl p-4">
                  <Truck size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-1">Delivery Promise</h3>
                  <p className="text-muted">Hot, fresh, and on time — every single time</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">30min</div>
                  <div className="text-muted text-sm">Average Delivery</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">99%</div>
                  <div className="text-muted text-sm">On-Time Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">4.9★</div>
                  <div className="text-muted text-sm">Customer Rating</div>
                </div>
              </div>
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
                src={deliveryGuy}
                alt="Urbandrop smart delivery system"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Delivery Status */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-xl flex items-center justify-center">
                    <Truck size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Order #12345</div>
                    <div className="text-muted text-xs">Out for delivery</div>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  Arriving in 8 minutes
                </div>
              </motion.div>

              {/* Floating Map Pin */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/4 -right-4 bg-[#2c4d31] text-white rounded-2xl p-3 shadow-xl"
              >
                <MapPin size={24} />
              </motion.div>

              {/* Floating ETA */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute bottom-1/4 -left-4 bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white rounded-2xl p-4 shadow-xl"
              >
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Process Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">
            How Smart Ordering Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center relative">
              <div className="bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Smartphone size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">1. Smart Selection</h4>
              <p className="text-muted leading-relaxed">
                Recommendations based on your taste preferences, dietary needs, and order history.
              </p>
              <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent hidden md:block"></div>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-to-br from-[#36b44a] to-[#2c4d31] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Truck size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">2. Live Tracking</h4>
              <p className="text-muted leading-relaxed">
                Real-time GPS tracking from order confirmation to delivery at your doorstep.
              </p>
              <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent hidden md:block"></div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#f1be21] to-[#2c4d31] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">3. Perfect Timing</h4>
              <p className="text-muted leading-relaxed">
                Predictive delivery times that get more accurate as your order progresses.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartOrdering;