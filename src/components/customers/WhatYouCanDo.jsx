import React from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import bubbleMeals from '../../assets/images/customer/bubble_meals.png';
import bubbleGroceries from '../../assets/images/customer/bubble_groceries.png';
import bubbleParcels from '../../assets/images/customer/bubble_parcels.png';

// Reusing images due to generation limit
const bubbleErrands = bubbleParcels;
const bubbleEthnic = bubbleMeals;

const features = [
    {
        id: 1,
        title: 'Order Meals',
        image: bubbleMeals,
        color: 'from-orange-500/20 to-red-500/20',
    },
    {
        id: 2,
        title: 'Buy Groceries',
        image: bubbleGroceries,
        color: 'from-green-500/20 to-yellow-500/20',
    },
    {
        id: 3,
        title: 'Send Parcels',
        image: bubbleParcels,
        color: 'from-blue-500/20 to-purple-500/20',
    },
    {
        id: 4,
        title: 'Hire Errands',
        image: bubbleErrands,
        color: 'from-cyan-500/20 to-teal-500/20',
    },
    {
        id: 5,
        title: 'Ethnic Flavors',
        image: bubbleEthnic,
        color: 'from-amber-500/20 to-orange-500/20',
    },
];

const FeatureOrb = ({ feature }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) - width / 2;
        const y = (clientY - top) - height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const rotateX = useTransform(mouseY, [-100, 100], [15, -15]);
    const rotateY = useTransform(mouseX, [-100, 100], [-15, 15]);

    const springConfig = { damping: 15, stiffness: 150 };
    const springRotateX = useSpring(rotateX, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);

    return (
        <motion.div
            className="w-48 h-48 md:w-64 md:h-64 perspective-1000 cursor-pointer group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.15, zIndex: 50 }}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="w-full h-full relative preserve-3d"
                style={{
                    rotateX: springRotateX,
                    rotateY: springRotateY,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* The 3D Orb */}
                <div className="absolute inset-0 rounded-full overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-shadow duration-500">
                    {/* Clear Image Layer */}
                    <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        style={{ translateZ: 20 }}
                    />

                    {/* Subtle Glass Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 rounded-full pointer-events-none" />
                    <div className="absolute inset-0 rounded-full ring-1 ring-white/20 group-hover:ring-white/50 transition-all duration-500" />
                </div>

                {/* Label */}
                <motion.div
                    className="absolute -bottom-10 left-0 right-0 text-center"
                    style={{ translateZ: 40 }}
                >
                    <h3 className="text-lg md:text-xl font-bold text-white tracking-wide drop-shadow-lg group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                    </h3>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const WhatYouCanDo = () => {
    return (
        <section className="py-20 bg-[#0a0a0a] overflow-hidden relative min-h-[100vh] flex flex-col justify-center items-center">
            {/* CSS for Orbit Animation */}
            <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counter-orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .orbit-container:hover {
          animation-play-state: paused;
        }
        .orbit-container:hover .orbit-item {
          animation-play-state: paused;
        }
      `}</style>

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            {/* Center Title */}
            <div className="relative z-20 text-center mb-12 md:mb-0 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold text-white tracking-tighter drop-shadow-2xl"
                >
                    What You<br />Can Do
                </motion.h2>
            </div>

            {/* Desktop Orbital Layout */}
            <div className="hidden md:flex relative w-[800px] h-[800px] justify-center items-center">
                {/* Rotating Container */}
                <div
                    className="orbit-container absolute w-full h-full rounded-full border border-white/5"
                    style={{ animation: 'orbit 40s linear infinite' }}
                >
                    {features.map((feature, index) => {
                        const angle = (index / features.length) * 360;
                        return (
                            <div
                                key={feature.id}
                                className="absolute top-1/2 left-1/2"
                                style={{
                                    transform: `rotate(${angle}deg) translate(350px) rotate(-${angle}deg)`,
                                }}
                            >
                                <div
                                    className="orbit-item"
                                    style={{ animation: 'counter-orbit 40s linear infinite' }}
                                >
                                    <div className="-translate-x-1/2 -translate-y-1/2">
                                        <FeatureOrb feature={feature} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>


            {/* Mobile: Swipeable 3D Scroll (Preserved for usability) */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory px-6 gap-6 pb-20 pt-10 no-scrollbar w-full">
                {features.map((feature) => (
                    <div key={feature.id} className="snap-center shrink-0">
                        <FeatureOrb feature={feature} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WhatYouCanDo;
