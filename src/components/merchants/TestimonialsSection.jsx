import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ama',
    location: 'Accra Market Vendor',
    quote: 'Urbandrop helped my small grocery reach more people in my area. Orders now come in daily!',
    rating: 5,
    image: '/images/market-woman.jpg', // Using existing image
  },
  {
    name: 'Kofi',
    location: 'Fresh Produce Seller',
    quote: 'The platform is easy to use and payments are always on time. My business has grown significantly.',
    rating: 5,
    image: '/images/market-woman-1.jpg', // Using existing image
  },
  {
    name: 'Adwoa',
    location: 'Local Butcher',
    quote: 'Customer support is excellent and the app makes managing orders so simple. Highly recommend!',
    rating: 5,
    image: '/images/lady-urbandrop.jpg', // Using existing image
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark mb-6">
            Success <span className="text-primary">Stories</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Hear from merchants who have transformed their businesses with Urbandrop
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-muted mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;