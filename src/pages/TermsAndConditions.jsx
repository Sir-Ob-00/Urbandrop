import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import SEO from "../components/common/SEO";
import TermsSection from '../components/terms/TermsSection';

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
            id: 'general', title: 'General Terms', icon: (
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            ), theme: 'primary'
        },
        {
            id: 'merchants', title: 'Merchants', icon: (
                <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ), theme: 'accent1'
        },
        {
            id: 'customers', title: 'Customers', icon: (
                <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ), theme: 'accent2'
        },
        {
            id: 'promos', title: 'Promotions', icon: (
                <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            ), theme: 'accent3'
        },
        {
            id: 'riders', title: 'Riders', icon: (
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
                        Terms & Conditions
                    </h1>
                    <p className="text-gray-500 max-w-2xl">
                        Please read these terms carefully before using our platform. They outline your rights and responsibilities when using Urbandrop.
                    </p>
                    <p className="text-sm font-medium text-primary mt-6 tracking-wide uppercase">
                        Last Updated: {lastUpdated}
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
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Table of Contents</h3>
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
                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-6">Table of Contents</h3>
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
                            <TermsSection id="general" title="General Terms" icon={sections[0].icon} colorTheme="primary">
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
                        )}

                        {activeSection === 'merchants' && (
                            <TermsSection id="merchants" title="Merchant Terms & Conditions" icon={sections[1].icon} colorTheme="accent1">
                                <p className="text-gray-600 mb-6 text-h4">
                                    These Merchant Terms and Conditions govern the relationship between UrbanDrop Group Limited and the merchant entity or individual that registers to sell goods via the UrbanDrop platform.
                                </p>

                                <h3 className="text-gray-900 mt-8 mb-3">1. Role of UrbanDrop</h3>
                                <p>
                                    UrbanDrop operates an online marketplace that enables Merchants to offer goods to customers and facilitates order placement, payment processing, and customer support. UrbanDrop does not manufacture, prepare, store, or supply food or grocery items.
                                </p>
                                <p>All contracts for the sale of goods are formed directly between the Merchant and the customer. The Merchant is the seller of record for all orders fulfilled through the Platform.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">2. Merchant Eligibility and Onboarding</h3>
                                <p>By registering as a Merchant, you confirm that:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>You are legally established and authorised to trade in the United Kingdom</li>
                                    <li>You hold all required licences, permits, and approvals to sell food or grocery products</li>
                                    <li>You comply with all applicable food safety, hygiene, trading standards, and consumer protection laws</li>
                                    <li>All information provided during onboarding is accurate and kept up to date</li>
                                </ul>
                                <p>UrbanDrop reserves the right to reject, suspend, or terminate Merchant accounts that fail to meet these requirements.</p>
                                <p className="mt-4">You agree that your electronic acceptance of these Terms constitutes a legally binding agreement between you and UrbanDrop. UrbanDrop maintains electronic records of Merchant acceptance including the date, timestamp, IP address, and version of Terms at acceptance.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">3. Merchant Obligations</h3>
                                <p>The Merchant is solely responsible for:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>The quality, safety, legality, and accuracy of all products listed</li>
                                    <li>Correct preparation, packaging, and labelling of goods</li>
                                    <li>Compliance with UK food safety legislation, including allergen and ingredient disclosure</li>
                                    <li>Ensuring prices, descriptions, images, and availability are accurate at all times</li>
                                    <li>Preparing orders promptly and in accordance with customer instructions</li>
                                    <li>Ensuring goods are suitable for delivery and consumption</li>
                                </ul>
                                <p>The Merchant must not substitute items without customer approval unless explicitly permitted by Platform functionality.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">4. Orders and Fulfilment</h3>
                                <p>The Merchant agrees to:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Accept and fulfil orders in good faith</li>
                                    <li>Avoid unnecessary cancellations</li>
                                    <li>Notify UrbanDrop immediately of stock shortages, delays, or fulfilment issues</li>
                                </ul>
                                <p>UrbanDrop may monitor order acceptance rates, cancellation rates, and fulfilment performance. Repeated failures may result in penalties, reduced visibility, suspension, or termination.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">5. Pricing and Promotions</h3>
                                <p>Merchants set their own prices but acknowledge that:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Prices must be fair, transparent, and compliant with consumer protection law</li>
                                    <li>UrbanDrop may display prices inclusive of service and delivery fees</li>
                                    <li>UrbanDrop may offer promotions, discounts, or credits at its own cost unless otherwise agreed</li>
                                    <li>Merchants may not inflate prices in a way that misleads customers or breaches applicable law</li>
                                </ul>

                                <h3 className="text-gray-900 mt-8 mb-3">6. Payments and Settlement</h3>
                                <p>UrbanDrop collects payments from customers on behalf of Merchants and acts as a commercial agent for payment processing purposes.</p>
                                <p className="mt-4">Merchants are entitled to receive the net value of completed orders, calculated as:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Total order value minus Commission fees, Delivery fees, Service fees</li>
                                    <li>Refunds, chargebacks, or adjustments</li>
                                    <li>Any other agreed charges</li>
                                </ul>
                                <p>Settlement is made according to the agreed payout cycle. UrbanDrop may withhold or offset amounts where refunds, disputes, or suspected breaches exist.</p>
                                <p className="mt-4 font-semibold text-gray-900">Payment Processing via Stripe:</p>
                                <p>UrbanDrop uses Stripe to provide payment processing services. By agreeing to these Terms, you agree to be bound by the Stripe Services Agreement. You authorise UrbanDrop to share accurate business information with Stripe for onboarding, compliance, fraud prevention, and payment processing.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">7. Refunds, Complaints, and Chargebacks</h3>
                                <p>UrbanDrop may issue refunds to customers in accordance with its refund policy. Where a refund or chargeback arises due to:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Incorrect items</li>
                                    <li>Missing items</li>
                                    <li>Poor food quality</li>
                                    <li>Safety or hygiene issues</li>
                                    <li>Merchant cancellation or failure to deliver</li>
                                </ul>
                                <p>The Merchant bears full financial responsibility. UrbanDrop may deduct refunded amounts from future payouts or invoice the Merchant directly.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">8. Food Safety and Compliance</h3>
                                <p>Merchants must comply with all UK food safety and hygiene regulations, allergen labelling requirements, and product traceability obligations.</p>
                                <p className="mt-4">Merchants must immediately notify UrbanDrop of:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Any food safety incident</li>
                                    <li>Any regulatory investigation or enforcement action</li>
                                    <li>Any product recall or contamination risk</li>
                                </ul>
                                <p>Failure to do so is grounds for immediate termination.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">9. Permitted Products and Prohibited Items</h3>
                                <p className="font-semibold text-gray-900 mb-2">9.1 Permitted Products</p>
                                <p>Merchants may only list and sell food and grocery products that are lawful to sell in the United Kingdom and expressly permitted by UrbanDrop through the Platform.</p>
                                <p className="font-semibold text-gray-900 mb-2 mt-4">9.2 Prohibited Products</p>
                                <p>The following products are strictly prohibited:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Alcoholic beverages of any kind</li>
                                    <li>Tobacco products, including cigarettes, cigars, rolling tobacco, and vaping products</li>
                                    <li>Illegal drugs, controlled substances, and psychoactive substances</li>
                                    <li>Prescription-only medicines or medical products requiring authorisation</li>
                                    <li>Any other products prohibited by applicable law or UrbanDrop policies</li>
                                </ul>
                                <p className="text-red-600 font-semibold">Any attempt to list or sell alcohol, tobacco, or prohibited substances is a material breach of these Terms.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">10. Delivery</h3>
                                <p>Where delivery is facilitated via the Platform, the Merchant remains responsible for:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Proper packaging</li>
                                    <li>Temperature control</li>
                                    <li>Food integrity at the point of handover</li>
                                </ul>
                                <p>UrbanDrop is not responsible for the quality of goods after preparation but before delivery, except where required by law.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">11. Insurance and Indemnity</h3>
                                <p>Merchants must maintain adequate insurance, including public liability and product liability insurance.</p>
                                <p className="mt-4">The Merchant agrees to indemnify and hold harmless UrbanDrop against all claims, losses, damages, fines, penalties, and legal costs arising from:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Food safety breaches</li>
                                    <li>Consumer claims relating to goods</li>
                                    <li>Regulatory non-compliance</li>
                                    <li>Merchant negligence or misconduct</li>
                                </ul>
                                <p>This obligation survives termination.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">12. Platform Use and Conduct</h3>
                                <p>Merchants must not:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>Manipulate ratings or reviews</li>
                                    <li>Engage in fraudulent activity</li>
                                    <li>Circumvent the Platform to avoid fees</li>
                                    <li>Use customer data for unauthorised purposes</li>
                                </ul>
                                <p>UrbanDrop may suspend or terminate access for any breach.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">13. Suspension and Termination</h3>
                                <p>UrbanDrop may suspend or terminate the Merchant account immediately where:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>There is a serious breach of these Terms</li>
                                    <li>Food safety is compromised</li>
                                    <li>Fraud or abuse is suspected</li>
                                    <li>Regulatory action is taken against the Merchant</li>
                                </ul>
                                <p>Merchants may terminate with notice, subject to outstanding obligations. Termination does not affect accrued rights, liabilities, or indemnities.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">14. Limitation of Liability</h3>
                                <p>To the maximum extent permitted by law:</p>
                                <ul className="list-disc pl-6 mb-4 text-gray-600">
                                    <li>UrbanDrop is not liable for loss of profits, revenue, or business</li>
                                    <li>UrbanDrop does not guarantee order volume or earnings</li>
                                </ul>
                                <p>Nothing in these Terms limits liability where such limitation is unlawful.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">15. Data Protection</h3>
                                <p>Merchants must process customer data in accordance with the UK GDPR and only for order fulfilment. Use of customer data for marketing or unrelated activities is strictly prohibited.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">16. Amendments</h3>
                                <p>UrbanDrop may update these Terms from time to time. Continued use of the Platform constitutes acceptance of updated Terms.</p>

                                <h3 className="text-gray-900 mt-8 mb-3">17. Governing Law and Jurisdiction</h3>
                                <p>The laws of England and Wales govern these Terms. The courts of England and Wales have exclusive jurisdiction.</p>
                            </TermsSection>
                        )}

                        {activeSection === 'customers' && (
                            <TermsSection id="customers" title="Customer Terms" icon={sections[2].icon} colorTheme="accent2">
                                <p className="text-gray-600 mb-6 text-h4">
                                    Information regarding ordering, payment, and receiving deliveries as a customer on the Urbandrop platform.
                                </p>

                                <h3 className="text-gray-900 mt-8 mb-3">1. Placing Orders</h3>
                                <p>
                                    When you place an order on Urbandrop, it constitutes an offer to purchase the specified items. The contract is formed when you receive an order confirmation. We reserve the right to decline any order.
                                </p>

                                <h3 className="text-gray-900 mt-8 mb-3">2. Pricing & Payment</h3>
                                <p>
                                    All prices are displayed in the local currency and include applicable taxes unless otherwise stated. Delivery fees are calculated at checkout. Payment must be made validly before an order is fulfilled. We use secure third-party payment gateways to process transactions.
                                </p>

                                <div className="border border-green-200 bg-white shadow-sm p-6 rounded-xl my-8 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-green-500"></div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">Return Policy Highlights</h4>
                                    <p className="mb-4 text-sm text-gray-600">Standard returns are accepted within reasonable timeframes depending on the product type.</p>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="bg-green-50 rounded p-4">
                                            <span className="block font-bold text-green-800 mb-1">Perishable Goods (Food)</span>
                                            <span className="text-gray-600">Must be reported within 24 hours of delivery. Include photo evidence if defective.</span>
                                        </div>
                                        <div className="bg-gray-50 rounded p-4 border border-gray-100">
                                            <span className="block font-bold text-gray-800 mb-1">Non-Perishable Items</span>
                                            <span className="text-gray-600">Can be returned within 14 days if unused and in original packaging.</span>
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-gray-900 mt-8 mb-3">3. Delivery Logistics</h3>
                                <p>
                                    Delivery times provided are estimates. While we strive to ensure prompt delivery, factors such as weather, traffic, and merchant preparation times can cause delays. Urbandrop is not liable for reasonably foreseeable delays.
                                </p>
                            </TermsSection>
                        )}

                        {activeSection === 'promos' && (
                            <TermsSection id="promos" title="Promotions & Discounts" icon={sections[3].icon} colorTheme="accent3">
                                <p className="text-gray-600 mb-6 text-h4">
                                    Rules surrounding the use of promo codes, vouchers, and special discount events.
                                </p>

                                <ul className="space-y-4">
                                    <li className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">1</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Application of Codes</h4>
                                            <p className="text-sm text-gray-600 mt-1">Promo codes must be entered at checkout. They cannot be applied retrospectively to orders already placed.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">2</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Limitations</h4>
                                            <p className="text-sm text-gray-600 mt-1">Only one promo code can be used per transaction unless explicitly stated otherwise. Promos hold no cash value.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">3</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Fair Usage</h4>
                                            <p className="text-sm text-gray-600 mt-1">Creation of multiple accounts to exploit new-user promotions is strictly prohibited and will result in account banning.</p>
                                        </div>
                                    </li>
                                    <li className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-bold">4</div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">Modification</h4>
                                            <p className="text-sm text-gray-600 mt-1">Urbandrop reserves the right to modify, cancel, or suspend promotions at any time without prior notice.</p>
                                        </div>
                                    </li>
                                </ul>
                            </TermsSection>
                        )}

                        {activeSection === 'riders' && (
                            <TermsSection id="riders" title="Rider & Delivery Partner Terms" icon={sections[4].icon} colorTheme="secondary">
                                <p className="text-gray-600 mb-6 text-h4">
                                    Expectations and guidelines for independent delivery partners working with Urbandrop.
                                </p>

                                <h3 className="text-gray-900 mt-8 mb-3">1. Independent Contractor Status</h3>
                                <p>
                                    Riders act as independent contractors, not employees. You are responsible for your own tax obligations, insurance, and vehicle maintenance.
                                </p>

                                <h3 className="text-gray-900 mt-8 mb-3">2. Service Standards</h3>
                                <p>
                                    Riders are expected to maintain a professional demeanor, adhere to all local traffic laws, and ensure goods are transported safely and hygienically. Tampering with customer orders is grounds for immediate termination and potential legal action.
                                </p>

                                <h3 className="text-gray-900 mt-8 mb-3">3. Payments</h3>
                                <p>
                                    Earnings are calculated per delivery based on distance and dynamic pricing factors. Payouts are generated automatically on a weekly cycle to your nominated bank account.
                                </p>
                            </TermsSection>
                        )}

                    </div>
                </div>
            </div>
        </main>
    );
};

export default TermsAndConditions;
