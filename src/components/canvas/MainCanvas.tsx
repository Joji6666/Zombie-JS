import { Canvas } from "@react-three/fiber";
import "../../App.css";

const MainCanvas = () => {
  return (
    <Canvas camera={{ fov: 45 }}>
      <div className="container">
        <div className="aim"></div>
      </div>
    </Canvas>
  );
};

export default MainCanvas;
