import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Play, Clock, Users, Star, ArrowRight, Search, ShoppingCart } from 'lucide-react';
import appMockup from '../../assets/images/features/cart png.png';

const RecipesFeature = () => {
  const recipeSteps = [
    {
      step: 1,
      title: 'Browse Authentic Recipes',
      description: 'Explore recipes from top local chefs and restaurants',
      icon: <Search size={32} className="text-white" />,
    },
    {
      step: 3,
      title: 'Order Ingredients',
      description: 'One-click ordering of fresh ingredients from the recipe',
      icon: <ShoppingCart size={32} className="text-white" />,
    },
    {
      step: 4,
      title: 'Cook & Enjoy',
      description: 'Master new dishes and impress your family and friends',
      icon: <ChefHat size={32} className="text-white" />,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#fff5ea] via-[#fcf7de] to-[#ddeab9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#2c4d31]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#36b44a]/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#f1be21]/20 rounded-full"></div>
        {/* Grocery Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232c4d31' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3Ccircle cx='27' cy='7' r='2'/%3E%3Ccircle cx='47' cy='7' r='2'/%3E%3Ccircle cx='7' cy='27' r='2'/%3E%3Ccircle cx='27' cy='27' r='2'/%3E%3Ccircle cx='47' cy='27' r='2'/%3E%3Ccircle cx='7' cy='47' r='2'/%3E%3Ccircle cx='27' cy='47' r='2'/%3E%3Ccircle cx='47' cy='47' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
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
            <ChefHat size={16} />
            <span>Product Showcase</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-[#2c4d31] mb-6">
            Authentic Ethnic
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2c4d31] to-[#36b44a]">
              Groceries & Foods
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Discover authentic ethnic groceries and restaurant-quality foods from around the world.
            From traditional spices to ready-made meals, find everything you need for an authentic dining experience.
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
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-2xl p-3 flex-shrink-0">
                  <ChefHat size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Ethnic Groceries</h3>
                  <p className="text-muted leading-relaxed">
                    Authentic spices, herbs, and specialty ingredients from traditional markets
                    around the world, sourced directly from local suppliers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-[#36b44a] to-[#2c4d31] rounded-2xl p-3 flex-shrink-0">
                  <Play size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Restaurant Foods</h3>
                  <p className="text-muted leading-relaxed">
                    Ready-to-eat meals and dishes prepared by authentic ethnic restaurants,
                    bringing restaurant-quality food to your home.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-3 flex-shrink-0">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Fresh & Authentic</h3>
                  <p className="text-muted leading-relaxed">
                    Experience the genuine flavors of different cultures with fresh, authentic
                    ingredients and traditional cooking methods.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-muted text-sm">Ethnic Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">25+</div>
                  <div className="text-muted text-sm">Partner Merchants</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-[#2c4d31] to-[#36b44a] text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                Browse Products
                <ArrowRight size={20} />
              </button>
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
                alt="Urbandrop marketplace showcasing ethnic groceries and restaurant foods"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Product Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2c4d31] to-[#36b44a] rounded-xl flex items-center justify-center">
                    <ChefHat size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Authentic Spices</div>
                    <div className="text-muted text-xs">Premium quality</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span>4.9</span>
                  </div>
                  <div className="text-xs text-primary font-medium">
                    $12.99
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Product Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">
            Our Product Categories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2c4d31]/10 to-[#36b44a]/10 flex items-center justify-center">
                <img src="src\assets\images\features\groceries-1.avif" alt="Spices" className="w-16 h-16 object-cover rounded-lg" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">Ethnic Groceries</h4>
              <p className="text-muted text-sm leading-relaxed">Authentic spices, herbs, and specialty ingredients</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#36b44a]/10 to-[#f1be21]/10 flex items-center justify-center">
                <img src="src\assets\images\features\ampesi.png" alt="Restaurant food" className="w-16 h-16 object-cover rounded-lg" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">Restaurant Foods</h4>
              <p className="text-muted text-sm leading-relaxed">Ready-to-eat meals from ethnic restaurants</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#f1be21]/10 to-[#2c4d31]/10 flex items-center justify-center">
                <img src="src\assets\images\features\plantain.png" alt="Fresh produce" className="w-16 h-16 object-cover rounded-lg" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">Fresh Produce</h4>
              <p className="text-muted text-sm leading-relaxed">Traditional fruits and vegetables</p>
            </div>

            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-[#2c4d31]/10 to-[#36b44a]/10 flex items-center justify-center">
                <img src="/images/healthy-ingredients-included-salad.jpg" alt="Specialty items" className="w-16 h-16 object-cover rounded-lg" />
              </div>
              <h4 className="text-xl font-bold text-dark mb-2">Specialty Items</h4>
              <p className="text-muted text-sm leading-relaxed">Unique products from around the world</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecipesFeature;