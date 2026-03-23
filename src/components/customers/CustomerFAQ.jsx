import React, { useState } from 'react';

const CustomerFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const faqData = [
        {
            category: "Account & Login",
            items: [
                {
                    question: "How do I create an account?",
                    answer: "To create an account, click on the 'Sign Up' button at the top right corner of the home page. Fill in your details including your name, email address, and a secure password. You'll receive a confirmation email to verify your account."
                },
                {
                    question: "I forgot my password. How can I reset it?",
                    answer: "Click on 'Forgot Password' on the login page. Enter your registered email address, and we'll send you instructions to reset your password securely."
                }
            ]
        },
        {
            category: "Ordering & Checkout",
            items: [
                {
                    question: "How do I place an order?",
                    answer: "Browse our products, select the items you want, and click 'Add to Cart'. When you're ready, click the cart icon and proceed to checkout. Follow the prompts to enter your shipping and payment information."
                },
                {
                    question: "Can I modify or cancel my order after placing it?",
                    answer: "You can modify or cancel your order within 1 hour of placing it. Go to 'My Orders' in your account, select the order, and choose the modify or cancel option. If it's been more than 1 hour, please contact our support team."
                }
            ]
        },
        {
            category: "Payments",
            items: [
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay."
                },
                {
                    question: "Are my payment details secure?",
                    answer: "Yes, we use industry-standard SSL encryption to protect your payment details. We do not store your full credit card information on our servers."
                }
            ]
        },
        {
            category: "Delivery & Tracking",
            items: [
                {
                    question: "How long does delivery usually take?",
                    answer: "Standard delivery typically takes 3-5 business days. Expedited shipping options are available at checkout for faster delivery."
                },
                {
                    question: "How can I track my order?",
                    answer: "Once your order ships, you'll receive a confirmation email with a tracking link. You can also track your order status in the 'My Orders' section of your account."
                }
            ]
        },
        {
            category: "Returns & Refunds",
            items: [
                {
                    question: "What is your return policy?",
                    answer: "We accept returns within 30 days of delivery. Items must be in their original condition and packaging. Some exclusions apply; please refer to our full return policy for details."
                },
                {
                    question: "How long does it take to process a refund?",
                    answer: "Once we receive your returned item, it typically takes 5-7 business days to process your refund. The funds will be credited back to your original payment method."
                }
            ]
        },
        {
            category: "Technical Issues",
            items: [
                {
                    question: "The website is not loading properly. What should I do?",
                    answer: "Try clearing your browser cache and cookies, or accessing the site using an incognito window. If the problem persists, please contact our technical support."
                },
                {
                    question: "I'm having trouble with the mobile app. Where can I get help?",
                    answer: "Make sure you have the latest version of the app installed. If issues continue, try reinstalling the app or contact our app support team with your device details."
                }
            ]
        }
    ];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setOpenIndex(null); // Close any open accordion when searching
    };

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const filteredData = faqData.map((category) => {
        const isCategoryMatch = category.category.toLowerCase().includes(searchQuery.toLowerCase());
        const matchedItems = category.items.filter(
            (item) =>
                item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );

        if (isCategoryMatch || matchedItems.length > 0) {
            return {
                ...category,
                items: isCategoryMatch && matchedItems.length === 0 ? category.items : matchedItems,
            };
        }
        return null;
    }).filter(Boolean);

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 mb-8">
                        Find answers to common questions about using Urbandrop.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search FAQs..."
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg shadow-sm"
                        />
                        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                            <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    {filteredData.length > 0 ? (
                        filteredData.map((category, catIndex) => (
                            <div key={catIndex} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <button
                                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    onClick={() => toggleAccordion(catIndex)}
                                >
                                    <h3 className="text-h4 text-gray-900">
                                        {category.category}
                                    </h3>
                                    <span className={`transform transition-transform duration-300 ${openIndex === catIndex ? 'rotate-180' : ''}`}>
                                        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === catIndex ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-5 pt-0 border-t border-gray-100">
                                        <div className="space-y-6 mt-4">
                                            {category.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="bg-gray-50 rounded-lg p-5">
                                                    <p className="font-medium text-gray-900 mb-2">{item.question}</p>
                                                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            No results found for "{searchQuery}". Try a different term.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CustomerFAQ;
