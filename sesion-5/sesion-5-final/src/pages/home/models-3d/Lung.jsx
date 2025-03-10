import { useGLTF } from "@react-three/drei";

const Lung = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/lung.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Lung.geometry}
        material={materials.LungMaterial}
        castShadow
      />
    </group>
  );
};

export default Lung;

useGLTF.preload("/models-3d/lung.glb");
