import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Canvas } from "@react-three/fiber";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="container">
      <div className="aim"></div>
      <Canvas camera={{ fov: 45 }}>
        <App />
      </Canvas>
    </div>
  </StrictMode>
);
