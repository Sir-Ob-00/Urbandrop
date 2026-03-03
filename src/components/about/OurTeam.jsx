import React from 'react';
import { motion } from 'framer-motion';

const team = [
  { name: 'Amina Mensah', role: 'Co‑Founder & CEO', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000&q=80' },
  { name: 'Daniel Okoye', role: 'Head of Product', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1000&q=80' },
  { name: 'Fatima Adu', role: 'Chief Marketing Officer', img: 'https://images.unsplash.com/photo-1545996124-7d1f1c4b9d46?w=1000&q=80' },
  { name: 'Kwame Boateng', role: 'Head of Operations', img: 'https://images.unsplash.com/photo-1544630621-2cfd4aa1be5e?w=1000&q=80' },
  { name: 'Nia Johnson', role: 'Design Lead', img: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=1000&q=80' }
];

// layout presets for desktop (absolute positions, rotations, zIndex)
const desktopPositions = [
  { left: '8%', top: '8%', z: 30, rotate: -6, scale: 1.02 },
  { left: '32%', top: '2%', z: 40, rotate: 4, scale: 1.06 },
  { left: '52%', top: '10%', z: 50, rotate: -3, scale: 1.08 },
  { left: '26%', top: '28%', z: 35, rotate: 8, scale: 1.04 },
  { left: '60%', top: '28%', z: 45, rotate: -8, scale: 1.03 }
];

const Portrait = ({ member, idx }) => {
  const p = desktopPositions[idx] || desktopPositions[0];

  return (
    <motion.figure
      className={`md:absolute rounded-full overflow-hidden shadow-2xl hover:shadow-4xl transition-transform duration-400`} 
      style={{
        left: p.left,
        top: p.top,
        zIndex: p.z,
        transform: `rotate(${p.rotate}deg) scale(${p.scale})`
      }}
      whileHover={{ scale: p.scale + 0.06 }}
      aria-label={`${member.name} — ${member.role}`}
    >
      <img
        src={member.img}
        alt={`${member.name}, ${member.role}`}
        className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] object-cover block"
      />

      {/* Floating name & role */}
      <figcaption className="absolute left-4 bottom-4 md:left-6 md:bottom-6 text-white text-shadow">
        <div className="text-xl md:text-2xl font-serif font-semibold leading-tight">{member.name}</div>
        <div className="text-xs md:text-sm uppercase tracking-widest opacity-90 mt-1">{member.role}</div>
      </figcaption>
    </motion.figure>
  );
};

const OurTeam = () => {
  return (
    <section className="relative bg-gray-900 text-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm md:text-base uppercase tracking-widest text-gray-300 mb-4">Our People</p>
          <h2 className="text-4xl md:text-6xl font-serif font-black leading-tight">The Team</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">An editorial collage celebrating creativity, craft and care — the minds behind Urbandrop.</p>
        </div>

        {/* Collage container */}
        <div className="relative md:h-[520px] w-full flex items-center justify-center">
          {/* Decorative large vignette for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none" />

          {/* Portraits: desktop absolute, mobile stacked */}
          <div className="relative w-full flex flex-col md:block items-center md:items-stretch gap-6 md:gap-0">
            {team.map((m, i) => (
              <div key={m.name} className={`flex md:block md:justify-start md:items-start ${i > 0 ? 'md:relative' : ''}`}>
                <div className="md:relative md:mx-0 md:my-0 md:transform md:transition-all">
                  <div className="md:hidden flex items-center justify-center">
                    {/* Mobile stacked overlapping look */}
                    <motion.div whileHover={{ scale: 1.03 }} className="rounded-full overflow-hidden shadow-2xl">
                      <img src={m.img} alt={`${m.name}, ${m.role}`} className="w-36 h-36 object-cover rounded-full" />
                      <div className="mt-3 text-center">
                        <div className="font-serif font-semibold text-lg text-white">{m.name}</div>
                        <div className="text-xs uppercase tracking-widest text-gray-300">{m.role}</div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="hidden md:block">
                    <Portrait member={m} idx={i} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
