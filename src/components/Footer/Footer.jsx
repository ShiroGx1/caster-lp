import { FaDiscord } from "react-icons/fa";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "#about", label: "Community" },
  { href: "#features", label: "Inside the server" },
  { href: "#team", label: "The team" },
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={`container ${styles.container}`}>
      <a className={styles.brand} href="#home" aria-label="CASTER X LEGION, back to top">
        <img src="/CASTER.png" width="933" height="933" alt="" />
        <span>CASTER <b>× LEGION</b></span>
      </a>
      <nav className={styles.navigation} aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <a href={link.href} key={link.href}>{link.label}</a>
        ))}
        <a
          href="https://discord.gg/NvwectuqMh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Discord <FaDiscord aria-hidden="true" />
        </a>
      </nav>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} CASTER X LEGION
      </p>
    </div>
  </footer>
);

export default Footer;
