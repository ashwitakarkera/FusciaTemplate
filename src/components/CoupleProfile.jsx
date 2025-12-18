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
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const coupleData = [
    { 
      role: "Bride", 
      name: "Saumya Raghavan", 
      parent: "D/o of Mr & Mrs. Subramnian Raghavan",
      image: bride,
      gradient: "from-[#E91E63]/90 via-[#FF69B4]/80 to-[#C71585]/90"
    },
    { 
      role: "Groom", 
      name: "Pratham Nair", 
      parent: "S/o of Mr & Mrs. Ramakrishnan Nair",
      image: groom,
      gradient: "from-[#FFD700]/95 via-[#FFA500]/85 to-[#B8860B]/95"
    }
  ];

  return (
    <section id="couple"
      className="relative py-24 overflow-hidden" 
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.7),
            rgba(233, 30, 99, 0.7)
          ),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-10 pointer-events-none" />

      {/* Floating golden particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-[#FFD700] rounded-full opacity-60"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${15 + ((i * 11) % 70)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-30 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Animated Heading */}
        <motion.div className="text-center mb-24" variants={cardVariants}>
          <motion.h2 
            className="text-5xl lg:text-7xl font-light italic text-[#FFD700] drop-shadow-2xl leading-tight tracking-wider mb-6"
            whileHover={{ scale: 1.05 }}
            animate={{ 
              y: [-5, 5, -5],
              textShadow: [
                "0 0 20px rgba(255, 215, 0, 0.5)",
                "0 0 40px rgba(255, 215, 0, 0.8)",
                "0 0 20px rgba(255, 215, 0, 0.5)"
              ]
            }}
            transition={{ 
              y: { duration: 3, repeat: Infinity },
              textShadow: { duration: 2, repeat: Infinity }
            }}
          >
            The Royal Couple
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#FFA500] mx-auto rounded-full shadow-lg"
            animate={{ scaleX: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Uniform sized cards grid */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {coupleData.map((person, idx) => (
            <motion.div
              key={person.name}
              variants={cardVariants}
              whileHover={{ y: -20, scale: 1.02 }}
              className="group relative bg-white/15 backdrop-blur-xl p-8 lg:p-12 rounded-[3rem] border-4 border-white/30 hover:border-[#FFD700]/60 transition-all duration-700 flex flex-col items-center text-center max-w-md mx-auto h-[42rem] lg:h-[48rem] justify-between"
            >
              {/* Animated card background shimmer */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#E91E63]/20 via-transparent to-[#FFD700]/20 opacity-0 group-hover:opacity-100 rounded-[3rem]"
                animate={{ x: ["-100%", "100%", "-100%"] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Profile Image */}
              <motion.div
                className="relative mb-8 flex-shrink-0"
                whileHover={{ rotate: idx === 0 ? -5 : 5 }}
              >
                <div className={`p-4 lg:p-6 ${person.gradient} rounded-[4rem] lg:rounded-[5rem] border-8 shadow-3xl group-hover:shadow-[#FFD700]/50 transition-all duration-700 border-white/50`}>
                  <motion.div 
                    className="w-64 h-64 lg:w-72 lg:h-72 rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden relative shadow-2xl"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: idx * 0.2 }}
                  >
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover brightness-110 group-hover:brightness-125 group-hover:scale-105 transition-all duration-700"
                      loading="lazy"
                    />
                    {/* Spinning golden ring */}
                    <motion.div
                      className="absolute inset-0 rounded-[2.5rem] lg:rounded-[3.5rem] border-4 border-[#FFD700]/50"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>
                </div>
              </motion.div>

              {/* Text Content - ALL GOLDEN & INSIDE CARD */}
              <div className="flex-1 flex flex-col justify-center space-y-4 px-4">
                {/* Name */}
                <motion.h3
                  className="text-4xl lg:text-5xl xl:text-6xl font-black text-[#FFD700] drop-shadow-2xl tracking-tight leading-tight"
                  style={{ 
                    textShadow: '0 0 30px rgba(255, 215, 0, 0.9)'
                  }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                    y: [-3, 3, -3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {person.name}
                </motion.h3>

                {/* Parents */}
                <motion.p 
                  className="text-xl lg:text-2xl font-medium text-[#FFD700]/95 drop-shadow-xl tracking-wide leading-relaxed max-w-xs mx-auto"
                  style={{ 
                    textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {person.parent}
                </motion.p>
              </div>

              {/* Floating accent orb */}
              <motion.div
                className={`absolute top-8 ${idx === 0 ? 'right-8' : 'left-8'} w-16 h-16 lg:w-20 lg:h-20 border-4 border-[#FFD700]/60 rounded-full opacity-40`}
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.15, 1]
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
