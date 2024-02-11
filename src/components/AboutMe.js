import { AboutMeContainer } from "@/style/components/AboutMe";

export default function AboutMe({ data, getTranslation, language }) {
  return (
    <AboutMeContainer>
      <h2>{getTranslation('aboutMeTitle', language)}</h2>
      <p>{data}</p>
    </AboutMeContainer>
  );
};
