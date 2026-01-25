import { ToggleBall, ToggleContainer, ToggleLabel } from '@/style/components/LenguageToggle';

function LanguageToggle({ language, handleLanguageToggle }) {
  return (
    <ToggleContainer onClick={handleLanguageToggle}>
      <ToggleLabel $active={language === 'pt'}>PT</ToggleLabel>
      <ToggleLabel $active={language === 'en'}>EN</ToggleLabel>
      <ToggleBall language={language} />
    </ToggleContainer>
  );
}

export default LanguageToggle;
