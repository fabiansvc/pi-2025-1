import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef } from "react";

const Ball = (props) => {
  const ballRBRef = useRef();

  const handleBall = useCallback(
    (e) => {
      e.stopPropagation();
      ballRBRef.current.applyImpulse({ x: 0, y: 0, z: -1 }, true);
    },
    [ballRBRef]
  );

  useFrame(() => {
    ballRBRef.current.setAngvel(
      {
        x: 0,
        y: 2,
        z: 0,
      },
      true
    );
  });

  return (
    <RigidBody
      {...props}
      name="ballRB"
      onCollisionEnter={({ manifold, target, other }) => {
        console.log(
          "Collision at world position ",
          manifold.solverContactPoint(0)
        );

        if (other.rigidBodyObject) {
          console.log(
            // this rigid body's Object3D
            target.rigidBodyObject.name,
            " collided with ",
            // the other rigid body's Object3D
            other.rigidBodyObject.name
          );
        }
      }}
      onCollisionExit={() => console.log("Collision exit")}
      mass={75}
      gravityScale={0.1}
      friction={0}
      restitution={0}
      ref={ballRBRef}
      colliders="ball"
    >
      <mesh onClick={handleBall}>
        <sphereGeometry args={[0.5, 32]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
    </RigidBody>
  );
};

export default Ball;
