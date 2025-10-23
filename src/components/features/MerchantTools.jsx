import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Store, Users, TrendingUp, Settings, Shield, Bell } from 'lucide-react';
import marketWoman from '/images/market-woman.jpg';

const MerchantTools = () => {
  const tools = [
    {
      icon: <BarChart3 size={32} className="text-white" />,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into sales, popular dishes, and customer trends',
      features: ['Sales reports', 'Customer analytics', 'Performance metrics'],
      gradient: 'from-blue-500 to-indigo-600',
    },
    {
      icon: <Store size={32} className="text-white" />,
      title: 'Menu Management',
      description: 'Easy-to-use interface for updating menus, prices, and availability',
      features: ['Bulk updates', 'Photo uploads', 'Category organization'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: <Users size={32} className="text-white" />,
      title: 'Order Management',
      description: 'Streamlined system for processing and fulfilling customer orders',
      features: ['Order notifications', 'Status updates', 'Customer communication'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <TrendingUp size={32} className="text-white" />,
      title: 'Marketing Tools',
      description: 'Built-in promotion tools and featured listing opportunities',
      features: ['Discount campaigns', 'Featured listings', 'Customer targeting'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      icon: <Settings size={32} className="text-white" />,
      title: 'Business Settings',
      description: 'Complete control over your business profile and preferences',
      features: ['Operating hours', 'Delivery zones', 'Payment settings'],
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      icon: <Shield size={32} className="text-white" />,
      title: 'Security & Support',
      description: 'Enterprise-grade security with 24/7 dedicated merchant support',
      features: ['Data encryption', 'Fraud protection', 'Priority support'],
      gradient: 'from-emerald-500 to-green-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff5ea] via-[#fcf7de] to-[#ddeab9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#2c4d31]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#36b44a]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f1be21]/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white px-4 py-2 rounded-full font-semibold mb-6">
            <Store size={16} />
            <span>Merchant Power</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2c4d31] mb-6">
            Empowering Local
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c4d31] to-[#36b44a]">
              Merchants
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Give your business the tools it deserves. Our comprehensive merchant platform
            provides everything you need to grow, manage, and succeed in the competitive food delivery market.
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
              {tools.slice(0, 4).map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`bg-gradient-to-br ${tool.gradient} rounded-2xl p-4 w-fit mb-4`}>
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{tool.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-4">{tool.description}</p>
                  <ul className="space-y-1">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-muted">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient} mr-2`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#fff5ea]/80 to-[#fcf7de]/80 rounded-3xl p-8 border border-[#2c4d31]/20">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-muted text-sm">Merchant Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15min</div>
                  <div className="text-muted text-sm">Setup Time</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105">
                Start Your Merchant Journey
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
                src={marketWoman}
                alt="Successful merchant using Urbandrop tools"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Dashboard Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-xl flex items-center justify-center">
                    <BarChart3 size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Today's Sales</div>
                    <div className="text-muted text-xs">GHS 2,450.00</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-green-100 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="text-xs text-green-600 font-medium">+15%</span>
                </div>
              </motion.div>

              {/* Floating Notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/4 -right-4 bg-[#2c4d31] text-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">
                    <Bell size={24} className="text-white" />
                  </div>
                  <div className="text-sm font-medium">New Order!</div>
                  <div className="text-xs opacity-90">Jollof Rice - Table 3</div>
                </div>
              </motion.div>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute bottom-1/4 -left-4 bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold">
                    <TrendingUp size={24} className="text-white" />
                  </div>
                  <div className="text-sm font-medium">Revenue Up</div>
                  <div className="text-xs opacity-90">+32% this month</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Additional Tools Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {tools.slice(4).map((tool, index) => (
            <motion.div
              key={index + 4}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`bg-gradient-to-br ${tool.gradient} rounded-2xl p-4 w-fit mb-4`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-dark mb-2">{tool.title}</h3>
              <p className="text-muted text-sm leading-relaxed mb-4">{tool.description}</p>
              <ul className="space-y-1">
                {tool.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.gradient} mr-2`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Onboarding CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#2c4d31] via-[#36b44a] to-[#f1be21] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful merchants who have transformed their businesses with our powerful tools.
              Setup takes less than 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#2c4d31] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                Schedule Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantTools;