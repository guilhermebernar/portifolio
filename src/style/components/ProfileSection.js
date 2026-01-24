import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
  padding: 2rem;
  gap: 1.5rem;

  @media (max-width: 768px) {
    min-height: 70vh;
    padding: 1.5rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, #7781ff, #a78bfa);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #a0a0a0;
  max-width: 700px;
  line-height: 1.7;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeroCTA = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background-color: #7781ff;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #8a93ff;
    transform: translateY(-2px);
    color: #ffffff;
  }
`;

export const HeroCTASecondary = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.875rem 2rem;
  background-color: transparent;
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid #333333;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #7781ff;
    color: #7781ff;
  }
`;
