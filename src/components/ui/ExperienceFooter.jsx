import { motion } from "framer-motion";
import logoImg from "../../assets/logo.png"; 

function ExperienceFooter({ variant = "page", className = "" }) {
  const isInline = variant === "inline";

  return (
    <motion.div
      className={[
        isInline ? "w-full text-center px-4" : "absolute bottom-6 text-center w-full px-4",
        className,
      ].join(" ")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="inline-flex flex-col items-center">
        
        {/* Texte compact */}
        <span className="text-[10px] md:text-[11px] text-gray-500 font-light uppercase tracking-[0.2em] leading-none">
          Une expérience
        </span>

        {/* Conteneur du logo */}
        <div className="relative h-6 w-24 md:w-28 flex items-center justify-center overflow-visible">
          <img
            src={logoImg}
            alt="Kontfeel"
            className="opacity-90 w-full h-auto block transform scale-[1.3] origin-top" 
            style={{ marginTop: "-4px" }} // On remonte le logo pour supprimer le vide du PNG
          />
        </div>

      </div>
    </motion.div>
  );
}

export default ExperienceFooter;








