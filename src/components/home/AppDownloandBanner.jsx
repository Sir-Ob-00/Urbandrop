import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import sliderImg from '../../assets/images/slider-urbandrop.png';
import appstoreImg from '../../assets/images/appstore-black.png';
import playstoreImg from '../../assets/images/playstore-black.png';

const CountdownUnit = ({ value, label }) => (
	<div className="flex flex-col items-center">
		<div className="bg-[#183A37] text-white rounded-lg p-4 md:p-6 min-w-[5rem] md:min-w-[10rem] flex items-center justify-center shadow-lg mb-2">
			<span className="text-3xl md:text-6xl font-extrabold tracking-widest">
				{String(value).padStart(2, '0')}
			</span>
		</div>
		<span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{label}</span>
	</div>
);

// Fixed launch date: April 1st, 2026
const LAUNCH_DATE = new Date('2026-04-01T00:00:00').getTime();

const calculateTimeLeft = () => {
	const now = new Date().getTime();
	const distance = LAUNCH_DATE - now;

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
	const { t } = useTranslation();

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
						<h2 className="text-3xl text-black md:text-5xl lg:text-7xl font-extrabold leading-tight mt-10">
							{t('home.appDownload.title1')} <span className="text-[#5CB35E]">{t('home.appDownload.title2')}</span> <br />
							<span className="text-primary">{t('home.appDownload.title3')}</span>
						</h2>
						<p className="mt-10 mb-20 text-gray-700 max-w-md mx-auto md:mx-0">
							{t('home.appDownload.desc')}
						</p>
						<div className="flex justify-center md:justify-start items-center gap-10 h-12 mb-16">
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
						className="mt-8 md:mt-0 self-end"
						initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 120, scale: 0.98 }}
						animate={isMobile ? { opacity: 1, y: 0, scale: 1 } : {}}
						whileInView={!isMobile ? { opacity: 1, y: 0, scale: 1 } : {}} viewport={{ amount: 0.3, once: true }} transition={{ duration: 0.5, ease: "easeOut" }}
					>
						<img src={sliderImg} alt="Urbandrop Slider" className="w-full md:w-auto max-w-full md:max-w-2xl mx-auto block" />
					</motion.div>
				</div>
			</section>

			{/* Countdown & Launch Description Section */}
			<section className="bg-white">
				<div className={`max-w-7xl mx-auto px-6 ${compact ? 'py-6 md:py-8' : 'py-10 md:py-14'} text-center`}>
					<div className="flex flex-wrap justify-center items-center gap-6">
						<div className="flex gap-4 md:gap-20 w-full max-w-4xl justify-center mx-auto">
							<CountdownUnit value={timeLeft.days} label={t('home.appDownload.countdown.days')} />
							<CountdownUnit value={timeLeft.hours} label={t('home.appDownload.countdown.hours')} />
							<CountdownUnit value={timeLeft.minutes} label={t('home.appDownload.countdown.minutes')} />
							<CountdownUnit value={timeLeft.seconds} label={t('home.appDownload.countdown.seconds')} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default AppDownloandBanner;
