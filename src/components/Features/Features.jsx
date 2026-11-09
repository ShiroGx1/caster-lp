import { motion, useReducedMotion } from "framer-motion";
import { FaCheck, FaMusic, FaShieldHalved, FaTrophy } from "react-icons/fa6";
import styles from "./Features.module.css";

const supportFeatures = [
  {
    number: "02",
    icon: <FaTrophy />,
    title: "Leveling & rewards",
    description: "Earn XP through chat and play, then unlock roles and channels.",
    details: ["XP-based leveling", "Role rewards", "Leaderboards"],
  },
  {
    number: "03",
    icon: <FaMusic />,
    title: "Music & events",
    description: "Music bots, movie nights, game nights, and karaoke channels.",
    details: ["Music channels", "Movie and game nights", "Karaoke"],
  },
];

const Features = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.features} id="features" aria-labelledby="features-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>02 / Inside the server</p>
          <h2 id="features-title">Tools for the way you play.</h2>
          <p>From moderation to music, the server has room for more than one match.</p>
        </div>

        <div className={styles.layout}>
          <motion.article
            className={styles.leadFeature}
            initial={reducedMotion ? false : { opacity: 0, x: -16 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.45 }}
          >
            <div className={styles.leadTop}>
              <span className={styles.number}>01 / SAFETY</span>
              <span className={styles.icon} aria-hidden="true"><FaShieldHalved /></span>
            </div>
            <h3>Moderation that protects the space.</h3>
            <p>
              Anti-raid tools, member verification, and a moderation team help
              keep the server in order.
            </p>
            <ul className={styles.checkList}>
              {["Anti-raid bot protection", "Verified member system", "Active moderation"].map((item) => (
                <li key={item}><FaCheck aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </motion.article>

          <div className={styles.supportFeatures}>
            {supportFeatures.map((feature) => (
              <motion.article
                className={styles.supportFeature}
                key={feature.number}
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={reducedMotion ? { duration: 0 } : { duration: 0.4 }}
              >
                <div className={styles.supportTop}>
                  <span className={styles.number}>{feature.number}</span>
                  <span className={styles.icon} aria-hidden="true">{feature.icon}</span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className={styles.detailList}>
                  {feature.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
