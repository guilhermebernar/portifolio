import styled from 'styled-components';

const ProjectsContainer = styled.section`
  margin: 3rem 0;

  @media (max-width: 768px) {
  h2{
    font-size: 22px;
  }
}

`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 20px;
    p{
      font-size: 16px;
    }
  }
`;

const ProjectSubTitleLink = styled.a`
  color: white;
  text-decoration: none;
  

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

const ProjectLink = styled.a`
  color: white;
  text-decoration: none;
  

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    font-weight: bold;
  }
`;

const ProjectThumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  margin-top: 8px;
`;


export default function RecentProjects({
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
              <ProjectItem
                key={projIndex}
                style={experience.type === 'education' ? { borderLeft: '5px solid #ccc !important; padding-left: 10px'} : {}}
              >
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