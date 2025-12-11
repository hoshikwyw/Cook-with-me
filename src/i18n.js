import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationMN from './locales/mn/translation.json';
import translationKR from './locales/kr/translation.json';
import translationMM from './locales/mm/translation.json';

const resources = {
    // mn: {
    //     translation: translationMN
    // },
    mm: {
        translation: translationMM
    },
    en: {
        translation: translationEN
    },
    // kr: {
    //     translation: translationKR
    // }
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'mm',
        debug: false,
        resources,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        },
        react: {
            useSuspense: false
        },
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator'],
            caches: ['cookie'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            convertDetectedLanguage: (lng) => lng === 'mn' ? 'mn' : lng === 'kr' ? 'kr' : lng === 'mm' ? 'mm' : 'en'
            // convertDetectedLanguage: (lng) => console.log('detected language =>', lng),
        }

    });

export default i18n;
