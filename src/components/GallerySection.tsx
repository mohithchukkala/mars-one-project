import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/mars-gallery-1.jpg";
import gallery2 from "@/assets/mars-gallery-2.jpg";
import gallery3 from "@/assets/mars-gallery-3.jpg";

const images = [
  { src: gallery1, alt: "Mars rocky terrain landscape", caption: "Martian Wasteland" },
  { src: gallery2, alt: "Mars rover on barren surface", caption: "Perseverance" },
  { src: gallery3, alt: "Olympus Mons volcano from above", caption: "Olympus Mons" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="font-display text-xs tracking-[0.4em] uppercase text-primary/70">Gallery</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6"
        >
          VISIONS OF <span className="text-primary text-glow">MARS</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed"
        >
          Cinematic glimpses of the Red Planet. Hover to reveal a hint of Martian color.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={img.caption}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
              className="group relative rounded-2xl overflow-hidden border border-border cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="w-full h-64 sm:h-72 lg:h-80 object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-background/50 group-hover:bg-background/20 transition-all duration-700" />
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-sm tracking-widest uppercase text-primary mb-1 group-hover:text-glow transition-all duration-500">
                  {img.caption}
                </h3>
                <div className="w-8 h-0.5 bg-primary/50 group-hover:w-16 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
