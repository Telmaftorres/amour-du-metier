import { motion } from 'framer-motion';
import { useEffect } from 'react';

function Intro({ onComplete }) {
  useEffect(() => {
    // Passer à Welcome après 4 secondes (plus long pour profiter de l'animation)
    const timer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* BEAUCOUP plus de particules de cœurs qui flottent - 50 au lieu de 15 */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{ 
            opacity: 0,
            y: window.innerHeight + 100
          }}
          animate={{ 
            opacity: [0, 0.6, 0.4, 0],
            y: -150,
            x: [0, (Math.random() - 0.5) * 100],
            rotate: [0, (Math.random() - 0.5) * 360]
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 3,
            ease: "easeOut"
          }}
        >
          ❤️
        </motion.div>
      ))}

      {/* Logo principal avec animations DOUCES */}
      <motion.div
        className="relative z-10"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 2,
          ease: "easeOut"
        }}
      >
        {/* Glow effect derrière le logo - plus doux */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255,73,124,0.5) 0%, rgba(255,73,124,0) 70%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Logo avec animation de flottement plus douce */}
        <motion.img 
          src="/logo.png" 
          alt="Kontfeel"
          className="w-200 h-200 object-contain relative z-10"
          animate={{
            y: [0, -15, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Texte qui apparaît après - plus lent */}
      <motion.div
        className="absolute bottom-32 text-center w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <p className="text-2xl text-gray-400 font-light">
          Une expérience <span className="text-kontfeel-pink font-semibold">Kontfeel</span>
        </p>
      </motion.div>

    </div>
  );
}

export default Intro;