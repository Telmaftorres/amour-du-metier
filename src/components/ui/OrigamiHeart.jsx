import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-56 h-56 mx-auto">
      <svg
        viewBox="0 0 300 300"
        className="w-full h-full"
      >
        <defs>
          {/* Gradient pour effet matière pliée */}
          <linearGradient id="foldGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="50%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>
          
          <linearGradient id="foldGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="50%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>

          {/* Ombre pour profondeur */}
          <filter id="innerShadow">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="2" dy="2" result="offsetblur"/>
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.5"/>
            </feComponentTransfer>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* PARTIE GAUCHE DU COEUR - Se déplie de la gauche */}
        <motion.path
          d="M150,80 Q130,60 110,60 Q70,60 70,100 Q70,130 100,160 L150,210"
          fill="url(#foldGradient1)"
          stroke="#1f2732"
          strokeWidth="2"
          filter="url(#innerShadow)"
          initial={{ 
            scaleX: 0,
            x: -80,
            opacity: 0,
            rotateY: 90
          }}
          animate={{ 
            scaleX: 1,
            x: 0,
            opacity: 1,
            rotateY: 0
          }}
          transition={{ 
            duration: 1.2,
            delay: 0.3,
            type: "spring",
            stiffness: 60
          }}
          style={{ transformOrigin: "150px 150px" }}
        />

        {/* PARTIE DROITE DU COEUR - Se déplie de la droite */}
        <motion.path
          d="M150,80 Q170,60 190,60 Q230,60 230,100 Q230,130 200,160 L150,210"
          fill="url(#foldGradient2)"
          stroke="#1f2732"
          strokeWidth="2"
          filter="url(#innerShadow)"
          initial={{ 
            scaleX: 0,
            x: 80,
            opacity: 0,
            rotateY: -90
          }}
          animate={{ 
            scaleX: 1,
            x: 0,
            opacity: 1,
            rotateY: 0
          }}
          transition={{ 
            duration: 1.2,
            delay: 0.5,
            type: "spring",
            stiffness: 60
          }}
          style={{ transformOrigin: "150px 150px" }}
        />

        {/* LIGNE DE PLIAGE CENTRALE - Très visible */}
        <motion.line
          x1="150"
          y1="80"
          x2="150"
          y2="210"
          stroke="#1f2732"
          strokeWidth="3"
          strokeDasharray="8,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 1.2, ease: "easeInOut" }}
        />

        {/* LIGNES DE PLIAGE DIAGONALES - Très marquées */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 1.8 }}
          stroke="#1f2732"
          strokeWidth="2"
          strokeDasharray="6,3"
        >
          {/* Lignes de construction du haut */}
          <line x1="150" y1="80" x2="100" y2="120" />
          <line x1="150" y1="80" x2="200" y2="120" />
          
          {/* Lignes de construction du milieu */}
          <line x1="100" y1="120" x2="150" y2="165" />
          <line x1="200" y1="120" x2="150" y2="165" />
          
          {/* Lignes supplémentaires pour effet origami */}
          <line x1="100" y1="160" x2="150" y2="210" />
          <line x1="200" y1="160" x2="150" y2="210" />
        </motion.g>

        {/* POINTS DE PLIAGE - Très visibles */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        >
          <circle cx="150" cy="80" r="5" fill="#1f2732" />
          <circle cx="100" cy="120" r="4" fill="#1f2732" />
          <circle cx="200" cy="120" r="4" fill="#1f2732" />
          <circle cx="150" cy="165" r="4" fill="#1f2732" />
          <circle cx="150" cy="210" r="5" fill="#1f2732" />
        </motion.g>

        {/* ANNOTATIONS DE PLIAGE (optionnel - style plan technique) */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          fill="none"
          stroke="#ff497c"
          strokeWidth="1"
        >
          {/* Petites marques de mesure */}
          <line x1="145" y1="75" x2="145" y2="85" />
          <line x1="155" y1="75" x2="155" y2="85" />
        </motion.g>

      </svg>

      {/* OMBRE PORTÉE DYNAMIQUE */}
      <motion.div
        className="absolute inset-0 bg-kontfeel-pink rounded-full blur-3xl -z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </div>
  );
}

export default OrigamiHeart;