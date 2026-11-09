import { motion, useReducedMotion } from "framer-motion";
import { FaCode, FaGamepad, FaUsers } from "react-icons/fa";
import styles from "./About.module.css";

const pillars = [
  {
    icon: <FaGamepad />,
    title: "Find a squad",
    text: "Meet teammates across FPS, MOBA, and other games.",
  },
  {
    icon: <FaUsers />,
    title: "Make it social",
    text: "Share what you play and get to know the people in the server.",
  },
  {
    icon: <FaCode />,
    title: "Useful server tools",
    text: "Bots support leveling, moderation, and music.",
  },
];

const About = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>01 / The community</p>
          <h2 id="about-title">
            A home base
            <br />
            <span>between matches.</span>
          </h2>
        </div>
        <div className={styles.intro}>
          <p className={styles.lead}>
            CASTER X LEGION is a Discord community for gamers and creators.
          </p>
          <p>
            Find people for your next game, talk about what you play, and get to
            know the team behind the server.
          </p>
        </div>

        <div className={styles.pillars}>
          {pillars.map((pillar, index) => (
            <motion.article
              className={styles.pillar}
              key={pillar.title}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.4, delay: index * 0.08 }}
            >
              <span className={styles.pillarIndex}>0{index + 1}</span>
              <span className={styles.pillarIcon} aria-hidden="true">
                {pillar.icon}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
