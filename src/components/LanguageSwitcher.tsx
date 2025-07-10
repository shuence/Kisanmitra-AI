import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

const LanguageSwitcher: React.FC = () => {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  const handleLanguageChange = (languageCode: Language) => {
    setLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/10 hover:bg-black/20 transition-colors text-black"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang?.nativeName}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 bg-black rounded-lg shadow-lg border border-gray-200 min-w-[150px] z-20">
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                  currentLanguage === language.code ? 'bg-primary/10 text-primary' : 'text-gray-700'
                } first:rounded-t-lg last:rounded-b-lg`}
              >
                <div className="flex flex-col">
                  <span className="font-medium">{language.nativeName}</span>
                  <span className="text-xs text-gray-500">{language.name}</span>
                </div>
                {currentLanguage === language.code && (
                  <div className="w-2 h-2 bg-primary rounded-full ml-auto" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;
