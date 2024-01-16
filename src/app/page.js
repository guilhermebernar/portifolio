'use client';
import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import RecentProjects from '../components/RecentProjects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

import dataPt from '../data/pt.json';
import dataEn from '../data/en.json';
import { useEffect, useState } from 'react';

const translations = {
  en: {
    "pageTitle": "Portfolio | Guilherme Bernardo da Nóbrega",
    "softSkillsTitle": "Soft Skills",
    "hardSkillsTitle": "Hard Skills",
    "recentProjectsTitle": "Recent Projects",
    "previousProjectsTitle": "Previous Projects",
    "aboutMeTitle": "About Me",
    "managementHistoryTitle": "Management History",
    "testimonialsTitle": "Testimonials",
    "contactTitle": "Contact"
  },
  pt: {
    "pageTitle": "Portfólio | Guilherme Bernardo da Nóbrega",
    "softSkillsTitle": "Habilidades Interpessoais",
    "hardSkillsTitle": "Habilidades Técnicas",
    "recentProjectsTitle": "Projetos Recentes",
    "previousProjectsTitle": "Projetos Anteriores",
    "aboutMeTitle": "Sobre Mim",
    "managementHistoryTitle": "Histórico de Gestão",
    "testimonialsTitle": "Depoimentos",
    "contactTitle": "Contato"
  }
};

export default function Home() {
  const [language, setLanguage] = useState('pt'); // Estado inicial da língua

  useEffect(() => {
    const browserLanguage = navigator.language.startsWith('pt') ? 'pt' : 'en';
    setLanguage(browserLanguage);
  }, []);

  const handleLanguageToggle = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
  };

  const getTranslation = (key) => {
    return translations[language][key] || key;
  };

  // Atualiza os dados com base na língua selecionada
  const data = language === 'pt' ? dataPt : dataEn;

  return (
    <main>
      <Head>
        <title>{getTranslation('pageTitle')}</title>
      </Head>
      <header>
        <button onClick={handleLanguageToggle}>
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
        <h1>{data.name}</h1>
        <h2>{data.title}</h2>
      </header>
      <AboutMe
        data={data.aboutMe}
        getTranslation={getTranslation}
        language={language}
      />
      <RecentProjects
        data={data.recentProjects}
        getTranslation={getTranslation}
        language={language}
        history={data.managementHistory}
      />
      <Skills
        softSkills={data.softSkills}
        hardSkills={data.hardSkills}
        getTranslation={getTranslation}
        language={language}
      />
      <Testimonials
        data={data.testimonials}
        getTranslation={getTranslation}
        language={language}
      />
      <Contact
        data={data.contact}
        getTranslation={getTranslation}
        language={language}
      />
    </main>
  );
};