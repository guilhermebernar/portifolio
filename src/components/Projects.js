import { ProjectItem, ProjectLink, ProjectSubTitleLink, ProjectThumbnail, ProjectsContainer, ProjectsGrid } from "@/style/components/Project";
import Image from 'next/image';

export default function Projects({
  experiences,
  getTranslation,
  language
}) {
  const getImagePath = (thumbnail) => {
    if (!thumbnail) {
      return null;
    }
    try {
      return require(`src/app/assets/images/thumbnail/${thumbnail}`).default;
    } catch (e) {
      console.error(`Cannot find image: ${thumbnail}`);
      return null;
    }
  };

  return (
    <ProjectsContainer>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h2>{experience.type === 'agency' ?
            getTranslation('agencyProjects', language) :
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
                {project.thumbnail && getImagePath(project.thumbnail) && (
                  <ProjectThumbnail>
                    <Image
                      src={getImagePath(project.thumbnail)}
                      alt={project.name}
                      width={500}
                      height={300}
                      unoptimized={true}
                      layout="responsive"
                    />
                  </ProjectThumbnail>
                )}
              </ProjectItem>
            ))}
          </ProjectsGrid>
        </div>
      ))}
    </ProjectsContainer>
  );
}
