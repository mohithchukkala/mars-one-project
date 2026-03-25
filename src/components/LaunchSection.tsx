import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import marsLaunch from "@/assets/mars-launch.jpg";

const countdownData = [
  { label: "Days", value: "0" },
  { label: "Hours", value: "0" },
  { label: "Minutes", value: "7" },
  { label: "Seconds", value: "00" },
];

const stats = [
  { label: "Thrust", value: "7.6M lbs", icon: "🔥" },
  { label: "Speed", value: "25,000 mph", icon: "⚡" },
  { label: "Fuel", value: "730 tons", icon: "⛽" },
  { label: "Crew", value: "6 Astronauts", icon: "👨‍🚀" },
];

const LaunchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [launched, setLaunched] = useState(false);

  return (
    <section id="launch" ref={ref} className="relative min-h-screen py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-display text-xs tracking-[0.4em] uppercase text-primary/70">Phase 01</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
        >
          THE <span className="text-primary text-glow">LAUNCH</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed"
        >
          The moment of ignition. Seven million pounds of thrust propel our crew beyond 
          Earth's gravity, beginning a 7-month voyage across 225 million kilometers of space.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image with interactive launch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative group cursor-pointer"
            onClick={() => setLaunched(true)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border">
              <img
                src={marsLaunch}
                alt="Rocket launch"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                width={1920}
                height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

              {/* Launch overlay */}
              {!launched && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="glass-panel rounded-full p-6 animate-pulse-glow">
                    <span className="font-display text-primary text-lg tracking-wider">LAUNCH</span>
                  </div>
                </motion.div>
              )}

              {/* Rocket animation on launch */}
              {launched && (
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -600, opacity: [1, 1, 0] }}
                  transition={{ duration: 2, ease: "easeIn" }}
                  className="absolute bottom-20 left-1/2 -translate-x-1/2 text-6xl"
                >
                  🚀
                </motion.div>
              )}
            </div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 left-4 right-4 glass-panel rounded-xl p-4 flex justify-around"
            >
              {countdownData.map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-display text-xl md:text-2xl font-bold text-primary">{item.value}</div>
                  <div className="font-body text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Stats cards */}
          <div className="grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.05, borderColor: "hsl(14 90% 55% / 0.5)" }}
                className="glass-panel rounded-xl p-6 border border-border transition-all duration-300 cursor-pointer group"
              >
                <span className="text-3xl mb-3 block group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                <div className="font-display text-lg md:text-xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="font-body text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSection;
