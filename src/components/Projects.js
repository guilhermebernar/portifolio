import { ProjectItem, ProjectLink, ProjectSubTitleLink, ProjectThumbnail, ProjectsContainer, ProjectsGrid } from "@/style/components/Project";

export default function Projects({
  experiences,
  getTranslation,
  language
}) {
  return (
    <ProjectsContainer>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h2>{experience.type === 'agency' ?
            getTranslation('agencyProjects', language)
            :
            getTranslation('educationalProjects', language)}
          </h2>
          <ProjectSubTitleLink href={experience.link} target="_blank" rel="noopener noreferrer">
            {getTranslation('visitWebsite', language)} {experience.name} 🔗
          </ProjectSubTitleLink>
          <ProjectsGrid>
            {experience.projects.map((project, projIndex) => (
              <ProjectItem key={projIndex}>
                <ProjectLink href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.name}
                </ProjectLink>
                <p>
                  {project.description}
                </p>
                {
                  project.thumbnail && (
                    <ProjectThumbnail src={project.thumbnail} alt={project.name} />
                  )
                }
              </ProjectItem>
            ))}
          </ProjectsGrid>
        </div>
      ))}
    </ProjectsContainer>
  );
}