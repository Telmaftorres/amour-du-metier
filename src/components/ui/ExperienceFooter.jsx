import { motion } from "framer-motion";
import logoImg from "../../assets/logo.png"; 

function ExperienceFooter({ variant = "page", className = "" }) {
  const isInline = variant === "inline";

  return (
    <motion.div
      className={[
        isInline
          ? "w-full text-center px-4"
          : "absolute bottom-8 md:bottom-12 text-center w-full px-4",
        className,
      ].join(" ")}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: isInline ? 0 : 1 }}
    >
      <div className="inline-flex items-center justify-center">
        <span className="text-sm md:text-base text-gray-500 font-light">
          Une expérience
        </span>

        {/* Conteneur serré pour “rogner” le vide éventuel du PNG */}
        <span className="inline-flex items-center overflow-hidden ml-1">
          <img
            src={logoImg}
            alt="Kontfeel"
            className={[
              "opacity-80 w-auto",
              isInline ? "h-10 md:h-12" : "h-14 md:h-16",
            ].join(" ")}
          />
        </span>
      </div>
    </motion.div>
  );
}

export default ExperienceFooter;








