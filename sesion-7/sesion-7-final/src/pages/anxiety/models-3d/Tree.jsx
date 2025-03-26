import { useCallback, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("models-3d/tree.glb");
  const treeRef = useRef();

  const handleTree = useCallback(() => {
    // treeRef.current.children[0].material.color.set(
    //     `hsl(${Math.random() * 360}, 100%, 50%)`
    // )
    treeRef.current.children[0].material.color.setHSL(Math.random(), 1, 0.5);
  }, [treeRef]);

  return (
    <group ref={treeRef} {...props} dispose={null} onClick={handleTree}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_1.geometry}
        material={materials.Leaf}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tree_2.geometry}
        material={materials.Root}
      />
    </group>
  );
}

useGLTF.preload("models-3d/tree.glb");
