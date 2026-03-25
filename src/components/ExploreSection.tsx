import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import marsExplore from "@/assets/mars-explore.jpg";

const discoveries = [
  {
    title: "Olympus Mons",
    subtitle: "Tallest volcano in the solar system",
    detail: "Standing 21.9 km high — nearly 2.5× the height of Everest. Its base spans 600 km, roughly the size of France.",
    stat: "21.9 km",
    statLabel: "Height",
  },
  {
    title: "Valles Marineris",
    subtitle: "The Grand Canyon of Mars",
    detail: "A system of canyons stretching 4,000 km long, up to 200 km wide, and 7 km deep. It dwarfs Earth's Grand Canyon.",
    stat: "4,000 km",
    statLabel: "Length",
  },
  {
    title: "Polar Ice Caps",
    subtitle: "Frozen water and CO₂",
    detail: "Mars has ice caps at both poles made of water ice and frozen carbon dioxide. They hold clues to Mars's climate history.",
    stat: "−143°C",
    statLabel: "Temperature",
  },
  {
    title: "Subsurface Water",
    subtitle: "Liquid water beneath the surface",
    detail: "Radar data suggests liquid water lakes exist beneath Mars's south polar ice cap — a game-changer for life.",
    stat: "1.5 km",
    statLabel: "Depth",
  },
];

const ExploreSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section id="explore" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={marsExplore}
          alt="Mars exploration"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-display text-xs tracking-[0.4em] uppercase text-primary/70">Phase 04</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
        >
          <span className="text-primary text-glow">EXPLORATION</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed"
        >
          We've arrived. Now begins the real mission — uncovering the secrets of 
          a world that has captivated humanity for millennia. Click each discovery to learn more.
        </motion.p>

        {/* Discovery cards grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-20">
          {discoveries.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              onClick={() => setActiveCard(activeCard === i ? null : i)}
              whileHover={{ y: -4 }}
              className={`glass-panel rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-500 border ${
                activeCard === i
                  ? "border-primary/50 shadow-xl shadow-primary/10"
                  : "border-border hover:border-primary/20"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground mb-1">{d.title}</h3>
                  <p className="font-body text-sm text-primary">{d.subtitle}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <div className="font-display text-2xl font-black text-primary">{d.stat}</div>
                  <div className="font-body text-xs text-muted-foreground">{d.statLabel}</div>
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{ height: activeCard === i ? "auto" : 0, opacity: activeCard === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <p className="font-body text-sm text-muted-foreground leading-relaxed pt-4 border-t border-border">
                  {d.detail}
                </p>
              </motion.div>

              <div className="mt-4 flex items-center gap-2 text-primary font-body text-xs tracking-wider">
                <span>{activeCard === i ? "Click to collapse" : "Click to explore"}</span>
                <motion.span animate={{ rotate: activeCard === i ? 180 : 0 }}>↓</motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6">
            The Future is <span className="text-primary text-glow">Red</span>
          </h3>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
            Mars is not just a destination — it's humanity's next chapter. From the first footprint 
            in red dust to the first colony under an alien sky, this journey has only just begun.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-3 px-8 py-4 font-display text-sm tracking-widest uppercase bg-primary/10 border border-primary/40 rounded-full text-primary hover:bg-primary/20 transition-all duration-300"
          >
            Restart the Journey
            <span>↑</span>
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-20 pt-8 border-t border-border text-center"
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            Mars Odyssey — An Interactive Web Experience
          </p>
          <p className="font-body text-xs text-muted-foreground/60">
            Built with React, Framer Motion & Tailwind CSS
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default ExploreSection;
