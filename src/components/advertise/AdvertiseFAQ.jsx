import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Target, DollarSign, BarChart3, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AdvertiseFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { t } = useTranslation();

  const faqs = useMemo(() => {
    const items = t('advertise.faq.items', { returnObjects: true });
    // Map icons to items based on index or some logic if needed.
    // Since the original code had specific icons for specific questions, we can try to map them back.
    // Or we can just cycle through them or use a default.
    // Let's try to map them by index to match the original order.
    const icons = [
      <Target size={20} className="text-primary" />,
      <DollarSign size={20} className="text-primary" />,
      <Users size={20} className="text-primary" />,
      <BarChart3 size={20} className="text-primary" />,
      <BarChart3 size={20} className="text-primary" />,
      <DollarSign size={20} className="text-primary" />,
      <Target size={20} className="text-primary" />,
      <HelpCircle size={20} className="text-primary" />,
      <BarChart3 size={20} className="text-primary" />,
      <Target size={20} className="text-primary" />,
    ];

    return items.map((item, index) => ({
      ...item,
      icon: icons[index] || <HelpCircle size={20} className="text-primary" />,
    }));
  }, [t]);

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
            {t('advertise.faq.title')} <span className="text-primary">{t('advertise.faq.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted">
            {t('advertise.faq.subtitle')}
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
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertiseFAQ;