import { motion } from "framer-motion";
import { FaCrown, FaStar, FaGavel, FaWandMagicSparkles } from "react-icons/fa6";
import { FaTiktok, FaInstagram, FaSteam } from "react-icons/fa";
import teamData from "./teamData.js";
import riotLogo from "../assets/images/Riot.png";
import styles from "../components/Team/Team.module.css";

const avatarIcons = {
  crown: <FaCrown />,
  star: <FaStar />,
  gavel: <FaGavel />,
  wand: <FaWandMagicSparkles />,
};

const socialIcons = {
  tiktok: <FaTiktok />,
  instagram: <FaInstagram />,
  steam: <FaSteam />,
};

const Team = () => (
  <section
    id="team"
    style={{ padding: "100px 0", position: "relative", zIndex: 1 }}
  >
    <div className="container">
      <div className="section-header">
        <span className="section-tag">OUR TEAM</span>
        <h2 className="section-title">
          Meet the <span className="gradient-text">Legends</span>
        </h2>
        <p className="section-subtitle">
          The dedicated team behind CASTER X LEGION.
        </p>
      </div>

      <div className={styles.grid}>
        {teamData.map((m, i) => (
          <motion.div
            key={m.name}
            className={styles.card}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className={styles.avatar}>
              <div className={styles.ring} />
              <div className={styles.img}>{avatarIcons[m.icon]}</div>
              <div className={`${styles.status} ${styles[m.status]}`} />
            </div>
            <h3 className={styles.name}>{m.name}</h3>
            <span className={styles.role}>{m.role}</span>
            <p className={styles.desc}>{m.desc}</p>
            <div className={styles.socials}>
              {m.socials.map((s, j) => (
                <a
                  key={j}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className={styles.socialLink}
                >
                  {s.type === "riot" ? (
                    <img
                      src={riotLogo}
                      alt="Riot"
                      style={{ width: 16, height: 16 }}
                    />
                  ) : (
                    socialIcons[s.type]
                  )}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Team;
