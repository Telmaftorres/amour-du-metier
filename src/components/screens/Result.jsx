import { motion } from 'framer-motion';
import ExperienceFooter from "../ui/ExperienceFooter";


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

  // Message principal selon le score
  const getMainMessage = () => {
    if (compatibilityScore >= 95) {
      return "Vous ne cherchez pas un simple fournisseur, vous cherchez un partenaire qui partage votre vision. Quelqu'un qui comprend que chaque détail compte, que la qualité n'est pas négociable, et que la beauté d'un projet se construit dans la passion du travail bien fait.";
    } else if (compatibilityScore >= 90) {
      return "Vous cherchez un partenaire qui vibre autant que vous pour donner du volume à vos idées. Vous aimez quand c'est beau, quand c'est bien pensé. Ça tombe bien. Chez Kontfeel, notre moteur, c'est l'amour du travail bien fait pour le plaisir de sublimer votre marque en magasin.";
    } else {
      return "Vous avez l'œil pour reconnaître la qualité et vous savez que derrière chaque belle PLV se cache un vrai savoir-faire. Chez Kontfeel, nous mettons notre passion au service de vos projets pour créer des présentoirs qui ne laissent personne indifférent.";
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
      url: "https://www.kontfeel.fr/realisations-plv/nos-secrets-pour-une-theatralisation-de-magasin-reussie",
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

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-4 md:py-2 relative">
      <Logo />
      
      <motion.div 
        className="max-w-7xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        {/* Titre avec pourcentage - Plus d'espace en haut */}
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

        {/* Section principale : Texte + Réalisations à gauche, Formulaire à droite */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* COLONNE GAUCHE : Texte + Réalisations */}
          <div className="space-y-6">
            
            {/* TEXTE DESCRIPTIF */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700" >
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {mainMessage.split('. ').map((sentence, index) => (
                    <span key={index}>
                      {sentence.trim()}{sentence.trim() && '.'}
                      {index < mainMessage.split('. ').length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </motion.div>

            {/* RÉALISATIONS - 2 petites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            <h3 className="text-base font-bold text-white mb-2">
              Découvrez notre savoir-faire
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {selectedRealizations.map((real, index) => (
                <motion.a
                  key={index}
                  href={real.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block overflow-hidden rounded-2xl bg-gray-800 h-32 md:h-36"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <img
                    src={real.image}
                    alt={real.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kontfeel-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white font-semibold text-xs">
                        {real.title}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
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

          {/* COLONNE DROITE : FORMULAIRE DE CONTACT */}
          <motion.div
            className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-xl font-bold text-white mb-4">
              Parlons de votre projet
            </h2>

            {!isSubmitted ? (
            <>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom *"
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
                  placeholder="Parlez-nous de votre projet..."
                  rows="3"
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
               {/* Logo en bas */}
              <ExperienceFooter />
            </>
          ) : (
            <motion.div
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="text-5xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-kontfeel-pink mb-2">
                Message reçu !
              </h3>
              <p className="text-gray-300 text-sm mb-1">
                On adore déjà votre projet !
              </p>
              <p className="text-gray-400 text-xs">
                Notre équipe vous contactera plus vite qu'un découpage laser. 
              </p>
            </motion.div>
          )}
          </motion.div>

        </div>

      </motion.div>
    </div>
  );
}

export default Result;