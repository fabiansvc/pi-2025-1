import { Canvas } from "@react-three/fiber";
import "./Home.css";
import { useNavigate } from "react-router";
import { Html, OrbitControls, Sky } from "@react-three/drei";
import VideoAnxiety from "./videos/VideoAnxiety";

const Home = () => {
  const navigate = useNavigate();

  return (
      <Canvas camera={{ position: [0, 0, 2] }}>
        <ambientLight />
        <OrbitControls makeDefault />
        <Sky />
        <VideoAnxiety />
        <Html center>
          <h1> Descubre la ansiedad </h1>
          <button onClick={() => navigate("ansiedad")}> Ver más </button>
        </Html>
      </Canvas>
  );
};

export default Home;
