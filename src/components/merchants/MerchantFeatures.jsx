import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Truck, DollarSign, BarChart, Shield, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Orders',
    description: 'Receive orders instantly and start fulfilling them right away.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Ensure quick and reliable delivery to your customers.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: DollarSign,
    title: 'Real-time Earnings',
    description: 'Track your earnings in real-time with instant updates.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Get detailed insights into your sales and performance.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Enjoy secure and hassle-free payment processing.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: 'Access dedicated support to help you succeed.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const MerchantFeatures = () => {
  return (
    <section className="py-20 bg-gray-300 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Merchant <span className="text-[#00b36b]">Features</span>
        </motion.h2>
      </div>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex space-x-6 pb-4 px-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative flex-shrink-0 w-[90vw] md:w-[80vw] h-[70vh] rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-500" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00b36b] to-[#007a4a] flex items-center justify-center mb-6 shadow-lg"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon size={40} className="text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MerchantFeatures;