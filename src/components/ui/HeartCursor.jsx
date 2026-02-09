import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * progress: nombre entre 0 et 1
 * ex: 0 = début, 1 = fin
 */
export default function HeartCursor({ progress = 0 }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  // Smooth follow (effet "fluide" plutôt que collé sec)
  const x = useSpring(0, { stiffness: 700, damping: 35 });
  const y = useSpring(0, { stiffness: 700, damping: 35 });

  useEffect(() => {
    const handleMove = (e) => {
      setVisible(true);
      // petit décalage pour que le coeur ne cache pas le pointeur
      const offset = 14;
      const nextX = e.clientX + offset;
      const nextY = e.clientY + offset;

      setPos({ x: nextX, y: nextY });
      x.set(nextX);
      y.set(nextY);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, [x, y]);

  // Taille du coeur selon la progression
  // 0% -> 18px, 100% -> 44px (tu peux ajuster)
  const size = 18 + progress * 26;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-[9999] select-none"
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.6
      }}
      transition={{ duration: 0.15 }}
    >
      <motion.div
        style={{ width: size, height: size }}
        className="flex items-center justify-center"
        animate={{
          // petit battement léger en continu (vivant, mais pas too much)
          scale: [1, 1.08, 1]
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* coeur en emoji (le plus rapide) */}
        <span style={{ fontSize: size }} className="drop-shadow">
          💗
        </span>
      </motion.div>
    </motion.div>
  );
}