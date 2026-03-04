import React, { useEffect, useRef, useState } from 'react';

const StoryChapter = ({ number, label, title, children, index }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), index * 150);
                }
            },
            { threshold: 0.1, rootMargin: '-50px' }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();
    }, [index]);
    
    return (
        <div 
            ref={ref}
            className="pt-16 pb-16 border-t"
            style={{ borderColor: 'rgba(242, 245, 249, 0.1)' }}
        >
            <div className="grid md:grid-cols-[260px_1fr] gap-8 md:gap-12">
                {/* Left Panel - slides in from left */}
                <div className={`md:border-r md:pr-12 flex flex-col transition-all duration-700 delay-100 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-40 -translate-x-8'
                }`}>
                    {/* Ghost Number */}
                    <div 
                        className="hidden md:block text-[6rem] font-black leading-none text-transparent mb-8 select-none"
                        style={{ WebkitTextStroke: isVisible ? '1px rgba(212, 175, 55, 0.7)' : '1px rgba(242, 245, 249, 0.15)' }}
                    >
                        {number}
                    </div>
                    
                    {/* Label & Title */}
                    <div className="mt-auto">
                        <span className="block text-[0.58rem] tracking-[0.28em] uppercase font-bold mb-3"
                            style={{ color: 'rgba(242, 245, 249, 0.38)' }}>
                            {label}
                        </span>
                        <h3 className="font-fraunces text-[clamp(1.5rem,2.2vw,2rem)] font-bold leading-[1.15] text-[#f2f5f9]">
                            {title}
                        </h3>
                    </div>
                </div>
                
                {/* Right Panel - fades in from bottom */}
                <div className={`font-syne transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
                }`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

const ClosingBand = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );
        
        if (ref.current) {
            observer.observe(ref.current);
        }
        
        return () => observer.disconnect();
    }, []);
    
    return (
        <div 
            ref={ref}
            className={`grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-end py-16 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
            }`}
        >
            {/* Closing Quote */}
            <blockquote className="font-fraunces italic text-[clamp(1.3rem,2vw,1.5rem)] leading-[1.55] font-light text-[#f2f5f9]">
                "Food is more than ingredients it's memory, comfort, identity. In a country that has welcomed so many,{' '}
                <span className="text-[#D4AF37] font-bold not-italic">they deserve a better way to feel at home</span>. 
                This is our mission. And we are just getting started."
            </blockquote>
            
            {/* Brand */}
            <div className="text-right">
                {/* Kente Bar */}
                <div 
                    className="w-14 h-[3px] mx-auto md:mx-0 md:ml-auto mb-4"
                    style={{
                        background: 'repeating-linear-gradient(90deg, #D4AF37 0px, #D4AF37 10px, #5CB35E 10px, #5CB35E 20px, #F74242 20px, #F74242 30px)'
                    }}
                />
                <div className="font-syne text-[0.6rem] tracking-[0.25em] uppercase text-[#879EA4] mb-1">Est. 2026</div>
                <div className="font-fraunces text-2xl font-bold text-[#f2f5f9]">Urbandrop</div>
            </div>
        </div>
    );
};

const OurStory = () => {
    const [mounted, setMounted] = useState(false);
    const cursorRef = useRef(null);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    // Custom cursor
    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;
        
        const moveCursor = (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        };
        
        document.addEventListener('mousemove', moveCursor);
        
        return () => {
            document.removeEventListener('mousemove', moveCursor);
        };
    }, []);
    
    return (
        <>
            {/* Inject Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&family=Syne:wght@400;500;600;700;800&display=swap');
                
                :root {
                    --fraunces: 'Fraunces', serif;
                    --syne: 'Syne', sans-serif;
                }
                
                .font-fraunces {
                    font-family: var(--fraunces);
                }
                
                .font-syne {
                    font-family: var(--syne);
                }
            `}</style>
            
            {/* Custom Cursor */}
            <div 
                ref={cursorRef}
                className="fixed pointer-events-none z-[9999] hidden md:block"
                style={{ 
                    left: -4, 
                    top: -4,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
            </div>
            
            {/* Noise Overlay */}
            <div 
                className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
            
            {/* Main Section */}
            <section 
                className="w-full py-32"
                style={{ 
                    backgroundColor: '#183A37',
                    '--bg': '#2c4d31',
                    '--paper': '#f2f5f9',
                    '--gold': '#D4AF37',
                    '--green': '#2c4d31',
                    '--line': 'rgba(242, 245, 249, 0.1)',
                    '--muted': 'rgba(242, 245, 249, 0.38)'
                }}
            >
                <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                    
                    {/* INTRO ROW */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-12 mb-12 pb-12 border-b transition-all duration-700"
                        style={{ borderColor: 'rgba(242, 245, 249, 0.1)' }}
                    >
                        {/* Left: Pill Tag + Meta */}
                        <div className="order-2 md:order-1">
                            {/* Pill Tag */}
                            <div
                                className={`inline-flex items-center text-[0.58rem] tracking-[0.28em] uppercase font-bold mb-6 transition-all duration-700 ${
                                    mounted ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
                                }`}
                                style={{ 
                                    color: 'rgba(212, 175, 55, 0.7)',
                                    border: '1px solid rgba(212, 175, 55, 0.4)',
                                    transitionDelay: '0.05s'
                                }}
                            >
                                <span style={{ color: '#D4AF37', marginRight: 6 }}>&#9679;</span>
                                Our Story
                            </div>
                            
                            {/* Meta */}
                            <div
                                className={`font-syne text-[0.6rem] tracking-[0.25em] uppercase transition-all duration-700 ${
                                    mounted ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
                                }`}
                                style={{ 
                                    color: 'rgba(242, 245, 249, 0.38)',
                                    transitionDelay: '0.15s'
                                }}
                            >
                                United Kingdom / Founded 2026
                            </div>
                        </div>
                        
                        {/* Right: Giant Headline */}
                        <div className="order-1 md:order-2">
                            <h1 
                                className={`font-fraunces font-black text-[clamp(4rem,14vw,12rem)] leading-[0.85] tracking-[-0.03em] text-[#f2f5f9] transition-all duration-700 ${
                                    mounted ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
                                }`}
                                style={{ transitionDelay: '0.2s' }}
                            >
                                Our<br />
                                <span className="italic text-[#D4AF37]" style={{ fontWeight: 300 }}>Story.</span>
                            </h1>
                        </div>
                    </div>
                    
                    {/* CHAPTERS */}
                    <div className="mb-12">
                        
                        {/* Chapter 01 */}
                        <StoryChapter 
                            number="01" 
                            label="The Gap" 
                            title={<>Something was quietly <em>missing</em>.</>}
                            index={0}
                        >
                            <p className="font-syne text-[0.97rem] leading-[1.95] font-normal text-[#f2f5f9] opacity-80 mb-6">
                                When I moved from Ghana to the UK in 2022, I arrived with hope and a deep connection to the culture I was leaving behind. It didn't take long to feel what so many immigrants silently endure.
                            </p>
                            <p className="font-syne text-[0.97rem] leading-[1.95] font-normal text-[#f2f5f9] opacity-80">
                                Shopping for Ghanaian groceries anything African or Caribbean meant <strong>long trips to scattered shops</strong>, limited selections, and almost no convenience. Mainstream delivery apps served UK and European brands with ease. But nothing truly served ethnic communities the very people enriching this country every single day.
                            </p>
                        </StoryChapter>
                        
                        {/* Chapter 02 */}
                        <StoryChapter 
                            number="02" 
                            label="The Moment" 
                            title={<>A bus ride that <em>changed everything</em>.</>}
                            index={1}
                        >
                            <p className="font-syne text-[0.97rem] leading-[1.95] font-normal text-[#f2f5f9] opacity-80 mb-8">
                                One evening, my wife's mother made the journey to shop at an African grocery store after a long day. Exhausted on the bus ride home, she stepped off and left every bag behind without realising it.
                            </p>
                            {/* Pull Quote */}
                            <blockquote className="font-fraunces italic text-[1.15rem] leading-[1.55] font-light text-[#f2f5f9] pl-6 border-l-2" style={{ borderColor: '#5CB35E' }}>
                                "It wasn't just about missing food from home. It was about how hard people work, how far they travel simply to stay connected to who they are."
                            </blockquote>
                        </StoryChapter>
                        
                        {/* Chapter 03 */}
                        <StoryChapter 
                            number="03" 
                            label="The Mission" 
                            title={<>That's where <em>Urbandrop</em> was born.</>}
                            index={2}
                        >
                            <p className="font-syne text-[0.97rem] leading-[1.95] font-normal text-[#f2f5f9] opacity-80 mb-8">
                                We are building a digital marketplace so Afro-Caribbean, Asian, and other ethnic communities can shop for the food they love right from their phones. <strong>No long trips. No heavy bags.</strong> Fresh, familiar products delivered with care and dignity.
                            </p>
                            
                            {/* Pillar Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                                <div className="group cursor-default">
                                    <div className="font-fraunces italic text-[1.3rem] font-light text-[#f2f5f9] mb-2">Memory</div>
                                    <div className="w-5 h-[1px] bg-[#5CB35E] mb-2 group-hover:bg-[#f2f5f9]/30 transition-colors duration-0.4"></div>
                                    <div className="font-syne text-[0.58rem] tracking-[0.25em] uppercase" style={{ color: 'rgba(242, 245, 249, 0.38)' }}>Where you're from</div>
                                </div>
                                <div className="group cursor-default">
                                    <div className="font-fraunces italic text-[1.3rem] font-light text-[#f2f5f9] mb-2">Comfort</div>
                                    <div className="w-5 h-[1px] bg-[#5CB35E] mb-2 group-hover:bg-[#f2f5f9]/30 transition-colors duration-0.4"></div>
                                    <div className="font-syne text-[0.58rem] tracking-[0.25em] uppercase" style={{ color: 'rgba(242, 245, 249, 0.38)' }}>Taste of home</div>
                                </div>
                                <div className="group cursor-default">
                                    <div className="font-fraunces italic text-[1.3rem] font-light text-[#f2f5f9] mb-2">Identity</div>
                                    <div className="w-5 h-[1px] bg-[#5CB35E] mb-2 group-hover:bg-[#f2f5f9]/30 transition-colors duration-0.4"></div>
                                    <div className="font-syne text-[0.58rem] tracking-[0.25em] uppercase" style={{ color: 'rgba(242, 245, 249, 0.38)' }}>Who you are</div>
                                </div>
                            </div>
                        </StoryChapter>
                    </div>
                    
                    {/* CLOSING BAND */}
                    <ClosingBand />
                    
                </div>
            </section>
        </>
    );
};

export default OurStory;
