/* eslint-disable react/no-unknown-property */
import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lung from "./models-3d/Lung";

const Home = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }}>
      <OrbitControls target={[0, 1, 0]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 10]} intensity={2} />
      <Lung scale={5} />
    </Canvas>
  );
};

export default Home;
