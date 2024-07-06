import styled from 'styled-components';

export const VideoContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  z-index: -1000;
  overflow: hidden;
  color: transparent;
  opacity: 0.94 !important;
  
  video {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100vw;
    min-height: 100vh;
    width: auto;
    height: auto;
    object-fit: cover;
  }
  
  @media (orientation: portrait) {
   
    video {
      min-height: 100%;
      min-width: 100%;
      height: 100vh;
      width: auto;
    }
  }

  @media (orientation: landscape) {
   
    video {
      min-width: 100%;
      min-height: 100%;
      width: 100vw;
      height: auto;
    }
  }
`;