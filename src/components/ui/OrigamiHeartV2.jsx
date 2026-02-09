import { motion } from 'framer-motion';

function OrigamiHeart() {
  return (
    <div className="relative w-80 h-80 mx-auto">
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
          transition={{ duration: 1.5, delay: 0.8 }}
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
          transition={{ duration: 2, delay: 0.4, type: "spring" }}
        />

        <motion.path
          d="M140,120 L100,100 L80,140 L120,160 Z"
          fill="url(#facetDark1)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: -100, opacity: 0, rotateY: 90 }}
          animate={{ x: 0, opacity: 1, rotateY: 0 }}
          transition={{ duration: 2, delay: 0.6, type: "spring" }}
        />

        <motion.path
          d="M80,140 L70,180 L120,220 L120,160 Z"
          fill="url(#facet3)"
          stroke="#8b2f2f"
          strokeWidth="2"
          strokeLinejoin="bevel"
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, delay: 0.8 }}
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
          transition={{ duration: 1.5, delay: 1.2 }}
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
          transition={{ duration: 1.5, delay: 1.2 }}
        />

        {/* ARÊTES DE PLIAGE - lignes structurelles */}
        <motion.g
          stroke="#6b2020"
          strokeWidth="1.5"
          fill="none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 2 }}
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
          transition={{ duration: 0.8, delay: 2.5 }}
        />

        <motion.path
          d="M140,180 L150,170 L160,180 L150,190 Z"
          fill="white"
          opacity="0.3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.8, delay: 2.6 }}
        />

      </svg>

      {/* Ombre portée animée */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-8 bg-kontfeel-pink rounded-full blur-2xl"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 0.3, scaleX: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
      />
    </div>
  );
}

import { motion } from 'framer-motion';

function OrigamiHeartV2() {
  return (
    <div className="relative w-80 h-80 mx-auto perspective-1000">
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ 
          filter: 'drop-shadow(0 25px 50px rgba(255, 73, 124, 0.5))',
        }}
      >
        <defs>
          {/* Gradients pour effet papier 3D ultra réaliste */}
          <linearGradient id="paperLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb3c1" />
            <stop offset="50%" stopColor="#ff8fa3" />
            <stop offset="100%" stopColor="#ff6b81" />
          </linearGradient>
          
          <linearGradient id="paperMid" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b81" />
            <stop offset="50%" stopColor="#ff497c" />
            <stop offset="100%" stopColor="#e94560" />
          </linearGradient>
          
          <linearGradient id="paperDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c94545" />
            <stop offset="50%" stopColor="#b03a3a" />
            <stop offset="100%" stopColor="#8b2f2f" />
          </linearGradient>

          <linearGradient id="paperShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b2f2f" />
            <stop offset="100%" stopColor="#6b2020" />
          </linearGradient>

          {/* Filtre pour texture papier */}
          <filter id="paperTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise"/>
            <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1">
              <feDistantLight azimuth="45" elevation="60"/>
            </feDiffuseLighting>
            <feComposite operator="in" in2="SourceAlpha"/>
            <feComposite operator="arithmetic" k1="0" k2="1" k3="0.3" k4="0" in2="SourceGraphic"/>
          </filter>
        </defs>

        {/* BOULE FROISSÉE INITIALE - disparaît */}
        <motion.circle
          cx="250"
          cy="250"
          r="80"
          fill="url(#paperMid)"
          stroke="#8b2f2f"
          strokeWidth="3"
          filter="url(#paperTexture)"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Lignes de froissement sur la boule */}
        <motion.g
          stroke="#6b2020"
          strokeWidth="2"
          fill="none"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <path d="M200,250 Q225,230 250,250 Q275,270 300,250" />
          <path d="M220,280 Q240,260 260,280" />
          <path d="M230,220 Q250,210 270,220" />
        </motion.g>

        {/* === DÉBUT DU DÉPLIAGE === */}

        {/* FACETTE 1 - Sommet central (la plus claire) */}
        <motion.path
          d="M250,120 L200,180 L250,200 L300,180 Z"
          fill="url(#paperLight)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, scale: 0, rotateX: 90 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1.2, delay: 1, type: "spring", stiffness: 100 }}
          style={{ transformOrigin: "250px 160px" }}
        />

        {/* FACETTE 2 - Lobe gauche supérieur */}
        <motion.path
          d="M200,180 L130,150 L110,200 L180,220 Z"
          fill="url(#paperMid)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, x: -150, rotateY: 120 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 1.3, type: "spring", stiffness: 80 }}
        />

        {/* FACETTE 3 - Lobe gauche arrondi */}
        <motion.path
          d="M130,150 L90,120 L70,180 L110,200 Z"
          fill="url(#paperDark)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, x: -180, rotateY: 150 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 1.5, type: "spring", stiffness: 70 }}
        />

        {/* FACETTE 4 - Lobe droit supérieur */}
        <motion.path
          d="M300,180 L370,150 L390,200 L320,220 Z"
          fill="url(#paperMid)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, x: 150, rotateY: -120 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 1.3, type: "spring", stiffness: 80 }}
        />

        {/* FACETTE 5 - Lobe droit arrondi */}
        <motion.path
          d="M370,150 L410,120 L430,180 L390,200 Z"
          fill="url(#paperDark)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, x: 180, rotateY: -150 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.5, delay: 1.5, type: "spring", stiffness: 70 }}
        />

        {/* FACETTE 6 - Centre du cœur (zone médiane) */}
        <motion.path
          d="M180,220 L110,200 L120,280 L200,300 L250,260 Z"
          fill="url(#paperMid)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        />

        {/* FACETTE 7 - Centre droit */}
        <motion.path
          d="M320,220 L390,200 L380,280 L300,300 L250,260 Z"
          fill="url(#paperMid)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.8 }}
        />

        {/* FACETTE 8 - Pointe gauche du bas */}
        <motion.path
          d="M200,300 L120,280 L100,340 L250,380 Z"
          fill="url(#paperDark)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 2.2, type: "spring", stiffness: 90 }}
        />

        {/* FACETTE 9 - Pointe droite du bas */}
        <motion.path
          d="M300,300 L380,280 L400,340 L250,380 Z"
          fill="url(#paperDark)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, y: 80, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.5, delay: 2.2, type: "spring", stiffness: 90 }}
        />

        {/* FACETTE 10 - Pointe centrale du bas (la plus sombre) */}
        <motion.path
          d="M200,300 L250,320 L300,300 L250,380 Z"
          fill="url(#paperShadow)"
          stroke="#8b2f2f"
          strokeWidth="2.5"
          strokeLinejoin="miter"
          filter="url(#paperTexture)"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.5 }}
        />

        {/* ARÊTES DE PLIAGE - apparaissent en dernier */}
        <motion.g
          stroke="#4a1515"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,3"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 0.7, pathLength: 1 }}
          transition={{ duration: 2, delay: 3 }}
        >
          {/* Arête centrale verticale */}
          <line x1="250" y1="120" x2="250" y2="380" />
          {/* Arêtes diagonales principales */}
          <line x1="200" y1="180" x2="250" y2="380" />
          <line x1="300" y1="180" x2="250" y2="380" />
          {/* Arêtes secondaires */}
          <line x1="130" y1="150" x2="250" y2="260" />
          <line x1="370" y1="150" x2="250" y2="260" />
          <line x1="180" y1="220" x2="320" y2="220" />
        </motion.g>

        {/* REFLETS LUMINEUX - effet papier brillant */}
        <motion.g
          fill="white"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0.3] }}
          transition={{ duration: 1.5, delay: 3.5 }}
        >
          <path d="M240,140 L250,130 L260,140 L250,150 Z" opacity="0.6" />
          <path d="M210,200 L220,190 L230,200 L220,210 Z" opacity="0.4" />
          <path d="M280,200 L290,190 L300,200 L290,210 Z" opacity="0.4" />
          <circle cx="250" cy="280" r="8" opacity="0.3" />
        </motion.g>

      </svg>

      {/* Ombre portée dynamique */}
      <motion.div
        className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-56 h-10 bg-kontfeel-pink rounded-full blur-3xl"
        initial={{ opacity: 0, scaleX: 0.3 }}
        animate={{ opacity: 0.4, scaleX: 1 }}
        transition={{ duration: 2, delay: 2 }}
      />
    </div>
  );
}

export default OrigamiHeart;