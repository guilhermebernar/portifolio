// components/AboutMe.js

export default function AboutMe({ data, getTranslation, language }) {
  return (
    <section>
      <h2>{getTranslation('aboutMeTitle', language)}</h2>
      <p>{data}</p>
    </section>
  );
};