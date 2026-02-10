import { motion } from "framer-motion";
import heartImg from "../../assets/heart.png";

function OrigamiHeart() {
  return (
    <div className="relative w-80 h-80 mx-auto flex items-center justify-center overflow-visible">
      
      {/* Glow derrière */}
      <motion.div
        className="absolute inset-8 bg-kontfeel-pink rounded-full blur-2xl opacity-30 -z-10"
        animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.18, 0.32, 0.18] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />


      {/* Coeur */}
      <motion.img
        src={heartImg}
        alt="Cœur Kontfeel"
        className="w-96 h-96 md:w-[420px] md:h-[420px] object-contain max-w-none max-h-none relative z-10"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export default OrigamiHeart;
