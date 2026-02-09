import { motion } from 'framer-motion';

function Logo({ withHover = false }) {
  return (
    <motion.div 
      className="absolute top-6 left-6 z-10"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 0.7, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img 
        src="/logo.png" 
        alt="Kontfeel"
        className={`h-16 w-auto opacity-80 ${withHover ? 'hover:opacity-100 transition-opacity' : ''}`}
      />
    </motion.div>
  );
}

export default Logo;