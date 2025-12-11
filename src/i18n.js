import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationHI from './locales/hi/translation.json';
import translationFR from './locales/fr/translation.json';
import translationDE from './locales/de/translation.json';
import translationES from './locales/es/translation.json';
import translationZH from './locales/zh/translation.json';
import translationNL from './locales/nl/translation.json';
import translationIT from './locales/it/translation.json';
import translationSW from './locales/sw/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
    en: {
        translation: translationEN,
    },
    hi: {
        translation: translationHI,
    },
    fr: {
        translation: translationFR,
    },
    de: {
        translation: translationDE,
    },
    es: {
        translation: translationES,
    },
    zh: {
        translation: translationZH,
    },
    nl: {
        translation: translationNL,
    },
    it: {
        translation: translationIT,
    },
    sw: {
        translation: translationSW,
    },
    ar: {
        translation: translationAR,
    },
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['querystring', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
            lookupQuerystring: 'lng',
            lookupSessionStorage: 'i18nextLng',
            caches: ['sessionStorage'],
            excludeCacheFor: ['cimode'],
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;
