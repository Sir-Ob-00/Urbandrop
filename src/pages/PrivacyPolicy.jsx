import React from "react";
import { useTranslation } from "react-i18next";
import SEO from "../components/common/SEO";

const PrivacyPolicy = () => {
	const { t } = useTranslation();

	return (
		<main className="min-h-screen bg-gradient-to-br from-[#f2f5f9] to-[#e8f4f8]">
			<SEO
				title="Privacy Policy - Urbandrop™"
				description="Read Urbandrop®'s Privacy Policy to understand how we collect, use, and protect your data."
				canonical="https://urbandrop.io/privacy-policy"
			/>
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-[#183A37]/10 to-[#5CB35E]/10"></div>
				<div className="relative container mx-auto px-6 text-center">
					<div className="max-w-4xl mx-auto">
						<p className="text-[#5CB35E] font-semibold mb-3">{t('privacyPolicy.hero.lastModified')}</p>
						<h1 className="font-black text-[#183A37] mb-6">{t('privacyPolicy.hero.title')} <span className="text-[#5CB35E]">{t('privacyPolicy.hero.highlight')}</span></h1>
						<p className="text-[#879EA4] mb-4 font-medium text-h4">
							{t('privacyPolicy.hero.subtitle')}
						</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
			</section>

			<div className="container mx-auto px-6 pb-32">
				{/* Main Content */}
				<div className="max-w-4xl mx-auto space-y-8">
					{/* Section 1: Who We Are */}
					<section id="who-we-are" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
							{t('privacyPolicy.sections.whoWeAre.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							{t('privacyPolicy.sections.whoWeAre.content', { returnObjects: true }).map((para, idx) => (
								<p key={idx}>{para}</p>
							))}
						</div>
					</section>

					{/* Section 2: Lawful Basis for Processing */}
					<section id="lawful-basis" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
							{t('privacyPolicy.sections.lawfulBasis.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.lawfulBasis.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.lawfulBasis.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					{/* Section 3: Information We Collect */}
					<section id="information-we-collect" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
							{t('privacyPolicy.sections.infoCollect.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.infoCollect.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.infoCollect.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					{/* Section 4: How We Use Your Information */}
					<section id="how-we-use" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</span>
							{t('privacyPolicy.sections.howWeUse.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.howWeUse.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.howWeUse.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					{/* Section 5: Sharing Your Information */}
					<section id="sharing-your-information" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">5</span>
							{t('privacyPolicy.sections.sharing.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.sharing.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.sharing.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
							<p className="font-semibold text-[#183A37]">{t('privacyPolicy.sections.sharing.note')}</p>
						</div>
					</section>

					{/* Section 6: Data Retention */}
					<section id="data-retention" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">6</span>
							{t('privacyPolicy.sections.retention.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.retention.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.retention.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					{/* Section 7: Your Rights */}
					<section id="your-rights" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">7</span>
							{t('privacyPolicy.sections.rights.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.rights.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.rights.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
							<p>{t('privacyPolicy.sections.rights.contact')}</p>
							<p>{t('privacyPolicy.sections.rights.complaint')}</p>
						</div>
					</section>

					{/* Section 8: Security */}
					<section id="data-security" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">8</span>
							{t('privacyPolicy.sections.security.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.security.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.security.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
							<p className="italic">{t('privacyPolicy.sections.security.note')}</p>
						</div>
					</section>

					{/* Section 9: Cookies and Tracking Technologies */}
					<section id="cookies-and-tracking" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">9</span>
							{t('privacyPolicy.sections.cookies.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.cookies.intro')}</p>
							<ul className="list-disc pl-6 space-y-2">
								{t('privacyPolicy.sections.cookies.items', { returnObjects: true }).map((item, idx) => (
									<li key={idx}>{item}</li>
								))}
							</ul>
							<p>{t('privacyPolicy.sections.cookies.consent')}</p>
						</div>
					</section>

					{/* Section 10: Third-Party Links */}
					<section id="links-to-other-sites" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">10</span>
							{t('privacyPolicy.sections.links.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.links.content')}</p>
						</div>
					</section>

					{/* Section 11: Children's Privacy */}
					<section id="childrens-privacy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">11</span>
							{t('privacyPolicy.sections.children.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.children.content')}</p>
						</div>
					</section>

					{/* Section 12: International Data Transfers */}
					<section id="international-transfers" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">12</span>
							{t('privacyPolicy.sections.international.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.international.content')}</p>
						</div>
					</section>

					{/* Section 13: Changes to This Policy */}
					<section id="updates-to-this-policy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">13</span>
							{t('privacyPolicy.sections.updates.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.updates.content')}</p>
						</div>
					</section>

					{/* Section 14: Contact Us */}
					<section id="contact-us" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">14</span>
							{t('privacyPolicy.sections.contact.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700 space-y-4">
							<p>{t('privacyPolicy.sections.contact.intro')}</p>
							<div className="bg-gray-50 p-6 rounded-lg mt-4 space-y-3">
								<p className="font-semibold text-[#183A37]">{t('privacyPolicy.sections.contact.companyName')}</p>
								<p>{t('privacyPolicy.sections.contact.location')}</p>
								<p><strong>Email:</strong> <a href="mailto:support@urbandrop.io" className="text-[#5CB35E] hover:underline">{t('privacyPolicy.sections.contact.email')}</a></p>
								<p><strong>{t('privacyPolicy.sections.contact.ico')}</strong></p>
								<p><a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#5CB35E] hover:underline">{t('privacyPolicy.sections.contact.icoWebsite')}</a> {t('privacyPolicy.sections.contact.icoPhone')}</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
