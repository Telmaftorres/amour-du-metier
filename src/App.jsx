import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Welcome from './components/screens/Welcome';
import Quiz from './components/screens/Quiz';
import Loading from './components/screens/Loading';
import Result from './components/screens/Result';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [quizAnswers, setQuizAnswers] = useState(null);

  const handleStart = () => {
    setCurrentScreen('quiz');
  };

  const handleQuizComplete = (answers) => {
    setQuizAnswers(answers);
    setCurrentScreen('loading');
  };

  const [compatibilityScore, setCompatibilityScore] = useState(null);

  const handleLoadingComplete = (score) => {
    setCompatibilityScore(score);
    setCurrentScreen('result');
  };

  // Wrapper avec animation de fondu
  const ScreenWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <AnimatePresence mode="wait">
        {currentScreen === 'welcome' && (
          <ScreenWrapper key="welcome">
            <Welcome onStart={handleStart} />
          </ScreenWrapper>
        )}

        {currentScreen === 'quiz' && (
          <ScreenWrapper key="quiz">
            <Quiz onComplete={handleQuizComplete} />
          </ScreenWrapper>
        )}

        {currentScreen === 'loading' && (
          <ScreenWrapper key="loading">
            <Loading onComplete={handleLoadingComplete} />
          </ScreenWrapper>
        )}

        {currentScreen === 'result' && (
          <ScreenWrapper key="result">
            <Result answers={quizAnswers} compatibilityScore={compatibilityScore} />
          </ScreenWrapper>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;