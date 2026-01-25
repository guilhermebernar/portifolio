import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(10, 10, 10, 0.95) 0%,
    rgba(30, 30, 40, 0.95) 50%,
    rgba(119, 129, 255, 0.15) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.4),
              0 1px 0 rgba(119, 129, 255, 0.1);
  border-bottom: 1px solid rgba(119, 129, 255, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
`;
