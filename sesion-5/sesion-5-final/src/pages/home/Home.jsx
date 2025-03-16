import "./Home.css";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  //BakeShadows,
  //ContactShadows,
  OrbitControls,
  //SoftShadows,
} from "@react-three/drei";
import Lung from "./models-3d/Lung";
import Recipient from "./models-3d/Recipient";
import Lights from "./lights/Lights";
import Staging from "./staging/Staging";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [0, 1, 2] }} shadows={true}>
        <Perf />
        <OrbitControls target={[0, 1, 0]} />
        <Lights />
        <Staging />
        <Lung scale={5} />
        <Recipient />
        {/* <BakeShadows /> 
          <ContactShadows
            frames={16}
            opacity={1}
            scale={20}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          /> 
          <SoftShadows size={20} samples={4} focus={2} />*/}
      </Canvas>
    </Suspense>
  );
};

export default Home;
