import React from 'react';
import { useTranslation } from 'react-i18next';
import TermsSection from '../TermsSection';

const PromotionsTerms = ({ icon }) => {
    const { t } = useTranslation();

    return (
        <TermsSection id="promos" title={t('termsConditions.sections.promotionsTerms.title')} icon={icon} colorTheme="accent3">
            <p className="text-gray-600 mb-6 text-h4">
                {t('termsConditions.sections.promotionsTerms.intro')}
            </p>

            <ul className="space-y-4">
                <li className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                        <h4 className="font-bold text-gray-900">{t('termsConditions.sections.promotionsTerms.application.title')}</h4>
                        <p className="text-sm text-gray-600 mt-1">{t('termsConditions.sections.promotionsTerms.application.content')}</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                        <h4 className="font-bold text-gray-900">{t('termsConditions.sections.promotionsTerms.limitations.title')}</h4>
                        <p className="text-sm text-gray-600 mt-1">{t('termsConditions.sections.promotionsTerms.limitations.content')}</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                        <h4 className="font-bold text-gray-900">{t('termsConditions.sections.promotionsTerms.fairUsage.title')}</h4>
                        <p className="text-sm text-gray-600 mt-1">{t('termsConditions.sections.promotionsTerms.fairUsage.content')}</p>
                    </div>
                </li>
                <li className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                        <h4 className="font-bold text-gray-900">{t('termsConditions.sections.promotionsTerms.modification.title')}</h4>
                        <p className="text-sm text-gray-600 mt-1">{t('termsConditions.sections.promotionsTerms.modification.content')}</p>
                    </div>
                </li>
            </ul>
        </TermsSection>
    );
};

export default PromotionsTerms;
