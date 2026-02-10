import { motion } from "framer-motion";
import logoImg from "../../assets/logo.png"; 

function ExperienceFooter({ variant = "page", className = "" }) {
  const isInline = variant === "inline";

  return (
    <motion.div
      className={[
        isInline
            ? "w-full text-center px-4"
            : "fixed inset-x-0 bottom-4 text-center w-full px-4 z-50 pointer-events-none md:pointer-events-auto md:absolute md:bottom-6 md:z-auto"
            ,
        className,
      ].join(" ")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="inline-flex flex-col items-center">
        
        {/* Texte rendu plus lisible :
           - font-medium au lieu de font-light
           - tracking-[0.1em] au lieu de 0.2em pour resserrer les lettres
           - text-gray-600 pour un contraste un peu plus fort
        */}
        <span className="text-[11px] md:text-[12px] text-gray-400 font-medium uppercase tracking-[0.15em] leading-none">
          Une expérience
        </span>

        {/* Conteneur du logo */}
        <div className="relative h-7 w-20 md:w-24 flex items-center justify-center overflow-visible">
          <img
            src={logoImg}
            alt="Kontfeel"
            className="opacity-95 w-full h-auto block transform scale-[1.1] origin-top" 
            style={{ marginTop: "4px" }} // Espace légèrement augmenté pour la lisibilité
          />
        </div>

      </div>
    </motion.div>
  );
}

export default ExperienceFooter;








