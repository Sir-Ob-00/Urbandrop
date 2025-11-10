import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail, Coffee, ShoppingBag, Building, Utensils, Train, Bus, Car } from 'lucide-react';

const MapSection = () => {
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
            Find Us at Our <span className="text-primary">Office</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Located in the heart of London, our headquarters is easily accessible by public transport.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden h-96">
              {/* Placeholder for Google Maps - In a real implementation, you'd embed Google Maps */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 relative">
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full"></div>
                  <div className="absolute top-20 right-20 w-16 h-16 bg-primary/20 rounded-full"></div>
                  <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-primary/20 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-18 h-18 bg-primary/20 rounded-full"></div>
                </div>

                {/* Map Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <MapPin size={48} className="text-primary drop-shadow-lg" />
                    <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>

                {/* Map Overlay Text */}
                <div className="absolute top-6 right-6 bg-primary text-white rounded-2xl px-4 py-2 shadow-lg">
                  <div className="text-sm font-medium">Interactive Map</div>
                </div>
              </div>
            </div>

            {/* Map Legend */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-primary" />
                <span className="text-sm font-medium text-dark">Our Location</span>
              </div>
            </div>
          </motion.div>

          {/* Office Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-primary/10 rounded-2xl p-4">
                  <MapPin size={32} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Head Office</h3>
                  <p className="text-muted leading-relaxed">
                    22 Greenway Crescent<br />
                    London, UK<br />
                    SW1A 1AA
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold text-dark">Mon - Fri</div>
                    <div className="text-muted text-sm">9:00 AM - 6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-primary" />
                  <div>
                    <div className="font-semibold text-dark">Phone</div>
                    <div className="text-muted text-sm">+44 123 456 7890</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-gradient-to-br from-primary to-primaryLight rounded-3xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Getting Here</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <Train size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Tube Station</div>
                    <div className="text-white/80 text-sm">Victoria Station (5 min walk)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <Bus size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Bus Routes</div>
                    <div className="text-white/80 text-sm">Lines 2, 11, 24, 29, 39</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-2 mt-1">
                    <Car size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Parking</div>
                    <div className="text-white/80 text-sm">On-site parking available</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-background rounded-3xl p-8 border border-gray-100">
              <h4 className="text-2xl font-bold text-dark mb-4">Schedule a Visit</h4>
              <p className="text-muted mb-6">
                Want to visit our office? We'd love to show you around and discuss potential partnerships.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-2xl font-semibold hover:bg-darkGreen transition-all">
                  Book a Meeting
                </button>
                <button className="border-2 border-primary text-primary px-6 py-3 rounded-2xl font-semibold hover:bg-primary hover:text-white transition-all">
                  Get Directions
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;