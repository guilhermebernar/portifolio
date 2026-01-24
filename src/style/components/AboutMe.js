import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutIntro = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: #a0a0a0;
  margin-bottom: 3rem;
`;

export const FocusSection = styled.div`
  background-color: #111111;
  border-radius: 12px;
  padding: 2rem;
`;

export const FocusTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #7781ff;
  margin-bottom: 1.5rem;
`;

export const FocusList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const FocusItem = styled.li`
  font-size: 1rem;
  color: #ffffff;
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.5rem;
    width: 6px;
    height: 6px;
    background-color: #7781ff;
    border-radius: 50%;
  }
`;
