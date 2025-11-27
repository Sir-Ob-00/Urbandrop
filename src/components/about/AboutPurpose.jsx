import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/images/about/generated/about_purpose_bg.png';

const AboutPurpose = () => {
    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like fixed effect */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Merchant and customer connection"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-thin text-white mb-8 tracking-tight">
                        Built With a <span className="font-serif italic">Purpose</span>
                    </h2>

                    <div className="h-1 w-24 bg-white/50 mx-auto mb-8"></div>

                    <p className="text-xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                        "To simplify daily movement and bring convenience closer to people."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutPurpose;
