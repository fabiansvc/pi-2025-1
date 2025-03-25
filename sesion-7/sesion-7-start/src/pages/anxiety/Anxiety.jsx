import { Canvas } from "@react-three/fiber";
import Lights from "../anxiety/lights/Lights";
import Staging from "../anxiety/staging/Staging";
import { Perf } from "r3f-perf";
import Student from "./models-3d/Student";
import Controls from "./controls/Controls";

const Anxiety = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }} shadows>
      <Perf />
      <Controls />
      <Lights />
      <Staging />
      <Student />
    </Canvas>
  );
};

export default Anxiety;
