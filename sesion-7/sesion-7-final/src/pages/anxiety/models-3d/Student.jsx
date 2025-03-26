import { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useKeyboardControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Student(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models-3d/student.glb");
  const { actions } = useAnimations(animations, group);
  const [currentAction, setCurrentAction] = useState("Happy");

  const [, get] = useKeyboardControls();

  useFrame(() => {
    const { sleep } = get();

    if (sleep) {
      setCurrentAction("Sleeping");
    }

    // eslint-disable-next-line no-unused-vars
    const pressed = get().back;
  });

  useEffect(() => {
    actions[currentAction].fadeIn(0.5).play();
    return () => {
      actions[currentAction].fadeOut(0.5).stop();
    };
  }, [actions, currentAction]);

  const handleStudent = useCallback((e) => {
    e.stopPropagation();
    setCurrentAction("Agony");
  }, []);

  return (
    <group ref={group} {...props} dispose={null} onClick={handleStudent}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="EyeLeft"
            geometry={nodes.EyeLeft.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeLeft.skeleton}
            morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
            castShadow
          />
          <skinnedMesh
            name="EyeRight"
            geometry={nodes.EyeRight.geometry}
            material={materials.Wolf3D_Eye}
            skeleton={nodes.EyeRight.skeleton}
            morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
            morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Body"
            geometry={nodes.Wolf3D_Body.geometry}
            material={materials.Wolf3D_Body}
            skeleton={nodes.Wolf3D_Body.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Hair"
            geometry={nodes.Wolf3D_Hair.geometry}
            material={materials.Wolf3D_Hair}
            skeleton={nodes.Wolf3D_Hair.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Head"
            geometry={nodes.Wolf3D_Head.geometry}
            material={materials.Wolf3D_Skin}
            skeleton={nodes.Wolf3D_Head.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Bottom"
            geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
            material={materials.Wolf3D_Outfit_Bottom}
            skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Footwear"
            geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
            material={materials.Wolf3D_Outfit_Footwear}
            skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Outfit_Top"
            geometry={nodes.Wolf3D_Outfit_Top.geometry}
            material={materials.Wolf3D_Outfit_Top}
            skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
            castShadow
          />
          <skinnedMesh
            name="Wolf3D_Teeth"
            geometry={nodes.Wolf3D_Teeth.geometry}
            material={materials.Wolf3D_Teeth}
            skeleton={nodes.Wolf3D_Teeth.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
            castShadow
          />
          <primitive object={nodes.Hips} />
          <mesh rotation-x={-Math.PI / 2} receiveShadow>
            <circleGeometry args={[32, 32]} />
            <meshStandardMaterial color={0xffe8b9} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models-3d/student.glb");
