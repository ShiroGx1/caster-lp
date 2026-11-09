import { motion } from "framer-motion";
import styles from "./Preloader.module.css";
import logo from "../../assets/images/CASTER.png";

const Preloader = ({ progress, statusText }) => {
  return (
    <motion.div
      className={styles.preloader}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Orbs */}
      <div className={styles.bgEffects}>
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
      </div>

      <div className={styles.content}>
        {/* Logo dengan Fire Ring */}
        <motion.div
          className={styles.logoWrapper}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className={styles.fireRing} />
          <div className={`${styles.fireRing} ${styles.reverse}`} />
          <img src={logo} alt="Caster X Legion" className={styles.logoImg} />
        </motion.div>

        {/* Title */}
        <h1 className={styles.title}>
          <motion.span
            className={styles.word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            CASTER
          </motion.span>

          <motion.span
            className={styles.xMark}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              X
            </motion.span>
          </motion.span>

          <motion.span
            className={styles.word}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            LEGION
          </motion.span>
        </h1>

        {/* Status Text */}
        <p className={styles.status}>{statusText}</p>

        {/* Progress Bar */}
        <div className={styles.progress}>
          <div className={styles.track}>
            <div className={styles.fill} style={{ width: `${progress}%` }} />
            <div
              className={styles.glow}
              style={{ left: `${progress}%`, opacity: progress > 0 ? 1 : 0 }}
            />
          </div>
          <span className={styles.percent}>{Math.floor(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
