import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceFooter from "../ui/ExperienceFooter";

function Result({ answers, compatibilityScore }) {
  // --- CTA "dating" mode ---
  const [ctaMode, setCtaMode] = useState("choose");
  // choose | like | superlike | sent

  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Récupérer une phrase personnalisée depuis les réponses
  const getPersonalizedIntro = () => {
    const answerValues = Object.values(answers || {});
    if (answerValues.length > 0 && answerValues[0]?.profile) {
      return answerValues[0].profile;
    }
    return "Vous avez du goût";
  };

  const getMainMessage = () => {
    if (compatibilityScore >= 95) {
      return (
        <>
          Vous ne cherchez pas un simple fournisseur, vous cherchez un{" "}
          <strong className="font-semibold">partenaire</strong> qui partage votre vision.
          <br /><br />
          Quelqu’un qui comprend que chaque <strong className="font-semibold">détail</strong> compte,
          que la <strong className="font-semibold">qualité</strong> n’est pas négociable,
          et que la beauté d’un projet se construit dans la passion du travail bien fait.
        </>
      );
    }

    if (compatibilityScore >= 90) {
      return (
        <>
          Vous cherchez un <strong className="font-semibold">partenaire</strong> qui vibre autant que vous
          pour donner du volume à vos idées.
          <br /><br />
          Vous aimez quand c’est beau, quand c’est <strong className="font-semibold">bien pensé</strong>.
          <br /><br />
          Ça tombe bien. Chez Kontfeel, notre moteur, c’est l’{" "}
          <strong className="font-semibold">amour du travail bien fait</strong> pour sublimer votre marque en magasin.
        </>
      );
    }

    return (
      <>
        Vous avez l’œil pour reconnaître la <strong className="font-semibold">qualité</strong> et vous savez
        que derrière chaque belle PLV se cache un <strong className="font-semibold">vrai savoir-faire</strong>.
        <br /><br />
        Chez Kontfeel, nous mettons notre <strong className="font-semibold">passion</strong> au service de vos projets
        pour créer des présentoirs qui ne laissent personne indifférent.
      </>
    );
  };

  const personalizedIntro = getPersonalizedIntro();
  const mainMessage = getMainMessage();

  // Images des réalisations
  const realisations = useMemo(() => ([
    {
      url: "https://www.kontfeel.fr/realisations-plv/arche-evenementielle-sur-mesure-pour-une-operation-de-noel",
      image: "https://amour-du-metier.vercel.app/real1.jpg",
      title: "Arche événementielle"
    },
    {
      url: "https://www.kontfeel.fr/realisations-plv/plv-vitrine-sur-les-champs-elysees-quand-delsey-reinvente-le-voyage-chez-monoprix",
      image: "https://amour-du-metier.vercel.app/real2.jpg",
      title: "Vitrine Delsey"
    },
    {
      url: "https://www.kontfeel.fr/realisations-plv/nos-secrets-pour-une_theatralisation_de-magasin-reussie",
      image: "https://amour-du-metier.vercel.app/real3.jpg",
      title: "Théâtralisation"
    }
  ]), []);

  // Sélectionner 1 réalisation aléatoire (tu peux passer à 2 si tu veux)
  const selectedRealization = useMemo(() => {
    const shuffled = [...realisations].sort(() => 0.5 - Math.random());
    return shuffled[0];
  }, [realisations]);

  // --------- Prefill message helpers ----------
  const buildPrefillMessage = (mode) => {
    const base = `Score de compatibilité : ${compatibilityScore}%\n`;
    const origin = `Origine : Love Machine (amour-du-metier)\n`;

    if (mode === "superlike") {
      return (
        base +
        origin +
        `Type : ⭐ Super Like (urgent / gros enjeu)\n\n` +
        `Contexte (optionnel) :\n` +
        `- Type de PLV / dispositif : \n` +
        `- Lieu (magasin, salon, vitrine...) : \n` +
        `- Délai : \n` +
        `- Budget : \n\n` +
        `Mon message : `
      );
    }

    return (
      base +
      origin +
      `Type : ❤️ Like (on en discute)\n\n` +
      `Contexte (optionnel) :\n` +
      `- Type de PLV / dispositif : \n` +
      `- Objectif : (lancement, animation, mise en avant...) \n\n` +
      `Mon message : `
    );
  };

  const startLikeFlow = (mode) => {
    setCtaMode(mode);
    setFormData((prev) => ({
      ...prev,
      message: buildPrefillMessage(mode),
    }));
  };

  // --------- form handlers ----------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xykdzbqg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          message: formData.message,
          score: compatibilityScore,
          cta_mode: ctaMode, // like / superlike
        }),
      });

      if (!res.ok) throw new Error("Erreur envoi");

      setCtaMode("sent");
    } catch (err) {
      alert("Oups, l’envoi a échoué. Réessaie ou contacte-nous directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-4 md:py-2 relative">
      <motion.div
        className="max-w-7xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Titre avec pourcentage */}
        <motion.div
          className="text-center mb-10 mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Nous sommes compatibles à{' '}
            <span className="text-kontfeel-pink">{compatibilityScore}%</span> !!!
          </h1>

          <p className="text-base md:text-lg text-gray-300 italic">
            {personalizedIntro}.
          </p>
        </motion.div>

        {/* Section principale : Texte + Réalisations à gauche, CTA à droite */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* COLONNE GAUCHE : Texte + Réalisations */}
          <div className="space-y-8 flex flex-col justify-center">
            {/* TEXTE DESCRIPTIF */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl mx-auto">
                {mainMessage}
              </p>
            </motion.div>

            {/* RÉALISATION */}
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">
                Découvrez notre savoir-faire
              </h3>

              <div className="flex justify-center">
                <motion.a
                  href={selectedRealization.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl bg-gray-800 w-full max-w-md h-48 md:h-56"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={selectedRealization.image}
                    alt={selectedRealization.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kontfeel-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                      <p className="text-white font-semibold text-sm">
                        {selectedRealization.title}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>

              <p className="text-center text-gray-400 text-xs mt-2">
                Plus de réalisations sur{' '}
                <a
                  href="https://kontfeel.fr/realisations-plv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kontfeel-pink hover:underline"
                >
                  kontfeel.fr
                </a>
              </p>
            </motion.div>
          </div>

          {/* COLONNE DROITE : CTA DATING */}
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {ctaMode === "choose" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <h2 className="text-2xl font-bold text-white mb-2">
                  On matche pour de vrai ?
                </h2>
                <p className="text-gray-300 text-sm mb-6">
                  Promis, on ne ghost pas. Choisis ton move 👇
                </p>

                <div className="space-y-3">
                  <button
                    onClick={() => startLikeFlow("like")}
                    className="w-full px-6 py-4 bg-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-600 transition-colors flex items-center justify-between"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">❤️</span>
                      Like (on en discute)
                    </span>
                    <span className="text-gray-300">→</span>
                  </button>

                  <button
                    onClick={() => startLikeFlow("superlike")}
                    className="w-full px-6 py-4 bg-kontfeel-pink text-white rounded-2xl font-semibold hover:bg-opacity-90 transition-colors flex items-center justify-between"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">⭐</span>
                      Super Like (urgent / gros enjeu)
                    </span>
                    <span className="text-white/80">→</span>
                  </button>

                  <a
                    href="https://kontfeel.fr/realisations-plv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 bg-gray-700 text-white rounded-2xl font-semibold hover:bg-gray-600 transition-colors flex items-center justify-between"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-2xl">👀</span>
                      Je stalke vos réals
                    </span>
                    <span className="text-gray-300">↗</span>
                  </a>
                </div>

                <div className="mt-8">
                  <ExperienceFooter variant="inline" />
                </div>
              </motion.div>
            )}

            {(ctaMode === "like" || ctaMode === "superlike") && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-white">
                    {ctaMode === "superlike" ? "⭐ Super Like envoyé…" : "❤️ Like envoyé…"}
                  </h2>
                  <button
                    type="button"
                    onClick={() => setCtaMode("choose")}
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    ← Retour
                  </button>
                </div>

                <p className="text-gray-300 text-sm mb-4">
                  Laisse ton email et un mini contexte, on te répond vite.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Ton email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors text-sm"
                  />

                  <textarea
                    name="message"
                    placeholder="Ton message (optionnel)"
                    rows="7"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors resize-none text-sm"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-kontfeel-pink text-white rounded-xl font-semibold hover:bg-opacity-90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </form>

                <div className="mt-8">
                  <ExperienceFooter variant="inline" />
                </div>
              </motion.div>
            )}

            {ctaMode === "sent" && (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35 }}
              >
                <div className="text-5xl mb-3">🎉</div>
                <h3 className="text-xl font-bold text-kontfeel-pink mb-2">
                  Match confirmé !
                </h3>
                <p className="text-gray-300 text-sm mb-1">
                  On a bien reçu ton message.
                </p>
                <p className="text-gray-400 text-xs">
                  Notre équipe te recontacte plus vite qu’un découpage laser.
                </p>

                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <ExperienceFooter />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Result;

