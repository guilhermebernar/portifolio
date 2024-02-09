import styled from 'styled-components';

const VideoContainer = styled.div`
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
  opacity: 0.5 !important;
  
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
    // Em dispositivos móveis no modo retrato, corta as laterais para manter a seção central
    video {
      min-height: 100%;
      min-width: 100%;
      height: 100vh; // Altura total ajustada à altura do dispositivo móvel
      width: auto;
    }
  }

  @media (orientation: landscape) {
    // Em desktops e dispositivos móveis no modo paisagem, corta as partes superior e inferior se necessário
    video {
      min-width: 100%;
      min-height: 100%;
      width: 100vw; // Largura ajustada à largura da tela
      height: auto;
    }
  }
`;

export const BackgroundVideo = () => (
  <VideoContainer>
    <video autoPlay loop muted playsInline>
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </VideoContainer>
);
