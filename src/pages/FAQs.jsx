import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Truck, Store, Mail } from "lucide-react";

import AppDownloandBanner from "../components/home/AppDownloandBanner";
const faqCategories = [
  {
    category: "General",
    icon: <HelpCircle size={20} />,
    faqs: [
      {
        question: "What is Urbandrop?",
        answer: "Urbandrop is an online marketplace that connects you with local merchants offering a wide variety of ethnic foods and groceries. You can order from multiple stores and have everything delivered to your door.",
      },
      {
        question: "Is Urbandrop available in my city?",
        answer: "We are rapidly expanding across the UK. To see if we deliver to your area, please enter your postcode on the homepage.",
      },
    ],
  },
  {
    category: "Ordering & Delivery",
    icon: <Truck size={20} />,
    faqs: [
      {
        question: "How do I place an order?",
        answer: "Simply browse our categories or search for specific items, add them to your cart, and proceed to checkout. You'll need to create an account to complete your purchase.",
      },
      {
        question: "What are the delivery fees?",
        answer: "Delivery fees vary based on your location and the merchants you order from. The total delivery fee will be calculated and displayed at checkout before you confirm your order.",
      },
      {
        question: "Can I track my order?",
        answer: "Yes! Once your order is confirmed, you can track its status in real-time through your account dashboard or via the Urbandrop mobile app.",
      },
      {
        question: "What if an item is out of stock?",
        answer: "If an item you ordered is out of stock, the merchant may contact you to suggest a substitution. If no suitable substitution is available, you will be refunded for that item.",
      },
    ],
  },
  {
    category: "Merchants",
    icon: <Store size={20} />,
    faqs: [
      {
        question: "How do I become a merchant on Urbandrop?",
        answer: "We're always looking for great local partners! Please visit our 'Become a Merchant' page and fill out the application form. Our team will get in touch with you shortly.",
      },
    ],
  },
];

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
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].category);

	return (
		<main className="bg-[#f2f5f9] py-16 min-h-screen">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-dark">Frequently Asked Questions</h1>
					<p className="text-[#879EA4] mt-2">Find answers to the most common questions about Urbandrop.</p>
				</div>

        <div className="max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === cat.category
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
            {faqCategories.find(cat => cat.category === activeCategory)?.faqs.map((faq) => (
              <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

				<div className="text-center my-16 bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
					<h3 className="text-2xl font-bold text-[[#183A37]] mb-3">Can't find the answer you're looking for?</h3>
					<p className="text-[#879EA4] mb-6">Our support team is here to help. Get in touch with us for any questions.</p>
					<a href="mailto:support@urbandrop.com" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-dark transition-colors">
						<Mail size={20} />
						Contact Support
					</a>
				</div>
        <AppDownloandBanner compact />
			</div>
		</main>
	);
};

export default FAQs;
