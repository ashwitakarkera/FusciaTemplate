import { motion } from 'framer-motion';
import bgImage from "../images/bgimage.jfif";

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 }
    }
  };

  const familyMembers = ["The Raghavans", "The Nairs", "All Our Loved Ones"];

  return (
    <footer id="rsvp"
      className="py-36 relative overflow-hidden text-center" 
      style={{
        backgroundImage: `
          linear-gradient(rgba(233, 30, 99, 0.85), rgba(233, 30, 99, 0.9)),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. Enhanced Atmospheric Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10 pointer-events-none" />
      
      {/* Floating Sparkles & Hearts */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#FFD700] rounded-full"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative z-30 max-w-5xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* 2. The Heartfelt Final Message */}
        <motion.div className="mb-16 italic text-white/90">
          <p className="text-2xl lg:text-3xl font-light leading-relaxed max-w-2xl mx-auto">
            "Your presence at our wedding is the greatest gift of all. We can't wait to share our joy, laughter, and new beginnings with you."
          </p>
          <div className="mt-6 flex justify-center gap-4 items-center">
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
            <span className="text-[#FFD700] tracking-[0.5em] text-sm uppercase">Forever Begins Here</span>
            <div className="h-[1px] w-12 bg-[#FFD700]/50" />
          </div>
        </motion.div>

        {/* 3. The Main Title */}
        <motion.h2 
          className="text-7xl lg:text-9xl italic text-[#FFD700] mb-16 font-light drop-shadow-[0_0_30px_rgba(255,215,0,0.5)]"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          See You Soon
        </motion.h2>

        {/* 4. Elegant RSVP Button */}
        <motion.button 
          className="group relative px-20 py-8 bg-transparent border-2 border-[#FFD700] text-[#FFD700] rounded-full font-bold tracking-[0.3em] uppercase text-lg overflow-hidden mb-24 hover:text-pink-700 transition-colors duration-500"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div 
            className="absolute inset-0 bg-[#FFD700] translate-y-full group-hover:translate-y-0 transition-transform duration-500"
          />
          <span className="relative z-10">Confirm Attendance</span>
        </motion.button>

        {/* 5. The Family Signature (Replaced Cards) */}
        <motion.div className="mb-24 space-y-8">
          <p className="text-[#FFD700]/60 uppercase tracking-[0.4em] text-xs font-bold">With Blessings From</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {familyMembers.map((name, idx) => (
              <div key={idx} className="flex items-center gap-8">
                <motion.span 
                  className="text-3xl lg:text-4xl text-[#FFD700] font-serif italic"
                  whileHover={{ scale: 1.1, color: "#fff" }}
                >
                  {name}
                </motion.span>
                {idx !== familyMembers.length - 1 && (
                  <div className="h-8 w-[1px] bg-[#FFD700]/30 hidden md:block" />
                )}
              </div>
            ))}
          </div>
          <p className="text-white/70 italic text-xl mt-8">
            "Request the honor of your presence to celebrate this divine union."
          </p>
        </motion.div>

        {/* 6. Footer Details */}
        <div className="border-t border-[#FFD700]/20 pt-12">
          <p className="text-lg tracking-[0.6em] text-[#FFD700] uppercase font-bold mb-8">
            #BrideGroom2025
          </p>
          <p className="text-xs text-[#FFD700]/40 tracking-widest uppercase">
            © 2025 StarX Innovation & Solutions
          </p>
        </div>
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10 pointer-events-none z-25" />
    </footer>
  );
}