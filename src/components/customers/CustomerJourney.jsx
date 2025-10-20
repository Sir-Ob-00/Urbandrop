import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, CreditCard, Truck } from 'lucide-react';

const steps = [
  {
    icon: <Search size={48} className="text-white" />,
    title: 'Discover & Browse',
    description: 'Explore thousands of authentic ingredients and ready-to-eat meals from local merchants.',
    details: ['Global cuisine selection', 'Real-time availability', 'Detailed product info'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <ShoppingCart size={48} className="text-white" />,
    title: 'Add to Cart',
    description: 'Customize your order with special instructions and select delivery preferences.',
    details: ['Flexible quantities', 'Special requests', 'Scheduled delivery'],
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <CreditCard size={48} className="text-white" />,
    title: 'Secure Checkout',
    description: 'Multiple payment options with instant confirmation and order tracking.',
    details: ['Bank-level security', 'Instant confirmation', 'Order tracking'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <Truck size={48} className="text-white" />,
    title: 'Fresh Delivery',
    description: 'Receive your order fresh and on time with real-time delivery updates.',
    details: ['Live tracking', 'Quality guarantee', 'Contactless delivery'],
    color: 'from-orange-500 to-red-500',
  },
];

const CustomerJourney = () => {
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
            Your <span className="text-primary">Journey</span> to Fresh Flavors
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            From discovery to delivery, we've made every step of your food journey simple and enjoyable
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-primary rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-lg border-2 border-primary z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 w-32 h-32 mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                  {step.icon}
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold text-dark mb-4">{step.title}</h3>
                  <p className="text-muted mb-6 leading-relaxed">{step.description}</p>

                  {/* Details List */}
                  <ul className="text-left space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center text-sm text-muted">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mr-3`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

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

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">2M+</div>
            <div className="text-muted">Orders Delivered</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-muted">Average Rating</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">25min</div>
            <div className="text-muted">Avg. Prep Time</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerJourney;