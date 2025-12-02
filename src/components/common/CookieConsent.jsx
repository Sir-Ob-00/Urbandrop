import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Shield, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CookieConsent = () => {
    const { t } = useTranslation();
    const [showBanner, setShowBanner] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [preferences, setPreferences] = useState({
        essential: true,
        performance: false,
        functional: false,
        advertising: false
    });

    useEffect(() => {
        // Check if user has already set preferences
        const savedPreferences = localStorage.getItem('urbandrop_cookie_consent');
        if (!savedPreferences) {
            setShowBanner(true);
        } else {
            setPreferences(JSON.parse(savedPreferences));
        }

        // Listen for custom event to open preferences
        const handleOpenPreferences = () => setShowModal(true);
        window.addEventListener('openCookiePreferences', handleOpenPreferences);

        return () => window.removeEventListener('openCookiePreferences', handleOpenPreferences);
    }, []);

    const savePreferences = (newPreferences) => {
        localStorage.setItem('urbandrop_cookie_consent', JSON.stringify(newPreferences));
        setPreferences(newPreferences);
        setShowBanner(false);
        setShowModal(false);
    };

    const handleAcceptAll = () => {
        savePreferences({
            essential: true,
            performance: true,
            functional: true,
            advertising: true
        });
    };

    const handleRejectNonEssential = () => {
        savePreferences({
            essential: true,
            performance: false,
            functional: false,
            advertising: false
        });
    };

    const handleSavePreferences = () => {
        savePreferences(preferences);
    };

    const togglePreference = (key) => {
        if (key === 'essential') return;
        setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <>
            {/* Cookie Banner */}
            <AnimatePresence>
                {showBanner && !showModal && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-6 md:p-8"
                    >
                        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="lg:w-2/3">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-600" />
                                    {t('cookieConsent.banner.title')}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {t('cookieConsent.banner.description')}
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm whitespace-nowrap"
                                >
                                    {t('cookieConsent.banner.acceptAll')}
                                </button>
                                <button
                                    onClick={handleRejectNonEssential}
                                    className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
                                >
                                    {t('cookieConsent.banner.rejectNonEssential')}
                                </button>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm whitespace-nowrap"
                                >
                                    {t('cookieConsent.banner.managePreferences')}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Preferences Modal */}
            <AnimatePresence>
                {showModal && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowModal(false)}
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        ></motion.div>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">{t('cookieConsent.modal.title')}</h2>
                                    <p className="text-sm text-gray-500 mt-1">{t('cookieConsent.modal.description')}</p>
                                </div>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-gray-500" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 overflow-y-auto flex-grow space-y-6">
                                {/* Quick Actions */}
                                <div className="flex flex-col sm:flex-row gap-3 mb-8">
                                    <button
                                        onClick={handleAcceptAll}
                                        className="flex-1 py-2 bg-green-50 text-green-700 border border-green-200 rounded-lg font-medium hover:bg-green-100 transition-colors text-sm"
                                    >
                                        {t('cookieConsent.modal.quickActions.acceptAll')}
                                    </button>
                                    <button
                                        onClick={handleRejectNonEssential}
                                        className="flex-1 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
                                    >
                                        {t('cookieConsent.modal.quickActions.rejectNonEssential')}
                                    </button>
                                </div>

                                {/* Categories */}
                                <div className="space-y-4">
                                    <CookieCategory
                                        title={t('cookieConsent.modal.categories.essential.title')}
                                        description={
                                            <>
                                                <p>{t('cookieConsent.modal.categories.essential.description')}</p>
                                                <p className="mt-3 text-gray-700">{t('cookieConsent.modal.categories.essential.examples')}</p>
                                            </>
                                        }
                                        isActive={preferences.essential}
                                        isLocked={true}
                                        t={t}
                                    />
                                    <CookieCategory
                                        title={t('cookieConsent.modal.categories.performance.title')}
                                        description={
                                            <>
                                                <p>{t('cookieConsent.modal.categories.performance.description')}</p>
                                                <p className="mt-3 text-gray-700">{t('cookieConsent.modal.categories.performance.examples')}</p>
                                            </>
                                        }
                                        isActive={preferences.performance}
                                        onToggle={() => togglePreference('performance')}
                                        t={t}
                                    />
                                    <CookieCategory
                                        title={t('cookieConsent.modal.categories.functional.title')}
                                        description={
                                            <>
                                                <p>{t('cookieConsent.modal.categories.functional.description')}</p>
                                                <p className="mt-3 text-gray-700">{t('cookieConsent.modal.categories.functional.examples')}</p>
                                            </>
                                        }
                                        isActive={preferences.functional}
                                        onToggle={() => togglePreference('functional')}
                                        t={t}
                                    />
                                    <CookieCategory
                                        title={t('cookieConsent.modal.categories.advertising.title')}
                                        description={
                                            <>
                                                <p>{t('cookieConsent.modal.categories.advertising.description')}</p>
                                                <p className="mt-3 text-gray-700">{t('cookieConsent.modal.categories.advertising.examples')}</p>
                                            </>
                                        }
                                        isActive={preferences.advertising}
                                        onToggle={() => togglePreference('advertising')}
                                        t={t}
                                    />
                                </div>

                                {/* Bottom Section */}
                                <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
                                    <p>
                                        {t('cookieConsent.modal.footer.text1')}
                                    </p>
                                    <p className="mt-2">
                                        {t('cookieConsent.modal.footer.text2')} <a href="/cookies-policy" className="text-green-600 hover:underline font-medium">{t('cookieConsent.modal.footer.cookiePolicy')}</a> {t('cookieConsent.modal.footer.and')} <a href="/privacy-policy" className="text-green-600 hover:underline font-medium">{t('cookieConsent.modal.footer.privacyPolicy')}</a>.
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                                <button
                                    onClick={handleSavePreferences}
                                    className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                >
                                    {t('cookieConsent.modal.footer.savePreferences')}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

const CookieCategory = ({ title, description, isActive, isLocked, onToggle, t }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden">
            <div className="p-4 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3 flex-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                    <button className="text-gray-400 hover:text-gray-600">
                        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    <div>
                        <h4 className="font-semibold text-gray-900">{title}</h4>
                        <p className="text-xs text-gray-500 mt-0.5">{isLocked ? t('cookieConsent.modal.status.alwaysActive') : (isActive ? t('cookieConsent.modal.status.active') : t('cookieConsent.modal.status.inactive'))}</p>
                    </div>
                </div>

                <div className="ml-4">
                    {isLocked ? (
                        <div className="text-green-600 flex items-center gap-1 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                            <Check className="w-4 h-4" /> {t('cookieConsent.modal.status.required')}
                        </div>
                    ) : (
                        <button
                            onClick={onToggle}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 ${isActive ? 'bg-green-600' : 'bg-gray-200'}`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isActive ? 'translate-x-6' : 'translate-x-1'}`}
                            />
                        </button>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-50 px-4 pb-4 pt-0"
                    >
                        <div className="pt-2 text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                            {description}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CookieConsent;
