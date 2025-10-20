import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Package, ShoppingCart, DollarSign } from 'lucide-react';

const steps = [
  {
    icon: <UserPlus size={40} className="text-white" />,
    title: 'Sign Up',
    description: 'Register on the Urbandrop Merchant App with your business details.',
  },
  {
    icon: <Package size={40} className="text-white" />,
    title: 'List Your Products',
    description: 'Add your items, prices, and details to showcase your offerings.',
  },
  {
    icon: <ShoppingCart size={40} className="text-white" />,
    title: 'Receive Orders',
    description: 'Customers discover and order from your shop through the app.',
  },
  {
    icon: <DollarSign size={40} className="text-white" />,
    title: 'Deliver & Earn',
    description: 'Complete sales and get paid securely through our platform.',
  },
];

const MerchantSteps = () => {
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
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Getting started with Urbandrop is simple. Follow these easy steps to begin growing your business.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primaryLight to-primary"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-primary rounded-2xl p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-lg">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-8 flex justify-center">
                    <div className="w-8 h-0.5 bg-primary"></div>
                    <div className="w-0 h-0 border-l-4 border-l-primary border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MerchantSteps;