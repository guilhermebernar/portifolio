import styled from 'styled-components';

export const SectionTitle = styled.h2`
  text-align: center;
  margin: 20px 0;
  font-size: 24px;
`;

export const SkillsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(220deg, rgba(119, 129, 255, 0.68), rgba(223, 119, 255, 1));
  border-radius: 10px;
  padding: 20px;
  gap: 1rem;
  margin-bottom: 3rem;
`;


export const SkillCard = styled.div`
  display: flex;
  background: #003C7E;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 220px;
  font-size: 10px;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;

  &:hover {
    background: #0152AB;
  }
  @media (max-width: 768px) {
    width: 100%;
    min-width: 65%;
  }
  @media (min-width: 768px) {
    flex: 0 1 calc(25% - 20px);
    width: 100% !important;
    font-size: 12px;
    min-height: 160px;
    &:nth-last-child(-n+3) {
      flex-basis: calc(33.333% - 20px);
    }
  }
`;

export const SkillTitle = styled.strong`
    background-image: linear-gradient(120deg, rgba(119, 129, 255, 0.68), rgba(223, 119, 255, 0.68));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

export const SkillItem = styled.li`
  border-radius: 5px;
  font-size: 10px;
  line-height: 1.5;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;