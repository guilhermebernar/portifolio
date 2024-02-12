import Image from 'next/image';
import brFlag from '../app/assets/images/icons/br-flag.png';
import usFlag from '../app/assets/images/icons/us-flag.png';
import { ToggleBall, ToggleContainer } from '@/style/components/LenguageToggle';

function LanguageToggle({ language, handleLanguageToggle }) {
  const flag = language === 'pt' ? brFlag : usFlag;

  return (
    <ToggleContainer onClick={handleLanguageToggle}>
      <Image
        src={flag}
        alt="Language flag"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <ToggleBall language={language} />
    </ToggleContainer>
  );
}

export default LanguageToggle;
