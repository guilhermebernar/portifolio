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
    opacity: ${props => props.$isLoaded ? 0.6 : 0};
    transition: opacity 1s ease-in-out;
  }
`;
