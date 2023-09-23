import Head from 'next/head';
import AboutMe from '../components/AboutMe';
import RecentProjects from '../components/RecentProjects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

import { useState, useEffect } from 'react';

import dataPt from '../data/pt.json';
import dataEn from '../data/en.json';


export default function Home() {
  const [language, setLanguage] = useState('pt');
  const [data, setData] = useState({});

  useEffect(() => {
    if (language === 'pt') {
      setData(dataPt);
    } else {
      setData(dataEn);
    }
  }, [language]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>Portfólio | Guilherme Bernardo da Nóbrega</title>
      </Head>
      <button onClick={() => setLanguage(lang => lang === 'pt' ? 'en' : 'pt')}>
        Toggle Language
      </button>
      <AboutMe data={data.aboutMe} />
      <RecentProjects data={data.recentProjects} />
      <Skills data={data.skills} />
      <Testimonials data={data.testimonials} />
      <Contact data={data.contact} />
    </main>
  )
}

