// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { ar } from '../translations/ar';
import { en } from '../translations/en';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4', // ضروري لـ Expo
    lng: 'en', // اللغة الافتراضية
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    interpolation: {
      escapeValue: false, // react بالفعل يقوم بذلك
    },
  });

export default i18n;
