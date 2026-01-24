import {
  CasesContainer,
  CasesTitle,
  CaseCard,
  CaseTitle,
  CaseSection,
  CaseSectionTitle,
  CaseSectionText,
  CaseTags,
  CaseTag,
  ArchiveSection,
  ArchiveLink
} from "@/style/components/Project";

export default function Projects({ cases, archiveProjects, getTranslation, language }) {
  return (
    <CasesContainer id="casos">
      <CasesTitle>{getTranslation('casesTitle', language)}</CasesTitle>

      {cases.map((caseItem, index) => (
        <CaseCard key={caseItem.id || index}>
          <CaseTitle>{caseItem.title}</CaseTitle>

          <CaseSection>
            <CaseSectionTitle>{getTranslation('problem', language)}</CaseSectionTitle>
            <CaseSectionText>{caseItem.problem}</CaseSectionText>
          </CaseSection>

          <CaseSection>
            <CaseSectionTitle>{getTranslation('solution', language)}</CaseSectionTitle>
            <CaseSectionText>{caseItem.solution}</CaseSectionText>
          </CaseSection>

          <CaseSection>
            <CaseSectionTitle>{getTranslation('result', language)}</CaseSectionTitle>
            <CaseSectionText>{caseItem.result}</CaseSectionText>
          </CaseSection>

          <CaseTags>
            {caseItem.tags.map((tag, tagIndex) => (
              <CaseTag key={tagIndex}>{tag}</CaseTag>
            ))}
          </CaseTags>
        </CaseCard>
      ))}

      {archiveProjects && (
        <ArchiveSection>
          <span>{getTranslation('archiveTitle', language)}: </span>
          <ArchiveLink href={archiveProjects.link} target="_blank" rel="noopener noreferrer">
            {archiveProjects.title} ({archiveProjects.source})
          </ArchiveLink>
        </ArchiveSection>
      )}
    </CasesContainer>
  );
}
