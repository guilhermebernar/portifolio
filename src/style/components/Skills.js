import styled from 'styled-components';

export const SkillsContainer = styled.section`
  padding: 4rem 0;
`;

export const SkillsTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const SkillCard = styled.div`
  background-color: #111111;
  border-radius: 12px;
  padding: 1.5rem;
`;

export const SkillCardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #7781ff;
  margin-bottom: 1rem;
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const SkillItem = styled.li`
  font-size: 0.875rem;
  color: #a0a0a0;
  background-color: #1a1a1a;
  padding: 0.375rem 0.75rem;
  border-radius: 6px;
  transition: color 0.2s ease;

  &:hover {
    color: #ffffff;
  }
`;
