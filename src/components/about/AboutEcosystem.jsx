import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bgImage from '../../assets/images/about/generated/about_ecosystem_bg.png';
import { FiArrowRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const AboutEcosystem = () => {
    const { t } = useTranslation();
    const [activeItem, setActiveItem] = useState(0);

    const items = [
        { id: 0, title: t('about.ecosystem.customers.title'), subtitle: t('about.ecosystem.customers.subtitle') },
        { id: 1, title: t('about.ecosystem.merchants.title'), subtitle: t('about.ecosystem.merchants.subtitle') },
        { id: 2, title: t('about.ecosystem.riders.title'), subtitle: t('about.ecosystem.riders.subtitle') },
        { id: 3, title: t('about.ecosystem.businesses.title'), subtitle: t('about.ecosystem.businesses.subtitle') }
    ];

    return (
        <section className="relative bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[800px]">
                {/* Left Side: Immersive Image */}
                <div className="lg:w-1/2 relative h-[500px] lg:h-auto overflow-hidden">
                    <motion.div
                        className="absolute inset-0"
                        initial={{ scale: 1.1 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        <img
                            src={bgImage}
                            alt="Digital Ecosystem"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t lg:from-black/60 lg:to-transparent"></div>
                    </motion.div>

                    <div className="absolute bottom-12 left-12 z-10">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {t('about.ecosystem.title')}
                        </h2>
                        <p className="text-white/80 text-lg">{t('about.ecosystem.subtitle')}</p>
                    </div>
                </div>

                {/* Right Side: Minimal Interactive List */}
                <div className="lg:w-1/2 bg-gray-50 flex items-center p-12 lg:p-24">
                    <div className="w-full max-w-lg">
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="relative border-b border-gray-200 py-8 cursor-pointer group"
                                onMouseEnter={() => setActiveItem(item.id)}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h3 className={`text-3xl md:text-4xl font-light transition-colors duration-300 ${activeItem === item.id ? 'text-gray-900' : 'text-gray-400'}`}>
                                            {item.title}
                                        </h3>
                                        <AnimatePresence>
                                            {activeItem === item.id && (
                                                <motion.p
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="text-green-600 font-medium mt-2 overflow-hidden"
                                                >
                                                    {item.subtitle}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>

                                    <motion.div
                                        animate={{
                                            opacity: activeItem === item.id ? 1 : 0,
                                            x: activeItem === item.id ? 0 : -20
                                        }}
                                    >
                                        <FiArrowRight className="w-8 h-8 text-green-600" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutEcosystem;
