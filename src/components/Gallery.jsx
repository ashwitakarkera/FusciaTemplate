import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import bgImage from "../images/bgimage.jfif";

import g1 from "../images/gallery/g1.jfif";
import g2 from "../images/gallery/g2.jfif";
import g3 from "../images/gallery/g3.jfif";
import g4 from "../images/gallery/g4.jfif";
import g5 from "../images/gallery/g5.jfif";
import g6 from "../images/gallery/g6.jfif";


export default function Gallery() {
  const [showAll, setShowAll] = useState(false);

  const images = [g1, g2, g3, g4, g5, g6];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <section
      id="gallery"
      className="py-28 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.85),
            rgba(233, 30, 99, 0.85)
          ),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] z-10 pointer-events-none" />

      {/* Floating Sparkles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-70 ${
              i % 2 === 0 ? "bg-[#FFD700]" : "bg-white/40"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-30 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h3
          variants={itemVariants}
          className="text-6xl lg:text-7xl font-serif italic text-[#FFD700] text-center mb-16"
          style={{ textShadow: "0 0 30px rgba(255,215,0,0.6)" }}
        >
          Our Moments
        </motion.h3>

        {/* Gallery Grid */}
        <motion.div layout className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <AnimatePresence>
            {(showAll ? images : images.slice(0, 3)).map((img, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-[2.5rem] overflow-hidden border-4 border-[#FFD700]/30 shadow-[0_0_40px_rgba(0,0,0,0.4)]"
              >
                <img
                  src={img}
                  alt="gallery"
                  className="w-full h-72 object-cover transition duration-700 hover:scale-110"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More Button */}
        <motion.div variants={itemVariants} className="mt-16 text-center">
          <button
            onClick={() => {
              setShowAll(!showAll);
              setTimeout(() => {
                document
                  .getElementById("gallery")
                  ?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
            className="px-12 py-4 rounded-full bg-[#FFD700] text-[#7A003C] font-bold tracking-widest uppercase shadow-xl hover:bg-white transition-all duration-500"
          >
            {showAll ? "View Less" : "View More"}
          </button>
        </motion.div>
      </motion.div>

      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-15 pointer-events-none z-25" />
    </section>
  );
}
