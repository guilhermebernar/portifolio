import { useState, useEffect } from 'react';
import translations from '../app/tagTranslation';
import dataPt from '../data/pt.json';
import dataEn from '../data/en.json';

export default function useMainOrchestrator() {
  const [language, setLanguage] = useState('pt');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const browserLanguage = navigator.language.startsWith('pt') ? 'pt' : 'en';
    setLanguage(browserLanguage);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleLanguageToggle = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
  };

  const getTranslation = (key) => {
    return translations[language][key] || key;
  };

  const data = language === 'pt' ? dataPt : dataEn;

  return { data, language, loading, handleLanguageToggle, getTranslation };
}
