import { motion } from "framer-motion";
import logoImg from "../../assets/logo.png";

function ExperienceFooter() {
  return (
    <motion.div
      className="w-full text-center px-4 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="inline-flex flex-col items-center">
        <span className="text-[11px] md:text-[12px] text-gray-400 font-medium uppercase tracking-[0.15em] leading-none">
          Une expérience
        </span>
        <div className="relative h-7 w-20 md:w-24 flex items-center justify-center overflow-visible">
          <img
            src={logoImg}
            alt="Kontfeel"
            className="opacity-95 w-full h-auto block transform scale-[1.1] origin-top"
            style={{ marginTop: "4px" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default ExperienceFooter;








