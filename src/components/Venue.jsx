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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 }
    }
  };

  const stayOptions = [
    { title: "Royal Palace Hotel", price: "₹15,000/night", distance: "2.1 km" },
    { title: "Emerald Heritage Stay", price: "₹12,500/night", distance: "1.8 km" },
    { title: "Grand Crown Resort", price: "₹18,000/night", distance: "3.2 km" },
  ];

  return (
    <section
      id="venue"
      className="py-28 relative overflow-hidden"
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
      {/* 1. The Vignette (Matching Footer) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.75)_100%)] z-10 pointer-events-none" />

      {/* 2. Floating Golden Sparkles (Matching Footer) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-70 ${
              i % 2 === 0 ? 'bg-[#FFD700]' : 'bg-white/40'
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
        className="relative z-30 max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Left: Message and Venue Details */}
          <motion.div variants={itemVariants} className="md:col-span-8">
            <h3 className="text-6xl lg:text-7xl font-serif italic text-[#FFD700] mb-8" 
                style={{ textShadow: '0 0 30px rgba(255, 215, 0, 0.6)' }}>
              The Venue
            </h3>

            <div className="space-y-6 mb-10">
              <p className="text-2xl lg:text-4xl text-white font-light leading-snug">
                We are doing our <span className="text-[#FFD700] font-bold">Main Wedding Ceremony</span> at the Royal Heritage Hall.
              </p>
              
              <div className="inline-block p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-[#FFD700]/30 shadow-2xl">
                <p className="text-[#FFD700] text-2xl font-bold">
                  Kindly join us at <span className="text-white">6:30 PM</span>
                </p>
                <p className="text-white/80 italic mt-1 uppercase tracking-widest text-sm font-semibold">
                  123 Palace Road, Emerald City
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Small Map */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4"
          >
            <div className="relative h-64 w-64 md:h-72 md:w-72 mx-auto rounded-[2.5rem] overflow-hidden border-4 border-[#FFD700]/40 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913127413!2d77.40516037553531!3d28.502925975735395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621cae519063f667!2sNoida%20Greater%20Noida%20Expy%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-700"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>

        {/* Accommodation Cards */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          {stayOptions.map((stay) => (
            <motion.div
              key={stay.title}
              variants={itemVariants}
              whileHover={{ y: -10, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-[#FFD700]/20 text-center transition-all duration-500"
            >
              <h5 className="text-xl text-[#FFD700] font-bold mb-2">{stay.title}</h5>
              <p className="text-white text-lg">{stay.price}</p>
              <p className="text-white/60 text-sm italic">{stay.distance} from Venue</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3. Texture overlay (Matching Footer) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-15 pointer-events-none z-25" />
    </section>
  );
}


