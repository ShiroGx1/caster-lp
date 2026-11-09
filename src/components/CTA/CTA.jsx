import { motion, useReducedMotion } from "framer-motion";
import { FaDiscord } from "react-icons/fa";
import styles from "./CTA.module.css";

const CTA = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.cta} id="join" aria-labelledby="join-title">
      <div className={`container ${styles.container}`}>
        <motion.div
          className={styles.panel}
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.45 }}
        >
          <span className={styles.backdropMark} aria-hidden="true">×</span>
          <div className={styles.copy}>
            <p className={styles.kicker}>Your place is waiting</p>
            <h2 id="join-title">Join CASTER X LEGION.</h2>
            <p>Open the Discord invite and meet the community.</p>
          </div>
          <a
            className={styles.joinButton}
            href="https://discord.gg/NvwectuqMh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord aria-hidden="true" />
            <span>Open Discord invite</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
