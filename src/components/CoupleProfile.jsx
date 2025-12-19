import { motion } from "framer-motion";
import bgImage from "../images/bgimage.jfif";
import bride from "../images/bride.jpg";
import groom from "../images/groom.jpg";

export default function CoupleProfile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const nameAnimation = {
    initial: { scale: 1 },
    animate: { scale: [1, 1.03, 1] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  const coupleData = [
    {
      role: "Bride",
      name: "Saumya Pillai",
      parent: "D/o of Mr & Mrs.Shyam Pillai ",
      image: bride,
      gradient: "from-[#E91E63]/90 via-[#FF69B4]/80 to-[#C71585]/90",
    },
    {
      role: "Groom",
      name: "Pratham Nair",
      parent: "S/o of Mr & Mrs. Ramakrishnan Nair",
      image: groom,
      gradient: "from-[#FFD700]/95 via-[#FFA500]/85 to-[#B8860B]/95",
    },
  ];

  return (
    <section
      id="couple"
      className="relative py-14 sm:py-16 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.7),
            rgba(233, 30, 99, 0.7)
          ),
          url(${bgImage})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none" />

      {/* Floating golden particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-[#FFD700] rounded-full opacity-60"
            style={{
              left: `${10 + i * 7}%`,
              top: `${15 + ((i * 11) % 70)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-30 max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div
          className="text-center mb-10 sm:mb-14 lg:mb-20"
          variants={cardVariants}
        >
          <motion.h2 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-light italic text-[#FFD700] drop-shadow-2xl mb-4 sm:mb-6">
            The Royal Couple
          </motion.h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto rounded-full shadow-lg" />
        </motion.div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {coupleData.map((person, idx) => (
            <motion.div
              key={person.name}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="
                group relative bg-white/15 backdrop-blur-xl 
                p-4 sm:p-5 lg:p-6 rounded-3xl border-4 border-white/30 
                hover:border-[#FFD700]/60 transition-all duration-700 
                flex flex-col items-center text-center 
                w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80  /* SQUARE CARD */
                mx-auto justify-start
              "
            >
              {/* Image */}
              <div
                className={`p-1.5 sm:p-2.5 lg:p-3 ${person.gradient} rounded-2xl lg:rounded-3xl border-4 sm:border-6 border-white/50 mb-1`}
              >
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Names & Parent */}
              <div className="flex flex-col items-center gap-0.5 sm:gap-1.5 mt-1 w-full px-2 sm:px-3">
                <motion.h3
                  className="text-lg sm:text-2xl lg:text-3xl font-black text-[#FFD700] leading-tight"
                  {...nameAnimation}
                >
                  {person.name}
                </motion.h3>

                <p className="text-[10px] sm:text-xs lg:text-sm font-medium text-[#FFD700]/95 max-w-xs leading-tight">
                  {person.parent}
                </p>
              </div>

              {/* Accent orb */}
              <motion.div
                className={`absolute top-2 sm:top-3 ${
                  idx === 0 ? "right-2 sm:right-3" : "left-2 sm:left-3"
                } w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-4 border-[#FFD700]/60 rounded-full opacity-40`}
                animate={{
                  rotate: 360,
                  scale: [1, 1.15, 1],
                }}
                transition={{ duration: 15, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-15 pointer-events-none z-25" />
    </section>
  );
}



