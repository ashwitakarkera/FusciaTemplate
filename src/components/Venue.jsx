import { motion } from 'framer-motion';
import bgImage from "../images/bgimage.jfif";

export default function Venue() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const stayOptions = [
    { title: "Royal Palace Hotel", price: "₹15,000/night", distance: "2.1 km" },
    { title: "Emerald Heritage Stay", price: "₹12,500/night", distance: "1.8 km" },
    { title: "Grand Crown Resort", price: "₹18,000/night", distance: "3.2 km" },
  ];

  return (
    <section id ="venue"
      className="py-28 relative overflow-hidden" 
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.65)_100%)] z-10 pointer-events-none" />

      {/* Golden particles with sparkle effect */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 lg:w-2 lg:h-2 bg-[#FFD700] rounded-full"
            style={{
              left: `${5 + (i * 5.5)}%`,
              top: `${10 + ((i * 8) % 80)}%`,
            }}
            animate={{
              y: [0, -35, 0],
              scale: [1, 2, 1],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 180, 360]
            }}
            transition={{
              y: { duration: 6 + i * 0.2, repeat: Infinity },
              scale: { duration: 2, repeat: Infinity },
              opacity: { duration: 3, repeat: Infinity },
              rotate: { duration: 8, repeat: Infinity }
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
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            {/* Animated Title */}
            <motion.h3 
              className="text-6xl lg:text-7xl xl:text-8xl font-light italic text-[#FFD700] drop-shadow-3xl mb-8 leading-tight"
              style={{ 
                textShadow: '0 0 50px rgba(255, 215, 0, 0.9)'
              }}
              animate={{ 
                scale: [1, 1.08, 1],
                rotateX: [-3, 3, -3],
                y: [-8, 8, -8]
              }}
              transition={{ 
                scale: { duration: 4, repeat: Infinity },
                rotateX: { duration: 5, repeat: Infinity },
                y: { duration: 3, repeat: Infinity }
              }}
            >
              The Venue
            </motion.h3>

            {/* Animated description */}
            <motion.p 
              className="text-2xl lg:text-3xl text-[#FFD700]/95 drop-shadow-2xl mb-12 leading-relaxed tracking-wide font-light"
              style={{ 
                textShadow: '0 0 30px rgba(255, 215, 0, 0.7)'
              }}
              animate={{ 
                x: [-10, 10, -10],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Join us at the magnificent <span className="font-bold text-[#FFD700]">Royal Heritage Hall</span>.
            </motion.p>

            {/* Animated address card */}
            <motion.div 
              className="group relative p-10 lg:p-12 bg-white/20 backdrop-blur-xl border-l-8 border-[#FFD700]/80 rounded-3xl shadow-2xl hover:shadow-[#FFD700]/40 transition-all duration-700 overflow-hidden max-w-lg"
              whileHover={{ x: 20, scale: 1.02 }}
            >
              {/* Shimmer effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/40 via-transparent to-[#FFD700]/40 opacity-0 group-hover:opacity-100"
                animate={{ x: ["-100%", "100%", "-100%"] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              <p className="text-2xl lg:text-3xl font-medium text-[#FFD700] drop-shadow-xl relative z-10 tracking-wide leading-relaxed">
                123 Palace Road, Emerald City
              </p>
            </motion.div>
          </motion.div>

          {/* Right Map */}
          <motion.div 
            variants={itemVariants}
            className="relative h-[500px] lg:h-[550px] xl:h-[600px] rounded-[3rem] overflow-hidden shadow-3xl border-8 border-white/30 backdrop-blur-sm group"
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <iframe 
              title="map" 
              src="http://googleusercontent.com/maps.google.com/4"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-1000 brightness-110 hover:brightness-125 rounded-[3rem]"
            />
            
            {/* Animated map frame */}
            <motion.div 
              className="absolute inset-0 border-4 border-[#FFD700]/70 rounded-[3rem]"
              animate={{ 
                scale: [1, 1.03, 1],
                boxShadow: [
                  "0 0 30px rgba(255, 215, 0, 0.4)",
                  "0 0 60px rgba(255, 215, 0, 0.7)",
                  "0 0 30px rgba(255, 215, 0, 0.4)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Stay Options */}
        <motion.div 
          className="mt-24 lg:mt-32"
          variants={itemVariants}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h4 
            className="text-4xl lg:text-5xl text-center text-[#FFD700] drop-shadow-2xl mb-16 font-light italic tracking-wider"
            style={{ textShadow: '0 0 40px rgba(255, 215, 0, 0.8)' }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            Recommended Stay Options
          </motion.h4>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stayOptions.map((stay, idx) => (
              <motion.div
                key={stay.title}
                className="group relative p-8 lg:p-10 bg-white/15 backdrop-blur-xl rounded-3xl border border-[#FFD700]/40 hover:border-[#FFD700]/70 shadow-xl hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-700 overflow-hidden cursor-pointer"
                whileHover={{ 
                  y: -15, 
                  scale: 1.05, 
                  rotateX: idx === 0 ? -3 : idx === 1 ? 0 : 3
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + idx * 0.2 }}
              >
                {/* Background shimmer */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/30 via-[#E91E63]/20 to-[#FFD700]/30 opacity-0 group-hover:opacity-100 rounded-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                <h5 className="text-2xl lg:text-3xl font-bold text-[#FFD700] drop-shadow-xl mb-3 tracking-tight relative z-10">
                  {stay.title}
                </h5>
                <p className="text-xl text-[#FFD700] font-semibold drop-shadow-lg mb-2 relative z-10">
                  {stay.price}
                </p>
                <p className="text-lg text-[#FFD700]/90 italic drop-shadow-md relative z-10">
                  {stay.distance} away
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-15 pointer-events-none z-25" />
    </section>
  );
}
