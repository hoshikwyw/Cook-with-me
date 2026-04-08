import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationMM from './locales/mm/translation.json';

const resources = {
  en: { translation: translationEN },
  mm: { translation: translationMM },
};

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  debug: false,
  resources,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
