/* eslint-disable react/no-unknown-property */
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Heart = (props) => {
  const heartRef = useRef();
  const { nodes, materials, animations } = useGLTF(
    "models-3d/beating-heart.glb"
  );
  const { actions } = useAnimations(animations, heartRef);

  useEffect(() => {
    console.log(actions);
    actions?.Scene.play();
  }, [actions]);

  return (
    <group ref={heartRef} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="1d123603c6594b95a9ca5611bfa3cbc7fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="heart_2">
                  <mesh
                    name="0"
                    geometry={nodes["0"].geometry}
                    material={materials.heart}
                    morphTargetDictionary={nodes["0"].morphTargetDictionary}
                    morphTargetInfluences={nodes["0"].morphTargetInfluences}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Heart;

useGLTF.preload("models-3d/beating-heart.glb");
