import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))' }}
      >
        <defs>
          {/* Gradients avec BEAUCOUP plus de contraste */}
          <linearGradient id="facet1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb3c1" />
            <stop offset="50%" stopColor="#ff8fa3" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>
          
          <linearGradient id="facet2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff8fa3" />
            <stop offset="50%" stopColor="#ff6b81" />
            <stop offset="100%" stopColor="#ff497c" />
          </linearGradient>
          
          <linearGradient id="facet3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="50%" stopColor="#b03a3a" />
            <stop offset="100%" stopColor="#ff497c" />
          </linearGradient>
          
          <linearGradient id="facet4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#b03a3a" />
            <stop offset="50%" stopColor="#8b2f2f" />
            <stop offset="100%" stopColor="#c94545" />
          </linearGradient>

          <linearGradient id="facetDark1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b2f2f" />
            <stop offset="100%" stopColor="#6b2020" />
          </linearGradient>
          
          <linearGradient id="facetDark2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b2f2f" />
            <stop offset="100%" stopColor="#6b2020" />
          </linearGradient>
        </defs>

        {/* PARTIE CENTRALE DU COEUR - Facette principale */}
        <motion.path
          d="M200,150 L120,220 L200,320 L280,220 Z"
          fill="url(#facet1)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8, type: "spring" }}
        />

        {/* LOBE GAUCHE HAUT - Facettes multiples pour effet 3D */}
        <motion.path
          d="M200,150 L140,120 L120,160 L120,220 Z"
          fill="url(#facet2)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: -100, opacity: 0, rotateY: 90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 2, delay: 0.4, type: "spring" }}
        />

        <motion.path
          d="M140,120 L100,100 L80,140 L120,160 Z"
          fill="url(#facet3)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: -100, opacity: 0, rotateY: 90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 2, delay: 0.6, type: "spring" }}
        />

        <motion.path
          d="M80,140 L70,180 L120,220 L120,160 Z"
          fill="url(#facet3)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
        />

        {/* LOBE DROIT HAUT - Facettes multiples */}
        <motion.path
          d="M200,150 L260,120 L280,160 L280,220 Z"
          fill="url(#facet2)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: 100, opacity: 0, rotateY: -90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 2, delay: 0.4, type: "spring" }}
        />

        <motion.path
          d="M260,120 L300,100 L320,140 L280,160 Z"
          fill="url(#facet4)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: 100, opacity: 0, rotateY: -90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 2, delay: 0.6, type: "spring" }}
        />

        <motion.path
          d="M320,140 L330,180 L280,220 L280,160 Z"
          fill="url(#facet4)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
        />

        {/* PARTIE BASSE GAUCHE */}
        <motion.path
          d="M120,220 L70,260 L200,320 Z"
          fill="url(#facetDark1)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />

        {/* PARTIE BASSE DROITE */}
        <motion.path
          d="M280,220 L330,260 L200,320 Z"
          fill="url(#facetDark2)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />

        {/* ARÊTES DE PLIAGE */}
        <motion.g
          stroke="#1a0505"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="6,3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <line x1="200" y1="150" x2="200" y2="320" />
          <line x1="140" y1="120" x2="200" y2="320" />
          <line x1="260" y1="120" x2="200" y2="320" />
        </motion.g>

        {/* REFLETS LUMINEUX */}
        <motion.g
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <ellipse cx="190" cy="170" rx="15" ry="10" opacity="0.8" />
          <circle cx="150" cy="150" r="8" opacity="0.6" />
          <circle cx="250" cy="150" r="8" opacity="0.6" />
        </motion.g>

      </svg>

      {/* Double ombre portée */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-black rounded-full blur-3xl"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.5, scaleX: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      />

      <motion.div
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-56 h-10 bg-kontfeel-pink rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </div>
  );
}

export default OrigamiHeart;