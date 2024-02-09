import styled from 'styled-components';

const AboutMeContainer = styled.section`
  background: linear-gradient(60deg, rgba(119, 129, 255, 1), rgba(223, 119, 255, 0.58));
  padding: 20px; 
  color: white; 
  line-height: 1.6; 
  border-radius: 8px;
`;

export default function AboutMe({ data, getTranslation, language }) {
  return (
    <AboutMeContainer>
      <h2>{getTranslation('aboutMeTitle', language)}</h2>
      <p>{data}</p>
    </AboutMeContainer>
  );
};
