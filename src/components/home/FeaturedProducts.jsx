import React from "react";
import { motion } from "framer-motion";
import food from "../../assets/images/hero/food.png";
import bag from "../../assets/images/hero/bag.png";
import basket from "../../assets/images/hero/basket.png";

const categories = [
	{ title: "Fresh Produce", img: food },
	{ title: "Bakery", img: bag },
	{ title: "Groceries", img: basket },
	{ title: "Beverages", img: food },
];

const FeaturedProducts = () => {
	return (
		<section className="py-12 bg-white">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-2xl font-bold mb-6">Featured Categories</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					{categories.map((c) => (
									<div key={c.title} className="rounded-lg shadow-sm overflow-hidden">
										<motion.div className="h-40 bg-gray-100 flex items-center justify-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
											<img src={c.img} alt={c.title} className="h-32 object-contain" />
										</motion.div>
										<div className="p-4">
											<h3 className="font-semibold mb-2">{c.title}</h3>
											<button className="bg-primary text-white px-4 py-2 rounded">Explore</button>
										</div>
									</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
