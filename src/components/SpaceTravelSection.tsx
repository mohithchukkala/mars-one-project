import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import marsSpace from "@/assets/mars-space.jpg";

const milestones = [
  { day: "Day 1", title: "Earth Orbit", desc: "Spacecraft enters low Earth orbit, systems check complete.", distance: "400 km" },
  { day: "Day 14", title: "Lunar Flyby", desc: "Using the Moon's gravity for a slingshot maneuver.", distance: "384,000 km" },
  { day: "Day 90", title: "Deep Space", desc: "Halfway through the cosmic void. Radio signals take 10 minutes.", distance: "75M km" },
  { day: "Day 180", title: "Mars Approach", desc: "The Red Planet grows larger in the viewport every hour.", distance: "200M km" },
  { day: "Day 210", title: "Mars Orbit", desc: "Orbital insertion burn. Preparing for descent sequence.", distance: "225M km" },
];

const SpaceTravelSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeMilestone, setActiveMilestone] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="space" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0 z-0" ref={containerRef} style={{ y: bgY }}>
        <img
          src={marsSpace}
          alt="Deep space"
          className="w-full h-[120%] object-cover opacity-30"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-display text-xs tracking-[0.4em] uppercase text-secondary/70">Phase 02</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
        >
          SPACE <span className="text-secondary text-glow-blue">TRAVEL</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed"
        >
          Seven months of traversing the cosmic void. 225 million kilometers of silence, 
          broken only by the hum of life support and the glow of distant stars.
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
          <motion.div
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 w-0.5 bg-secondary origin-top"
            style={{
              height: `${((activeMilestone + 1) / milestones.length) * 100}%`,
            }}
          />

          {milestones.map((m, i) => (
            <motion.div
              key={m.day}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
              onMouseEnter={() => setActiveMilestone(i)}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  animate={activeMilestone >= i ? { scale: 1.3, backgroundColor: "hsl(220 60% 50%)" } : { scale: 1 }}
                  className="w-4 h-4 rounded-full bg-border border-2 border-background transition-all"
                />
              </div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`glass-panel rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                    activeMilestone === i ? "border-secondary/50 shadow-lg shadow-secondary/10" : "border-border"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-display text-xs tracking-wider text-secondary">{m.day}</span>
                    <span className="px-2 py-0.5 rounded-full bg-secondary/10 text-secondary font-body text-xs">{m.distance}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </motion.div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block md:w-5/12" />
            </motion.div>
          ))}
        </div>

        {/* Interactive distance counter */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 glass-panel rounded-2xl p-8 text-center max-w-lg mx-auto"
        >
          <p className="font-body text-sm text-muted-foreground mb-2 uppercase tracking-wider">Current Distance from Earth</p>
          <div className="font-display text-3xl md:text-5xl font-black text-secondary text-glow-blue">
            {milestones[activeMilestone].distance}
          </div>
          <p className="font-body text-sm text-muted-foreground mt-2">{milestones[activeMilestone].title}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpaceTravelSection;
