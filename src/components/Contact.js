// components/Contact.js

export default function Contact({ data, getTranslation, language }) {
  return (
    <section>
      <h2>{getTranslation('contactTitle', language)}</h2>
      <ul>
        <li>
          <strong>{getTranslation('phone', language)}:</strong> {data.phone}
        </li>
        <li>
          <strong>{getTranslation('email', language)}:</strong> {data.email}
        </li>
        <li>
          <strong>{getTranslation('github', language)}:</strong> 
          <a href={`https://github.com/${data.github}`} target="_blank" rel="noopener noreferrer">
            {data.github}
          </a>
        </li>
      </ul>
    </section>
  );
};