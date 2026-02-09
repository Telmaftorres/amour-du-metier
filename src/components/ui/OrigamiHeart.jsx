import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 20px 40px rgba(255, 73, 124, 0.4))' }}
      >
        <defs>
          {/* Gradients pour effet 3D - facettes claires */}
          <linearGradient id="facet1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b81" />
            <stop offset="100%" stopColor="#ff8fa3" />
          </linearGradient>
          
          <linearGradient id="facet2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>
          
          <linearGradient id="facet3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="100%" stopColor="#ff497c" />
          </linearGradient>
          
          <linearGradient id="facet4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#b03a3a" />
            <stop offset="100%" stopColor="#c94545" />
          </linearGradient>

          {/* Gradients pour facettes sombres */}
          <linearGradient id="facetDark1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="100%" stopColor="#a83838" />
          </linearGradient>
          
          <linearGradient id="facetDark2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b03a3a" />
            <stop offset="100%" stopColor="#c94545" />
          </linearGradient>
        </defs>

        {/* PARTIE CENTRALE DU COEUR - Facette principale */}
        <motion.path
          d="M200,150 L120,220 L200,320 L280,220 Z"
          fill="url(#facet1)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* LOBE GAUCHE HAUT - Facettes multiples pour effet 3D */}
        <motion.path
          d="M200,150 L140,120 L120,160 L120,220 Z"
          fill="url(#facet2)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: -100, opacity: 0, rotateY: 90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        />

        <motion.path
          d="M140,120 L100,100 L80,140 L120,160 Z"
          fill="url(#facetDark1)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: -100, opacity: 0, rotateY: 90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />

        <motion.path
          d="M80,140 L70,180 L120,220 L120,160 Z"
          fill="url(#facet3)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* LOBE DROIT HAUT - Facettes multiples */}
        <motion.path
          d="M200,150 L260,120 L280,160 L280,220 Z"
          fill="url(#facet2)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: 100, opacity: 0, rotateY: -90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
        />

        <motion.path
          d="M260,120 L300,100 L320,140 L280,160 Z"
          fill="url(#facetDark2)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: 100, opacity: 0, rotateY: -90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3, type: "spring" }}
        />

        <motion.path
          d="M320,140 L330,180 L280,220 L280,160 Z"
          fill="url(#facet4)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* PARTIE BASSE GAUCHE */}
        <motion.path
          d="M120,220 L70,260 L200,320 Z"
          fill="url(#facetDark1)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* PARTIE BASSE DROITE */}
        <motion.path
          d="M280,220 L330,260 L200,320 Z"
          fill="url(#facetDark2)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* ARÊTES DE PLIAGE - lignes structurelles */}
        <motion.g
          stroke="#6b2020"
          strokeWidth="1.5"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          {/* Arêtes principales */}
          <line x1="200" y1="150" x2="200" y2="320" />
          <line x1="120" y1="220" x2="280" y2="220" />
          <line x1="140" y1="120" x2="200" y2="320" />
          <line x1="260" y1="120" x2="200" y2="320" />
        </motion.g>

        {/* REFLETS LUMINEUX pour effet brillant */}
        <motion.path
          d="M180,160 L190,150 L200,160 L190,170 Z"
          fill="white"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />

        <motion.path
          d="M140,180 L150,170 L160,180 L150,190 Z"
          fill="white"
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        />

      </svg>

      {/* Ombre portée animée */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-kontfeel-pink rounded-full blur-2xl"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.3, scaleX: 1 }}
        transition={{ duration: 1, delay: 1 }}
      />
    </div>
  );
}

export default OrigamiHeart;