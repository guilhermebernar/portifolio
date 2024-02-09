// components/Contact.js
import styled from 'styled-components';

const Section = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
`;

const ContactLink = styled.a`
  color: white;
  text-decoration: none;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  &:hover, &:focus {
    text-decoration: underline;
  }
`;

export default function Contact({ data, getTranslation, language }) {
  return (
    <Section>
      {/* <h2>{getTranslation('contactTitle', language)}</h2> */}
      <div>
        <strong>{getTranslation('phone', language)}: </strong> 
        <ContactLink href={`https://wa.me/${data.phone}`} target="_blank" rel="noopener noreferrer">
          {data.phone} 🔗
        </ContactLink>
      </div>
      <div>
        <strong>{getTranslation('email', language)}: </strong> 
        <ContactLink href={`mailto:${data.email}`} target="_blank" rel="noopener noreferrer">
          {data.email} 🔗
        </ContactLink>
      </div>
      <div>
        <strong>{getTranslation('github', language)}: </strong> 
        <ContactLink href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer">
          {data.github} 🔗
        </ContactLink>  
      </div>
    </Section>
  );
};
