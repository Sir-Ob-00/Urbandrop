import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Truck } from 'lucide-react';
import jollofKitchenImage from '../../assets/images/customer/jollof & kitchen.png';
import ampesiCustomerImage from '../../assets/images/customer/ampesi.png';
import doroWatImage from '../../assets/images/customer/doro wat.jpg';
import curryGoatImage from '../../assets/images/customer/curry goat.jpg';

const products = [
  {
    id: 1,
    name: 'Jollof Rice & Chicken',
    category: 'Nigerian Cuisine',
    price: 18.99,
    originalPrice: 22.99,
    rating: 4.8,
    reviews: 234,
    deliveryTime: '25-30 min',
    image: jollofKitchenImage,
    badge: 'Popular',
    merchant: 'Mama\'s Kitchen',
  },
  {
    id: 2,
    name: 'Fresh Plantains & Stew',
    category: 'Ghanaian Cuisine',
    price: 15.50,
    originalPrice: null,
    rating: 4.9,
    reviews: 189,
    deliveryTime: '20-25 min',
    image: ampesiCustomerImage,
    badge: 'Chef\'s Choice',
    merchant: 'Golden Spoon',
  },
  {
    id: 3,
    name: 'Injera with Doro Wat',
    category: 'Ethiopian Cuisine',
    price: 21.99,
    originalPrice: 25.99,
    rating: 4.7,
    reviews: 156,
    deliveryTime: '30-35 min',
    image: doroWatImage,
    badge: 'Spicy',
    merchant: 'Habesha Flavors',
  },
  {
    id: 4,
    name: 'Curry Goat with Rice',
    category: 'Caribbean Cuisine',
    price: 24.99,
    originalPrice: null,
    rating: 4.9,
    reviews: 312,
    deliveryTime: '35-40 min',
    image: curryGoatImage,
    badge: 'Signature',
    merchant: 'Island Spice',
  },
];

const FeaturedProducts = () => {
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
            Featured <span className="text-primary">Dishes</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Discover our most loved dishes, freshly prepared by local chefs and delivered to your door
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-sm text-primary font-semibold uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                <p className="text-muted text-sm mb-4">
                  by {product.merchant}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="font-semibold text-dark">{product.rating}</span>
                  </div>
                  <span className="text-muted text-sm">({product.reviews} reviews)</span>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center justify-between text-sm text-muted">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{product.deliveryTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Truck size={14} />
                    <span>Free delivery</span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-4 bg-primary text-white py-3 rounded-2xl font-semibold hover:bg-primary transition-all transform hover:scale-105 shadow-lg">
                  Order from App
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="bg-primary text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-darkGreen transition-all transform hover:scale-105 shadow-xl">
            Explore All Dishes
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;