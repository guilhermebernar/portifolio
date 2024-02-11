import styled from 'styled-components';

export const ContactContainer = styled.section`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem; 
`;

export const ContactLink = styled.a`
  color: white;
  text-decoration: none;

  @media (max-width: 767px) {
    font-size: 12px;
  }

  &:hover, &:focus {
    text-decoration: underline;
  }
`;