import { motion } from 'framer-motion';

function OrigamiHeartV2() {
  return (
    <div className="relative w-80 h-80 mx-auto">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ 
          filter: 'drop-shadow(0 25px 50px rgba(255, 73, 124, 0.5))',
        }}
      >
        <defs>
          {/* Gradients pour effet 3D */}
          <radialGradient id="crumpled" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8fa3" />
            <stop offset="50%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#c94545" />
          </radialGradient>
          
          <linearGradient id="facetTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb3c1" />
            <stop offset="100%" stopColor="#ff8fa3" />
          </linearGradient>
          
          <linearGradient id="facetLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff8fa3" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>
          
          <linearGradient id="facetMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b81" />
            <stop offset="100%" stopColor="#ff497c" />
          </linearGradient>
          
          <linearGradient id="facetDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#c94545" />
          </linearGradient>

          <linearGradient id="facetDeep" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="100%" stopColor="#8b2f2f" />
          </linearGradient>
        </defs>

        {/* BOULE DE PAPIER FROISSÉE - Début */}
        <motion.g
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        >
          {/* Forme irrégulière pour simuler le froissement */}
          <path
            d="M250,200 Q230,190 220,210 Q210,230 230,240 Q240,250 250,245 Q265,242 275,235 Q285,225 280,210 Q270,195 250,200 Z"
            fill="url(#crumpled)"
            stroke="#8b2f2f"
            strokeWidth="2"
          />
          <path
            d="M245,210 Q240,220 250,230 Q260,225 255,215 Z"
            fill="#c94545"
            stroke="#6b2020"
            strokeWidth="1"
          />
          <circle cx="235" cy="220" r="15" fill="#ff6b81" opacity="0.7" />
          <circle cx="265" cy="225" r="12" fill="#ff497c" opacity="0.7" />
          
          {/* Lignes de froissement */}
          <g stroke="#6b2020" strokeWidth="2" fill="none">
            <path d="M220,210 L280,235" />
            <path d="M230,240 L270,210" />
            <path d="M240,200 L260,240" />
          </g>
        </motion.g>

        {/* === LE COEUR QUI SE FORME === */}

        {/* Sommet du cœur - Facette claire */}
        <motion.path
          d="M250,150 L220,180 L250,200 L280,180 Z"
          fill="url(#facetTop)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, type: "spring" }}
        />

        {/* Lobe GAUCHE supérieur - 3 facettes */}
        <motion.path
          d="M220,180 L160,170 L140,210 Z"
          fill="url(#facetLight)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, x: -100, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 1.8, type: "spring" }}
        />

        <motion.path
          d="M160,170 L120,160 L100,200 L140,210 Z"
          fill="url(#facetMid)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, x: -120, rotateY: 90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 2, type: "spring" }}
        />

        <motion.path
          d="M100,200 L90,240 L140,260 L140,210 Z"
          fill="url(#facetDark)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        />

        {/* Lobe DROIT supérieur - 3 facettes */}
        <motion.path
          d="M280,180 L340,170 L360,210 Z"
          fill="url(#facetLight)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, x: 100, rotateY: -90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 1.8, type: "spring" }}
        />

        <motion.path
          d="M340,170 L380,160 L400,200 L360,210 Z"
          fill="url(#facetMid)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, x: 120, rotateY: -90 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 2, type: "spring" }}
        />

        <motion.path
          d="M400,200 L410,240 L360,260 L360,210 Z"
          fill="url(#facetDark)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        />

        {/* Centre du cœur - Grande facette */}
        <motion.path
          d="M220,180 L140,260 L250,280 L280,180 L360,260 L250,280 Z"
          fill="url(#facetLight)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        />

        {/* Partie basse GAUCHE */}
        <motion.path
          d="M140,260 L110,300 L250,360 Z"
          fill="url(#facetDark)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.8, type: "spring" }}
        />

        {/* Partie basse DROITE */}
        <motion.path
          d="M360,260 L390,300 L250,360 Z"
          fill="url(#facetDark)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.8, type: "spring" }}
        />

        {/* Pointe du bas - Plus sombre */}
        <motion.path
          d="M250,280 L110,300 L250,360 L390,300 Z"
          fill="url(#facetDeep)"
          stroke="#6b2020"
          strokeWidth="2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.2 }}
        />

        {/* Arêtes de pliage */}
        <motion.g
          stroke="#4a1515"
          strokeWidth="1.5"
          strokeDasharray="4,2"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 3.5 }}
        >
          <line x1="250" y1="150" x2="250" y2="360" />
          <line x1="220" y1="180" x2="250" y2="360" />
          <line x1="280" y1="180" x2="250" y2="360" />
          <line x1="140" y1="260" x2="360" y2="260" />
        </motion.g>

        {/* Reflets */}
        <motion.g
          fill="white"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.8, delay: 4 }}
        >
          <circle cx="240" cy="190" r="6" />
          <circle cx="180" cy="220" r="4" />
          <circle cx="320" cy="220" r="4" />
        </motion.g>

      </svg>

      {/* Ombre */}
      <motion.div
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-56 h-10 bg-kontfeel-pink rounded-full blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 3 }}
      />
    </div>
  );
}

export default OrigamiHeartV2;