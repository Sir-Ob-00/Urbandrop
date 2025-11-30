import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Truck, Store, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

import AppDownloandBanner from "../components/home/AppDownloandBanner";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-[#183A37]">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={24} className="text-[#5CB35E]" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQs = () => {
  const { t } = useTranslation();

  const faqCategories = useMemo(() => [
    {
      id: "general",
      category: t('faqs.categories.general'),
      icon: <HelpCircle size={20} />,
      faqs: t('faqs.items.general', { returnObjects: true }),
    },
    {
      id: "ordering",
      category: t('faqs.categories.ordering'),
      icon: <Truck size={20} />,
      faqs: t('faqs.items.ordering', { returnObjects: true }),
    },
    {
      id: "merchants",
      category: t('faqs.categories.merchants'),
      icon: <Store size={20} />,
      faqs: t('faqs.items.merchants', { returnObjects: true }),
    },
  ], [t]);

  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

  // Update active category when language changes to ensure the label matches
  // However, using the label as key is risky if it changes. Better to use an ID.
  // I added 'id' to the categories above.
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);

  const activeCategoryData = faqCategories.find(cat => cat.id === activeCategoryId) || faqCategories[0];

  return (
    <main className="bg-[#f2f5f9] py-16 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark">{t('faqs.title')}</h1>
          <p className="text-[#879EA4] mt-2">{t('faqs.subtitle')}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategoryId === cat.id
                    ? 'bg-[#5CB35E] text-white shadow-lg'
                    : 'bg-white text-dark hover:bg-primary/10'
                  }`}
              >
                {cat.icon}
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            {activeCategoryData.faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <div className="text-center my-16 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#183A37] mb-3">{t('faqs.notFound.title')}</h3>
          <p className="text-[#879EA4] mb-6">{t('faqs.notFound.desc')}</p>
          <a href="mailto:support@urbandrop.com" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-dark transition-colors">
            <Mail size={20} />
            {t('faqs.notFound.button')}
          </a>
        </div>
        <AppDownloandBanner compact />
      </div>
    </main>
  );
};

export default FAQs;
