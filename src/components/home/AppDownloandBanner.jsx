import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import appMockup from '../../assets/images/urbandrop-mobile-app-ui.png';
import sliderImg from '../../assets/images/slider-urbandrop.png';
import appstoreImg from '../../assets/images/appstore-black.png';
import playstoreImg from '../../assets/images/playstore-black.png';

const CountdownUnit = ({ value, label }) => (
	<div className="flex flex-col items-center">
		<span className="text-6xl font-extrabold text-[#183A37] tracking-widest">
			{String(value).padStart(2, '0')}
		</span>
		<span className="text-xs text-gray-400 uppercase">{label}</span>
	</div>
);

// Calculate the launch date once and store it.
// This adds 75 days, 17 hours, and 10 minutes to the time the app first loads.
const launchTime = new Date();
launchTime.setDate(launchTime.getDate() + 75);
launchTime.setHours(launchTime.getHours() + 17);
launchTime.setMinutes(launchTime.getMinutes() + 10);
const launchDate = launchTime.getTime();

const calculateTimeLeft = () => {
	const now = new Date().getTime();
	const distance = launchDate - now;

	if (distance < 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true };
	}

	return {
		days: Math.floor(distance / (1000 * 60 * 60 * 24)),
		hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
		minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
		seconds: Math.floor((distance % (1000 * 60)) / 1000),
		isFinished: false,
	};
};

const AppDownloandBanner = () => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	return (
		<section className="bg-gray-100">
			<div className="max-w-7xl mx-auto px-6 py-12 md:py-0 md:grid md:grid-cols-2 items-center gap-8">
				{/* Left Column: Text Content */}
				<motion.div 
					className="text-[#5CB35E] text-center md:text-left"
					initial={{ opacity: 0, x: -220, scale: 0.98 }}
					whileInView={{ opacity: 1, x: 0, scale: 1 }}
					viewport={{ amount: 0.45, once: true }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<h2 className="text-3xl text-black md:text-5xl font-extrabold leading-tight">
						Your <span className="text-[#5CB35E]">Groceries,</span> <br />
						<span className="text-primary">Faster Than Ever.</span>
					</h2>
					<p className="mt-4 mb-8 text-gray-700 max-w-md mx-auto md:mx-0">
						Download the Urbandrop app for exclusive deals, faster checkout, and real-time order tracking right at your fingertips.
					</p>
					<div className="flex justify-center md:justify-start items-center gap-4 h-12">
						<a href="#" className="hover:opacity-90 transition-opacity">
							<img src={appstoreImg} alt="Download on the App Store" className="h-full" />
						</a>
						<a href="#" className="hover:opacity-90 transition-opacity">
							<img src={playstoreImg} alt="Get it on Google Play" className="h-full" />
						</a>
					</div>

					{/* Countdown Timer */}
					<div className="mt-10">
						<h3 className="text-6xl font-extrabold  text-[#5CB35E] text-center md:text-left mb-4">App Launch</h3>
						<div className="flex text-[#5CB35E] justify-center md:justify-start items-center space-x-4 md:space-x-6">
							<CountdownUnit value={timeLeft.days} label="Days" />
							<CountdownUnit value={timeLeft.hours} label="Hours" />
							<CountdownUnit value={timeLeft.minutes} label="Minutes" />
							<CountdownUnit value={timeLeft.seconds} label="Seconds" />
						</div>
					</div>
				</motion.div>

				{/* Right Column: Image */}
				<motion.div 
					className="mt-12 md:mt-0"
					initial={{ opacity: 0, y: 220, scale: 0.96 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ amount: 0.45, once: true }}
					transition={{ duration: 1.2, ease: "easeOut" }}
				>
					<img src={sliderImg} alt="Urbandrop Slider" className="w-full max-w-md md:max-w-xl mx-auto" />
				</motion.div>
			</div>
		</section>
	);
};

export default AppDownloandBanner;
