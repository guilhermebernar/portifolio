import styled from 'styled-components';

export const ProjectsContainer = styled.section`
  margin: 3rem 0;

  @media (max-width: 768px) {
  h2{
    font-size: 22px;
  }
}

`

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectItem = styled.li`
  list-style: none;
  margin-bottom: 16px;
  @media (max-width: 768px) {
    font-size: 20px;
    p{
      font-size: 16px;
    }
  }
`;

export const ProjectSubTitleLink = styled.a`
  color: white;
  text-decoration: none;
  

  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`

export const ProjectLink = styled.a`
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

export const ProjectThumbnail = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  margin-top: 8px;
`;