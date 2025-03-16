import "./Home.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lung from "./models-3d/Lung";
import Recipient from "./models-3d/Recipient";

const Home = () => {
  return (
    <Canvas camera={{ position: [0, 1, 2] }}>
      <OrbitControls target={[0, 1, 0]} />
      <Lung scale={5} />
      <Recipient />
    </Canvas>
  );
};

export default Home;
