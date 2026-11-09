import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUsers, FaCircleDot, FaHashtag } from "react-icons/fa6";
import { useCounter } from "../../Hooks/useCounter.js";
import styles from "./Stats.module.css";

const statsData = [
  { icon: <FaUsers />, target: 50, label: "Total Members", barWidth: 85 },
  { icon: <FaCircleDot />, target: 14, label: "Online Now", barWidth: 65 },
  { icon: <FaHashtag />, target: 50, label: "Channels", barWidth: 75 },
];

const StatCard = ({ icon, target, label, barWidth, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { count, start } = useCounter(target);

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.number}>{count}+</div>
      <div className={styles.label}>{label}</div>
      <div className={styles.bar}>
        <div
          className={styles.fill}
          style={{ width: inView ? `${barWidth}%` : "0%" }}
        />
      </div>
    </motion.div>
  );
};

const Stats = () => (
  <section className={styles.stats} id="stats">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">STATISTICS</span>
        <h2 className="section-title">
          Our <span className="gradient-text">Growing</span> Community
        </h2>
      </div>
      <div className={styles.grid}>
        {statsData.map((stat, i) => (
          <StatCard key={i} {...stat} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
