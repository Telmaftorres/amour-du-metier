import { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ReactGA from 'react-ga4';
import ExperienceFooter from "../ui/ExperienceFooter";
import OrigamiHeart from '../ui/OrigamiHeart';
import { realisations } from '../../data/realisations';
import { getMainMessage } from '../../utils/resultHelpers';


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

  const personalizedIntro = getPersonalizedIntro();
  const mainMessage = getMainMessage(compatibilityScore);

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
      // Extraction des paramètres UTM de l'URL
      const searchParams = new URLSearchParams(window.location.search);
      const utmSource = searchParams.get('utm_source') || 'Direct';
      const utmMedium = searchParams.get('utm_medium') || '-';
      const utmCampaign = searchParams.get('utm_campaign') || '-';
      const utmContent = searchParams.get('utm_content') || '-';

      // On envoie le message pur du client ici
      // Le score et le profil seront envoyés dans des champs dédiés
      const res = await fetch("https://formspree.io/f/xykdzbqg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nom: formData.nom,
          email: formData.email,
          telephone: formData.telephone,
          message: formData.message, // Le texte libre du client
          score_compatibilite: `${compatibilityScore}%`, // Champ dédié
          profil_client: personalizedIntro, // Champ dédié
          // Infos de tracking ajoutées automatiquement
          source: utmSource,
          medium: utmMedium,
          campagne: utmCampaign,
          contenu: utmContent, // Utile pour l'A/B testing (Version A ou B)
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Détails erreur Formspree:", errorData);
        throw new Error("Erreur lors de l'envoi");
      }

      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Oups, l'envoi a échoué. Vérifiez votre connexion ou contactez-nous directement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-4 md:py-2 relative pb-20 md:pb-0">
      <Helmet>
        <title>Vos Résultats - Amour du Métier</title>
        <meta name="description" content={`Découvrez votre compatibilité avec l'amour du travail bien fait. Score : ${compatibilityScore}%`} />
      </Helmet>
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
                  href="https://kontfeel.fr/realisations"
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
            {!isSubmitted ? (
              <>
                <h2 className="text-xl font-bold text-white mb-3">
                  Partagez-nous votre test de compatibilité !
                </h2>

                {/* ✅ Affichage du % dans le formulaire (uniquement avant envoi) */}
                <div className="flex items-center justify-between bg-gray-700/60 border border-gray-600 rounded-xl px-4 py-3 mb-4">
                  <span className="text-gray-200 text-sm">Votre compatibilité</span>
                  <span className="text-kontfeel-pink font-bold text-sm">
                    {compatibilityScore}%
                  </span>
                </div>

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
                    {isSubmitting ? "ENVOI EN COURS..." : "ENVOYER"}
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                className="text-center py-10"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
              {/* Cœur origami (version plus petite & parfaitement centré) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 0.6 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className="flex justify-center"
              >
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <OrigamiHeart />
                  <div className="absolute inset-0 rounded-3xl bg-kontfeel-pink opacity-20 blur-2xl -z-10"></div>
                </div>
              </motion.div>

                <h3 className="text-2xl font-bold text-kontfeel-pink mb-5">
                 C&apos;est envoyé !
              </h3>

            <p className="text-gray-300 text-ml max-w-sm mx-auto leading-relaxed">
              Merci pour votre déclaration — on revient vers vous très vite avec des idées de PLV.
            </p>

              </motion.div>
            )}
          </motion.div>

        </div>
        <div className="w-full mt-10 flex justify-center">
          <ExperienceFooter />
        </div>
      </motion.div>
    </div>
  );
}

export default Result;
