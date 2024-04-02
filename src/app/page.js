'use client'

import Head from 'next/head';
import dynamic from 'next/dynamic';
import LanguageToggle from '../components/LenguageToggle';
import { BackgroundVideo } from '../components/BackgroundVideo';
import LoadingVideo from '../app/assets/videos/loading.mp4';
import { VideoContainerLoading } from '../style/main';

import useMainOrchestrator from '../hooks/main';

// Dynamic imports para componentes
const AboutMe = dynamic(() => import('../components/AboutMe'));
const Projects = dynamic(() => import('../components/Projects'));
const Testimonials = dynamic(() => import('../components/Testimonials'));
const Skills = dynamic(() => import('../components/Skills'));
const ProfileSection = dynamic(() => import('../components/ProfileSection'));

export default function Home() {
  const {
    data,
    loading,
    language,
    setLoading,
    getTranslation,
    handleLanguageToggle,
  } = useMainOrchestrator();

  return (
    <>
      <Head>
        <title>{getTranslation('pageTitle')}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="video" href={LoadingVideo} type="video/mp4" />
      </Head>
      {loading ? (
        <VideoContainerLoading>
          <video src={LoadingVideo} autoPlay loop muted onEnded={() => setLoading(false)} />
        </VideoContainerLoading>
      ) : (
        <>
          <BackgroundVideo />
          <main lang={language === 'pt' ? 'pt-BR' : 'en-US'}>
            <header>
              <LanguageToggle language={language} handleLanguageToggle={handleLanguageToggle} />
            </header>
            <ProfileSection data={data} getTranslation={getTranslation} language={language} />
            <AboutMe data={data.aboutMe} getTranslation={getTranslation} language={language} />
            <Projects experiences={data.experiences} getTranslation={getTranslation} language={language} />
            <Skills softSkills={data.softSkills} hardSkills={data.hardSkills} getTranslation={getTranslation} language={language} />
            <Testimonials data={data.testimonials} getTranslation={getTranslation} language={language} />
          </main>
        </>
      )}
    </>
  );
}
