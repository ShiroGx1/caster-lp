import { useEffect, useState } from "react";

export const useKonamiCode = () => {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    // ↑ ↑ ↓ ↓ ← → ← → B A
    const sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    const code = [];

    const handleKeyDown = (e) => {
      code.push(e.keyCode);
      if (code.length > sequence.length) code.shift();

      if (JSON.stringify(code) === JSON.stringify(sequence)) {
        setActivated(true);
        setTimeout(() => setActivated(false), 2000);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return activated;
};
