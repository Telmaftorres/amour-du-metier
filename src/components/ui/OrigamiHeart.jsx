import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      {/* Image du cœur avec effet de battement */}
      <motion.img
        src="/src/assets/heart.png"
        alt="Cœur Kontfeel"
        className="w-64 h-64 object-contain"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glow effect derrière */}
      <motion.div
        className="absolute inset-0 bg-kontfeel-pink rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default OrigamiHeart;