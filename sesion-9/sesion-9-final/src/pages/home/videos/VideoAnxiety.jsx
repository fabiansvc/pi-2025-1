import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const VideoAnxiety = () => {
  const texture = useVideoTexture("/videos/anxiety.mp4", {
    muted: true,
    loop: true,
    autoplay: true,
    crossOrigin: "anonymous",
  });

  const [pause, setPause] = useState(false);

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      pause ? texture.image.play() : texture.image.pause();
      setPause(!pause);
    },
    [pause, setPause, texture]
  );

  return (
    <mesh onClick={handleVideo}>
      <planeGeometry args={[4, 2]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default VideoAnxiety;
