'use client'
import Head from 'next/head';
import { useEffect, useState } from 'react';
import AboutMe from '../components/AboutMe';
import RecentProjects from '../components/RecentProjects';
import Testimonials from '../components/Testimonials';
import Skills from '../components/Skills';
import LanguageToggle from '../components/LenguageToggle';
import dataPt from '../data/pt.json';
import dataEn from '../data/en.json';
import translations from './tagTranslation';
import { VideoContainerLoading } from '../style/main';
import { BackgroundVideo } from '../components/BackgroundVideo';
import ProfileSection from '@/components/ProfileSection';



export default function Home() {
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

  return (
    <>
      {loading ? (
        <VideoContainerLoading>
          <video autoPlay loop muted onEnded={() => setLoading(false)}>
            <source src="/loading.mp4" type="video/mp4" />
          </video>
        </VideoContainerLoading>
      ) : (
        <>
          <BackgroundVideo />
          <main
            lang={language === 'pt' ? 'pt-BR' : 'en-US'}
            style={{ visibility: loading ? 'hidden' : 'visible' }}
          >
            <header>
              <LanguageToggle language={language} handleLanguageToggle={handleLanguageToggle} />
            </header>
            <ProfileSection
              data={data}
              getTranslation={getTranslation}
              language={language}
            />
            <AboutMe
              data={data.aboutMe}
              getTranslation={getTranslation}
              language={language}
            />
            <RecentProjects
              experiences={data.experiences}
              getTranslation={getTranslation}
              language={language}
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
          </main>
        </>
      )}
      <Head>
        <title>{getTranslation('pageTitle')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}