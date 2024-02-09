import styled from "styled-components";

export const VideoContainerLoading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;