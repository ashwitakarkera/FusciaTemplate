import { motion } from 'framer-motion';
import bgImage from "../images/bgimage.jfif";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6
      }
    }
  };

  const familyMessages = [
    { name: "Raghavan", message: "With love and blessings from the family" },
    { name: "Nair", message: "Can't wait to celebrate your forever together!" }
  ];

  return (
    <footer id="rsvp"
      className="py-36 relative overflow-hidden text-center" 
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.85),
            rgba(233, 30, 99, 0.85)
          ),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] z-10 pointer-events-none" />

      {/* Gradient overlay top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#E91E63]/20 via-[#E91E63]/10 to-transparent z-20" />

      {/* Floating golden hearts & sparkles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 lg:w-3 lg:h-3 rounded-full opacity-70 ${
              i % 3 === 0 ? 'bg-[#FFD700]' : 'bg-[#E91E63]'
            }`}
            style={{
              left: `${10 + (i * 4.5)}%`,
              top: `${25 + ((i * 6) % 65)}%`,
            }}
            animate={{
              y: [0, -40, 0],
              scale: [1, 1.6, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 360]
            }}
            transition={{
              y: { duration: 6 + i * 0.25, repeat: Infinity },
              scale: { duration: 3, repeat: Infinity },
              opacity: { duration: 4, repeat: Infinity },
              rotate: { duration: 12, repeat: Infinity }
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-30 max-w-4xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Main Title */}
        <motion.h2 
          className="text-7xl lg:text-9xl xl:text-[10rem] italic text-[#FFD700] drop-shadow-4xl mb-12 lg:mb-16 font-light leading-tight tracking-wider"
          style={{ 
            textShadow: '0 0 80px rgba(255, 215, 0, 0.95)'
          }}
          animate={{ 
            scale: [1, 1.08, 1],
            rotateX: [-4, 4, -4],
            y: [-12, 12, -12]
          }}
          transition={{ 
            scale: { duration: 5, repeat: Infinity },
            rotateX: { duration: 6, repeat: Infinity },
            y: { duration: 4, repeat: Infinity }
          }}
        >
          See You Soon
        </motion.h2>

        {/* RSVP Button */}
        <motion.button 
          className="group relative px-20 lg:px-24 py-8 bg-gradient-to-r from-[#E91E63] via-[#FF1493] to-[#E91E63] text-white rounded-3xl lg:rounded-[3rem] font-bold tracking-[0.2em] uppercase text-lg lg:text-xl shadow-3xl hover:shadow-[#FFD700]/50 transition-all duration-700 overflow-hidden mb-20 lg:mb-24"
          whileHover={{ 
            scale: 1.1, 
            y: -10,
            boxShadow: "0 25px 50px rgba(233, 30, 99, 0.6)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Shimmer effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white/30 opacity-0 group-hover:opacity-100"
            animate={{ x: ["0%", "100%", "0%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <span className="relative z-10">RSVP NOW</span>
          
          {/* Pulse glow */}
          <motion.div 
            className="absolute -inset-2 rounded-3xl bg-[#FFD700] opacity-0 blur-xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>

        {/* Family Messages */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {familyMessages.map((family, idx) => (
            <motion.div
              key={family.name}
              className="group p-10 lg:p-12 bg-white/15 backdrop-blur-xl border border-[#FFD700]/40 rounded-3xl shadow-2xl hover:shadow-[#FFD700]/40 transition-all duration-700 hover:bg-white/25"
              whileHover={{ 
                scale: 1.05, 
                rotateY: idx === 0 ? -5 : 5,
                y: -8
              }}
            >
              {/* Shimmer background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/30 via-transparent to-[#E91E63]/30 opacity-0 group-hover:opacity-100 rounded-3xl"
                animate={{ x: ["-100%", "100%", "-100%"] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.div 
                className="text-[#FFD700] drop-shadow-2xl relative z-10"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <h4 className="text-3xl lg:text-4xl font-bold italic mb-4 tracking-wide leading-tight" style={{ 
                  textShadow: '0 0 30px rgba(255, 215, 0, 0.9)'
                }}>
                  {family.name}
                </h4>
                <p className="text-xl lg:text-2xl font-light tracking-wide leading-relaxed" style={{ 
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.7)'
                }}>
                  {family.message}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Hashtag */}
        <motion.p 
          className="text-lg lg:text-xl tracking-[0.6em] text-[#FFD700]/80 uppercase font-bold mb-12 drop-shadow-xl"
          style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.6)' }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          #BrideGroom2025
        </motion.p>

        {/* Copyright */}
        <motion.div 
          className="space-y-2 pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="h-px w-32 bg-gradient-to-r from-[#FFD700]/60 to-transparent mx-auto mb-4 animate-pulse" />
          <p className="text-sm lg:text-base text-[#FFD700]/70 font-medium tracking-wide drop-shadow-lg">
            © 2025 StarX Innovation & Solutions. All rights reserved.
          </p>
        </motion.div>
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10 pointer-events-none z-25" />
    </footer>
  );
}


