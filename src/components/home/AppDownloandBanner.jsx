import React from "react";
import { motion } from 'framer-motion';
import appMockup from '../../assets/images/urbandrop-mobile-app-ui.png';
import appstoreImg from '../../assets/images/appstore-black.png';
import playstoreImg from '../../assets/images/playstore-black.png';

const AppDownloandBanner = () => {
	return (
		<section className="bg-dark">
			<div className="max-w-7xl mx-auto px-6 py-12 md:py-0 md:grid md:grid-cols-2 items-center gap-8">
				{/* Left Column: Text Content */}
				<motion.div 
					className="text-white text-center md:text-left"
					initial={{ opacity: 0, x: -50 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ amount: 0.4, once: true }}
					transition={{ duration: 0.8, ease: "easeOut" }}
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
				</motion.div>

				{/* Right Column: Image */}
				<motion.div 
					className="mt-12 md:mt-0"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ amount: 0.4, once: true }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					<img src={appMockup} alt="Urbandrop App Mockup" className="w-full max-w-sm mx-auto" />
				</motion.div>
			</div>
		</section>
	);
};

export default AppDownloandBanner;
