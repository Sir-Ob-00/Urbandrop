import React from 'react';
import { motion } from 'framer-motion';
import { Users, Smartphone, Target, DollarSign, Zap, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: <Users size={40} className="text-white" />,
    title: 'Massive Audience Reach',
    description: 'Connect with thousands of active food and grocery shoppers daily across our platform.',
    gradient: 'from-[#2c4d31] to-[#36b44a]',
    stats: '50K+ Daily Users',
  },
  {
    icon: <Smartphone size={40} className="text-white" />,
    title: 'App & Web Exposure',
    description: 'Your brand appears in both our mobile app and website placements for maximum visibility.',
    gradient: 'from-[#f1be21] to-[#a37c04]',
    stats: 'Dual Platform',
  },
  {
    icon: <Target size={40} className="text-white" />,
    title: 'Targeted Marketing',
    description: 'Reach customers based on location, category, and buying behavior for precise targeting.',
    gradient: 'from-green-500 to-green-600',
    stats: 'Precise Targeting',
  },
  {
    icon: <DollarSign size={40} className="text-white" />,
    title: 'Flexible Budgets',
    description: 'Choose ad packages that fit your budget and marketing goals, from starter to enterprise.',
    gradient: 'from-green-500 to-green-600',
    stats: 'Custom Pricing',
  },
  {
    icon: <Zap size={40} className="text-white" />,
    title: 'High Engagement',
    description: 'Our app users actively browse, order, and engage with listings throughout their journey.',
    gradient: 'from-[#f1be21] to-[#a37c04]',
    stats: 'High Engagement',
  },
  {
    icon: <BarChart3 size={40} className="text-white" />,
    title: 'Performance Tracking',
    description: 'Access campaign insights and analytics to measure your ROI and optimize performance.',
    gradient: 'from-[#2c4d31] to-[#36b44a]',
    stats: 'Real-time Analytics',
  },
];

const WhyAdvertise = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#fff5ea] via-[#fcf7de] to-[#ddeab9] relative overflow-hidden">
      {/* Grocery Pattern Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c4d31' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2c4d31] mb-6">
            Why Advertise on <span className="text-[#2c4d31]">Urbandrop</span>?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Join leading brands leveraging our engaged audience and innovative advertising solutions
            to drive growth and increase market share.
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
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>

              {/* Floating Stats Badge */}
              <div className="absolute top-4 right-4 bg-[#2c4d31]/10 text-[#2c4d31] text-xs font-bold px-3 py-1 rounded-full">
                {benefit.stats}
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-br ${benefit.gradient} rounded-2xl p-4 w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-[#2c4d31] mb-4 group-hover:text-[#2c4d31] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {benefit.description}
              </p>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${benefit.gradient} group-hover:w-full transition-all duration-300 rounded-bl-3xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#2c4d31] via-[#36b44a] to-[#f1be21] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Amplify Your Brand?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful brands that have transformed their business with Urbandrop advertising.
            </p>
            <div className="text-center justify-center">
              <button className="bg-white text-[#2c4d31] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Start Your Campaign
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAdvertise;