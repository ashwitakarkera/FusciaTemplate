import { motion } from 'framer-motion';
import bgImage from "../images/bgimage.jfif";

export default function DressCode() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const colorSwatches = [
    { n: 'Gold', c: 'bg-[#FFD700]', glow: 'shadow-[#FFD700]/50' },
    { n: 'Fuchsia', c: 'bg-[#E91E63]', b: 'border-4 border-white/80', glow: 'shadow-[#E91E63]/40' },
    { n: 'Chartreuse', c: 'bg-[#7FFF00]', glow: 'shadow-[#7FFF00]/40' },
  ];

  return (
    <section id="dresscode"
      className="py-28 relative overflow-hidden text-center" 
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(233, 30, 99, 0.8),
            rgba(233, 30, 99, 0.8)
          ),
          url(${bgImage})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.7)_100%)] z-10 pointer-events-none" />

      {/* Golden sparkle particles */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 lg:w-2 lg:h-2 bg-[#FFD700] rounded-full opacity-70"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${20 + ((i * 10) % 70)}%`,
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.8, 1],
              opacity: [0.6, 1, 0.6],
              rotate: [0, 360]
            }}
            transition={{
              y: { duration: 5 + i * 0.3, repeat: Infinity },
              scale: { duration: 2.5, repeat: Infinity },
              opacity: { duration: 3, repeat: Infinity },
              rotate: { duration: 10, repeat: Infinity }
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
        <motion.h3 
          className="text-5xl lg:text-7xl font-light italic text-[#FFD700] drop-shadow-4xl mb-8 leading-tight tracking-wider"
          style={{ 
            textShadow: '0 0 60px rgba(255, 215, 0, 0.9)'
          }}
          animate={{ 
            scale: [1, 1.06, 1],
            rotateX: [-2, 2, -2],
            y: [-6, 6, -6]
          }}
          transition={{ 
            scale: { duration: 4, repeat: Infinity },
            rotateX: { duration: 5, repeat: Infinity },
            y: { duration: 3.5, repeat: Infinity }
          }}
        >
          Dress Code
        </motion.h3>

        {/* Elegant Message */}
        <motion.div 
          className="max-w-2xl mx-auto mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <motion.p 
            className="text-2xl lg:text-3xl text-[#FFD700]/95 drop-shadow-2xl mb-8 leading-relaxed font-light tracking-wide"
            style={{ 
              textShadow: '0 0 25px rgba(255, 215, 0, 0.7)'
            }}
            animate={{ 
              x: [-8, 8, -8],
              opacity: [0.92, 1, 0.92]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            We would love if you follow our dress code to make this celebration{' '}
            <span className="font-semibold text-[#FFD700] drop-shadow-xl">truly magical</span>.
          </motion.p>
          
          <motion.div 
            className="p-8 lg:p-10 bg-white/15 backdrop-blur-xl border-4 border-[#FFD700]/40 rounded-3xl shadow-2xl max-w-lg mx-auto"
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 15px 30px rgba(255, 215, 0, 0.2)",
                "0 20px 40px rgba(255, 215, 0, 0.4)",
                "0 15px 30px rgba(255, 215, 0, 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-xl lg:text-2xl text-[#FFD700] font-medium drop-shadow-xl tracking-wide leading-relaxed">
              Your presence is the greatest gift. Your style will make it unforgettable.
            </p>
          </motion.div>
        </motion.div>

        {/* Color Swatches */}
        <div className="flex flex-wrap justify-center gap-12 lg:gap-16">
          {colorSwatches.map((x, idx) => (
            <motion.div
              key={x.n}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.7, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8 + idx * 0.15, duration: 0.6 }}
              whileHover={{ 
                scale: 1.2, 
                y: -10,
                rotate: idx * 10 - 10
              }}
            >
              {/* Animated color swatch */}
              <motion.div 
                className={`w-24 h-24 lg:w-32 lg:h-32 rounded-3xl ${x.c} ${x.b || ''} shadow-2xl lg:shadow-3xl mb-6 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.8)] transition-all duration-500 relative overflow-hidden`}
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  scale: { duration: 3, repeat: Infinity },
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" }
                }}
              >
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/50 to-white/20 opacity-70"
                  animate={{ x: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                
                {/* Glow pulse */}
                <motion.div 
                  className={`absolute inset-2 rounded-2xl shadow-[0_0_30px_currentColor]`}
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              </motion.div>
              
              {/* Color name */}
              <motion.span 
                className="text-[#FFD700] text-lg lg:text-xl uppercase tracking-[0.3em] font-bold drop-shadow-2xl"
                style={{ 
                  textShadow: '0 0 25px rgba(255, 215, 0, 0.9)'
                }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {x.n}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-15 pointer-events-none z-25" />
    </section>
  );
}
