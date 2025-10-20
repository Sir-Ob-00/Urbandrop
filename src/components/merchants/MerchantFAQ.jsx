import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I receive payments?',
    answer: 'Payments are processed weekly and transferred directly to your registered bank account or mobile money wallet. We support all major payment methods in your region.',
  },
  {
    question: 'What documents do I need to register?',
    answer: 'You\'ll need a valid business registration certificate, national ID or passport, proof of address, and photos of your products. For food vendors, health certificates may also be required.',
  },
  {
    question: 'How long before my shop goes live?',
    answer: 'Most applications are reviewed within 24-48 hours. Once approved, your shop can go live immediately after you complete your product catalog and setup.',
  },
  {
    question: 'Can I list both fresh produce and packaged goods?',
    answer: 'Yes! Our platform supports all types of food products including fresh produce, packaged goods, beverages, and prepared foods. You can manage multiple categories in one shop.',
  },
  {
    question: 'What are the delivery requirements?',
    answer: 'You can choose to handle deliveries yourself or partner with our delivery network. We provide delivery bags and thermal packaging to ensure food quality.',
  },
  {
    question: 'Is there a minimum order requirement?',
    answer: 'There are no minimum order requirements. You can accept orders of any size, from single items to bulk orders.',
  },
  {
    question: 'How do I update my product prices and availability?',
    answer: 'Use our merchant app to update prices, add/remove products, and manage inventory in real-time. Changes are reflected immediately in the customer app.',
  },
  {
    question: 'What if I have issues with an order?',
    answer: 'Contact our 24/7 merchant support team through the app or hotline. We help resolve issues quickly to maintain customer satisfaction.',
  },
];

const MerchantFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted">
            Everything you need to know about becoming a Urbandrop merchant
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg md:text-xl font-semibold text-dark pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp size={24} className="text-primary" />
                  ) : (
                    <ChevronDown size={24} className="text-primary" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-muted leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted mb-6">
            Still have questions? Our support team is here to help.
          </p>
          <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-darkGreen transition-all">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MerchantFAQ;