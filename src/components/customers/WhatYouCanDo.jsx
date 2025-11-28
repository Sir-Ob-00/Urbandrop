import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import bubbleMeals from '../../assets/images/customer/buy groceries.jpg';
import bubbleGroceries from '../../assets/images/customer/buy errands.jpg';
import bubbleParcels from '../../assets/images/customer/ethnic flavor.jpg';

// Reusing images as per original file
const bubbleErrands = bubbleParcels;
const bubbleEthnic = bubbleMeals;

const WhatYouCanDo = () => {
    const { t } = useTranslation();

    const features = [
        {
            id: 2,
            title: t('customer.whatYouCanDo.items.groceries.title'),
            description: t('customer.whatYouCanDo.items.groceries.desc'),
            image: bubbleGroceries,
            className: 'md:col-span-1 md:row-span-2', // Tall item on the left
        },
        {
            id: 4,
            title: t('customer.whatYouCanDo.items.errands.title'),
            description: t('customer.whatYouCanDo.items.errands.desc'),
            image: bubbleErrands,
            className: 'md:col-span-2 md:row-span-1', // Wide item top right
        },
        {
            id: 5,
            title: t('customer.whatYouCanDo.items.ethnic.title'),
            description: t('customer.whatYouCanDo.items.ethnic.desc'),
            image: bubbleEthnic,
            className: 'md:col-span-2 md:row-span-1', // Wide item bottom right
        },
    ];

    return (
        <section className="py-24 bg-[#fff5ea] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        {t('customer.whatYouCanDo.title')}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {t('customer.whatYouCanDo.desc')}
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.id}
                            className={`relative group rounded-3xl overflow-hidden shadow-lg cursor-pointer ${feature.className}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4 line-clamp-2">
                                        {feature.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 text-[#5CB35E]">
                                        {t('customer.whatYouCanDo.learnMore')} <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhatYouCanDo;
