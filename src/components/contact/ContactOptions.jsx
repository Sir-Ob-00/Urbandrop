import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Store, TrendingUp, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';

const contactOptions = [
  {
    icon: <ShoppingCart size={32} className="text-white" />,
    title: 'Customer Support',
    description: 'Questions about your orders, deliveries, or recipes?',
    contact: '📧 support@urbandrop.co.uk',
    gradient: 'from-blue-500 to-blue-600',
    bgPattern: '📱',
  },
  {
    icon: <Store size={32} className="text-white" />,
    title: 'Merchant Support',
    description: 'Need help setting up your shop or dashboard?',
    contact: '📧 merchants@urbandrop.co.uk',
    gradient: 'from-green-500 to-green-600',
    bgPattern: '🏪',
  },
  {
    icon: <TrendingUp size={32} className="text-white" />,
    title: 'Advertising & Partnerships',
    description: 'Want to advertise or collaborate with us?',
    contact: '📧 ads@urbandrop.co.uk',
    gradient: 'from-purple-500 to-purple-600',
    bgPattern: '📈',
  },
  {
    icon: <MapPin size={32} className="text-white" />,
    title: 'Head Office (UK)',
    description: 'Visit us at our London headquarters',
    contact: '📞 +44 123 456 7890',
    gradient: 'from-orange-500 to-red-500',
    bgPattern: '🏢',
  },
];

const ContactOptions = () => {
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
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Choose the right department for your inquiry. Our team is ready to help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity text-4xl">
                {option.bgPattern}
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-br ${option.gradient} rounded-2xl p-4 w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {option.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {option.title}
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                {option.description}
              </p>

              {/* Contact Info */}
              <div className={`bg-gradient-to-r ${option.gradient} text-white p-4 rounded-2xl font-medium text-center shadow-lg`}>
                {option.contact}
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${option.gradient} group-hover:w-full transition-all duration-300 rounded-bl-3xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
              <Phone size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-dark mb-2">Phone Support</h4>
            <p className="text-muted text-sm mb-3">Mon-Fri, 9AM-6PM GMT</p>
            <a href="tel:+441234567890" className="text-primary font-semibold hover:text-darkGreen transition-colors">
              +44 123 456 7890
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
              <Mail size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-dark mb-2">Email Support</h4>
            <p className="text-muted text-sm mb-3">24/7 response within 2 hours</p>
            <a href="mailto:hello@urbandrop.co.uk" className="text-primary font-semibold hover:text-darkGreen transition-colors">
              hello@urbandrop.co.uk
            </a>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="bg-primary/10 rounded-full p-4 w-fit mx-auto mb-4">
              <MessageCircle size={24} className="text-primary" />
            </div>
            <h4 className="font-bold text-dark mb-2">Live Chat</h4>
            <p className="text-muted text-sm mb-3">Instant responses online</p>
            <button className="text-primary font-semibold hover:text-darkGreen transition-colors">
              Start Chat Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactOptions;