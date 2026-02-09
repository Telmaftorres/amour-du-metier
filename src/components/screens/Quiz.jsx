import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../../data/questions';
import Button from '../ui/Button';
import Logo from '../ui/Logo';

function Quiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasAnswer = answers[question.id] !== undefined;

  // Quand on sélectionne une réponse
  const handleSelectAnswer = (answerId, profile) => {
    setAnswers({
      ...answers,
      [question.id]: { answerId, profile }
    });
  };

  // Question suivante
  const handleNext = () => {
    if (isLastQuestion) {
      // On a fini le quiz, on passe au loading
      onComplete(answers);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Question précédente
  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-3xl w-full">

        {/* Logo Kontfeel discret */}
        <Logo />
        
       {/* Indicateur de progression */}
        <div className="mb-12">
          <div className="flex justify-end items-center mb-4">
            <span className="text-sm text-kontfeel-pink font-semibold">
              {question.step}
            </span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
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
            <h2 className="text-3xl font-bold mb-8">
              {question.question}
            </h2>

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
    </div>
  );
}

export default Quiz;