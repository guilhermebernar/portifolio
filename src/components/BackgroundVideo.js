import { VideoContainer } from "@/style/components/BackgroundVideo";
import { useState } from "react";

export const BackgroundVideo = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <VideoContainer $isLoaded={isLoaded}>
      <video
        src="/assets/videos/background.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
      />
    </VideoContainer>
  );
};
