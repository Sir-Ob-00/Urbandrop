import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaSearch, FaMobileAlt, FaRoute } from 'react-icons/fa'
import { MdRestaurant } from 'react-icons/md'

const steps = [
  {
    title: 'Browse',
    desc: 'Explore our extensive menu of Ethnic delicacies.',
  icon: <FaSearch size={24} className="text-white" />,
  },
  {
    title: 'Order',
    desc: 'Select your favourite dishes and customize your order.',
  icon: <FaMobileAlt size={24} className="text-white" />,
  },
  {
    title: 'Track',
    desc: 'Monitor your order status in real-time.',
  icon: <FaRoute size={24} className="text-white" />,
  },
  {
    title: 'Enjoy',
    desc: 'Relish the taste of Asia, Africa, European, and Caribbean dishes delivered to your door.',
  icon: <MdRestaurant size={24} className="text-white" />,
  },
]

const HowItWorks = () => {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { amount: 0.25, once: true })
  return (
    <section ref={sectionRef} className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <motion.div className="text-center mb-10" initial={{ opacity: 0, y: -40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
          <h2 className="text-3xl md:text-5xl  font-extrabold text-[#5CB35E]">How it works</h2>
          <p className="my-6 max-w-2xl mx-auto text-gray-600">At Urbandrop, we make it simple and enjoyable to savor the rich and diverse flavors of Ethnic cuisines. Our streamlined process ensures that you can explore, order, and enjoy your favourite dishes with just a few taps.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div key={i} className="flex flex-col items-center text-center gap-4 px-4" initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: i * 0.15 }}>
              <div className="rounded-2xl bg-[#183A37] p-10 inline-flex items-center justify-center">
                {/* icon should be light green and larger */}
                {React.cloneElement(s.icon, { className: 'text-[#5CB35E]', size: 48 })}
              </div>
              <h3 className="text-2xl font-semibold text-[#5CB35E]">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
