import React from 'react';
import { motion } from 'framer-motion';
import { Users, Smartphone, Target, DollarSign, Zap, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: <Users size={40} className="text-white" />,
    title: 'Massive Audience Reach',
    description: 'Connect with thousands of active food and grocery shoppers daily across our platform.',
    gradient: 'from-blue-500 to-blue-600',
    stats: '50K+ Daily Users',
  },
  {
    icon: <Smartphone size={40} className="text-white" />,
    title: 'App & Web Exposure',
    description: 'Your brand appears in both our mobile app and website placements for maximum visibility.',
    gradient: 'from-purple-500 to-purple-600',
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
    gradient: 'from-orange-500 to-red-500',
    stats: 'Custom Pricing',
  },
  {
    icon: <Zap size={40} className="text-white" />,
    title: 'High Engagement',
    description: 'Our app users actively browse, order, and engage with listings throughout their journey.',
    gradient: 'from-pink-500 to-rose-500',
    stats: 'High Engagement',
  },
  {
    icon: <BarChart3 size={40} className="text-white" />,
    title: 'Performance Tracking',
    description: 'Access campaign insights and analytics to measure your ROI and optimize performance.',
    gradient: 'from-indigo-500 to-purple-600',
    stats: 'Real-time Analytics',
  },
];

const WhyAdvertise = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-white to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Why Advertise on <span className="text-primary">Urbandrop</span>?
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
              <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                {benefit.stats}
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-br ${benefit.gradient} rounded-2xl p-4 w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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
          <div className="bg-gradient-to-r from-primary via-primaryLight to-primary rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Amplify Your Brand?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful brands that have transformed their business with Urbandrop advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                Start Your Campaign
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-all">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAdvertise;