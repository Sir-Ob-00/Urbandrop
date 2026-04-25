import React from 'react';
import { useTranslation } from 'react-i18next';
import TermsSection from '../TermsSection';

const GeneralTerms = ({ icon }) => {
    const { t } = useTranslation();

    return (
        <TermsSection id="general" title="General Terms" icon={icon} colorTheme="primary">
            <p className="text-gray-600 mb-6 text-h4">
                {t('termsConditions.intro.title')}
            </p>
            <p>{t('termsConditions.intro.p1')}</p>
            <p>{t('termsConditions.intro.p2')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.about.title')}</h3>
            {t('termsConditions.sections.about.content', { returnObjects: true }).map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.eligibility.title')}</h3>
            <p>{t('termsConditions.sections.eligibility.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.eligibility.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.account.title')}</h3>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.account.subsections.creation.title')}</h4>
            <p>{t('termsConditions.sections.account.subsections.creation.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.account.subsections.security.title')}</h4>
            <p>{t('termsConditions.sections.account.subsections.security.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.account.subsections.misuse.title')}</h4>
            <p>{t('termsConditions.sections.account.subsections.misuse.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.ordering.title')}</h3>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.ordering.subsections.placing.title')}</h4>
            <p>{t('termsConditions.sections.ordering.subsections.placing.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.ordering.subsections.confirmation.title')}</h4>
            <p>{t('termsConditions.sections.ordering.subsections.confirmation.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.ordering.subsections.payments.title')}</h4>
            <p>{t('termsConditions.sections.ordering.subsections.payments.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.ordering.subsections.pricing.title')}</h4>
            <p>{t('termsConditions.sections.ordering.subsections.pricing.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.delivery.title')}</h3>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.delivery.subsections.areas.title')}</h4>
            <p>{t('termsConditions.sections.delivery.subsections.areas.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.delivery.subsections.partners.title')}</h4>
            <p>{t('termsConditions.sections.delivery.subsections.partners.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.delivery.subsections.collection.title')}</h4>
            <p>{t('termsConditions.sections.delivery.subsections.collection.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.promotions.title')}</h3>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.promotions.subsections.platform.title')}</h4>
            <p>{t('termsConditions.sections.promotions.subsections.platform.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.promotions.subsections.merchant.title')}</h4>
            <p>{t('termsConditions.sections.promotions.subsections.merchant.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.promotions.subsections.misuse.title')}</h4>
            <p>{t('termsConditions.sections.promotions.subsections.misuse.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchant.title')}</h3>
            <p>{t('termsConditions.sections.merchant.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchant.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchant.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.conduct.title')}</h3>
            <p>{t('termsConditions.sections.conduct.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.conduct.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.conduct.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.cancellation.title')}</h3>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.cancellation.subsections.before.title')}</h4>
            <p>{t('termsConditions.sections.cancellation.subsections.before.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.cancellation.subsections.after.title')}</h4>
            <p>{t('termsConditions.sections.cancellation.subsections.after.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.cancellation.subsections.merchant.title')}</h4>
            <p>{t('termsConditions.sections.cancellation.subsections.merchant.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.cancellation.subsections.progress.title')}</h4>
            <p>{t('termsConditions.sections.cancellation.subsections.progress.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.cancellation.subsections.repeated.title')}</h4>
            <p>{t('termsConditions.sections.cancellation.subsections.repeated.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.returns.title')}</h3>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.returns.subsections.general.title')}</h4>
            <p>{t('termsConditions.sections.returns.subsections.general.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.returns.subsections.perishable.title')}</h4>
            <p>{t('termsConditions.sections.returns.subsections.perishable.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.returns.subsections.perishable.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.returns.subsections.perishable.note')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.returns.subsections.nonPerishable.title')}</h4>
            <p>{t('termsConditions.sections.returns.subsections.nonPerishable.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.returns.subsections.nonPerishable.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.returns.subsections.process.title')}</h4>
            <p>{t('termsConditions.sections.returns.subsections.process.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.returns.subsections.merchantResp.title')}</h4>
            <p>{t('termsConditions.sections.returns.subsections.merchantResp.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.returns.subsections.delivery.title')}</h4>
            <p>{t('termsConditions.sections.returns.subsections.delivery.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.returns.subsections.abuse.title')}</h4>
            <p>{t('termsConditions.sections.returns.subsections.abuse.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.ip.title')}</h3>
            <p>{t('termsConditions.sections.ip.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.availability.title')}</h3>
            <p>{t('termsConditions.sections.availability.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.privacy.title')}</h3>
            <p>{t('termsConditions.sections.privacy.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.liability.title')}</h3>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.liability.subsections.role.title')}</h4>
            <p>{t('termsConditions.sections.liability.subsections.role.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.liability.subsections.role.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.liability.subsections.indirect.title')}</h4>
            <p>{t('termsConditions.sections.liability.subsections.indirect.content')}</p>
            <h4 className="text-gray-900 mt-6 mb-2">{t('termsConditions.sections.liability.subsections.maximum.title')}</h4>
            <p>{t('termsConditions.sections.liability.subsections.maximum.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.termination.title')}</h3>
            <p>{t('termsConditions.sections.termination.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.termination.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.termination.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.links.title')}</h3>
            <p>{t('termsConditions.sections.links.content')}</p>
        </TermsSection>
    );
};

export default GeneralTerms;
