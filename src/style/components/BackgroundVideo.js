import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1000;
  background-color: #0a0a0a;
  overflow: hidden;
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 25% 10%, rgba(119, 129, 255, 0.12), transparent 28rem),
      linear-gradient(180deg, rgba(10, 10, 10, 0.65), rgba(10, 10, 10, 0.98));
  }

  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
    opacity: 0.28;
  }

  @media (max-width: 768px), (prefers-reduced-motion: reduce) {
    video {
      display: none;
    }
  }
`;
