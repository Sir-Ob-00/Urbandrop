import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Play, Clock, Users, Star, ArrowRight, Search, ShoppingCart } from 'lucide-react';
import appMockup from '../../assets/images/urbandrop-mobile-app-ui.png';

const RecipesFeature = () => {
  const recipeSteps = [
    {
      step: 1,
      title: 'Browse Authentic Recipes',
      description: 'Explore recipes from top local chefs and restaurants',
      icon: <Search size={32} className="text-white" />,
    },
    {
      step: 2,
      title: 'Watch Cooking Videos',
      description: 'Step-by-step video tutorials from professional chefs',
      icon: <Play size={32} className="text-white" />,
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
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-yellow-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-orange-200 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-yellow-200 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-red-200 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-red-500 text-white px-4 py-2 rounded-full font-semibold mb-6">
            <ChefHat size={16} />
            <span>Featured Feature</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-dark mb-6">
            Cook Like Your
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Favorite Vendor
            </span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
            Urbandrop doesn't just deliver food — it teaches you how to make it. Explore authentic recipes
            from partnered restaurants and chefs, complete with step-by-step instructions, cooking videos,
            and one-click ingredient ordering.
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
                <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-3 flex-shrink-0">
                  <ChefHat size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Authentic Recipes</h3>
                  <p className="text-muted leading-relaxed">
                    Learn to cook traditional dishes from Africa, Asia, Europe, and the Caribbean.
                    Each recipe is carefully curated by local chefs and restaurant owners.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-3 flex-shrink-0">
                  <Play size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Video Tutorials</h3>
                  <p className="text-muted leading-relaxed">
                    Watch professional cooking demonstrations with clear, step-by-step guidance.
                    Perfect for both beginners and experienced home cooks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-3 flex-shrink-0">
                  <Star size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Fresh Ingredients</h3>
                  <p className="text-muted leading-relaxed">
                    Order all the ingredients you need with one click. Get fresh, quality ingredients
                    delivered alongside your recipe instructions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">500+</div>
                  <div className="text-muted text-sm">Authentic Recipes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-muted text-sm">Partner Chefs</div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3">
                Explore Recipes
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
                alt="Urbandrop recipes feature on mobile app"
                className="w-full max-w-md mx-auto rounded-3xl shadow-2xl"
              />

              {/* Floating Recipe Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                    <ChefHat size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-sm">Nigerian Jollof Rice</div>
                    <div className="text-muted text-xs">By Chef Adebayo</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted">
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>45 min</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={12} />
                    <span>4 servings</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={12} className="text-yellow-400 fill-current" />
                    <span>4.9</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Play Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-4 shadow-xl"
              >
                <Play size={32} className="text-white ml-1" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Recipe Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <h3 className="text-3xl font-bold text-dark text-center mb-12">
            How Recipe Learning Works
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {recipeSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-dark mb-2">{step.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>

                {/* Connection Line */}
                {index < recipeSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecipesFeature;