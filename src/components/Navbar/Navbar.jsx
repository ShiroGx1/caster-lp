import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { useScrollSpy } from "../../Hooks/useScrollSpy.js";
import styles from "./Navbar.module.css";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Community" },
  { href: "#features", label: "Inside the server" },
  { href: "#team", label: "The team" },
];

const sectionIds = navItems.map((item) => item.href.slice(1));

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const reducedMotion = useReducedMotion();
  const menuButtonRef = useRef(null);
  const firstMenuLinkRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLinkRef.current?.focus();
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const menuLinks = document.querySelectorAll("#mobile-navigation a[href]");
        const firstLink = menuLinks[0];
        const lastLink = menuLinks[menuLinks.length - 1];

        if (event.shiftKey && (document.activeElement === firstLink || document.activeElement === menuButtonRef.current)) {
          event.preventDefault();
          (document.activeElement === firstLink ? menuButtonRef.current : lastLink)?.focus();
        } else if (!event.shiftKey && (document.activeElement === lastLink || document.activeElement === menuButtonRef.current)) {
          event.preventDefault();
          (document.activeElement === lastLink ? menuButtonRef.current : firstLink)?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  const closeMenu = () => {
    setMobileOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <motion.nav
      aria-label="Main navigation"
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={reducedMotion ? false : { y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }}
    >
      <div className={styles.container}>
        <a
          className={styles.brand}
          href="#home"
          aria-label="CASTER X LEGION home"
          onClick={() => setMobileOpen(false)}
        >
          <img src="/CASTER.png" alt="" width="933" height="933" />
          <span className={styles.brandName}>
            <span>CASTER</span>
            <span className={styles.brandSecond}>× LEGION</span>
          </span>
        </a>

        <ul className={styles.menu}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className={activeId === item.href.slice(1) ? styles.active : ""}
                href={item.href}
                aria-current={activeId === item.href.slice(1) ? "location" : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className={styles.joinLink}
              href="https://discord.gg/NvwectuqMh"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </a>
          </li>
        </ul>

        <button
          ref={menuButtonRef}
          className={styles.menuToggle}
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls={mobileOpen ? "mobile-navigation" : undefined}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence initial={!reducedMotion}>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            className={styles.mobileMenu}
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reducedMotion ? undefined : { opacity: 0, y: -12 }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.2 }}
          >
            <nav aria-label="Mobile navigation">
              <p className={styles.menuEyebrow}>Find your way in</p>
              <ul>
                {navItems.map((item, index) => (
                  <li key={item.href}>
                    <a
                      ref={index === 0 ? firstMenuLinkRef : undefined}
                      href={item.href}
                      onClick={closeMenu}
                    >
                      <span className={styles.menuIndex}>0{index + 1}</span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                className={styles.mobileJoin}
                href="https://discord.gg/NvwectuqMh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Join the Discord server
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
