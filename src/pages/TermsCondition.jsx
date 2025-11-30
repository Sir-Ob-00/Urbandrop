import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsCondition = () => {
	const { t, i18n } = useTranslation();
	const lastUpdated = new Date().toLocaleDateString(i18n.language, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	return (
		<main className="bg-white pt-32 pb-16">
			<div className="container mx-auto px-6">
				<div className="text-center mb-16">
					<h1 className="text-4xl md:text-5xl font-extrabold text-dark">{t('termsConditions.title')}</h1>
					<p className="text-[#879EA4] mt-2">{t('termsConditions.lastUpdated', { date: lastUpdated })}</p>
				</div>

				<div className="max-w-4xl mx-auto prose prose-lg prose text-gray-700">
					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.intro.title')}</h2>
					<p>{t('termsConditions.intro.p1')}</p>
					<p>{t('termsConditions.intro.p2')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.about.title')}</h2>
					{t('termsConditions.sections.about.content', { returnObjects: true }).map((paragraph, index) => (
						<p key={index}>{paragraph}</p>
					))}

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.eligibility.title')}</h2>
					<p>{t('termsConditions.sections.eligibility.content')}</p>
					<ul className="list-disc pl-6 mb-4">
						{t('termsConditions.sections.eligibility.items', { returnObjects: true }).map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.account.title')}</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.account.subsections.creation.title')}</h3>
					<p>{t('termsConditions.sections.account.subsections.creation.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.account.subsections.security.title')}</h3>
					<p>{t('termsConditions.sections.account.subsections.security.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.account.subsections.misuse.title')}</h3>
					<p>{t('termsConditions.sections.account.subsections.misuse.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.ordering.title')}</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.ordering.subsections.placing.title')}</h3>
					<p>{t('termsConditions.sections.ordering.subsections.placing.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.ordering.subsections.confirmation.title')}</h3>
					<p>{t('termsConditions.sections.ordering.subsections.confirmation.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.ordering.subsections.payments.title')}</h3>
					<p>{t('termsConditions.sections.ordering.subsections.payments.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.ordering.subsections.pricing.title')}</h3>
					<p>{t('termsConditions.sections.ordering.subsections.pricing.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.delivery.title')}</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.delivery.subsections.areas.title')}</h3>
					<p>{t('termsConditions.sections.delivery.subsections.areas.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.delivery.subsections.partners.title')}</h3>
					<p>{t('termsConditions.sections.delivery.subsections.partners.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.delivery.subsections.collection.title')}</h3>
					<p>{t('termsConditions.sections.delivery.subsections.collection.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.promotions.title')}</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.promotions.subsections.platform.title')}</h3>
					<p>{t('termsConditions.sections.promotions.subsections.platform.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.promotions.subsections.merchant.title')}</h3>
					<p>{t('termsConditions.sections.promotions.subsections.merchant.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.promotions.subsections.misuse.title')}</h3>
					<p>{t('termsConditions.sections.promotions.subsections.misuse.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.merchant.title')}</h2>
					<p>{t('termsConditions.sections.merchant.content')}</p>
					<ul className="list-disc pl-6 mb-4">
						{t('termsConditions.sections.merchant.items', { returnObjects: true }).map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<p>{t('termsConditions.sections.merchant.note')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.conduct.title')}</h2>
					<p>{t('termsConditions.sections.conduct.content')}</p>
					<ul className="list-disc pl-6 mb-4">
						{t('termsConditions.sections.conduct.items', { returnObjects: true }).map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<p>{t('termsConditions.sections.conduct.note')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.cancellation.title')}</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.cancellation.subsections.before.title')}</h3>
					<p>{t('termsConditions.sections.cancellation.subsections.before.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.cancellation.subsections.after.title')}</h3>
					<p>{t('termsConditions.sections.cancellation.subsections.after.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.cancellation.subsections.merchant.title')}</h3>
					<p>{t('termsConditions.sections.cancellation.subsections.merchant.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.cancellation.subsections.progress.title')}</h3>
					<p>{t('termsConditions.sections.cancellation.subsections.progress.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.cancellation.subsections.repeated.title')}</h3>
					<p>{t('termsConditions.sections.cancellation.subsections.repeated.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.returns.title')}</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.returns.subsections.general.title')}</h3>
					<p>{t('termsConditions.sections.returns.subsections.general.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.returns.subsections.perishable.title')}</h3>
					<p>{t('termsConditions.sections.returns.subsections.perishable.content')}</p>
					<ul className="list-disc pl-6 mb-4">
						{t('termsConditions.sections.returns.subsections.perishable.items', { returnObjects: true }).map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<p>{t('termsConditions.sections.returns.subsections.perishable.note')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.returns.subsections.nonPerishable.title')}</h3>
					<p>{t('termsConditions.sections.returns.subsections.nonPerishable.content')}</p>
					<ul className="list-disc pl-6 mb-4">
						{t('termsConditions.sections.returns.subsections.nonPerishable.items', { returnObjects: true }).map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.returns.subsections.process.title')}</h3>
					<p>{t('termsConditions.sections.returns.subsections.process.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.returns.subsections.merchantResp.title')}</h3>
					<p>{t('termsConditions.sections.returns.subsections.merchantResp.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.returns.subsections.delivery.title')}</h3>
					<p>{t('termsConditions.sections.returns.subsections.delivery.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.returns.subsections.abuse.title')}</h3>
					<p>{t('termsConditions.sections.returns.subsections.abuse.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.ip.title')}</h2>
					<p>{t('termsConditions.sections.ip.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.availability.title')}</h2>
					<p>{t('termsConditions.sections.availability.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.privacy.title')}</h2>
					<p>{t('termsConditions.sections.privacy.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.liability.title')}</h2>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.liability.subsections.role.title')}</h3>
					<p>{t('termsConditions.sections.liability.subsections.role.content')}</p>
					<ul className="list-disc pl-6 mb-4">
						{t('termsConditions.sections.liability.subsections.role.items', { returnObjects: true }).map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.liability.subsections.indirect.title')}</h3>
					<p>{t('termsConditions.sections.liability.subsections.indirect.content')}</p>
					<h3 className="text-xl font-semibold text-dark mb-2">{t('termsConditions.sections.liability.subsections.maximum.title')}</h3>
					<p>{t('termsConditions.sections.liability.subsections.maximum.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.termination.title')}</h2>
					<p>{t('termsConditions.sections.termination.content')}</p>
					<ul className="list-disc pl-6 mb-4">
						{t('termsConditions.sections.termination.items', { returnObjects: true }).map((item, index) => (
							<li key={index}>{item}</li>
						))}
					</ul>
					<p>{t('termsConditions.sections.termination.note')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.links.title')}</h2>
					<p>{t('termsConditions.sections.links.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.changes.title')}</h2>
					<p>{t('termsConditions.sections.changes.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.governing.title')}</h2>
					<p>{t('termsConditions.sections.governing.content')}</p>

					<hr className="my-8" />

					<h2 className="text-2xl font-bold text-dark mb-3">{t('termsConditions.sections.contact.title')}</h2>
					<p>{t('termsConditions.sections.contact.content')}</p>
					<p><strong>{t('termsConditions.sections.contact.companyName')}</strong><br />
						<span dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.contact.email') }}></span></p>
				</div>
			</div>
		</main>
	);
};

export default TermsCondition;
