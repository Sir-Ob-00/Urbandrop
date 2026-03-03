import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Dynamically load brand logos eagerly so we get full list at build time
// `globEager` not available in this environment; use glob with eager option
const brandFiles = import.meta.glob('../../assets/images/home/Brands/*', { eager: true });

const BrandSlider = () => {
    const [brandLogos, setBrandLogos] = useState([]);


    useEffect(() => {
        // glob with eager option returns modules immediately
        const entries = Object.entries(brandFiles).map(([path, mod]) => {
            const name = path
                .split('/')
                .pop()
                .replace(/\.[^.]+$/, '')
                .replace(/[-_]/g, ' ');
            return { src: mod?.default ?? mod, name };
        });

        console.log('BrandSlider raw entries count (eager):', entries.length);
        const sorted = entries.sort((a, b) =>
            a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
        );
        setBrandLogos(sorted);
    }, []);

  return (
    <section className="mt-20">
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="rounded-3xl p-8 md:p-12 relative overflow-hidden bg-white/5"
    >
        <div className="w-full overflow-hidden">
    
            {/* Single marquee: scrolls all logos continuously left */}
            <div
              className="marquee flex items-center gap-8 will-change-transform"
              role="list"
              style={{ animationDuration: `${brandLogos.length * 2 || 0}s` }}
            >
                {brandLogos.length > 0 &&
                // duplicate once for seamless animation
                brandLogos.concat(brandLogos).map((logo, idx) => (
                    <div
                        key={`logo-${idx}`}
                        role="listitem"
                        className="flex-shrink-0 w-32 md:w-40 lg:w-48 flex items-center justify-center"
                    >
                        <img
                        src={logo.src}
                        alt={logo.name}
                        className="max-h-12 md:max-h-20 lg:max-h-24 object-contain opacity-95 hover:opacity-100 hover:scale-105 transition-all duration-200"
                        />
                    </div>
                    ))}
            </div>
        </div>

        {/* CSS for marquee animation */}
        <style>{`
            .marquee { animation: marquee linear infinite; }
            .marquee:hover { animation-play-state: paused; }
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-100%); }
            }
            `}</style>
    </motion.div>
    </section>
);
};

export default BrandSlider;
