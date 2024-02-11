'use client'

import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Skills from '../components/Skills';
import LanguageToggle from '../components/LenguageToggle';
import { BackgroundVideo } from '../components/BackgroundVideo';
import ProfileSection from '../components/ProfileSection';

import { VideoContainerLoading } from '../style/main';

import useMainOrchestrator from '../hooks/main';


export default function Home() {
  const {
    data,
    loading,
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
            <Projects
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

    </>
  );
}