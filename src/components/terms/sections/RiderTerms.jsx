import React from 'react';
import { useTranslation } from 'react-i18next';
import TermsSection from '../TermsSection';

const RiderTerms = ({ icon }) => {
    const { t } = useTranslation();

    return (
        <TermsSection id="riders" title={t('termsConditions.sections.riderTerms.title')} icon={icon} colorTheme="secondary">
            <style>{`
                #riders {
                    scroll-behavior: smooth;
                }
                [id^="rider-clause-"] {
                    scroll-margin-top: 2rem;
                }
            `}</style>
            <p className="text-gray-600 mb-6 text-h4">
                {t('termsConditions.sections.riderTerms.intro')}
            </p>

            {/* Header Info */}
            <div className="bg-secondary/10 p-6 rounded-xl border border-secondary/20 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.riderTerms.effective')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.riderTerms.effectiveDate')}</span>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.riderTerms.version')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.riderTerms.versionNumber')}</span>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.riderTerms.jurisdiction')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.riderTerms.jurisdictionValue')}</span>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.riderTerms.governedBy')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.riderTerms.governedByValue')}</span>
                    </div>
                </div>
            </div>

            {/* Warning Banner */}
            <div className="border border-red-200 bg-red-50 p-6 rounded-xl my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <h4 className="text-lg font-bold text-red-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.riderTerms.readBeforeAccept.title')}</h4>
                <p className="text-sm text-red-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.readBeforeAccept.content') }}></p>
            </div>

            {/* Contents */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 my-6">
                <h4 className="font-bold text-gray-900 mb-4">{t('termsConditions.sections.riderTerms.contents.title')}</h4>
                <p className="text-sm text-gray-600 mb-3">{t('termsConditions.sections.riderTerms.contents.twentyOneClauses')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {Array.from({ length: 21 }, (_, i) => {
                        const clauseNum = String(i + 1).padStart(2, '0');
                        const key = `clause${clauseNum}`;
                        return (
                            <div key={i} className="flex items-start">
                                <a href={`#rider-clause-${clauseNum}`} className="text-green-900 font-bold mr-2 hover:underline hover:text-green-900/80 cursor-pointer transition-colors">
                                    {t(`termsConditions.sections.riderTerms.contents.${key}`)}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>

            <h3 id="rider-clause-01" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.parties.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.parties.content') }}></p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 my-6">
                <h4 className="font-bold text-gray-900 mb-4">{t('termsConditions.sections.riderTerms.parties.definedTerms')}</h4>
                <dl className="space-y-4 text-sm">
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.platform.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.platform.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.riderAccount.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.riderAccount.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.delivery.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.delivery.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.fleetPartner.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.fleetPartner.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.directRider.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.directRider.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.fleetRider.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.fleetRider.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.customer.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.customer.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.merchant.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.merchant.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.parties.terms.personalData.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.parties.terms.personalData.definition')}</dd>
                    </div>
                </dl>
            </div>

            <h3 id="rider-clause-02" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.relationship.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.relationship.content') }}></p>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.relationship.selfEmployed.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.relationship.selfEmployed.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.relationship.independence.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.relationship.independence.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.relationship.independence.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.relationship.fleetRiders.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.relationship.fleetRiders.content') }}></p>

            <div className="border border-secondary/20 bg-secondary/5 rounded-xl p-6 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.riderTerms.relationship.plainEnglish.title')}</h4>
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.relationship.plainEnglish.content') }}></p>
            </div>

            <h3 id="rider-clause-03" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.minimumEligibility.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.minimumEligibility.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.eligibilityOnboarding.minimumEligibility.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.documents.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.documents.content')}</p>
            <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.eligibilityOnboarding.documents.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ol>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.dbs.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.eligibilityOnboarding.dbs.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.identityVerification.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.eligibilityOnboarding.identityVerification.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.eligibilityOnboarding.falseInfo.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.eligibilityOnboarding.falseInfo.content') }}></p>

            <h3 id="rider-clause-04" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.rightToWork.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.rightToWork.rightToWork.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.rightToWork.rightToWork.content1') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.rightToWork.rightToWork.content2') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.rightToWork.substitution.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.rightToWork.substitution.content') }}></p>
            <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.rightToWork.substitution.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ol>

            <div className="border border-red-200 bg-red-50 rounded-xl p-6 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <h4 className="text-lg font-bold text-red-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.riderTerms.rightToWork.accountRental.title')}</h4>
                <p className="text-sm text-red-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.rightToWork.accountRental.content') }}></p>
            </div>

            <h3 id="rider-clause-05" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.vehicle.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.vehicle.standards.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.vehicle.standards.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.vehicle.standards.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.vehicle.insurance.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.vehicle.insurance.content1') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.vehicle.insurance.content2') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.vehicle.insurance.content3') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.vehicle.equipment.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.vehicle.equipment.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.vehicle.equipment.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.vehicle.brandedEquipment.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.vehicle.brandedEquipment.content') }}></p>

            <h3 id="rider-clause-06" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.foodSafety.title')}</h3>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.foodSafety.content') }}></p>
            <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.foodSafety.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ol>

            <div className="border border-orange-200 bg-orange-50 rounded-xl p-6 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                <h4 className="text-lg font-bold text-orange-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.riderTerms.foodSafety.allergenDuty.title')}</h4>
                <p className="text-sm text-orange-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.foodSafety.allergenDuty.content') }}></p>
            </div>

            <h3 id="rider-clause-07" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.performingDeliveries.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performingDeliveries.acceptance.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.performingDeliveries.acceptance.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performingDeliveries.collection.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.performingDeliveries.collection.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performingDeliveries.transit.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.performingDeliveries.transit.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performingDeliveries.handover.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.performingDeliveries.handover.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.performingDeliveries.handover.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performingDeliveries.prohibited.title')}</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.performingDeliveries.prohibited.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h3 id="rider-clause-08" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.fees.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.fees.deliveryFees.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.fees.deliveryFees.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.fees.tips.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.fees.tips.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.fees.settlement.title')}</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.fees.settlement.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.fees.deductions.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.fees.deductions.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.fees.deductions.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.fees.deductions.note') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.fees.vat.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.fees.vat.content') }}></p>

            <h3 id="rider-clause-09" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.tax.title')}</h3>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.tax.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.tax.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.tax.content2') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.tax.content3') }}></p>

            <div className="border border-blue-200 bg-blue-50 rounded-xl p-6 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500"></div>
                <h4 className="text-lg font-bold text-blue-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.riderTerms.notTaxAdvice.title')}</h4>
                <p className="text-sm text-blue-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.notTaxAdvice.content') }}></p>
            </div>

            <h3 id="rider-clause-10" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.performance.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performance.ratings.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.performance.ratings.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performance.metrics.title')}</h4>
            <p className="text-gray-700 mb-4">{t('termsConditions.sections.riderTerms.performance.metrics.content')}</p>
            <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-semibold text-gray-900">{t('termsConditions.sections.riderTerms.performance.metrics.table.metric')}</th>
                            <th scope="col" className="px-6 py-3 font-semibold text-gray-900">{t('termsConditions.sections.riderTerms.performance.metrics.table.description')}</th>
                            <th scope="col" className="px-6 py-3 font-semibold text-gray-900">{t('termsConditions.sections.riderTerms.performance.metrics.table.threshold')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b border-gray-100">
                            <td className="px-6 py-4 font-medium text-gray-900">{t('termsConditions.sections.riderTerms.performance.metrics.table.completionRate')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.completionDesc')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.completionThreshold')}</td>
                        </tr>
                        <tr className="bg-white border-b border-gray-100">
                            <td className="px-6 py-4 font-medium text-gray-900">{t('termsConditions.sections.riderTerms.performance.metrics.table.onTimeRate')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.onTimeDesc')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.onTimeThreshold')}</td>
                        </tr>
                        <tr className="bg-white border-b border-gray-100">
                            <td className="px-6 py-4 font-medium text-gray-900">{t('termsConditions.sections.riderTerms.performance.metrics.table.customerSatisfaction')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.satisfactionDesc')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.satisfactionThreshold')}</td>
                        </tr>
                        <tr className="bg-white">
                            <td className="px-6 py-4 font-medium text-gray-900">{t('termsConditions.sections.riderTerms.performance.metrics.table.escalationRate')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.escalationDesc')}</td>
                            <td className="px-6 py-4">{t('termsConditions.sections.riderTerms.performance.metrics.table.escalationThreshold')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performance.howWeUse.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.performance.howWeUse.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.performance.whatWeDontDo.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.performance.whatWeDontDo.content') }}></p>

            <h3 id="rider-clause-11" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.suspension.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.suspension.temporary.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.suspension.temporary.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.suspension.temporary.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.suspension.temporary.note') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.suspension.permanent.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.suspension.permanent.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.suspension.permanent.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.suspension.fairProcess.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.suspension.fairProcess.content') }}></p>

            <h3 id="rider-clause-12" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.accidents.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.accidents.reporting.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.accidents.reporting.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.accidents.reporting.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.accidents.liability.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.accidents.liability.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.accidents.ourLiability.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.accidents.ourLiability.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.accidents.liabilityExclusions.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.accidents.liabilityExclusions.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.accidents.liabilityExclusions.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.accidents.emergency.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.accidents.emergency.content') }}></p>

            <h3 id="rider-clause-13" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.dataProtection.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.dataProtection.roles.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.dataProtection.roles.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.dataProtection.obligations.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.dataProtection.obligations.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.dataProtection.obligations.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.dataProtection.howWeUse.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.dataProtection.howWeUse.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.dataProtection.rights.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.dataProtection.rights.content') }}></p>

            <h3 id="rider-clause-14" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.ip.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.ip.content') }}></p>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.ip.items')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.ip.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h3 id="rider-clause-15" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.confidentiality.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.confidentiality.content1') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.confidentiality.content2') }}></p>

            <h3 id="rider-clause-16" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.health.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.health.content') }}></p>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.health.responsibilities.title')}</h4>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.health.responsibilities.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.health.wellbeing.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.riderTerms.health.wellbeing.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.riderTerms.health.wellbeing.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.health.equality.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.health.equality.content') }}></p>

            <h3 id="rider-clause-17" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.complaints.title')}</h3>
            
            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.complaints.raise.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.complaints.raise.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.complaints.escalation.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.complaints.escalation.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.riderTerms.complaints.independentRedress.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.complaints.independentRedress.content') }}></p>

            <h3 id="rider-clause-18" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.changes.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.changes.content') }}></p>

            <h3 id="rider-clause-19" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.contact.title')}</h3>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 my-6">
                <p className="text-gray-900 font-bold mb-1">{t('termsConditions.sections.riderTerms.contact.companyName')}</p>
                <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.contact.content') }}></p>

                <div className="space-y-3 text-sm">
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.contact.riderSupport')}</span>
                        <span className="text-gray-600 md:w-2/3" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.contact.email') }}></span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.contact.appeals')}</span>
                        <span className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.contact.appealsEmail')}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.contact.dataProtection')}</span>
                        <span className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.contact.dpoEmail')}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.riderTerms.contact.legalNotices')}</span>
                        <span className="text-gray-600 md:w-2/3">{t('termsConditions.sections.riderTerms.contact.legalEmail')}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold md:w-1/3 text-red-600">{t('termsConditions.sections.riderTerms.contact.emergencyLabel')}</span>
                        <span className="text-gray-600 md:w-2/3 font-medium" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.contact.emergency') }}></span>
                    </div>
                </div>
            </div>

            <h3 id="rider-clause-20" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.governingLaw.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.governingLaw.content') }}></p>

            <h3 id="rider-clause-21" className="text-green-900 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.riderTerms.entireAgreement.title')}</h3>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.riderTerms.entireAgreement.content') }}></p>
        </TermsSection>
    );
};

export default RiderTerms;
