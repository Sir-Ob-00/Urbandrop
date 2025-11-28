import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/images/about/generated/about_highlights_bg.png';
import { FiZap, FiUsers, FiSmartphone, FiTrendingUp, FiShield } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

const AboutHighlights = () => {
    const { t } = useTranslation();
    const highlights = [
        { icon: <FiZap />, label: t('about.highlights.item1') },
        { icon: <FiUsers />, label: t('about.highlights.item2') },
        { icon: <FiSmartphone />, label: t('about.highlights.item3') },
        { icon: <FiTrendingUp />, label: t('about.highlights.item4') },
        { icon: <FiShield />, label: t('about.highlights.item5') }
    ];

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Premium Abstract Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-serif text-white mb-4"
                    >
                        {t('about.highlights.title')}
                    </motion.h2>
                    <p className="text-green-400 font-medium tracking-widest uppercase text-sm">
                        {t('about.highlights.subtitle')}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.05 }}
                            className="w-40 h-40 md:w-48 md:h-48 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl flex flex-col items-center justify-center p-4 text-center hover:bg-white/10 transition-colors duration-300 shadow-lg hover:shadow-green-500/20"
                        >
                            <div className="text-3xl text-green-400 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-medium leading-tight">
                                {item.label}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutHighlights;
