import { MotionConfig } from "framer-motion";
import About from "./components/About/About.jsx";
import BackToTop from "./components/BackToTop/BackToTop.jsx";
import CTA from "./components/CTA/CTA.jsx";
import Features from "./components/Features/Features.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Team from "./components/Team/Team.jsx";

const App = () => {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header>
        <Navbar />
      </header>
      <main id="main-content" tabIndex="-1">
        <Hero />
        <About />
        <Features />
        <Team />
        <CTA />
      </main>
      <Footer />
      <BackToTop />
    </MotionConfig>
  );
};

export default App;
