import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Smartphone, Tag, Zap, Eye, TrendingUp } from 'lucide-react';

const adOptions = [
  {
    icon: <Star size={32} className="text-white" />,
    title: 'Featured Listings',
    description: 'Highlight your products at the top of search results and category pages.',
    features: ['Top search placement', 'Category dominance', 'Increased visibility'],
    gradient: 'from-green-400 to-green-600',
    mockup: 'Featured Product Card',
  },
  {
    icon: <Smartphone size={32} className="text-white" />,
    title: 'App Banners',
    description: 'Show your brand across Urbandrop\'s mobile screens with eye-catching visuals.',
    features: ['Full-screen impact', 'High engagement', 'Brand storytelling'],
    gradient: 'from-green-400 to-green-600',
    mockup: 'App Banner Display',
  },
  {
    icon: <Tag size={32} className="text-white" />,
    title: 'Category Sponsorships',
    description: 'Dominate your product category and become the go-to brand for shoppers.',
    features: ['Category exclusivity', 'Brand authority', 'Market leadership'],
    gradient: 'from-green-400 to-green-600',
    mockup: 'Category Hero Section',
  },
  {
    icon: <Zap size={32} className="text-white" />,
    title: 'In-App Promotions',
    description: 'Time-limited discounts and offers featured prominently to engaged users.',
    features: ['Urgency-driven sales', 'Flash promotions', 'Conversion boost'],
    gradient: 'from-green-400 to-green-600',
    mockup: 'Promotion Notification',
  },
];

const AdvertisingOptions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Advertising <span className="text-primary">Options</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Choose from our comprehensive range of advertising solutions designed to maximize your brand's impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>

              {/* Mockup Preview */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="text-4xl">{option.mockup.split(' ')[0]}</div>
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-br ${option.gradient} rounded-2xl p-4 w-fit mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {option.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                {option.title}
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                {option.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-muted">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${option.gradient} mr-3`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={`w-full bg-gradient-to-r ${option.gradient} text-white py-3 rounded-2xl font-semibold hover:shadow-lg transition-all transform hover:scale-105`}>
                Learn More
              </button>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${option.gradient} group-hover:w-full transition-all duration-300 rounded-bl-3xl`}></div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-background to-white rounded-3xl p-8 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-8">
            Compare Advertising Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <Eye size={32} className="mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">10x</div>
              <div className="text-muted">More Impressions</div>
            </div>
            <div className="space-y-2">
              <TrendingUp size={32} className="mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">5x</div>
              <div className="text-muted">Higher Engagement</div>
            </div>
            <div className="space-y-2">
              <Tag size={32} className="mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">3x</div>
              <div className="text-muted">Better Conversion</div>
            </div>
            <div className="space-y-2">
              <Star size={32} className="mx-auto text-primary" />
              <div className="text-2xl font-bold text-primary">ROI</div>
              <div className="text-muted">Measurable Results</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvertisingOptions;