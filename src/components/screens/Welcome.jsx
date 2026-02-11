import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Button from '../ui/Button';
import OrigamiHeart from '../ui/OrigamiHeart';
import ExperienceFooter from "../ui/ExperienceFooter";

function Welcome({ onStart }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between px-8 py-8">
      <Helmet>
        <title>Amour du Métier - Test de compatibilité</title>
        <meta name="description" content="Sommes-nous faits l'un pour l'autre ? Faites le test de compatibilité Kontfeel." />
      </Helmet>
      {/* Contenu principal - centré avec padding réduit */}
      <div className="w-full flex-1 flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto text-center space-y-2 md:space-y-3 -mt-20 md:-mt-28">
          {/* Cœur origami - plus grand et plus d'espace en dessous */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 0.8 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-1 md:mb-2"
          >
            <div className="relative">
              <OrigamiHeart />
              <div className="absolute inset-0 rounded-3xl bg-kontfeel-pink opacity-20 blur-3xl -z-10"></div>
            </div>
          </motion.div>

          {/* Titres */}
          <motion.div 
            className="space-y-2 md:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none text-white">
              L'AMOUR<br />
              <span className="text-kontfeel-pink">DU MÉTIER</span>
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-white pt-2">
              Sommes-nous faits l'un pour l'autre ?
            </h2>
            <p className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto font-light px-4">
              Le test de compatibilité pour ceux qui mettent du cœur à l'ouvrage.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-3 flex flex-col items-center gap-2"
          >
            <Button onClick={onStart}>
              LANCER LE TEST
            </Button>
            <p className="text-xs md:text-sm text-white font-medium opacity-70 italic">
              ⏱️ Moins d'une minute — promis !
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer en bas */}
      <div className="w-full">
        <ExperienceFooter />
      </div>
    </div>
  );
}

export default Welcome;