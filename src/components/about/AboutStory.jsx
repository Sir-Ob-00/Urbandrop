import React from "react";
import { motion } from 'framer-motion';
import storyImage from '../../assets/images/slider-urbandrop.png';

const AboutStory = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235CB35E' fill-opacity='0.05'%3E%3Ccircle cx='50' cy='50' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 right-10 w-24 h-24 bg-[#5CB35E]/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#183A37]/10 rounded-full blur-xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 items-center gap-12">
                    {/* Left: Image */}
                    <motion.div
                        className="relative order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="relative z-10"
                            >
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <img
                                        src={storyImage}
                                        alt="Urbandrop delivery service"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

                            {/* Floating Quote */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="absolute -top-8 -right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-xs z-20"
                            >
                                <div className="text-[#5CB35E] text-4xl mb-2">"</div>
                                <p className="text-gray-700 text-sm italic">
                                    Connecting communities through fresh, authentic flavors
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Text Content */}
                    <motion.div
                        className="text-center md:text-left order-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="inline-block mb-4"
                        >
                            <span className="bg-gradient-to-r from-[#5CB35E] to-[#4a954d] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                                Our Journey
                            </span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-black text-[#183A37] mb-4 leading-tight">
                            Our <span className="bg-gradient-to-r from-[#5CB35E] via-[#4a954d] to-[#3d7c40] bg-clip-text text-transparent">Story</span>
                        </h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="space-y-4"
                        >
                            <p className="text-lg text-gray-700 leading-relaxed">
                                "Urbandrop began as a small idea — connecting corner shops with nearby customers. Today, it's a growing network of local commerce powered by innovation and care. Our journey has been one of constant learning and adaptation, always with our community of merchants and customers at heart."
                            </p>

                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 bg-gradient-to-br from-[#5CB35E] to-[#4a954d] rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">U</span>
                                    </div>
                                    <div>
                                        <div className="font-bold text-[#183A37] text-sm">Urbandrop Team</div>
                                        <div className="text-xs text-gray-600">Founded 2023</div>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic text-sm">
                                    "We're excited for what's next as we continue to grow and serve you better."
                                </p>
                            </div>

                            {/* Timeline */}
                            <div className="space-y-3">
                                {[
                                    { year: "2023", event: "Founded with 50 local merchants" },
                                    { year: "2024", event: "Expanded to 10 cities, 500+ merchants" },
                                    { year: "2025", event: "Launched mobile app, 10K+ customers" }
                                ].map((milestone, index) => (
                                    <motion.div
                                        key={milestone.year}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 bg-[#5CB35E] rounded-full flex-shrink-0"></div>
                                        <div className="text-sm">
                                            <span className="font-bold text-[#5CB35E]">{milestone.year}:</span> {milestone.event}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutStory;