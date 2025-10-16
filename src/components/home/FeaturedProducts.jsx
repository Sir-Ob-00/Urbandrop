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
		<section className="py-16 bg-[#5CB35E]">
			<div className="max-w-7xl mx-auto px-6">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-3xl text-white md:text-4xl font-extrabold">Featured Categories</h2>
					<a href="/categories" className="text-sm text-[#5CB35E] font-medium hover:underline">Browse all</a>
				</div>

				{/* Single horizontal row with scroll on overflow */}
				<div className="flex items-start gap-6 overflow-x-auto pb-4 -mx-6 px-6 no-scrollbar">
					{categories.map((c, i) => (
						<motion.a
							key={c.title}
							href={`/category/${c.title.toLowerCase().replace(/\s+/g, '-')}`}
							aria-label={`Browse ${c.title} category`}
							className="group relative flex-shrink-0 w-72 rounded-2xl overflow-hidden bg-white shadow-sm transform transition-all hover:shadow-xl hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5CB35E] focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.2 }}
							transition={{ duration: 1.0, delay: i * 0.12 }}
						>
							<div className="relative h-44 md:h-48 bg-gradient-to-br from-white to-gray-100">
								<img src={c.img} alt={c.title} className="absolute inset-0 m-auto h-32 md:h-36 opacity-95 object-contain" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
							</div>

							<div className="p-4">
								<h3 className="text-lg md:text-lg font-semibold mb-1">{c.title}</h3>
								<p className="text-sm text-[#6b7a7a] mb-3">Explore curated items and top picks from this category.</p>
								<div className="flex items-center justify-between">
									<span className="text-sm font-medium text-[#5CB35E]">Shop now</span>
									<button aria-label={`Explore ${c.title}`} className="bg-[#5CB35E] text-white px-3 py-1.5 rounded-md text-sm hover:bg-[#4a954d] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5CB35E] focus-visible:ring-offset-2 focus-visible:ring-offset-white">Explore</button>
								</div>
							</div>
						</motion.a>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;
