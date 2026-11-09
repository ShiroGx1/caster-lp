import { useEffect, useRef } from "react";
import { useMousePosition } from "../../Hooks/useMousePosition.js";
import styles from "./CustomCursor.module.css";

const CustomCursor = () => {
  const position = useMousePosition();
  const ringRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let rafId;
    const animate = () => {
      ringPos.current.x += (position.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (position.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x - 20}px`;
        ringRef.current.style.top = `${ringPos.current.y - 20}px`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [position]);

  if (window.innerWidth <= 768) return null;

  return (
    <>
      <div
        className={styles.dot}
        style={{ left: position.x - 4, top: position.y - 4 }}
      />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
};

export default CustomCursor;
