import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 78vh;
  padding: 2rem;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 5rem 1rem 3rem;
  }
`;

export const HeroImageContainer = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 20px 70px rgba(119, 129, 255, 0.18);
  background-color: rgba(255, 255, 255, 0.04);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 920px;
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(120deg, #f5f7ff, #9aa2ff 42%, #69d7c7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  -webkit-text-fill-color: transparent;
  max-width: 900px;
  line-height: 1.3;
  text-wrap: balance;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #d9dbe7;
  max-width: 700px;
  line-height: 1.7;
  text-wrap: balance;

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
  background: linear-gradient(135deg, #7781ff, #5fc7b8);
  color: #ffffff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 12px 34px rgba(119, 129, 255, 0.25);

  &:hover {
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
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border-color: #7781ff;
    color: #7781ff;
  }
`;
