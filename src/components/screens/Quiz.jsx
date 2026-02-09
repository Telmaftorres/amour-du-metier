import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../../data/questions';
import Button from '../ui/Button';
import ExperienceFooter from "../ui/ExperienceFooter";

/**
 * Coeur basique (forme simple) en SVG, blanc.
 */
function WhiteHeart({ size = 22 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="white"
      aria-hidden="true"
      style={{ display: 'block' }}
    >
      <path d="M12 21s-6.716-4.318-9.33-8.07C.4 9.944 1.38 6.77 3.7 5.2c2.02-1.37 4.64-.9 6.3.75 1.66-1.65 4.28-2.12 6.3-.75 2.32 1.57 3.3 4.744 1.03 7.73C18.716 16.682 12 21 12 21z" />
    </svg>
  );
}

function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [explode, setExplode] = useState(false);

  const question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasAnswer = answers[question.id] !== undefined;

  // Progression %
  const progressPercent = quizQuestions.length
    ? ((currentQuestion + 1) / quizQuestions.length) * 100
    : 0;

  // Grossissement du coeur
  const denom = Math.max(1, quizQuestions.length - 1);
  const heartScale = 0.9 + (currentQuestion / denom) * 0.9;

  // Clamp léger pour éviter que le coeur sorte trop aux extrêmes
  const clampedPercent = Math.min(98, Math.max(2, progressPercent));

  // Quand on sélectionne une réponse
  const handleSelectAnswer = (answerId, profile) => {
    setAnswers({
      ...answers,
      [question.id]: { answerId, profile }
    });
  };

  // Question suivante
  const handleNext = () => {
    if (!hasAnswer) return;

    if (isLastQuestion) {
      setExplode(true);

      // laisse l'animation se jouer, puis continue
      setTimeout(() => {
        onComplete(answers);
      }, 700);
    } else {
      setExplode(false);
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Question précédente
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setExplode(false);
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="max-w-3xl w-full">
        {/* Indicateur de progression */}
        <div className="mb-12">
          <div className="flex justify-end items-center mb-4">
            <span className="text-sm text-kontfeel-pink font-semibold">
              {question.step}
            </span>
          </div>

          {/* BARRE DE PROGRESSION + COEUR au bout */}
          <div className="relative h-10 flex items-center">
            {/* Barre grise */}
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              {/* Barre blanche */}
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Coeur collé AU BOUT de la barre blanche */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2"
              style={{
                left: `calc(${clampedPercent}% )`
              }}
              animate={{ scale: heartScale }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
            >
              {/* Centrage horizontal du coeur sur le point */}
              <div className="-translate-x-1/2 relative">
                {/* Petit pop à chaque changement de question */}
                <motion.div
                  key={currentQuestion}
                  initial={{ scale: 0.85 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 18 }}
                >
                  <WhiteHeart size={22} />
                </motion.div>

                {/* Explosion à la dernière question */}
                <AnimatePresence>
                  {explode && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {Array.from({ length: 10 }).map((_, i) => {
                        const angle = (i / 10) * Math.PI * 2;
                        const radius = 34;
                        const x = Math.cos(angle) * radius;
                        const y = Math.sin(angle) * radius;

                        return (
                          <motion.div
                            key={i}
                            className="absolute left-1/2 top-1/2"
                            initial={{ x: 0, y: 0, scale: 0.6, opacity: 1 }}
                            animate={{ x, y, scale: 1, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            style={{ transform: "translate(-50%, -50%)" }}
                          >
                            <WhiteHeart size={14} />
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2
              className="text-3xl font-bold mb-8"
              dangerouslySetInnerHTML={{ __html: question.question }}
            />

            {/* Réponses */}
            <div className="space-y-4 mb-8">
              {question.answers.map((answer) => (
                <motion.button
                  key={answer.id}
                  onClick={() => handleSelectAnswer(answer.id, answer.profile)}
                  className={`w-full p-6 rounded-2xl text-left transition-all duration-300 ${
                    answers[question.id]?.answerId === answer.id
                      ? 'bg-kontfeel-pink text-white shadow-glow-pink scale-105'
                      : 'bg-gray-800 hover:bg-gray-700 text-gray-200'
                  }`}
                  whileHover={{ scale: answers[question.id]?.answerId === answer.id ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 flex-shrink-0">
                      {answers[question.id]?.answerId === answer.id ? '✓' : '○'}
                    </span>
                    <span
                      className="text-lg"
                      dangerouslySetInnerHTML={{ __html: answer.text }}
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Boutons de navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-lg transition-all ${
              currentQuestion === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:bg-gray-700'
            }`}
          >
            ← Précédent
          </button>

          <Button
            onClick={handleNext}
            variant="primary"
            disabled={!hasAnswer}
          >
            {isLastQuestion ? 'VOIR LE RÉSULTAT' : 'SUIVANT →'}
          </Button>
        </div>
      </div>

      {/* Footer */}
      <ExperienceFooter />
    </div>
  );
}

export default Quiz;
