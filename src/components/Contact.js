import {
  ContactContainer,
  ContactTitle,
  ContactLinks,
  ContactLink,
  ContactIcon
} from "@/style/components/Contact";

export default function Contact({ data, getTranslation, language }) {
  return (
    <ContactContainer>
      <ContactTitle>{getTranslation('contactTitle', language)}</ContactTitle>
      <ContactLinks>
        <ContactLink href={`mailto:${data.email}`}>
          <ContactIcon>@</ContactIcon>
          {data.email}
        </ContactLink>
        <ContactLink
          href={`https://linkedin.com/in/${data.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon>in</ContactIcon>
          {getTranslation('linkedin', language)}
        </ContactLink>
        <ContactLink
          href={`https://github.com/${data.github}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ContactIcon>&lt;/&gt;</ContactIcon>
          {getTranslation('github', language)}
        </ContactLink>
      </ContactLinks>
    </ContactContainer>
  );
}
