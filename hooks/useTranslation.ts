import { useContext } from 'react';
import i18n from '../utils/i18n';
import { useLanguage } from './LanguageContext';

export function useTranslation() {
  const { language, setLanguage } = useLanguage();

  const t = (key: string, params?: Record<string, string | number>) => {
    return i18n.t(key, params);
  };

  const changeLanguage = (lang: 'ar' | 'en') => {
    setLanguage(lang);
  };

  const currentLanguage = language;
  const isRTL = language === 'ar';

  return { t, changeLanguage, currentLanguage, isRTL };
}