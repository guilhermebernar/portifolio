'use client';

import { HeaderContainer, HeaderContent } from '@/style/components/Header';
import LanguageToggle from './LenguageToggle';

export default function Header({ language, handleLanguageToggle }) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LanguageToggle language={language} handleLanguageToggle={handleLanguageToggle} />
      </HeaderContent>
    </HeaderContainer>
  );
}
