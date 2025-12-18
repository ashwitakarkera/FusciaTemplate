import { motion } from 'framer-motion';
import { useState } from 'react';
import bgImage from "../images/bgimage.jfif";

export default function Events() {
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    { name: "Mehendi", date: "12 Jan 2026", time: "10:00 AM", venue: "The Grand Palace Gardens" },
    { name: "Sangeet", date: "13 Jan 2026", time: "6:00 PM", venue: "Royal Ballroom" },
    { name: "Muhurtham", date: "14 Jan 2026", time: "8:00 AM", venue: "Sacred Temple Hall" },
    { name: "Reception", date: "15 Jan 2026", time: "7:00 PM", venue: "Sunset Lawn" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="events"
      className="py-32 relative overflow-hidden" 
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.75),
            rgba(233, 30, 99, 0.75)
          ),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10 pointer-events-none" />

      {/* Floating fuchsia-golden particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 lg:w-2 lg:h-2 rounded-full ${
              i % 2 === 0 ? 'bg-[#FFD700]' : 'bg-[#E91E63]'
            }`}
            style={{
              left: `${8 + (i * 6)}%`,
              top: `${12 + ((i * 9) % 75)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 5 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
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
        {/* Animated Heading - GOLDEN */}
        <motion.div className="text-center mb-24" variants={cardVariants}>
          <motion.h2 
            className="text-6xl lg:text-8xl font-light italic text-[#FFD700] drop-shadow-3xl leading-tight tracking-wider mb-8"
            style={{ 
              textShadow: '0 0 40px rgba(255, 215, 0, 0.9)'
            }}
            animate={{ 
              scale: [1, 1.05, 1],
              rotateX: [-2, 2, -2],
              textShadow: [
                "0 0 30px rgba(255, 215, 0, 0.6)",
                "0 0 50px rgba(255, 215, 0, 0.9)",
                "0 0 30px rgba(255, 215, 0, 0.6)"
              ]
            }}
            transition={{ 
              scale: { duration: 3, repeat: Infinity },
              rotateX: { duration: 4, repeat: Infinity },
              textShadow: { duration: 2.5, repeat: Infinity }
            }}
          >
            The Celebrations
          </motion.h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-[#E91E63] via-[#FFD700] to-[#E91E63] mx-auto rounded-full shadow-xl"
            animate={{ scaleX: [1, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Enhanced Event Cards - ALL GOLDEN TEXT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {events.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                rotateX: idx % 2 === 0 ? -5 : 5,
                boxShadow: "0 25px 50px rgba(255, 215, 0, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveEvent(idx)}
              className={`group relative cursor-pointer p-10 lg:p-12 rounded-3xl border-4 backdrop-blur-xl transition-all duration-700 overflow-hidden max-w-sm mx-auto ${
                activeEvent === idx 
                  ? 'border-[#FFD700]/90 bg-gradient-to-br from-[#FFD700]/30 via-[#E91E63]/20 to-[#FFD700]/30 shadow-2xl shadow-[#FFD700]/50' 
                  : 'border-white/20 bg-white/10 hover:border-[#FFD700]/60 shadow-xl'
              }`}
            >
              {/* Animated background sweep */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/40 to-[#E91E63]/40 opacity-0 group-hover:opacity-100 rounded-3xl"
                animate={{ x: ["100%", "-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Active state glow ring */}
              <motion.div 
                className="absolute inset-0 rounded-3xl border-4 border-[#FFD700]/60 opacity-0"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: activeEvent === idx ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Day counter - GOLDEN */}
              <motion.div 
                className="text-[#FFD700] text-xs lg:text-sm tracking-[0.4em] uppercase mb-8 font-bold drop-shadow-2xl"
                style={{ 
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.8)'
                }}
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                Day 0{idx + 1}
              </motion.div>

              {/* Event name - GOLDEN */}
              <motion.h4
                className="text-2xl lg:text-3xl mb-6 font-light tracking-wide drop-shadow-3xl leading-tight text-[#FFD700]"
                style={{ 
                  textShadow: '0 0 30px rgba(255, 215, 0, 0.9)'
                }}
                animate={{ 
                  scale: [1, 1.08, 1],
                  y: [-3, 3, -3]
                }}
                transition={{ 
                  scale: { duration: 2.5, repeat: Infinity },
                  y: { duration: 2.5, repeat: Infinity }
                }}
              >
                {item.name}
              </motion.h4>

              {/* Date/Time - GOLDEN */}
              <motion.p
                className="text-base lg:text-lg italic mb-4 drop-shadow-2xl text-[#FFD700]"
                style={{ 
                  textShadow: '0 0 20px rgba(255, 215, 0, 0.7)'
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {item.date} | {item.time}
              </motion.p>

              {/* Venue - GOLDEN */}
              <motion.p
                className="text-sm lg:text-base italic drop-shadow-2xl tracking-wide text-[#FFD700] font-medium"
                style={{ 
                  textShadow: '0 0 15px rgba(255, 215, 0, 0.8)'
                }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                {item.venue}
              </motion.p>

              {/* Floating accent elements */}
              <motion.div
                className="absolute top-4 right-4 w-6 h-6 lg:w-8 lg:h-8 border-2 border-[#FFD700]/60 rounded-full opacity-50"
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 12, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 pointer-events-none z-25" />
    </section>
  );
}




