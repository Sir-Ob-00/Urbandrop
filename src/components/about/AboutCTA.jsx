import React, { useState, useEffect, useRef } from "react";
import { motion } from 'framer-motion';
import { Download, UserPlus, ArrowRight } from 'lucide-react';
import CountUp from 'react-countup';

const AboutCTA = () => {
    const [startCounting, setStartCounting] = useState(false);
    const statsRef = useRef(null);

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
        <section className="py-20 bg-gradient-to-br from-[#5CB35E] via-[#4a954d] to-[#3d7c40] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg animate-bounce delay-500"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block mb-8"
                    >
                        <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                            Join Our Community
                        </span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                        Join the <span className="bg-[#f1be21] bg-clip-text text-transparent">Urbandrop</span> Community
                    </h2>

                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Whether you're a customer or a merchant — Urbandrop is your partner for convenience and growth. Start your journey today!
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center gap-6"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-white text-[#5CB35E] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                        >
                            <Download className="w-5 h-5" />
                            Download the App
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)" }}
                            whileTap={{ scale: 0.95 }}
                            className="group bg-[#f1be21] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#ddae1f] transition-all duration-300 shadow-xl flex items-center justify-center gap-3"
                        >
                            <UserPlus className="w-5 h-5" />
                            Become a Merchant
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </motion.button>
                    </motion.div>

                    {/* Social Proof */}
                    <motion.div
                        ref={statsRef}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 max-w-2xl mx-auto"
                    >
                        <div className="grid grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-black text-white mb-2">
                                    {startCounting && <CountUp end={500} duration={2} suffix="+" />}
                                    {!startCounting && "500+"}
                                </div>
                                <div className="text-white/80 text-sm">Merchants</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-white mb-2">
                                    {startCounting && <CountUp end={10000} duration={2} delay={0.2} suffix="+" />}
                                    {!startCounting && "10K+"}
                                </div>
                                <div className="text-white/80 text-sm">Customers</div>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-white mb-2">
                                    {startCounting && <CountUp end={50} duration={2} delay={0.4} suffix="+" />}
                                    {!startCounting && "50+"}
                                </div>
                                <div className="text-white/80 text-sm">Cities</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-auto">
                    <path fill="#ffffff" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default AboutCTA;