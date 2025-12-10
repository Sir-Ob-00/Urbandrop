import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import deliverPerson from '../../assets/images/customer/deliver-person.jpg';
import customerWoman from '../../assets/images/customer/customer-woman.jpg';
import ladyUrbandrop from '../../assets/images/customer/lady-urbandrop.jpg';

const Particle = ({ delay }) => (
    <motion.div
        className="absolute w-1 h-1 bg-white rounded-full opacity-0"
        initial={{ y: 0, x: 0, opacity: 0 }}
        animate={{
            y: -100,
            x: Math.random() * 50 - 25,
            opacity: [0, 0.8, 0],
        }}
        transition={{
            duration: Math.random() * 2 + 2,
            repeat: Infinity,
            delay: delay,
            ease: "linear",
        }}
        style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        }}
    />
);

const BenefitCard = ({ benefit, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax for the container
    const yContainer = useTransform(scrollYProgress, [0, 1], [50, -50]);
    // Parallax for the image (internal depth)
    const yImage = useTransform(scrollYProgress, [0, 1], [-30, 30]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const yTilt = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(yTilt, { stiffness: 150, damping: 15 });

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct * 20);
        yTilt.set(yPct * -20);
    }

    function handleMouseLeave() {
        x.set(0);
        yTilt.set(0);
    }

    return (
        <motion.div
            ref={ref}
            style={{ y: yContainer, opacity }}
            className={`relative w-full md:w-[55%] h-[70vh] md:h-[90vh] flex flex-col ${benefit.align === 'right' ? 'md:ml-auto' : ''
                } ${index !== 0 ? '-mt-20 md:-mt-40' : ''}`} // Negative margin for overlap
        >
            <motion.div
                animate={{ y: [0, -15, 0] }} // Continuous floating oscillation
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 1.5,
                }}
                className="w-full h-full"
            >
                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX: mouseY,
                        rotateY: mouseX,
                        transformStyle: "preserve-3d",
                    }}
                    className="w-full h-full relative rounded-[3rem] overflow-hidden cursor-pointer group perspective-1000 shadow-2xl"
                >
                    {/* Image Background with Internal Parallax */}
                    <motion.div
                        className="absolute inset-0 w-full h-[120%] -top-[10%]" // Larger height for parallax
                        style={{ y: yImage }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={benefit.image}
                            alt={benefit.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90 transition-opacity duration-500" />
                    </motion.div>

                    {/* Particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(5)].map((_, i) => (
                            <Particle key={i} delay={i * 0.5} />
                        ))}
                    </div>

                    {/* Content */}
                    <div className={`absolute inset-0 p-12 flex flex-col justify-end z-10 ${benefit.align === 'right' ? 'items-end text-right' : 'items-start text-left'}`}>
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            style={{ translateZ: 80 }}
                        >
                            <h3 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl tracking-tighter">
                                {benefit.title}
                            </h3>
                            <div className={`h-1 w-20 bg-primary mb-6 rounded-full ${benefit.align === 'right' ? 'ml-auto' : ''}`} />
                            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wide max-w-md">
                                {benefit.subtitle}
                            </p>
                        </motion.div>
                    </div>

                    {/* Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />

                    {/* Glass Border */}
                    <div className="absolute inset-0 border border-white/10 rounded-[3rem] pointer-events-none" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

const UrbandropBenefit = () => {
    const { t } = useTranslation();

    const benefits = [
        {
            id: 1,
            title: t('customer.benefits.items.saveTime.title'),
            subtitle: t('customer.benefits.items.saveTime.subtitle'),
            image: deliverPerson,
            align: 'left',
        },
        {
            id: 2,
            title: t('customer.benefits.items.comfort.title'),
            subtitle: t('customer.benefits.items.comfort.subtitle'),
            image: customerWoman,
            align: 'right',
        },
        {
            id: 3,
            title: t('customer.benefits.items.convenience.title'),
            subtitle: t('customer.benefits.items.convenience.subtitle'),
            image: ladyUrbandrop,
            align: 'left',
        },
    ];

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-[90rem] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-40"
                >
                    <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                        {t('customer.benefits.title1')} <span className="text-[#5CB35E]">{t('customer.benefits.title2')}</span><span className="text-yellow-400">{t('customer.benefits.title3')}</span>{t('customer.benefits.title4')}
                    </h2>
                    <p className="text-2xl text-gray-400 max-w-3xl mx-auto font-light">
                        {t('customer.benefits.subtitle')}
                    </p>
                </motion.div>

                <div className="flex flex-col w-full pb-20">
                    {benefits.map((benefit, index) => (
                        <BenefitCard key={benefit.id} benefit={benefit} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UrbandropBenefit;
