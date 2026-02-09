import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { loadingSteps } from '../../data/questions';
import ExperienceFooter from "../ui/ExperienceFooter";

function Loading({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    // Génère un score final aléatoire entre 86 et 98
    const randomScore = Math.floor(Math.random() * (98 - 86 + 1)) + 86;
    setFinalScore(randomScore);
  }, []);
  
  useEffect(() => {
    // Animation du pourcentage qui monte progressivement
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= finalScore) {
          clearInterval(progressInterval);
          return finalScore;
        }
        return Math.min(prev + 2, finalScore);
      });
    }, 50);
  
    return () => clearInterval(progressInterval);
  }, [finalScore]);
  
  useEffect(() => {
    // Synchroniser les étapes avec le pourcentage
    const stepPercentage = finalScore / loadingSteps.length;
    const currentStepCalculated = Math.floor(progress / stepPercentage);
    
    if (currentStepCalculated !== currentStep && currentStepCalculated <= loadingSteps.length) {
      setCurrentStep(currentStepCalculated);
    }
  
    // Si on a atteint le score final, passer au résultat après 2.5s
    if (progress >= finalScore && currentStep >= loadingSteps.length) {
      const timer = setTimeout(() => {
        onComplete(finalScore);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [progress, finalScore, currentStep, onComplete]);

  // Messages selon le score
  const getMessage = () => {
    if (progress >= 95) return "💘 Coup de foudre professionnel !";
    if (progress >= 90) return "🎉 Match parfait !";
    return "✨ Excellente compatibilité !";
  };

  // Calcul du cercle SVG (cercle plus grand)
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 md:py-8">
      <div className="text-center max-w-2xl w-full">

        {/* Logo Kontfeel discret */}
        <Logo />
        
        {/* Cercle de progression SVG */}
        <div className="flex justify-center mb-4">
          <div className="relative w-80 h-80">
            {/* SVG Circle */}
            <svg className="transform -rotate-90 w-full h-full">
              {/* Background circle */}
              <circle
                cx="160"
                cy="160"
                r={radius}
                stroke="#2a3440"
                strokeWidth="16"
                fill="none"
              />
              {/* Progress circle */}
              <motion.circle
                cx="160"
                cy="160"
                r={radius}
                stroke="#ff497c"
                strokeWidth="16"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{
                  transition: 'stroke-dashoffset 0.3s ease',
                  filter: 'drop-shadow(0 0 15px rgba(255, 73, 124, 0.6))'
                }}
              />
            </svg>
            
            {/* Pourcentage au centre */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="text-center"
                key={progress}
              >
                <div className="text-7xl font-bold text-white mb-2">
                  {progress}%
                </div>
                <div className="text-lg text-gray-400">
                  Compatibilité
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Titre */}
        <h2 className="text-3xl font-bold mb-4 hidden md:block">
          Analyse en cours...
        </h2>

        {/* Liste des étapes */}
        <div className="space-y-6 hidden md:block">
          {loadingSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: index <= currentStep ? 1 : 0.3,
                x: 0
              }}
              transition={{ duration: 0.5 }}
              className={`text-lg flex items-center justify-center ${
                index <= currentStep ? 'text-white' : 'text-gray-600'
              }`}
            >
              <span className="mr-4 text-2xl">
                {index < currentStep ? '✓' : index === currentStep ? '⏳' : '○'}
              </span>
              {step}
            </motion.div>
          ))}
        </div>

        {/* Message final selon le score */}
        {currentStep >= loadingSteps.length && progress >= finalScore && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-kontfeel-pink to-pink-400 bg-clip-text text-transparent px-4">
            {getMessage()}
            </div>
          </motion.div>
        )}

      </div>
       {/* Logo en bas */}
       <ExperienceFooter />
    </div>
  );
}

export default Loading;