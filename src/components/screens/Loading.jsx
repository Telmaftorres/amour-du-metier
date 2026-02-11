import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadingSteps } from "../../data/questions";
import ExperienceFooter from "../ui/ExperienceFooter";

function Loading({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [finalScore, setFinalScore] = useState(0);
  const [stage, setStage] = useState("running");
  const [hasTriggeredEnd, setHasTriggeredEnd] = useState(false);

  useEffect(() => {
    const randomScore = Math.floor(Math.random() * (98 - 86 + 1)) + 86;
    setFinalScore(randomScore);
  }, []);

  useEffect(() => {
    if (!finalScore) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= finalScore) {
          clearInterval(progressInterval);
          return finalScore;
        }
        return Math.min(prev + 1, finalScore);
      });
    }, 60);

    return () => clearInterval(progressInterval);
  }, [finalScore]);

  useEffect(() => {
    if (!finalScore) return;

    const stepPercentage = finalScore / loadingSteps.length;
    const currentStepCalculated = Math.min(
      loadingSteps.length - 1,
      Math.floor(progress / stepPercentage)
    );

    if (currentStepCalculated !== currentStep) {
      setCurrentStep(currentStepCalculated);
    }
  }, [progress, finalScore, currentStep]);

  useEffect(() => {
    if (!finalScore) return;

    if (progress >= finalScore && !hasTriggeredEnd) {
      setHasTriggeredEnd(true);
      setTimeout(() => setStage("explode"), 700);
    }
  }, [progress, finalScore, hasTriggeredEnd]);

  const getMessage = () => {
    if (progress >= 95) return "Coup de foudre professionnel !";
    if (progress >= 90) return "Match parfait !";
    return "Excellente compatibilité !";
  };

  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  const circleVariants = {
    running: { opacity: 1, scale: 1, rotate: 0 },
    explode: {
      opacity: 0,
      scale: 0.15,
      rotate: 12,
      transition: { duration: 0.55, ease: "easeInOut" },
    },
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 md:py-12">
      {/* Contenu principal centré */}
      <div className="text-center max-w-2xl w-full flex-grow flex flex-col justify-center">
        {/* Cercle / Texte final */}
        <div className="flex justify-center mb-4">
          <div className="relative w-80 h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              {stage !== "showText" && (
                <motion.div
                  key="circle"
                  className="absolute inset-0"
                  variants={circleVariants}
                  initial="running"
                  animate={stage === "explode" ? "explode" : "running"}
                  onAnimationComplete={() => {
                    if (stage === "explode") {
                      setStage("showText");
                      setTimeout(() => {
                        onComplete(finalScore);
                      }, 2000);
                    }
                  }}
                >
                  {/* Flash pendant l'implosion */}
                  {stage === "explode" && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 0.25, scale: 1.18 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{
                        background: "rgba(255,255,255,0.25)",
                        filter: "blur(14px)",
                      }}
                    />
                  )}

                  <svg className="transform -rotate-90 w-full h-full">
                    <circle
                      cx="160"
                      cy="160"
                      r={radius}
                      stroke="#2a3440"
                      strokeWidth="16"
                      fill="none"
                    />
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
                        transition: "stroke-dashoffset 0.3s ease",
                        filter: "drop-shadow(0 0 15px rgba(255, 73, 124, 0.6))",
                      }}
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div className="text-center" key={progress}>
                      <div className="text-7xl font-bold text-white mb-2">
                        {progress}%
                      </div>
                      <div className="text-lg text-gray-400">Compatibilité</div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Texte final qui remplace le cercle */}
              {stage === "showText" && (
                <motion.div
                  key="finalText"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="px-6"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-kontfeel-pink to-pink-400 bg-clip-text text-transparent text-center leading-tight max-w-sm mx-auto md:max-w-none md:whitespace-nowrap">
                    {getMessage()}
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="mt-4 text-gray-300 text-base md:text-lg"
                  >
                    Diagnostic finalisé.
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE : une phrase à la fois */}
        <div className="md:hidden mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="text-gray-300 text-base px-6"
            >
              <span className="text-kontfeel-pink font-semibold mr-2">
                {currentStep === loadingSteps.length - 1 ? "✓" : "⏳"}
              </span>
              {loadingSteps[currentStep]}
            </motion.div>
          </AnimatePresence>

          <div className="mt-3 text-xs text-gray-500">Analyse en cours…</div>
        </div>

        {/* DESKTOP : liste complète */}
        <div className="hidden md:block">
          <h2 className="text-3xl font-bold mb-4">Analyse en cours...</h2>

          <div className="space-y-6">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: index <= currentStep ? 1 : 0.3,
                  x: 0,
                }}
                transition={{ duration: 0.5 }}
                className={`text-lg flex items-center justify-center ${
                  index <= currentStep ? "text-white" : "text-gray-600"
                }`}
              >
                <span className="mr-4 text-2xl">
                  {index < currentStep ? "✓" : index === currentStep ? "⏳" : "○"}
                </span>
                {step}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer toujours en bas */}
      <div className="w-full mt-auto">
        <ExperienceFooter />
      </div>
    </div>
  );
}

export default Loading;

