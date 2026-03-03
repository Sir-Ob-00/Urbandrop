import React from 'react';
import { motion } from 'framer-motion';

const StoryBlock = ({ children, index, icon }) => {
    const isEven = index % 2 === 0;
    
    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative"
        >
            {/* Timeline connector */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent1"></div>
            
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-0 top-8 w-16 justify-center items-center z-10">
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-3 h-3 rounded-full bg-white border-4 border-primary shadow-lg"
                />
            </div>

            {/* Card */}
            <div className="md:ml-32 relative overflow-hidden rounded-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-80"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-20 -mt-20 group-hover:scale-125 transition-transform duration-500"></div>
                
                <div className="relative p-8 md:p-10 lg:p-12 border border-primary/10 backdrop-blur-sm rounded-2xl bg-white/60 hover:bg-white/80 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-start gap-4 md:gap-6">
                        {icon && (
                            <motion.div
                                whileHover={{ rotate: 10, scale: 1.1 }}
                                className="text-5xl md:text-6xl flex-shrink-0"
                            >
                                {icon}
                            </motion.div>
                        )}
                        <div className="flex-1">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const HighlightQuote = ({ quote }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="my-20 md:my-32 relative"
        >
            {/* Decorative background elements */}
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 bg-gradient-to-br from-primary/8 via-white to-secondary/8 border-2 border-primary/20 rounded-3xl p-8 md:p-16 lg:p-20 backdrop-blur-sm shadow-2xl">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-8xl text-primary/30 font-serif leading-none flex-shrink-0"
                    >
                        "
                    </motion.div>
                    <div className="flex-1">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-2xl md:text-4xl font-black text-gray-900 leading-tight"
                        >
                            {quote}
                        </motion.p>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent1 rounded-full mt-8 w-32"
                        ></motion.div>
                    </div>
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-7xl md:text-8xl text-primary/30 font-serif leading-none flex-shrink-0 hidden md:block"
                    >
                        "
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const OurStory = () => {
    return (
        <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 md:py-40 overflow-hidden">
            {/* Animated background gradient orbs */}
            <style>{`
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>

            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob opacity-70"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 opacity-70"></div>
            <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-accent1/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 opacity-70"></div>

            {/* Hero Intro with elegant design */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-24 md:mb-32 text-center relative z-10 px-6"
            >
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full mx-auto mb-8 max-w-xs"
                ></motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-sm md:text-base font-semibold tracking-widest text-primary uppercase mb-6"
                >
                    Our Journey
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight"
                >
                    Our Story
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl md:text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed"
                >
                    Born from a moment of empathy, built on a mission to bring culture closer to home
                </motion.p>

                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full mx-auto mt-8 max-w-xs"
                ></motion.div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Story Narrative - Enhanced Layout */}
                <div className="space-y-24 md:space-y-32 mb-24">
                    <StoryBlock index={0} icon="🌍">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">The Move & Realization</h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4 font-light">
                            When I moved from Ghana to the UK in 2022, I was filled with hope, excitement, and a deep connection to the culture I was leaving behind. But it didn't take long to notice something was missing — something many immigrants like me quietly endure.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg font-light">
                            Shopping for Ghanaian groceries, or anything African or Caribbean, often meant long trips to scattered shops, limited selections, and very little convenience. While mainstream grocery delivery apps served UK and European brands with ease, there was nothing that truly catered to ethnic communities — the very people who bring so much richness and diversity to this country.
                        </p>
                    </StoryBlock>

                    <StoryBlock index={1} icon="❤️">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">The Personal Turning Point</h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4 font-light">
                            One moment that stayed with me was when my wife's mother, after a long day, travelled to get groceries from an African store. Exhausted, she boarded a bus home and without even realizing it left all her shopping behind when she got off. Hearing her pain made something click.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg font-light">
                            It wasn't just about missing food from home. It was about how hard people have to work, how far they have to go, just to stay connected to their culture and feed their families the meals they love.
                        </p>
                    </StoryBlock>
                </div>

                {/* Highlight Quote - Elegant and Bold */}
                <HighlightQuote quote="Food is more than just ingredients — it's memory, comfort, identity." />

                {/* Story Continuation */}
                <div className="space-y-24 md:space-y-32 mb-24">
                    <StoryBlock index={2} icon="💡">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">The Birth of Urbandrop</h3>
                        <p className="text-gray-700 leading-relaxed text-lg font-light">
                            That's where the idea for Urbandrop was born.
                        </p>
                    </StoryBlock>

                    <StoryBlock index={3} icon="🚀">
                        <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed text-lg mb-4 font-light">
                            Urbandrop exists to bring relief and dignity to this experience. We're building a digital marketplace that makes it easier for Afro-Caribbean, Asian, and other ethnic communities to shop for the groceries they know and love right from their phones. No long trips. No heavy bags. Just fresh, culturally familiar products delivered with care.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-lg font-light">
                            We believe in a country that has welcomed so many people from across the world, they deserve a better, more convenient way to feel at home.
                        </p>
                    </StoryBlock>
                </div>

                {/* Closing Signature - Elegant and Powerful */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative py-20 md:py-28"
                >
                    {/* Decorative top divider */}
                    <div className="flex items-center justify-center gap-4 mb-16 md:mb-20">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-primary/50"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="text-3xl flex-shrink-0"
                        >
                            ✦
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-primary/50"
                        ></motion.div>
                    </div>

                    <div className="text-center max-w-4xl mx-auto">
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-4"
                        >
                            This is our mission.
                        </motion.h3>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-4"
                        >
                            This is our story.
                        </motion.h3>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-primary via-secondary to-accent1 bg-clip-text text-transparent"
                        >
                            And we're just getting started.
                        </motion.h3>
                        
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 0.8, duration: 0.8 }}
                            className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent1 rounded-full mx-auto mt-12 max-w-xs"
                        ></motion.div>
                    </div>

                    {/* Decorative bottom divider */}
                    <div className="flex items-center justify-center gap-4 mt-16 md:mt-20">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-primary/50"
                        ></motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="text-3xl flex-shrink-0"
                        >
                            ✦
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-primary/50"
                        ></motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
