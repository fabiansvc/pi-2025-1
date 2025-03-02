/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./Home.css";
import { OrbitControls } from "@react-three/drei";
import Heart from "./models-3d/Heart";
import Floor from "./models-3d/Floor";

const Home = () => {
  return (
    <Canvas camera={{ position: [2, 0, 5] }}>
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 10]} intensity={2} />
      <Heart scale={0.001} />
      <Floor />
    </Canvas>
  );
};

export default Home;
