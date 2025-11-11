import React from "react";
import { ShieldCheck, BarChart, Settings, Megaphone } from 'lucide-react';
import { motion } from "framer-motion";

const CookiesPolicy = () => {
	const effectiveDate = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	return (
		<main className="bg-white pt-32 pb-16">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-dark">Cookies Policy</h1>
					<p className="text-[#879EA4] mt-2">(Effective Date: {effectiveDate})</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<motion.div
						className="bg-[#5CB35E]/10 p-8 rounded-lg text-center mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-2xl font-bold text-[#183A37] mb-3">What Are Cookies?</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">Cookies are small text files placed on your device when you visit a website or use an app. They help us remember your preferences, improve performance, and personalize your experience. Some cookies are essential for the Platform to work properly, while others help us understand how users interact with our services so we can improve them.</p>
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
							<p className="text-gray-600">These cookies are necessary for the Platform to function. They enable core features such as secure login, checkout, and account management. Without them, certain services cannot be provided. Examples include keeping you signed in, managing your shopping basket, and processing payments securely.</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<BarChart className="w-10 h-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">Performance and Analytics Cookies</h3>
							<p className="text-gray-600">These cookies help us understand how visitors use UrbanDrop, for example, which pages are most popular or where users encounter errors. We use this information to improve navigation, speed, and user experience. Examples include Google Analytics and app performance trackers. All data collected is aggregated and anonymous.</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<Settings className="w-10 h-10 text-purple-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">Functionality Cookies</h3>
							<p className="text-gray-600">These cookies remember your preferences such as language, location, or delivery address to make your experience more convenient.</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<Megaphone className="w-10 h-10 text-red-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">Advertising and Marketing Cookies</h3>
							<p className="text-gray-600">These cookies allow us and selected partners to show you relevant offers and promotions, both on UrbanDrop and on other websites or apps. They also help limit the number of times you see the same ad. Examples include Meta Pixel (Facebook/Instagram Ads) and Google Ads Remarketing. You can opt out of personalized advertising through your account settings or your browser's privacy controls.</p>
						</motion.div>
					</motion.div>

					<motion.div
						className="prose prose-lg max-w-4xl mx-auto text-gray-700"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<h2 className="text-2xl font-bold text-[#183A37] mb-3">Third-Party Cookies</h2>
						<p>Some cookies on UrbanDrop come from trusted third parties who help us deliver certain services, for example analytics providers (e.g., Google Analytics), advertising networks, and payment and delivery partners. These third parties may use cookies in accordance with their own privacy policies. UrbanDrop does not control their cookie settings.</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">Managing Cookies</h2>
						<p>You can control or disable cookies through your browser or device settings. Most browsers let you view what cookies are stored on your device, delete existing cookies, and block certain or all cookies. If you disable cookies, some parts of the Platform may not function properly (for example, checkout or saved addresses). You can also adjust cookie preferences through UrbanDrop's Cookie Settings banner when you first visit our website or via your account settings.</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">Consent</h2>
						<p>When you first visit UrbanDrop, you'll see a banner asking for your consent to use non-essential cookies. By clicking "Accept All," you agree to the use of all cookies as outlined here. You can update your preferences at any time by clicking "Manage Cookies" on the site footer or through your profile. Essential cookies do not require consent, as they are needed to deliver the service you request.</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">Updates to This Policy</h2>
						<p>We may update this Cookie Policy periodically to reflect changes in technology or regulation. Updates will be published on this page with a new effective date.</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">Contact Us</h2>
						<p>For questions or concerns about cookies or this Policy, contact: <strong>UrbanDrop Group Limited</strong><br />
						Email: <a href="mailto:DPO@urbandrop.io" className="text-primary hover:underline">DPO@urbandrop.io</a></p>
					</motion.div>
				</div>
			</div>
		</main>
	);
};

export default CookiesPolicy;