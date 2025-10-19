import React, { useState, useEffect, useCallback } from "react";
import avatar from "../../assets/images/urbandrop logo.png";
import { motion, AnimatePresence, wrap } from "framer-motion";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import reviewImage from '../../assets/images/hero/market-woman-1.jpg';

const reviews = [
	{
		name: "Sophie M.",
		rating: 5,
		text: "Quick delivery and an excellent selection of international ingredients. This has become my favourite app for groceries and discovering new recipes. The interface is clean and simple to navigate.",
		location: "London, UK",
		date: "Oct 15, 2023",
	},
	{
		name: "Daniel K.",
		rating: 4,
		text: "Found some great local merchants I didn't know about. The customer support was also very helpful when I had a question about my order. A solid experience overall.",
		location: "Manchester, UK",
		date: "Oct 12, 2023",
	},
	{
		name: "Aisha R.",
		rating: 5,
		text: "The app is so easy to use, and my orders always arrive on time, which is a huge plus. I love the convenience and the quality of the products available. Highly recommended!",
		location: "Birmingham, UK",
		date: "Oct 10, 2023",
	},
	{
		name: "Ben C.",
		rating: 5,
		text: "The variety of international foods is simply amazing. I was able to find everything I was looking for to make a traditional Nigerian dish. It's a game-changer for home cooks.",
		location: "Glasgow, UK",
		date: "Oct 08, 2023",
	},
	{
		name: "Fatima A.",
		rating: 4,
		text: "A fantastic service for anyone looking to explore different cuisines without leaving the house. The quality is consistently good, and I appreciate the detailed product descriptions.",
		location: "Bristol, UK",
		date: "Oct 05, 2023",
	},
];

const Star = ({ filled }) => (
	<span className={`text-sm ${filled ? "text-yellow-400" : "text-gray-300"}`}>★</span>
);

const CustomerReviews = () => {
	const [[page, direction], setPage] = useState([0, 1]);
	const [autoSlideDirection, setAutoSlideDirection] = useState(1);

	const paginate = useCallback((newDirection) => {
		setPage(([prevPage, _]) => [prevPage + newDirection, newDirection]);
	}, []);

	const reviewIndex = wrap(0, reviews.length, page);

	// Automatic sliding
	useEffect(() => {
		const interval = setInterval(() => {
			let nextDirection = autoSlideDirection;
			if (reviewIndex >= reviews.length - 1) {
				nextDirection = -1;
			}
			if (reviewIndex <= 0) {
				nextDirection = 1;
			}
			setAutoSlideDirection(nextDirection);
			paginate(nextDirection);
		}, 5000); // Slide every 5 seconds
		return () => clearInterval(interval);
	}, [paginate, reviewIndex, autoSlideDirection]);

	const handleNext = () => {
		paginate(1);
	};

	const handlePrevious = () => {
		paginate(-1);
	};

	const variants = {
		enter: (direction) => ({
			x: direction > 0 ? 500 : -500,
			opacity: 0,
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction) => ({
			zIndex: 0,
			x: direction < 0 ? 500 : -500, // Exit in the same direction as enter
			opacity: 0,
		}),
	};

	return (
		<section className="py-16 bg-gray-50 overflow-hidden">
			<div className="max-w-7xl mx-auto px-6">
				<div className="md:grid md:grid-cols-2 md:gap-12 items-center">
					{/* Left Column: Reviews Slider */}
					<div className="relative flex flex-col">
						<h2 className="text-3xl md:text-4xl font-extrabold text-dark mb-4">What our customers say</h2>
						<p className="text-gray-600 mb-8 max-w-md">Hear from our satisfied customers and see why they love Urbandrop.</p>
						
						<div className="relative h-80 overflow-hidden">
							<AnimatePresence initial={false} custom={direction} mode="wait">
								<motion.div
									key={page}
									custom={direction}
									variants={variants}
									initial="enter"
									animate="center"
									exit="exit"
									transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } }}
									className="absolute w-full bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
								>
									{/* Review Number Badge */}
									<div className="absolute -top-4 -right-4 bg-[#5CB35E] text-white w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl shadow-md">
										{reviews[reviewIndex].rating.toFixed(1)}
									</div>

									<div className="flex items-center gap-4 mb-4">
										<img src={avatar} alt={reviews[reviewIndex].name} className="w-16 h-16 rounded-full object-cover border-2 border-primary" />
										<div>
											<div className="font-semibold text-lg">{reviews[reviewIndex].name}</div>
											<p className="text-sm text-gray-500">{reviews[reviewIndex].location}</p>
										</div>
									</div>
									<p className="text-gray-700 text-base italic mb-4">"{reviews[reviewIndex].text}"</p>
									<div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
										<div className="flex">{Array.from({ length: 5 }).map((_, idx) => (
											<Star key={idx} filled={idx < reviews[reviewIndex].rating} />
										))}</div>
										<p className="text-xs text-gray-400">{reviews[reviewIndex].date}</p>
									</div>
								</motion.div>
							</AnimatePresence>
						</div>

						{/* Navigation Controls */}
						<div className="flex justify-center items-center gap-4 mt-8">
							<button onClick={handlePrevious} aria-label="Previous review" className="p-2 rounded-full bg-[#5CB35E] border border-gray-200 text-gray-600 hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
								<ArrowLeft size={20} />
							</button>
							<div className="flex gap-2">
								{reviews.map((_, i) => (
									<button
										key={i}
										onClick={() => setPage([i, i > reviewIndex ? 1 : -1])}
									className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${reviewIndex === i ? 'bg-[#5CB35E] scale-125' : 'bg-gray-300 hover:bg-gray-400'}`}
										aria-label={`Go to review ${i + 1}`}
									/>
								))}
							</div>
							<button onClick={handleNext} aria-label="Next review" className="p-2 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
								<ArrowRight size={20} />
							</button>
						</div>
					</div>

					{/* Right Column: Image */}
					<div className="hidden md:block mt-12 md:mt-0">
						<img src={reviewImage} alt="Happy customer at a local market" className="rounded-2xl shadow-xl object-cover w-full h-full max-h-[500px]" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default CustomerReviews;
