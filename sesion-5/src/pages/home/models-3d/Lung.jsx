import { useGLTF } from "@react-three/drei";
import React from "react";

const Lung = (props) => {
  const { nodes, materials } = useGLTF("/models-3d/lung.glb");

  console.log(materials);

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Lung.geometry} material={materials.LungMaterial} />
    </group>
  );
};

export default Lung;

useGLTF.preload("/models-3d/lung.glb");
