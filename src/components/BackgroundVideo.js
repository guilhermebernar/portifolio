import { VideoContainer } from "@/style/components/BackgroundVideo";
import BackgroundVideoFile from "@/app/assets/videos/background.mp4";

export const BackgroundVideo = () => (
  <VideoContainer>
    <video src={BackgroundVideoFile}  autoPlay loop muted playsInline/>
  </VideoContainer>
);
