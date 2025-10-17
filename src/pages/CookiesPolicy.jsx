import React from "react";
import { ShieldCheck, BarChart, Settings, Megaphone } from 'lucide-react';
import { motion } from "framer-motion";

import AppDownloandBanner from "../components/home/AppDownloandBanner";
const CookiesPolicy = () => {
	return (
		<main className="bg-white py-16">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-dark">Cookies Policy</h1>
					<p className="text-[#879EA4] mt-2">Last Updated: October 26, 2023</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<motion.div 
						className="bg-[#5CB35E]/10 p-8 rounded-lg text-center mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-2xl font-bold text[#183A37] mb-3">What Are Cookies?</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">Cookies are small text files placed on your device to make our website work more efficiently and to provide us with information. Below, we explain the types of cookies we use and why.</p>
					</motion.div>

					<motion.div 
						className="grid md:grid-cols-2 gap-8 mb-12"
						initial="hidden"
						animate="visible"
						variants={{
							visible: { transition: { staggerChildren: 0.15 } }
						}}
					>
						<motion.div 
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#5CB35E]"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<ShieldCheck className="w-10 h-10 text-primary mb-4" />
							<h3 className="text-xl font-bold text-dark mb-2">Essential Cookies</h3>
							<p className="text-gray-600">These are necessary for the site to function, enabling core features like security, account login, and shopping cart management. They cannot be disabled.</p>
						</motion.div>
						<motion.div 
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<BarChart className="w-10 h-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">Performance Cookies</h3>
							<p className="text-gray-600">These help us understand how visitors interact with our website by collecting anonymous data, allowing us to improve your user experience.</p>
						</motion.div>
						<motion.div 
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<Settings className="w-10 h-10 text-purple-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">Functional Cookies</h3>
							<p className="text-gray-600">These cookies remember your preferences (like language or region) to provide a more personalized and convenient experience on our site.</p>
						</motion.div>
						<motion.div 
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<Megaphone className="w-10 h-10 text-red-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">Advertising Cookies</h3>
							<p className="text-gray-600">These are used to deliver advertisements more relevant to you and your interests. They may be set by us or our advertising partners.</p>
						</motion.div>
					</motion.div>

					<motion.div 
						className="prose prose-lg max-w-4xl mx-auto text-gray-700"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<h2 className="text-2xl font-bold text-[#183A37] mb-3">Managing Cookies</h2>
						<p>You can control and/or delete cookies as you wish. Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.aboutcookies.org</a>.</p>
						
						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">Changes to This Policy</h2>
						<p>We may update this policy from time to time. Please re-visit this page regularly to stay informed about our use of cookies.</p>
					</motion.div>
				</div>
			</div>
			<AppDownloandBanner />
		</main>
	);
};

export default CookiesPolicy;