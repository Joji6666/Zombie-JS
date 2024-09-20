import { useEffect, useState } from "react";

export type Key = "KeyW" | "KeyS" | "KeyA" | "KeyD" | "Space";

const usePlayerControls = () => {
  const keys: Record<Key, string> = {
    KeyW: "forward",
    KeyS: "backward",
    KeyA: "left",
    KeyD: "right",
    Space: "jump",
  };

  const moveByKey = (key: Key) => keys[key];

  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  const setMovementStatus = (code: string, status: boolean) => {
    setMovement((prev) => ({ ...prev, [code]: status }));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const code = moveByKey(e.code as Key);

      if (code) {
        setMovementStatus(code, true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const code = moveByKey(e.code as Key);
      if (code) {
        setMovementStatus(code, false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return movement;
};

export default usePlayerControls;
