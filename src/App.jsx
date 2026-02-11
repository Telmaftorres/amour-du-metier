import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import Welcome from './components/screens/Welcome';
import Quiz from './components/screens/Quiz';
import Loading from './components/screens/Loading';
import Result from './components/screens/Result';

function App() {
  // Initialisation de GA4
  if (!window.GA_INITIALIZED) {
    ReactGA.initialize('G-CHWE657Z0Y');
    window.GA_INITIALIZED = true;
  }

  // Tracking des changements d'écran
  useState(() => {
    // Premier chargement (avec captures des UTMs via l'URL)
    ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
  });

  // Tracking à chaque changement de `currentScreen`
  // On simule une URL virtuelle pour chaque écran car c'est une SPA
  const trackScreenView = (screenName) => {
    ReactGA.send({ hitType: "pageview", page: `/${screenName}` });
  };

  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [quizAnswers, setQuizAnswers] = useState(null);

  const handleStart = () => {
    setCurrentScreen('quiz');
    trackScreenView('quiz');
  };

  const handleQuizComplete = (answers) => {
    setQuizAnswers(answers);
    setCurrentScreen('loading');
    trackScreenView('loading');
  };

  const [compatibilityScore, setCompatibilityScore] = useState(null);

  const handleLoadingComplete = (score) => {
    setCompatibilityScore(score);
    setCurrentScreen('result');
    trackScreenView('result');
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
      <Helmet titleTemplate="%s | Kontfeel" defaultTitle="Amour du Métier" />
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