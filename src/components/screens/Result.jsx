import { motion } from 'framer-motion';

function Result({ answers, compatibilityScore }) {
  // Récupérer une phrase personnalisée depuis les réponses
  const getPersonalizedIntro = () => {
    const answerValues = Object.values(answers);
    if (answerValues.length > 0) {
      return answerValues[0].profile;
    }
    return "Vous avez du goût";
  };

  // Message principal selon le score de compatibilité
  const getMainMessage = () => {
    if (compatibilityScore >= 95) {
      return {
        title: "COUP DE FOUDRE PROFESSIONNEL !",
        intro: "C'est plus qu'un match, c'est une évidence.",
        body: "Vous ne cherchez pas un simple fournisseur, vous cherchez un partenaire qui partage votre vision. Quelqu'un qui comprend que chaque détail compte, que la qualité n'est pas négociable, et que la beauté d'un projet se construit dans la passion du travail bien fait."
      };
    } else if (compatibilityScore >= 90) {
      return {
        title: "ON PARLE LE MÊME LANGAGE !",
        intro: "C'est confirmé : nous sommes faits pour travailler ensemble.",
        body: "Vous cherchez un partenaire qui vibre autant que vous pour donner du volume à vos idées. Vous aimez quand c'est beau, quand c'est bien pensé. Ça tombe bien. Chez Kontfeel, notre moteur, c'est l'amour du travail bien fait pour le plaisir de sublimer votre marque en magasin."
      };
    } else {
      return {
        title: "UNE EXCELLENTE COMPATIBILITÉ !",
        intro: "Nous partageons la même exigence.",
        body: "Vous avez l'œil pour reconnaître la qualité et vous savez que derrière chaque belle PLV se cache un vrai savoir-faire. Chez Kontfeel, nous mettons notre passion au service de vos projets pour créer des présentoirs qui ne laissent personne indifférent."
      };
    }
  };

  const personalizedIntro = getPersonalizedIntro();
  const mainMessage = getMainMessage();

  // Images des réalisations
  const realisations = [
    {
      url: "https://www.kontfeel.fr/realisations-plv/arche-evenementielle-sur-mesure-pour-une-operation-de-noel",
      image: "https://www.kontfeel.fr/assets/realisations/arche-evenementielle-sur-mesure.jpg",
      title: "Arche événementielle Noël"
    },
    {
      url: "https://www.kontfeel.fr/realisations-plv/plv-vitrine-sur-les-champs-elysees-quand-delsey-reinvente-le-voyage-chez-monoprix",
      image: "https://www.kontfeel.fr/assets/realisations/plv-vitrine-sur-mesure-champs-elysees.jpg",
      title: "Vitrine Delsey Champs-Élysées"
    },
    {
      url: "https://www.kontfeel.fr/realisations-plv/nos-secrets-pour-une-theatralisation-de-magasin-reussie",
      image: "https://www.kontfeel.fr/assets/realisations/theatralisation-magasin-avec-plv-sur-mesure.jpg",
      title: "Théâtralisation de magasin"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <motion.div 
        className="max-w-4xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo Kontfeel discret */}
        <motion.div 
          className="absolute top-6 left-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/logo.png" 
            alt="Kontfeel"
            className="h-10 w-auto opacity-80"
          />
        </motion.div>
        
        {/* Score de compatibilité */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-kontfeel-pink bg-opacity-20 rounded-full border border-kontfeel-pink">
            <span className="text-2xl font-bold text-kontfeel-pink">{compatibilityScore}%</span>
            <span className="text-base text-gray-300">de compatibilité</span>
          </div>
        </motion.div>

        {/* Titre principal */}
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-kontfeel-pink mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {mainMessage.title}
        </motion.h1>

        {/* Message personnalisé */}
        <motion.p 
          className="text-base md:text-lg text-gray-300 mb-4 italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalizedIntro}.
        </motion.p>

        {/* Intro du message principal */}
        <motion.p 
          className="text-lg md:text-xl font-semibold text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {mainMessage.intro}
        </motion.p>

        {/* Texte principal en italique */}
        <motion.div 
          className="text-sm md:text-base text-gray-200 leading-relaxed mb-10 italic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <p className="mb-6">
            {mainMessage.body}
          </p>
        </motion.div>

        {/* Séparateur */}
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-transparent via-kontfeel-pink to-transparent mx-auto mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        />

        {/* Section Réalisations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Découvrez nos dernières réalisations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {realisations.map((real, index) => (
              <motion.a
                key={index}
                href={real.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl aspect-square bg-gray-800"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={real.image}
                  alt={real.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kontfeel-navy via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">
                      {real.title}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bouton Contact unique */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            <button
              onClick={() => window.open('https://kontfeel.fr/contact', '_blank')}
              className="px-10 py-4 bg-kontfeel-pink text-white rounded-2xl font-semibold text-lg hover:bg-opacity-90 hover:scale-105 transition-all shadow-lg"
            >
              Contactez-nous pour votre projet
            </button>
          </motion.div>
        </motion.div>

        {/* Note subtile */}
        <motion.p 
          className="text-sm text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          * Spoiler : On savait qu'on était faits l'un pour l'autre dès le départ 😉
        </motion.p>

      </motion.div>
    </div>
  );
}

export default Result;