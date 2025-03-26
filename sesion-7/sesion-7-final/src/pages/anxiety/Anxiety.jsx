import { Canvas } from "@react-three/fiber";
import Lights from "../anxiety/lights/Lights";
import Staging from "../anxiety/staging/Staging";
import { Perf } from "r3f-perf";
import Student from "./models-3d/Student";
import Controls from "./controls/Controls";
import { Tree } from "./models-3d/Tree";
import { useMemo } from "react";
import { KeyboardControls } from "@react-three/drei";

const Anxiety = () => {
  const map = useMemo(
    () => [
      { name: "forward", keys: ["ArrowUp", "KeyW"] },
      { name: "back", keys: ["ArrowDown", "KeyS"] },
      { name: "left", keys: ["ArrowLeft", "KeyA"] },
      { name: "right", keys: ["ArrowRight", "KeyD"] },
      { name: "sleep", keys: ["KeyC"] },
      { name: "jump", keys: ["Space"] },
    ],
    []
  );

  return (
    <KeyboardControls map={map}>
      <Canvas camera={{ position: [0, 1, 2] }} shadows>
        <Perf />
        <Controls />
        <Lights />
        <Staging />
        <Student />
        <Tree position-z={-1} />
      </Canvas>
    </KeyboardControls>
  );
};

export default Anxiety;
