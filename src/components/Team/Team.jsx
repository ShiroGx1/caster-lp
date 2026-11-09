import { motion, useReducedMotion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import styles from "./Team.module.css";

const members = [
  {
    name: "Shirocore",
    role: "Founder & Owner",
    socials: [
      {
        name: "Instagram",
        icon: <FaInstagram />,
        href: "https://www.instagram.com/shirro_c?igsh=MTA0cjBpZHRkaDR2dg%3D%3D&utm_source=qr",
      },
      { name: "TikTok", icon: <FaTiktok />, href: "https://www.tiktok.com/@shirox_g" },
    ],
  },
  {
    name: "Wangsap",
    role: "Co-Owner",
    socials: [
      {
        name: "TikTok",
        icon: <FaTiktok />,
        href: "https://www.tiktok.com/@muflih_og?_r=1&_t=ZS-98hmG2qaaAr",
      },
      {
        name: "Instagram",
        icon: <FaInstagram />,
        href: "https://www.instagram.com/wangsap_og?igsh=MW1kY2lkYjFtdTBtdQ==",
      },
    ],
  },
  {
    name: "Kuroneko",
    role: "Head Admin",
    socials: [
      {
        name: "TikTok",
        icon: <FaTiktok />,
        href: "https://www.tiktok.com/@kuroxnight?_r=1&_t=ZS-98hmXQ8Nf6",
      },
      {
        name: "Instagram",
        icon: <FaInstagram />,
        href: "https://www.instagram.com/kuroshiki.7?igsh=ZGN1emo0aTdyOGxs",
      },
    ],
  },
  {
    name: "ICIBOSS",
    role: "TikTok streamer",
    socials: [
      { name: "TikTok", icon: <FaTiktok />, href: "https://www.tiktok.com/@icibossplayz" },
      {
        name: "Instagram",
        icon: <FaInstagram />,
        href: "https://www.instagram.com/prasetyoyogi_9",
      },
    ],
  },
];

const Team = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className={styles.team} id="team" aria-labelledby="team-title">
      <div className={`container ${styles.container}`}>
        <div className={styles.heading}>
          <p className={styles.kicker}>03 / The people</p>
          <h2 id="team-title">Meet the team.</h2>
          <p>The names behind CASTER X LEGION.</p>
        </div>

        <ol className={styles.roster}>
          {members.map((member, index) => (
            <motion.li
              className={styles.member}
              key={member.name}
              initial={reducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={reducedMotion ? { duration: 0 } : { duration: 0.35, delay: index * 0.05 }}
            >
              <span className={styles.memberNumber} aria-hidden="true">0{index + 1}</span>
              <div className={styles.identity}>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
              <nav className={styles.socials} aria-label={`${member.name} social profiles`}>
                {member.socials.map((social) => (
                  <a
                    className={styles.socialLink}
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${social.name}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </nav>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Team;
