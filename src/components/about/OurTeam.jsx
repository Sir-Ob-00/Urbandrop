import React from 'react';
import { motion } from 'framer-motion';


const Rockson = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220103/Rockson_pzlfxa.jpg';
const Appiah2 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220098/Appiah-2_cijluy.jpg';
const Gilbert = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220101/Gilbert_lyqpxl.jpg';
const Roy = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220104/Roy_hco55w.jpg';
const Eric1 = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220099/Eric-1_omocky.jpg';
const Joshua = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220102/Joshua_olcju0.jpg';
const Anthony = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220095/Anthony_njdnfb.jpg';
const Owusu = 'https://res.cloudinary.com/daisjvfvg/image/upload/v1777220095/Anthony_njdnfb.jpg';



const team = [
  { name: 'Armah Rockson', role: 'Project Manager', img: Rockson },
  { name: 'Appiah Kumah Miracle', role: 'Software developer', img: Appiah2 },
  { name: 'Gilbert Elikplim Kukah', role: 'Backend Developer', img: Gilbert },
  { name: 'Atiwen Solomon', role: 'Backend Developer', img: Roy },
  { name: 'Owusu-Ansah Eric', role: 'Frontend Lead Developer', img: Eric1 },
  { name: 'Asemani Joshua', role: 'AI and ML Engineer', img: Joshua },
  { name: 'Afriyie Anthony', role: 'Frontend Engineer', img: Anthony },
  { name: 'Owusu Boateng', role: 'Frontend Developer', img: Owusu }
];

const TeamCard = ({ member, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * idx, duration: 0.5 }}
    whileHover={{ y: -8, transition: { duration: 0.3 } }}
    className="group cursor-pointer"
  >
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
        <img 
          src={member.img} 
          alt={`${member.name}, ${member.role}`} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      
      {/* Name and Role overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-center bg-gradient-to-t from-dark/90 to-transparent">
        <h3 className="text-h4 text-white mb-1">{member.name}</h3>
        <p className="text-small uppercase tracking-widest text-primary font-medium">{member.role}</p>
      </div>
      
      {/* Decorative accent bar */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-primary w-0 group-hover:w-20 transition-all duration-300 rounded-t" />
    </div>
  </motion.div>
);

const OurTeam = () => {
  return (
    <section className="relative bg-background text-dark py-20 md:py-28 overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #5CB35E 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block text-xs md:text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold"
          >
            Our People
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-dark"
          >
            Meet the Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted mt-4 max-w-xl mx-auto"
          >
            The passionate people behind Urbandrop, dedicated to bringing African flavors to your doorstep.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
          {team.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
