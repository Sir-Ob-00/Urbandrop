import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Amina Mensah', role: 'Co‑Founder & CEO', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&q=80' },
  { name: 'Daniel Okoye', role: 'Head of Product', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1000&q=80' },
  { name: 'Fatima Adu', role: 'Chief Marketing Officer', img: 'https://images.unsplash.com/photo-1545996124-7d1f1c4b9d46?w=1000&q=80' },
  { name: 'Kwame Boateng', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1544630621-2cfd4aa1be5e?w=1000&q=80' },
  { name: 'Nia Johnson', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=1000&q=80' }
];

// hex clip-path polygon (regular hexagon)
const hex = 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)';

const DesktopPortrait = ({ member, style, idx }) => (
  <motion.figure
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.08 * idx, duration: 0.6 }}
    whileHover={{ scale: 1.04 }}
    className="md:absolute"
    style={{ ...style, willChange: 'transform, opacity' }}
    aria-label={`${member.name} — ${member.role}`}
  >
    <div style={{ width: 260, height: 260, clipPath: hex, overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.55)' }}>
      <img src={member.img} alt={`${member.name}, ${member.role}`} className="w-full h-full object-cover block" />
    </div>

    <figcaption style={{ position: 'absolute', left: 18, bottom: 18 }} className="text-white">
      <div className="font-serif text-2xl md:text-2xl font-semibold leading-tight">{member.name}</div>
      <div className="text-xs uppercase tracking-widest text-gray-200 mt-1">{member.role}</div>
    </figcaption>
  </motion.figure>
);

const OurTeam = () => {
  // desktop absolute placements (percent + translate offsets)
  const placements = [
    { left: '10%', top: '8%', rotate: '-6deg', z: 40 },
    { left: '34%', top: '2%', rotate: '4deg', z: 50 },
    { left: '56%', top: '8%', rotate: '-3deg', z: 60 },
    { left: '28%', top: '34%', rotate: '8deg', z: 45 },
    { left: '62%', top: '34%', rotate: '-8deg', z: 55 }
  ];

  return (
    <section className="relative bg-black text-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-3">Our People</p>
          <h2 className="text-3xl md:text-5xl font-serif font-black">Meet the Team</h2>
          <p className="text-gray-400 mt-3 max-w-2xl mx-auto">A cinematic editorial collage — five voices layered together.</p>
        </div>

        <div className="relative md:h-[520px] w-full flex items-center justify-center">
          {/* subtle film vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none" />

          {/* Desktop layered hex portraits */}
          <div className="hidden md:block relative w-full h-full">
            {team.map((m, i) => {
              const place = placements[i];
              const style = {
                left: place.left,
                top: place.top,
                zIndex: place.z,
                transform: `translate(-50%, -50%) rotate(${place.rotate})`
              };
              return <DesktopPortrait key={m.name} member={m} style={style} idx={i} />;
            })}
          </div>

          {/* Mobile stacked overlapping */}
          <div className="md:hidden w-full flex justify-center items-center gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} whileHover={{ scale: 1.03 }} className="-ml-6 last:ml-0 first:ml-0">
                <div style={{ width: 120, height: 120, clipPath: hex, overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}>
                  <img src={m.img} alt={`${m.name}, ${m.role}`} className="w-full h-full object-cover block" />
                </div>
                <div className="mt-3 text-center">
                  <div className="font-serif text-base font-semibold text-white">{m.name}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-300">{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
