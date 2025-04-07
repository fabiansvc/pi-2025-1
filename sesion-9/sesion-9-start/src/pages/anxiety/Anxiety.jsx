import { Canvas } from "@react-three/fiber";
import Lights from "../anxiety/lights/Lights";
import Staging from "../anxiety/staging/Staging";
import { Perf } from "r3f-perf";
import Student from "./models-3d/Student";
import Controls from "./controls/Controls";
import { Tree } from "./models-3d/Tree";
import Grass from "./models-3d/Grass";
import "./Anxiety.css";
import Title from "./texts/Title";
import { Html, PositionalAudio } from "@react-three/drei";
import useStudentStore from "../../stores/use-student-store";
import { useCallback, useRef } from "react";

const Anxiety = () => {
  const { setCurrentAnimation } = useStudentStore();
  const audioRef = useRef();

  const handleClick = useCallback(() => {
    setCurrentAnimation("Agony");
    audioRef.current.play();
    audioRef.current.setVolume(10);
  }, [setCurrentAnimation, audioRef]);

  return (
    <Canvas camera={{ position: [0, 1, 2] }} shadows>
      <Html center>
        <button onClick={handleClick}>{"¿Cómo te sientes?"}</button>
      </Html>
      <PositionalAudio
        position={[0, 1, 0]}
        ref={audioRef}
        loop={false}
        url="/sounds/crying.mp3"
        distance={5}
      />
      <Perf />
      <Controls />
      <Lights />
      <Staging />
      <Student />
      <Tree position-z={-2} />
      <Grass />
      <Title title={"Ansiedad"} />
    </Canvas>
  );
};

export default Anxiety;
