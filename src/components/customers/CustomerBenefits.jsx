import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Truck, Smartphone, Award, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <Globe size={40} className="text-white" />,
    title: 'Global Cuisines',
    description: 'Explore authentic flavors from Africa, Asia, Europe, and the Caribbean in one app.',
    color: 'from-[#f1be21] to-[#36b44a]',
  },
  {
    icon: <Truck size={40} className="text-white" />,
    title: 'Lightning Fast Delivery',
    description: 'Get your fresh ingredients delivered in under 30 minutes to your doorstep.',
    color: 'from-green-400 to-green-700',
  },
  {
    icon: <Smartphone size={40} className="text-white" />,
    title: 'Seamless App Experience',
    description: 'Intuitive interface with real-time tracking and easy reordering.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: <Award size={40} className="text-white" />,
    title: 'Premium Quality',
    description: 'Sourced from trusted local merchants with guaranteed freshness.',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: <Clock size={40} className="text-white" />,
    title: 'Flexible Scheduling',
    description: 'Schedule deliveries for when it works best for your busy lifestyle.',
    color: 'from-green-600 to-green-400',
  },
  {
    icon: <Shield size={40} className="text-white" />,
    title: 'Secure Payments',
    description: 'Multiple payment options with bank-level security and fraud protection.',
    color: 'from-[#f1be21] to-[#36b44a]',
  },
];

const CustomerBenefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Why Choose <span className="text-primary">Urbandrop</span>?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Experience the future of grocery shopping with features designed for modern food lovers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>

              {/* Icon */}
              <div className={`bg-gradient-to-br ${benefit.color} rounded-2xl p-4 w-fit mb-6 shadow-lg`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primaryLight group-hover:w-full transition-all duration-300 rounded-bl-3xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary via-primaryLight to-primary rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Taste the World?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of food lovers discovering new flavors and enjoying fresh deliveries
            </p>
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
              Download the App Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerBenefits;