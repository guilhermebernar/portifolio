import {
  SkillsContainer,
  SkillsTitle,
  SkillsGrid,
  SkillCard,
  SkillCardTitle,
  SkillsList,
  SkillItem
} from "@/style/components/Skills";

export default function Skills({ skills, getTranslation, language }) {
  return (
    <SkillsContainer>
      <SkillsTitle>{getTranslation('skillsTitle', language)}</SkillsTitle>
      <SkillsGrid>
        {Object.entries(skills).map(([key, cluster]) => (
          <SkillCard key={key}>
            <SkillCardTitle>{cluster.title}</SkillCardTitle>
            <SkillsList>
              {cluster.items.map((item, index) => (
                <SkillItem key={index}>{item}</SkillItem>
              ))}
            </SkillsList>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
}
