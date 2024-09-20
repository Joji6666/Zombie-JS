import { RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import * as THREE from "three";
import usePlayerControls from "../../util/hooks/usePlayerControls";
import { useFrame } from "@react-three/fiber";

const MOVE_SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

const Player = () => {
  const playerRef = useRef<any>(null);
  const { forward, backward, left, right, jump } = usePlayerControls();

  useFrame(() => {
    if (!playerRef.current) {
      return;
    }

    if (playerRef.current) {
      const velocity = playerRef.current.linvel();

      frontVector.set(0, 0, backward - forward);
      sideVector.set(left - right, 0, 0);
      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(MOVE_SPEED);
      playerRef.current.wakeUp();
      playerRef.current.setLinvel({
        x: direction.x,
        y: velocity.y,
        z: direction.z,
      });
    }
  });

  return (
    <RigidBody position={[0, 1, -2]} ref={playerRef}>
      <mesh>
        <capsuleGeometry args={[0.5, 0.5]} />
      </mesh>
    </RigidBody>
  );
};

export default Player;
