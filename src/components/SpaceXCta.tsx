import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const SpaceXCta = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="font-display text-xs tracking-[0.4em] uppercase text-secondary mb-4">
            Real-World Mission
          </p>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Making Life <span className="text-secondary text-glow-blue">Multiplanetary</span>
          </h2>
          <p className="font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            SpaceX is building Starship — the most powerful rocket ever made — to carry humans to Mars.
            Explore their vision for humanity's future on the Red Planet.
          </p>

          <motion.a
            href="https://www.spacex.com/human-spaceflight/mars/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-10 py-5 font-display text-sm tracking-widest uppercase rounded-full border border-secondary/40 text-secondary bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 animate-pulse-glow-blue"
          >
            Explore SpaceX Mars Plan
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SpaceXCta;
