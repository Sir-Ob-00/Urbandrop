import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import SEO from "../components/common/SEO";
import TermsSection from '../components/terms/TermsSection';
import GeneralTerms from '../components/terms/sections/GeneralTerms';
import MerchantTerms from '../components/terms/sections/MerchantTerms';
import CustomerTerms from '../components/terms/sections/CustomerTerms';
import PromotionsTerms from '../components/terms/sections/PromotionsTerms';
import RiderTerms from '../components/terms/sections/RiderTerms';

const TermsAndConditions = () => {
    const { t, i18n } = useTranslation();
    const { hash } = useLocation();
    const [activeSection, setActiveSection] = useState('general');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll state for sticky arrow
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const lastUpdated = new Date().toLocaleDateString(i18n.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const sections = [
        {
            id: 'general', title: t('termsAndConditions.sections.general'), icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ), theme: 'primary'
        },
        {
            id: 'merchants', title: t('termsAndConditions.sections.merchants'), icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ), theme: 'accent1'
        },
        {
            id: 'customers', title: t('termsAndConditions.sections.customers'), icon: (
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ), theme: 'accent2'
        },
        {
            id: 'promos', title: t('termsAndConditions.sections.promotions'), icon: (
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ), theme: 'accent3'
        },
        {
            id: 'riders', title: t('termsAndConditions.sections.riders'), icon: (
                <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ), theme: 'secondary'
        }
    ];

    // Handle smooth scroll to hash on load
    useEffect(() => {
        if (hash) {
            const targetId = hash.replace('#', '');
            const validIds = sections.map(s => s.id);
            if (validIds.includes(targetId)) {
                setActiveSection(targetId);
                setTimeout(() => {
                    const element = document.getElementById(targetId);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 100);
            }
        }
    }, [hash]);

    const scrollToSection = (id) => {
        setActiveSection(id);
        setIsMenuOpen(false);
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            try {
                history.replaceState(null, '', `#${id}`);
            } catch {
                // ignore if history is not available
            }
        }
    };

    return (
        <main className="bg-white pt-32 pb-16 min-h-screen relative">
            {/* Decorative Ring Background */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Large rings */}
                <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full border border-primary/10" />
                <div className="absolute top-40 -right-32 w-64 h-64 rounded-full border border-primary/5" />
                <div className="absolute top-96 left-1/4 w-48 h-48 rounded-full border border-secondary/10" />
                <div className="absolute bottom-40 -left-16 w-72 h-72 rounded-full border border-primary/5" />
                <div className="absolute bottom-20 right-1/4 w-56 h-56 rounded-full border border-secondary/10" />
                
                {/* Smaller accent rings */}
                <div className="absolute top-60 right-20 w-24 h-24 rounded-full border border-primary/20" />
                <div className="absolute top-1/3 left-10 w-16 h-16 rounded-full border border-secondary/15" />
                <div className="absolute bottom-1/3 right-10 w-20 h-20 rounded-full border border-primary/15" />
                
                {/* Filled circles with very low opacity */}
                <div className="absolute top-80 -left-8 w-8 h-8 rounded-full bg-primary/5" />
                <div className="absolute top-1/2 right-40 w-6 h-6 rounded-full bg-secondary/5" />
                <div className="absolute bottom-60 left-1/3 w-10 h-10 rounded-full bg-primary/5" />
            </div>
            
            <SEO
                title="Terms and Conditions - Urbandrop®"
                description="Check Urbandrop™'s Terms and Conditions for using our delivery platform and services."
                canonical="https://urbandrop.io/terms-and-conditions"
            />

            {/* Page Header */}
            <div className="bg-gray-50 py-12 border-b border-gray-100 mb-12">
                <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center text-center">
                    <h1 className="font-extrabold text-gray-900 mb-4 tracking-tight">
                        {t('termsAndConditions.pageTitle')}
                    </h1>
                    <p className="text-gray-500 max-w-2xl">
                        {t('termsAndConditions.pageDescription')}
                    </p>
                    <p className="text-sm font-medium text-primary mt-6 tracking-wide uppercase">
                        {t('termsAndConditions.lastUpdated')} {lastUpdated}
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex gap-4">

                    {/* Mobile: Floating Arrow Button */}
                    {/* Position: Below header initially, sticky when scrolled */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`lg:hidden fixed z-50 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-300 ${isMenuOpen
                                ? 'left-72 top-1/2 -translate-y-1/2' // On menu strip when open
                                : isScrolled
                                    ? 'left-4 top-24' // Sticky position when scrolled
                                    : 'left-4 top-24' // Below header when not scrolled
                            }`}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className={`w-4 h-4 text-gray-700 transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Mobile: Slide-out Menu from Left */}
                    <div
                        className={`lg:hidden fixed inset-y-0 left-0 z-40 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        <div className="pt-20 p-6">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">{t('termsAndConditions.tableOfContents')}</h3>
                            <nav className="flex flex-col space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${activeSection === section.id
                                            ? 'bg-gray-50 text-gray-900 shadow-sm border border-gray-100'
                                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50/50'
                                            }`}
                                    >
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${activeSection === section.id
                                            ? (section.theme === 'primary' ? 'bg-primary' : section.theme === 'secondary' ? 'bg-secondary' : section.theme === 'accent1' ? 'bg-blue-500' : section.theme === 'accent2' ? 'bg-green-500' : 'bg-purple-500')
                                            : 'bg-transparent'
                                            }`} />
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Mobile Overlay */}
                    {isMenuOpen && (
                        <div
                            className="lg:hidden fixed inset-0 z-30 bg-black/30"
                            onClick={() => setIsMenuOpen(false)}
                        />
                    )}

                    {/* Desktop: Sticky Side Navigation (sticks with content and respects container) */}
                    <aside className="hidden lg:block w-72">
                        <div className="sticky top-28 self-start ml-4 max-h-[calc(100vh-8rem)] overflow-y-auto z-40 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">{t('termsAndConditions.tableOfContents')}</h3>
                            <nav className="flex flex-col space-y-2">
                                {sections.map((section) => (
                                    <button
                                        key={section.id}
                                        onClick={() => scrollToSection(section.id)}
                                        className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-3 ${activeSection === section.id
                                            ? 'bg-gray-50 text-gray-900 shadow-sm border border-gray-100'
                                            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50/50'
                                            }`}
                                    >
                                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${activeSection === section.id
                                            ? (section.theme === 'primary' ? 'bg-primary' : section.theme === 'secondary' ? 'bg-secondary' : section.theme === 'accent1' ? 'bg-blue-500' : section.theme === 'accent2' ? 'bg-green-500' : 'bg-purple-500')
                                            : 'bg-transparent'
                                            }`} />
                                        {section.title}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Areas */}
                    <div className="flex-1 min-h-screen">

                        {activeSection === 'general' && (
                            <GeneralTerms icon={sections[0].icon} />
                        )}

                        {activeSection === 'merchants' && (
                            <MerchantTerms icon={sections[1].icon} />
                        )}

                        {activeSection === 'customers' && (
                            <CustomerTerms icon={sections[2].icon} />
                        )}

                        {activeSection === 'promos' && (
                            <PromotionsTerms icon={sections[3].icon} />
                        )}

                        {activeSection === 'riders' && (
                            <RiderTerms icon={sections[4].icon} />
                        )}

                    </div>
                </div>
            </div>
        </main>
    );
};

export default TermsAndConditions;
