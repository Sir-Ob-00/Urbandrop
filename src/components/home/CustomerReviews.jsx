import React from "react";
import avatar from "../../assets/images/urbandrop logo.png";
import { motion } from "framer-motion";

const reviews = [
	{
		name: "Sophie M.",
		rating: 5,
		text: "Quick delivery and excellent selection — my favourite app for groceries!",
	},
	{
		name: "Daniel K.",
		rating: 4,
		text: "Great local merchants and helpful support when I needed it.",
	},
	{
		name: "Aisha R.",
		rating: 5,
		text: "App is easy to use and my orders always arrive on time.",
	},
];

const Star = ({ filled }) => (
	<span className={`text-sm ${filled ? "text-yellow-400" : "text-gray-300"}`}>★</span>
);

const CustomerReviews = () => {
	return (
		<section className="py-12">
			<div className="max-w-7xl mx-auto px-6">
				<h2 className="text-2xl font-bold mb-6">What our customers say</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
								{reviews.map((r, i) => (
									<motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-lg p-6 shadow-sm">
										<div className="flex items-center gap-4 mb-4">
								<img src={avatar} alt={r.name} className="w-12 h-12 rounded-full object-cover" />
								<div>
									<div className="font-semibold">{r.name}</div>
									<div className="flex">{Array.from({ length: 5 }).map((_, idx) => (
										<Star key={idx} filled={idx < r.rating} />
									))}</div>
								</div>
										</div>
										<p className="text-gray-700">{r.text}</p>
									</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default CustomerReviews;
