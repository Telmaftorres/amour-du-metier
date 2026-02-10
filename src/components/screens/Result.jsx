import { useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceFooter from "../ui/ExperienceFooter";
import zidaneMeme from "../../assets/zidane-meme.png";


function Result({ answers, compatibilityScore }) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
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
    } else if (compatibilityScore >= 90) {
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
    } else {
      return (
        <>
          Vous avez l’œil pour reconnaître la <strong className="font-semibold">qualité</strong> et vous savez
          que derrière chaque belle PLV se cache un <strong className="font-semibold">vrai savoir-faire</strong>.
          <br /><br />
          Chez Kontfeel, nous mettons notre <strong className="font-semibold">passion</strong> au service de vos projets
          pour créer des présentoirs qui ne laissent personne indifférent.
        </>
      );
    }
  };

  const personalizedIntro = getPersonalizedIntro();
  const mainMessage = getMainMessage();

  // Images des réalisations
  const realisations = [
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
      url: "https://www.kontfeel.fr/realisations-plv/nos-secrets-pour-une_theatralisation-de-magasin-reussie",
      image: "https://amour-du-metier.vercel.app/real3.jpg",
      title: "Théâtralisation"
    }
  ];

  // Sélectionner 2 réalisations aléatoires
  const shuffled = [...realisations].sort(() => 0.5 - Math.random());
  const selectedRealizations = shuffled.slice(0, 2);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      // On garde enrichedMessage pour avoir le texte formaté dans le champ "message"
      const enrichedMessage =
        `Compatibilité : ${compatibilityScore}%\n` +
        `Profil : ${personalizedIntro}\n\n` +
        `Message client : ${formData.message || "Aucun message"}`;
  
      const res = await fetch("https://formspree.io/f/xykdzbqg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          message: enrichedMessage, 
          // ❌ On supprime les lignes 'score' et 'profil' ici pour éviter le doublon
        }),
      });
  
      if (!res.ok) throw new Error("Erreur envoi");
  
      setIsSubmitted(true);
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
            Nous sommes compatibles à{" "}
            <span className="text-kontfeel-pink">{compatibilityScore}%</span> !!!
          </h1>

          <p className="text-base md:text-lg text-gray-300 italic">
            {personalizedIntro}.
          </p>
        </motion.div>

        {/* Section principale : Texte + Réalisations à gauche, Formulaire à droite */}
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

            {/* RÉALISATIONS */}
            <motion.div
              className="mt-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 text-center">
                Découvrez notre savoir-faire sur  <a
                  href="https://kontfeel.fr/realisations-plv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className='text-kontfeel-pink'>
                  kontfeel.fr
                  </a>
              </h3>

              <div className="flex justify-center">
                <motion.a
                  href={selectedRealizations[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl bg-gray-800 w-full max-w-md h-48 md:h-56"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={selectedRealizations[0].image}
                    alt={selectedRealizations[0].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kontfeel-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                      <p className="text-white font-semibold text-sm">
                        {selectedRealizations[0].title}
                      </p>
                    </div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* COLONNE DROITE : FORMULAIRE DE CONTACT */}
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-3">
              N'attendez plus et partagez-nous votre test de compatibilité !
            </h2>

            {/* ✅ Affichage du % dans le formulaire */}
            <div className="flex items-center justify-between bg-gray-700/60 border border-gray-600 rounded-xl px-4 py-3 mb-4">
              <span className="text-gray-200 text-sm">Votre compatibilité</span>
              <span className="text-kontfeel-pink font-bold text-sm">
                {compatibilityScore}%
              </span>
            </div>

            {!isSubmitted ? (
              <>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom et prénom *"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors text-sm"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors text-sm"
                  />

                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors text-sm"
                  />

                  <textarea
                    name="message"
                    placeholder="Ajouter un message d'amour"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2.5 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors text-sm resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-kontfeel-pink text-white rounded-xl font-semibold hover:bg-opacity-90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer"}
                  </button>
                </form>

                <div className="mt-8">
                  <ExperienceFooter variant="inline" />
                </div>
              </>
            ) : (
              <motion.div
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
               <p className="text-gray-300 text-sm mb-1">
                    On a bien reçu votre déclaration !
                  </p>
                  <p className="text-gray-400 text-xs">
                    Notre équipe revient vers vous avec des papillons dans les yeux (et des idées de PLV).
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
