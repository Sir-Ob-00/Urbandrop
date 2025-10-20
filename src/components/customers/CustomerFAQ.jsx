import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'How does Urbandrop work?',
    answer: 'Urbandrop connects you with local merchants offering authentic ethnic cuisines. Simply download the app, browse menus, place your order, and enjoy fresh, delicious food delivered to your door within 30 minutes.',
  },
  {
    question: 'What cuisines are available?',
    answer: 'We offer a wide variety of authentic cuisines including Nigerian, Ghanaian, Ethiopian, Kenyan, Jamaican, Trinidadian, and many more from Africa and the Caribbean. New cuisines are added regularly based on customer demand.',
  },
  {
    question: 'How much does delivery cost?',
    answer: 'Delivery is free on orders over $15. For orders under $15, there\'s a small delivery fee of $2.99. We also offer free delivery on your first order to help you try our service.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Most orders are delivered within 25-35 minutes. You can track your order in real-time through the app and receive notifications at each step of the delivery process.',
  },
  {
    question: 'Can I schedule orders for later?',
    answer: 'Yes! You can schedule your order for any time within the next 7 days. This is perfect for planning meals ahead or ordering for special occasions.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit/debit cards, digital wallets (Apple Pay, Google Pay), and cash on delivery. All payments are processed securely with bank-level encryption.',
  },
  {
    question: 'Can I modify or cancel my order?',
    answer: 'Orders can be modified or cancelled within 2 minutes of placement. After that, the merchant begins preparing your food. Contact customer support immediately if you need to make changes.',
  },
  {
    question: 'Is there a minimum order requirement?',
    answer: 'There\'s no minimum order requirement for delivery. However, some merchants may have minimum orders for certain premium items. You can see this information clearly in the app.',
  },
  {
    question: 'How do I leave feedback or report issues?',
    answer: 'You can rate your order and leave feedback directly in the app after delivery. For any issues, contact our 24/7 customer support team through the app or by calling our hotline.',
  },
  {
    question: 'Do you offer dietary accommodations?',
    answer: 'Many of our merchants offer vegetarian, vegan, and gluten-free options. You can filter by dietary preferences in the app and add special instructions for each order.',
  },
];

const CustomerFAQ = () => {
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
          <div className="flex justify-center mb-6">
            <div className="bg-primary rounded-full p-4">
              <HelpCircle size={32} className="text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted">
            Everything you need to know about ordering with Urbandrop
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
              >
                <h3 className="text-lg md:text-xl font-semibold text-dark pr-4 group-hover:text-primary transition-colors">
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
            Still have questions? Our customer support team is here to help 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-darkGreen transition-all">
              Contact Support
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
              Live Chat
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerFAQ;