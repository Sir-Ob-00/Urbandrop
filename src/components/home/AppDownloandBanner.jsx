import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import appMockup from '../../assets/images/urbandrop-mobile-app-ui.png';
import sliderImg from '../../assets/images/slider-urbandrop.png';
import appstoreImg from '../../assets/images/appstore-black.png';
import playstoreImg from '../../assets/images/playstore-black.png';

const CountdownUnit = ({ value, label }) => (
	<div className="flex flex-col items-center">
		<span className="text-4xl md:text-6xl font-extrabold text-[#183A37] tracking-widest">
			{String(value).padStart(2, '0')}
		</span>
		<span className="text-xs text-gray-400 uppercase">{label}</span>
	</div>
);

// Calculate the launch date once and store it as a fixed value.
// This is 70 days, 21 hours, and 15 minutes from a fixed point in time.
const getLaunchDate = () => {
    const d = new Date();
    d.setDate(d.getDate() + 70);
    return d.getTime();
}
const launchDate = getLaunchDate();

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

const AppDownloandBanner = ({ compact = false }) => {
	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
	const [isMobile, setIsMobile] = useState(() => (typeof window !== 'undefined' ? window.innerWidth <= 768 : false));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 768);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return (
		<>
		<section className="bg-gray-100">
			<div className="max-w-7xl mx-auto px-6 py-12 md:py-0 md:grid md:grid-cols-2 items-center gap-8">
				{/* Left Column: Text Content */}
				<motion.div 
					className="text-[#5CB35E] text-center md:text-left"
					initial={isMobile ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -220, scale: 0.98 }}
					animate={isMobile ? { opacity: 1, x: 0, scale: 1 } : {}}
					whileInView={!isMobile ? { opacity: 1, x: 0, scale: 1 } : {}} viewport={{ amount: 0.45, once: true }} transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<h2 className="text-3xl text-black md:text-5xl font-extrabold leading-tight">
						Your <span className="text-[#5CB35E]">Groceries,</span> <br />
						<span className="text-primary">Faster Than Ever.</span>
					</h2>
					<p className="mt-10 mb-16 text-gray-700 max-w-md mx-auto md:mx-0">
						Download the Urbandrop app for exclusive deals, faster checkout, and real-time order tracking right at your fingertips.
					</p>
					<div className="flex justify-center md:justify-start items-center gap-4 h-12">
						<a href="/404" className="hover:opacity-90 transition-opacity">
							<img src={appstoreImg} alt="Download on the App Store" className="h-full" />
						</a>
						<a href="/404" className="hover:opacity-90 transition-opacity">
							<img src={playstoreImg} alt="Get it on Google Play" className="h-full" />
						</a>
					</div>

					{/* Countdown Timer will appear in separate section below */}
				</motion.div>

				{/* Right Column: Image */}
				<motion.div 
					className="mt-8 md:mt-0"
					initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 120, scale: 0.98 }}
					animate={isMobile ? { opacity: 1, y: 0, scale: 1 } : {}}
					whileInView={!isMobile ? { opacity: 1, y: 0, scale: 1 } : {}} viewport={{ amount: 0.3, once: true }} transition={{ duration: 0.5, ease: "easeOut" }}
				>
					<img src={sliderImg} alt="Urbandrop Slider" className="w-full md:w-auto max-w-full md:max-w-xl mx-auto" />
				</motion.div>
			</div>
		</section>

		{/* Countdown & Launch Description Section */}
		<section className="bg-white">
			<div className={`max-w-7xl mx-auto px-6 ${compact ? 'py-6 md:py-8' : 'py-10 md:py-14'} text-center`}>
				<p className="max-w-3xl mx-auto text-gray-700 mb-6">Get ready to experience the rich, diverse flavours of Ethnic cuisines delivered straight to your doorstep with Urbandrop. Stay tuned for the grand launch and embark on a culinary journey like no other!</p>
				<div className="flex flex-wrap justify-center items-center gap-6">
					<div className="flex gap-6 w-full max-w-md justify-between mx-auto md:mx-0">
						<CountdownUnit value={timeLeft.days} label="Days" />
						<CountdownUnit value={timeLeft.hours} label="Hours" />
						<CountdownUnit value={timeLeft.minutes} label="Minutes" />
						<CountdownUnit value={timeLeft.seconds} label="Seconds" />
					</div>
				</div>
			</div>
		</section>
		</>
	);
};

export default AppDownloandBanner;
