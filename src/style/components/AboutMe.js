import styled from 'styled-components';

export const AboutContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.85) 0%,
    rgba(17, 17, 17, 0.9) 100%
  );
  border-radius: 16px;
  backdrop-filter: blur(8px);
`;

export const AboutTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const AboutIntro = styled.p`
  font-size: 1.125rem;
  line-height: 1.9;
  color: #e0e0e0;
  margin-bottom: 3rem;
`;

export const FocusSection = styled.div`
  background: linear-gradient(
    135deg,
    rgba(30, 30, 35, 0.8) 0%,
    rgba(20, 20, 25, 0.9) 100%
  );
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(119, 129, 255, 0.1);
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
