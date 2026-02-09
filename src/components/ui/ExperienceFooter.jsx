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
      <p className="text-sm md:text-base text-gray-500 font-light flex items-center justify-center gap-2">
        Une expérience
        <img
          src={logoImg}
          alt="Kontfeel"
          className={isInline ? "h-10 md:h-12 w-auto opacity-80" : "h-14 md:h-16 w-auto opacity-80"}
        />
      </p>
    </motion.div>
  );
}

export default ExperienceFooter;

