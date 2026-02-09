import { motion } from 'framer-motion';
import { useState } from 'react';
import Logo from '../ui/Logo';

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
    const answerValues = Object.values(answers);
    if (answerValues.length > 0) {
      return answerValues[0].profile;
    }
    return "Vous avez du goût";
  };

  const personalizedIntro = getPersonalizedIntro();

  // Images des réalisations
  const realisations = [
    {
      url: "https://www.kontfeel.fr/realisations-plv/arche-evenementielle-sur-mesure-pour-une-operation-de-noel",
      image: "https://amour-du-metier.vercel.app/real1.jpg",
      title: "Arche événementielle Noël"
    },
    {
      url: "https://www.kontfeel.fr/realisations-plv/plv-vitrine-sur-les-champs-elysees-quand-delsey-reinvente-le-voyage-chez-monoprix",
      image: "https://amour-du-metier.vercel.app/real2.jpg",
      title: "Vitrine Delsey Champs-Élysées"
    },
    {
      url: "https://www.kontfeel.fr/realisations-plv/nos-secrets-pour-une-theatralisation-de-magasin-reussie",
      image: "https://amour-du-metier.vercel.app/real3.jpg",
      title: "Théâtralisation de magasin"
    }
  ];

  // Sélectionner une réalisation aléatoire
  const randomRealization = realisations[Math.floor(Math.random() * realisations.length)];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (remplace par ton vrai système d'envoi)
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 relative">
      <Logo />
      
      <motion.div 
        className="max-w-6xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        {/* Titre avec pourcentage */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nous sommes compatibles à{' '}
            <span className="text-kontfeel-pink">{compatibilityScore}%</span> !!!
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 italic">
            {personalizedIntro}.
          </p>
        </motion.div>

        {/* Section avec formulaire à gauche et réalisation à droite */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* FORMULAIRE DE CONTACT */}
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Parlons de votre projet
            </h2>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Nom *"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Parlez-nous de votre projet..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 text-white rounded-xl border border-gray-600 focus:border-kontfeel-pink focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-kontfeel-pink text-white rounded-xl font-semibold text-lg hover:bg-opacity-90 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                </button>
              </form>
            ) : (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-2xl font-bold text-kontfeel-pink mb-3">
                  Message reçu !
                </h3>
                <p className="text-gray-300 mb-2">
                  On adore déjà votre projet (et on ne l'a même pas encore vu) !
                </p>
                <p className="text-gray-400 text-sm">
                  Notre équipe vous contactera plus vite qu'un découpage laser sur du PVC. 🚀
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* RÉALISATION ALÉATOIRE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              Un exemple de notre savoir-faire
            </h2>
            
            <motion.a
              href={randomRealization.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-3xl aspect-square bg-gray-800"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={randomRealization.image}
                alt={randomRealization.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kontfeel-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-bold text-xl mb-2">
                    {randomRealization.title}
                  </p>
                  <p className="text-gray-300 text-sm">
                    Cliquez pour voir le projet complet →
                  </p>
                </div>
              </div>
            </motion.a>

            <p className="text-center text-gray-400 text-sm mt-4">
              Découvrez plus de réalisations sur{' '}
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

        {/* Note subtile */}
        <motion.p 
          className="text-center text-sm text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          * Spoiler : On savait qu'on était faits l'un pour l'autre dès le départ 😉
        </motion.p>

      </motion.div>
    </div>
  );
}

export default Result;