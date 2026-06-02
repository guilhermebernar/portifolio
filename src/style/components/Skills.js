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
  background: linear-gradient(180deg, rgba(17, 17, 17, 0.96), rgba(14, 14, 18, 0.96));
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.25);
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
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.875rem;
  color: #d8d8e0;
  background-color: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.45rem 0.75rem;
  border-radius: 6px;
  min-height: 2.15rem;
  transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

  &:hover {
    color: #ffffff;
    border-color: rgba(119, 129, 255, 0.45);
    background-color: rgba(119, 129, 255, 0.1);
  }
`;

export const SkillIcon = styled.img`
  width: 1rem;
  height: 1rem;
  object-fit: contain;
`;
