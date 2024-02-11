import { SectionTitle, SkillCard, SkillItem, SkillTitle, SkillsContainer, SkillsList } from "@/style/components/Skills";


export default function Skills({ softSkills, hardSkills, getTranslation, language }) {
  return (
    <SkillsContainer>
      <SectionTitle>{getTranslation('softSkillsTitle', language)}</SectionTitle>
      <SkillsList>
        {softSkills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillTitle>{getTranslation(skill.title, language)}</SkillTitle>
            {skill.text}
          </SkillCard>
        ))}
      </SkillsList>

      <SectionTitle>{getTranslation('hardSkillsTitle', language)}</SectionTitle>
      <SkillsList>
        {Object.entries(hardSkills).map(([category, skills], index) => (
          <SkillCard key={category}>
            <SkillTitle>{getTranslation(category, language)}</SkillTitle>
            {skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex}>{skill}</SkillItem>
            ))}
          </SkillCard>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

