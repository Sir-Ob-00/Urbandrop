import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const missionHighlights = [
    {
        image: '/images/market-woman-1.jpg',
        title: 'Empower Local Merchants',
        description: 'We provide local businesses with the tools and technology to thrive in a digital-first world, expanding their reach and customer base.',
    },
    {
        image: '/images/WhatsApp Image 2025-10-14 at 20.54.17_74ee91ac.jpg',
        title: 'Simplify Shopping Experience',
        description: 'Our platform offers a seamless, user-friendly interface to make shopping for ethnic groceries and foods easier and more enjoyable than ever.',
    },
    {
        image: '/images/deliveryguy.jpg',
        title: 'Promote Sustainable Delivery',
        description: 'We are committed to efficient logistics and sustainable practices to reduce our environmental footprint while ensuring fast delivery.',
    },
];

const AboutMission = () => {
    const [startCounting, setStartCounting] = useState(false);
    const statsRef = useRef(null);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounting(true);
                }
            },
            { threshold: 0.3 }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235CB35E' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-6"
                    >
                        <span className="bg-gradient-to-r from-[#5CB35E] to-[#4a954d] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                            Our Purpose
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl font-black text-[#183A37] my-6 leading-tight">
                        Our <span className="bg-gradient-to-r from-[#5CB35E] via-[#4a954d] to-[#3d7c40] bg-clip-text text-transparent">Mission</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We are driven by a passion to build a vibrant local economy where everyone benefits — merchants grow their businesses, customers enjoy fresh authentic foods, and communities thrive together.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {missionHighlights.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={itemVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
                            }}
                            className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
                        >
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Image */}
                            <div className="relative z-10 mb-6">
                                <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 px-2">
                                <h3 className="text-2xl font-bold text-[#183A37] mb-4 group-hover:text-[#5CB35E] transition-colors duration-300">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {item.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#5CB35E]/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    ref={statsRef}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {[
                        { number: 500, label: "Local Merchants" },
                        { number: 10000, label: "Happy Customers" },
                        { number: 50, label: "Cities Covered" },
                        { number: 99, label: "Satisfaction Rate", suffix: "%" }
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                        >
                            <div className="text-3xl md:text-4xl font-black text-[#5CB35E] mb-2">
                                {startCounting && (
                                    <CountUp
                                        end={stat.number}
                                        duration={2}
                                        delay={index * 0.2}
                                        suffix={stat.suffix || "+"}
                                    />
                                )}
                                {!startCounting && (stat.suffix ? `${stat.number}${stat.suffix}` : `${stat.number}+`)}
                            </div>
                            <div className="text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMission;