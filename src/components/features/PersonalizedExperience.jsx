import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Heart, Bell, Star, Target, Brain, Sparkles } from 'lucide-react';
import appMockup from '../../assets/images/urbandrop-mobile-app-ui.png';

const PersonalizedExperience = () => {
  const features = [
    {
      icon: <Brain size={32} className="text-white" />,
      title: 'AI Recommendations',
      description: 'Smart suggestions based on your taste preferences and order history',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      icon: <Heart size={32} className="text-white" />,
      title: 'Smart Favorites',
      description: 'Save and reorder your favorite dishes with personalized collections',
      gradient: 'from-red-500 to-pink-600',
    },
    {
      icon: <Bell size={32} className="text-white" />,
      title: 'Custom Notifications',
      description: 'Get alerts for promotions, new dishes, and favorite restaurant updates',
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      icon: <Target size={32} className="text-white" />,
      title: 'Location-Based Offers',
      description: 'Exclusive deals from nearby restaurants you love',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      icon: <Star size={32} className="text-white" />,
      title: 'Loyalty Rewards',
      description: 'Earn points and unlock special perks with every order',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      icon: <Sparkles size={32} className="text-white" />,
      title: 'Exclusive Access',
      description: 'Early access to new features and limited-time experiences',
      gradient: 'from-indigo-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff5ea] via-[#fcf7de] to-[#ddeab9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#2c4d31]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#36b44a]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f1be21]/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white px-4 py-2 rounded-full font-semibold mb-6">
            <Sparkles size={16} />
            <span>Personal Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2c4d31] mb-6">
            Tailored Just for
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c4d31] to-[#36b44a]">
              You
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Every interaction with Urbandrop is designed to feel personal and special.
            Our AI learns your preferences to create the perfect dining experience every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >

                  <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 w-fit mb-4`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-[#fff5ea]/80 to-[#fcf7de]/80 rounded-3xl p-8 border border-[#2c4d31]/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-r from-[#2c4d31] to-[#36b44a] rounded-2xl p-4">
                  <Brain size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-1">AI-Powered Personalization</h3>
                  <p className="text-muted">Gets smarter with every order you place</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">85%</div>
                  <div className="text-muted text-sm">Accuracy Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">2M+</div>
                  <div className="text-muted text-sm">Recommendations</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-muted text-sm">Learning</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src={appMockup}
                alt="Personalized Urbandrop experience"
                className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Recommendation Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-xl flex items-center justify-center">
                    <Heart size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Recommended for You</div>
                    <div className="text-muted text-xs">Based on your preferences</div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#fff5ea] to-[#fcf7de] rounded-lg p-3">
                  <div className="font-medium text-dark text-sm">Spicy Thai Curry</div>
                  <div className="text-muted text-xs">Your favorite spice level • 4.9★</div>
                </div>
              </motion.div>

              {/* Floating Heart */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/4 -right-4 bg-red-500 text-white rounded-2xl p-3 shadow-xl"
              >
                <Heart size={24} />
              </motion.div>

              {/* Floating Notification */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="absolute bottom-1/4 -left-4 bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">
                    <Sparkles size={24} className="text-white" />
                  </div>
                  <div className="text-sm font-medium">Special Offer!</div>
                  <div className="text-xs opacity-90">50% off your favorites</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">
            How Personalization Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Bot size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">You Order</h4>
              <p className="text-muted leading-relaxed">
                Place orders and rate dishes to help our AI understand your preferences.
              </p>
              <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent hidden md:block"></div>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-to-br from-[#36b44a] to-[#f1be21] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Brain size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">AI Learns</h4>
              <p className="text-muted leading-relaxed">
                Our intelligent system analyzes patterns in your ordering behavior.
              </p>
              <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-pink-500 to-transparent hidden md:block"></div>
            </div>

            <div className="text-center relative">
              <div className="bg-gradient-to-br from-[#f1be21] to-[#2c4d31] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Target size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">Gets Personal</h4>
              <p className="text-muted leading-relaxed">
                Receive tailored recommendations and exclusive offers just for you.
              </p>
              <div className="absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent hidden md:block"></div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-[#36b44a] to-[#2c4d31] rounded-2xl p-6 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Star size={32} className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-3">Perfect Match</h4>
              <p className="text-muted leading-relaxed">
                Enjoy meals that match your taste perfectly, every single time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalizedExperience;