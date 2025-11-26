import React from 'react';
import { motion } from 'framer-motion';
import scenarioMorning from '../../assets/images/customer/scenario_morning.png';
import scenarioParty from '../../assets/images/customer/scenario_party.png';
import scenarioHealth from '../../assets/images/customer/scenario_health.png';
import scenarioStudent from '../../assets/images/customer/scenario_student.png';

const scenarios = [
    {
        id: 1,
        title: 'Late for Work?',
        subtitle: 'Breakfast delivered fast.',
        image: scenarioMorning,
        align: 'bottom-left',
    },
    {
        id: 2,
        title: 'Hosting Friends?',
        subtitle: 'Drinks & snacks delivered instantly.',
        image: scenarioParty,
        align: 'center',
    },
    {
        id: 3,
        title: 'Feeling Sick?',
        subtitle: 'Pharmacy essentials at your doorstep.',
        image: scenarioHealth,
        align: 'bottom-right',
    },
    {
        id: 4,
        title: 'Busy Student?',
        subtitle: 'Groceries delivered right to your hostel.',
        image: scenarioStudent,
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
                    Made for Every Moment of <span className="text-primary">Your Day</span>
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
