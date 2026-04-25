import React from 'react';
import { useTranslation } from 'react-i18next';
import TermsSection from '../TermsSection';

const CustomerTerms = ({ icon }) => {
    const { t } = useTranslation();

    return (
        <TermsSection id="customers" title={t('termsConditions.sections.customerTerms.title')} icon={icon} colorTheme="accent2">
            <style>{`
                #customers {
                    scroll-behavior: smooth;
                }
                [id^="clause-"] {
                    scroll-margin-top: 2rem;
                }
            `}</style>
            <p className="text-gray-600 mb-6 text-h4">
                {t('termsConditions.sections.customerTerms.intro')}
            </p>

            {/* Header Info */}
            <div className="bg-accent2/10 p-6 rounded-xl border border-accent2/20 mb-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.customerTerms.effective')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.customerTerms.effectiveDate')}</span>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.customerTerms.version')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.customerTerms.versionNumber')}</span>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.customerTerms.jurisdiction')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.customerTerms.jurisdictionValue')}</span>
                    </div>
                    <div>
                        <span className="block font-bold text-gray-900 uppercase text-xs tracking-wider mb-1">{t('termsConditions.sections.customerTerms.governedBy')}</span>
                        <span className="text-gray-700">{t('termsConditions.sections.customerTerms.governedByValue')}</span>
                    </div>
                </div>
            </div>

            {/* Warning Banner */}
            <div className="border border-red-200 bg-red-50 p-6 rounded-xl my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <h4 className="text-lg font-bold text-red-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.customerTerms.readBeforeAccept.title')}</h4>
                <p className="text-sm text-red-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.readBeforeAccept.content') }}></p>
            </div>

            {/* Contents */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 my-6">
                <h4 className="font-bold text-gray-900 mb-4">{t('termsConditions.sections.customerTerms.contents.title')}</h4>
                <p className="text-sm text-gray-600 mb-3">{t('termsConditions.sections.customerTerms.contents.twentyTwoClauses')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {Array.from({ length: 22 }, (_, i) => {
                        const clauseNum = String(i + 1).padStart(2, '0');
                        const key = `clause${clauseNum}`;
                        return (
                            <div key={i} className="flex items-start">
                                <a href={`#clause-${clauseNum}`} className="text-accent2 font-bold mr-2 hover:underline hover:text-accent2/80 cursor-pointer transition-colors">
                                    {t(`termsConditions.sections.customerTerms.contents.${key}`)}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Clause 01 */}
            <h3 id="clause-01" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause01.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause01.subtitle')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause01.content1') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause01.content2') }}></p>

            <div className="bg-green-50 rounded-xl p-6 border border-green-100 my-6">
                <h4 className="font-bold text-gray-900 mb-2">{t('termsConditions.sections.customerTerms.clause01.whatUrbandropDoes.title')}</h4>
                <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause01.whatUrbandropDoes.content') }}></p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 my-6">
                <h4 className="font-bold text-gray-900 mb-4">{t('termsConditions.sections.customerTerms.clause01.definedTerms')}</h4>
                <dl className="space-y-4 text-sm">
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.platform.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.platform.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.account.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.account.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.order.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.order.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.merchant.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.merchant.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.rider.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.rider.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.urbandropPlus.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.urbandropPlus.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.recipeContent.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.recipeContent.definition')}</dd>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <dt className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause01.terms.statutoryRights.term')}</dt>
                        <dd className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause01.terms.statutoryRights.definition')}</dd>
                    </div>
                </dl>
            </div>

            {/* Clause 02 */}
            <h3 id="clause-02" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause02.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause02.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause02.whoCanCreate.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause02.whoCanCreate.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause02.accurateInfo.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause02.accurateInfo.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause02.oneAccount.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause02.oneAccount.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause02.personalUse.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause02.personalUse.content') }}></p>

            {/* Clause 03 */}
            <h3 id="clause-03" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause03.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause03.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause03.whereWeDeliver.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause03.whereWeDeliver.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause03.whenWeDeliver.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause03.whenWeDeliver.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause03.stockAvailability.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause03.stockAvailability.content') }}></p>

            {/* Clause 04 */}
            <h3 id="clause-04" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause04.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause04.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause04.contractFormed.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause04.contractFormed.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause04.orderChanges.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause04.orderChanges.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause04.minimumOrder.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause04.minimumOrder.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause04.substitutions.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause04.substitutions.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause04.rightToRefuse.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause04.rightToRefuse.content') }}></p>

            {/* Clause 05 */}
            <h3 id="clause-05" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause05.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause05.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause05.productPrices.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause05.productPrices.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause05.fees.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.customerTerms.clause05.fees.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause05.fees.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause05.surgePricing.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause05.surgePricing.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause05.payment.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause05.payment.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause05.preAuth.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause05.preAuth.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause05.receipts.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause05.receipts.content') }}></p>

            {/* Clause 06 */}
            <h3 id="clause-06" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause06.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause06.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause06.deliveryTime.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause06.deliveryTime.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause06.whereWeDeliver.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause06.whereWeDeliver.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause06.handover.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause06.handover.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause06.ifNoOneAvailable.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause06.ifNoOneAvailable.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause06.ifNoOneAvailable.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause06.leaveAtDoor.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause06.leaveAtDoor.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause06.riskOwnership.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause06.riskOwnership.content') }}></p>

            {/* Clause 07 */}
            <h3 id="clause-07" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause07.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause07.subtitle')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause07.intro') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause07.minimumAge.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause07.minimumAge.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause07.challenge25.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause07.challenge25.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause07.idFails.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause07.idFails.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause07.proxyPurchasing.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause07.proxyPurchasing.content') }}></p>

            {/* Clause 08 */}
            <h3 id="clause-08" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause08.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause08.subtitle')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause08.intro') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause08.resolutionMatrix.title')}</h4>
            <div className="overflow-x-auto mb-6">
                <table className="min-w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b border-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-semibold text-gray-900">{t('termsConditions.sections.customerTerms.clause08.resolutionMatrix.issue')}</th>
                            <th scope="col" className="px-6 py-3 font-semibold text-gray-900">{t('termsConditions.sections.customerTerms.clause08.resolutionMatrix.typicalResolution')}</th>
                            <th scope="col" className="px-6 py-3 font-semibold text-gray-900">{t('termsConditions.sections.customerTerms.clause08.resolutionMatrix.reportBy')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {t('termsConditions.sections.customerTerms.clause08.resolutionMatrix.rows', { returnObjects: true }).map((row, index) => (
                            <tr key={index} className="bg-white border-b border-gray-100">
                                <td className="px-6 py-4 font-medium text-gray-900">{row.issue}</td>
                                <td className="px-6 py-4">{row.resolution}</td>
                                <td className="px-6 py-4">{row.timeframe}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause08.howToReport.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause08.howToReport.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause08.whenRefundsIssued.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause08.whenRefundsIssued.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause08.whenWeDecline.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause08.whenWeDecline.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause08.whenWeDecline.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause08.whenWeDecline.note') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause08.statutoryRights.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause08.statutoryRights.content') }}></p>

            <div className="border border-red-200 bg-red-50 rounded-xl p-6 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                <h4 className="text-lg font-bold text-red-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.customerTerms.clause08.fraudulentClaims.title')}</h4>
                <p className="text-sm text-red-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause08.fraudulentClaims.content') }}></p>
            </div>

            {/* Clause 09 */}
            <h3 id="clause-09" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause09.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause09.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause09.beforeAcceptance.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause09.beforeAcceptance.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause09.afterAcceptance.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause09.afterAcceptance.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause09.afterAcceptance.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause09.afterAcceptance.note') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause09.rightToCancel.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause09.rightToCancel.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause09.cancellationByUs.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause09.cancellationByUs.content') }}></p>

            {/* Clause 10 */}
            <h3 id="clause-10" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause10.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause10.subtitle')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.intro') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause10.whatYouGet.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.customerTerms.clause10.whatYouGet.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause10.whatYouGet.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.whatYouGet.note') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause10.pricing.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.pricing.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause10.freeTrials.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.freeTrials.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause10.autoRenewal.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.autoRenewal.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause10.cancelling.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.cancelling.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause10.cancelling.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause10.changesToBenefits.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.changesToBenefits.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause10.terminationByUs.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause10.terminationByUs.content') }}></p>

            {/* Clause 11 */}
            <h3 id="clause-11" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause11.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause11.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause11.recipePersonalUse.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause11.recipePersonalUse.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause11.accuracyOfRecipes.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause11.accuracyOfRecipes.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause11.recipeToBasket.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause11.recipeToBasket.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause11.userContent.title')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.customerTerms.clause11.userContent.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause11.userContent.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause11.reviewsMerchants.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause11.reviewsMerchants.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause11.creatorContent.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause11.creatorContent.content') }}></p>

            {/* Clause 12 */}
            <h3 id="clause-12" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause12.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause12.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause12.allergenInfo.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause12.allergenInfo.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause12.alwaysCheckPackaging.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause12.alwaysCheckPackaging.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause12.crossContamination.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause12.crossContamination.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause12.temperatureFoodSafety.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause12.temperatureFoodSafety.content') }}></p>

            <div className="border border-orange-200 bg-orange-50 rounded-xl p-6 my-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
                <h4 className="text-lg font-bold text-orange-900 mb-2 uppercase tracking-wide">{t('termsConditions.sections.customerTerms.clause12.seriousAllergies.title')}</h4>
                <p className="text-sm text-orange-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause12.seriousAllergies.content') }}></p>
            </div>

            {/* Clause 13 */}
            <h3 id="clause-13" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause13.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause13.subtitle')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause13.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause13.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause13.note') }}></p>

            {/* Clause 14 */}
            <h3 id="clause-14" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause14.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause14.subtitle')}</h4>
            <p className="text-gray-700 mb-2">{t('termsConditions.sections.customerTerms.clause14.content')}</p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause14.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause14.note') }}></p>

            {/* Clause 15 */}
            <h3 id="clause-15" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause15.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause15.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause15.whatWeAreResponsible.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause15.whatWeAreResponsible.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause15.whatWeAreNotResponsible.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause15.whatWeAreNotResponsible.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause15.whatWeAreNotResponsible.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause15.liabilityWeDoNotExclude.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause15.liabilityWeDoNotExclude.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause15.liabilityWeDoNotExclude.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause15.capOnLiability.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause15.capOnLiability.content') }}></p>

            {/* Clause 16 */}
            <h3 id="clause-16" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause16.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause16.subtitle')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause16.content1') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause16.content2') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause16.content3') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause16.icoRegistration') }}></p>

            {/* Clause 17 */}
            <h3 id="clause-17" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause17.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause17.subtitle')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause17.content') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause17.merchantBrands') }}></p>

            {/* Clause 18 */}
            <h3 id="clause-18" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause18.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause18.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause18.raiseWithUs.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause18.raiseWithUs.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause18.escalation.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause18.escalation.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause18.alternativeDispute.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause18.alternativeDispute.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause18.rightToCourt.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause18.rightToCourt.content') }}></p>

            {/* Clause 19 */}
            <h3 id="clause-19" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause19.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause19.subtitle')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause19.content1') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause19.content2') }}></p>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause19.content3') }}></p>

            {/* Clause 20 */}
            <h3 id="clause-20" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause20.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause20.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause20.byYou.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause20.byYou.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause20.byUs.title')}</h4>
            <p className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause20.byUs.content') }}></p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                {t('termsConditions.sections.customerTerms.clause20.byUs.items', { returnObjects: true }).map((item, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                ))}
            </ul>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause20.byUs.note') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause20.effect.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause20.effect.content') }}></p>

            {/* Clause 21 */}
            <h3 id="clause-21" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause21.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause21.subtitle')}</h4>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.entireAgreement.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.entireAgreement.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.transferContract.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.transferContract.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.noWaiver.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.noWaiver.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.severability.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.severability.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.thirdParties.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.thirdParties.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.notices.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.notices.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.forceMajeure.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.forceMajeure.content') }}></p>

            <h4 className="text-gray-900 mt-6 mb-2 font-semibold">{t('termsConditions.sections.customerTerms.clause21.governingLaw.title')}</h4>
            <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause21.governingLaw.content') }}></p>

            {/* Clause 22 */}
            <h3 id="clause-22" className="text-accent2 mt-10 mb-3 text-xl font-bold">{t('termsConditions.sections.customerTerms.clause22.title')}</h3>
            <h4 className="text-gray-900 mb-4 font-semibold">{t('termsConditions.sections.customerTerms.clause22.subtitle')}</h4>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 my-6">
                <p className="text-gray-900 font-bold mb-1">{t('termsConditions.sections.customerTerms.clause22.companyName')}</p>
                <p className="text-gray-700 mb-2">{t('termsConditions.sections.customerTerms.clause22.companyNumber')}</p>
                <p className="text-gray-700 mb-4">{t('termsConditions.sections.customerTerms.clause22.icoRegistration')}</p>

                <div className="space-y-3 text-sm">
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause22.customerSupport')}</span>
                        <span className="text-gray-600 md:w-2/3" dangerouslySetInnerHTML={{ __html: t('termsConditions.sections.customerTerms.clause22.customerSupportEmail') }}></span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause22.complaints')}</span>
                        <span className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause22.complaintsEmail')}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause22.dataProtection')}</span>
                        <span className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause22.dpoEmail')}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause22.legalNotices')}</span>
                        <span className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause22.legalEmail')}</span>
                    </div>
                    <div className="flex flex-col md:flex-row pb-2 border-b border-gray-200 last:border-0 last:pb-0">
                        <span className="font-bold text-gray-900 md:w-1/3">{t('termsConditions.sections.customerTerms.clause22.website')}</span>
                        <span className="text-gray-600 md:w-2/3">{t('termsConditions.sections.customerTerms.clause22.websiteUrl')}</span>
                    </div>
                </div>
            </div>
        </TermsSection>
    );
};

export default CustomerTerms;
