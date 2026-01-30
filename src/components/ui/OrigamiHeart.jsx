import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(255, 73, 124, 0.3))' }}
      >
        {/* Lignes de pliage qui apparaissent progressivement */}
        <motion.path
          d="M100,100 L100,50 M100,100 L70,70 M100,100 L130,70"
          stroke="#ff497c"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5,5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />

        {/* Partie gauche du cœur qui se plie */}
        <motion.path
          d="M100,50 Q80,30 60,50 Q40,70 60,90 L100,130"
          fill="#ff497c"
          initial={{ scale: 0, x: -50, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          style={{ transformOrigin: "100px 50px" }}
        />

        {/* Partie droite du cœur qui se plie */}
        <motion.path
          d="M100,50 Q120,30 140,50 Q160,70 140,90 L100,130"
          fill="#ff497c"
          initial={{ scale: 0, x: 50, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{ 
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 100
          }}
          style={{ transformOrigin: "100px 50px" }}
        />

        {/* Ligne de pliage centrale qui apparaît */}
        <motion.line
          x1="100"
          y1="50"
          x2="100"
          y2="130"
          stroke="#c94545"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1, delay: 1 }}
        />

        {/* Petites lignes de pliage diagonales */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <line x1="80" y1="70" x2="90" y2="80" stroke="#c94545" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="120" y1="70" x2="110" y2="80" stroke="#c94545" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="70" y1="90" x2="80" y2="100" stroke="#c94545" strokeWidth="1" strokeDasharray="2,2" />
          <line x1="130" y1="90" x2="120" y2="100" stroke="#c94545" strokeWidth="1" strokeDasharray="2,2" />
        </motion.g>

        {/* Point de pliage central */}
        <motion.circle
          cx="100"
          cy="50"
          r="3"
          fill="#ff6b81"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        />
      </svg>

      {/* Effet de brillance qui passe */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{ duration: 1.5, delay: 1.8 }}
        style={{ mixBlendMode: 'overlay' }}
      />
    </div>
  );
}

export default OrigamiHeart;