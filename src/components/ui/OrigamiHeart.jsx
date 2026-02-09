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
          {/* Gradients avec BEAUCOUP plus de contraste pour le relief */}
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
            <stop offset="0%" stopColor="#ff6b81" />
            <stop offset="50%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#e94560" />
          </linearGradient>
          
          <linearGradient id="facet4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff497c" />
            <stop offset="50%" stopColor="#c94545" />
            <stop offset="100%" stopColor="#b03a3a" />
          </linearGradient>

          <linearGradient id="facetDark1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="50%" stopColor="#b03a3a" />
            <stop offset="100%" stopColor="#8b2f2f" />
          </linearGradient>
          
          <linearGradient id="facetDark2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b03a3a" />
            <stop offset="50%" stopColor="#8b2f2f" />
            <stop offset="100%" stopColor="#6b2020" />
          </linearGradient>

          <linearGradient id="facetShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b2f2f" />
            <stop offset="50%" stopColor="#6b2020" />
            <stop offset="100%" stopColor="#4a1515" />
          </linearGradient>
        </defs>

        {/* PARTIE CENTRALE DU COEUR - Facette principale (la plus claire) */}
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

        {/* LOBE GAUCHE HAUT - Facette extérieure */}
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

        {/* LOBE GAUCHE HAUT - Facette arrondie (plus sombre) */}
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

        {/* LOBE GAUCHE - Facette médiane */}
        <motion.path
          d="M80,140 L70,180 L120,220 L120,160 Z"
          fill="url(#facet4)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.8 }}
        />

        {/* LOBE DROIT HAUT - Facette extérieure */}
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

        {/* LOBE DROIT HAUT - Facette arrondie (plus sombre) */}
        <motion.path
          d="M260,120 L300,100 L320,140 L280,160 Z"
          fill="url(#facet3)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ x: 100, opacity: 0, rotateY: -90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 2, delay: 0.6, type: "spring" }}
        />

        {/* LOBE DROIT - Facette médiane */}
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

        {/* PARTIE BASSE GAUCHE - Facette sombre */}
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

        {/* PARTIE BASSE DROITE - Facette sombre */}
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

        {/* POINTE CENTRALE BAS - La plus sombre */}
        <motion.path
          d="M120,220 L200,260 L280,220 L200,320 Z"
          fill="url(#facetShadow)"
          stroke="#2a0a0a"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />

        {/* ARÊTES DE PLIAGE - Plus épaisses et visibles */}
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
          <line x1="120" y1="220" x2="280" y2="220" />
          <line x1="100" y1="100" x2="200" y2="260" />
          <line x1="300" y1="100" x2="200" y2="260" />
        </motion.g>

        {/* REFLETS LUMINEUX - Plus prononcés */}
        <motion.g
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <ellipse cx="190" cy="170" rx="15" ry="10" opacity="0.8" />
          <circle cx="150" cy="150" r="8" opacity="0.6" />
          <circle cx="250" cy="150" r="8" opacity="0.6" />
          <ellipse cx="200" cy="220" rx="12" ry="8" opacity="0.5" />
        </motion.g>

        {/* OMBRES PORTÉES sur facettes pour accentuer le relief */}
        <motion.g
          fill="black"
          opacity="0.25"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1, delay: 2.3 }}
        >
          <path d="M120,160 L125,165 L120,220 Z" />
          <path d="M280,160 L275,165 L280,220 Z" />
          <path d="M200,260 L205,265 L195,265 Z" />
        </motion.g>

      </svg>

      {/* Double ombre portée pour plus de profondeur */}
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