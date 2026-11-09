import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import styles from "./BackToTop.module.css";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo(0, 0);
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      className={styles.btn}
      type="button"
      aria-label="Back to top"
      onClick={scrollToTop}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
