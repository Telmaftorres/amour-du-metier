import { motion } from 'framer-motion';
import Button from '../ui/Button';

function Result({ answers }) {
    // Calculer un score basé sur les réponses (pour cohérence avec le loading)
    const getCompatibilityScore = () => {
      // Génère le même type de score que dans Loading (86-98)
      return Math.floor(Math.random() * (98 - 86 + 1)) + 86;
    };
  
    const compatibilityScore = getCompatibilityScore();
  
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
  
    return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <motion.div 
        className="max-w-3xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        {/* Icône de succès */}
        <motion.div
          className="text-4xl mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 10,
            delay: 0.2
          }}
        >
          ❤️
        </motion.div>

        {/* Score de compatibilité */}
        <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        >
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-kontfeel-pink bg-opacity-20 rounded-full border border-kontfeel-pink">
            <span className="text-3xl font-bold text-kontfeel-pink">{compatibilityScore}%</span>
            <span className="text-lg text-gray-300">de compatibilité</span>
        </div>
        </motion.div>

        {/* Titre principal */}
        <motion.h1 
        className="text-5xl font-bold text-kontfeel-pink mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        >
        {mainMessage.title}
        </motion.h1>

        {/* Message personnalisé selon réponse */}
        <motion.p 
        className="text-xl text-gray-300 mb-4 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        >
        {personalizedIntro}.
        </motion.p>

        {/* Intro du message principal */}
        <motion.p 
        className="text-2xl font-semibold text-white mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        >
        {mainMessage.intro}
        </motion.p>

        {/* Texte principal */}
        <motion.div 
        className="text-lg text-gray-200 leading-relaxed mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        >
        <p className="mb-6">
            {mainMessage.body}
        </p>
        <p className="text-xl font-semibold text-white">
            Prêt à travailler avec des passionnés ?
        </p>
        </motion.div>

        {/* Boutons CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Button 
            onClick={() => window.open('https://kontfeel.fr', '_blank')}
            variant="primary"
          >
            DÉCOUVRIR NOS CRÉATIONS EN VRAI 👀
          </Button>
          <Button 
            onClick={() => window.open('https://kontfeel.fr/contact', '_blank')}
            variant="secondary"
          >
            VISITER LE CŒUR DE NOTRE ATELIER
          </Button>
        </motion.div>

        {/* Note subtile */}
        <motion.p 
          className="text-sm text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          * Spoiler : On savait qu'on était faits l'un pour l'autre dès le départ 😉
        </motion.p>

      </motion.div>
    </div>
  );
}

export default Result;