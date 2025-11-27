import React from 'react';
import { motion } from 'framer-motion';
import groceriesImage from '../../assets/images/features/groceries-1.avif';
import ethnicImage from '../../assets/images/features/ethnic-groceries.avif';
import shopFromHomeImage from '../../assets/images/customer/customer-woman.jpg';
import deliveryImage from '../../assets/images/customer/deliver-person.jpg';

const scenarios = [
    {
        id: 1,
        title: 'Everything You Need',
        subtitle: 'From fresh produce to pantry staples.',
        image: groceriesImage,
        align: 'bottom-left',
    },
    {
        id: 2,
        title: 'Authentic & Local',
        subtitle: 'Hard-to-find ethnic ingredients at your fingertips.',
        image: ethnicImage,
        align: 'center',
    },
    {
        id: 3,
        title: 'Shop from Home',
        subtitle: 'Skip the lines and shop with ease.',
        image: shopFromHomeImage,
        align: 'bottom-right',
    },
    {
        id: 4,
        title: 'Delivered to You',
        subtitle: 'Fresh groceries brought right to your door.',
        image: deliveryImage,
        align: 'top-left',
    },
];

const CustomerScenarios = () => {
    return (
        <section className="bg-black text-white">
            <div className="py-16 text-center bg-background">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-dark"
                >
                    Groceries Delivered at <span className="text-primary">Your Convenience</span>
                </motion.h2>
            </div>

            <div className="flex flex-col">
                {scenarios.map((scenario) => (
                    <div
                        key={scenario.id}
                        className="relative w-full h-[90vh] overflow-hidden group"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <img
                                src={scenario.image}
                                alt={scenario.title}
                                className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-700" />
                        </div>

                        {/* Content */}
                        <div className={`absolute inset-0 p-12 md:p-24 flex flex-col ${scenario.align === 'bottom-left' ? 'justify-end items-start' :
                            scenario.align === 'center' ? 'justify-center items-center text-center' :
                                scenario.align === 'bottom-right' ? 'justify-end items-end text-right' :
                                    'justify-start items-start'
                            }`}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
                                    {scenario.title}
                                </h3>
                                <p className="text-2xl md:text-3xl font-light text-gray-200">
                                    {scenario.subtitle}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerScenarios;
