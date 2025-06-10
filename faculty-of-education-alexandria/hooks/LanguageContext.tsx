import React, { createContext, ReactNode, useContext, useState } from 'react';
import i18n from '../utils/i18n';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};


const LanguageContext = createContext<LanguageContextType>({
  language: i18n.language,
  setLanguage: () => {},
});


export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState(i18n.language);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
