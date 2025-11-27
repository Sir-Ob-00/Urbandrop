import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import bgImage from '../../assets/images/about/deliveryguy.jpg';

const AboutProcess = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const steps = [
        { id: "01", label: "Explore" },
        { id: "02", label: "Connect" },
        { id: "03", label: "Move" },
        { id: "04", label: "Complete" }
    ];

    return (
        <section ref={targetRef} className="relative h-[600px] overflow-hidden flex items-center bg-black">
            {/* Parallax Background */}
            <motion.div
                style={{ x, scale: 1.2 }}
                className="absolute inset-0 z-0"
            >
                <img
                    src={bgImage}
                    alt="Process Flow"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <motion.div
                    style={{ opacity }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group cursor-default"
                        >
                            <h3 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent mb-2 group-hover:from-white/40 transition-all duration-500">
                                {step.id}
                            </h3>
                            <p className="text-2xl md:text-3xl font-medium text-white tracking-wide uppercase group-hover:text-green-400 transition-colors duration-300">
                                {step.label}
                            </p>
                            <div className="w-12 h-1 bg-green-500 mx-auto mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default AboutProcess;
