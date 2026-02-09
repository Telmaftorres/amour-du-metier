import { motion } from 'framer-motion';
import heartImg from "../../assets/heart.png";


function OrigamiHeart() {
  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center">
      {/* Image du cœur avec effet de battement */}
      <motion.img
        src={heartImg}
        alt="Cœur Kontfeel"
        className="w-80 h-80 md:w-200 md:h-200 object-contain relative z-10"
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