import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        style={{ filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.6))' }}
      >
        <defs>
          {/* Gradients avec BEAUCOUP plus de contraste */}
          <linearGradient id="ultra1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb3c1" />
            <stop offset="50%" stopColor="#ff8fa3" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>
          
          <linearGradient id="ultra2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff8fa3" />
            <stop offset="50%" stopColor="#ff6b81" />
            <stop offset="100%" stopColor="#ff497c" />
          </linearGradient>
          
          <linearGradient id="ultra3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b81" />
            <stop offset="50%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#e94560" />
          </linearGradient>
          
          <linearGradient id="ultra4" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff497c" />
            <stop offset="50%" stopColor="#c94545" />
            <stop offset="100%" stopColor="#b03a3a" />
          </linearGradient>

          <linearGradient id="ultraDark1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="50%" stopColor="#b03a3a" />
            <stop offset="100%" stopColor="#8b2f2f" />
          </linearGradient>
          
          <linearGradient id="ultraDark2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b03a3a" />
            <stop offset="50%" stopColor="#8b2f2f" />
            <stop offset="100%" stopColor="#6b2020" />
          </linearGradient>

          <linearGradient id="ultraShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6b2020" />
            <stop offset="100%" stopColor="#4a1515" />
          </linearGradient>

          {/* Filtres pour ombres internes */}
          <filter id="innerShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="3" dy="3"/>
            <feComposite operator="out" in="SourceAlpha"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.6"/>
            </feComponentTransfer>
          </filter>
        </defs>

        {/* SOMMET CENTRAL - Facette la plus claire */}
        <motion.path
          d="M200,120 L160,160 L200,180 L240,160 Z"
          fill="url(#ultra1)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, scale: 0, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, type: "spring", stiffness: 100 }}
        />

        {/* LOBE GAUCHE - Facette supérieure externe */}
        <motion.path
          d="M160,160 L100,140 L80,180 Z"
          fill="url(#ultra2)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, x: -150, rotateY: 120 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 2, delay: 1.2, type: "spring", stiffness: 80 }}
        />

        {/* LOBE GAUCHE - Facette arrondie */}
        <motion.path
          d="M100,140 L60,130 L50,180 L80,180 Z"
          fill="url(#ultra3)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, x: -180, rotateY: 150 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 2, delay: 1.4, type: "spring", stiffness: 70 }}
        />

        {/* LOBE GAUCHE - Facette médiane (plus sombre) */}
        <motion.path
          d="M80,180 L50,180 L60,230 L120,240 Z"
          fill="url(#ultra4)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.6 }}
        />

        {/* LOBE DROIT - Facette supérieure externe */}
        <motion.path
          d="M240,160 L300,140 L320,180 Z"
          fill="url(#ultra2)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, x: 150, rotateY: -120 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 2, delay: 1.2, type: "spring", stiffness: 80 }}
        />

        {/* LOBE DROIT - Facette arrondie */}
        <motion.path
          d="M300,140 L340,130 L350,180 L320,180 Z"
          fill="url(#ultra3)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, x: 180, rotateY: -150 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 2, delay: 1.4, type: "spring", stiffness: 70 }}
        />

        {/* LOBE DROIT - Facette médiane (plus sombre) */}
        <motion.path
          d="M320,180 L350,180 L340,230 L280,240 Z"
          fill="url(#ultra4)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 1.6 }}
        />

        {/* CENTRE - Facette médiane gauche */}
        <motion.path
          d="M160,160 L120,240 L200,260 L200,180 Z"
          fill="url(#ultra3)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        />

        {/* CENTRE - Facette médiane droite */}
        <motion.path
          d="M240,160 L280,240 L200,260 L200,180 Z"
          fill="url(#ultra3)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        />

        {/* BAS GAUCHE - Facette sombre */}
        <motion.path
          d="M120,240 L80,280 L200,340 L200,260 Z"
          fill="url(#ultraDark1)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.8, delay: 2.2, type: "spring", stiffness: 90 }}
        />

        {/* BAS GAUCHE - Facette externe très sombre */}
        <motion.path
          d="M60,230 L80,280 L120,240 Z"
          fill="url(#ultraDark2)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.4 }}
        />

        {/* BAS DROIT - Facette sombre */}
        <motion.path
          d="M280,240 L320,280 L200,340 L200,260 Z"
          fill="url(#ultraDark1)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, y: 100, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.8, delay: 2.2, type: "spring", stiffness: 90 }}
        />

        {/* BAS DROIT - Facette externe très sombre */}
        <motion.path
          d="M340,230 L320,280 L280,240 Z"
          fill="url(#ultraDark2)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.4 }}
        />

        {/* POINTE CENTRALE - La plus sombre */}
        <motion.path
          d="M200,260 L80,280 L200,340 L320,280 Z"
          fill="url(#ultraShadow)"
          stroke="#4a1515"
          strokeWidth="3"
          strokeLinejoin="bevel"
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.6 }}
        />

        {/* ARÊTES DE PLIAGE - Très marquées */}
        <motion.g
          stroke="#1a0505"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray="6,3"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 2, delay: 3 }}
        >
          {/* Arête centrale */}
          <line x1="200" y1="120" x2="200" y2="340" />
          {/* Arêtes diagonales principales */}
          <line x1="160" y1="160" x2="200" y2="340" />
          <line x1="240" y1="160" x2="200" y2="340" />
          {/* Arêtes secondaires */}
          <line x1="100" y1="140" x2="200" y2="260" />
          <line x1="300" y1="140" x2="200" y2="260" />
          <line x1="120" y1="240" x2="280" y2="240" />
          <line x1="80" y1="180" x2="320" y2="180" />
        </motion.g>

        {/* REFLETS LUMINEUX très marqués */}
        <motion.g
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <ellipse cx="190" cy="150" rx="12" ry="8" opacity="0.8" />
          <circle cx="150" cy="180" r="6" opacity="0.6" />
          <circle cx="250" cy="180" r="6" opacity="0.6" />
          <ellipse cx="200" cy="220" rx="10" ry="6" opacity="0.5" />
        </motion.g>

        {/* OMBRES PORTÉES sur certaines facettes */}
        <motion.g
          fill="black"
          opacity="0.2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 3.2 }}
        >
          <path d="M80,180 L85,185 L120,242 L120,240 Z" />
          <path d="M320,180 L315,185 L280,242 L280,240 Z" />
        </motion.g>

      </svg>

      {/* Ombre portée TRÈS prononcée */}
      <motion.div
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-black rounded-full blur-3xl"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.5, scaleX: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />

      {/* Deuxième ombre (glow rose) */}
      <motion.div
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-56 h-10 bg-kontfeel-pink rounded-full blur-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 2.5 }}
      />
    </div>
  );
}

export default OrigamiHeart;