import { PointerLockControls, Sky } from "@react-three/drei";
import "./App.css";
import Ground from "./components/addon/Ground";
import { Physics, RigidBody } from "@react-three/rapier";
import Player from "./components/addon/Player";

function App() {
  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={2.5} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <RigidBody>
          <mesh position={[0, 3, -5]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}

export default App;
