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
        delayChildren: 0.4,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="events"
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] z-10 pointer-events-none" />

      {/* Floating particles — GOLD & PINK ONLY */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 lg:w-2 lg:h-2 rounded-full ${
              i % 2 === 0 ? 'bg-[#FFD700]' : 'bg-[#E91E63]'
            }`}
            style={{
              left: `${8 + i * 6}%`,
              top: `${12 + ((i * 9) % 75)}%`,
            }}
            animate={{
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 5 + i * 0.2,
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
        {/* Heading */}
        <motion.div className="text-center mb-24" variants={cardVariants}>
          <motion.h2
            className="text-6xl lg:text-8xl font-light italic text-[#FFD700] mb-8"
            style={{ textShadow: '0 0 40px rgba(255, 215, 0, 0.9)' }}
          >
            The Celebrations
          </motion.h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[#E91E63] via-[#FFD700] to-[#E91E63] mx-auto rounded-full shadow-xl" />
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {events.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{ y: -15, scale: 1.05 }}
              onClick={() => setActiveEvent(idx)}
              className={`group relative cursor-pointer p-10 lg:p-12 rounded-3xl border-4 backdrop-blur-xl transition-all duration-700 overflow-hidden max-w-sm mx-auto ${
                activeEvent === idx
                  ? 'border-[#FFD700]/90 bg-gradient-to-br from-[#E91E63]/40 via-[#FFD700]/30 to-[#E91E63]/40 shadow-2xl shadow-[#FFD700]/50'
                  : 'border-white/25 bg-white/15 hover:border-[#FFD700]/60 shadow-xl'
              }`}
            >
              {/* Day */}
              <div className="text-[#FFD700] text-xs tracking-[0.4em] uppercase mb-8 font-bold">
                Day 0{idx + 1}
              </div>

              {/* Event name */}
              <h4 className="text-2xl lg:text-3xl mb-6 font-light text-[#FFD700]">
                {item.name}
              </h4>

              {/* Date & Time */}
              <p
                className="text-base lg:text-lg italic mb-4 text-[#FFD700]"
                style={{ textShadow: '0 0 20px rgba(255, 215, 0, 0.7)' }}
              >
                {item.date} | {item.time}
              </p>

              {/* Venue */}
              <p className="text-sm lg:text-base italic text-[#FFD700] font-medium">
                {item.venue}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 pointer-events-none z-25" />
    </section>
  );
}






