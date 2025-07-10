import React, { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Language, TranslationKey } from '../translations';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  availableLanguages: { code: Language; name: string; nativeName: string }[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const availableLanguages = [
    { code: 'en' as Language, name: 'English', nativeName: 'English' },
    { code: 'hi' as Language, name: 'Hindi', nativeName: 'हिंदी' },
    { code: 'mr' as Language, name: 'Marathi', nativeName: 'मराठी' },
    { code: 'kn' as Language, name: 'Kannada', nativeName: 'ಕನ್ನಡ' }
  ];

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('kisanmitra-language', language);
  };

  const t = (key: TranslationKey): string => {
    return translations[currentLanguage][key] || translations.en[key] || key;
  };

  // Load saved language preference on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('kisanmitra-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    availableLanguages
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
