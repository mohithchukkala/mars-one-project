import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import marsLanding from "@/assets/mars-landing.jpg";

const phases = [
  { name: "Atmospheric Entry", desc: "Hitting Mars atmosphere at 20,000 km/h. Heat shield glows at 1,600°C.", icon: "🌡️", temp: "1,600°C" },
  { name: "Parachute Deploy", desc: "Supersonic parachute slows descent. G-forces peak at 4.5G.", icon: "🪂", temp: "800°C" },
  { name: "Heat Shield Jettison", desc: "Radar locks onto the landing site. Terrain navigation activates.", icon: "📡", temp: "200°C" },
  { name: "Powered Descent", desc: "Retro rockets fire. Hovering above the surface, seeking flat ground.", icon: "🔥", temp: "50°C" },
  { name: "Touchdown", desc: "Contact! Dust settles. Systems nominal. We are on Mars.", icon: "✅", temp: "−63°C" },
];

const LandingSection = () => {
  const ref = useRef(null);
  const imageRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activePhase, setActivePhase] = useState(0);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

  return (
    <section id="landing" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-display text-xs tracking-[0.4em] uppercase text-accent/70">Phase 03</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
        >
          THE <span className="text-accent">LANDING</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed"
        >
          Seven minutes of terror. From orbit to surface in the most
          dangerous phase of the entire mission — fully autonomous, no room for error.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Sticky image */}
          <div ref={imageRef} className="lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative rounded-2xl overflow-hidden border border-border"
            >
              <motion.img
                src={marsLanding}
                alt="Mars landing"
                className="w-full h-[400px] md:h-[500px] object-cover"
                style={{ scale: imgScale }}
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

              {/* Phase indicator overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-panel rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display text-sm text-accent">{phases[activePhase].icon} {phases[activePhase].name}</span>
                    <span className="font-display text-sm text-primary">{phases[activePhase].temp}</span>
                  </div>
                  {/* Progress bar */}
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-accent rounded-full"
                      animate={{ width: `${((activePhase + 1) / phases.length) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Phase steps */}
          <div className="space-y-4">
            {phases.map((phase, i) => (
              <motion.div
                key={phase.name}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                onMouseEnter={() => setActivePhase(i)}
                onClick={() => setActivePhase(i)}
                className={`glass-panel rounded-xl p-6 cursor-pointer transition-all duration-300 border ${
                  activePhase === i
                    ? "border-accent/50 shadow-lg shadow-accent/10 scale-[1.02]"
                    : "border-border hover:border-border/80"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl mt-1 shrink-0">{phase.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-display text-base font-bold text-foreground">{phase.name}</h3>
                      <span className={`font-display text-xs px-2 py-0.5 rounded-full ${
                        activePhase >= i ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"
                      }`}>
                        Step {i + 1}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
