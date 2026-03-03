import React from 'react';
import { motion } from 'framer-motion';

const StoryBlock = ({ children, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`py-8 px-6 md:px-8 rounded-lg ${
                index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
        >
            {children}
        </motion.div>
    );
};

const HighlightQuote = ({ quote }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="my-12 relative"
        >
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border-l-4 border-primary rounded-r-lg p-8 md:p-12 flex items-center gap-6">
                <span className="text-6xl text-primary/20 font-serif">"</span>
                <div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-4">
                        {quote}
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                </div>
            </div>
        </motion.div>
    );
};

const OurStory = () => {
    return (
        <section className="bg-white py-16 md:py-24">
            {/* Hero Intro */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-16 md:mb-24 text-center"
            >
                <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-4 leading-tight">
                    Our Story
                </h2>
                <p className="text-xl md:text-2xl text-primary font-semibold">
                    Bringing culture closer to home
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto px-6">
                {/* Story Narrative - Two Column Layout */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
                    {/* Left Column: Story Text */}
                    <div className="space-y-6">
                        <StoryBlock index={0}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Move & Realization</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                When I moved from Ghana to the UK in 2022, I was filled with hope, excitement, and a deep connection to the culture I was leaving behind. But it didn't take long to notice something was missing — something many immigrants like me quietly endure.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">
                                Shopping for Ghanaian groceries, or anything African or Caribbean, often meant long trips to scattered shops, limited selections, and very little convenience. While mainstream grocery delivery apps served UK and European brands with ease, there was nothing that truly catered to ethnic communities — the very people who bring so much richness and diversity to this country.
                            </p>
                        </StoryBlock>

                        <StoryBlock index={1}>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Personal Turning Point</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                One moment that stayed with me was when my wife's mother, after a long day, travelled to get groceries from an African store. Exhausted, she boarded a bus home and without even realizing it left all her shopping behind when she got off. Hearing her pain made something click.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-lg mt-4">
                                It wasn't just about missing food from home. It was about how hard people have to work, how far they have to go, just to stay connected to their culture and feed their families the meals they love.
                            </p>
                        </StoryBlock>
                    </div>

                    {/* Right Column: Visual/Accent Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="hidden md:flex flex-col justify-between"
                    >
                        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 rounded-2xl p-12 h-full flex flex-col items-center justify-center">
                            <div className="text-center">
                                <div className="mb-6 text-6xl">🌍</div>
                                <p className="text-gray-700 text-lg font-semibold mb-4">
                                    Connecting Global Communities
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    From Ghana to the UK and across the world, people deserve convenient access to the foods and cultures they love.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Highlight Quote */}
                <HighlightQuote quote="Food is more than just ingredients — it's memory, comfort, identity." />

                {/* Birth of Urbandrop & Mission */}
                <div className="space-y-6 mb-16">
                    <StoryBlock index={2}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">The Birth of Urbandrop</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            That's where the idea for Urbandrop was born.
                        </p>
                    </StoryBlock>

                    <StoryBlock index={3}>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Urbandrop exists to bring relief and dignity to this experience. We're building a digital marketplace that makes it easier for Afro-Caribbean, Asian, and other ethnic communities to shop for the groceries they know and love right from their phones. No long trips. No heavy bags. Just fresh, culturally familiar products delivered with care.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-lg mt-4">
                            We believe in a country that has welcomed so many people from across the world, they deserve a better, more convenient way to feel at home.
                        </p>
                    </StoryBlock>
                </div>

                {/* Closing Signature Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center py-12 md:py-16"
                >
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
                            This is our mission.<br />
                            This is our story.<br />
                            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                And we're just getting started.
                            </span>
                        </h3>
                        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default OurStory;
