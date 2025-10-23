import React from "react";
import { motion } from "framer-motion";
import { Clock, Shield, Truck, Star, ChefHat, Heart } from 'lucide-react';

const customerExpectations = [
	{
		icon: Clock,
		title: "Lightning-Fast Delivery",
		description: "Get your fresh ingredients delivered within 30 minutes. No more waiting hours for your groceries.",
		color: "text-blue-600",
	},
	{
		icon: Shield,
		title: "Premium Quality Guarantee",
		description: "Every product is carefully selected and quality-checked. We stand behind the freshness of our ingredients.",
		color: "text-green-600",
	},
	{
		icon: Truck,
		title: "Reliable Service",
		description: "Count on us for consistent, dependable delivery. Your satisfaction is our top priority.",
		color: "text-purple-600",
	},
	{
		icon: Star,
		title: "Authentic Ethnic Flavors",
		description: "Discover genuine tastes from Asia, Africa, Eastern Europe, and the Caribbean, all in one place.",
		color: "text-yellow-600",
	},
	{
		icon: ChefHat,
		title: "Recipe Inspiration",
		description: "Explore new cuisines with our curated recipes and cooking tips from around the world.",
		color: "text-red-600",
	},
	{
		icon: Heart,
		title: "Personalized Experience",
		description: "Get recommendations tailored to your taste preferences and dietary needs.",
		color: "text-pink-600",
	},
];

const CustomerReviews = () => {

	return (
		<section className="relative py-20 overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 bg-gradient-to-br from-[#5CB35E]/5 via-white to-[#183A37]/5">
				<div className="absolute inset-0" style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%235CB35E' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}></div>
			</div>

			{/* Floating Elements */}
			<div className="absolute top-20 left-10 w-20 h-20 bg-[#5CB35E]/10 rounded-full blur-xl animate-pulse"></div>
			<div className="absolute bottom-20 right-10 w-32 h-32 bg-[#183A37]/10 rounded-full blur-xl animate-pulse delay-1000"></div>
			<div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg animate-bounce delay-500"></div>

			<div className="relative max-w-7xl mx-auto px-6">
				{/* Header */}
				<div className="text-center mb-20">
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, type: "spring" }}
						className="inline-block mb-6"
					>
						<span className="bg-gradient-to-r from-[#5CB35E] to-[#4a954d] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wider shadow-lg">
							Premium Experience
						</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="text-5xl md:text-6xl font-black text-[#183A37] mb-6 leading-tight"
					>
						What Sets Us <span className="bg-gradient-to-r from-[#5CB35E] via-[#4a954d] to-[#3d7c40] bg-clip-text text-transparent">Apart</span>
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
					>
						Experience culinary excellence with our commitment to quality, speed, and authentic flavors from around the world
					</motion.p>
				</div>

				{/* Expectations Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
					{customerExpectations.map((expectation, index) => {
						const IconComponent = expectation.icon;
						return (
							<motion.div
								key={expectation.title}
								initial={{ opacity: 0, y: 50, rotateY: -15 }}
								whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
								transition={{
									duration: 0.8,
									delay: index * 0.15,
									type: "spring",
									stiffness: 100
								}}
								whileHover={{
									y: -10,
									scale: 1.05,
									boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
								}}
								className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
							>
								{/* Card Background Gradient */}
								<div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

								{/* Icon Container */}
								<div className="relative z-10">
									<div className={`w-20 h-20 rounded-3xl ${expectation.color.replace('text-', 'bg-').replace('-600', '-50')} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
										<IconComponent className={`w-10 h-10 ${expectation.color} drop-shadow-sm`} />
									</div>

									<h3 className="text-2xl font-bold text-[#183A37] mb-4 group-hover:text-[#5CB35E] transition-colors duration-300">
										{expectation.title}
									</h3>

									<p className="text-gray-600 leading-relaxed text-lg">
										{expectation.description}
									</p>

									{/* Decorative Element */}
									<div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#5CB35E]/20 to-transparent rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1 }}
					className="text-center"
				>
					<div className="bg-gradient-to-r from-[#5CB35E] to-[#4a954d] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
						{/* CTA Background Pattern */}
						<div className="absolute inset-0 opacity-10">
							<div className="absolute inset-0" style={{
								backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
							}}></div>
						</div>

						<div className="relative z-10">
							<h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
								Ready to Taste the Difference?
							</h3>
							<p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
								Join thousands of satisfied customers who trust Urbandrop for their culinary adventures
							</p>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-white text-[#5CB35E] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl"
							>
								Download Urbandrop App
							</motion.button>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CustomerReviews;
