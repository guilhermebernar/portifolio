import brFlag from '../app/assets/images/icons/br-flag.png';
import usFlag from '../app/assets/images/icons/us-flag.png';
import { ToggleBall, ToggleContainer, ToggleFlag } from '@/style/components/LenguageToggle';

function LanguageToggle({ language, handleLanguageToggle }) {
  const flag = language === 'pt' ? brFlag : usFlag;

  return (
    <ToggleContainer onClick={handleLanguageToggle} type="button" aria-label="Toggle language">
      <ToggleFlag
        src={flag.src}
        alt="Language flag"
        width="60"
        height="24"
        decoding="async"
      />
      <ToggleBall language={language} />
    </ToggleContainer>
  );
}

export default LanguageToggle;
