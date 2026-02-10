import { motion } from 'framer-motion';
import Button from '../ui/Button';
import OrigamiHeart from '../ui/OrigamiHeart';
import ExperienceFooter from "../ui/ExperienceFooter";

function Welcome({ onStart }) {
  return (
    // h-screen pour bloquer la hauteur, overflow-hidden pour éviter le scroll
    <div className="h-screen flex flex-col items-center px-8 relative overflow-hidden">
      
      {/* 1. Ressort du haut (plus petit) */}
      <div className="flex-grow-[1]" />

      {/* 2. Container principal (remonté) */}
      <div className="max-w-4xl w-full mx-auto text-center space-y-4 md:space-y-6 z-10">
        
        {/* Cœur origami */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.85 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <div className="relative">
            <OrigamiHeart />
            <div className="absolute inset-0 rounded-3xl bg-kontfeel-pink opacity-20 blur-3xl -z-10"></div>
          </div>
        </motion.div>

        {/* Titres */}
        <motion.div 
          className="space-y-3 md:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-none text-white">
            L'AMOUR<br />
            <span className="text-kontfeel-pink">DU MÉTIER</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Sommes-nous faits l'un pour l'autre ?
          </h2>

          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light px-4">
            Le test de compatibilité pour ceux qui mettent du cœur à l'ouvrage.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-4 flex flex-col items-center gap-3"
        >
          <Button onClick={onStart}>
            LANCER LE TEST
          </Button>
          <p className="text-xs md:text-sm text-white font-medium opacity-70 italic">
            ⏱️ Moins d’une minute — promis !
          </p>
        </motion.div>
      </div>

      {/* 3. Ressort du bas (plus grand pour bien remonter le tout) */}
      <div className="flex-grow-[2]" />

      {/* 4. Footer bien espacé en bas */}
      <div className="pb-8 w-full">
        <ExperienceFooter variant="inline" />
      </div>
    </div>
  );
}

export default Welcome;