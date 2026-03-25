import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import marsHeroBw from "@/assets/mars-hero-bw.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const scrollDown = () => {
    document.getElementById("launch")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden group/hero">
      {/* Parallax B&W background with hover-to-color */}
      <motion.div className="absolute inset-0 z-0" style={{ y, scale }}>
        <img
          src={marsHeroBw}
          alt="Mars surface in dramatic black and white"
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover/hero:grayscale-0 group-hover/hero:scale-105"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
      </motion.div>

      <motion.div className="relative z-10 text-center px-4 max-w-4xl" style={{ opacity }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-primary tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          An Interactive Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-display text-4xl sm:text-6xl md:text-8xl font-black text-foreground text-glow leading-tight mb-6"
        >
          JOURNEY TO
          <br />
          <span className="text-primary">MARS</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="font-body text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Embark on humanity's greatest adventure. From Earth's launchpad to the red
          deserts of Mars — scroll to explore every stage of the voyage.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollDown}
          className="group relative inline-flex items-center gap-3 px-8 py-4 font-display text-sm tracking-widest uppercase bg-primary/10 border border-primary/40 rounded-full text-primary hover:bg-primary/20 transition-all duration-300 animate-pulse-glow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Begin the Journey
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-lg"
          >
            ↓
          </motion.span>
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/40 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
