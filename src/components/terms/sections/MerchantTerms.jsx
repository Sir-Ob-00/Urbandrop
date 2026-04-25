import React from 'react';
import { useTranslation } from 'react-i18next';
import TermsSection from '../TermsSection';

const MerchantTerms = ({ icon }) => {
    const { t } = useTranslation();

    return (
        <TermsSection id="merchants" title={t('termsConditions.sections.merchantTerms.title')} icon={icon} colorTheme="accent1">
            <p className="text-gray-600 mb-6 text-h4">
                {t('termsConditions.sections.merchantTerms.intro')}
            </p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.roleOfUrbanDrop.title')}</h3>
            <p>
                {t('termsConditions.sections.merchantTerms.roleOfUrbanDrop.content')}
            </p>
            <p>{t('termsConditions.sections.merchantTerms.roleOfUrbanDrop.p2')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.eligibility.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.eligibility.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.eligibility.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.eligibility.note')}</p>
            <p className="mt-4">{t('termsConditions.sections.merchantTerms.eligibility.acceptance')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.obligations.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.obligations.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.obligations.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.obligations.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.orders.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.orders.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.orders.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.orders.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.pricing.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.pricing.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.pricing.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.payments.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.payments.content1')}</p>
            <p className="mt-4">{t('termsConditions.sections.merchantTerms.payments.content2')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.payments.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.payments.settlement')}</p>
            <p className="mt-4 font-semibold text-gray-900">{t('termsConditions.sections.merchantTerms.payments.stripeTitle')}</p>
            <p>{t('termsConditions.sections.merchantTerms.payments.stripeContent')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.refunds.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.refunds.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.refunds.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.refunds.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.foodSafety.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.foodSafety.content1')}</p>
            <p className="mt-4">{t('termsConditions.sections.merchantTerms.foodSafety.content2')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.foodSafety.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.foodSafety.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.products.title')}</h3>
            <p className="font-semibold text-gray-900 mb-2">{t('termsConditions.sections.merchantTerms.products.permittedTitle')}</p>
            <p>{t('termsConditions.sections.merchantTerms.products.permittedContent')}</p>
            <p className="font-semibold text-gray-900 mb-2 mt-4">{t('termsConditions.sections.merchantTerms.products.prohibitedTitle')}</p>
            <p>{t('termsConditions.sections.merchantTerms.products.prohibitedContent')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.products.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p className="text-red-600 font-semibold">{t('termsConditions.sections.merchantTerms.products.warning')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.delivery.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.delivery.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.delivery.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.delivery.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.insurance.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.insurance.content1')}</p>
            <p className="mt-4">{t('termsConditions.sections.merchantTerms.insurance.content2')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.insurance.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.insurance.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.conduct.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.conduct.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.conduct.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.conduct.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.suspension.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.suspension.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.suspension.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.suspension.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.liability.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.liability.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600">
                {t('termsConditions.sections.merchantTerms.liability.items', { returnObjects: true }).map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <p>{t('termsConditions.sections.merchantTerms.liability.note')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.dataProtection.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.dataProtection.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.amendments.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.amendments.content')}</p>

            <h3 className="text-gray-900 mt-8 mb-3">{t('termsConditions.sections.merchantTerms.governingLaw.title')}</h3>
            <p>{t('termsConditions.sections.merchantTerms.governingLaw.content')}</p>
        </TermsSection>
    );
};

export default MerchantTerms;
