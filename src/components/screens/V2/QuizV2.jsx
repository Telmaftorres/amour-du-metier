import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizQuestions } from '../../data/questions';
import Button from '../ui/Button';
import ExperienceFooter from "../ui/ExperienceFooter";

function Quiz({ onComplete }) {
  // --- flow screens ---
  // intro -> quiz -> (result handled by parent via onComplete)
  const [screen, setScreen] = useState("intro"); // "intro" | "quiz"

  // --- quiz state ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  // --- micro-feedback after choosing an answer ---
  const [showReaction, setShowReaction] = useState(false);
  const [reactionText, setReactionText] = useState("");

  // --- joker (skip) ---
  const [jokerUsed, setJokerUsed] = useState(false);

  const question = quizQuestions[currentQuestion];
  const isLastQuestion = currentQuestion === quizQuestions.length - 1;
  const hasAnswer = answers?.[question?.id] !== undefined;

  // Petites phrases funs (tu peux adapter au ton Kontfeel)
  const reactionsPool = useMemo(() => ({
    like: [
      "Ok… ça, c’est un move solide 😏",
      "On commence à se plaire 👀",
      "Très bon goût. On note ✅",
      "Ça sent le projet qui va être beau."
    ],
    superlike: [
      "Ouh… exigence + ambition = on aime 🔥",
      "Ok là, c’est du sérieux 😮‍💨",
      "Ça, c’est une vibe ‘travail bien fait’ 💎",
      "On valide fort. Très fort."
    ],
    neutral: [
      "Noté ✍️",
      "Ok, on avance 😄",
      "Intéressant…",
      "Ça se précise 👌"
    ],
  }), []);

  const getNarrativeStepLabel = (index, total) => {
    // petite narration selon l’avancement (à ajuster)
    const pct = Math.round(((index + 1) / total) * 100);
    if (pct <= 20) return `Étape ${index + 1}/${total} — On fait connaissance`;
    if (pct <= 50) return `Étape ${index + 1}/${total} — On commence à matcher`;
    if (pct <= 80) return `Étape ${index + 1}/${total} — Ok là c’est sérieux`;
    return `Étape ${index + 1}/${total} — Dernière ligne droite`;
  };

  const pickReaction = (answer) => {
    // Tu peux décider que certaines réponses déclenchent un ton “superlike”
    // Ici, on fait simple : si le texte contient "urgent" / "deadline" => superlike
    const raw = (answer?.text || "").toLowerCase();
    const isSuper = raw.includes("urgent") || raw.includes("deadline") || raw.includes("vite");

    const pool = isSuper ? reactionsPool.superlike : reactionsPool.like;
    return pool[Math.floor(Math.random() * pool.length)];
  };

  const handleSelectAnswer = (answerId, profile, answerObj) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: { answerId, profile }
    }));

    // micro feedback
    const reaction = pickReaction(answerObj);
    setReactionText(reaction);
    setShowReaction(true);

    // auto-hide
    window.setTimeout(() => setShowReaction(false), 900);
  };

  const handleNext = () => {
    // si pas de réponse et pas de joker → stop
    if (!hasAnswer) return;

    if (isLastQuestion) {
      onComplete(answers);
    } else {
      setCurrentQuestion(prev => prev + 1);
      setShowReaction(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setShowReaction(false);
    }
  };

  const handleUseJoker = () => {
    if (jokerUsed) return;

    // On enregistre une "réponse" spéciale pour ne pas bloquer
    setAnswers(prev => ({
      ...prev,
      [question.id]: { answerId: "__skip__", profile: "Joker" }
    }));

    setJokerUsed(true);
    setReactionText("Ok, je te laisse passer… mais une seule fois 😄");
    setShowReaction(true);

    window.setTimeout(() => setShowReaction(false), 900);
  };

  const progressPct = Math.round(((currentQuestion + 1) / quizQuestions.length) * 100);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="max-w-3xl w-full">

        {/* ---------- INTRO SCREEN ---------- */}
        {screen === "intro" && (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
              La Love Machine Kontfeel 💘
            </h1>

            <p className="text-gray-300 text-base md:text-lg mb-6">
              En <span className="text-kontfeel-pink font-semibold">45 secondes</span>, on te dit si on est faits
              pour travailler ensemble.
              <br />
              <span className="text-gray-400 text-sm">
                (0 spam. 0 blabla. Juste un match.)
              </span>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <div className="bg-gray-900/40 border border-gray-700 rounded-2xl p-4">
                <p className="text-white font-semibold mb-1">Tu vas obtenir :</p>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Ton score de compatibilité</li>
                  <li>• Ton “profil” de projet</li>
                  <li>• Une idée du style Kontfeel</li>
                </ul>
              </div>

              <div className="bg-gray-900/40 border border-gray-700 rounded-2xl p-4">
                <p className="text-white font-semibold mb-1">Promesse :</p>
                <p className="text-gray-300 text-sm">
                  Des questions pas scolaires, et une fin qui ne ressemble pas à un formulaire.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button onClick={() => setScreen("quiz")} variant="primary">
                Lancer le test →
              </Button>

              <a
                href="https://kontfeel.fr/realisations-plv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Je veux juste voir vos réals ↗
              </a>
            </div>

            <div className="mt-8">
              <ExperienceFooter variant="inline" />
            </div>
          </motion.div>
        )}

        {/* ---------- QUIZ SCREEN ---------- */}
        {screen === "quiz" && (
          <>
            {/* Indicateur de progression (plus narratif) */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-300">
                  {getNarrativeStepLabel(currentQuestion, quizQuestions.length)}
                </span>
                <span className="text-sm text-kontfeel-pink font-semibold">
                  {progressPct}%
                </span>
              </div>

              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Micro réaction */}
            <AnimatePresence>
              {showReaction && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="mb-5"
                >
                  <div className="inline-flex items-center gap-2 bg-gray-800 border border-gray-700 rounded-2xl px-4 py-2 text-sm text-gray-200">
                    <span className="text-lg">💬</span>
                    <span>{reactionText}</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Question card (effet swipe) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.28 }}
                className="bg-gray-800/40 backdrop-blur-sm border border-gray-700 rounded-3xl p-7 md:p-8"
              >
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6 text-white"
                  dangerouslySetInnerHTML={{ __html: question.question }}
                />

                {/* Réponses (cards + emoji possible si ton data en contient) */}
                <div className="space-y-3 mb-6">
                  {question.answers.map((answer) => {
                    const selected = answers[question.id]?.answerId === answer.id;

                    return (
                      <motion.button
                        key={answer.id}
                        onClick={() => handleSelectAnswer(answer.id, answer.profile, answer)}
                        className={`w-full p-5 rounded-2xl text-left transition-all duration-300 ${
                          selected
                            ? 'bg-kontfeel-pink text-white shadow-glow-pink scale-[1.02]'
                            : 'bg-gray-900/40 hover:bg-gray-700/70 text-gray-200'
                        }`}
                        whileHover={{ scale: selected ? 1.02 : 1.01 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-2xl flex-shrink-0">
                            {selected ? '❤️' : '○'}
                          </span>
                          <span
                            className="text-base md:text-lg"
                            dangerouslySetInnerHTML={{ __html: answer.text }}
                          />
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Joker */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    className={`px-4 py-2 rounded-lg transition-all text-sm ${
                      currentQuestion === 0
                        ? 'opacity-30 cursor-not-allowed'
                        : 'hover:bg-gray-700 text-gray-200'
                    }`}
                  >
                    ← Précédent
                  </button>

                  <button
                    type="button"
                    onClick={handleUseJoker}
                    disabled={jokerUsed}
                    className={`text-sm px-4 py-2 rounded-lg border transition-all ${
                      jokerUsed
                        ? 'opacity-40 cursor-not-allowed border-gray-700 text-gray-400'
                        : 'border-gray-600 text-gray-200 hover:bg-gray-700'
                    }`}
                    title={jokerUsed ? "Joker déjà utilisé" : "Passer une question"}
                  >
                    {jokerUsed ? "Joker utilisé ✅" : "Joker : je passe 😅"}
                  </button>
                </div>

                {/* Suivant */}
                <div className="flex justify-end">
                  <Button
                    onClick={handleNext}
                    variant="primary"
                    disabled={!hasAnswer}
                  >
                    {isLastQuestion ? 'VOIR LE RÉSULTAT →' : 'SUIVANT →'}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="h-10" />
            <ExperienceFooter />
          </>
        )}

      </div>
    </div>
  );
}

export default Quiz;


