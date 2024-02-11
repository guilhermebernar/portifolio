import { ToggleBall, ToggleContainer } from "@/style/components/LenguageToggle";


function LanguageToggle({ language, handleLanguageToggle }) {
  return (
    <ToggleContainer onClick={handleLanguageToggle} language={language}>
      <ToggleBall language={language} />
    </ToggleContainer>
  );
}

export default LanguageToggle;
