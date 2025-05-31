import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { ar } from '../translations/ar';
import { en } from '../translations/en';

// Create i18n instance
const i18n = new I18n({
  en,
  ar,
});

// Set default locale to device locale
i18n.locale = Localization.locale.split('-')[0];
i18n.enableFallback = true;
i18n.defaultLocale = 'ar';

export default i18n;