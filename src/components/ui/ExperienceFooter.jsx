import { motion } from "framer-motion";
import logoImg from "../../assets/logo.png"; // <-- adapte le chemin si besoin

function ExperienceFooter() {
  return (
    <motion.div 
      className="absolute bottom-8 md:bottom-12 text-center w-full px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <p className="text-sm md:text-base text-gray-500 font-light flex items-center justify-center gap-2">
        Une expérience 
        <img 
          src={logoImg}
          alt="Kontfeel"
          className="h-5 md:h-6 w-auto inline-block"
        />
      </p>
    </motion.div>
  );
}

export default ExperienceFooter;
