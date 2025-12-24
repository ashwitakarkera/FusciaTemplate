import { motion } from "framer-motion";
import bgImage from "../images/bgimage.jfif";

export default function Venue() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="venue"
      className="py-32 relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.85),
            rgba(233, 30, 99, 0.85)
          ),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] z-10 pointer-events-none" />

      {/* Sparkles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-70 ${
              i % 2 === 0 ? "bg-[#FFD700]" : "bg-white/40"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        className="relative z-30 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* CENTERED HEADING */}
        <motion.h3
          variants={itemVariants}
          className="text-6xl lg:text-7xl font-serif italic text-[#FFD700] text-center mb-20"
          style={{ textShadow: "0 0 30px rgba(255,215,0,0.6)" }}
        >
          The Venue
        </motion.h3>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <p className="text-2xl lg:text-4xl text-white font-light leading-snug mb-10">
              We are celebrating our{" "}
              <span className="text-[#FFD700] font-bold">
                Main Wedding Ceremony
              </span>{" "}
              at the Royal Heritage Hall.
            </p>

            <div className="inline-block p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#FFD700]/30 shadow-2xl">
              <p className="text-[#FFD700] text-2xl font-bold">
                Kindly join us at <span className="text-white">6:30 PM</span>
              </p>
              <p className="text-white/80 italic mt-1 uppercase tracking-widest text-sm font-semibold">
                123 Palace Road, Emerald City
              </p>
            </div>
          </motion.div>

          {/* Right: SMALL MAP */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative h-56 w-56 rounded-[2rem] overflow-hidden border-4 border-[#FFD700]/40 shadow-[0_0_30px_rgba(0,0,0,0.35)]">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913127413!2d77.40516037553531!3d28.502925975735395"
                className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-15 pointer-events-none z-25" />
    </section>
  );
}



