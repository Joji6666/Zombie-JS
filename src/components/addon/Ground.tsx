import React from "react";
import * as THREE from "three";
import floorTexture from "/source/ground.png";
import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
const Ground = () => {
  const texture = useTexture(floorTexture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  return (
    <RigidBody>
      <mesh position={[0, -5, 0]} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[500, 500]} />
        <meshStandardMaterial
          color="gray"
          map={texture}
          map-repeat={[100, 100]}
        />
      </mesh>
    </RigidBody>
  );
};

export default Ground;
