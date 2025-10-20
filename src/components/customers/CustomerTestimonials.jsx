import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    rating: 5,
    image: '/images/lady-urbandrop.jpg',
    text: 'Urbandrop has completely changed how I experience food! The variety of authentic international cuisines is incredible. I discovered Ethiopian injera and now I can\'t get enough. Delivery is always on time and the food arrives fresh.',
    date: '2 weeks ago',
    favoriteDish: 'Ethiopian Injera',
  },
  {
    id: 2,
    name: 'Marcus Chen',
    location: 'Manchester, UK',
    rating: 5,
    image: '/images/market-woman.jpg',
    text: 'As someone who loves trying new foods, Urbandrop is my go-to app. The quality is consistently excellent, and I love supporting local merchants. The app interface is so smooth and the recommendations are spot on!',
    date: '1 week ago',
    favoriteDish: 'Jamaican Curry Goat',
  },
  {
    id: 3,
    name: 'Amara Okafor',
    location: 'Birmingham, UK',
    rating: 5,
    image: '/images/market-woman-1.jpg',
    text: 'Finally, I can get authentic Nigerian food that tastes just like home! The jollof rice is perfect, and the customer service is amazing. Urbandrop makes it so easy to share our culture through food.',
    date: '3 days ago',
    favoriteDish: 'Nigerian Jollof Rice',
  },
  {
    id: 4,
    name: 'David Thompson',
    location: 'Glasgow, UK',
    rating: 4,
    image: '/images/deliveryguy.jpg',
    text: 'The convenience is unbeatable. I can order from multiple cuisines in one go and everything arrives together. The portion sizes are generous and the prices are reasonable. Highly recommend!',
    date: '5 days ago',
    favoriteDish: 'Ghanaian Waakye',
  },
  {
    id: 5,
    name: 'Priya Patel',
    location: 'Leeds, UK',
    rating: 5,
    image: '/images/veges.jpg',
    text: 'Urbandrop opened up a whole new world of flavors for me. I\'ve tried dishes from countries I\'ve never visited and each one has been an amazing culinary journey. The freshness and quality are outstanding.',
    date: '1 week ago',
    favoriteDish: 'Kenyan Nyama Choma',
  },
];

const CustomerTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

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
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Join thousands of satisfied customers who have discovered their new favorite dishes through Urbandrop
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-background to-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="bg-primary rounded-full p-4">
                    <Quote size={32} className="text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} size={24} className="text-yellow-400 fill-current mx-1" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-center text-xl md:text-2xl text-dark font-medium leading-relaxed mb-8">
                  "{currentTestimonial.text}"
                </blockquote>

                {/* Customer Info */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="text-left">
                      <h4 className="font-bold text-dark text-lg">{currentTestimonial.name}</h4>
                      <p className="text-muted">{currentTestimonial.location}</p>
                      <p className="text-sm text-primary font-medium">
                        Favorite: {currentTestimonial.favoriteDish}
                      </p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-muted text-sm">{currentTestimonial.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-primary hover:text-white transition-all duration-300 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-primary/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.8★</div>
            <div className="text-muted">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2M+</div>
            <div className="text-muted">Meals Delivered</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted">Partner Merchants</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerTestimonials;