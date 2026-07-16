import { createContext, useContext, useState, useCallback } from 'react';
import { translations } from '../data/translations';
import { faqTranslations } from '../data/content';

const LanguageContext = createContext();

const allTranslations = { ...translations, ...faqTranslations };

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('revo_lang') || 'es');

  const setLang = useCallback((newLang) => {
    setLangState(newLang);
    localStorage.setItem('revo_lang', newLang);
    document.documentElement.lang = newLang === 'es' ? 'es' : 'en';
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === 'es' ? 'en' : 'es');
  }, [lang, setLang]);

  const t = useCallback((key) => {
    return allTranslations[key]?.[lang] || key;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
