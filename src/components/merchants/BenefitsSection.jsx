import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Eye, CreditCard, ClipboardList, Headphones, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: <TrendingUp size={32} className="text-white" />,
    title: 'Increase Sales',
    description: 'Reach thousands of customers looking for quality foodstuffs in your area.',
  },
  {
    icon: <Eye size={32} className="text-white" />,
    title: 'Boost Your Visibility',
    description: 'Get discovered through our marketing and location-based recommendations.',
  },
  {
    icon: <CreditCard size={32} className="text-white" />,
    title: 'Secure Payments',
    description: 'Enjoy fast and reliable payments through the Urbandrop system.',
  },
  {
    icon: <ClipboardList size={32} className="text-white" />,
    title: 'Easy Order Management',
    description: 'Track and fulfill orders easily using our mobile app dashboard.',
  },
  {
    icon: <Headphones size={32} className="text-white" />,
    title: 'Merchant Support',
    description: 'We provide onboarding help, customer service, and promotional boosts.',
  },
  {
    icon: <BarChart3 size={32} className="text-white" />,
    title: 'Data Insights',
    description: 'Access sales analytics and performance reports to grow your business.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Why Partner With <span className="text-primary">Urbandrop</span>?
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Discover the benefits that come with joining our growing network of successful merchants
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
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-primary rounded-2xl p-4 w-fit mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{benefit.title}</h3>
              <p className="text-muted leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;