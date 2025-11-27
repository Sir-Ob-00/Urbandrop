import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronDown, ChevronUp, Shield, Check } from 'lucide-react';

const CookieConsent = () => {
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
                                    We value your privacy
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    We use cookies to improve your experience. UrbanDrop uses essential cookies to make our site work, and optional cookies to help us understand how you use it, personalize content, and show you relevant offers. You can choose to accept all cookies, reject non-essential ones, or manage your preferences at any time.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors text-sm whitespace-nowrap"
                                >
                                    Accept All Cookies
                                </button>
                                <button
                                    onClick={handleRejectNonEssential}
                                    className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm whitespace-nowrap"
                                >
                                    Reject Non-Essential
                                </button>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm whitespace-nowrap"
                                >
                                    Manage Preferences
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
                                    <h2 className="text-xl font-bold text-gray-900">Cookie Preferences</h2>
                                    <p className="text-sm text-gray-500 mt-1">Manage how we use cookies on this site.</p>
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
                                        Accept All
                                    </button>
                                    <button
                                        onClick={handleRejectNonEssential}
                                        className="flex-1 py-2 bg-gray-50 text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm"
                                    >
                                        Reject Non-Essential
                                    </button>
                                </div>

                                {/* Categories */}
                                <div className="space-y-4">
                                    <CookieCategory
                                        title="Essential Cookies"
                                        description={
                                            <>
                                                <p>These cookies are needed for UrbanDrop to function properly. They enable secure login, checkout, and payment processing. You can’t turn these off through our settings, but you can block them in your browser (which may affect functionality).</p>
                                                <p className="mt-3"><span className="font-medium text-gray-700">Examples:</span> login sessions, shopping basket tracking, payment processing.</p>
                                            </>
                                        }
                                        isActive={preferences.essential}
                                        isLocked={true}
                                    />
                                    <CookieCategory
                                        title="Performance and Analytics Cookies"
                                        description={
                                            <>
                                                <p>These help us understand how visitors use UrbanDrop like which pages are most visited or where users experience delays. They allow us to improve speed, reliability, and overall usability.</p>
                                                <p className="mt-3"><span className="font-medium text-gray-700">Examples:</span> Google Analytics, app diagnostics.</p>
                                            </>
                                        }
                                        isActive={preferences.performance}
                                        onToggle={() => togglePreference('performance')}
                                    />
                                    <CookieCategory
                                        title="Functional Cookies"
                                        description={
                                            <>
                                                <p>These remember your preferences, such as language, location, and saved addresses, so you don’t need to re-enter them each time.</p>
                                                <p className="mt-3"><span className="font-medium text-gray-700">Examples:</span> preferred delivery address, saved shop filters.</p>
                                            </>
                                        }
                                        isActive={preferences.functional}
                                        onToggle={() => togglePreference('functional')}
                                    />
                                    <CookieCategory
                                        title="Advertising and Marketing Cookies"
                                        description={
                                            <>
                                                <p>We use these to show you personalized promotions and relevant ads, both on UrbanDrop and on other websites. They help us measure the performance of marketing campaigns and avoid showing the same ads repeatedly.</p>
                                                <p className="mt-3"><span className="font-medium text-gray-700">Examples:</span> Meta Pixel, Google Ads Remarketing.</p>
                                            </>
                                        }
                                        isActive={preferences.advertising}
                                        onToggle={() => togglePreference('advertising')}
                                    />
                                </div>

                                {/* Bottom Section */}
                                <div className="mt-8 pt-6 border-t border-gray-100 text-sm text-gray-500">
                                    <p>
                                        You can update your cookie choices anytime by selecting “Manage Cookies” in our website footer or app menu.
                                    </p>
                                    <p className="mt-2">
                                        For more details, see our <a href="/cookies-policy" className="text-green-600 hover:underline font-medium">Cookie Policy</a> and <a href="/privacy-policy" className="text-green-600 hover:underline font-medium">Privacy Policy</a>.
                                    </p>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end">
                                <button
                                    onClick={handleSavePreferences}
                                    className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-200 hover:bg-green-700 hover:shadow-xl hover:-translate-y-0.5 transition-all"
                                >
                                    Save Preferences
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

const CookieCategory = ({ title, description, isActive, isLocked, onToggle }) => {
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
                        <p className="text-xs text-gray-500 mt-0.5">{isLocked ? 'Always Active' : (isActive ? 'Active' : 'Inactive')}</p>
                    </div>
                </div>

                <div className="ml-4">
                    {isLocked ? (
                        <div className="text-green-600 flex items-center gap-1 text-sm font-medium bg-green-50 px-3 py-1 rounded-full">
                            <Check className="w-4 h-4" /> Required
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
