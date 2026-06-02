'use client'

import Head from 'next/head';
import dynamic from 'next/dynamic';
import Header from '../components/Header';

import useMainOrchestrator from '../hooks/main';

const AboutMe = dynamic(() => import('../components/AboutMe'));
const Projects = dynamic(() => import('../components/Projects'));
const Skills = dynamic(() => import('../components/Skills'));
const Contact = dynamic(() => import('../components/Contact'));
const ProfileSection = dynamic(() => import('../components/ProfileSection'));
const WhatsAppButton = dynamic(() => import('../components/WhatsAppButton'));

export default function Home() {
  const {
    data,
    language,
    getTranslation,
    handleLanguageToggle,
  } = useMainOrchestrator();

  return (
    <>
      <Head>
        <title>{getTranslation('pageTitle')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header language={language} handleLanguageToggle={handleLanguageToggle} />
      <main lang={language === 'pt' ? 'pt-BR' : 'en-US'}>
        <ProfileSection data={data} getTranslation={getTranslation} language={language} />
        <AboutMe data={data.aboutMe} getTranslation={getTranslation} language={language} />
        <Projects
          cases={data.cases}
          archiveProjects={data.archiveProjects}
          getTranslation={getTranslation}
          language={language}
        />
        <Skills skills={data.skills} getTranslation={getTranslation} language={language} />
        <Contact data={data.contact} getTranslation={getTranslation} language={language} />
      </main>
      <WhatsAppButton />
    </>
  );
}
