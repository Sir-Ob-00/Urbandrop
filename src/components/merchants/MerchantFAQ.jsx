import React, { useState } from 'react';

const MerchantFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const faqData = [
        {
            category: "Getting Started",
            items: [
                {
                    question: "How do I become a merchant on Urbandrop?",
                    answer: "To become a merchant, click on 'Sign Up as a Merchant' and provide your business details. Our team will review your application and guide you through the onboarding process."
                },
                {
                    question: "What documents are required to register?",
                    answer: "You will need a valid business license, proof of ID, and bank account details for payouts. Specific requirements may vary by region."
                }
            ]
        },
        {
            category: "Product & Inventory Management",
            items: [
                {
                    question: "How do I add products to my store?",
                    answer: "Log in to your Merchant Dashboard, navigate to the 'Products' secton, and click 'Add New Product'. Fill in the product details, upload images, and set your pricing and inventory levels."
                },
                {
                    question: "Can I manage inventory levels automatically?",
                    answer: "Yes, our platform tracks your stock levels based on sales. You can also manually adjust inventory through the dashboard when you receive new shipments."
                }
            ]
        },
        {
            category: "Orders & Fulfillment",
            items: [
                {
                    question: "How am I notified of a new order?",
                    answer: "You will receive real-time notifications via email and the Merchant App. The order will also appear immediately in the 'Active Orders' tab of your dashboard."
                },
                {
                    question: "Who handles the delivery?",
                    answer: "Urbandrop's network of delivery partners handles the fulfillment. Once an order is prepared, you request a pickup, and our partner delivers it to the customer."
                }
            ]
        },
        {
            category: "Payments & Earnings",
            items: [
                {
                    question: "When and how do I get paid?",
                    answer: "Payouts are processed weekly on Tuesdays for all completed orders from the previous week. Funds are directly deposited into the bank account you registered with."
                },
                {
                    question: "What are the fees for selling on Urbandrop?",
                    answer: "We charge a commission on each successful sale. The exact percentage depends on your product category and subscription plan. There are no setup fees."
                }
            ]
        },
        {
            category: "Technical Support",
            items: [
                {
                    question: "Who do I contact if I have a problem?",
                    answer: "Our dedicated Merchant Support team is available 24/7. You can reach us via live chat in your dashboard, email, or our priority phone line."
                },
                {
                    question: "What if the Merchant Dashboard goes down?",
                    answer: "In the rare event of an outage, check our status page for updates. Our engineering team actively monitors system health to ensure maximum uptime."
                }
            ]
        }
    ];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setOpenIndex(null);
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Merchant FAQ
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Everything you need to know about selling on Urbandrop.
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder="Search resources..."
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
                            <div key={catIndex} className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <button
                                    className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                                    onClick={() => toggleAccordion(catIndex)}
                                >
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {category.category}
                                    </h3>
                                    <span className={`transform transition-transform duration-300 ${openIndex === catIndex ? 'rotate-180' : ''}`}>
                                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === catIndex ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="px-6 pb-5 pt-0 border-t border-gray-200">
                                        <div className="space-y-6 mt-4">
                                            {category.items.map((item, itemIndex) => (
                                                <div key={itemIndex} className="bg-white rounded-lg p-5 shadow-sm">
                                                    <h4 className="font-medium text-gray-900 mb-2">{item.question}</h4>
                                                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">{item.answer}</p>
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

export default MerchantFAQ;
