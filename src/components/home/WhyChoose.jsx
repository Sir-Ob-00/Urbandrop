import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import appImg from '../../assets/images/urbandrop-mobile-app-ui.png';
import { Truck, Smartphone, Percent, Salad } from 'lucide-react';

const WhyChoose = () => {
  const items = [
    {
      title: 'Wide Variety of Ethnic Cuisines:',
      desc: 'From Ghana Jollof to Ethiopian Injera.',
      icon: <Salad size={24} className="text-white" />,
    },
    {
      title: 'Fast and Reliable Delivery:',
      desc: 'Get your food delivered fresh and on time.',
      icon: <Truck size={24} className="text-white" />,
    },
    {
      title: 'Easy Ordering:',
      desc: 'User-friendly app interface for seamless experience.',
      icon: <Smartphone size={24} className="text-white" />,
    },
    {
      title: 'Special Offers:',
      desc: 'Exclusive deals and discounts for app users.',
      icon: <Percent size={24} className="text-white" />,
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.35 });
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section ref={sectionRef} className="why-choose-section max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-0 overflow-hidden md:no-scrollbar">
  <div className="flex flex-col md:flex-row items-stretch gap-12">
        <motion.div
          // start far off the right edge so it visibly comes from the far end
          initial={{ opacity: 0, x: 1400, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
          animate={isInView && imgLoaded ? { opacity: 1, x: 0, boxShadow: '0 20px 40px rgba(92,179,94,0.18)' } : {}}
          transition={{ duration: 1.0, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center overflow-hidden h-full"
        >
          <img src={appImg} alt="delivery guy image" className="shadow-sm w-auto h-full max-w-none object-cover block" onLoad={() => setImgLoaded(true)} loading="eager" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView && imgLoaded ? 'visible' : 'hidden'}
          variants={{
            // start far off the left edge so it visibly comes from the far end
            hidden: { opacity: 0, x: -1400 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.18, delayChildren: 0.08, duration: 0.9 } }
          }}
          className="w-full md:w-1/2 overflow-hidden"
        >
          <div className="bg-[#f2fbf4] pt-8 pb-6 md:pt-12 md:pb-8 rounded-md space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2B3B3B]">Why choose <span className="text-[#5CB35E]">Urbandrop</span>?</h2>
            <div className="flex flex-col space-y-6 md:no-scrollbar">
              {items.map((it, idx) => (
                <div key={idx} className="flex items-start gap-8">
                  <div className="mt-1 p-4 bg-[#5CB35E] rounded-md flex items-center justify-center">
                    {it.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-[#2B3B3B]">{it.title}</h3>
                    <p className="text-base text-[#879EA4]">{it.desc}</p>
                  </div>
                </div>
              ))}
              </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
