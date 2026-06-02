import { VideoContainer } from "@/style/components/BackgroundVideo";

export const BackgroundVideo = () => {
  return (
    <VideoContainer>
      <video
        src="/assets/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        aria-hidden="true"
      />
    </VideoContainer>
  );
};
