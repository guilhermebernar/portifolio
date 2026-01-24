import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
  }
  70% {
    box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
`;

export const WhatsAppContainer = styled.a`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 56px;
  height: 56px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  text-decoration: none;
  opacity: ${props => props.$visible ? 1 : 0};
  pointer-events: ${props => props.$visible ? 'auto' : 'none'};
  animation: ${props => props.$visible ? fadeInUp : 'none'} 0.4s ease-out;
  transition: transform 0.2s ease, opacity 0.3s ease;

  &:hover {
    transform: scale(1.1);
    animation: ${pulse} 1.5s infinite;
  }

  svg {
    width: 28px;
    height: 28px;
    fill: #ffffff;
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 52px;
    height: 52px;

    svg {
      width: 26px;
      height: 26px;
    }
  }
`;
