// components/Skills.js

export default function Skills({ softSkills, hardSkills, getTranslation, language }) {

  const renderHardSkills = (skillsObject) => {
    return Object.entries(skillsObject).map(([category, skills]) => (
      <div key={category}>
        <h3>{getTranslation(category, language)}</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{getTranslation(skill, language)}</li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <section>
      <h2>{getTranslation('softSkillsTitle', language)}</h2>
      <ul>
        {softSkills.map((skill, index) => (
          <li key={index}>
            <strong>{getTranslation(skill.title, language)}</strong>: {skill.text}
          </li>
        ))}
      </ul>

      <h2>{getTranslation('hardSkillsTitle', language)}</h2>
      {renderHardSkills(hardSkills)}
    </section>
  );
};
