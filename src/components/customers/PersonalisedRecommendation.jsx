import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import jollofKitchenImage from '../../assets/images/customer/BITTER-GOURD_400x.jpg';
import ampesiCustomerImage from '../../assets/images/customer/POUNDO-IYAN-BLUE-BAY-1KG×12.jpg';
import doroWatImage from '../../assets/images/customer/DRPEPPER330ml.jpg';
import deliverPersonImage from '../../assets/images/customer/deliver-person.jpg';

const PersonalisedRecommendation = () => {
    const [activeId, setActiveId] = useState(1);
    const { t } = useTranslation();

    const categories = [
        {
            id: 1,
            name: t('customer.recommendation.categories.topPicks.name'),
            description: t('customer.recommendation.categories.topPicks.desc'),
            image: jollofKitchenImage,
        },
        {
            id: 2,
            name: t('customer.recommendation.categories.trending.name'),
            description: t('customer.recommendation.categories.trending.desc'),
            image: doroWatImage,
        },
        {
            id: 3,
            name: t('customer.recommendation.categories.fastest.name'),
            description: t('customer.recommendation.categories.fastest.desc'),
            image: deliverPersonImage,
        },
        {
            id: 4,
            name: t('customer.recommendation.categories.budget.name'),
            description: t('customer.recommendation.categories.budget.desc'),
            image: ampesiCustomerImage,
        },
    ];

    return (
        <section className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-end justify-between"
                >
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-dark mb-2">
                            {t('customer.recommendation.title1')} <span className="text-primary">{t('customer.recommendation.title2')}</span>
                        </h2>
                        <p className="text-muted text-lg">{t('customer.recommendation.subtitle')}</p>
                    </div>

                    {/* Mobile/Tablet indicator or controls could go here if needed */}
                </motion.div>

                {/* Desktop/Tablet Expanding Layout */}
                <div className="hidden md:flex h-[500px] gap-4">
                    {categories.map((category) => (
                        <motion.div
                            key={category.id}
                            layout
                            onClick={() => setActiveId(category.id)}
                            onHoverStart={() => setActiveId(category.id)}
                            className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${activeId === category.id ? 'flex-[3]' : 'flex-[1]'
                                }`}
                        >
                            {/* Background Image */}
                            <motion.img
                                layoutId={`image-${category.id}`}
                                src={category.image}
                                alt={category.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />

                            {/* Overlay */}
                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 ${activeId === category.id ? 'opacity-80' : 'opacity-60 hover:opacity-70'
                                }`} />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <motion.div layout className="flex flex-col items-start">
                                    {/* Title - Always visible but transforms */}
                                    <motion.h3
                                        layout="position"
                                        className={`font-bold text-white mb-2 leading-tight ${activeId === category.id ? 'text-3xl' : 'text-xl'
                                            }`}
                                    >
                                        {category.name}
                                    </motion.h3>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {activeId === category.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <p className="text-gray-200 mb-6 text-lg max-w-md">
                                                    {category.description}
                                                </p>
                                                <button className="flex items-center gap-2 bg-white/20 backdrop-blur-md text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-all group">
                                                    {t('customer.recommendation.explore')}
                                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Vertical Stack Layout */}
                <div className="md:hidden flex flex-col gap-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="relative h-[200px] rounded-2xl overflow-hidden"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6">
                                <h3 className="text-xl font-bold text-white">{category.name}</h3>
                                <p className="text-sm text-gray-300">{category.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PersonalisedRecommendation;
