import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "🛒",
    title: "Easy Ordering",
    desc: "Shop from your favorite stores in seconds.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    desc: "Get items delivered to your door in no time.",
  },
  {
    icon: "💬",
    title: "Live Support",
    desc: "We’re always here to help.",
  },
  {
    icon: "🌍",
    title: "Local Merchants",
    desc: "Supporting community businesses.",
  },
];

const Highlights = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6">Why choose Urbandrop</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.35 }}
              className="bg-white rounded-lg p-6 shadow-sm text-center"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
