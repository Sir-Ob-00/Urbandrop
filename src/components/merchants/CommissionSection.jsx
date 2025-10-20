import React from 'react';
import { motion } from 'framer-motion';
import { Percent, Clock, FileText, Phone } from 'lucide-react';

const details = [
  {
    icon: <Percent size={32} className="text-white" />,
    title: 'Commission Rate',
    description: 'We only charge a small percentage per transaction to keep more money in your pocket.',
  },
  {
    icon: <Clock size={32} className="text-white" />,
    title: 'Weekly Payments',
    description: 'Receive your earnings every week directly to your registered account.',
  },
  {
    icon: <FileText size={32} className="text-white" />,
    title: 'Simple Requirements',
    description: 'Valid business registration or ID, product catalog, and a phone number to get started.',
  },
  {
    icon: <Phone size={32} className="text-white" />,
    title: '24/7 Support',
    description: 'Our dedicated merchant support team is always ready to help you succeed.',
  },
];

const CommissionSection = () => {
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
            Partnership <span className="text-primary">Details</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Transparent terms and conditions designed to help your business thrive
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-primary rounded-2xl p-4 w-fit mb-6">
                {detail.icon}
              </div>
              <h3 className="text-2xl font-bold text-dark mb-4">{detail.title}</h3>
              <p className="text-muted leading-relaxed">{detail.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primaryLight rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg opacity-90 mb-6">
            Join our network of successful merchants and start growing your business today.
            The registration process takes less than 10 minutes!
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all">
            Start Your Application
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommissionSection;