import React from "react";
import { motion } from "framer-motion";
import food from "../../assets/images/hero/food.png";
import foodPattern from "../../assets/images/hero/food.png"; // Using food.png as a pattern
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
		<section className="pt-12 md:pt-16 pb-16 relative overflow-hidden bg-white md:bg-[#5CB35E]">
			{/* Background Image Pattern - hidden on small screens to avoid mobile overflow/shaky layout */}
			<div
				className="hidden md:block absolute inset-0 md:w-1/2 bg-cover bg-center bg-no-repeat opacity-20"
				style={{ backgroundImage: `url(${foodPattern})` }}
				aria-hidden="true"
			></div>
			{/* Green Opacity Overlay - hidden on small screens */}
			<div className="hidden md:block absolute inset-0 md:w-1/2 bg-primary/10" aria-hidden="true"></div>

			{/* Slanted background - desktop only */}
			<div
				className="hidden md:block absolute top-0 right-0 bottom-0 w-1/2 bg-white -skew-x-12 origin-top-right"
				aria-hidden="true"
			></div>

			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<div className="text-center md:text-left mb-8">
					<h2 className="text-3xl text-dark md:text-white md:text-4xl font-extrabold">Featured Categories</h2>
					<p className="text-gray-600 md:text-gray-200 mt-2 max-w-2xl mx-auto md:mx-0">Discover authentic ingredients and ready-to-eat meals from around the world.</p>
				</div>

				{/* Grid layout for mobile, flex for desktop */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-wrap items-start gap-6 md:pb-4 md:no-scrollbar">
					{categories.map((c, i) => (
						<motion.a
							key={c.title}
							href={`/category/${c.title.toLowerCase().replace(/\s+/g, '-')}`}
							aria-label={`Browse ${c.title} category`}
							className={`group relative w-full md:w-72 rounded-2xl overflow-hidden shadow-sm transform transition-all hover:shadow-xl hover:-translate-y-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
								i < 2 ? 'bg-white text-dark focus-visible:ring-primary focus-visible:ring-offset-gray-50' : 'bg-primary text-white focus-visible:ring-white focus-visible:ring-offset-primary'
							}`}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ amount: 0.2 }}
							transition={{ duration: 1.0, delay: i * 0.12 }}
						>
							<div className={`relative h-44 md:h-48 ${i < 2 ? 'bg-gradient-to-br from-white to-gray-100' : ''}`}>
								<img src={c.img} alt={c.title} className="absolute inset-0 m-auto h-32 md:h-36 opacity-95 object-contain block max-w-full" />
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-40 transition-opacity"></div>
							</div>

							<div className="p-4">
								<h3 className="text-lg md:text-lg font-semibold mb-1">{c.title}</h3>
								<p className={`text-sm mb-3 ${i >= 2 ? 'text-green-100' : 'text-gray-600'}`}>Explore curated items and top picks from this category.</p>
								<div className="flex items-center justify-between">
									<span className={`text-sm font-medium ${i < 2 ? 'text-primary' : 'text-white'}`}>Shop now</span>
									<button aria-label={`Explore ${c.title}`} className={`px-3 py-1.5 rounded-md text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
										i < 2 ? 'bg-primary text-white hover:bg-dark focus-visible:ring-primary focus-visible:ring-offset-white' : 'bg-white text-primary hover:bg-green-100 focus-visible:ring-white focus-visible:ring-offset-primary'
									}`}>Explore</button>
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
