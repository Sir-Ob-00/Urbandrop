import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
const groceriesImage = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777236980/groceries-1_wuvw8h.avif';
const ethnicImage = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777236980/ethnic-groceries_r7acyb.avif';
const shopFromHomeImage = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220008/customer-woman_mgmxnw.jpg';
const deliveryImage = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220008/deliver-person_ueqj3m.jpg';

const ScenarioItem = ({ scenario, index, scrollYProgress, totalScenarios }) => {
    // We have 3 transitions to cover.
    // Let's use 0.0 to 0.9 for transitions, keeping 0.1 buffer at the end.
    const totalTransitionRange = 0.9;
    const step = totalTransitionRange / (totalScenarios - 1); // 0.9 / 3 = 0.3

    const start = (index - 1) * step;
    const end = index * step;

    const y = useTransform(
        scrollYProgress,
        [start, end],
        ['100%', '0%']
    );

    // Ensure z-index is set so they stack correctly
    const style = index === 0
        ? { y: '0%', zIndex: 0 }
        : { y, zIndex: index * 10 };

    return (
        <motion.div
            style={style}
            className="absolute inset-0 w-full h-full flex items-center justify-center bg-black will-change-transform"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={scenario.image}
                    alt={scenario.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h2 className="text-white mb-6 drop-shadow-2xl">
                    {scenario.title}
                </h2>
                <p className="text-body text-gray-100 drop-shadow-lg">
                    {scenario.subtitle}
                </p>
            </div>
        </motion.div>
    );
};

const CustomerScenarios = () => {
    const { t } = useTranslation();
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    const scenarios = [
        {
            id: 1,
            title: t('customer.scenarios.items.everything.title'),
            subtitle: t('customer.scenarios.items.everything.subtitle'),
            image: groceriesImage,
        },
        {
            id: 2,
            title: t('customer.scenarios.items.authentic.title'),
            subtitle: t('customer.scenarios.items.authentic.subtitle'),
            image: ethnicImage,
        },
        {
            id: 3,
            title: t('customer.scenarios.items.shopHome.title'),
            subtitle: t('customer.scenarios.items.shopHome.subtitle'),
            image: shopFromHomeImage,
        },
        {
            id: 4,
            title: t('customer.scenarios.items.delivered.title'),
            subtitle: t('customer.scenarios.items.delivered.subtitle'),
            image: deliveryImage,
        },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black z-10">
            <div className="sticky top-0 h-[100dvh] w-full overflow-hidden z-10">
                {/* Header */}
                <div className="absolute top-10 left-0 right-0 z-20 text-center pointer-events-none">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white drop-shadow-lg"
                    >
                        {t('customer.scenarios.title1')} <span className="text-primary">{t('customer.scenarios.title2')}</span>
                    </motion.h2>
                </div>

                {/* Scenarios Stack */}
                {scenarios.map((scenario, index) => (
                    <ScenarioItem
                        key={scenario.id}
                        scenario={scenario}
                        index={index}
                        scrollYProgress={scrollYProgress}
                        totalScenarios={scenarios.length}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerScenarios;
