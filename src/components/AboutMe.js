import { AboutContainer, AboutTitle, AboutIntro, FocusSection, FocusTitle, FocusList, FocusItem } from "@/style/components/AboutMe";

export default function AboutMe({ data, getTranslation, language }) {
  return (
    <AboutContainer>
      <AboutTitle>{getTranslation('aboutMeTitle', language)}</AboutTitle>
      <AboutIntro>{data.intro}</AboutIntro>
      <FocusSection>
        <FocusTitle>{getTranslation('currentFocus', language)}</FocusTitle>
        <FocusList>
          {data.focus.map((item, index) => (
            <FocusItem key={index}>{item}</FocusItem>
          ))}
        </FocusList>
      </FocusSection>
    </AboutContainer>
  );
}
