import React from "react";
import { motion } from 'framer-motion';
import { Store, ShoppingCart, Rocket, Download, UserPlus } from 'lucide-react';
import heroImage from '../assets/images/hero/market-woman-1.jpg';
import storyImage from '../assets/images/slider-urbandrop.png';

const missionHighlights = [
    {
        icon: <Store className="w-10 h-10 text-[#5CB35E]" />,
        title: 'Empower Local Merchants',
        description: 'We provide local businesses with the tools and technology to thrive in a digital-first world, expanding their reach and customer base.',
    },
    {
        icon: <ShoppingCart className="w-10 h-10 text-[#5CB35E]" />,
        title: 'Simplify Shopping Experience',
        description: 'Our platform offers a seamless, user-friendly interface to make shopping for ethnic groceries and foods easier and more enjoyable than ever.',
    },
    {
        icon: <Rocket className="w-10 h-10 text-[#5CB35E]" />,
        title: 'Promote Sustainable Delivery',
        description: 'We are committed to efficient logistics and sustainable practices to reduce our environmental footprint while ensuring fast delivery.',
    },
];

const AboutUs = () => {
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

	return (
		<>
            <main className="bg-white">
                {/* 1. Hero Section */}
                <section className="relative bg-[#5CB35E]">
                    {/* Slanted gray background */}
                    <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-[#f2f5f9] -skew-x-12 origin-top-right" aria-hidden="true"></div>
                    <div className="relative container mx-auto px-6 pt-20 md:pt-32 pb-56 md:pb-72">
                        <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                            {/* Left Content (on green) */}
                            <motion.div 
                                className="text-white text-center md:text-left"
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            >
                                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                                    Delivering Freshness. <br /> Connecting Communities.
                                </h1>
                            </motion.div>

                            {/* Right Content (on gray) */}
                            <motion.div 
                                className="mt-8 md:mt-0 text-center md:text-left"
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                            >
                                <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto md:mx-0 md:pl-8">
                                    At Urbandrop, we’re redefining how local businesses connect with customers — through speed, simplicity, and technology.
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Overlapping Image (centered relative to the container) */}
                   {/*  <motion.div
                        className="absolute left-1/2 top-[55%] md:top-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center z-20 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.85, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        aria-hidden="true"
                    >
                        <div className="container mx-auto px-6">
                            <div className="w-full h-auto rounded-2xl overflow-hidden shadow-2xl">
                                <img src={heroImage} alt="Friendly local merchant" className="w-full h-full object-cover block" />
                            </div>
                        </div>
                    </motion.div> */}
                </section>

                {/* 2. Our Mission */}
                <section className="pt-48 pb-16 md:pt-80 md:pb-24 my-16">
                    <div className="container mx-auto px-6">
                        <motion.div
                            className="text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-dark">Our <span className="text-[#5CB35E]">Mission</span></h2>
                            <p className="mt-3 text-gray-600">We are driven by a passion to build a vibrant local economy where everyone benefits.</p>
                        </motion.div>

                        <motion.div
                            className="mt-12 grid md:grid-cols-3 gap-8 text-center"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {missionHighlights.map((item) => (
                                <motion.div key={item.title} className="bg-gray-50 p-8 rounded-xl" variants={itemVariants}>
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-dark mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* 3. Our Story */}
                <section className="bg-[#f2f5f9] py-16 md:py-24 relative">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
                        {/* Left: Image (overlapping on desktop) */}
                        <motion.div
                            className="relative md:h-full order-1"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <img
                                src={storyImage}
                                alt="Urbandrop delivery service"
                                className="w-full max-w-md mx-auto md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:w-[700px] md:max-w-none"
                            />
                        </motion.div>

                        {/* Right: Text Content */}
                        <motion.div
                            className="text-center md:text-left order-2"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-[#5CB35E]">Our Story</h2>
                            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
                                “Urbandrop began as a small idea — connecting corner shops with nearby customers. Today, it’s a growing network of local commerce powered by innovation and care. Our journey has been one of constant learning and adaptation, always with our community of merchants and customers at heart. We're excited for what's next as we continue to grow and serve you better.”
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* 5. CTA Section */}
                <section className="py-16 mt-16 md:py-24">
                    <div className="container mx-auto px-6 text-center max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark">Join the <span className="text-[#5CB35E] italic">Urbandrop</span> Community</h2>
                        <p className="mt-3 text-gray-600 mb-8">Whether you’re a customer or a merchant — Urbandrop is your partner for convenience and growth.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="/get-the-app" className="inline-flex items-center justify-center gap-2 bg-[#5CB35E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#183A37] transition-colors text-lg">
                                <Download size={20} />
                                Download the App
                            </a>
                            <a href="/become-merchant" className="inline-flex items-center justify-center gap-2 bg-[#183A37] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#5CB35E] transition-colors text-lg">
                                <UserPlus size={20} />
                                Become a Merchant
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
	);
};

export default AboutUs;
