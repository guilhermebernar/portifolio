import styled from 'styled-components';

export const CasesContainer = styled.section`
  padding: 4rem 0;
  scroll-margin-top: 2rem;
`;

export const CasesTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 2.5rem;
  text-align: center;
`;

export const CaseCard = styled.article`
  background-color: #111111;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const CaseTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #7781ff;
  margin-bottom: 1.5rem;
`;

export const CaseSection = styled.div`
  margin-bottom: 1.25rem;

  &:last-of-type {
    margin-bottom: 1.5rem;
  }
`;

export const CaseSectionTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #a0a0a0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: 0.5rem;
`;

export const CaseSectionText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  margin: 0;
`;

export const CaseTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const CaseTag = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: #7781ff;
  background-color: rgba(119, 129, 255, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(119, 129, 255, 0.2);
`;

export const ArchiveSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #222222;
  text-align: center;
  color: #a0a0a0;
  font-size: 0.875rem;
`;

export const ArchiveLink = styled.a`
  color: #7781ff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #8a93ff;
    text-decoration: underline;
  }
`;
