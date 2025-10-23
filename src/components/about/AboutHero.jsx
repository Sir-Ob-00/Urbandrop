import { motion } from 'framer-motion';
import heroImage from '../../assets/images/hero/market-woman.jpg';

const AboutHero = () => {
    return (
        <section className="relative bg-gradient-to-br from-[#5CB35E] via-[#4a954d] to-[#3d7c40] overflow-hidden">
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

            {/* Slanted background overlay */}
            <div className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-white/60 -skew-x-12 origin-top-right backdrop-blur-sm" aria-hidden="true"></div>

            <div className="relative container mx-auto px-6 pt-32 md:pt-40 pb-32 md:pb-48">
                <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
                    {/* Left Content */}
                    <motion.div
                        className="text-white text-center md:text-left relative z-10"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-block mb-6"
                        >
                            <span className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
                                Our Story
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
                            Delivering <span className="bg-[#f1be21] bg-clip-text text-transparent">Freshness</span>.<br />
                            Connecting <span className="bg-[#f1be21] bg-clip-text text-transparent">Communities</span>.
                        </h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/90 max-w-lg mx-auto md:mx-0 leading-relaxed"
                        >
                            At Urbandrop, we're redefining how local businesses connect with customers — through speed, simplicity, and technology.
                        </motion.p>
                    </motion.div>

                    {/* Right Content - Enhanced Visual */}
                    <motion.div
                        className="mt-8 md:mt-0 text-center md:text-left relative"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="relative z-10"
                            >
                                <div className="w-full max-w-lg md:max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={heroImage}
                                        alt="Friendly local merchant"
                                        className="w-full h-full object-cover"
                                    />
                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>

                            {/* Floating Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                                className="absolute -bottom-8 -left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl z-20"
                            >
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-[#5CB35E]">500+</div>
                                    <div className="text-sm text-gray-600">Happy Merchants</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-auto">
                    <path fill="#ffffff" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default AboutHero;