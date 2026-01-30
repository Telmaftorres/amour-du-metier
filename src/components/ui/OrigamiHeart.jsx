import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg
        viewBox="0 0 240 240"
        className="w-full h-full"
      >
        <defs>
          {/* Gradient pour effet papier/matière */}
          <linearGradient id="paperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b81" />
            <stop offset="50%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#c94545" />
          </linearGradient>
          
          {/* Filtre pour ombre portée */}
          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#ff497c" floodOpacity="0.4"/>
          </filter>
        </defs>

        {/* Fond du cœur complet qui apparaît d'un coup */}
        <motion.path
          d="M120,190 L60,130 Q40,110 40,85 Q40,60 60,45 Q80,30 100,45 L120,60 L140,45 Q160,30 180,45 Q200,60 200,85 Q200,110 180,130 Z"
          fill="url(#paperGradient)"
          filter="url(#shadow)"
          initial={{ scale: 0, opacity: 0, rotate: -180 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            duration: 1.5,
            delay: 0.2,
            type: "spring",
            stiffness: 80,
            damping: 15
          }}
          style={{ transformOrigin: "120px 120px" }}
        />

        {/* Lignes de découpe/traçage qui dessinent le contour */}
        <motion.path
          d="M120,190 L60,130 Q40,110 40,85 Q40,60 60,45 Q80,30 100,45 L120,60 L140,45 Q160,30 180,45 Q200,60 200,85 Q200,110 180,130 Z"
          stroke="#1f2732"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="400"
          initial={{ strokeDashoffset: 400, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Ligne de pliage centrale verticale */}
        <motion.line
          x1="120"
          y1="60"
          x2="120"
          y2="190"
          stroke="#1f2732"
          strokeWidth="1.5"
          strokeDasharray="4,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        />

        {/* Lignes de pliage diagonales (effet origami) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <line x1="120" y1="60" x2="60" y2="100" stroke="#1f2732" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="120" y1="60" x2="180" y2="100" stroke="#1f2732" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="60" y1="100" x2="120" y2="140" stroke="#1f2732" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="180" y1="100" x2="120" y2="140" stroke="#1f2732" strokeWidth="1" strokeDasharray="3,3" />
        </motion.g>

      </svg>

      {/* Particules légères autour */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-kontfeel-pink rounded-full"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.6, 0],
            y: [0, -20, -40]
          }}
          transition={{ 
            duration: 2,
            delay: 2 + i * 0.2,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

export default OrigamiHeart;