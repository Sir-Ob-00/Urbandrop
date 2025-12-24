import React from "react";
import { useTranslation } from "react-i18next";



import SEO from "../components/common/SEO";

const PrivacyPolicy = () => {
	const { t } = useTranslation();

	const effectiveDate = new Date().toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	// useEffect removed - scroll spy logic was unused


	return (
		<main className="min-h-screen bg-gradient-to-br from-[#f2f5f9] to-[#e8f4f8]">
			<SEO
				title="Privacy Policy - Urbandrop"
				description="Read Urbandrop's Privacy Policy to understand how we collect, use, and protect your data."
				canonical="https://urbandrop.io/privacy-policy"
			/>
			{/* Hero Section */}
			<section className="relative pt-32 pb-20 overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-[#183A37]/10 to-[#5CB35E]/10"></div>
				<div className="relative container mx-auto px-6 text-center">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-5xl md:text-7xl font-black text-[#183A37] mb-6 leading-tight">
							{t('privacyPolicy.hero.title')} <span className="text-[#5CB35E]">{t('privacyPolicy.hero.highlight')}</span>
						</h1>
						<p className="text-xl md:text-2xl text-[#879EA4] mb-4 font-medium">
							{t('privacyPolicy.hero.subtitle')}
						</p>
						<p className="text-lg text-[#879EA4]">
							{t('privacyPolicy.hero.effectiveDate', { date: effectiveDate })}
						</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
			</section>

			<div className="container mx-auto px-6 pb-32">
				{/* Main Content */}
				<div className="max-w-4xl mx-auto space-y-8">
					<section id="who-we-are" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">1</span>
							{t('privacyPolicy.sections.whoWeAre.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							{t('privacyPolicy.sections.whoWeAre.content', { returnObjects: true }).map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
					</section>

					<section id="information-we-collect" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">2</span>
							{t('privacyPolicy.sections.infoCollect.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.infoCollect.intro')}</p>
							<h3 className="text-xl font-semibold text-[#183A37] mb-4 mt-6">2.1 {t('privacyPolicy.sections.infoCollect.direct.title')}</h3>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.infoCollect.direct.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<h3 className="text-xl font-semibold text-[#183A37] mb-4">2.2 {t('privacyPolicy.sections.infoCollect.automatic.title')}</h3>
							<p>{t('privacyPolicy.sections.infoCollect.automatic.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.infoCollect.automatic.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<h3 className="text-xl font-semibold text-[#183A37] mb-4">2.3 {t('privacyPolicy.sections.infoCollect.thirdParty.title')}</h3>
							<p>{t('privacyPolicy.sections.infoCollect.thirdParty.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.infoCollect.thirdParty.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					<section id="how-we-use-your-information" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">3</span>
							{t('privacyPolicy.sections.howWeUse.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.howWeUse.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.howWeUse.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<p>{t('privacyPolicy.sections.howWeUse.legalBasis.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.howWeUse.legalBasis.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					<section id="marketing-communications" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">4</span>
							{t('privacyPolicy.sections.marketing.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							{t('privacyPolicy.sections.marketing.content', { returnObjects: true }).map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.marketing.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<p>{t('privacyPolicy.sections.marketing.note')}</p>
						</div>
					</section>

					<section id="sharing-your-information" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">5</span>
							{t('privacyPolicy.sections.sharing.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.sharing.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.sharing.items', { returnObjects: true }).map((item, index) => (
									<li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
								))}
							</ul>
							<p>{t('privacyPolicy.sections.sharing.note')}</p>
						</div>
					</section>

					<section id="data-retention" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">6</span>
							{t('privacyPolicy.sections.retention.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.retention.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.retention.items', { returnObjects: true }).map((item, index) => (
									<li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
								))}
							</ul>
							<p>{t('privacyPolicy.sections.retention.note')}</p>
						</div>
					</section>

					<section id="data-security" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">7</span>
							{t('privacyPolicy.sections.security.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							{t('privacyPolicy.sections.security.content', { returnObjects: true }).map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.security.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
							<p>{t('privacyPolicy.sections.security.note')}</p>
						</div>
					</section>

					<section id="international-transfers" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">8</span>
							{t('privacyPolicy.sections.international.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.international.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.international.items', { returnObjects: true }).map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</section>

					<section id="your-rights" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">9</span>
							{t('privacyPolicy.sections.rights.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.rights.intro')}</p>
							<ul className="list-disc pl-6 mb-6 space-y-2">
								{t('privacyPolicy.sections.rights.items', { returnObjects: true }).map((item, index) => (
									<li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
								))}
							</ul>
							<p dangerouslySetInnerHTML={{ __html: t('privacyPolicy.sections.rights.contact') }}></p>
						</div>
					</section>

					<section id="cookies-and-tracking" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">10</span>
							{t('privacyPolicy.sections.cookies.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							{t('privacyPolicy.sections.cookies.content', { returnObjects: true }).map((paragraph, index) => (
								<p key={index}>{paragraph}</p>
							))}
						</div>
					</section>

					<section id="childrens-privacy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">11</span>
							{t('privacyPolicy.sections.children.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.children.content')}</p>
						</div>
					</section>

					<section id="links-to-other-sites" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">12</span>
							{t('privacyPolicy.sections.links.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.links.content')}</p>
						</div>
					</section>

					<section id="updates-to-this-policy" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">13</span>
							{t('privacyPolicy.sections.updates.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.updates.content')}</p>
						</div>
					</section>

					<section id="contact-us" className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
						<h2 className="text-3xl font-bold text-[#183A37] mb-6 flex items-center">
							<span className="w-8 h-8 bg-[#5CB35E] text-white rounded-full flex items-center justify-center text-sm font-bold mr-4">14</span>
							{t('privacyPolicy.sections.contact.title')}
						</h2>
						<div className="prose prose-lg max-w-none text-gray-700">
							<p>{t('privacyPolicy.sections.contact.intro')}</p>
							<div className="bg-gray-50 p-6 rounded-lg mt-4">
								<p className="font-semibold text-[#183A37]">{t('privacyPolicy.sections.contact.companyName')}</p>
								<p dangerouslySetInnerHTML={{ __html: t('privacyPolicy.sections.contact.email') }}></p>
								<p className="mt-4">{t('privacyPolicy.sections.contact.ico')}</p>
								<p dangerouslySetInnerHTML={{ __html: t('privacyPolicy.sections.contact.website') }}></p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
};

export default PrivacyPolicy;
