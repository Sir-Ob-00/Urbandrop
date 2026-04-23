import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MerchantFAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const faqCategories = t('merchants.faq.categories', { returnObjects: true }) || [];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        setOpenIndex(null);
    };

    const toggleAccordion = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const filteredData = Array.isArray(faqCategories) ? faqCategories.map((category) => {
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
    }).filter(Boolean) : [];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-gray-900 mb-4">
                        {t('merchants.faq.title')}
                    </h2>
                    <p className="text-gray-600 mb-8">
                        {t('merchants.faq.subtitle')}
                    </p>
                    <div className="relative max-w-xl mx-auto">
                        <input
                            type="text"
                            placeholder={t('merchants.faq.searchPlaceholder')}
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
                                    <h3 className="text-h4 text-gray-900">
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
                            {t('merchants.faq.noResults', { query: searchQuery })}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MerchantFAQ;
