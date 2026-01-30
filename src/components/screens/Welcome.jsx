import { motion } from 'framer-motion';
import Button from '../ui/Button';
import OrigamiHeart from '../ui/OrigamiHeart';

function Welcome({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 relative">
      
      {/* Container principal centré */}
      <div className="max-w-4xl w-full mx-auto text-center space-y-12">
        
        {/* Cœur origami qui se plie */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="flex justify-center mt-12 md:mt-0"
        >
          <div className="relative">
            <OrigamiHeart />
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-kontfeel-pink opacity-20 blur-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* Titres */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-8xl font-bold tracking-tight leading-none">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              L'AMOUR
            </span>
            <br />
            <span className="bg-gradient-to-r from-kontfeel-pink to-pink-400 bg-clip-text text-transparent">
              DU MÉTIER
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Sommes-nous faits l'un pour l'autre ?
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Le test de compatibilité pour ceux qui mettent du cœur à l'ouvrage.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 pb-32"
        >
          <Button onClick={onStart}>
            LANCER LE TEST
          </Button>
        </motion.div>

      </div>

      {/* Logo en bas - avec plus d'espace sur mobile */}
      <motion.div 
        className="absolute bottom-8 md:bottom-12 text-center w-full px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-sm md:text-base text-gray-500 font-light">
          Une expérience <span className="text-kontfeel-pink font-semibold">Kontfeel</span>
        </p>
      </motion.div>

    </div>
  );
}

export default Welcome;