import { motion, useReducedMotion } from "framer-motion";
import { FaDiscord, FaArrowDown } from "react-icons/fa";
import styles from "./Hero.module.css";

const Hero = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.copy}
          initial={reducedMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.55, delay: 0.08 }}
        >
          <p className={styles.eyebrow}>
            <span aria-hidden="true" /> Official Discord community
          </p>
          <h1 className={styles.title} id="hero-title">
            <span className={styles.titleWord}>Caster</span>
            <span className={styles.crossLine} aria-hidden="true">
              <span />×<span />
            </span>
            <span className={styles.titleWord}>Legion</span>
          </h1>
          <p className={styles.description}>
            Meet players, talk about the games you love, and find your place in
            the CASTER X LEGION community.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primaryAction}
              href="https://discord.gg/NvwectuqMh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord aria-hidden="true" />
              <span>Enter the Discord</span>
            </a>
            <a className={styles.secondaryAction} href="#about">
              Explore the community
              <span aria-hidden="true">↘</span>
            </a>
          </div>
          <div className={styles.heroNote}>
            <span>FPS</span>
            <span>MOBA</span>
            <span>More games, more people</span>
          </div>
        </motion.div>

        <motion.div
          className={styles.art}
          initial={reducedMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.7, delay: 0.16 }}
        >
          <div className={styles.artLight} aria-hidden="true" />
          <img
            className={styles.crest}
            src="/CASTER.png"
            alt="CASTER dragon crest"
            width="933"
            height="933"
            fetchPriority="high"
            loading="eager"
            decoding="async"
          />
          <div className={styles.artCaption}>
            <span>CASTER X LEGION</span>
            <span>Community / Discord</span>
          </div>
        </motion.div>
      </div>
      <a className={styles.scrollCue} href="#about">
        <span>Scroll to explore</span>
        <FaArrowDown aria-hidden="true" />
      </a>
    </section>
  );
};

export default Hero;
