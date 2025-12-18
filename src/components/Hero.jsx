import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import bgImage from "../images/bgimage.jfif";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("December 24, 2025").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero"
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#E91E63]"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.65),
            rgba(233, 30, 99, 0.65)
          ),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 1. SOFT VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)] z-10 pointer-events-none" />

      {/* 2. STATIC GOLDEN BORDER ONLY - NO CORNERS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute inset-[2.5rem] lg:inset-[4rem] xl:inset-[5rem] border-4 border-[#FFD700]/90 rounded-[2.5rem] lg:rounded-[3.5rem] shadow-2xl" />
      </div>

      {/* 3. CONTENT - TIGHTER PADDING TO FIT INSIDE BORDER */}
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center px-16 py-20 lg:px-24 lg:py-28 xl:px-32 xl:py-36">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-4xl space-y-4 lg:space-y-6"
        >
          {/* "The Royal Wedding of" */}
          <motion.span 
            className="mt-8 lg:mt-12 text-[#FFD700] tracking-[0.15em] uppercase text-base lg:text-lg xl:text-xl block font-bold drop-shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            The Royal Wedding of
          </motion.span>

          {/* MOVING NAMES - NOW PERFECTLY INSIDE */}
          <div className="space-y-1 lg:space-y-2">
            <motion.h1 
              className="text-4xl lg:text-6xl xl:text-7xl font-light text-white italic leading-tight drop-shadow-2xl"
              animate={{ 
                y: [-2, 2, -2],
                rotate: [-0.3, 0.3, -0.3]
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Saumya
            </motion.h1>
            <motion.span 
              className="text-[#FFD700] text-3xl lg:text-5xl xl:text-6xl mx-auto block"
              animate={{ 
                scale: [1, 1.1, 1], 
                rotate: [0, 180, 360],
                textShadow: [
                  "0 0 15px rgba(255, 215, 0, 0.7)",
                  "0 0 30px rgba(255, 215, 0, 1)",
                  "0 0 15px rgba(255, 215, 0, 0.7)"
                ]
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 4, repeat: Infinity },
                textShadow: { duration: 2, repeat: Infinity }
              }}
            >
              &amp;
            </motion.span>
            <motion.h1 
              className="text-4xl lg:text-6xl xl:text-7xl font-light text-white italic leading-tight drop-shadow-2xl"
              animate={{ 
                y: [2, -2, 2],
                rotate: [0.3, -0.3, 0.3]
              }}
              transition={{ 
                y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              Pratham
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div 
            className="flex items-center justify-center gap-3 lg:gap-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
          >
            <div className="h-[1.5px] w-20 lg:w-28 bg-[#FFD700]" />
            <motion.span 
              className="text-[#FFD700] text-xl lg:text-2xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ✧
            </motion.span>
            <div className="h-[1.5px] w-20 lg:w-28 bg-[#FFD700]" />
          </motion.div>

          {/* Date/Venue */}
          <motion.div 
            className="space-y-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            <p className="text-lg lg:text-2xl xl:text-3xl tracking-[0.05em] italic text-white drop-shadow-xl">
              December 24 • 2025
            </p>
            <p className="text-[#FFD700] tracking-[0.1em] uppercase text-base lg:text-lg xl:text-xl font-bold drop-shadow-xl">
              The Grand Emerald Palace
            </p>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap justify-center items-center gap-3 lg:gap-8 py-4 px-3 border-y-2 border-[#FFD700]/60 backdrop-blur-md bg-black/40 rounded-2xl shadow-2xl max-w-2xl mx-auto"
          >
            {Object.entries(timeLeft).map(([label, value], idx) => (
              <motion.div 
                key={label} 
                className="flex flex-col items-center group min-w-[52px] sm:min-w-[60px]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.span 
                  className="text-2xl lg:text-4xl xl:text-5xl font-bold text-white tabular-nums drop-shadow-2xl"
                  animate={{ 
                    textShadow: [
                      "0 0 10px rgba(255, 215, 0, 0.5)",
                      "0 0 20px rgba(255, 215, 0, 0.8)",
                      "0 0 10px rgba(255, 215, 0, 0.5)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {String(value).padStart(2, '0')}
                </motion.span>
                <span className="text-xs lg:text-sm uppercase tracking-widest text-[#FFD700] font-bold mt-1">
                  {label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating golden particles */}
      <div className="absolute inset-0 z-25 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 lg:w-3 lg:h-3 bg-[#FFD700] rounded-full opacity-70"
            style={{
              top: `${25 + (i * 9)}%`,
              right: `${25 + (i * 7)}%`,
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 4. TEXTURE */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 pointer-events-none z-15" />
    </section>
  );
}




