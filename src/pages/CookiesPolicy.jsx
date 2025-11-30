import React from "react";
import { ShieldCheck, BarChart, Settings, Megaphone } from 'lucide-react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CookiesPolicy = () => {
	const { t, i18n } = useTranslation();
	const effectiveDate = new Date().toLocaleDateString(i18n.language, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	return (
		<main className="bg-white pt-32 pb-16">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-dark">{t('cookiesPolicy.title')}</h1>
					<p className="text-[#879EA4] mt-2">{t('cookiesPolicy.effectiveDate', { date: effectiveDate })}</p>
				</div>

				<div className="max-w-5xl mx-auto">
					<motion.div
						className="bg-[#5CB35E]/10 p-8 rounded-lg text-center mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-2xl font-bold text-[#183A37] mb-3">{t('cookiesPolicy.whatAreCookies.title')}</h2>
						<p className="text-gray-700 max-w-3xl mx-auto">{t('cookiesPolicy.whatAreCookies.desc')}</p>
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
							<h3 className="text-xl font-bold text-dark mb-2">{t('cookiesPolicy.types.essential.title')}</h3>
							<p className="text-gray-600">{t('cookiesPolicy.types.essential.desc')}</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<BarChart className="w-10 h-10 text-blue-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">{t('cookiesPolicy.types.performance.title')}</h3>
							<p className="text-gray-600">{t('cookiesPolicy.types.performance.desc')}</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<Settings className="w-10 h-10 text-purple-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">{t('cookiesPolicy.types.functionality.title')}</h3>
							<p className="text-gray-600">{t('cookiesPolicy.types.functionality.desc')}</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500"
							variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
							whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
							transition={{ duration: 0.3 }}
						>
							<Megaphone className="w-10 h-10 text-red-500 mb-4" />
							<h3 className="text-xl font-bold text-[#183A37] mb-2">{t('cookiesPolicy.types.advertising.title')}</h3>
							<p className="text-gray-600">{t('cookiesPolicy.types.advertising.desc')}</p>
						</motion.div>
					</motion.div>

					<motion.div
						className="prose prose-lg max-w-4xl mx-auto text-gray-700"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<h2 className="text-2xl font-bold text-[#183A37] mb-3">{t('cookiesPolicy.thirdParty.title')}</h2>
						<p>{t('cookiesPolicy.thirdParty.desc')}</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">{t('cookiesPolicy.managing.title')}</h2>
						<p>{t('cookiesPolicy.managing.desc')}</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">{t('cookiesPolicy.consent.title')}</h2>
						<p>{t('cookiesPolicy.consent.desc')}</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">{t('cookiesPolicy.updates.title')}</h2>
						<p>{t('cookiesPolicy.updates.desc')}</p>

						<h2 className="text-2xl font-bold text-[#183A37] mb-3 mt-8">{t('cookiesPolicy.contact.title')}</h2>
						<p>{t('cookiesPolicy.contact.desc')} <strong>{t('cookiesPolicy.contact.companyName')}</strong><br />
							<span dangerouslySetInnerHTML={{ __html: t('cookiesPolicy.contact.email') }}></span></p>
					</motion.div>
				</div>
			</div>
		</main>
	);
};

export default CookiesPolicy;