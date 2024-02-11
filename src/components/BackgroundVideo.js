import { VideoContainer } from "@/style/components/BackgroundVideo";

export const BackgroundVideo = () => (
  <VideoContainer>
    <video autoPlay loop muted playsInline>
      <source src="/background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </VideoContainer>
);
