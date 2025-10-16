import React from 'react';
import { motion } from 'framer-motion';
import appImg from '../../assets/images/urbandrop-mobile-app-ui.png';
import { Truck, Tag, Phone, Star } from 'lucide-react';

const WhyChoose = () => {
  const items = [
    {
      title: 'Wide Variety of Ethnic Cuisines:',
      desc: 'From Ghana Jollof to Ethiopian Injera.',
      icon: <Star size={24} className="text-[#5CB35E]" />,
    },
    {
      title: 'Fast and Reliable Delivery:',
      desc: 'Get your food delivered fresh and on time.',
      icon: <Truck size={24} className="text-[#5CB35E]" />,
    },
    {
      title: 'Easy Ordering:',
      desc: 'User-friendly app interface for seamless experience.',
      icon: <Phone size={24} className="text-[#5CB35E]" />,
    },
    {
      title: 'Special Offers:',
      desc: 'Exclusive deals and discounts for app users.',
      icon: <Tag size={24} className="text-[#5CB35E]" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.98, boxShadow: '0px 0px 0px rgba(0,0,0,0)' }}
          whileInView={{ opacity: 1, x: 0, scale: 1, boxShadow: '0 20px 40px rgba(92,179,94,0.18)' }}
          viewport={{ amount: 0.35 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img src={appImg} alt="Urbandrop mobile app" className="w-80 md:w-[520px] shadow-sm" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.35 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.3, delayChildren: 0.08 } }
          }}
          className="w-full md:w-1/2"
        >
          <div className="bg-[#f2fbf4] border-l-4 border-[#5CB35E] p-6 md:p-10 rounded-md space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold">Why choose <span className="text-[#5CB35E]">Urbandrop</span>?</h2>
            <div className="flex flex-col space-y-6">
              {items.map((it, idx) => (
                <motion.div key={idx} className="flex items-start gap-6" variants={{ hidden: { opacity: 0, y: 14, scale: 0.98 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } } }}>
                  <div className="mt-1">{React.cloneElement(it.icon, { size: 36 })}</div>
                  <div>
                    <h3 className="font-semibold text-xl md:text-2xl">{it.title}</h3>
                    <p className="text-lg text-[#879EA4]">{it.desc}</p>
                  </div>
                </motion.div>
              ))}
              </div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="pt-4">
                <a href="/get-started" className="inline-block bg-[#5CB35E] hover:bg-[#4a954d] text-white px-6 py-3 rounded-full font-semibold">Get Started</a>
              </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
