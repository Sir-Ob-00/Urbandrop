import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Target, DollarSign, BarChart3, Users } from 'lucide-react';

const faqs = [
  {
    question: 'What kind of ads can I run on Urbandrop?',
    answer: 'You can run various types of ads including app banners, featured product listings, category sponsorships, and in-app promotions. We support image ads, video ads, and interactive formats to showcase your products effectively.',
    icon: <Target size={20} className="text-primary" />,
  },
  {
    question: 'How do I pay for advertising campaigns?',
    answer: 'We offer flexible payment options including bank transfers, credit/debit cards, and mobile money. Payments are processed securely, and you only pay for the advertising services you use. We also offer invoicing for larger campaigns.',
    icon: <DollarSign size={20} className="text-primary" />,
  },
  {
    question: 'Can I target specific locations or customer types?',
    answer: 'Yes! Our advanced targeting allows you to reach customers based on location, shopping behavior, product preferences, and more. You can target specific cities, regions, or focus on customers who frequently purchase certain types of products.',
    icon: <Users size={20} className="text-primary" />,
  },
  {
    question: 'How soon will my ad campaign go live?',
    answer: 'Most campaigns can go live within 24-48 hours after approval and payment. For larger or more complex campaigns, it may take up to 1 week to ensure optimal setup. We\'ll keep you updated throughout the process.',
    icon: <BarChart3 size={20} className="text-primary" />,
  },
  {
    question: 'Do you provide campaign performance reports?',
    answer: 'Absolutely! You\'ll receive detailed analytics including impressions, clicks, conversions, and ROI metrics. Real-time dashboards are available, and we provide weekly performance reports with insights and optimization recommendations.',
    icon: <BarChart3 size={20} className="text-primary" />,
  },
  {
    question: 'What\'s the minimum budget for advertising?',
    answer: 'Our Starter plan starts at GHS 200 for a week of banner placement. However, we work with businesses of all sizes and can create custom campaigns starting from as little as GHS 100 for targeted promotions.',
    icon: <DollarSign size={20} className="text-primary" />,
  },
  {
    question: 'Can I modify my campaign after it starts?',
    answer: 'Yes, you can modify your campaign parameters, targeting, creative content, and budget at any time through our advertiser dashboard. Changes typically take effect within a few hours.',
    icon: <Target size={20} className="text-primary" />,
  },
  {
    question: 'Do you offer creative design services?',
    answer: 'For our Premium plans, we include professional creative design services. For other plans, we can recommend trusted design partners or provide templates and guidelines to help you create effective ad content.',
    icon: <HelpCircle size={20} className="text-primary" />,
  },
  {
    question: 'What happens if my campaign doesn\'t perform well?',
    answer: 'We offer a 30-day money-back guarantee on all plans. If you\'re not satisfied with the results, we\'ll work with you to optimize the campaign or provide a full refund. Our success is tied to your success.',
    icon: <BarChart3 size={20} className="text-primary" />,
  },
  {
    question: 'Can I advertise products from different categories?',
    answer: 'Yes! You can run multiple campaigns for different product categories simultaneously. This is especially effective for brands with diverse product lines or seasonal promotions.',
    icon: <Target size={20} className="text-primary" />,
  },
];

const AdvertiseFAQ = () => {
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
            Advertising <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-xl text-muted">
            Everything you need to know about advertising on Urbandrop
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
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-dark pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                </div>
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
                  <p className="text-muted leading-relaxed pl-12">{faq.answer}</p>
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
            Still have questions? Our advertising specialists are here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-darkGreen transition-all">
              Contact Advertising Team
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all">
              Schedule A Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertiseFAQ;