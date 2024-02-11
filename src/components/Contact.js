
import { ContactContainer, ContactLink } from "@/style/components/Contact";


export default function Contact({ data, getTranslation, language }) {
  return (
    <ContactContainer>
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
    </ContactContainer>
  );
};
