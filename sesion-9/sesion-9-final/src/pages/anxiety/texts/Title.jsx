import { Center, Float, Text3D } from "@react-three/drei";
import "./Title.css";

const Title = ({ title }) => {
  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Center position={[0, 2, 0]}>
        <Text3D
          font="fonts/alice.json"
          bevelEnabled
          bevelSize={0.01}
          bevelThickness={0.02}
          height={0.01}
          lineHeight={0.8}
          letterSpacing={0.02}
          size={0.3}
        >
          {`Preocupate como trataras la\n    ${title} en el futuro`}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Float>
  );
};

export default Title;
