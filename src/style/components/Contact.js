import styled from 'styled-components';

export const ContactContainer = styled.section`
  padding: 4rem 0;
  text-align: center;
`;

export const ContactTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2rem;
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #a0a0a0;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    color: #7781ff;
  }
`;

export const ContactIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background-color: #111111;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #7781ff;
`;
